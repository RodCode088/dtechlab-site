# DTECHLAB
## Arquitectura Completa del Ecosistema
### Empresa de Sistemas Digitales — Documento de Visión Interna v1.0

---

## Estado de posicionamiento actual

Este documento describe una visión amplia de DTechLab. Para comunicación comercial actual, la unidad operativa es **DTechLab Studio**.

### Oferta actual
- Desarrollo Web
- Sistemas Web
- Integraciones y Automatización Operativa

### Roadmap
- AutoPro
- Productos futuros
- IA avanzada
- Proyectos SaaS

La oferta actual no debe mezclarse con el roadmap en materiales de venta. El roadmap sirve como dirección estratégica y evidencia de ambición técnica, no como promesa comercial inmediata.

---

> *"Las empresas siguen operando de forma manual. Nosotros diseñamos sistemas inteligentes para empresas modernas."*

---

# PARTE I — ARQUITECTURA DE MARCA

## 1.1 Identidad de la Empresa

**Nombre:** DTechLab  
**Tagline:** *Infraestructura para el Negocio Moderno*  
**Tagline secundario:** *Construido para las empresas que se mueven más rápido.*  
**Concepto de dominio:** dtechlab.systems / dtechlab.io  
**Tipo de entidad legal:** Studio Tecnológico / Empresa de Sistemas Digitales

### Esencia de Marca (una oración)
DTechLab diseña los sistemas nerviosos digitales de las empresas modernas — impulsados por IA, construidos con precisión y diseñados para operar a escala.

### Lo que DTechLab ES:
- Una empresa de infraestructura digital
- Un estudio de automatización con IA
- Un constructor de sistemas operativos empresariales
- Un integrador de sistemas premium
- Una vision de productos futuros separada de la oferta actual

### Lo que DTechLab NO ES:
- Una agencia de diseño web
- Una empresa de marketing
- Una plataforma de freelancers
- Un creador de chatbots
- Una consultoría tecnológica genérica

---

## 1.2 Matriz de Personalidad de Marca

| Dimensión | Expresión |
|-----------|-----------|
| Voz | Calmada. Precisa. Con autoridad. |
| Tono | Inteligencia medida. Sin hype. |
| Sensación visual | Diseñada con ingeniería. Oscura. Cinematográfica. |
| Registro emocional | Confianza a través de la contención |
| Energía | Quietud de alta calidad |
| Marcas de referencia | Linear Ã— SpaceX Ã— Nothing Phone |

### Vocabulario de Marca (palabras que DTechLab usa):
- Infraestructura / Sistemas / Arquitectura
- Diseñar / Construir / Desplegar / Operar
- Inteligente / Autónomo / Preciso
- Moderno / Nueva generación / Evolucionado
- Flujo de trabajo / Tubería / Orquestación
- Digital / Nativo en IA / Automatizado

### Anti-vocabulario de Marca (palabras que DTechLab nunca usa):
- Increíble / Impresionante / Revolucionario
- Disruptivo / Transformador / Innovador
- Económico / Barato / Asequible
- Soluciones / Sinergia / Apalancamiento
- Hacemos páginas web / Hacemos chatbots

---

## 1.3 Arquitectura de Marca — Divisiones

```
DTECHLAB
â”œ── DTechLab Studio      â†’ Servicios premium para clientes
â”œ── DTechLab Lab         â†’ Experimentación + Vitrina de I+D
â”œ── DTechLab Store       â†’ Mercado de activos digitales
â””── DTechLab Products    â†’ Roadmap de productos futuros
    â”œ── Orbit           â†’ CRM e inteligencia de relaciones
    â”œ── Nexus OS        â†’ Sistema operativo de automatización
    â”œ── Atlas Flow      â†’ Plataforma de orquestación de flujos
    â”œ── Pulse           â†’ Analítica empresarial + señales
    â””── Meridian        â†’ Sistema de portal para clientes
```

---

