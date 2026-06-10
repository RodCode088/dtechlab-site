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
    'hero.line1':        { en: 'A serious',              es: 'Una base' },
    'hero.line2':        { en: 'digital base',           es: 'digital seria' },
    'hero.line3':        { en: 'ready to grow.',         es: 'lista para crecer.' },
    'hero.sub':          { en: 'DTechLab Studio designs and builds professional websites, web systems, and operational integrations for businesses that need a serious digital base.',
                           es: 'DTechLab Studio diseña y construye sitios web profesionales, sistemas web e integraciones operativas para negocios que necesitan una base digital seria.' },
    'hero.cta.primary':  { en: 'Start a project',        es: 'Comenzar proyecto' },
    'hero.cta.secondary':{ en: 'View our work',          es: 'Ver nuestro trabajo' },

    // PROBLEM SECTION
    'problem.label':     { en: 'The gap',                es: 'La brecha' },
    'problem.title':     { en: 'Many businesses need a clearer digital base.',
                           es: 'Muchos negocios necesitan una base digital más clara.' },
    'problem.p1':        { en: 'Your website, forms, messages, and client requests should work together instead of living in disconnected tools.',
                           es: 'Tu web, formularios, mensajes y solicitudes deberían trabajar juntos en vez de vivir en herramientas desconectadas.' },
    'problem.p2':        { en: 'This is not a technology problem. It is a systems problem.',
                           es: 'Esto no es un problema de tecnología. Es un problema de sistemas.' },

    // SERVICES SECTION
    'services.label':    { en: 'What we build',          es: 'Qué construimos' },
    'services.title':    { en: 'Web, systems, and operational integrations.',es: 'Web, sistemas e integraciones operativas.' },
    'services.sub':      { en: 'Defined scope, professional implementation, and useful digital tools.',
                           es: 'Alcance definido, implementación profesional y herramientas digitales útiles.' },

    // SERVICE CARDS
    'service.web.name':  { en: 'Web Systems',            es: 'Sistemas Web' },
    'service.web.desc':  { en: 'Professional websites, catalogs, and business pages built with clear structure and technical care.',
                           es: 'Sitios profesionales, catálogos y páginas de negocio con estructura clara y criterio técnico.' },
    'service.auto.name': { en: 'Integrations and Operational Automation', es: 'Integraciones y Automatización Operativa' },
    'service.auto.desc': { en: 'Operational integrations that connect forms, notifications, sheets, calendars, email, and WhatsApp links.',
                           es: 'Integraciones operativas que conectan formularios, notificaciones, hojas, calendarios, email y enlaces de WhatsApp.' },
    'service.saas.name': { en: 'Future Products',        es: 'Productos Futuros' },
    'service.saas.desc': { en: 'Future product initiatives kept separate from the current Studio offer.',
                           es: 'Iniciativas futuras de producto separadas de la oferta actual de Studio.' },
    'service.crm.name':  { en: 'Web Systems',            es: 'Sistemas Web' },
    'service.crm.desc':  { en: 'Bookings, admin panels, editable catalogs, portals, and request records when a website is no longer enough.',
                           es: 'Reservas, paneles, catálogos administrables, portales y registros de solicitudes cuando una web ya no alcanza.' },
    'service.ai.name':   { en: 'Roadmap',                es: 'Roadmap' },
    'service.ai.desc':   { en: 'Advanced AI and SaaS concepts remain part of the roadmap, not the main current offer.',
                           es: 'IA avanzada y conceptos SaaS permanecen en el roadmap, no en la oferta principal actual.' },

    // PRODUCTS SECTION
    'products.label':    { en: 'Roadmap',                es: 'Roadmap' },
    'products.title':    { en: 'Roadmap products kept separate from today’s Studio offer.',
                           es: 'Productos de roadmap separados de la oferta actual de Studio.' },

    // PRODUCT NAMES & TYPES
    'product.autopro.type': { en: 'Workshop OS',         es: 'Workshop OS' },
    'product.autopro.desc': { en: 'The operating system for auto repair shops. Work orders, CRM, inventory, finance, and multi-branch — all connected.',
                              es: 'El sistema operativo para talleres mecánicos. Órdenes, CRM, inventario, finanzas y multi-sucursal — todo conectado.' },
    'product.autopro.status':{ en: 'Live',               es: 'En vivo' },
    'product.orbit.type':   { en: 'CRM Platform',        es: 'CRM Platform' },
    'product.orbit.desc':   { en: 'Future CRM and relationship tracking concept.',
                              es: 'Concepto futuro de CRM y seguimiento comercial.' },
    'product.nexus.type':   { en: 'Automation OS',       es: 'Automatización OS' },
    'product.nexus.desc':   { en: 'Future operational automation concept.',
                              es: 'Concepto futuro de automatización operativa.' },
    'product.atlas.type':   { en: 'Workflow Builder',    es: 'Workflow Builder' },
    'product.atlas.desc':   { en: 'Visual process orchestration. Map, automate, and monitor every operational workflow in your business.',
                              es: 'Orquestación visual de procesos. Mapea, automatiza y monitorea cada flujo operacional.' },
    'product.pulse.type':   { en: 'Intelligence Layer',  es: 'Capa de Inteligencia' },
    'product.pulse.desc':   { en: 'Future reporting and business signals concept.',
                              es: 'Concepto futuro de reportes y señales de negocio.' },
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
