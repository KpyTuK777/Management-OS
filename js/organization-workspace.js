(function () {
  "use strict";

  const $ = selector => document.querySelector(selector);
  const $$ = selector => Array.from(document.querySelectorAll(selector));
  const kindLabels = {
    organization: "Організація", department: "Підрозділ", role: "Роль", process: "Процес",
    system: "Система", sop: "SOP", measure: "KPI / показник", report: "Регулярний звіт",
    meeting: "Регулярна зустріч", interaction: "Взаємодія", unknown: "Невідома ділянка", person: "Людина"
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
  let mapExpanded = false;
  let focusMapSelection = false;
  let draggedElementId = null;
  let pendingUndo = null;
  const lensViewport = { structure: { left: 0, top: 0 }, operations: { left: 0, top: 0 }, flows: { left: 0, top: 0 } };
  const modalInvokers = new WeakMap();

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }
  function announce(message) { $("#organizationAnnouncement").textContent = message; }
  function state() { return repository.snapshot(); }
  function elementById(id) { return state()?.elements.find(item => item.id === id); }
  function personById(id) { return state()?.persons?.find(item => item.id === id); }
  function activePeopleRelations(at = new Date().toISOString()) {
    const time = new Date(at).getTime();
    return state()?.peopleRelationships?.filter(item => item.lifecycle === "active" && new Date(item.effectiveFrom).getTime() <= time && (!item.effectiveTo || new Date(item.effectiveTo).getTime() > time)) || [];
  }
  function relationsFor(id) { return state()?.relationships.filter(item => item.lifecycle === "active" && (item.fromId === id || item.toId === id)) || []; }
  function actualInvestigations() {
    try {
      const stored = JSON.parse(localStorage.getItem("management-os-user-investigations-v1") || "{}");
      return Array.isArray(stored.investigations) ? stored.investigations : [];
    } catch (_) { return []; }
  }
  function organizationInvestigations() { return actualInvestigations().filter(item => item.data?.organizationContext?.workspaceId === state()?.workspaceId); }
  function investigationsFor(id) { return organizationInvestigations().filter(item => item.data.organizationContext.elementId === id); }

  function setSurfaceHistory(surface, replace) {
    const url = surface === "organization" ? "index.html?surface=organization" : "index.html?surface=investigations";
    history[replace ? "replaceState" : "pushState"]({ managementSurface: surface, returnToOrganization: surface === "investigations" && !replace }, "", url);
  }
  function returnToOrganization() {
    if (history.state?.managementSurface === "investigations" && history.state.returnToOrganization) history.back();
    else showOrganization({ history: true });
  }
  function showOrganization(options = {}) {
    $("#organizationApp").classList.remove("hidden");
    $("#startPage").classList.add("hidden");
    $("#workbenchShell").classList.add("hidden");
    document.body.classList.add("lom-mode");
    if (options.history) setSurfaceHistory("organization", options.replace);
  }
  function showInvestigations(context, options = {}) {
    if (mapExpanded) setMapExpanded(false);
    $("#organizationApp").classList.add("hidden");
    $("#startPage").classList.remove("hidden");
    $("#workbenchShell").classList.add("hidden");
    document.body.classList.remove("lom-mode");
    if (options.history) setSurfaceHistory("investigations", options.replace);
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
    } else sessionStorage.removeItem("management-os-pending-organization-context-v1");
  }

  function openDialog(dialog, invoker) {
    modalInvokers.set(dialog, invoker || document.activeElement);
    dialog.showModal();
    window.setTimeout(() => (dialog.querySelector("[data-lom-autofocus]") || dialog.querySelector("input,select,textarea,button"))?.focus(), 0);
  }
  function closeDialog(dialog) {
    dialog.close();
    if (dialog.id === "organizationMenuDialog") $("#organizationMenuButton").setAttribute("aria-expanded", "false");
    modalInvokers.get(dialog)?.focus?.();
  }

  function resetOrganizationContext() {
    selectedId = null;
    currentView = "map";
    currentLens = "structure";
    $("#organizationSearch").value = "";
    $("#organizationInspector").classList.remove("is-open");
    $(".lom-workspace").classList.remove("has-inspector");
    $("#organizationInspectorTitle").textContent = "Оберіть елемент";
    $("#organizationInspectorContent").innerHTML = `<div class="lom-honest-empty"><strong>Контекст з’явиться тут</strong><p>Оберіть елемент на карті або знайдіть його через пошук.</p></div>`;
    $$('[data-lom-panel]').forEach(panel => panel.classList.toggle("hidden", panel.dataset.lomPanel !== "map"));
    $$('[data-lom-view]').forEach(button => button.classList.toggle("is-active", button.dataset.lomView === "map"));
    $$('[data-lens]').forEach(button => button.classList.toggle("is-active", button.dataset.lens === "structure"));
  }

  function renderOrganizationList() {
    const organizations = repository.listOrganizations();
    $("#organizationList").innerHTML = organizations.map(item => `<button type="button" class="${item.active ? "is-active" : ""}" data-organization-id="${escapeHtml(item.workspaceId)}" ${item.active ? 'aria-current="true"' : ""}><span>${escapeHtml(item.label)}</span><small>${item.active ? "Поточна" : "Перейти"}</small></button>`).join("");
  }

  function render() {
    const model = state();
    const hasOrganization = Boolean(model?.elements.some(item => item.kind === "organization"));
    $("#organizationFirstUse").classList.toggle("hidden", hasOrganization);
    $("#organizationShell").classList.toggle("hidden", !hasOrganization);
    if (!hasOrganization) return;
    const organization = model.elements.find(item => item.kind === "organization");
    $("#organizationTitle").textContent = organization.label;
    $("#organizationMenuButton").setAttribute("aria-label", `Керувати організаціями. Поточна: ${organization.label}`);
    renderOrganizationList();
    const departments = model.elements.filter(item => item.kind === "department").length;
    const roles = model.elements.filter(item => item.kind === "role").length;
    $("#modelSummary").textContent = `${departments} підрозділів · ${roles} ролей`;
    const recovery = repository.recoveryInfo();
    $("#persistenceState").textContent = "Збережено локально";
    if (recovery.recovered) {
      $("#modelStateLabel").textContent = "Відновлено попередній надійний стан";
      $("#modelStateLabel").closest("span").querySelector("i").style.background = "var(--lom-warning)";
    }
    populateSelects(model);
    renderMap(model);
    renderDepartment(model);
    renderRole(model);
    renderPerson(model);
    renderProcesses(model);
    if (selectedId && elementById(selectedId)) renderInspector(selectedId);
  }

  function populateSelects(model) {
    const options = model.elements.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)} · ${escapeHtml(kindLabels[item.kind])}</option>`).join("");
    $("#relationshipFrom").innerHTML = options;
    $("#relationshipTo").innerHTML = options;
    $("#elementParent").innerHTML = `<option value="">Поки не розміщено</option>${model.elements.filter(item => ["organization", "department"].includes(item.kind)).map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("")}`;
  }

  function relationshipEndpointKinds(family) {
    const organizational = ["organization", "department", "role"];
    const work = ["process", "system", "sop", "measure", "report", "meeting"];
    if (family === "reporting") return { from: ["department", "role"], to: organizational };
    if (["information-flow", "material-flow"].includes(family)) return { from: ["department"], to: ["department"] };
    if (family === "responsibility") return { from: ["department", "role"], to: work };
    if (family === "interaction") return { from: ["department"], to: ["department"] };
    if (family === "dependency") return { from: [...organizational, "process"], to: [...organizational, ...work] };
    return { from: [...organizational, "process"], to: [...work, "department"] };
  }

  function updateRelationshipEndpoints(family, preferredFrom) {
    const model = state();
    const kinds = relationshipEndpointKinds(family);
    const options = allowed => model.elements.filter(item => allowed.includes(item.kind)).map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)} · ${escapeHtml(kindLabels[item.kind])}</option>`).join("");
    $("#relationshipFrom").innerHTML = options(kinds.from);
    $("#relationshipTo").innerHTML = options(kinds.to);
    if (preferredFrom && Array.from($("#relationshipFrom").options).some(option => option.value === preferredFrom)) $("#relationshipFrom").value = preferredFrom;
  }

  function visibleForLens(model) {
    const allowed = currentLens === "structure" ? ["containment", "reporting"] : currentLens === "flows" ? ["information-flow", "material-flow"] : ["responsibility", "participation", "dependency", "association", "interaction"];
    return model.relationships.filter(item => item.lifecycle === "active" && allowed.includes(item.family));
  }

  function focusSelectedMapNode() {
    if (currentLens !== "structure") return;
    const selected = $("#organizationMap .lom-node.is-selected") || $("#organizationMap .lom-hierarchy-node--organization > .lom-hierarchy-card > .lom-node");
    const map = $("#organizationMap");
    if (selected && map) window.setTimeout(() => {
      const mapRect = map.getBoundingClientRect();
      const selectedRect = selected.getBoundingClientRect();
      map.scrollTo({
        left: map.scrollLeft + selectedRect.left - mapRect.left - (map.clientWidth - selectedRect.width) / 2,
        top: map.scrollTop + selectedRect.top - mapRect.top - (map.clientHeight - selectedRect.height) / 2,
        behavior: "auto"
      });
    }, 0);
  }

  function renderMap(model) {
    const map = $("#organizationMap");
    const organization = model.elements.find(item => item.kind === "organization");
    const children = model.elements.filter(item => item.kind === "department");
    $("#mapEmpty").classList.toggle("hidden", children.length > 0);
    map.classList.toggle("hidden", children.length === 0);
    if (!children.length) { map.replaceChildren(); return; }
    const visibleRelations = visibleForLens(model);
    const selected = elementById(selectedId);
    const continuity = selected ? `<button type="button" class="lom-lens-context" data-element-id="${escapeHtml(selected.id)}"><span>Зараз у фокусі</span><strong>${escapeHtml(selected.label)}</strong></button>` : "";
    const relationshipIds = new Set(visibleRelations.flatMap(item => [item.fromId, item.toId]));
    const node = item => `<button type="button" class="lom-node lom-node--${escapeHtml(item.kind)} ${selectedId === item.id ? "is-selected" : ""}" data-element-id="${escapeHtml(item.id)}" ${currentLens === "structure" && item.kind === "department" ? 'draggable="true"' : ""}><span class="lom-node__kind">${escapeHtml(kindLabels[item.kind])}</span><strong>${escapeHtml(item.label)}</strong>${item.qualification === "known" ? "" : `<span class="lom-state lom-state--${escapeHtml(item.qualification)}">${escapeHtml(qualificationLabels[item.qualification])}</span>`}</button>`;
    if (currentLens === "structure") {
      const containment = model.relationships.filter(item => item.family === "containment" && item.lifecycle === "active");
      const directChildren = parentId => containment.filter(item => item.fromId === parentId).map(item => elementById(item.toId)).filter(Boolean);
      const containedIds = new Set(containment.map(item => item.toId));
      const renderHierarchyNode = item => {
        const descendants = directChildren(item.id).filter(child => child.kind === "department");
        return `<div class="lom-hierarchy-node lom-hierarchy-node--${escapeHtml(item.kind)}"><div class="lom-hierarchy-card">${node(item)}</div>${descendants.length ? `<div class="lom-hierarchy-children">${descendants.map(renderHierarchyNode).join("")}</div>` : ""}</div>`;
      };
      const rootChildren = directChildren(organization.id).filter(item => item.kind === "department");
      const unplaced = children.filter(item => !containedIds.has(item.id));
      const reporting = visibleRelations.filter(item => item.family === "reporting" && [item.fromId, item.toId].every(id => ["organization", "department"].includes(elementById(id)?.kind)));
      map.innerHTML = `<div class="lom-structure-surface" role="group" aria-label="Ієрархія організації — перетягніть підрозділ або роль до нового місця"><div class="lom-structure-actions"><button type="button" data-create-kind="department">Додати підрозділ</button></div><div class="lom-structure-tree">${renderHierarchyNode(organization)}</div>${unplaced.length ? `<section class="lom-unplaced"><h3>Ще не розміщено в ієрархії</h3><div>${unplaced.map(node).join("")}</div></section>` : ""}</div>${reporting.length ? `<section class="lom-reporting-summary"><h3>Підпорядкування</h3>${reporting.map(item => `<button type="button" data-element-id="${escapeHtml(item.fromId)}"><span>${escapeHtml(elementById(item.fromId)?.label || "Невідомо")}</span><b>звітує до</b><span>${escapeHtml(elementById(item.toId)?.label || "Невідомо")}</span></button>`).join("")}</section>` : ""}`;
      if (focusMapSelection) { focusMapSelection = false; focusSelectedMapNode(); }
      else window.setTimeout(() => map.scrollTo(lensViewport.structure), 0);
      return;
    }
    const meaningful = visibleRelations.filter(item => item.family !== "containment");
    if (currentLens === "operations") {
      const groups = [["Процеси", ["process"]], ["Системи та SOP", ["system", "sop"]], ["Показники", ["measure"]], ["Звіти та зустрічі", ["report", "meeting"]]];
      const workCards = groups.map(([title, kinds]) => { const items = model.elements.filter(item => kinds.includes(item.kind)); return `<section class="lom-operation-group"><h4>${title}</h4>${items.length ? items.map(item => `<button type="button" data-element-id="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`).join("") : `<span>Ще не описано</span>`}</section>`; }).join("");
      map.innerHTML = `<div class="lom-operating-view">${continuity}<header><h3>Як організація фактично працює</h3><button type="button" data-open-relationship>Додати робочий зв’язок</button></header><div class="lom-operation-groups">${workCards}<section class="lom-operation-group lom-operation-group--active"><h4>Активна робота</h4><span><b>${organizationInvestigations().length}</b> розслідувань</span><span><b>${model.improvements.length}</b> вдосконалень</span></section></div>${meaningful.length ? `<div class="lom-work-relations"><h4>Відповідальність і взаємодії</h4>${meaningful.map(item => `<button type="button" data-element-id="${escapeHtml(item.fromId)}">${escapeHtml(elementById(item.fromId)?.label || "Невідомо")} <b>${escapeHtml(familyLabels[item.family])}</b> ${escapeHtml(elementById(item.toId)?.label || "Невідомо")}</button>`).join("")}</div>` : ""}</div>`;
      map.scrollTo(lensViewport.operations);
      return;
    }
    map.innerHTML = `<div class="lom-operating-view">${continuity}<header><h3>Передавання між частинами організації</h3><button type="button" data-open-relationship>Додати передавання</button></header>${meaningful.length ? `<div class="lom-flow-list">${meaningful.map(item => `<button type="button" class="lom-flow-row" data-element-id="${escapeHtml(item.fromId)}"><span>${escapeHtml(elementById(item.fromId)?.label || "Невідомо")}</span><i>→</i><strong>${escapeHtml(item.label || familyLabels[item.family])}</strong><i>→</i><span>${escapeHtml(elementById(item.toId)?.label || "Невідомо")}</span></button>`).join("")}</div>` : `<div class="lom-map-no-relations"><span>Передавання ще не описані</span><button type="button" data-open-relationship>Додати передавання</button></div>`}</div>`;
    map.scrollTo(lensViewport.flows);
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
    const organization = model.elements.find(item => item.kind === "organization");
    const containment = model.relationships.filter(item => item.family === "containment" && item.lifecycle === "active");
    const parentOf = id => containment.find(item => item.toId === id)?.fromId || null;
    const departmentChildren = id => containment.filter(item => item.fromId === id).map(item => elementById(item.toId)).filter(item => item?.kind === "department");
    const parentId = parentOf(selected.id);
    const parent = elementById(parentId);
    const siblings = parentId ? departmentChildren(parentId) : [selected];
    const children = departmentChildren(selected.id);
    const path = [];
    let cursor = selected;
    const visited = new Set();
    while (cursor && !visited.has(cursor.id)) {
      visited.add(cursor.id);
      path.unshift(cursor);
      cursor = elementById(parentOf(cursor.id));
    }
    if (!path.some(item => item.id === organization.id)) path.unshift(organization);
    $("#departmentContext").textContent = `${organization.label} · ${parent?.kind === "department" ? `входить до ${parent.label}` : "підрозділ верхнього рівня"}`;
    $("#departmentBreadcrumbs").innerHTML = path.map((item, index) => `${index ? '<span aria-hidden="true">›</span>' : ""}<button type="button" ${item.kind === "department" ? `data-department-id="${escapeHtml(item.id)}"` : 'data-lom-view="map"'} ${item.id === selected.id ? 'aria-current="page"' : ""}>${escapeHtml(item.label)}</button>`).join("");
    $("#departmentSwitcher").innerHTML = siblings.map(item => `<button type="button" class="${item.id === selected.id ? "is-active" : ""}" data-department-id="${escapeHtml(item.id)}" ${item.id === selected.id ? 'aria-current="page"' : ""}>${escapeHtml(item.label)}</button>`).join("");
    $("#departmentChildren").classList.toggle("hidden", !children.length);
    $("#departmentChildren").innerHTML = children.length ? `<h3 id="departmentChildrenTitle">Підрозділи всередині ${escapeHtml(selected.label)}</h3><div>${children.map(item => `<button type="button" data-department-id="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`).join("")}</div>` : "";
    const linked = relationsFor(selected.id);
    const relatedElements = linked.map(relation => elementById(relation.fromId === selected.id ? relation.toId : relation.fromId)).filter(Boolean);
    const byKind = kind => relatedElements.filter(item => item.kind === kind);
    const card = (title, kinds, actionKind, priority) => {
      const items = kinds.flatMap(byKind);
      return `<section class="lom-workbench-card ${priority ? "lom-workbench-card--primary" : ""} ${items.length ? "" : "is-empty"}"><header><h3>${escapeHtml(title)}</h3><button type="button" data-create-kind="${escapeHtml(actionKind)}" data-parent-id="${escapeHtml(selected.id)}" aria-label="Додати: ${escapeHtml(title.toLocaleLowerCase("uk-UA"))}">+</button></header>${items.length ? `<ul>${items.map(item => `<li><button type="button" data-element-id="${escapeHtml(item.id)}"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(qualificationLabels[item.qualification])}</small></button></li>`).join("")}</ul>` : ""}</section>`;
    };
    const work = investigationsFor(selected.id).length;
    const improvements = model.improvements.filter(item => item.elementId === selected.id).length;
    const activeWork = work || improvements;
    const roles = containment.filter(item => item.fromId === selected.id).map(item => elementById(item.toId)).filter(item => item?.kind === "role");
    const permittedPeople = repository.visiblePersons({ purpose: "team-composition" });
    const peopleRelations = activePeopleRelations();
    const team = roles.map(role => {
      const capacity = repository.currentRoleCapacity(role.id, selected.id);
      const occupants = peopleRelations.filter(item => item.family === "role-occupancy" && item.targetId === role.id).map(item => personById(item.personId)).filter(person => person && permittedPeople.some(item => item.id === person.id));
      return `<article class="lom-team-role"><header><button type="button" data-element-id="${escapeHtml(role.id)}"><strong>${escapeHtml(role.label)}</strong></button><span>${capacity ? `Планова кількість: ${capacity.plannedCapacity}` : "Планову кількість не вказано"}</span></header>${occupants.length ? `<ul>${occupants.map(person => `<li><button type="button" data-person-id="${escapeHtml(person.id)}">${escapeHtml(person.displayName)}</button></li>`).join("")}</ul>` : `<p>Людей у цій ролі ще не додано</p>`}<footer><button type="button" data-open-person data-role-id="${escapeHtml(role.id)}" data-department-id="${escapeHtml(selected.id)}">+ Додати людину</button><button type="button" data-edit-capacity data-role-id="${escapeHtml(role.id)}" data-scope-id="${escapeHtml(selected.id)}">Змінити планову кількість</button></footer></article>`;
    }).join("");
    const teamCard = `<section class="lom-workbench-card lom-workbench-card--primary lom-team-composition"><header><div><h3>Команда</h3><p>Хто тут працює і яку роль виконує</p></div><button type="button" data-create-kind="role" data-parent-id="${escapeHtml(selected.id)}" aria-label="Додати роль">+</button></header>${team || `<div class="lom-honest-empty"><strong>Команду ще не описано</strong><p>Додайте роль, а потім планову кількість і людей.</p></div>`}</section>`;
    $("#departmentWorkbench").innerHTML = `${teamCard}${card("Операційні процеси", ["process"], "process", true)}${card("Системи та SOP", ["system", "sop"], "system")}${card("Показники", ["measure"], "measure")}${card("Регулярна робота", ["report", "meeting"], "report")}<section class="lom-workbench-card lom-workbench-card--work ${activeWork ? "" : "is-empty"}"><header><h3>Активна робота</h3></header>${activeWork ? `<div>${work ? `<span><b>${work}</b> розслідувань</span>` : ""}${improvements ? `<span><b>${improvements}</b> вдосконалень</span>` : ""}</div>` : ""}<button type="button" data-investigate-id="${escapeHtml(selected.id)}">Розпочати розслідування</button><button type="button" data-improve-id="${escapeHtml(selected.id)}">Запропонувати зміну</button></section>`;
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
    const scopeId = model.relationships.find(item => item.family === "containment" && item.toId === selected.id && item.lifecycle === "active")?.fromId;
    const capacity = repository.currentRoleCapacity(selected.id, scopeId);
    const permittedPeople = repository.visiblePersons({ purpose: "team-composition" });
    const occupants = activePeopleRelations().filter(item => item.family === "role-occupancy" && item.targetId === selected.id).map(item => personById(item.personId)).filter(person => person && permittedPeople.some(item => item.id === person.id));
    const sections = [
      ["Відповідальність", ["responsibility"]],
      ["Підзвітність", ["reporting"]],
      ["Участь у роботі", ["participation", "association", "interaction"]],
      ["Залежності та потоки", ["dependency", "information-flow", "material-flow"]]
    ];
    $("#roleWorkbench").innerHTML = `<div class="lom-role-overview"><span class="lom-state lom-state--${escapeHtml(selected.qualification)}">${escapeHtml(qualificationLabels[selected.qualification])}</span><p>Роль описує функцію, очікувану участь і відповідальність. Люди та роль залишаються різними сутностями.</p><div class="lom-role-capacity"><strong>${capacity ? `Планова кількість: ${capacity.plannedCapacity}` : "Планову кількість не вказано"}</strong>${scopeId ? `<button type="button" data-edit-capacity data-role-id="${escapeHtml(selected.id)}" data-scope-id="${escapeHtml(scopeId)}">Змінити план</button>` : ""}</div><section class="lom-role-occupants"><h3>Відомі люди у ролі</h3>${occupants.length ? `<ul>${occupants.map(person => `<li><button type="button" data-person-id="${escapeHtml(person.id)}">${escapeHtml(person.displayName)}</button></li>`).join("")}</ul>` : `<p>Людей ще не додано або їх показ недоступний у цьому контексті</p>`}${scopeId ? `<button type="button" data-open-person data-role-id="${escapeHtml(selected.id)}" data-department-id="${escapeHtml(scopeId)}">Додати людину</button>` : ""}</section><button type="button" data-open-relationship data-from-id="${escapeHtml(selected.id)}">Додати робочий зв’язок</button></div><div class="lom-role-sections">${sections.map(([title, families]) => { const matches = relationships.filter(item => families.includes(item.family)); return `<section><h3>${escapeHtml(title)}</h3>${matches.length ? `<ul>${matches.map(relation => { const other = elementById(relation.fromId === selected.id ? relation.toId : relation.fromId); return `<li><button type="button" data-element-id="${escapeHtml(other?.id || "")}"><span>${escapeHtml(other?.label || "Недоступний елемент")}</span><small>${escapeHtml(familyLabels[relation.family])}</small></button></li>`; }).join("")}</ul>` : `<p>Ще не визначено</p>`}</section>`; }).join("")}</div>`;
  }

  function renderPerson(model) {
    const permitted = repository.visiblePersons({ purpose: "person-workbench" });
    const reviewable = repository.visiblePersons({ purpose: "retention-review" });
    const selected = reviewable.find(item => item.id === selectedId) || permitted[0] || reviewable[0];
    if (!selected) {
      $("#personTitle").textContent = "Людей ще не додано";
      $("#personWorkbench").innerHTML = `<div class="lom-honest-empty"><strong>Додайте першу людину</strong><p>Зберігайте лише мінімальний організаційний контекст у цьому локальному профілі.</p><button class="lom-button lom-button--primary" type="button" data-open-person>Додати людину</button></div>`;
      return;
    }
    $("#personTitle").textContent = selected.displayName;
    const relations = model.peopleRelationships.filter(item => item.personId === selected.id);
    const currentIds = new Set(activePeopleRelations().filter(item => item.personId === selected.id).map(item => item.id));
    const current = relations.filter(item => currentIds.has(item.id));
    const occupancy = current.find(item => item.family === "role-occupancy");
    const membership = current.find(item => item.family === "department-membership");
    const history = relations.filter(item => item.lifecycle !== "active" || (item.effectiveTo && new Date(item.effectiveTo).getTime() <= Date.now()));
    const days = Math.max(0, Math.ceil((new Date(selected.reviewAt).getTime() - Date.now()) / 86400000));
    const suspended = !permitted.some(item => item.id === selected.id);
    $("#personWorkbench").innerHTML = `<article class="lom-person-card ${suspended ? "is-suspended" : ""}"><header><div><span class="lom-state lom-state--${escapeHtml(selected.qualification)}">${suspended ? "Потрібно підтвердити мету" : escapeHtml(qualificationLabels[selected.qualification])}</span><h3>${escapeHtml(selected.displayName)}</h3></div><span>${suspended ? "Звичайний показ призупинено" : `Перегляд мети через ${days} дн.`}</span></header>${suspended ? `<p>365-денний строк перегляду минув. Ім’я не показується у складі команди, пошуку, підказках або лічильниках, доки локальний відповідальний користувач не підтвердить подальшу мету.</p>` : `<dl><div><dt>Роль</dt><dd>${escapeHtml(elementById(occupancy?.targetId)?.label || "Не визначено")}</dd></div><div><dt>Підрозділ</dt><dd>${escapeHtml(elementById(membership?.targetId)?.label || "Не визначено")}</dd></div><div><dt>Стан</dt><dd>${selected.lifecycle === "disputed" ? "Є розбіжність" : "Актуальний локальний контекст"}</dd></div></dl><p><a href="materials.html?source=${encodeURIComponent(selected.id)}&label=${encodeURIComponent(selected.displayName)}">Надана інформація та новий запис розмови</a></p>${history.length ? `<details><summary>Попередній організаційний контекст</summary><ul>${history.map(item => `<li>${escapeHtml(item.family === "role-occupancy" ? "Роль" : "Підрозділ")}: ${escapeHtml(elementById(item.targetId)?.label || item.deletedLabel || "Недоступно")} · до ${item.effectiveTo ? new Date(item.effectiveTo).toLocaleDateString("uk-UA") : "—"}</li>`).join("")}</ul></details>` : ""}`}<footer><button type="button" data-person-action="reattest" data-person-id="${escapeHtml(selected.id)}">Підтвердити актуальність</button><button type="button" data-person-action="dispute" data-person-id="${escapeHtml(selected.id)}">Позначити розбіжність</button><button type="button" data-person-action="redact" data-person-id="${escapeHtml(selected.id)}">Приховати ім’я</button><button type="button" data-person-action="delete" data-person-id="${escapeHtml(selected.id)}">Видалити</button></footer></article>`;
  }

  function renderInspector(id) {
    const item = elementById(id);
    if (!item) { selectedId = null; return; }
    selectedId = id;
    const relations = relationsFor(id);
    const work = investigationsFor(id);
    const improvements = state().improvements.filter(entry => entry.elementId === id);
    $("#organizationInspectorTitle").textContent = item.label;
    const parentRelation = relations.find(relation => relation.family === "containment" && relation.toId === id);
    const roles = relations.filter(relation => relation.family === "containment" && relation.fromId === id && elementById(relation.toId)?.kind === "role");
    const interactions = relations.filter(relation => ["dependency", "information-flow", "material-flow", "interaction"].includes(relation.family) && elementById(relation.fromId === id ? relation.toId : relation.fromId)?.kind === "department");
    const workRelations = relations.filter(relation => !["containment", "reporting"].includes(relation.family));
    const reportingParent = relations.find(relation => relation.family === "reporting" && relation.fromId === id);
    const facts = [parentRelation ? `<div><dt>Входить до</dt><dd>${escapeHtml(elementById(parentRelation.fromId)?.label || "Організації")}</dd></div>` : "", reportingParent ? `<div><dt>Звітує до</dt><dd>${escapeHtml(elementById(reportingParent.toId)?.label || "Невідомо")}</dd></div>` : "", roles.length ? `<div><dt>Ролі</dt><dd>${roles.length}</dd></div>` : "", work.length ? `<div><dt>Активні розслідування</dt><dd>${work.length}</dd></div>` : "", improvements.length ? `<div><dt>Вдосконалення</dt><dd>${improvements.length}</dd></div>` : "", interactions.length ? `<div><dt>Взаємодії з іншими</dt><dd>${interactions.length}</dd></div>` : ""].join("");
    $("#organizationInspectorContent").innerHTML = `<div class="lom-inspector-summary"><span>${escapeHtml(kindLabels[item.kind])}</span><span>${escapeHtml(qualificationLabels[item.qualification])}</span></div>${facts ? `<dl>${facts}</dl>` : ""}${workRelations.length ? `<section><h3>Безпосередньо пов’язано</h3><ul>${workRelations.slice(0, 4).map(relation => { const other = elementById(relation.fromId === id ? relation.toId : relation.fromId); return `<li><button type="button" data-element-id="${escapeHtml(other?.id || "")}"><span>${escapeHtml(familyLabels[relation.family])}</span><b>${escapeHtml(other?.label || "Недоступний елемент")}</b></button></li>`; }).join("")}</ul></section>` : ""}<div class="lom-inspector-actions">${["department", "role"].includes(item.kind) ? `<button type="button" data-move-id="${escapeHtml(id)}">Змінити місце у структурі</button>` : ""}<button type="button" data-open-relationship data-from-id="${escapeHtml(id)}">Додати зв’язок</button><button type="button" data-investigate-id="${escapeHtml(id)}">Розпочати розслідування</button><button type="button" data-improve-id="${escapeHtml(id)}">Запропонувати зміну</button></div><details><summary>Історія та технічні відомості</summary><p>Версія ${item.version}. Оновлено ${new Date(item.updatedAt).toLocaleString("uk-UA")}.</p><p>Стан знання: ${escapeHtml(qualificationLabels[item.qualification])}.</p></details>`;
    $("#organizationInspector").classList.add("is-open");
    $(".lom-workspace").classList.add("has-inspector");
  }

  function switchView(view) {
    currentView = view;
    $$('[data-lom-panel]').forEach(panel => panel.classList.toggle("hidden", panel.dataset.lomPanel !== view));
    $$('[data-lom-view]').forEach(button => button.classList.toggle("is-active", button.dataset.lomView === view));
    if (view === "department") renderDepartment(state());
    if (view === "role") renderRole(state());
    if (view === "person") renderPerson(state());
  }

  function setMapExpanded(expanded) {
    const map = $("#organizationMap");
    const scrollPosition = { left: map.scrollLeft, top: map.scrollTop };
    mapExpanded = Boolean(expanded);
    document.body.classList.toggle("lom-map-expanded", mapExpanded);
    const control = $("#expandOrganizationMap");
    control.setAttribute("aria-pressed", String(mapExpanded));
    control.querySelector("span:last-child").textContent = mapExpanded ? "Повернутися до робочого простору" : "Розгорнути карту";
    if (mapExpanded) {
      $("#organizationInspector").classList.remove("is-open");
      $(".lom-workspace").classList.remove("has-inspector");
    }
    window.setTimeout(() => { map.scrollTo(scrollPosition); (mapExpanded ? map : control).focus(); }, 0);
  }

  function handleOrganizationSearch(value) {
    $("#organizationSearch").value = value;
    $("#expandedOrganizationSearch").value = value;
    const results = repository.query({ term: value }).elements;
    if (value.trim() && results.length) {
      const match = results[0];
      if (match.kind === "role") {
        const departmentId = state().relationships.find(item => item.family === "containment" && item.toId === match.id && item.lifecycle === "active")?.fromId;
        selectedId = departmentId || match.id;
        if (departmentId) switchView("department"); else switchView("role");
      } else {
        selectedId = match.id; focusMapSelection = match.kind === "department"; renderInspector(selectedId); renderMap(state());
      }
    }
    $("#modelStateLabel").textContent = value.trim() ? `${results.length} збігів` : "Актуальна модель";
  }

  function prepareCreate(kind, parentId, invoker) {
    $("#elementKind").value = kind || "department";
    $("#elementParent").value = parentId || (state()?.elements.find(item => item.kind === "organization")?.id || "");
    $("#elementLabel").value = "";
    $("#elementQualification").value = kind === "unknown" ? "unknown" : "known";
    $("#organizationCreateDialogTitle").textContent = `Додати ${kindLabels[kind].toLocaleLowerCase("uk-UA")}`;
    $("#organizationCreateDialogKicker").textContent = parentId ? "У поточному контексті" : "Організація";
    toggleProcessFields();
    openDialog($("#organizationCreateDialog"), invoker);
  }
  function toggleProcessFields() { $("#processFields").classList.toggle("hidden", $("#elementKind").value !== "process"); }

  function openMoveDialog(elementId, invoker) {
    const item = elementById(elementId);
    const parents = repository.validStructuralParents(elementId);
    if (!item || !parents.length) return;
    $("#moveElementId").value = elementId;
    $("#moveElementDialogTitle").textContent = `Перемістити «${item.label}»`;
    $("#moveElementParent").innerHTML = parents.map(parent => `<option value="${escapeHtml(parent.id)}">${escapeHtml(parent.label)}</option>`).join("");
    const currentParent = relationsFor(elementId).find(relation => relation.family === "containment" && relation.toId === elementId)?.fromId;
    if (currentParent && parents.some(parent => parent.id === currentParent)) $("#moveElementParent").value = currentParent;
    openDialog($("#moveElementDialog"), invoker);
  }

  function showUndo(item, previousParentId) {
    pendingUndo = previousParentId ? { elementId: item.id, parentId: previousParentId } : null;
    $("#structureUndoMessage").textContent = `${item.label} переміщено.`;
    $("#structureUndoButton").classList.toggle("hidden", !pendingUndo);
    $("#structureUndo").classList.remove("hidden");
  }

  function moveElement(elementId, parentId) {
    const item = elementById(elementId);
    const previousParentId = relationsFor(elementId).find(relation => relation.family === "containment" && relation.toId === elementId)?.fromId;
    const scopedCapacity = item?.kind === "role" ? repository.currentRoleCapacity(elementId, previousParentId) : null;
    if (scopedCapacity && previousParentId !== parentId && !window.confirm(`У поточному підрозділі діє планова кількість ${scopedCapacity.plannedCapacity}. Завершити цей план і перемістити роль?`)) return;
    const result = repository.moveElement(elementId, parentId, { endScopedCapacity: Boolean(scopedCapacity && previousParentId !== parentId) });
    selectedId = elementId;
    renderMap(state());
    renderInspector(elementId);
    if (result.changed) {
      showUndo(result.element, result.previousParentId);
      announce(`${result.element.label} переміщено до ${elementById(parentId)?.label}.`);
    }
  }

  function prepareRelationshipDialog(invoker) {
    const relationshipContext = currentView === "map" ? currentLens : "operations";
    const structure = relationshipContext === "structure";
    const flow = relationshipContext === "flows";
    $("#relationshipDialogTitle").textContent = structure ? "Вказати, кому звітує" : flow ? "Додати передавання" : "Додати робочий зв’язок";
    $("#relationshipDialogKicker").textContent = structure ? "Структура" : flow ? "Потоки" : "Робота";
    const allowed = structure ? ["reporting"] : flow ? ["information-flow", "material-flow"] : ["responsibility", "dependency", "association", "interaction"];
    Array.from($("#relationshipFamily").options).forEach(option => { option.hidden = !allowed.includes(option.value); option.disabled = !allowed.includes(option.value); });
    $("#relationshipFamily").value = allowed[0];
    $("#relationshipFamilyField").classList.toggle("hidden", allowed.length === 1);
    $("#relationshipFromField").childNodes[0].textContent = structure ? "Хто звітує?" : flow ? "Хто передає?" : "Хто або що?";
    $("#relationshipToField").childNodes[0].textContent = structure ? "Кому звітує?" : flow ? "Кому передає?" : "З ким або чим?";
    $("#relationshipLabelField").classList.toggle("hidden", structure);
    $("#relationshipSubmit").textContent = structure ? "Зберегти підзвітність" : flow ? "Додати передавання" : "Зберегти зв’язок";
    $("#relationshipLabel").value = "";
    updateRelationshipEndpoints(allowed[0], invoker.dataset.fromId || "");
    openDialog($("#relationshipDialog"), invoker);
  }

  function prepareCapacityDialog(invoker) {
    const roleId = invoker.dataset.roleId;
    const scopeId = invoker.dataset.scopeId;
    const current = repository.currentRoleCapacity(roleId, scopeId);
    $("#capacityRoleId").value = roleId;
    $("#capacityScopeId").value = scopeId;
    $("#capacityValue").value = current?.plannedCapacity || "";
    $("#capacityEffectiveFrom").value = new Date().toISOString().slice(0, 10);
    $("#capacityDialogTitle").textContent = `Планова кількість · ${elementById(roleId)?.label || "роль"}`;
    openDialog($("#capacityDialog"), invoker);
  }

  function preparePersonDialog(invoker) {
    const model = state();
    const roles = model.elements.filter(item => item.kind === "role");
    const departments = model.elements.filter(item => item.kind === "department");
    $("#personName").value = "";
    $("#personSearch").value = "";
    $("#personSearchResults").replaceChildren();
    $("#personRole").innerHTML = roles.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("");
    $("#personDepartment").innerHTML = departments.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`).join("");
    if (invoker.dataset.roleId) $("#personRole").value = invoker.dataset.roleId;
    if (invoker.dataset.departmentId) $("#personDepartment").value = invoker.dataset.departmentId;
    $("#personEffectiveFrom").value = new Date().toISOString().slice(0, 10);
    openDialog($("#personDialog"), invoker);
  }

  function bindEvents() {
    $("#organizationCreateForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.initializeOrganization($("#organizationName").value); announce("Організацію створено."); } catch (error) { $("#organizationName").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#organizationName").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#newOrganizationForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        repository.createOrganization($("#newOrganizationName").value);
        closeDialog($("#newOrganizationDialog"));
        resetOrganizationContext();
        render();
        announce("Нову порожню організацію створено.");
      } catch (error) { $("#newOrganizationName").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#newOrganizationName").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#renameOrganizationForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        repository.renameOrganization($("#renameOrganizationName").value);
        closeDialog($("#renameOrganizationDialog"));
        render();
        announce("Назву організації оновлено.");
      } catch (error) { $("#renameOrganizationName").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#renameOrganizationName").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#organizationMenuButton").addEventListener("click", event => { renderOrganizationList(); event.currentTarget.setAttribute("aria-expanded", "true"); openDialog($("#organizationMenuDialog"), event.currentTarget); });
    $("#expandOrganizationMap").addEventListener("click", () => setMapExpanded(!mapExpanded));
    $("#newOrganizationButton").addEventListener("click", () => { closeDialog($("#organizationMenuDialog")); $("#newOrganizationName").value = ""; openDialog($("#newOrganizationDialog"), $("#organizationMenuButton")); });
    $("#renameOrganizationButton").addEventListener("click", () => { closeDialog($("#organizationMenuDialog")); $("#renameOrganizationName").value = state().elements.find(item => item.kind === "organization").label; openDialog($("#renameOrganizationDialog"), $("#organizationMenuButton")); });
    $("#elementKind").addEventListener("change", toggleProcessFields);
    $("#elementCreateForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        const kind = $("#elementKind").value;
        const details = kind === "process" ? { input: $("#processInput").value.trim(), output: $("#processOutput").value.trim(), result: $("#processResult").value.trim() } : {};
        const parentId = $("#elementParent").value || null;
        const created = repository.createElement({ kind, label: $("#elementLabel").value, qualification: $("#elementQualification").value, parentId, details });
        selectedId = currentView === "department" && elementById(parentId)?.kind === "department" ? parentId : created.id;
        closeDialog($("#organizationCreateDialog"));
        if (currentView === "department") renderDepartment(state());
        if (currentView === "role") renderRole(state());
        if (currentView === "process") renderProcesses(state());
        renderInspector(selectedId);
        renderMap(state());
        announce(`${kindLabels[kind]} додано.`);
      } catch (error) { $("#elementLabel").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#elementLabel").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#relationshipForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.createRelationship({ family: $("#relationshipFamily").value, fromId: $("#relationshipFrom").value, toId: $("#relationshipTo").value, label: $("#relationshipLabel").value }); closeDialog($("#relationshipDialog")); announce("Зв’язок створено."); } catch (error) { $("#relationshipTo").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#relationshipTo").addEventListener("change", event => event.currentTarget.setCustomValidity(""));
    $("#relationshipFamily").addEventListener("change", event => { $("#relationshipLabel").value = ""; updateRelationshipEndpoints(event.currentTarget.value, ""); });
    $("#moveElementForm").addEventListener("submit", event => {
      event.preventDefault();
      try { moveElement($("#moveElementId").value, $("#moveElementParent").value); closeDialog($("#moveElementDialog")); }
      catch (error) { $("#moveElementParent").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#moveElementParent").addEventListener("change", event => event.currentTarget.setCustomValidity(""));
    $("#capacityForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        repository.createRoleCapacity({ roleId: $("#capacityRoleId").value, scopeId: $("#capacityScopeId").value, plannedCapacity: $("#capacityValue").value, effectiveFrom: $("#capacityEffectiveFrom").value ? new Date(`${$("#capacityEffectiveFrom").value}T00:00:00`).toISOString() : undefined });
        closeDialog($("#capacityDialog")); render(); announce("Планову кількість оновлено. Це не змінює дані про людей.");
      } catch (error) { $("#capacityValue").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#capacityValue").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#personForm").addEventListener("submit", event => {
      event.preventDefault();
      try {
        const departmentId = $("#personDepartment").value;
        repository.createPerson({ purpose: "team-composition", displayName: $("#personName").value, roleId: $("#personRole").value, departmentId, effectiveFrom: $("#personEffectiveFrom").value ? new Date(`${$("#personEffectiveFrom").value}T00:00:00`).toISOString() : undefined });
        selectedId = departmentId; closeDialog($("#personDialog")); render(); announce("Людину додано до команди в локальному просторі.");
      } catch (error) { $("#personName").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#personName").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#personSearch").addEventListener("input", event => {
      const term = event.currentTarget.value.trim().toLocaleLowerCase("uk-UA");
      const people = term ? repository.visiblePersons({ purpose: "occupancy-selection" }).filter(item => item.displayName.toLocaleLowerCase("uk-UA").includes(term)) : [];
      $("#personSearchResults").innerHTML = people.map(item => `<button type="button" data-assign-person-id="${escapeHtml(item.id)}">${escapeHtml(item.displayName)}</button>`).join("");
    });
    $("#structureUndoButton").addEventListener("click", () => {
      if (!pendingUndo) return;
      const undo = pendingUndo;
      pendingUndo = null;
      moveElement(undo.elementId, undo.parentId);
      $("#structureUndo").classList.add("hidden");
      announce("Структурну зміну скасовано.");
    });
    $("#improvementForm").addEventListener("submit", event => {
      event.preventDefault();
      try { repository.createImprovement({ elementId: $("#improvementElementId").value, title: $("#improvementTitle").value, proposedChange: $("#improvementChange").value }); closeDialog($("#improvementDialog")); announce("Пропозицію збережено окремо від поточної моделі."); } catch (error) { $("#improvementChange").setCustomValidity(error.message); event.currentTarget.reportValidity(); }
    });
    $("#improvementChange").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
    $("#organizationSearch").addEventListener("input", event => handleOrganizationSearch(event.currentTarget.value));
    $("#expandedOrganizationSearch").addEventListener("input", event => handleOrganizationSearch(event.currentTarget.value));
    document.addEventListener("keydown", event => { if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !$("#organizationApp").classList.contains("hidden")) { event.preventDefault(); $(mapExpanded ? "#expandedOrganizationSearch" : "#organizationSearch").focus(); } });
    document.addEventListener("click", event => {
      const create = event.target.closest("[data-open-create],[data-create-kind]");
      const element = event.target.closest("[data-element-id]");
      const relationship = event.target.closest("[data-open-relationship]");
      const move = event.target.closest("[data-move-id]");
      const investigate = event.target.closest("[data-investigate-id]");
      const improve = event.target.closest("[data-improve-id]");
      const view = event.target.closest("[data-lom-view]");
      const lens = event.target.closest("[data-lens]");
      const department = event.target.closest("[data-department-id]");
      const organization = event.target.closest("[data-organization-id]");
      const capacity = event.target.closest("[data-edit-capacity]");
      const openPerson = event.target.closest("[data-open-person]");
      const person = event.target.closest("[data-person-id]");
      const assignPerson = event.target.closest("[data-assign-person-id]");
      if (event.target.closest("[data-open-investigations]")) showInvestigations(null, { history: true });
      if (event.target.closest("[data-return-organization]")) returnToOrganization();
      if (create) prepareCreate(create.dataset.createKind || "department", create.dataset.parentId || "", create);
      if (capacity) prepareCapacityDialog(capacity);
      if (openPerson) preparePersonDialog(openPerson);
      if (assignPerson) {
        const effectiveFrom = $("#personEffectiveFrom").value ? new Date(`${$("#personEffectiveFrom").value}T00:00:00`).toISOString() : undefined;
        repository.assignPersonContext({ purpose: "occupancy-selection", personId: assignPerson.dataset.assignPersonId, roleId: $("#personRole").value, departmentId: $("#personDepartment").value, effectiveFrom });
        closeDialog($("#personDialog")); render(); announce("Людину додано до вибраної ролі.");
      }
      if (person && !person.dataset.personAction) { selectedId = person.dataset.personId; switchView("person"); renderPerson(state()); }
      if (person?.dataset.personAction) {
        const action = person.dataset.personAction;
        if (action === "reattest") repository.reattestPerson(person.dataset.personId, { purpose: "retention-review" });
        if (action === "dispute") repository.revisePerson(person.dataset.personId, { purpose: "person-workbench", lifecycle: "disputed" });
        if (action === "redact") repository.revisePerson(person.dataset.personId, { purpose: "person-workbench", lifecycle: "redacted" });
        if (action === "delete" && window.confirm("Видалити ім’я та унеможливити його відновлення зі збережених поколінь?")) { repository.deletePerson(person.dataset.personId, { purpose: "person-workbench" }); selectedId = null; }
        render();
      }
      if (element?.dataset.elementId) { selectedId = element.dataset.elementId; focusMapSelection = currentView === "map"; renderInspector(selectedId); renderMap(state()); if (elementById(selectedId)?.kind === "department" && currentView === "department") renderDepartment(state()); }
      if (relationship) prepareRelationshipDialog(relationship);
      if (move) openMoveDialog(move.dataset.moveId, move);
      if (investigate) { const item = elementById(investigate.dataset.investigateId); repository.createInvestigationContext(item.id); showInvestigations(item, { history: true }); }
      if (improve) { const item = elementById(improve.dataset.improveId); $("#improvementElementId").value = item.id; $("#improvementTitle").value = `Вдосконалення: ${item.label}`; $("#improvementChange").value = ""; openDialog($("#improvementDialog"), improve); }
      if (view) switchView(view.dataset.lomView);
      if (department) { selectedId = department.dataset.departmentId; switchView("department"); renderDepartment(state()); renderMap(state()); }
      if (organization && !organization.classList.contains("is-active")) { repository.switchOrganization(organization.dataset.organizationId); closeDialog($("#organizationMenuDialog")); resetOrganizationContext(); render(); announce("Організацію змінено."); }
      if (lens) { const map = $("#organizationMap"); lensViewport[currentLens] = { left: map.scrollLeft, top: map.scrollTop }; currentLens = lens.dataset.lens; $$('[data-lens]').forEach(button => button.classList.toggle("is-active", button === lens)); renderMap(state()); if (selectedId) renderInspector(selectedId); }
      if (event.target.closest("[data-lom-close]")) closeDialog(event.target.closest("dialog"));
    });
    $("#closeOrganizationInspector").addEventListener("click", () => { $("#organizationInspector").classList.remove("is-open"); $(".lom-workspace").classList.remove("has-inspector"); });
    $("#organizationMap").addEventListener("dragstart", event => {
      const node = event.target.closest('.lom-node[draggable="true"]');
      if (!node || currentLens !== "structure") return;
      draggedElementId = node.dataset.elementId;
      node.classList.add("is-dragging");
      const valid = new Set(repository.validStructuralParents(draggedElementId).map(item => item.id));
      $$("#organizationMap .lom-node").forEach(candidate => candidate.classList.toggle("is-valid-drop", valid.has(candidate.dataset.elementId)));
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedElementId);
    });
    $("#organizationMap").addEventListener("dragover", event => {
      const target = event.target.closest(".lom-node.is-valid-drop");
      $$("#organizationMap .lom-node.is-drop-target").forEach(node => node.classList.remove("is-drop-target"));
      if (!target || !draggedElementId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      target.classList.add("is-drop-target");
    });
    $("#organizationMap").addEventListener("drop", event => {
      const target = event.target.closest(".lom-node.is-valid-drop");
      if (!target || !draggedElementId) return;
      event.preventDefault();
      const movingId = draggedElementId;
      draggedElementId = null;
      moveElement(movingId, target.dataset.elementId);
    });
    $("#organizationMap").addEventListener("dragend", () => {
      draggedElementId = null;
      $$("#organizationMap .lom-node").forEach(node => node.classList.remove("is-dragging", "is-valid-drop", "is-drop-target"));
    });
    window.addEventListener("popstate", event => {
      if (event.state?.managementSurface === "investigations") showInvestigations(null);
      else showOrganization();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && mapExpanded) { event.preventDefault(); setMapExpanded(false); $("#expandOrganizationMap").focus(); }
    });
    $$(".lom-dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(dialog); }));
    $("#organizationMenuDialog").addEventListener("close", () => $("#organizationMenuButton").setAttribute("aria-expanded", "false"));
  }

  function init() {
    try { repository = new window.ManagementOSOperatingModel.OperatingModelRepository(); }
    catch (error) {
      showOrganization();
      $("#organizationFirstTitle").textContent = "Модель потребує відновлення";
      $("#organizationFirstUse > p:not(.lom-kicker)").textContent = error.message;
      $("#organizationCreateForm").classList.add("hidden");
      $("#organizationFirstUse .lom-local-note").textContent = "Новий стан не створено. Збережені дані залишено без змін.";
      return;
    }
    repository.subscribe(render);
    bindEvents();
    const params = new URLSearchParams(location.search);
    if (params.has("demo") || params.get("mode") === "investigation" || params.has("investigation") || params.get("surface") === "investigations") showInvestigations(null, { history: true, replace: true });
    else showOrganization({ history: true, replace: true });
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
}());
