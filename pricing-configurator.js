(() => {
  const builder = document.querySelector('[data-pricing-builder]');
  if (!builder) return;

  const plans = {
    landing: { label: 'Básico', setup: 400 },
    corporate: { label: 'Profesional', setup: 750 },
    highlevel: { label: 'High Level', setup: 1000 }
  };
  const operations = {
    essential: { label: 'Operación Esencial', recurring: 110 },
    pro: { label: 'Operación Pro', recurring: 150 }
  };
  const maintenance = {
    none: { label: 'Sin mantenimiento mensual', recurring: 0 },
    standard: { label: 'Mantenimiento Estándar', recurring: 25 },
    integral: { label: 'Mantenimiento Integral', recurring: 50 }
  };
  const addons = {
    chatbot: { label: 'Chatbot receptor', setup: 100 },
    panel: { label: 'Panel de administración', setup: 150 },
    photos: { label: 'Sesión fotográfica · 6 fotos', setup: 100 },
    copy: { label: 'Textos completos', quote: true },
    language: { label: 'Idioma adicional', quote: true }
  };

  const state = { plan: '', operation: 'essential', maintenance: 'none', addons: new Set() };
  const steps = [...builder.querySelectorAll('[data-builder-step]')];
  const navItems = [...builder.querySelectorAll('[data-step-nav]')];
  const summaryLines = builder.querySelector('[data-summary-lines]');
  const setupTotal = builder.querySelector('[data-setup-total]');
  const operationTotal = builder.querySelector('[data-operation-total]');
  const maintenanceTotal = builder.querySelector('[data-maintenance-total]');
  const maintenanceCadence = builder.querySelector('[data-maintenance-cadence]');
  const form = builder.querySelector('[data-pricing-form]');
  let currentStep = 0;

  const money = value => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  const query = new URLSearchParams(location.search);
  const hasOwn = (object, value) => Object.prototype.hasOwnProperty.call(object, value);

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

  const proReason = () => {
    if (state.plan === 'corporate') return 'Operación Pro es requerida para el plan Profesional.';
    if (state.plan === 'highlevel') return 'Operación Pro es requerida para el plan High Level.';
    if (state.addons.has('chatbot')) return 'Operación Pro es requerida al agregar el chatbot.';
    if (state.addons.has('panel')) return 'Operación Pro es requerida al agregar el panel.';
    return '';
  };

  const updateAvailability = () => {
    const reason = proReason();
    const essentialCard = builder.querySelector('[data-operation="essential"]');
    const reasonNode = builder.querySelector('[data-essential-reason]');
    if (reason) state.operation = 'pro';
    if (essentialCard) {
      essentialCard.disabled = Boolean(reason);
      essentialCard.setAttribute('aria-disabled', String(Boolean(reason)));
      essentialCard.title = reason;
    }
    if (reasonNode) reasonNode.textContent = reason;

    const panelCard = builder.querySelector('[data-addon="panel"]');
    const panelDescription = builder.querySelector('[data-panel-description]');
    const panelPrice = builder.querySelector('[data-panel-price]');
    if (state.plan === 'landing') {
      state.addons.delete('panel');
      panelCard.disabled = true;
      panelDescription.textContent = 'No disponible para el plan Básico.';
      panelPrice.textContent = 'No disponible';
    } else if (state.plan === 'highlevel') {
      state.addons.add('panel');
      panelCard.disabled = true;
      panelDescription.textContent = 'Incluido para actualizar productos o propiedades.';
      panelPrice.textContent = 'Incluido';
    } else {
      panelCard.disabled = false;
      panelDescription.textContent = 'Disponible para Profesional; actualiza productos o propiedades.';
      panelPrice.textContent = '+$150';
    }

    builder.querySelectorAll('[data-operation]').forEach(card => {
      const selected = card.dataset.operation === state.operation;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    builder.querySelectorAll('[data-maintenance]').forEach(card => {
      const selected = card.dataset.maintenance === state.maintenance;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    builder.querySelectorAll('[data-addon]').forEach(card => {
      const selected = state.addons.has(card.dataset.addon);
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
  };

  const getConfiguration = () => {
    const plan = plans[state.plan];
    const operation = operations[state.operation];
    const selectedMaintenance = maintenance[state.maintenance];
    const selectedAddons = [...state.addons].map(key => {
      if (key === 'panel' && state.plan === 'highlevel') return 'Panel de administración (incluido)';
      return addons[key].label;
    });
    const addonsSetup = [...state.addons].reduce((total, key) => {
      if (key === 'panel' && state.plan === 'highlevel') return total;
      return total + (addons[key].setup || 0);
    }, 0);
    return {
      plan: plan?.label || 'Sin seleccionar',
      operation: operation.label,
      maintenance: selectedMaintenance.label,
      addons: selectedAddons.length ? selectedAddons.join(', ') : 'Sin complementos',
      setup: (plan?.setup || 0) + addonsSetup,
      operationRecurring: operation.recurring,
      maintenanceRecurring: selectedMaintenance.recurring,
      requiresQuote: [...state.addons].some(key => addons[key].quote)
    };
  };

  const paintSummary = () => {
    updateAvailability();
    const config = getConfiguration();
    summaryLines.replaceChildren();
    [
      ['Sitio web', config.plan],
      ['Operación desde el segundo año', config.operation],
      ['Mantenimiento mensual', config.maintenance],
      ['Complementos', config.addons]
    ].forEach(([label, value]) => {
      const row = document.createElement('div');
      row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      summaryLines.appendChild(row);
    });
    setupTotal.textContent = money(config.setup);
    operationTotal.textContent = money(config.operationRecurring);
    maintenanceTotal.textContent = money(config.maintenanceRecurring);
    maintenanceCadence.textContent = config.maintenanceRecurring ? '/mes' : '';
    builder.querySelector('[data-quote-note]').hidden = !config.requiresQuote;
    const configurationInput = builder.querySelector('input[name="configuration"]');
    const projectInput = builder.querySelector('input[name="project"]');
    const maintenanceLine = config.maintenanceRecurring ? ` (${money(config.maintenanceRecurring)}/mes)` : '';
    const configuration = `Sitio: ${config.plan}\nOperación desde el segundo año: ${config.operation} (${money(config.operationRecurring)}/año)\nMantenimiento mensual: ${config.maintenance}${maintenanceLine}\nComplementos: ${config.addons}\nPago inicial: ${money(config.setup)}`;
    if (form) { form.dataset.project = config.plan; form.dataset.configuration = configuration; }
    if (configurationInput) { configurationInput.value = configuration; configurationInput.defaultValue = configuration; }
    if (projectInput) { projectInput.value = config.plan; projectInput.defaultValue = config.plan; }
  };

  const selectPlan = key => {
    if (!hasOwn(plans, key)) return;
    const previousPlan = state.plan;
    state.plan = key;
    if (key === 'highlevel') state.addons.add('panel');
    else if (previousPlan === 'highlevel') state.addons.delete('panel');
    if (key === 'landing') state.addons.delete('panel');
    if (key === 'landing' && !state.addons.has('chatbot')) state.operation = 'essential';
    builder.querySelectorAll('[data-plan]').forEach(card => {
      const selected = card.dataset.plan === key;
      card.classList.toggle('is-selected', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    paintSummary();
  };

  const selectOperation = key => {
    if (!hasOwn(operations, key)) return;
    if (key === 'essential' && proReason()) return;
    state.operation = key;
    paintSummary();
  };

  const selectMaintenance = key => {
    if (!hasOwn(maintenance, key)) return;
    state.maintenance = key;
    paintSummary();
  };

  builder.querySelectorAll('[data-plan]').forEach(card => card.addEventListener('click', () => {
    selectPlan(card.dataset.plan);
    setStep(1);
  }));
  builder.querySelectorAll('[data-operation]').forEach(card => card.addEventListener('click', () => selectOperation(card.dataset.operation)));
  builder.querySelectorAll('[data-maintenance]').forEach(card => card.addEventListener('click', () => selectMaintenance(card.dataset.maintenance)));
  builder.querySelectorAll('[data-addon]').forEach(card => card.addEventListener('click', () => {
    if (card.disabled) return;
    const key = card.dataset.addon;
    state.addons.has(key) ? state.addons.delete(key) : state.addons.add(key);
    paintSummary();
  }));
  builder.querySelectorAll('[data-builder-next]').forEach(button => button.addEventListener('click', () => setStep(currentStep + 1)));
  builder.querySelectorAll('[data-builder-back]').forEach(button => button.addEventListener('click', () => setStep(currentStep - 1)));
  navItems.forEach((item, index) => item.addEventListener('click', () => {
    if (index === 0 || state.plan) setStep(index);
  }));

  if (hasOwn(plans, query.get('plan'))) selectPlan(query.get('plan'));
  const requestedOperation = query.get('operation') === 'professional' ? 'pro' : query.get('operation');
  if (hasOwn(operations, requestedOperation)) selectOperation(requestedOperation);
  if (hasOwn(maintenance, query.get('maintenance'))) selectMaintenance(query.get('maintenance'));
  const addonQuery = (query.get('addons') || '').split(',').filter(key => hasOwn(addons, key));
  addonQuery.forEach(key => {
    if (key !== 'panel' || state.plan !== 'landing') state.addons.add(key);
  });
  const requestedStep = { plan: 0, operation: 1, addons: 2, request: 3 }[query.get('step')];
  paintSummary();
  setStep(Number.isInteger(requestedStep) ? requestedStep : 0);
})();