# PARTE II — SISTEMA DE IDENTIDAD VISUAL

## 2.1 Arquitectura de Color

### Paleta Principal
```
Sistema Negro:
  — Vacío:     #050507   (fondo más profundo, secciones hero)
  — Abismo:    #0A0A0F   (fondo principal)
  — Grafito:   #111118   (fondo de superficies)
  — Pizarra:   #1A1A24   (fondo de tarjetas/paneles)

Sistema Blanco:
  — Puro:      #FFFFFF   (texto principal, encabezados)
  — Niebla:    #E8E8F0   (texto de cuerpo)
  — Fantasma:  #9898A8   (texto secundario, etiquetas)
  — Susurro:   #4A4A5C   (texto silenciado/deshabilitado)

Sistema de Acento:
  — Señal:     #5B6AFF   (CTA principal, azul de interacción)
  — Hielo:     #A8B4FF   (estado hover, resplandor suave)
  — Plasma:    #8B5CF6   (acento secundario, elementos de IA)
  — Arco:      #22D3EE   (visualización de datos, indicadores en vivo)
  — Brasa:     #F97316   (solo estados de advertencia/alerta)

Sistema de Borde:
  — Línea:      rgba(255,255,255,0.06)   (divisores sutiles)
  — Resplandor: rgba(91,106,255,0.15)    (elementos enfocados)
  — Vidrio:     rgba(255,255,255,0.04)   (relleno glassmorphism)
```

### Reglas de Uso de Color
- El 80% de cualquier diseño es Vacío/Abismo/Grafito
- El azul Señal se usa con moderación — máximo 3 instancias por viewport
- Nunca usar más de 2 colores de acento simultáneamente
- Los degradados son quirúrgicos: máximo 2 paradas, basados en opacidad, no de color a color
- El blanco está reservado solo para énfasis de jerarquía

---

## 2.2 Sistema Tipográfico

### Stack de Tipografías

**Display / Hero:**  
`Geist` o `Inter Display` — peso 200–300  
Tracking ultra-fino: letter-spacing -0.04em a -0.06em  
Usado en: titulares hero, títulos de sección

**Cuerpo / Interfaz:**  
`Inter` o `Geist` — peso 300–400  
Usado en: párrafos, etiquetas UI, navegación

**Monospace / Técnico:**  
`Geist Mono` o `JetBrains Mono` — peso 400  
Usado en: fragmentos de código, valores de datos, etiquetas del sistema, métricas

**Acento / Display 2:**  
`Neue Montreal` o `DM Sans` — peso 200 itálica  
Usado en: citas, declaraciones de acento, momentos editoriales

### Escala Tipográfica
```
Display XL:  clamp(64px, 8vw, 120px) — Titulares hero
Display L:   clamp(48px, 6vw, 80px)  — Títulos de sección
Display M:   clamp(36px, 4vw, 56px)  — Títulos de subsección
Heading:     24–32px                 — Títulos de tarjetas, CTAs
Body L:      18–20px                 — Cuerpo principal
Body M:      15–16px                 — Cuerpo secundario, UI
Body S:      12–13px                 — Etiquetas, subtítulos, metadata
Mono:        13–14px                 — Datos técnicos, código
```

### Principios Tipográficos
- Los titulares siempre son de peso fino — nunca bold para display principal
- El tracking ajustado en tipos grandes crea sensación de precisión
- Altura de línea generosa en cuerpo (1.7–1.8) para legibilidad
- Monospace para cualquier número, métrica o punto de datos del sistema
- Mezcla de etiquetas en mayúsculas (tracking: +0.1em) y titulares en caja natural

---

## 2.3 Sistema Espacial (Grid y Espaciado)

### Arquitectura de Grid
- **Desktop:** Grid de 12 columnas, 24px de gutters, 80px de márgenes horizontales
- **Tablet:** Grid de 8 columnas, 20px de gutters, 40px de márgenes
- **Móvil:** Grid de 4 columnas, 16px de gutters, 20px de márgenes

