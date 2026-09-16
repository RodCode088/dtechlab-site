document.documentElement.classList.add('has-js');
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash || location.hash === '#top') window.scrollTo(0, 0);

const projectData = [
  { title:'Heritage Real Estate', type:'Luxury real estate · Plataforma comercial', description:'Experiencia premium para descubrir proyectos inmobiliarios en Panamá y convertir el interés en conversaciones calificadas.', role:'Dirección visual, experiencia, desarrollo e integraciones.', stack:'HTML · CSS · JavaScript · CMS · Automatizaciones', link:'https://heritagerealestatepa.com/' },
  { title:'Sommelier Nómada', type:'Hospitalidad · Servicios y eventos', description:'Sitio de autor para presentar catas, maridajes, eventos y asesoría gastronómica con una experiencia envolvente y sofisticada.', role:'Estrategia, dirección visual, diseño de interfaz y desarrollo web.', stack:'HTML · CSS · JavaScript · Animación · Automatizaciones', link:'https://sommeliernomada.com/' },
  { title:'Gallo Creativo', type:'Estudio-taller · Sitio institucional', description:'Sitio institucional para un estudio-taller panameño: la web presenta su trabajo, disciplinas y contacto con una narrativa visual editorial.', role:'Dirección visual, diseño de interfaz y desarrollo web.', stack:'HTML · CSS · JavaScript · GSAP · Lenis', link:'https://gallocreativo.com/' },
  { title:'Taller D’Cars', type:'Servicios automotrices · Sitio comercial', description:'Sitio comercial para un centro especializado en diagnóstico y soluciones para transmisiones automáticas en Panamá.', role:'Arquitectura de información, interfaz y desarrollo frontend.', stack:'HTML · CSS · JavaScript', link:'https://tallerdcars.com/' },
  { title:'Mono Solo Travel', type:'Turismo · Catálogo de experiencias', description:'Catálogo público de experiencias turísticas con reservas online, datos de contacto y confirmación por token.', role:'Diseño de interfaz y desarrollo de producto web.', stack:'JavaScript · CSS · Cloudflare Pages', link:'https://monosolotravel.com/' }
];

const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.matchMedia('(max-width: 800px)').matches;
document.addEventListener('keydown', event => { if (event.key === 'Tab') document.body.classList.add('keyboard-nav'); });
document.addEventListener('pointerdown', () => document.body.classList.remove('keyboard-nav'), { passive:true });

const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 28);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive:true });

const closeMenu = () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
};
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('hashchange', closeMenu);
window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); }, { passive:true });

const tetrisObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.dataset.tetrisVisible === 'true') return;
      entry.target.dataset.tetrisVisible = 'true';
      entry.target.classList.remove('is-set');
      void entry.target.offsetWidth;
      entry.target.classList.add('is-set');
      return;
    }
    entry.target.dataset.tetrisVisible = 'false';
    entry.target.classList.remove('is-set');
  });
}, { rootMargin:'0px 0px -8% 0px', threshold:.06 }) : null;
const createTetrisLetters = () => {
  document.querySelectorAll('.tetris-title').forEach((element, titleIndex) => {
    if (element.dataset.tetrisReady) return;
    const text = element.textContent || '';
    if (!element.hasAttribute('aria-label')) element.setAttribute('aria-label', text);
    element.textContent = '';
    const noise = value => {
      const raw = Math.sin(value * 12.9898 + titleIndex * 78.233) * 43758.5453;
      return raw - Math.floor(raw);
    };
    let letterIndex = 0;
    text.split(/(\s+)/).forEach(part => {
      if (/^\s+$/.test(part)) {
        element.appendChild(document.createTextNode(' '));
        return;
      }
      const word = document.createElement('span');
      word.className = 'tetris-word';
      [...part].forEach(character => {
        const letter = document.createElement('span');
        const isLogoT = character.toLowerCase() === 't';
        letter.className = isLogoT ? 'tetris-letter tetris-logo-letter' : 'tetris-letter';
        if (isLogoT) {
          const mark = document.createElement('img');
          mark.src = '/brand/dtechlab-mark-blue.svg';
          mark.alt = '';
          mark.setAttribute('aria-hidden', 'true');
          letter.setAttribute('aria-label', character);
          letter.appendChild(mark);
        } else {
          letter.textContent = character;
        }
        const x = Math.round((noise(letterIndex * 4 + 1) - .5) * 1080);
        const y = Math.round((noise(letterIndex * 4 + 2) - .5) * 760);
        const r = Math.round((noise(letterIndex * 4 + 3) - .5) * 220);
        letter.style.setProperty('--x', `${x}px`);
        letter.style.setProperty('--y', `${y}px`);
        letter.style.setProperty('--r', `${r}deg`);
        letter.style.setProperty('--delay', `${Math.min(.9, noise(letterIndex * 4 + 4) * .72 + titleIndex * .05)}s`);
        word.appendChild(letter);
        letterIndex += 1;
      });
      element.appendChild(word);
    });
    element.dataset.tetrisReady = 'true';
    if (tetrisObserver) tetrisObserver.observe(element);
    else element.classList.add('is-set');
  });
};
createTetrisLetters();

