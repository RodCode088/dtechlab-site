# Plan de ejecución — DTechLab + WordPress

## Objetivo

Llevar dtechl.com a un nivel comercial comparable con AgentFire sin copiar su identidad: una propuesta clara, oferta comprable, prueba social, casos con resultados, rutas de conversión y un sistema editorial mantenible.

WordPress funcionará como CMS headless. El sitio público conservará un frontend propio, prerenderizado y orientado a rendimiento.

## Arquitectura objetivo

- `dtechl.com`: frontend Astro estático.
- `cms.dtechl.com`: WordPress administrado, sin tema público relevante.
- WordPress REST API: fuente de contenido estructurado.
- Build: Astro consulta WordPress, valida los datos y genera HTML estático.
- Publicación: un webhook de WordPress dispara un nuevo despliegue.
- Formularios: se conserva inicialmente la integración actual y después se migra a un endpoint con analítica y protección antispam.
- Secretos: nunca se exponen en el navegador. Las credenciales de integración viven solo en el entorno de despliegue.

## Principios del proyecto

1. No detener la web actual durante la migración.
2. Migrar primero la presentación sin cambiar su comportamiento.
3. Separar contenido de diseño: WordPress administra datos; el frontend controla la experiencia.
4. Publicar por fases pequeñas y reversibles.
5. Medir formularios, WhatsApp, llamadas y agenda antes de comprar tráfico.
6. Mantener HTML semántico, accesibilidad WCAG AA, SEO técnico y buen rendimiento móvil.

## Modelo editorial en WordPress

### Ajustes del sitio

- Propuesta principal.
- Descripción corta.
- CTAs.
- Información de contacto.
- Redes sociales.
- Métricas generales.
- Metadatos sociales y SEO por defecto.

### Proyectos

- Nombre y slug.
- Sector y tipo de proyecto.
- Resumen comercial.
- Problema inicial.
- Objetivo.
- Solución y alcance.
- Tecnologías.
- Funcionalidades.
- Resultados medibles.
- Testimonio relacionado.
- Imágenes de escritorio y móvil.
- Video de recorrido.
- URL pública.
- Estado destacado y orden.
- Título, descripción e imagen SEO.

### Servicios

- Nombre.
- Problema que resuelve.
- Resultado prometido.
- Entregables.
- Duración estimada.
- Precio inicial o rango.
- CTA.

### Paquetes

- Nombre.
- Cliente recomendado.
- Alcance.
- Entregables incluidos.
- Exclusiones.
- Duración.
- Precio inicial o rango.
- Servicio destacado.

### Testimonios

- Texto.
- Nombre y cargo.
- Empresa.
- Fotografía y logo.
- Proyecto relacionado.
- Autorización de publicación.

### Preguntas frecuentes

- Pregunta.
- Respuesta.
- Categoría.
- Orden.

### Páginas y landings

- Hero.
- Audiencia.
- Problema.
- Beneficios.
- Casos relacionados.
- Paquete recomendado.
- Preguntas frecuentes.
- CTA.
- Configuración SEO.

## Fases de ejecución

### Fase 0 — Línea base y protección

Entregables:

- Inventario de páginas, componentes, scripts, formularios y activos.
- Capturas de referencia en escritorio y móvil.
- Auditoría de rendimiento, accesibilidad, SEO y enlaces.
- Registro de comportamiento esperado de carruseles, videos y asistente.
- Separación clara de cambios existentes del usuario.

Criterio de salida:

- Podemos demostrar que la migración no rompe ninguna funcionalidad actual.

### Fase 1 — Fundación Astro

Entregables:

- Proyecto Astro dentro del repositorio.
- Componentes para header, hero, botones, proyectos, casos, formularios y footer.
- Migración visual 1:1 de inicio y portafolio.
- Conservación de URLs `/` y `/portafolio`.
- Sitemap, robots, canonical, Open Graph y página 404 generados desde el build.
- Pruebas de regresión visual y funcional.

Criterio de salida:

- El nuevo build reproduce el sitio actual con paridad visual y funcional.

### Fase 2 — WordPress base

La construcción no esperará por el hosting. Primero se levantará una instancia local reproducible; la instancia administrada se provisionará antes de integrar el flujo de publicación.

Entregables:

- WordPress local para desarrollo y pruebas.
- Configuración documentada para reproducir el entorno.
- Usuario administrador individual y usuario de integración con permisos mínimos.
- Plugin propio `dtechlab-content`.
- Tipos de contenido y campos del modelo editorial.
- REST API habilitada para el contenido público.
- WordPress administrado en `cms.dtechl.com`, con HTTPS, backups y entorno de pruebas, antes de la conexión de producción.
- Roles, backups, actualizaciones, 2FA y endurecimiento básico.
- Desactivación de edición de archivos desde wp-admin.

Criterio de salida:

- Un editor puede crear un proyecto completo sin tocar código y verlo mediante la API.

### Fase 3 — Conector WordPress → Astro

Entregables:

- Cliente REST con URL configurable mediante variables de entorno.
- Esquemas de validación para impedir builds con contenido incompleto.
- Colecciones para proyectos, servicios, paquetes, testimonios y FAQs.
- Fallback local para desarrollo y para recuperación ante caídas del CMS.
- Paginación y manejo de errores.
- Webhook de publicación hacia el proveedor de despliegue.

