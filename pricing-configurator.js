(() => {
  const builder = document.querySelector('[data-pricing-builder]');
  if (!builder) return;

  const plans = {
    landing: { label: 'Landing profesional', setup: 400 },
    corporate: { label: 'Sitio web corporativo', setup: 750 },
    highlevel: { label: 'High Level', setup: 1000 }
  };
  const operations = {
    none: { label: 'Sin operación adicional', recurring: 0, cadence: '' },
    standard: { label: 'Mantenimiento estándar', recurring: 25, cadence: '/mes' },
    integral: { label: 'Mantenimiento integral', recurring: 50, cadence: '/mes' },
    professional: { label: 'Operación profesional', recurring: 150, cadence: '/año' },
    complete: { label: 'Operación completa', recurring: 690, cadence: '/año' }
  };
  const addons = {
    chatbot: { label: 'Chatbot receptor', setup: 100 },
    photos: { label: 'Sesión fotográfica · 6 fotos', setup: 100 },
    copy: { label: 'Textos completos para empresa o marca', quote: true },
    language: { label: 'Idioma adicional', setup: 50 }
  };

  const state = { plan: '', operation: 'none', addons: new Set(), languages: 1 };
  const steps = [...builder.querySelectorAll('[data-builder-step]')];
  const navItems = [...builder.querySelectorAll('[data-step-nav]')];
  const summaryLines = builder.querySelector('[data-summary-lines]');
  const setupTotal = builder.querySelector('[data-setup-total]');
  const recurringTotal = builder.querySelector('[data-recurring-total]');
  const recurringCadence = builder.querySelector('[data-recurring-cadence]');
  const form = builder.querySelector('[data-pricing-form]');
  let currentStep = 0;

  const money = value => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  const query = new URLSearchParams(location.search);
  const validPlan = value => Object.prototype.hasOwnProperty.call(plans, value);
  const validOperation = value => Object.prototype.hasOwnProperty.call(operations, value);

  const setStep = index => {
    currentStep = Math.max(0, Math.min(steps.length - 1, index));
    steps.forEach((step, i) => {
      step.hidden = i !== currentStep;
      step.classList.toggle('is-active', i === currentStep);
    });
    navItems.forEach((item, i) => {
      item.classList.toggle('is-active', i === currentStep);
      item.classList.toggle('is-complete', i < currentStep);
      item.setAttribute('aria-current', i === currentStep ? 'step' : 'false');
    });
    builder.dataset.currentStep = String(currentStep + 1);
    builder.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  const getConfiguration = () => {
    const plan = plans[state.plan];
    const operation = operations[state.operation];
    const selectedAddons = [...state.addons].map(key => {
      const addon = addons[key];
      if (key === 'language') return `${addon.label} × ${state.languages}`;
      return addon.label;
    });
    return {
      plan: plan?.label || 'Sin seleccionar',
      operation: operation.label,
      addons: selectedAddons.length ? selectedAddons.join(', ') : 'Sin complementos',
      setup: (plan?.setup || 0) + [...state.addons].reduce((total, key) => total + (addons[key].setup || 0) * (key === 'language' ? state.languages : 1), 0),
      recurring: operation.recurring,
      cadence: operation.cadence,
      requiresQuote: state.addons.has('copy')
    };
  };

  const paintSummary = () => {
    const config = getConfiguration();
    summaryLines.replaceChildren();
    [
      ['Sitio web', config.plan],
      ['Operación', config.operation],
      ['Complementos', config.addons]
    ].forEach(([label, value]) => {
      const row = document.createElement('div');
      row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      summaryLines.appendChild(row);
    });
    setupTotal.textContent = money(config.setup);
    recurringTotal.textContent = config.recurring ? money(config.recurring) : '$0';
    recurringCadence.textContent = config.cadence || '';
    builder.querySelector('[data-quote-note]').hidden = !config.requiresQuote;
    const configurationInput = builder.querySelector('input[name="configuration"]');
    const projectInput = builder.querySelector('input[name="project"]');
    const configuration = `Sitio: ${config.plan}\nOperación: ${config.operation}\nComplementos: ${config.addons}\nPago inicial estimado: ${money(config.setup)}\nRecurrente: ${config.recurring ? money(config.recurring) + config.cadence : '$0'}`;
    if (form) { form.dataset.project = config.plan; form.dataset.configuration = configuration; }
    if (configurationInput) { configurationInput.value = configuration; configurationInput.defaultValue = configuration; }
    if (projectInput) { projectInput.value = config.plan; projectInput.defaultValue = config.plan; }
  };

  const selectPlan = key => {
    if (!validPlan(key)) return;
    state.plan = key;
    builder.querySelectorAll('[data-plan]').forEach(card => {
      const selected = card.dataset.plan === key;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    paintSummary();
  };

  const selectOperation = key => {
    if (!validOperation(key)) return;
    state.operation = key;
    builder.querySelectorAll('[data-operation]').forEach(card => {
      const selected = card.dataset.operation === key;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    paintSummary();
  };

  builder.querySelectorAll('[data-plan]').forEach(card => card.addEventListener('click', () => {
    selectPlan(card.dataset.plan);
    setStep(1);
  }));
  builder.querySelectorAll('[data-operation]').forEach(card => card.addEventListener('click', () => {
    selectOperation(card.dataset.operation);
    setStep(2);
  }));
  builder.querySelectorAll('[data-addon]').forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('select')) return;
    const key = card.dataset.addon;
    state.addons.has(key) ? state.addons.delete(key) : state.addons.add(key);
    card.classList.toggle('is-selected', state.addons.has(key));
    card.setAttribute('aria-pressed', String(state.addons.has(key)));
    paintSummary();
  }));
  builder.querySelector('[data-language-count]')?.addEventListener('change', event => {
    state.languages = Math.max(1, Number(event.target.value) || 1);
    state.addons.add('language');
    builder.querySelector('[data-addon="language"]')?.classList.add('is-selected');
    paintSummary();
  });
  builder.querySelectorAll('[data-builder-next]').forEach(button => button.addEventListener('click', () => setStep(currentStep + 1)));
  builder.querySelector('[data-operation-skip]')?.addEventListener('click', () => {
    selectOperation('none');
    setStep(2);
  });
  builder.querySelectorAll('[data-builder-back]').forEach(button => button.addEventListener('click', () => setStep(currentStep - 1)));
  navItems.forEach((item, index) => item.addEventListener('click', () => {
    if (index === 0 || state.plan) setStep(index);
  }));

  if (validPlan(query.get('plan'))) selectPlan(query.get('plan'));
  if (validOperation(query.get('operation'))) selectOperation(query.get('operation'));
  const addonQuery = (query.get('addons') || '').split(',').filter(key => addons[key]);
  addonQuery.forEach(key => {
    state.addons.add(key);
    const card = builder.querySelector(`[data-addon="${key}"]`);
    card?.classList.add('is-selected');
    card?.setAttribute('aria-pressed', 'true');
  });
  const requestedStep = { plan: 0, operation: 1, addons: 2, request: 3 }[query.get('step')];
  paintSummary();
  setStep(Number.isInteger(requestedStep) ? requestedStep : 0);
})();