const mobileSlides = [...document.querySelectorAll('[data-mobile-slide]')];
const mobileProgress = [...document.querySelectorAll('.mobile-carousel__progress span')];
const mobileMeta = [
  ['Heritage Real Estate', 'Luxury real estate para invertir y vivir.'],
  ['Sommelier Nómada', 'Catas, hospitalidad y eventos con autoría.'],
  ['Gallo Creativo', 'Web institucional para un estudio-taller.'],
  ['Taller D’Cars', 'Diagnóstico y servicios automotrices.'],
  ['Mono Solo Travel', 'Experiencias y viajes por Panamá.']
];
mobileSlides.forEach((slide, index) => {
  const caption = slide.querySelector('figcaption');
  const image = slide.querySelector('img');
  if (image) image.loading = 'eager';
  if (!caption || !mobileMeta[index]) return;
  const title = document.createElement('strong');
  const description = document.createElement('small');
  title.textContent = mobileMeta[index][0];
  description.textContent = mobileMeta[index][1];
  caption.replaceChildren(title, description);
});
let mobileIndex = 0;
let mobileTimer;
const paintMobileCarousel = index => {
  mobileIndex = (index + mobileSlides.length) % mobileSlides.length;
  mobileSlides.forEach((slide, i) => {
    const active = i === mobileIndex;
    slide.classList.toggle('is-active', active);
    slide.classList.toggle('is-prev', i === (mobileIndex - 1 + mobileSlides.length) % mobileSlides.length);
    slide.classList.toggle('is-next', i === (mobileIndex + 1) % mobileSlides.length);
    slide.setAttribute('aria-hidden', String(!active));
  });
  mobileProgress.forEach((bar, i) => bar.classList.toggle('is-active', i === mobileIndex));
};
const startMobileCarousel = () => {
  window.clearInterval(mobileTimer);
  if (reduceMotion || mobileSlides.length < 2 || isMobile()) return;
  mobileTimer = window.setInterval(() => paintMobileCarousel(mobileIndex + 1), 3300);
};
paintMobileCarousel(0);
startMobileCarousel();
const mobileCarousel = document.querySelector('[data-mobile-carousel]');
mobileCarousel?.addEventListener('mouseenter', () => window.clearInterval(mobileTimer));
mobileCarousel?.addEventListener('mouseleave', startMobileCarousel);
document.querySelector('[data-mobile-prev]')?.addEventListener('click', () => { window.clearInterval(mobileTimer); paintMobileCarousel(mobileIndex - 1); });
document.querySelector('[data-mobile-next]')?.addEventListener('click', () => { window.clearInterval(mobileTimer); paintMobileCarousel(mobileIndex + 1); });
let mobileSwipeStartX = 0;
mobileCarousel?.addEventListener('touchstart', event => {
  mobileSwipeStartX = event.changedTouches[0]?.clientX || 0;
  window.clearInterval(mobileTimer);
}, { passive:true });
mobileCarousel?.addEventListener('touchend', event => {
  const distance = (event.changedTouches[0]?.clientX || 0) - mobileSwipeStartX;
  if (Math.abs(distance) < 38) return;
  paintMobileCarousel(mobileIndex + (distance < 0 ? 1 : -1));
}, { passive:true });
window.addEventListener('resize', startMobileCarousel, { passive:true });