### Escala de Espaciado (base de 8pt)
```
2px   — Micro (gaps de íconos)
4px   — Nano (UI ajustado)
8px   — XS
12px  — S
16px  — M (unidad base)
24px  — L
32px  — XL
48px  — 2XL
64px  — 3XL (padding interno de sección)
80px  — 4XL
120px — 5XL (separadores de sección)
160px — 6XL (quiebres de sección mayor)
```

### Principios de Layout
- Layouts asimétricos sobre centrados/simétricos
- Márgenes amplios que respiran — el contenido nunca llena el ancho completo del viewport
- Técnicas de grid desplazado: columna de texto desplazada de columna de imagen
- Etiquetas flotantes y micro-etiquetas posicionadas en ángulos inesperados (con moderación)
- El espacio negativo es contenido — el vacío es intencional

---

## 2.4 Elementos Visuales y Motivos

### Lenguaje Visual Distintivo

**1. El Substrato de Grid**  
Un grid de puntos o líneas apenas visible cubre los fondos — no como decoración sino como referencia a la precisión de ingeniería. Opacidad: 2–4%.

**2. Paneles Esmerilados (Glassmorphism — uso quirúrgico)**  
Las tarjetas y superposiciones usan `backdrop-filter: blur(20px)` con relleno casi invisible. Nunca apilado más de 1 nivel de profundidad. Siempre con tinte oscuro, nunca brillante.

**3. Líneas de Señal**  
Líneas finas horizontales o diagonales de 1px que aparecen como elementos estructurales — separando contenido, conectando anclas visuales, o actuando como indicadores animados de "carga".

**4. Artefactos de Datos**  
Capturas de UI, previsualizaciones de dashboards, diagramas del sistema y fragmentos de código usados como contenido visual — el producto ES el visual.

**5. Bordes Luminosos**  
El border-top o border-left en tarjetas usa un degradado muy sutil de Señal/Plasma a transparente — creando la sensación de iluminación interna. `border-image: linear-gradient(to bottom, #5B6AFF22, transparent)`

**6. Capas de Profundidad**  
Tres capas de profundidad distintas:  
- Capa 0: Fondo (Vacío/Abismo)  
- Capa 1: Superficies de contenido (tarjetas, paneles)  
- Capa 2: Elementos flotantes (tooltips, modales, navegación)

---

## 2.5 Iconografía y Estilo de Ilustración

### Íconos
- Solo íconos de línea — grosor de trazo de 1.5px
- Set de íconos personalizado inspirado en íconos de sistema/OS
- Esquinas afiladas con redondeo selectivo de 2px
- Sin íconos rellenos en la UI principal
- Tamaño de íconos: sistema de 16px, 20px, 24px

### Ilustraciones / Arte Visual
- Diagramas de sistema abstractos: nodos, conexiones, tuberías
- Mockups de UI en modo oscuro como contenido editorial
- Renders 3D: formas geométricas mínimas y flotantes en entornos oscuros
- Nunca caricaturas, personajes o ilustraciones decorativas
- Visualización de datos como arte: grafos de red, diagramas de flujo, diagramas de arquitectura

---

# PARTE III — ARQUITECTURA DEL SITIO WEB

## 3.1 Estructura General del Sitio

```
dtechlab.io/
â”œ── /                   â†’ Página de inicio (entrada cinematográfica)
â”œ── /studio             â†’ DTechLab Studio (servicios)
â”œ── /lab                â†’ DTechLab Lab (experimentos)
â”œ── /store              â†’ DTechLab Store (activos digitales)
â”œ── /products           â†’ Resumen del roadmap de productos
â”‚   â”œ── /orbit          â†’ Orbit CRM
â”‚   â”œ── /nexus          â†’ Nexus OS
â”‚   â”œ── /atlas          â†’ Atlas Flow
â”‚   â”œ── /pulse          â†’ Pulse Analytics
â”‚   â””── /meridian       â†’ Portal de Clientes Meridian
â”œ── /about              â†’ Empresa / Manifiesto
â”œ── /work               â†’ Casos de estudio / Proyectos seleccionados
â”œ── /journal            â†’ Contenido de largo aliento / Pensamiento sistémico
â””── /contact            â†’ Formulario de intake / calificación
```

