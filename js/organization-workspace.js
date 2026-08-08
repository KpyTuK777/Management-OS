(function () {
  "use strict";

  const $ = selector => document.querySelector(selector);
  const $$ = selector => Array.from(document.querySelectorAll(selector));
  const kindLabels = {
    organization: "Організація", department: "Підрозділ", role: "Роль", process: "Процес",
    system: "Система", sop: "SOP", measure: "KPI / показник", report: "Регулярний звіт",
    meeting: "Регулярна зустріч", interaction: "Взаємодія", unknown: "Невідома ділянка"
  };
  const qualificationLabels = {
    known: "Відомо", unknown: "Невідомо", incomplete: "Неповно", stale: "Потребує оновлення", disputed: "Є розбіжності"
  };
  const familyLabels = {
    containment: "Містить", reporting: "Підзвітність", responsibility: "Відповідальність",
    participation: "Участь", dependency: "Залежність", "information-flow": "Інформаційний потік",
    "material-flow": "Матеріальний потік", association: "Пов’язано", interaction: "Взаємодія"
  };

  let repository;
  let selectedId = null;
  let currentView = "map";
  let currentLens = "structure";
  const modalInvokers = new WeakMap();

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }
  function announce(message) { $("#organizationAnnouncement").textContent = message; }
  function state() { return repository.snapshot(); }
  function elementById(id) { return state()?.elements.find(item => item.id === id); }
  function relationsFor(id) { return state()?.relationships.filter(item => item.fromId === id || item.toId === id) || []; }

  function showOrganization() {
    $("#organizationApp").classList.remove("hidden");
    $("#startPage").classList.add("hidden");
    $("#workbenchShell").classList.add("hidden");
    document.body.classList.add("lom-mode");
  }
  function showInvestigations(context) {
    $("#organizationApp").classList.add("hidden");
    $("#startPage").classList.remove("hidden");
    $("#workbenchShell").classList.add("hidden");
    document.body.classList.remove("lom-mode");
    if (context) {
      sessionStorage.setItem("management-os-pending-organization-context-v1", JSON.stringify({
        version: 1,
        workspaceId: state().workspaceId,
        elementId: context.id,
        label: context.label,
        kind: context.kind,
        capturedAt: new Date().toISOString(),
        promoted: false
      }));
      window.setTimeout(() => {
        $("#creationTitle").value = `Дослідити: ${context.label}`;
        $("#creationSituation").value = `Потрібно зрозуміти, що відбувається у контексті «${context.label}». Контекст успадковано як посилання і ще не є матеріалом або доказом.`;
        $("#startInvestigation").click();
      }, 0);
    }
  }

  function openDialog(dialog, invoker) {
    modalInvokers.set(dialog, invoker || document.activeElement);
    dialog.showModal();
    window.setTimeout(() => (dialog.querySelector("[data-lom-autofocus]") || dialog.querySelector("input,select,textarea,button"))?.focus(), 0);
  }
  function closeDialog(dialog) {
    dialog.close();
    modalInvokers.get(dialog)?.focus?.();
  }

  function render() {
    const model = state();
    const hasOrganization = Boolean(model?.elements.some(item => item.kind === "organization"));
    $("#organizationFirstUse").classList.toggle("hidden", hasOrganization);
    $("#organizationShell").classList.toggle("hidden", !hasOrganization);
    if (!hasOrganization) return;
    const organization = model.elements.find(item => item.kind === "organization");
    $("#organizationTitle").textContent = organization.label;
    const relationCount = model.relationships.length;
    $("#modelSummary").textContent = `${model.elements.length - 1} елементів · ${relationCount} зв’язків`;
    const recovery = repository.recoveryInfo();
    $("#persistenceState").textContent = `Збережено · версія ${recovery.activeGeneration}`;
    populateSelects(model);
    renderMap(model);
    renderDepartment(model);
    renderRole(model);
    renderProcesses(model);
    if (selectedId) renderInspector(selectedId);
  }

  function populateSelects(model) {
    const options = model.elements.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)} · ${escapeHtml(kindLabels[item.kind])}</option>`).join("");
    $("#relationshipFrom").innerHTML = options;
    $("#relationshipTo").innerHTML = options;
    $("#elementParent").innerHTML = `<option value="">Без батьківського елемента</option>${model.elements.filter(item => ["organization", "department"].includes(item.kind)).map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("")}`;
  }

  function visibleForLens(model) {
    const allowed = currentLens === "structure" ? ["containment", "reporting"] : currentLens === "flows" ? ["information-flow", "material-flow"] : ["responsibility", "participation", "dependency", "association", "interaction"];
    return model.relationships.filter(item => allowed.includes(item.family));
  }

  function renderMap(model) {
    const map = $("#organizationMap");
    const organization = model.elements.find(item => item.kind === "organization");
    const children = model.elements.filter(item => item.id !== organization.id);
    $("#mapEmpty").classList.toggle("hidden", children.length > 0);
    map.classList.toggle("hidden", children.length === 0);
    if (!children.length) { map.replaceChildren(); return; }
    const visibleRelations = visibleForLens(model);
    const relationshipIds = new Set(visibleRelations.flatMap(item => [item.fromId, item.toId]));
    const elementCards = [organization, ...children].map((item, index) => {
      const dimmed = currentLens !== "structure" && item.kind !== "organization" && !relationshipIds.has(item.id);
      return `<button type="button" class="lom-node lom-node--${escapeHtml(item.kind)} ${selectedId === item.id ? "is-selected" : ""} ${dimmed ? "is-dimmed" : ""}" data-element-id="${escapeHtml(item.id)}" style="--node-index:${index}"><span class="lom-node__kind">${escapeHtml(kindLabels[item.kind])}</span><strong>${escapeHtml(item.label)}</strong><span class="lom-state lom-state--${escapeHtml(item.qualification)}">${escapeHtml(qualificationLabels[item.qualification])}</span></button>`;
    }).join("");
    const relationList = visibleRelations.length ? `<div class="lom-map-relations">${visibleRelations.map(item => `<button type="button" data-element-id="${escapeHtml(item.fromId)}"><span>${escapeHtml(elementById(item.fromId)?.label || "Невідомо")}</span><b>${escapeHtml(familyLabels[item.family])} →</b><span>${escapeHtml(elementById(item.toId)?.label || "Невідомо")}</span></button>`).join("")}</div>` : `<div class="lom-map-no-relations"><span>У цьому шарі зв’язків ще немає</span><button type="button" data-open-relationship>Створити зв’язок</button></div>`;
    map.innerHTML = `<div class="lom-node-field">${elementCards}</div>${relationList}`;
  }

  function renderDepartment(model) {
    const departments = model.elements.filter(item => item.kind === "department");
    const selected = model.elements.find(item => item.id === selectedId && item.kind === "department") || departments[0];
    if (!selected) {
      $("#departmentTitle").textContent = "Підрозділів ще немає";
      $("#departmentWorkbench").innerHTML = `<div class="lom-honest-empty lom-span-all"><strong>Додайте перший підрозділ</strong><p>Ролі, процеси та взаємодії можна додавати поступово.</p><button class="lom-button lom-button--primary" type="button" data-create-kind="department">Додати підрозділ</button></div>`;
      return;
    }
    $("#departmentTitle").textContent = selected.label;
    const linked = relationsFor(selected.id);
    const relatedElements = linked.map(relation => elementById(relation.fromId === selected.id ? relation.toId : relation.fromId)).filter(Boolean);
    const byKind = kind => relatedElements.filter(item => item.kind === kind);
    const card = (title, kinds, actionKind) => {
      const items = kinds.flatMap(byKind);
      return `<section class="lom-workbench-card"><header><h3>${escapeHtml(title)}</h3><button type="button" data-create-kind="${escapeHtml(actionKind)}" data-parent-id="${escapeHtml(selected.id)}">+</button></header>${items.length ? `<ul>${items.map(item => `<li><button type="button" data-element-id="${escapeHtml(item.id)}"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(qualificationLabels[item.qualification])}</small></button></li>`).join("")}</ul>` : `<p>Ще не додано</p>`}</section>`;
    };
    const work = model.investigations.filter(item => item.elementId === selected.id).length;
    const improvements = model.improvements.filter(item => item.elementId === selected.id).length;
    $("#departmentWorkbench").innerHTML = `${card("Ролі", ["role"], "role")}${card("Процеси", ["process"], "process")}${card("Системи та SOP", ["system", "sop"], "system")}${card("Показники", ["measure"], "measure")}${card("Звіти та зустрічі", ["report", "meeting"], "report")}<section class="lom-workbench-card lom-workbench-card--work"><header><h3>Активна робота</h3></header><div><span><b>${work}</b> розслідувань</span><span><b>${improvements}</b> вдосконалень</span></div><button type="button" data-investigate-id="${escapeHtml(selected.id)}">Зрозуміти, що відбувається</button><button type="button" data-improve-id="${escapeHtml(selected.id)}">Спланувати зміну</button></section>`;
  }

  function renderProcesses(model) {
    const processes = model.elements.filter(item => item.kind === "process");
    $("#processList").innerHTML = processes.length ? processes.map(item => `<article class="lom-process-card"><header><div><span class="lom-state lom-state--${escapeHtml(item.qualification)}">${escapeHtml(qualificationLabels[item.qualification])}</span><h3>${escapeHtml(item.label)}</h3></div><button type="button" data-element-id="${escapeHtml(item.id)}">Переглянути</button></header><div class="lom-process-flow"><span><small>Вхід</small><b>${escapeHtml(item.details.input || "Не визначено")}</b></span><i>→</i><span><small>Процес</small><b>${escapeHtml(item.label)}</b></span><i>→</i><span><small>Вихід</small><b>${escapeHtml(item.details.output || "Не визначено")}</b></span><i>→</i><span><small>Результат</small><b>${escapeHtml(item.details.result || "Не визначено")}</b></span></div></article>`).join("") : `<div class="lom-honest-empty"><strong>Процеси ще не описані</strong><p>Почніть з входу, роботи, виходу та очікуваного результату.</p><button class="lom-button lom-button--primary" type="button" data-create-kind="process">Додати процес</button></div>`;
  }

  function renderRole(model) {
    const roles = model.elements.filter(item => item.kind === "role");
    const selected = model.elements.find(item => item.id === selectedId && item.kind === "role") || roles[0];
    if (!selected) {
      $("#roleTitle").textContent = "Ролей ще немає";
      $("#roleWorkbench").innerHTML = `<div class="lom-honest-empty"><strong>Опишіть першу роль</strong><p>Роль — це відповідальність у роботі, а не профіль людини.</p><button class="lom-button lom-button--primary" type="button" data-create-kind="role">Додати роль</button></div>`;
      return;
    }
    $("#roleTitle").textContent = selected.label;
    const relationships = relationsFor(selected.id);
    const sections = [
      ["Відповідальність", ["responsibility"]],
      ["Підзвітність", ["reporting"]],
      ["Участь у роботі", ["participation", "association", "interaction"]],
      ["Залежності та потоки", ["dependency", "information-flow", "material-flow"]]
    ];
    $("#roleWorkbench").innerHTML = `<div class="lom-role-overview"><span class="lom-state lom-state--${escapeHtml(selected.qualification)}">${escapeHtml(qualificationLabels[selected.qualification])}</span><p>Роль описує очікувану участь і відповідальність. Людина та займання ролі в цьому циклі недоступні.</p><button type="button" data-open-relationship data-from-id="${escapeHtml(selected.id)}">Додати робочий зв’язок</button></div><div class="lom-role-sections">${sections.map(([title, families]) => { const matches = relationships.filter(item => families.includes(item.family)); return `<section><h3>${escapeHtml(title)}</h3>${matches.length ? `<ul>${matches.map(relation => { const other = elementById(relation.fromId === selected.id ? relation.toId : relation.fromId); return `<li><button type="button" data-element-id="${escapeHtml(other?.id || "")}"><span>${escapeHtml(other?.label || "Недоступний елемент")}</span><small>${escapeHtml(familyLabels[relation.family])}</small></button></li>`; }).join("")}</ul>` : `<p>Ще не визначено</p>`}</section>`; }).join("")}</div>`;
  }

  function renderInspector(id) {
    const item = elementById(id);
    if (!item) { selectedId = null; return; }
    selectedId = id;
    const relations = relationsFor(id);
    const work = state().investigations.filter(entry => entry.elementId === id);
    const improvements = state().improvements.filter(entry => entry.elementId === id);
    $("#organizationInspectorTitle").textContent = item.label;
    $("#organizationInspectorContent").innerHTML = `<div class="lom-inspector-summary"><span>${escapeHtml(kindLabels[item.kind])}</span><span class="lom-state lom-state--${escapeHtml(item.qualification)}">${escapeHtml(qualificationLabels[item.qualification])}</span></div><dl><div><dt>Зв’язки</dt><dd>${relations.length}</dd></div><div><dt>Розслідування</dt><dd>${work.length}</dd></div><div><dt>Вдосконалення</dt><dd>${improvements.length}</dd></div></dl>${relations.length ? `<section><h3>Пов’язана робота</h3><ul>${relations.slice(0, 6).map(relation => { const other = elementById(relation.fromId === id ? relation.toId : relation.fromId); return `<li><button type="button" data-element-id="${escapeHtml(other?.id || "")}"><span>${escapeHtml(familyLabels[relation.family])}</span><b>${escapeHtml(other?.label || "Недоступний елемент")}</b></button></li>`; }).join("")}</ul></section>` : `<p class="lom-muted">Зв’язків ще немає.</p>`}<div class="lom-inspector-actions"><button type="button" data-investigate-id="${escapeHtml(id)}">Зрозуміти, що відбувається</button><button type="button" data-improve-id="${escapeHtml(id)}">Спланувати свідому зміну</button><button type="button" data-open-relationship data-from-id="${escapeHtml(id)}">Додати зв’язок</button></div><details><summary>Історія та стан</summary><p>Версія ${item.version}. Оновлено ${new Date(item.updatedAt).toLocaleString("uk-UA")}.</p><p>Технічні ідентифікатори приховано у звичайній роботі.</p></details>`;
    $("#organizationInspector").classList.add("is-open");
  }

  function switchView(view) {
    currentView = view;
    $$('[data-lom-panel]').forEach(panel => panel.classList.toggle("hidden", panel.dataset.lomPanel !== view));
    $$('[data-lom-view]').forEach(button => button.classList.toggle("is-active", button.dataset.lomView === view));
    if (view === "department") renderDepartment(state());
    if (view === "role") renderRole(state());
  }

  function prepareCreate(kind, parentId, invoker) {
    $("#elementKind").value = kind || "department";
    $("#elementParent").value = parentId || (state()?.elements.find(item => item.kind === "organization")?.id || "");
    $("#elementLabel").value = "";
    $("#elementQualification").value = kind === "unknown" ? "unknown" : "known";
    toggleProcessFields();
    openDialog($("#organizationCreateDialog"), invoker);
  }
  function toggleProcessFields() { $("#processFields").classList.toggle("hidden", $("#elementKind").value !== "process"); }

  function bindEvents() {
    $("#organizationCreateForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.initializeOrganization($("#organizationName").value); announce("Організацію створено."); } catch (error) { $("#organizationName").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#organizationName").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#elementKind").addEventListener("change", toggleProcessFields);
    $("#elementCreateForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        const kind = $("#elementKind").value;
        const details = kind === "process" ? { input: $("#processInput").value.trim(), output: $("#processOutput").value.trim(), result: $("#processResult").value.trim() } : {};
        const created = repository.createElement({ kind, label: $("#elementLabel").value, qualification: $("#elementQualification").value, parentId: $("#elementParent").value || null, details });
        selectedId = created.id; closeDialog($("#organizationCreateDialog")); renderInspector(created.id); announce(`${kindLabels[kind]} додано.`);
      } catch (error) { $("#elementLabel").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#elementLabel").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#relationshipForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.createRelationship({ family: $("#relationshipFamily").value, fromId: $("#relationshipFrom").value, toId: $("#relationshipTo").value, label: $("#relationshipLabel").value }); closeDialog($("#relationshipDialog")); announce("Зв’язок створено."); } catch (error) { $("#relationshipTo").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#relationshipTo").addEventListener("change", event => event.currentTarget.setCustomValidity(""));
    $("#improvementForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.createImprovement({ elementId: $("#improvementElementId").value, title: $("#improvementTitle").value, proposedChange: $("#improvementChange").value }); closeDialog($("#improvementDialog")); announce("Пропозицію збережено окремо від поточної моделі."); } catch (error) { $("#improvementChange").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#improvementChange").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#organizationSearch").addEventListener("input", event => {
      const results = repository.query({ term: event.currentTarget.value }).elements;
      if (event.currentTarget.value.trim() && results.length) { selectedId = results[0].id; renderInspector(selectedId); renderMap(state()); }
      $("#modelStateLabel").textContent = event.currentTarget.value.trim() ? `${results.length} збігів` : "Актуальна модель";
    });
    document.addEventListener("keydown", event => { if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !$("#organizationApp").classList.contains("hidden")) { event.preventDefault(); $("#organizationSearch").focus(); } });
    document.addEventListener("click", event => {
      const create = event.target.closest("[data-open-create],[data-create-kind]");
      const element = event.target.closest("[data-element-id]");
      const relationship = event.target.closest("[data-open-relationship]");
      const investigate = event.target.closest("[data-investigate-id]");
      const improve = event.target.closest("[data-improve-id]");
      const view = event.target.closest("[data-lom-view]");
      const lens = event.target.closest("[data-lens]");
      if (event.target.closest("[data-open-investigations]")) showInvestigations();
      if (create) prepareCreate(create.dataset.createKind || "department", create.dataset.parentId || "", create);
      if (element?.dataset.elementId) { selectedId = element.dataset.elementId; renderInspector(selectedId); renderMap(state()); if (elementById(selectedId)?.kind === "department" && currentView === "department") renderDepartment(state()); }
      if (relationship) { if (relationship.dataset.fromId) $("#relationshipFrom").value = relationship.dataset.fromId; openDialog($("#relationshipDialog"), relationship); }
      if (investigate) { const item = elementById(investigate.dataset.investigateId); repository.createInvestigationContext(item.id); showInvestigations(item); }
      if (improve) { const item = elementById(improve.dataset.improveId); $("#improvementElementId").value = item.id; $("#improvementTitle").value = `Вдосконалення: ${item.label}`; $("#improvementChange").value = ""; openDialog($("#improvementDialog"), improve); }
      if (view) switchView(view.dataset.lomView);
      if (lens) { currentLens = lens.dataset.lens; $$('[data-lens]').forEach(button => button.classList.toggle("is-active", button === lens)); renderMap(state()); }
      if (event.target.closest("[data-lom-close]")) closeDialog(event.target.closest("dialog"));
    });
    $("#closeOrganizationInspector").addEventListener("click", () => $("#organizationInspector").classList.remove("is-open"));
    $$(".lom-dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(dialog); }));
  }

  function init() {
    repository = new window.ManagementOSOperatingModel.OperatingModelRepository();
    repository.subscribe(render);
    bindEvents();
    const params = new URLSearchParams(location.search);
    if (params.has("demo") || params.get("mode") === "investigation" || params.has("investigation")) showInvestigations();
    else showOrganization();
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
}());