const showcase = document.querySelector('[data-project-showcase]');
const projectSection = document.querySelector('[data-projects-section]');
const tabs = [...document.querySelectorAll('[data-project-tab]')];
const cards = [...document.querySelectorAll('[data-project-card]')];
const detailTitle = document.querySelector('[data-detail-title]');
const detailType = document.querySelector('[data-detail-type]');
const detailDescription = document.querySelector('[data-detail-description]');
const detailRole = document.querySelector('[data-detail-role]');
const detailStack = document.querySelector('[data-detail-stack]');
const detailLink = document.querySelector('[data-detail-link]');
let activeProject = 0;
let raf = 0;

const positionProjectCards = position => {
  const mobile = isMobile();
  cards.forEach((card, i) => {
    if (reduceMotion || mobile) {
      card.style.removeProperty('transform');
      card.style.removeProperty('opacity');
      card.style.removeProperty('filter');
      card.style.removeProperty('z-index');
      card.style.removeProperty('pointer-events');
      return;
    }
    let offset = i - position;
    if (offset > cards.length / 2) offset -= cards.length;
    if (offset < -cards.length / 2) offset += cards.length;
    const depth = Math.abs(offset);
    const angle = offset * 86;
    const scale = Math.max(.64, 1 - depth * .12);
    const x = Math.sin(angle * Math.PI / 180) * 175;
    const y = Math.cos(angle * Math.PI / 180) * 24;
    card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${-depth * 80}px) rotateZ(${offset * 2}deg) scale(${scale})`;
  });
};

const paintProject = (index, fromScroll = false) => {
  activeProject = Math.max(0, Math.min(projectData.length - 1, index));
  const data = projectData[activeProject];
  tabs.forEach((tab, i) => { const active = i === activeProject; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); });
  cards.forEach((card, i) => { const active = i === activeProject; card.classList.toggle('is-active', active); card.classList.toggle('is-prev', i === (activeProject - 1 + cards.length) % cards.length); card.classList.toggle('is-next', i === (activeProject + 1) % cards.length); card.setAttribute('aria-hidden', String(!active)); });
  if (detailTitle) detailTitle.textContent = data.title;
  if (detailType) detailType.textContent = data.type;
  if (detailDescription) detailDescription.textContent = data.description;
  if (detailRole) detailRole.textContent = data.role;
  if (detailStack) detailStack.textContent = data.stack;
  if (detailLink) { detailLink.href = data.link; detailLink.setAttribute('aria-label', `Visitar proyecto ${data.title}`); }
  if (!fromScroll) positionProjectCards(activeProject);
  document.dispatchEvent(new CustomEvent('dtechlab:project-change'));
  if (!fromScroll) tabs[activeProject]?.scrollIntoView({ behavior:reduceMotion ? 'auto' : 'smooth', block:'nearest', inline:'nearest' });
};
tabs.forEach(tab => tab.addEventListener('click', () => paintProject(Number(tab.dataset.projectTab))));

const orbitalPaint = () => {
  raf = 0;
  if (!projectSection || !showcase) return;
  const bounds = projectSection.getBoundingClientRect();
  const scrollable = Math.max(1, projectSection.offsetHeight - window.innerHeight);
  const progress = reduceMotion ? 0 : Math.max(0, Math.min(1, -bounds.top / scrollable));
  const continuous = progress * Math.max(0, projectData.length - 1);
  const nextProject = Math.min(projectData.length - 1, Math.round(continuous));
  if (nextProject !== activeProject) paintProject(nextProject, true);
  positionProjectCards(continuous);
};
const queueOrbitalPaint = () => { if (!raf) raf = requestAnimationFrame(orbitalPaint); };
window.addEventListener('scroll', queueOrbitalPaint, { passive:true });
window.addEventListener('resize', queueOrbitalPaint, { passive:true });
window.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  const next = event.key === 'ArrowRight' ? activeProject + 1 : activeProject - 1;
  if (next >= 0 && next < projectData.length) { event.preventDefault(); paintProject(next); }
});
paintProject(0, true);
let mobileProjectTimer;
const syncMobileProjectCarousel = () => {
  window.clearInterval(mobileProjectTimer);
  // Project cards follow scroll at every size; they do not rotate automatically on mobile.
};
window.addEventListener('resize', syncMobileProjectCarousel, { passive:true });
syncMobileProjectCarousel();
queueOrbitalPaint();

const leadChatQuestions = [
  { key:'name', label:'¿Cómo te llamas?', placeholder:'Tu nombre', type:'text', autocomplete:'name' },
  { key:'email', label:'¿Cuál es tu correo?', placeholder:'tu@empresa.com', type:'email', autocomplete:'email' },
  { key:'phone', label:'¿Tienes un WhatsApp donde podamos contactarte?', placeholder:'+507 6000-0000', type:'tel', autocomplete:'tel', optional:true },
  { key:'business', label:'¿Cómo se llama tu negocio o proyecto?', placeholder:'Nombre del negocio', type:'text', autocomplete:'organization' },
  { key:'sector', label:'¿A qué se dedica?', placeholder:'Ej. inmobiliaria, restaurante, servicios…', type:'text' },
  { key:'project', label:'Cuéntame qué necesitas construir o mejorar.', placeholder:'Describe brevemente tu idea, objetivo o problema.', type:'textarea' },
  { key:'timeline', label:'¿Cuándo te gustaría tenerlo listo?', type:'select', options:['Lo antes posible','En 1–2 meses','En 3–6 meses','Todavía estoy explorando'] }
];

const createLeadWhatsAppUrl = values => {
  const lines = [
    'Hola DTechLab. Acabo de enviar este proyecto desde dtechl.com.',
    '',
    `Nombre: ${values.name || ''}`,
    `Correo: ${values.email || ''}`,
    `WhatsApp: ${values.phone || ''}`,
    `Negocio: ${values.business || ''}`,
    `Sector: ${values.sector || ''}`,
    `Proyecto: ${values.project || ''}`,
    `Plazo: ${values.timeline || ''}`,
    `Referencia: ${values.interest || ''}`
  ];
  return `https://wa.me/50769837286?text=${encodeURIComponent(lines.join('\n'))}`;
};

const createLeadChat = () => {
  const shell = document.createElement('div');
  shell.className = 'lead-chat';
  shell.innerHTML = `
    <button class="lead-chat__launcher" type="button" aria-label="Abrir asistente de proyectos" aria-expanded="false">
      <span class="lead-chat__avatar lead-chat__avatar--launcher" aria-hidden="true"><img src="/brand/dtechlab-mark-blue.svg" alt="" /></span><strong>Cuéntanos tu proyecto</strong>
    </button>
    <section class="lead-chat__panel" role="dialog" aria-modal="false" aria-labelledby="lead-chat-title" aria-hidden="true">
      <header class="lead-chat__header">
        <div><span class="lead-chat__avatar" aria-hidden="true"><img src="/brand/dtechlab-mark-blue.svg" alt="" /></span><p id="lead-chat-title">Asistente DTechLab</p><small><i class="lead-chat__status" aria-hidden="true"></i> Te orientamos en menos de 2 minutos</small></div>
        <button class="lead-chat__close" type="button" aria-label="Cerrar asistente">×</button>
      </header>
      <div class="lead-chat__messages" aria-live="polite" aria-relevant="additions"></div>
      <form class="lead-chat__form">
        <label class="lead-chat__label" for="lead-chat-answer">Tu respuesta</label>
        <div class="lead-chat__control"></div>
        <input class="lead-chat__honeypot" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button class="lead-chat__send" type="submit">Continuar <span aria-hidden="true">→</span></button>
        <p class="lead-chat__privacy">Al enviar, registramos tus datos y abrimos WhatsApp con el resumen para que confirmes el mensaje.</p>
      </form>
    </section>`;
  document.body.appendChild(shell);

  const launcher = shell.querySelector('.lead-chat__launcher');
  const panel = shell.querySelector('.lead-chat__panel');
  const close = shell.querySelector('.lead-chat__close');
  const messages = shell.querySelector('.lead-chat__messages');
  const form = shell.querySelector('.lead-chat__form');
  const control = shell.querySelector('.lead-chat__control');
  const send = shell.querySelector('.lead-chat__send');
  let step = 0;
  let started = false;
  let interest = '';
  const lead = {};

  const addMessage = (text, kind = 'bot') => {
    const message = document.createElement('p');
    message.className = `lead-chat__message lead-chat__message--${kind}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const renderQuestion = () => {
    const question = leadChatQuestions[step];
    if (!question) return;
    addMessage(question.label);
    let field;
    if (question.type === 'textarea') {
      field = document.createElement('textarea');
      field.rows = 3;
    } else if (question.type === 'select') {
      field = document.createElement('select');
      const prompt = document.createElement('option');
      prompt.value = '';
      prompt.textContent = 'Selecciona una opción';
      prompt.disabled = true;
      prompt.selected = true;
      field.appendChild(prompt);
      question.options.forEach(option => {
        const item = document.createElement('option');
        item.value = option;
        item.textContent = option;
        field.appendChild(item);
      });
    } else {
      field = document.createElement('input');
      field.type = question.type;
      if (question.autocomplete) field.autocomplete = question.autocomplete;
    }
    field.id = 'lead-chat-answer';
    field.name = question.key;
    field.required = !question.optional;
    field.placeholder = question.placeholder || '';
    field.setAttribute('aria-label', question.label);
    control.replaceChildren(field);
    send.firstChild.textContent = step === leadChatQuestions.length - 1 ? 'Enviar proyecto ' : 'Continuar ';
    window.setTimeout(() => field.focus(), 80);
  };

  const reset = () => {
    step = 0;
    started = true;
    Object.keys(lead).forEach(key => delete lead[key]);
    messages.replaceChildren();
    addMessage(interest ? `Hola. Vi que te gustó ${interest}. Cuéntame un poco de tu proyecto.` : 'Hola. Voy a hacerte unas preguntas cortas para entender tu negocio y orientarte mejor.');
    renderQuestion();
  };

  const openChat = source => {
    interest = source?.dataset.chatInterest || interest;
    shell.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    launcher.setAttribute('aria-expanded', 'true');
    if (!started) reset();
    else control.querySelector('input,textarea,select')?.focus();
  };

  const closeChat = () => {
    shell.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  };

  const finishWithoutEndpoint = () => {
    addMessage('Tu resumen está listo. Para enviarlo ahora, abre el correo y confirma el mensaje.', 'bot');
    form.hidden = true;
    const body = [
      `Nombre: ${lead.name || ''}`,
      `Correo: ${lead.email || ''}`,
      `WhatsApp: ${lead.phone || ''}`,
      `Negocio: ${lead.business || ''}`,
      `Sector: ${lead.sector || ''}`,
      `Proyecto: ${lead.project || ''}`,
      `Plazo: ${lead.timeline || ''}`,
      `Referencia: ${interest || ''}`
    ].join('\n');
    const action = document.createElement('a');
    action.className = 'lead-chat__email-action';
    action.href = `mailto:sales@dtechl.com?subject=${encodeURIComponent(`Nuevo proyecto · ${lead.business || 'DTechLab'}`)}&body=${encodeURIComponent(body)}`;
    action.textContent = 'Enviar a sales@dtechl.com ↗';
    messages.appendChild(action);
    messages.scrollTop = messages.scrollHeight;
  };

  const submitLead = async () => {
    const endpoint = String(window.DTECHLAB_LEAD_ENDPOINT || '').trim();
    const payload = { ...lead, interest, source:location.href, website:form.elements.website.value, submittedAt:new Date().toISOString() };
    if (!endpoint) {
      finishWithoutEndpoint();
      return;
    }
    form.classList.add('is-sending');
    send.disabled = true;
    send.firstChild.textContent = 'Enviando ';
    try {
      await fetch(endpoint, { method:'POST', mode:'no-cors', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify(payload) });
      form.hidden = true;
      addMessage(`Listo, ${lead.name}. Recibimos la información de ${lead.business} y también la enviamos al equipo comercial. Te contactaremos pronto.`, 'bot');
      const restart = document.createElement('button');
      restart.className = 'lead-chat__restart';
      restart.type = 'button';
      restart.textContent = 'Iniciar otra conversación';
      restart.addEventListener('click', () => { form.hidden = false; reset(); });
      messages.appendChild(restart);
      window.location.assign(createLeadWhatsAppUrl({ ...lead, interest }));
    } catch (error) {
      addMessage('No pudimos completar el envío automático. Puedes enviarlo por correo con el botón de abajo.', 'bot');
      finishWithoutEndpoint();
    } finally {
      form.classList.remove('is-sending');
      send.disabled = false;
    }
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const question = leadChatQuestions[step];
    const field = control.querySelector('input,textarea,select');
    if (!field || !field.reportValidity()) return;
    const value = field.value.trim();
    lead[question.key] = value;
    addMessage(value || 'Prefiero no indicarlo', 'user');
    step += 1;
    if (step >= leadChatQuestions.length) submitLead();
    else renderQuestion();
  });

  launcher.addEventListener('click', () => shell.classList.contains('is-open') ? closeChat() : openChat());
  close.addEventListener('click', closeChat);
  document.querySelectorAll('[data-open-lead-chat]').forEach(button => button.addEventListener('click', () => openChat(button)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && shell.classList.contains('is-open')) closeChat(); });
  if (location.hash === '#chat') openChat();
};

createLeadChat();

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  const status = contactForm.querySelector('[data-contact-form-status]');
  const submit = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const values = Object.fromEntries(new FormData(contactForm).entries());
    const payload = { ...values, source:location.href, submittedAt:new Date().toISOString() };
    const endpoint = String(window.DTECHLAB_LEAD_ENDPOINT || '').trim();
    if (!endpoint) {
      const body = [`Nombre: ${values.name}`, `Correo: ${values.email}`, `Negocio: ${values.business}`, `Proyecto: ${values.project}`].join('\n');
      location.href = `mailto:sales@dtechl.com?subject=${encodeURIComponent(`Nuevo proyecto · ${values.business}`)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Abrimos tu correo para completar el envío a sales@dtechl.com.';
      return;
    }
    submit.disabled = true;
    status.textContent = 'Enviando tu proyecto…';
    try {
      await fetch(endpoint, { method:'POST', mode:'no-cors', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify(payload) });
      contactForm.reset();
      status.textContent = 'Datos recibidos. Abriendo WhatsApp para confirmar el mensaje…';
      window.location.assign(createLeadWhatsAppUrl(values));
    } catch (error) {
      status.textContent = 'No pudimos enviar automáticamente. Escríbenos a sales@dtechl.com.';
    } finally {
      submit.disabled = false;
    }
  });
}