Criterio de salida:

- Publicar o editar contenido en WordPress genera una nueva versión estática del sitio sin editar el repositorio.

### Fase 4 — Migración de contenido

Entregables:

- Carga de los seis proyectos actuales.
- Importación de imágenes, videos y metadatos.
- Revisión editorial de textos.
- Redirecciones si cambia alguna URL.
- Lista de verificación de integridad de medios y enlaces.

Criterio de salida:

- Todo el contenido visible se obtiene de WordPress y mantiene su presentación.

### Fase 5 — Rediseño comercial de la portada

Orden de bloques:

1. Hero con resultado, demostración visual y CTA.
2. Logos y cifras de confianza.
3. Soluciones o paquetes.
4. Casos destacados con resultados.
5. Proceso de trabajo.
6. Capacidades.
7. Testimonios.
8. Preguntas frecuentes.
9. CTA final y contacto.

Entregables:

- Copy definitivo.
- Diseño de escritorio y móvil.
- Movimiento con alternativa `prefers-reduced-motion`.
- Componentes editables desde WordPress.
- Revisión de jerarquía, legibilidad, contraste y estados interactivos.

Criterio de salida:

- En el primer viewport se entiende qué hace DTechLab, qué resultado ofrece y cuál es el siguiente paso.

### Fase 6 — Oferta y prueba social

Entregables:

- Tres paquetes iniciales.
- Sección de proceso.
- Mínimo tres testimonios verificables.
- Métricas y resultados permitidos por los clientes.
- Preguntas frecuentes comerciales.
- Páginas de servicio y casos individuales.

Criterio de salida:

- Un prospecto puede evaluar alcance, proceso, evidencia y siguiente paso sin depender de una llamada exploratoria.

### Fase 7 — Conversión y medición

Entregables:

- Formulario unificado y calificación por tipo de proyecto, plazo y rango de inversión.
- Página de confirmación.
- Agenda integrada.
- Eventos para formulario, WhatsApp, email, llamada, agenda y casos.
- Consentimiento y política de privacidad acordes a las herramientas instaladas.
- Preservación de UTM y fuente del lead.

Criterio de salida:

- Cada conversión puede atribuirse a una fuente y comprobarse de extremo a extremo.

### Fase 8 — Landings especializadas

Entregables iniciales:

- `/firmas-profesionales`.
- `/real-estate`.
- Mensaje, prueba, casos, FAQ y CTA específicos para cada audiencia.
- Plantilla reutilizable para nuevas audiencias.

Criterio de salida:

- Cada anuncio puede dirigir a una página cuyo mensaje coincide con la intención de la campaña.

### Fase 9 — QA, lanzamiento y mejora continua

Entregables:

- Pruebas en navegadores y dispositivos.
- Auditoría de rendimiento, accesibilidad y SEO.
- Validación de formularios, webhooks, sitemap y datos estructurados.
- Monitoreo de errores y disponibilidad.
- Checklist de publicación y reversión.
- Tablero mensual de visitas, leads, tasa de conversión y calidad de leads.

Criterio de salida:

- El sitio pasa QA, puede revertirse con seguridad y cuenta con una línea base de medición.

## Orden inmediato de trabajo

1. Completar la línea base técnica y visual.
2. Crear la fundación Astro con paridad del sitio actual.
3. Levantar WordPress local y construir el plugin y el modelo editorial.
4. Conectar el WordPress local al build.
5. Elegir y provisionar el alojamiento de WordPress.
6. Migrar los proyectos actuales.
7. Implementar el nuevo hero y la nueva arquitectura de portada.
8. Incorporar paquetes, proceso, prueba social y FAQs.
9. Implementar conversión y analítica.
10. Crear landings especializadas.

## Decisiones que no deben bloquear el inicio

- Nicho definitivo: se puede validar después mediante landings.
- Precios exactos: los componentes aceptarán precio, rango o "desde".
- Agenda definitiva: se implementará detrás de una interfaz intercambiable.
- Proveedor de WordPress: la integración usará el REST API estándar.
- Proveedor de despliegue: el webhook se adapta cuando confirmemos el hosting actual.

## Riesgos y mitigaciones

- Dependencia de WordPress: build estático y fallback local.
- Plugins vulnerables: conjunto mínimo, actualizaciones y backups.
- Contenido incompleto: esquemas obligatorios y validación de build.
- Cambios visuales accidentales: capturas de referencia y regresión visual.
- Caída del CMS: el sitio publicado continúa funcionando porque no consulta WordPress en cada visita.
- Pérdida de SEO: URLs estables, redirecciones, canonical y sitemap verificados.

## Definición de terminado

El proyecto se considera completo cuando:

- WordPress administra el contenido acordado.
- La web pública no depende de WordPress en tiempo real.
- La portada presenta propuesta, prueba, oferta, proceso y conversión.
- Cada proyecto tiene una página de caso indexable.
- Los formularios y CTAs están medidos.
- El sitio supera QA visual, funcional, SEO y accesibilidad.
- Existe documentación para editar contenido, publicar y recuperar una versión anterior.