---

## 3.2 Arquitectura de la Página de Inicio

### Concepto
La página de inicio debe sentirse como iniciar un nuevo sistema operativo por primera vez. Oscuro, preciso, vivo. No es una landing page — es un primer encuentro con una inteligencia.

---

### SECCIÃ“N 1: Entrada / Cargador
**Antes de que la página se renderice:**  
Una secuencia de arranque mínima — no una animación de carga, sino una metáfora de inicialización del sistema.  
`> inicializando sistemas dtechlab...`  
`> conexión establecida`  
Se desvanece en ~1.2 segundos. Sutil, no exagerado.

---

### SECCIÃ“N 2: Hero
**Layout:** Alto de viewport completo. Texto anclado abajo-izquierda, no centrado.

**Titular (Display XL, peso 200):**
```
El sistema operativo
para el negocio moderno.
```

**Sub-línea (Body L, color Fantasma):**
```
Diseñamos sistemas de IA, infraestructura de automatización
y plataformas digitales para empresas que operan
a un nivel diferente.
```

**Bloque CTA:**
- Principal: `Iniciar un proyecto â†’` (azul Señal, botón minimal)
- Secundario: `Ver nuestro trabajo` (fantasma/solo texto)

**Visual:**  
Lado derecho: Un wireframe de dashboard animado y renderizado en vivo — nodos del sistema conectándose, datos fluyendo, flujos de trabajo estableciéndose. No una captura de pantalla. Un visual diseñado con ingeniería.

**Fondo:**  
Negro Vacío. Un único degradado radial sutil en el centro-derecha (azul Señal, 4% de opacidad, radio de 800px). Grid de puntos al 2% de opacidad.

**Movimiento:**  
- El titular entra con revelación de caracteres escalonada (no máquina de escribir — opacidad letra por letra simultánea)
- El visual del dashboard se ensambla solo — los nodos se dibujan, las conexiones se forman
- Profundidad de paralaje entre capas de texto y visual

---

### SECCIÃ“N 3: El Problema
**Encuadre conceptual — no una lista de características**

**Columna izquierda (fija):**  
`La brecha entre donde operan los negocios y donde podrían operar no es un problema de estrategia.`  
`Es un problema de infraestructura.`

**Columna derecha (scroll):**  
Tres declaraciones numeradas que aparecen al hacer scroll:

```
01  La mayoría del software empresarial no fue construido para 2024.
    Fue construido para la década de 1990. Hojas de cálculo.
    Hilos de email. Traspasos manuales. Decisiones reactivas.

02  La IA ha cambiado lo que es posible.
    Pero la mayoría de las empresas no tienen la infraestructura
    para capturar esa posibilidad. Siguen operando en la oscuridad.

03  DTechLab construye la capa de infraestructura.
    Los sistemas que convierten la capacidad moderna de IA
    en realidad operacional — para empresas reales.
```

---

### SECCIÃ“N 4: Servicios / Resumen del Studio
**Título:** `Qué construimos`

**Tarjetas (5 en total):**

```
TARJETA 01: Sistemas de IA
─────────────────────────
Flujos de trabajo inteligentes. Operaciones automatizadas.
Lógica empresarial nativa de IA integrada en tu infraestructura.

TARJETA 02: Plataformas Digitales
─────────────────────────────────
Plataformas web personalizadas, portales de clientes y
dashboards operacionales diseñados para escala.

TARJETA 03: Infraestructura de Automatización
──────────────────────────────────────────────
Automatización de procesos de extremo a extremo. Desde el intake
hasta el cumplimiento — cero pasos manuales donde importa.

TARJETA 04: Inteligencia Empresarial
─────────────────────────────────────
Sistemas CRM, dashboards de analítica y datos operacionales
en tiempo real para la toma de decisiones.

TARJETA 05: Sistemas Internos
──────────────────────────────
Herramientas internas, sistemas de administración y software
operacional construido para cómo trabaja realmente tu equipo.
```

