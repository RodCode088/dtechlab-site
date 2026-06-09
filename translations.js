/**
 * DTechLab — Translation System
 * Central string registry for EN/ES.
 *
 * Usage in HTML:
 *   <script src="translations.js"></script>
 *   <script>DTechLab.setLang('es');</script>
 *
 * Or via URL param: ?lang=es
 *
 * Mark elements with data-i18n="key":
 *   <h1 data-i18n="hero.title"></h1>
 */

const DTechLab = (() => {

  // ── STRING REGISTRY ────────────────────────────────────────────────────────

  const strings = {

    // NAV
    'nav.studio':        { en: 'Studio',       es: 'Studio' },
    'nav.products':      { en: 'Products',      es: 'Productos' },
    'nav.work':          { en: 'Work',           es: 'Trabajo' },
    'nav.lab':           { en: 'Lab',            es: 'Lab' },
    'nav.store':         { en: 'Store',          es: 'Tienda' },
    'nav.cta':           { en: 'Start a project',es: 'Comenzar proyecto' },

    // HERO
    'hero.line1':        { en: 'The operating',          es: 'El sistema' },
    'hero.line2':        { en: 'system for',             es: 'operativo para el' },
    'hero.line3':        { en: 'modern business.',       es: 'negocio moderno.' },
    'hero.sub':          { en: 'We design, build, and ship digital systems — websites, automation, SaaS products, and AI tools — for businesses that want to operate at a different level.',
                           es: 'Diseñamos, construimos y lanzamos sistemas digitales — sitios web, automatización, productos SaaS y herramientas IA — para empresas que quieren operar en otro nivel.' },
    'hero.cta.primary':  { en: 'Start a project',        es: 'Comenzar proyecto' },
    'hero.cta.secondary':{ en: 'View our work',          es: 'Ver nuestro trabajo' },

    // PROBLEM SECTION
    'problem.label':     { en: 'The gap',                es: 'La brecha' },
    'problem.title':     { en: 'Most businesses run on systems built for the past.',
                           es: 'La mayoría de los negocios operan con sistemas del pasado.' },
    'problem.p1':        { en: 'Your competitors are automating. Your tools are not talking to each other. Your team is stuck doing work that should already be done by software.',
                           es: 'Tus competidores están automatizando. Tus herramientas no se comunican. Tu equipo está atrapado haciendo trabajo que ya debería hacer el software.' },
    'problem.p2':        { en: 'This is not a technology problem. It is a systems problem.',
                           es: 'Esto no es un problema de tecnología. Es un problema de sistemas.' },

    // SERVICES SECTION
    'services.label':    { en: 'What we build',          es: 'Qué construimos' },
    'services.title':    { en: 'End-to-end digital systems.',es: 'Sistemas digitales de punta a punta.' },
    'services.sub':      { en: 'Not just design. Not just code. Complete systems that work.',
                           es: 'No solo diseño. No solo código. Sistemas completos que funcionan.' },

    // SERVICE CARDS
    'service.web.name':  { en: 'Web Systems',            es: 'Sistemas Web' },
    'service.web.desc':  { en: 'Cinematic websites and digital experiences that position your brand at the top of its category.',
                           es: 'Sitios web cinematográficos y experiencias digitales que posicionan tu marca en la cima de su categoría.' },
    'service.auto.name': { en: 'Automation',             es: 'Automatización' },
    'service.auto.desc': { en: 'Intelligent workflows that eliminate manual work and connect your entire operational stack.',
                           es: 'Flujos de trabajo inteligentes que eliminan el trabajo manual y conectan toda tu operación.' },
    'service.saas.name': { en: 'SaaS Products',          es: 'Productos SaaS' },
    'service.saas.desc': { en: 'We design and build software products from zero to launch — architecture, interface, and infrastructure.',
                           es: 'Diseñamos y construimos productos de software de cero al lanzamiento — arquitectura, interfaz e infraestructura.' },
    'service.crm.name':  { en: 'CRM & Intelligence',     es: 'CRM e Inteligencia' },
    'service.crm.desc':  { en: 'Custom CRM systems and AI dashboards built around how your business actually operates.',
                           es: 'Sistemas CRM personalizados y dashboards de IA construidos alrededor de cómo opera tu negocio.' },
    'service.ai.name':   { en: 'AI Integration',         es: 'Integración IA' },
    'service.ai.desc':   { en: 'AI assistants, document intelligence, and predictive models integrated directly into your workflow.',
                           es: 'Asistentes IA, inteligencia documental y modelos predictivos integrados directamente en tu flujo de trabajo.' },

    // PRODUCTS SECTION
    'products.label':    { en: 'The product ecosystem',  es: 'El ecosistema de productos' },
    'products.title':    { en: 'Software we engineer for businesses that operate at scale.',
                           es: 'Software que diseñamos para empresas que operan a escala.' },

    // PRODUCT NAMES & TYPES
    'product.autopro.type': { en: 'Workshop OS',         es: 'Workshop OS' },
    'product.autopro.desc': { en: 'The operating system for auto repair shops. Work orders, CRM, inventory, finance, and multi-branch — all connected.',
                              es: 'El sistema operativo para talleres mecánicos. Órdenes, CRM, inventario, finanzas y multi-sucursal — todo conectado.' },
    'product.autopro.status':{ en: 'Live',               es: 'En vivo' },
    'product.orbit.type':   { en: 'CRM Platform',        es: 'CRM Platform' },
    'product.orbit.desc':   { en: 'Relationship intelligence. AI-powered pipeline with deal probability modeling and next-action recommendations.',
                              es: 'Inteligencia de relaciones. Pipeline con IA, modelado de probabilidad de cierre y recomendaciones de siguiente acción.' },
    'product.nexus.type':   { en: 'Automation OS',       es: 'Automatización OS' },
    'product.nexus.desc':   { en: 'Business automation operating system. Connect your entire stack and orchestrate every workflow across it.',
                              es: 'Sistema operativo de automatización empresarial. Conecta todo tu stack y orquesta cada flujo de trabajo.' },
    'product.atlas.type':   { en: 'Workflow Builder',    es: 'Workflow Builder' },
    'product.atlas.desc':   { en: 'Visual process orchestration. Map, automate, and monitor every operational workflow in your business.',
                              es: 'Orquestación visual de procesos. Mapea, automatiza y monitorea cada flujo operacional.' },
    'product.pulse.type':   { en: 'Intelligence Layer',  es: 'Capa de Inteligencia' },
    'product.pulse.desc':   { en: 'Live business signals. AI anomaly detection and executive briefings that surface what matters before you ask.',
                              es: 'Señales de negocio en vivo. Detección de anomalías con IA y reportes ejecutivos que muestran lo que importa antes de que preguntes.' },
    'product.meridian.type':{ en: 'Client Portal',       es: 'Portal de Clientes' },
    'product.meridian.desc':{ en: 'Branded client portals with project tracking, asset delivery, and approval workflows.',
                              es: 'Portales de cliente con seguimiento de proyectos, entrega de assets y flujos de aprobación.' },

    // STATUS LABELS
    'status.live':       { en: 'Live',                   es: 'En vivo' },
    'status.beta':       { en: 'Beta',                   es: 'Beta' },
    'status.active':     { en: 'Active',                 es: 'Activo' },
    'status.dev':        { en: 'In development',         es: 'En desarrollo' },

    // MANIFESTO
    'manifesto.quote':   { en: '"Most companies buy software. We think in systems."',
                           es: '"La mayoría de las empresas compra software. Nosotros pensamos en sistemas."' },
    'manifesto.attr':    { en: 'DTechLab · Design Philosophy',
                           es: 'DTechLab · Filosofía de Diseño' },

    // CTA SECTION
    'cta.label':         { en: 'Ready to build',         es: 'Listo para construir' },
    'cta.title':         { en: "Let's engineer your next system.",
                           es: 'Construyamos tu próximo sistema.' },
    'cta.sub':           { en: 'Tell us what you need. We will tell you how to build it right.',
                           es: 'Cuéntanos qué necesitas. Te diremos cómo construirlo bien.' },
    'cta.primary':       { en: 'Start a project',        es: 'Comenzar proyecto' },
    'cta.secondary':     { en: 'Schedule a call',        es: 'Agendar llamada' },

    // FOOTER
    'footer.tagline':    { en: 'Digital Systems Company', es: 'Empresa de Sistemas Digitales' },
    'footer.rights':     { en: 'All rights reserved.',   es: 'Todos los derechos reservados.' },

    // STORE
    'store.label':       { en: 'Digital assets',         es: 'Assets digitales' },
    'store.title':       { en: 'Built by DTechLab. Ready to deploy.',
                           es: 'Construido por DTechLab. Listo para desplegar.' },
    'store.sub':         { en: 'Templates, systems, and tools engineered to the same standard as our client work.',
                           es: 'Templates, sistemas y herramientas construidos al mismo estándar que nuestro trabajo con clientes.' },
    'store.cta':         { en: 'Browse the store',       es: 'Ver la tienda' },

    // PROPOSAL
    'proposal.prepared': { en: 'Prepared for',           es: 'Preparado para' },
    'proposal.by':       { en: 'Prepared by',            es: 'Preparado por' },
    'proposal.date':     { en: 'Date',                   es: 'Fecha' },
    'proposal.valid':    { en: 'Valid for 30 days',      es: 'Válido por 30 días' },
    'proposal.overview': { en: 'Overview',               es: 'Resumen ejecutivo' },
    'proposal.scope':    { en: 'Scope of Work',          es: 'Alcance del trabajo' },
    'proposal.timeline': { en: 'Timeline',               es: 'Cronograma' },
    'proposal.invest':   { en: 'Investment',             es: 'Inversión' },
    'proposal.next':     { en: 'Next Steps',             es: 'Próximos pasos' },
    'proposal.accept':   { en: 'Accept proposal',        es: 'Aceptar propuesta' },
  };

  // ── ENGINE ─────────────────────────────────────────────────────────────────

  let currentLang = 'en';

  function detectLang() {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'es' || param === 'en') return param;
    const stored = localStorage.getItem('tl_lang');
    if (stored) return stored;
    const browser = navigator.language?.slice(0, 2);
    return browser === 'es' ? 'es' : 'en';
  }

  function t(key, lang) {
    const l = lang || currentLang;
    const entry = strings[key];
    if (!entry) { console.warn(`[DTechLab i18n] Missing key: "${key}"`); return key; }
    return entry[l] || entry['en'] || key;
  }

  function applyToDOM(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr'); // e.g. "placeholder"
      const text = t(key, lang);
      if (attr) { el.setAttribute(attr, text); }
      else { el.textContent = text; }
    });
    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('tl_lang', lang);
    applyToDOM(lang);
    // Update any toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('data-lang-toggle', lang === 'en' ? 'es' : 'en');
    });
  }

  function init() {
    currentLang = detectLang();
    applyToDOM(currentLang);
    // Wire up toggle buttons automatically
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang-toggle') || (currentLang === 'en' ? 'es' : 'en');
        setLang(target);
      });
    });
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { t, setLang, getLang: () => currentLang, strings, init };

})();

/**
 * HOW TO USE
 * ──────────────────────────────────────────────────────────────────────────
 *
 * 1. INCLUDE IN HTML:
 *    <script src="translations.js"></script>
 *
 * 2. MARK ELEMENTS:
 *    <h1 data-i18n="hero.title"></h1>
 *    <input data-i18n="search.placeholder" data-i18n-attr="placeholder">
 *
 * 3. ADD A LANGUAGE TOGGLE BUTTON:
 *    <button data-lang-toggle="es">ES</button>
 *
 * 4. FORCE A LANGUAGE:
 *    <script>DTechLab.setLang('es');</script>
 *    Or via URL: https://dtechlab.io?lang=es
 *
 * 5. USE IN JS:
 *    DTechLab.t('hero.title')         // → current lang
 *    DTechLab.t('hero.title', 'es')   // → force español
 *
 * 6. ADD NEW STRINGS:
 *    In the strings object above, add:
 *    'section.key': { en: 'English text', es: 'Texto en español' }
 *
 * DETECTION ORDER:
 *    URL param (?lang=es) → localStorage → browser language → default EN
 * ──────────────────────────────────────────────────────────────────────────
 */
