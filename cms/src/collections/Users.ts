import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Usuario',
    plural: 'Usuarios',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'role', 'updatedAt'],
  },
  auth: {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  access: {
    admin: ({ req }) => Boolean(req.user),
    create: async ({ req }) => {
      if (req.user?.role === 'admin') return true
      const result = await req.payload.count({ collection: 'users', overrideAccess: true })
      return result.totalDocs === 0
    },
    read: ({ req }) => {
      if (req.user?.role === 'admin') return true
      if (!req.user) return false
      return { id: { equals: req.user.id } }
    },
    update: ({ req }) => {
      if (req.user?.role === 'admin') return true
      if (!req.user) return false
      return { id: { equals: req.user.id } }
    },
    delete: ({ req }) => req.user?.role === 'admin',
    unlock: ({ req }) => req.user?.role === 'admin',
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== 'create') return data
        const result = await req.payload.count({ collection: 'users', overrideAccess: true })
        if (result.totalDocs === 0) data.role = 'admin'
        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Rol',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        create: ({ req }) => !req.user || req.user.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
      },
    },
  ],
}