---

### SECCIÃ“N 5: Trabajo Seleccionado
**Título:** `Proyectos seleccionados`

**Layout:** Grid editorial en mosaico — asimétrico. No un grid uniforme.

**3–4 casos de estudio destacados:**  
Cada uno mostrado como una tarjeta oscura grande con:
- Industria del cliente (no siempre el nombre del cliente)
- Etiqueta del tipo de proyecto
- Una métrica de resultado convincente (ej., "87% de reducción en tiempo de procesamiento manual")
- Una previsualización de UI (parcial, recortada, modo oscuro)

---

### SECCIÃ“N 6: El Lab (Vitrina de experimentos)
**Título:** `Desde el lab`

**Subtítulo:** `Conceptos que estamos construyendo. Sistemas que estamos explorando. Las próximas interfaces.`

**Layout:** Grid de 3 columnas de conceptos experimentales — tarjetas más pequeñas.  
Cada una muestra un experimento de UI, un concepto de IA, o una exploración de sistema de diseño.

**Propósito:** Posiciona a DTechLab como pensando por delante de los clientes — no reactivo, sino visionario.

---

### SECCIÃ“N 7: Teaser de Productos
**Título:** `Roadmap de productos`

**Subtítulo:** `Software que construimos para nosotros mismos. Infraestructura que puedes usar.`

**Productos mostrados:**
- Orbit — Inteligencia de relaciones
- Nexus OS — Automatización empresarial
- Atlas Flow — Orquestación de flujos
- Pulse — Señales de negocio
- Meridian — Portal de clientes

**CTA:** `Explorar el roadmap â†’`

---

### SECCIÃ“N 8: Manifiesto / Declaración de Filosofía
**Sección tipográfica a ancho completo — sin imágenes**

**Texto display grande (peso 200, fino):**
```
"La mejor tecnología desaparece en el fondo.
Solo funciona. Solo fluye. Solo sabe.

Ese es el estándar al que construimos."
```

**Atribución:** `— Principios de Ingeniería DTechLab`

---

### SECCIÃ“N 9: Resumen del Proceso
**Título:** `Cómo operamos`

**Sistema de 4 pasos (no una línea de tiempo — un diagrama de sistema):**

```
[DESCUBRIMIENTO]     [ARQUITECTURA]       [INGENIERÍA]         [DESPLIEGUE]
      â†“                     â†“                   â†“                    â†“
Auditamos tus         Diseñamos el         Construimos con      Desplegamos,
sistemas existentes   blueprint del        precisión: IA,       monitoreamos e
y mapeamos las        sistema: flujos de   automatización,      iteramos — tu
brechas antes de      datos, integrac.,    plataformas y        sistema permanece
escribir una sola     y la lógica          tuberías.            vivo y
línea de código.      completa del stack.                       evolucionando.
```

---

### SECCIÃ“N 10: CTA / Contacto
**Sección oscura de viewport completo**

**Titular:**
```
Tu empresa merece
mejor infraestructura.
```

**Sub-copy:**
```
Mapeemos tus sistemas, identifiquemos las brechas,
y construyamos la arquitectura que te pone adelante.
```

**CTA:** `Solicitar una auditoría de sistemas â†’`

---

### SECCIÃ“N 11: Footer
**Oscuro, diseñado con ingeniería — no un footer estándar**

**Izquierda:** Logo DTechLab + "Empresa de Sistemas Digitales" + copyright  
**Centro:** Links de navegación en 4 columnas (Studio, Lab, Store, Productos)  
**Derecha:** Contacto + Redes sociales  
**Tira inferior:** Indicador de estado del sistema: `Todos los sistemas operativos â—` + número de versión + timestamp

