import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del sitio',
  admin: {
    group: 'Contenido',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'DTechLab',
      label: 'Nombre del sitio',
    },
    {
      type: 'collapsible',
      label: 'Portada',
      fields: [
        {
          name: 'heroEyebrow',
          type: 'text',
          label: 'Texto superior',
        },
        {
          name: 'heroTitle',
          type: 'text',
          label: 'Título principal',
        },
        {
          name: 'heroAccent',
          type: 'text',
          label: 'Frase destacada',
        },
        {
          name: 'heroBody',
          type: 'textarea',
          label: 'Descripción',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contacto',
      fields: [
        {
          name: 'contactEmail',
          type: 'email',
          defaultValue: 'sales@dtechl.com',
          label: 'Correo',
        },
        {
          name: 'whatsappNumber',
          type: 'text',
          defaultValue: '50769837286',
          label: 'WhatsApp',
        },
        {
          name: 'instagramURL',
          type: 'text',
          defaultValue: 'https://www.instagram.com/dtechl/',
          label: 'Instagram',
        },
      ],
    },
  ],
}
