document.documentElement.classList.add('has-js');
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash || location.hash === '#top') window.scrollTo(0, 0);

const projectData = [
  { title:'Gallo Creativo', type:'Estudio-taller · Sitio institucional', description:'Sitio institucional para un estudio-taller panameño: la web presenta su trabajo, disciplinas y contacto con una narrativa visual editorial.', role:'Dirección visual, diseño de interfaz y desarrollo web.', stack:'HTML · CSS · JavaScript · GSAP · Lenis', link:'https://gallocreativo.com/' },
  { title:'Taller D’Cars', type:'Servicios automotrices · Sitio comercial', description:'Sitio comercial para un centro especializado en diagnóstico y soluciones para transmisiones automáticas en Panamá.', role:'Arquitectura de información, interfaz y desarrollo frontend.', stack:'HTML · CSS · JavaScript', link:'https://tallerdcars.com/' },
  { title:'Mono Solo Travel', type:'Turismo · Catálogo de experiencias', description:'Catálogo público de experiencias turísticas con reservas online, datos de contacto y confirmación por token.', role:'Diseño de interfaz y desarrollo de producto web.', stack:'JavaScript · CSS · Cloudflare Pages', link:'https://mono-solo-travel.pages.dev/' },
  { title:'Portfolio', type:'Portfolio · Desarrollo full stack', description:'Portafolio profesional para presentar desarrollo full stack, datos, SaaS, APIs de IA y automatizaciones.', role:'Dirección visual, diseño de interfaz y desarrollo web.', stack:'HTML · CSS · JavaScript · GSAP', link:'https://rodolfoalabarca.dev/' }
];

const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.matchMedia('(max-width: 800px)').matches;

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
  ['Gallo Creativo', 'Web institucional para un estudio-taller.'],
  ['Taller D’Cars', 'Diagnóstico y servicios automotrices.'],
  ['Mono Solo Travel', 'Experiencias y viajes por Panamá.'],
  ['Portfolio', 'Desarrollo full stack, datos e IA.']
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
    slide.classList.toggle('is-active', i === mobileIndex);
    slide.classList.toggle('is-prev', i === (mobileIndex - 1 + mobileSlides.length) % mobileSlides.length);
    slide.classList.toggle('is-next', i === (mobileIndex + 1) % mobileSlides.length);
  });
  mobileProgress.forEach((bar, i) => bar.classList.toggle('is-active', i === mobileIndex));
};
const startMobileCarousel = () => {
  if (reduceMotion || mobileSlides.length < 2) return;
  mobileTimer = window.setInterval(() => paintMobileCarousel(mobileIndex + 1), 3300);
};
paintMobileCarousel(0);
startMobileCarousel();
document.querySelector('[data-mobile-carousel]')?.addEventListener('mouseenter', () => window.clearInterval(mobileTimer));
document.querySelector('[data-mobile-carousel]')?.addEventListener('mouseleave', startMobileCarousel);

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
  if (!fromScroll) tabs[activeProject]?.scrollIntoView({ behavior:reduceMotion ? 'auto' : 'smooth', block:'nearest', inline:'nearest' });
};
tabs.forEach(tab => tab.addEventListener('click', () => paintProject(Number(tab.dataset.projectTab))));

const orbitalPaint = () => {
  raf = 0;
  if (!projectSection || !showcase) return;
  const mobile = isMobile();
  const bounds = projectSection.getBoundingClientRect();
  const scrollable = Math.max(1, projectSection.offsetHeight - window.innerHeight);
  const progress = reduceMotion ? 0 : Math.max(0, Math.min(.999, -bounds.top / scrollable));
  const continuous = progress * projectData.length;
  const nextProject = Math.min(projectData.length - 1, Math.floor(continuous));
  if (nextProject !== activeProject) paintProject(nextProject, true);
  cards.forEach((card, i) => {
    if (reduceMotion) {
      card.style.removeProperty('transform');
      card.style.removeProperty('opacity');
      card.style.removeProperty('filter');
      card.style.removeProperty('z-index');
      card.style.removeProperty('pointer-events');
      return;
    }
    const offset = i - continuous;
    const depth = Math.abs(offset);
    if (mobile) {
      const angle = offset * 58;
      const scale = Math.max(.64, 1 - depth * .14);
      const x = Math.sin(angle * Math.PI / 180) * Math.min(145, window.innerWidth * .34);
      const y = Math.cos(angle * Math.PI / 180) * 18;
      const opacity = Math.max(.1, 1 - depth * .45);
      const blur = Math.min(3.2, depth * 1.6);
      card.style.setProperty('transform', `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${-depth * 100}px) rotateY(${offset * 18}deg) rotateZ(${offset * 2}deg) scale(${scale})`, 'important');
      card.style.setProperty('opacity', String(opacity), 'important');
      card.style.setProperty('filter', `blur(${blur}px) grayscale(${Math.min(.6, depth * .35)})`, 'important');
      card.style.setProperty('z-index', String(Math.max(1, 20 - Math.round(depth * 5))), 'important');
      card.style.setProperty('pointer-events', i === activeProject ? 'auto' : 'none', 'important');
      return;
    }
    card.style.removeProperty('transform');
    card.style.removeProperty('opacity');
    card.style.removeProperty('filter');
    card.style.removeProperty('z-index');
    card.style.removeProperty('pointer-events');
    const angle = offset * 86;
    const scale = Math.max(.64, 1 - depth * .12);
    const x = Math.sin(angle * Math.PI / 180) * 175;
    const y = Math.cos(angle * Math.PI / 180) * 24;
    card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${-depth * 80}px) rotateZ(${offset * 2}deg) scale(${scale})`;
  });
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