---

## 3.3 Sistema de Navegación

### Navegación Desktop
- Barra superior minimal: Logo izquierda | Links centro | CTA derecha
- Fondo: transparente en hero, vidrio oscuro al hacer scroll
- Links: Color Fantasma, hover â†’ blanco, activo â†’ subrayado azul Señal
- Elementos de navegación: Studio / Lab / Store / Productos / Trabajo / Contacto
- El link `/Productos` abre un mega-menú mostrando los 5 productos con mini descripciones
- Sin hamburguesa en desktop. Nunca.

### Navegación Móvil
- Panel deslizante desde la derecha (no overlay de pantalla completa)
- Panel negro, fondo difuminado
- Números de índice en monospace antes de cada link (01, 02, 03...)
- El botón de cerrar es una X renderizada en azul Señal

---

# PARTE IV — SISTEMA DE DISEÃ‘O UI

## 4.1 Biblioteca de Componentes

### Botones
```
PRIMARIO (Señal):
  Fondo: #5B6AFF
  Texto: blanco, 14px, peso 500
  Padding: 12px 24px
  Radio: 6px
  Hover: fondo aclara a #6B7AFF, ligero resplandor de sombra
  Activo: scale(0.98)

SECUNDARIO (Fantasma):
  Fondo: transparente
  Borde: 1px solid rgba(255,255,255,0.12)
  Texto: Niebla (#E8E8F0), 14px
  Hover: fondo rgba(255,255,255,0.04), borde se ilumina

ENLACE DE TEXTO:
  Color: Fantasma, subrayado en hover
  Sufijo flecha en CTAs: â†’

DESTRUCTIVO:
  Borde: 1px solid rgba(249,115,22,0.3)
  Texto: #F97316
  Hover: fondo rgba(249,115,22,0.08)
```

### Tarjetas
```
TARJETA BASE:
  Fondo: #1A1A24 (Pizarra)
  Borde: 1px solid rgba(255,255,255,0.06)
  Radio: 12px
  Padding: 24px
  Hover transform: translateY(-2px)
  Hover transition: 200ms ease

TARJETA DESTACADA:
  + border-top: 1px solid rgba(91,106,255,0.4) — borde luminoso
  + box-shadow: 0 0 40px rgba(91,106,255,0.06)

TARJETA DE VIDRIO:
  Fondo: rgba(255,255,255,0.03)
  backdrop-filter: blur(20px)
  border: 1px solid rgba(255,255,255,0.08)
```

### Inputs
```
CAMPO:
  Fondo: rgba(255,255,255,0.04)
  Borde: 1px solid rgba(255,255,255,0.08)
  Radio: 8px
  Texto: Niebla
  Placeholder: Susurro
  Borde en foco: rgba(91,106,255,0.5)
  Resplandor en foco: box-shadow 0 0 0 3px rgba(91,106,255,0.1)

ETIQUETA:
  Fuente: Mono, 11px, mayúsculas
  Color: Fantasma
  Letter-spacing: 0.08em
  Margin-bottom: 8px
```

### Etiquetas / Badges
```
ETIQUETA DE SISTEMA:
  Fondo: rgba(255,255,255,0.06)
  Borde: 1px solid rgba(255,255,255,0.08)
  Padding: 4px 10px
  Fuente: Mono, 11px, mayúsculas
  Color: Fantasma
  Radio: 4px

INDICADOR DE ESTADO:
  Punto verde (â—) + texto mono para estado operativo
  Punto ámbar para degradado
  Punto rojo para incidente
```

---

## 4.2 Sistema de Dashboard en Modo Oscuro (para productos DTechLab)