const tourVideos = [...document.querySelectorAll('video[data-tour-video]')];
const visibleTourVideos = new Map();
const syncTourVideos = () => {
  const preferredVideo = [...visibleTourVideos.entries()]
    .filter(([video]) => {
      const projectCard = video.closest('[data-project-card]');
      return !projectCard || projectCard.classList.contains('is-active');
    })
    .sort((a, b) => b[1] - a[1])[0]?.[0];
  const hasActiveTour = !reduceMotion && !document.hidden && Boolean(preferredVideo);
  document.body.classList.toggle('has-active-tour', hasActiveTour);
  tourVideos.forEach(video => {
    const shouldPlay = !reduceMotion && !document.hidden && video === preferredVideo;
    if (shouldPlay) {
      if (video.preload === 'none') video.preload = 'auto';
      if (video.paused) video.play().catch(() => {});
    } else if (!video.paused) {
      video.pause();
    }
  });
};

if ('IntersectionObserver' in window && !reduceMotion) {
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleTourVideos.set(entry.target, entry.intersectionRatio);
      else visibleTourVideos.delete(entry.target);
    });
    syncTourVideos();
  }, { rootMargin:'40px 0px', threshold:[.15,.35,.55,.75] });
  tourVideos.forEach(video => videoObserver.observe(video));
}

document.addEventListener('dtechlab:project-change', syncTourVideos);
document.addEventListener('visibilitychange', syncTourVideos);
tourVideos.forEach(video => video.addEventListener('canplay', syncTourVideos, { once:true }));
syncTourVideos();
