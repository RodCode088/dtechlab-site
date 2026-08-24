import type { CollectionConfig } from 'payload'

const canEdit = ({ req }: { req: { user?: { role?: string } | null } }) => Boolean(req.user)

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Proyecto',
    plural: 'Proyectos',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['order', 'title', 'category', '_status', 'updatedAt'],
    group: 'Contenido',
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: canEdit,
    update: canEdit,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
  defaultSort: 'order',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Nombre del proyecto',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: {
            description: 'Identificador corto, por ejemplo: heritage-real-estate',
          },
          hooks: {
            beforeValidate: [
              ({ value, data }) => {
                if (value)
                  return String(value)
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '')
                return String(data?.title || '')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
              },
            ],
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 1,
          label: 'Orden',
          min: 1,
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Categoría',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          label: 'Proyecto destacado',
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Descripción corta',
    },
    {
      name: 'statement',
      type: 'textarea',
      required: true,
      label: 'Presentación del caso',
    },
    {
      name: 'objective',
      type: 'textarea',
      required: true,
      label: 'Objetivo',
    },
    {
      name: 'scope',
      type: 'text',
      required: true,
      label: 'Alcance',
      admin: {
        description: 'Ejemplo: Estrategia · Dirección visual · UX/UI · Desarrollo',
      },
    },
    {
      name: 'experience',
      type: 'text',
      required: true,
      label: 'Experiencia',
      admin: {
        description: 'Ejemplo: Responsive · Catálogo · Conversión · Bilingüe',
      },
    },
    {
      name: 'technologies',
      type: 'text',
      label: 'Tecnologías',
    },
    {
      name: 'websiteURL',
      type: 'text',
      required: true,
      label: 'Enlace del proyecto',
    },
    {
      type: 'collapsible',
      label: 'Recursos visuales',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'desktopCover',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Portada de escritorio',
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          name: 'mobileCover',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Portada móvil',
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          name: 'tourVideo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Video del recorrido',
          filterOptions: {
            mimeType: { contains: 'video' },
          },
        },
      ],
    },
  ],
}