### Navegación del Dashboard
```
Barra lateral izquierda (240px):
  Fondo: #0A0A0F
  Border-right: 1px solid rgba(255,255,255,0.06)
  
  Área del logo: 60px de altura, marca azul Señal
  Elementos nav: Ícono + Etiqueta, 40px de altura
  Estado activo: borde izquierdo azul Señal (3px) + ligero resaltado de fondo
  Grupos: Etiquetas mono en mayúsculas como encabezados de sección
  
Barra superior (56px):
  Fondo: #0A0A0F
  Border-bottom: 1px solid rgba(255,255,255,0.06)
  Breadcrumb izquierda / Acciones derecha
  Búsqueda centro (colapsada a ícono a menos que esté enfocada)
```

### Visualización de Datos
- Gráficas: azul Señal primario, Plasma secundario, Arco terciario
- Líneas de grid: rgba(255,255,255,0.04)
- Tooltips: tarjetas de vidrio con datos precisos
- Todos los números: Monospace
- Estados vacíos: Ilustración mínima + copy de instrucción breve

---

# PARTE V — FILOSOFÍA DE MOVIMIENTO

## 5.1 Principios de Movimiento

**1. Física, no animación**  
Todo movimiento debe sentirse como si obedeciera las leyes físicas. Easing basado en resortes. Desaceleración natural. Nada rebota a menos que tenga masa.

**2. Propositivo, no decorativo**  
La animación comunica estado, jerarquía y flujo — nunca por entretenimiento. Si quitar una animación rompe la comprensión, pertenece ahí. De lo contrario, cuestionarla.

**3. Contención como sofisticación**  
Los productos más premium animan lo menos posible. Las pequeñas micro-interacciones precisas señalan calidad más que las grandes transiciones de página.

**4. Precisión temporal**  
Duraciones estándar:
```
Micro:      80–100ms  (estados de botón, cambios de ícono)
Corto:     150–200ms  (hovers de tarjeta, entrada de tooltip)
Medio:     250–350ms  (transiciones de panel, apertura de drawer)
Largo:     400–600ms  (transiciones de página, entrada de hero)
Cinemato:  800ms+     (secuencias de intro, revelaciones de hero)
```

## 5.2 Patrones de Movimiento Distintivos

**Entrada de Página (Hero):**  
El contenido entra desde opacidad 0 + translateY(20px) â†’ posición natural.  
Escalonado: titular primero, sub-copy 80ms después, CTA 80ms después.  
Duración: 500ms. Easing: cubic-bezier(0.16, 1, 0.3, 1) — salida rápida, asentamiento natural.

**Secciones activadas por scroll:**  
No toda sección necesita una entrada. Reservar animaciones de entrada para bloques de contenido clave.  
Usar IntersectionObserver. Umbral: 0.15. Sin repetición al regresar con scroll.

**Hover de tarjeta:**  
Transform: translateY(-2px) + intensificación de box-shadow.  
Duración: 200ms. Easing: ease-out. Se siente magnético.

**Botón CTA:**  
El sufijo de flecha se traslada +4px en hover. Duración: 150ms. Easing: ease-out.  
El cambio de fondo es instantáneo (0ms) luego se refina. Crea sensación de snap.

**Animaciones de datos/dashboard:**  
- Contadores de números: Suben de 0 al valor objetivo en 800ms al entrar al viewport
- Líneas de gráfica: Se dibujan de izquierda a derecha en 600ms, técnica stroke-dashoffset
- Indicadores en vivo: Pulso sutil (escala 1.0 â†’ 1.15 â†’ 1.0, bucle de 2s, opacidad 0.6)

**Transiciones de página (si SPA):**  
Página saliente: opacidad 1 â†’ 0, 150ms.  
Página entrante: opacidad 0 â†’ 1, translateY(8px) â†’ 0, 250ms.  
Transición total: ~400ms. Se siente como cambiar pantallas de OS.

