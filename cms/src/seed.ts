import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'

import config from './payload.config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const assetsRoot = path.resolve(dirname, '../../public/projects')

const projects = [
  {
    slug: 'heritage-real-estate',
    order: 1,
    title: 'Heritage Real Estate',
    category: 'Luxury real estate · Panamá',
    shortDescription:
      'Experiencia premium para descubrir proyectos inmobiliarios en Panamá y convertir el interés en conversaciones calificadas.',
    statement:
      'Una plataforma premium que transforma inventario inmobiliario en una experiencia de descubrimiento y conversación.',
    objective: 'Presentar proyectos para invertir y vivir con claridad, confianza y criterio.',
    scope: 'Estrategia · Dirección visual · UX/UI · Desarrollo · Integraciones',
    experience: 'Responsive · Catálogo · Captura de leads · Bilingüe',
    technologies: 'HTML · CSS · JavaScript · CMS · Automatizaciones',
    websiteURL: 'https://heritagerealestatepa.com/',
    assetFolder: 'heritage',
    featured: true,
  },
  {
    slug: 'sommelier-nomada',
    order: 2,
    title: 'Sommelier Nómada',
    category: 'Hospitalidad · Marca personal',
    shortDescription:
      'Una presencia digital sensorial para convertir experiencia, servicio y personalidad en una marca memorable.',
    statement:
      'Una presencia digital sensorial para convertir experiencia, servicio y personalidad en una marca memorable.',
    objective: 'Presentar catas, eventos y asesoría gastronómica desde una narrativa de autor.',
    scope: 'Estrategia · Dirección visual · UX/UI · Desarrollo web',
    experience: 'Responsive · Bilingüe · Conversión · Interacción',
    technologies: 'HTML · CSS · JavaScript · Integraciones',
    websiteURL: 'https://sommeliernomada.com/',
    assetFolder: 'sommelier',
    featured: false,
  },
  {
    slug: 'gallo-creativo',
    order: 3,
    title: 'Gallo Creativo',
    category: 'Diseño y fabricación · Panamá',
    shortDescription:
      'Una narrativa editorial donde oficio, piezas y espacios a medida se sienten antes de explicarse.',
    statement:
      'Una narrativa editorial donde oficio, piezas y espacios a medida se sienten antes de explicarse.',
    objective: 'Posicionar un estudio-taller y hacer visible la profundidad de su proceso.',
    scope: 'Dirección visual · Arquitectura · UX/UI · Desarrollo',
    experience: 'Portafolio · Casos · Movimiento · Cotización',
    technologies: 'HTML · CSS · JavaScript · Formularios',
    websiteURL: 'https://gallocreativo.com/',
    assetFolder: 'gallo',
    featured: false,
  },
  {
    slug: 'taller-dcars',
    order: 4,
    title: 'Taller D’Cars',
    category: 'Automotriz · Servicio y catálogo',
    shortDescription:
      'Un sitio comercial que organiza un servicio técnico complejo y guía al cliente hacia el diagnóstico correcto.',
    statement:
      'Un sitio comercial que organiza un servicio técnico complejo y guía al cliente hacia el diagnóstico correcto.',
    objective: 'Generar solicitudes calificadas y presentar servicios y transmisiones.',
    scope: 'Arquitectura · UX/UI · Desarrollo · Automatización',
    experience: 'Catálogo · Orientador · Formularios · WhatsApp',
    technologies: 'HTML · CSS · JavaScript · Automatizaciones',
    websiteURL: 'https://tallerdcars.com/',
    assetFolder: 'dcars',
    featured: false,
  },
  {
    slug: 'mono-solo-travel',
    order: 5,
    title: 'Mono Solo Travel',
    category: 'Turismo · Producto digital',
    shortDescription:
      'Un catálogo de experiencias que reduce la distancia entre descubrir Panamá y reservar el próximo viaje.',
    statement:
      'Un catálogo de experiencias que reduce la distancia entre descubrir Panamá y reservar el próximo viaje.',
    objective: 'Organizar experiencias turísticas y facilitar reservas y confirmaciones.',
    scope: 'Diseño de producto · UX/UI · Desarrollo · Datos',
    experience: 'Catálogo · Reservas · Confirmación · Responsive',
    technologies: 'HTML · CSS · JavaScript · Datos',
    websiteURL: 'https://monosolotravel.com/',
    assetFolder: 'mono-solo',
    featured: false,
  },
] as const

async function run() {
  const payload = await getPayload({ config })

  const upload = async (
    assetFolder: string,
    sourceName: string,
    outputName: string,
    alt: string,
  ) => {
    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: outputName } },
      limit: 1,
      overrideAccess: true,
    })
    if (existing.docs[0]) return existing.docs[0].id

    const data = await readFile(path.join(assetsRoot, assetFolder, sourceName))
    const media = await payload.create({
      collection: 'media',
      data: { alt },
      overrideAccess: true,
      file: {
        data,
        mimetype: sourceName.endsWith('.mp4') ? 'video/mp4' : 'image/png',
        name: outputName,
        size: data.byteLength,
      },
    })
    return media.id
  }

  for (const project of projects) {
    const desktopCover = await upload(
      project.assetFolder,
      'homepage.png',
      `${project.slug}-desktop.png`,
      `Portada de escritorio de ${project.title}`,
    )
    const mobileCover = await upload(
      project.assetFolder,
      'mobile.png',
      `${project.slug}-mobile.png`,
      `Portada móvil de ${project.title}`,
    )
    const tourVideo = await upload(
      project.assetFolder,
      'tour.mp4',
      `${project.slug}-tour.mp4`,
      `Recorrido visual de ${project.title}`,
    )
    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: project.slug } },
      limit: 1,
      overrideAccess: true,
    })
    const { assetFolder: _assetFolder, ...projectData } = project
    void _assetFolder
    const data = {
      ...projectData,
      desktopCover,
      mobileCover,
      tourVideo,
      _status: 'published' as const,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data,
        draft: false,
        overrideAccess: true,
      })
    } else {
      await payload.create({ collection: 'projects', data, draft: false, overrideAccess: true })
    }
    payload.logger.info(`Proyecto preparado: ${project.title}`)
  }

  await payload.updateGlobal({
    slug: 'site-settings',
    overrideAccess: true,
    data: {
      siteName: 'DTechLab',
      heroEyebrow: 'Estudio digital · Panamá',
      heroTitle: 'Diseñamos y desarrollamos',
      heroAccent: 'productos digitales con dirección propia.',
      heroBody:
        'Estrategia, diseño y desarrollo para convertir ideas de negocio en experiencias digitales claras, útiles y memorables.',
      contactEmail: 'sales@dtechl.com',
      whatsappNumber: '50769837286',
      instagramURL: 'https://www.instagram.com/dtechl/',
    },
  })

  payload.logger.info('Contenido inicial de DTechLab cargado correctamente.')
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