**La intro de "Arranque del Sistema":**  
Secuencia de entrada a la homepage:
```
0ms:    Página negra
200ms:  Grid de puntos aparece al 1% de opacidad
400ms:  La marca del logo se dibuja (animación de trayecto SVG, 400ms)
800ms:  El tagline aparece (letra por letra, intervalos de 30ms)
1200ms: El contenido del hero entra
1600ms: La barra de navegación se desliza hacia abajo
2000ms: El visual del dashboard comienza a ensamblarse
```
Puede omitirse después de la primera visita (guardado en localStorage).

---

# PARTE VI — DIRECCIÃ“N DE CONTENIDO

## 6.1 Guías de Voz Editorial

### Reglas de construcción de oraciones:
- Oraciones cortas. Raramente más de 20 palabras.
- Sin palabras de relleno: "verdaderamente", "realmente", "increíble", "poderoso", "innovador"
- Vocabulario técnico usado correctamente, no decorativamente
- Específico sobre general: "reduce la entrada manual de datos en un 94%" no "ahorra tiempo"
- Tiempo presente siempre que sea posible
- Voz activa siempre

### Fórmulas de titulares que funcionan para DTechLab:
```
[Declarar la brecha]:    "La mayoría del software empresarial fue construido para cómo
                          operaban las empresas en 2005."
[Declarar el cambio]:    "La IA no hace los malos procesos más rápidos. Los reemplaza."
[Declarar la construcción]: "Diseñamos la capa de infraestructura que hace posibles
                             las operaciones modernas."
[Declarar el resultado]: "Desde el intake hasta la entrega — completamente automatizado.
                          Cero traspasos manuales."
```

### Ejemplos de copy por tipo de sección:

**Hero:**
```
El sistema operativo
para el negocio moderno.

Diseñamos sistemas de IA, infraestructura de automatización
y plataformas digitales para empresas que operan
a un estándar diferente.
```

**Descripción de servicio:**
```
Sistemas de IA
──────────────
No añadimos IA a tu flujo de trabajo existente.
Reconstruimos el flujo de trabajo alrededor de lógica
nativa de IA — para que la automatización no sea una
característica, sino la base.
```

**Métrica de caso de estudio:**
```
Una empresa de logística redujo el tiempo de
procesamiento de pedidos de 4 horas a 11 minutos.
Infraestructura, no optimización.
```

---

# PARTE VII — ECOSISTEMA DE PRODUCTOS

## 7.1 Orbit — CRM de Inteligencia de Relaciones

**Tagline:** *Conoce tus relaciones. Dueño de tu pipeline.*

**Concepto del producto:**  
No es una base de datos de contactos. Es una capa de inteligencia viva que rastrea la salud de las relaciones, señala el movimiento de deals y te dice con quién hablar antes de que necesites preguntar.

**Capacidades principales:**
- Puntuación de relaciones con IA (decaimiento de engagement, señales de momentum)
- Pipeline inteligente con modelado de probabilidad (no solo seguimiento de etapas)
- Inteligencia de comunicación (lee patrones de email/calendario)
- Mapeo de stakeholders (quién conoce a quién, grafos de influencia)
- Recomendaciones de próxima acción (dirigidas por IA, no por reglas)

**Identidad visual:**  
Color: Índigo profundo + azul Señal. Logo: Un sistema orbital circular — dos arcos intersectando un nodo central.

**Secciones del producto:**
- Inteligencia de Pipeline
- Grafo de Relaciones
- Hub de Comunicación
- Pronóstico de Deals
- Integraciones (email, calendario, datos de LinkedIn)

---

## 7.2 Nexus OS — Sistema Operativo de Automatización Empresarial

**Tagline:** *Tu negocio, funcionando solo.*

**Concepto del producto:**  
Un sistema operativo de automatización que conecta cada herramienta en tu stack, orquesta flujos de trabajo entre ellas y maneja la lógica operacional que tu equipo actualmente hace manualmente.

**Capacidades principales:**
- Constructor visual de flujos de trabajo (drag-and-drop + asistencia de IA)
- Triggers y ac

