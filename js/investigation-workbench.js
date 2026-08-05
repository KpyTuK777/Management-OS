(() => {
  "use strict";

  const STORAGE_KEY = "management-os-investigation-workbench-v1";
  const INVESTIGATIONS_KEY = "management-os-user-investigations-v1";

  const seed = {
    situation: {
      summary: "За останні два місяці чистий прибуток знизився на 18%, хоча виручка зросла на 3%. Витрати зросли швидше за виручку. Причина зміни поки не встановлена.",
      revisions: [{ at: "Сьогодні, 09:20", text: "Початкова ситуація сформована з повідомлення власника та демонстраційного фінансового зрізу." }]
    },
    known: [
      { id: "known-1", title: "Чистий прибуток знизився на 18%", note: "Фінансовий звіт · останні два місяці", kind: "Підтверджене твердження" },
      { id: "known-2", title: "Виручка за той самий період зросла на 3%", note: "Фінансовий звіт · однаковий період", kind: "Підтверджене твердження" },
      { id: "known-3", title: "Найбільше зростання витрат видно в B2B-напрямі", note: "Когортний аналіз · потребує деталізації", kind: "Підтверджене з обмеженням" }
    ],
    unknowns: [
      { id: "unknown-1", title: "Яка частина зростання витрат є разовою?", note: "Потрібна деталізація витрат", kind: "Відкрите питання" },
      { id: "unknown-2", title: "Чи змінився час передачі лідів між командами?", note: "Немає порівняльного SLA-зрізу", kind: "Відкрите питання" },
      { id: "unknown-3", title: "Чи однаково змінилася маржа в усіх сегментах?", note: "Потрібен сегментований P&L", kind: "Відкрите питання" }
    ],
    attention: [
      { id: "attention-1", type: "Суперечність", title: "Виручка зростає, а грошовий потік знижується", note: "Потрібно зіставити оплату, дебіторську заборгованість і часовий лаг." },
      { id: "attention-2", type: "Прогалина в доказах", title: "Відсутній CRM-зріз за сегментами", note: "Без нього не можна перевірити, чи проблема локальна для B2B." },
      { id: "attention-3", type: "Невизначеність", title: "Час початку зміни відомий лише приблизно", note: "Перші повідомлення з’явилися два місяці тому; точна дата не встановлена." },
      { id: "attention-4", type: "Суперечливий матеріал", title: "Команди по-різному описують момент погіршення", note: "Фінанси вказують на квітень, продажі — на кінець березня." }
    ],
    evidence: [
      { id: "evidence-1", type: "Звіт", title: "Фінансовий звіт Q1–Q2", source: "Фінансовий відділ", summary: "Показує динаміку виручки, витрат, чистого прибутку та грошового потоку за два місяці.", status: "verified", attribution: "Підготовлено фінансовим директором", date: "30 червня 2026", locator: "Розділ 2 · P&L", eventTime: "Травень–червень 2026", recordTime: "30 червня 2026" },
      { id: "evidence-2", type: "Аналіз", title: "Когортний аналіз клієнтів", source: "Аналітична команда", summary: "Показує зниження маржі в B2B-когорті, але не пояснює причину зміни.", status: "verified", attribution: "Підготовлено аналітичною командою", date: "2 липня 2026", locator: "Таблиця 4 · B2B", eventTime: "Квітень–червень 2026", recordTime: "2 липня 2026" },
      { id: "evidence-3", type: "Розмова", title: "Розмова з керівником продажів", source: "Нотатка власника", summary: "Керівник продажів повідомив про затримки передачі enterprise-лідів. Це атрибутоване повідомлення, а не незалежне підтвердження.", status: "unverified", attribution: "Зафіксовано Serhii Horbachenko", date: "3 липня 2026", locator: "Нотатка · абзац 3", eventTime: "Приблизно з квітня 2026", recordTime: "3 липня 2026" },
      { id: "evidence-4", type: "Журнал", title: "Журнал часу першої відповіді", source: "Локальний демонстраційний зріз", summary: "Містить неповний набір записів про час відповіді на B2B-ліди. Частина тижнів відсутня.", status: "unverified", attribution: "Джерело потребує перевірки", date: "4 липня 2026", locator: "Рядки 12–39", eventTime: "Березень–червень 2026", recordTime: "4 липня 2026" },
      { id: "evidence-5", type: "Нотатка", title: "Пояснення фінансової команди", source: "Фінансовий відділ", summary: "Фінансова команда пов’язує зміну з витратами на залучення, але не надає сегментованого розрахунку.", status: "contradiction", attribution: "Позиція фінансової команди", date: "4 липня 2026", locator: "Нотатка FIN-17", eventTime: "Не вказано", recordTime: "4 липня 2026" },
      { id: "evidence-6", type: "Схема", title: "Формальна схема передачі B2B-лідів", source: "Операційний довідник", summary: "Описує затверджений процес, але не доводить, що фактична робота відбувалася саме так.", status: "verified", attribution: "Затверджений операційний довідник", date: "15 січня 2026", locator: "Процес SALES-04", eventTime: "Чинна версія з 15 січня 2026", recordTime: "15 січня 2026" }
    ],
    hypotheses: [
      { id: "hypothesis-1", text: "Зростання часу передачі B2B-лідів знижує конверсію та маржу сегмента.", status: "Попередня", support: ["evidence-2", "evidence-3"], contradict: ["evidence-5"] },
      { id: "hypothesis-2", text: "Разові витрати на залучення пояснюють більшу частину зниження прибутку.", status: "Слабко підтримана", support: ["evidence-5"], contradict: ["evidence-1"] },
      { id: "hypothesis-3", text: "Погіршення зосереджене в одному сегменті, а не в усьому бізнесі.", status: "Потребує перевірки", support: ["evidence-2"], contradict: [] },
      { id: "hypothesis-4", text: "Формальний процес передачі лідів відрізняється від фактичної взаємодії команд.", status: "Потребує перевірки", support: ["evidence-3", "evidence-6"], contradict: [] }
    ],
    workingSet: [],
    timeline: [
      { id: "time-1", title: "Команда продажів помітила збільшення часу відповіді", description: "Точний день не встановлено; різні джерела називають кінець березня або квітень.", eventTime: "Кінець березня — квітень 2026", recordTime: "3 липня 2026", source: "Розмова з керівником продажів", certainty: "Час невизначений" },
      { id: "time-2", title: "У фінансових даних видно зростання витрат", description: "Зміна спостерігається в агрегованому звіті; причинне пояснення відсутнє.", eventTime: "Травень–червень 2026", recordTime: "30 червня 2026", source: "Фінансовий звіт Q1–Q2", certainty: "Період підтверджено" },
      { id: "time-3", title: "Відкрито операційне розслідування", description: "Поточна ситуація сформована як робоче представлення, а не встановлена причина.", eventTime: "4 липня 2026", recordTime: "4 липня 2026", source: "Management OS · локальний прототип", certainty: "Час запису відомий" }
    ]
  };

  const clone = value => JSON.parse(JSON.stringify(value));
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  let state = clone(seed);
  let activeInvestigation = null;
  let activeKind = "demo";
  let currentFilter = "all";
  let focused = null;
  let demoMetricsMarkup = "";

  function loadState() {
    if (activeKind === "user" && activeInvestigation) return clone(activeInvestigation.data);
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return stored && stored.version === 1 ? { ...clone(seed), ...stored.data } : clone(seed);
    } catch (_) {
      return clone(seed);
    }
  }

  function persist() {
    if (activeKind === "demo") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data: state }));
      return;
    }
    const records = loadInvestigations();
    const index = records.findIndex(item => item.id === activeInvestigation.id);
    activeInvestigation = { ...activeInvestigation, updatedAt: new Date().toISOString(), data: clone(state) };
    if (index >= 0) records[index] = activeInvestigation; else records.unshift(activeInvestigation);
    localStorage.setItem(INVESTIGATIONS_KEY, JSON.stringify({ version: 1, investigations: records }));
  }

  function loadInvestigations() {
    try {
      const stored = JSON.parse(localStorage.getItem(INVESTIGATIONS_KEY));
      return stored?.version === 1 && Array.isArray(stored.investigations) ? stored.investigations : [];
    } catch (_) { return []; }
  }

  function emptyInvestigation(title, situation) {
    return {
      id: `INV-${Date.now()}`,
      title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: { situation: { summary: situation, revisions: [] }, known: [], unknowns: [], attention: [], evidence: [], hypotheses: [], workingSet: [], timeline: [] }
    };
  }

  function announce(message) {
    $("#appAnnouncement").textContent = message;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  function evidenceById(id) {
    return state.evidence.find(item => item.id === id);
  }

  function itemById(id) {
    return [...state.known, ...state.unknowns, ...state.attention, ...state.evidence, ...state.hypotheses, ...state.timeline].find(item => item.id === id);
  }

  function statusLabel(status) {
    return { verified: "Перевірено", unverified: "Потребує перевірки", contradiction: "Суперечливий" }[status] || status;
  }

  function renderSituation() {
    $("#situationSummary").textContent = state.situation.summary;
    $("#revisionCount").textContent = `${state.situation.revisions.length} ${state.situation.revisions.length === 1 ? "версія" : "версії"}`;
    $("#revisionList").innerHTML = state.situation.revisions.map(item => `<li><strong>${escapeHtml(item.at)}</strong> — ${escapeHtml(item.text)}</li>`).join("");
    renderCompactList("#knownList", state.known);
    renderCompactList("#unknownList", state.unknowns);
    if (!state.known.length) $("#knownList").innerHTML = `<div class="honest-empty"><strong>Нічого ще не підтверджено.</strong><p>Додайте перший матеріал, щоб почати перевірку ситуації.</p><button class="primary-button" type="button" data-start-material>Додати перший матеріал</button></div>`;
    if (!state.unknowns.length) $("#unknownList").innerHTML = `<div class="honest-empty"><strong>Запишіть питання, які ще потрібно перевірити.</strong><p>Питання не стає фактом або завданням.</p></div>`;
    $("#attentionCount").textContent = `${state.attention.length} відкриті`;
    $("#attentionGrid").innerHTML = state.attention.length ? state.attention.map(item => `<button class="attention-card" type="button" data-inspect="${item.id}"><span>${escapeHtml(item.type)}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.note)}</small></button>`).join("") : `<div class="honest-empty"><strong>Суперечностей і прогалин ще не зафіксовано.</strong><p>Тут з’являться лише ті, які ви справді встановите.</p></div>`;
  }

  function renderCompactList(selector, items) {
    $(selector).innerHTML = items.map(item => `<button class="compact-item" type="button" data-inspect="${item.id}"><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.note)}</small></span><span>Переглянути</span></button>`).join("");
  }

  function renderEvidence() {
    const visible = currentFilter === "all" ? state.evidence : state.evidence.filter(item => item.status === currentFilter);
    $("#evidenceTabCount").textContent = state.evidence.length;
    $("#evidenceList").innerHTML = visible.length ? visible.map(item => {
      const inSet = state.workingSet.includes(item.id);
      return `<article class="evidence-card" data-evidence-status="${item.status}">
        <span class="evidence-type" aria-hidden="true">${escapeHtml(item.type.slice(0, 2).toUpperCase())}</span>
        <button class="card-main compact-item" type="button" data-inspect="${item.id}"><span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><span class="evidence-card__meta"><span class="semantic-status semantic-status--${item.status}">${statusLabel(item.status)}</span><small>${escapeHtml(item.source)} · ${escapeHtml(item.date)}</small></span></span><span>Інспектор</span></button>
        <div class="evidence-actions"><button type="button" data-inspect="${item.id}" aria-label="Переглянути ${escapeHtml(item.title)}">⌕</button><button class="${inSet ? "is-added" : ""}" type="button" data-working-set="${item.id}" aria-label="${inSet ? "Вилучити з" : "Додати до"} робочого набору">${inSet ? "✓" : "+"}</button></div>
      </article>`;
    }).join("") : `<div class="empty-results"><strong>${state.evidence.length ? "Матеріалів із таким статусом немає" : "Матеріалів ще немає"}</strong><p>${state.evidence.length ? "Змініть фільтр або додайте матеріал." : "Додайте перший матеріал. Він залишиться неперевіреним, доки людина не підтвердить його."}</p><button class="primary-button" type="button" data-start-material>Додати матеріал</button></div>`;
  }

  function renderWorkingSet() {
    const items = state.workingSet.map(evidenceById).filter(Boolean);
    $("#workingSetCount").textContent = items.length;
    $("#workingSetEmpty").classList.toggle("hidden", items.length > 0);
    $("#workingSetList").innerHTML = items.map(item => `<div class="working-set-item"><button type="button" data-inspect="${item.id}" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</button><button type="button" data-working-set="${item.id}" aria-label="Вилучити ${escapeHtml(item.title)} з робочого набору">×</button></div>`).join("");
  }

  function renderHypotheses() {
    $("#reasoningTabCount").textContent = state.hypotheses.length;
    $("#hypothesisList").innerHTML = state.hypotheses.length ? state.hypotheses.map((item, index) => {
      const support = item.support.map(evidenceById).filter(Boolean);
      const contradict = item.contradict.map(evidenceById).filter(Boolean);
      return `<article class="hypothesis-card"><button class="card-main compact-item" type="button" data-inspect="${item.id}"><span><span class="hypothesis-card__number">Гіпотеза ${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(item.text)}</h3><p><span class="semantic-status semantic-status--unverified">${escapeHtml(item.status)}</span></p><div class="hypothesis-card__evidence"><span>Підтримують: ${support.length} · Суперечать: ${contradict.length}</span><p>${support.map(value => escapeHtml(value.title)).join("; ") || "Підтримувальні матеріали не додано"}</p></div></span><span>Переглянути</span></button></article>`;
    }).join("") : `<div class="empty-results"><strong>Робочих версій ще немає</strong><p>Додавайте гіпотезу лише тоді, коли маєте версію для перевірки.</p></div>`;
    const relationships = state.hypotheses.flatMap(hypothesis => [
      ...hypothesis.support.map(id => ({ evidence: evidenceById(id), hypothesis, relation: "підтримує" })),
      ...hypothesis.contradict.map(id => ({ evidence: evidenceById(id), hypothesis, relation: "суперечить" }))
    ]).filter(item => item.evidence);
    $("#relationshipList").innerHTML = relationships.length ? relationships.map(item => `<div class="relationship-row"><strong>${escapeHtml(item.evidence.title)}</strong><span>— ${item.relation} →</span><strong>${escapeHtml(item.hypothesis.text)}</strong></div>`).join("") : `<div class="honest-empty"><strong>Зв’язків ще немає.</strong><p>Вони з’являться, коли матеріали будуть пов’язані з робочими версіями.</p></div>`;
  }

  function renderTimeline() {
    $("#timelineList").innerHTML = state.timeline.length ? state.timeline.map(item => `<li class="timeline-event"><time>${escapeHtml(item.eventTime)}</time><span class="timeline-event__marker" aria-hidden="true"></span><div><button class="card-main compact-item" type="button" data-inspect="${item.id}"><span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><dl><div><dt>Час події</dt><dd>${escapeHtml(item.eventTime)}</dd></div><div><dt>Час запису</dt><dd>${escapeHtml(item.recordTime)}</dd></div><div><dt>Межа</dt><dd>${escapeHtml(item.certainty)}</dd></div></dl></span><span>Переглянути</span></button></div></li>`).join("") : `<li class="honest-empty"><strong>Подій ще не додано.</strong><p>Хронологія лишається порожньою, доки події не підтверджені матеріалами.</p></li>`;
  }

  function inspect(id) {
    const item = itemById(id);
    if (!item) return;
    focused = id;
    $("#inspectorTitle").textContent = item.title || item.text;
    $("#inspectorEmpty").classList.add("hidden");
    $("#inspectorContent").classList.remove("hidden");
    const fields = [];
    if (item.kind) fields.push(["Клас", item.kind]);
    if (item.type) fields.push(["Тип", item.type]);
    if (item.status) fields.push(["Статус", statusLabel(item.status)]);
    if (item.source) fields.push(["Джерело", item.source]);
    if (item.attribution) fields.push(["Атрибуція", item.attribution]);
    if (item.date) fields.push(["Дата джерела", item.date]);
    if (item.eventTime) fields.push(["Час події", item.eventTime]);
    if (item.recordTime) fields.push(["Час запису", item.recordTime]);
    if (item.locator) fields.push(["Локатор", item.locator]);
    if (item.certainty) fields.push(["Межа часу", item.certainty]);
    if (item.support) fields.push(["Підтримують", item.support.map(id => evidenceById(id)?.title).filter(Boolean).join("; ") || "Немає"]);
    if (item.contradict) fields.push(["Суперечать", item.contradict.map(id => evidenceById(id)?.title).filter(Boolean).join("; ") || "Немає"]);
    const summary = item.summary || item.note || item.description || item.text || item.title;
    $("#inspectorContent").innerHTML = `<div class="inspector-summary">${escapeHtml(summary)}</div><dl>${fields.map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl><details class="inspector-details"><summary>Технічні деталі</summary><pre>ID: ${escapeHtml(item.id)}\nЛокальний приклад: так\nКанонічні повноваження: відсутні</pre></details>`;
    if (window.innerWidth < 921) $("#inspectorPanel").scrollIntoView({ block: "start", behavior: "smooth" });
    announce(`Відкрито інспектор: ${item.title || item.text}`);
  }

  function closeInspector() {
    focused = null;
    $("#inspectorTitle").textContent = "Нічого не вибрано";
    $("#inspectorEmpty").classList.remove("hidden");
    $("#inspectorContent").classList.add("hidden");
    $("#inspectorContent").replaceChildren();
  }

  function toggleWorkingSet(id) {
    const item = evidenceById(id);
    if (!item) return;
    const index = state.workingSet.indexOf(id);
    if (index >= 0) {
      state.workingSet.splice(index, 1);
      announce(`${item.title} вилучено з робочого набору. Статус матеріалу не змінився.`);
    } else {
      state.workingSet.push(id);
      announce(`${item.title} додано до робочого набору. Це не змінює статус матеріалу.`);
    }
    persist();
    renderEvidence();
    renderWorkingSet();
  }

  function switchView(view) {
    $$("[data-workspace-view]").forEach(section => section.classList.toggle("is-active", section.dataset.workspaceView === view));
    $$("[data-view]").forEach(button => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    history.replaceState(null, "", `#${view}`);
    announce(`Відкрито розділ ${$("[data-view].is-active").textContent.trim()}`);
  }

  function updateHypothesisEvidenceOptions() {
    $("#hypothesisEvidence").innerHTML = `<option value="">Без підтримувального матеріалу</option>${state.evidence.map(item => `<option value="${item.id}">${escapeHtml(item.title)} · ${statusLabel(item.status)}</option>`).join("")}`;
  }

  function showStart() {
    $("#startPage").classList.remove("hidden");
    $("#workbenchShell").classList.add("hidden");
    history.replaceState(null, "", location.pathname);
    renderSavedInvestigations();
  }

  function renderSavedInvestigations() {
    const records = loadInvestigations();
    $("#savedInvestigationList").innerHTML = records.length ? records.map(item => `<button class="saved-investigation" type="button" data-open-investigation="${escapeHtml(item.id)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.data.situation.summary)}</span><small>Оновлено ${new Date(item.updatedAt).toLocaleDateString("uk-UA")}</small></button>`).join("") : `<div class="honest-empty"><strong>Збережених розслідувань ще немає.</strong><p>Створене розслідування збережеться лише в цьому браузері.</p></div>`;
  }

  function openWorkbench(record, kind) {
    activeKind = kind;
    activeInvestigation = kind === "user" ? record : null;
    state = kind === "user" ? clone(record.data) : loadState();
    $("#startPage").classList.add("hidden");
    $("#workbenchShell").classList.remove("hidden");
    const title = kind === "demo" ? "Чому прибуток знижується, хоча виручка зростає?" : record.title;
    $(".investigation-header h1").textContent = title;
    $(".matter-identity strong").textContent = `${kind === "demo" ? "MAT-0247" : record.id} · ${title}`;
    const rail = $(".rail-matter");
    rail.querySelector("strong").textContent = kind === "demo" ? "MAT-0247" : record.id;
    rail.querySelectorAll("span")[0].textContent = title;
    $(".prototype-state").textContent = kind === "demo" ? "Демонстраційні дані" : "Локально збережено";
    $("#materialForm .form-boundary").textContent = kind === "demo" ? "Матеріал буде позначено як неперевірений. Це зміна демонстраційного кейсу в цьому браузері." : "Матеріал буде позначено як неперевірений і збережено лише в цьому браузері.";
    $("#resetWorkspace").classList.toggle("hidden", kind !== "demo");
    if (kind === "demo") $(".metric-row").innerHTML = demoMetricsMarkup;
    else $(".metric-row").replaceChildren();
    $(".metric-row").classList.toggle("hidden", kind !== "demo");
    $(".revision-history").classList.toggle("hidden", kind !== "demo");
    $("[data-view='situation'] span").textContent = kind === "demo" ? "5" : "0";
    const metaValues = $(".investigation-meta").querySelectorAll("dd");
    if (kind === "user") {
      metaValues[0].textContent = "У роботі";
      metaValues[1].textContent = "Ви";
      metaValues[2].textContent = "щойно";
      $(".working-set-panel > p").textContent = "Тримайте тут матеріали, які ви зараз активно вивчаєте.";
      $("#workingSetEmpty strong").textContent = "Робочий набір порожній";
      $("#workingSetEmpty span").textContent = "Додайте сюди матеріал, який зараз розглядаєте.";
    }
    renderAll();
    closeInspector();
    const requestedView = location.hash.slice(1);
    switchView(["situation", "evidence", "reasoning", "timeline"].includes(requestedView) ? requestedView : "situation");
  }

  function bindEvents() {
    document.addEventListener("click", event => {
      const inspectControl = event.target.closest("[data-inspect]");
      const setControl = event.target.closest("[data-working-set]");
      const viewControl = event.target.closest("[data-view]");
      const filterControl = event.target.closest("[data-evidence-filter]");
      const materialControl = event.target.closest("[data-start-material]");
      const openControl = event.target.closest("[data-open-investigation]");
      if (inspectControl) inspect(inspectControl.dataset.inspect);
      if (setControl) toggleWorkingSet(setControl.dataset.workingSet);
      if (viewControl) switchView(viewControl.dataset.view);
      if (filterControl) {
        currentFilter = filterControl.dataset.evidenceFilter;
        $$("[data-evidence-filter]").forEach(button => button.classList.toggle("is-active", button === filterControl));
        renderEvidence();
      }
      if (materialControl) { switchView("evidence"); $("#materialDialog").showModal(); }
      if (openControl) {
        const record = loadInvestigations().find(item => item.id === openControl.dataset.openInvestigation);
        if (record) openWorkbench(record, "user");
      }
    });

    $("#startInvestigation").addEventListener("click", () => {
      $("#creationDialog").showModal();
      $("#creationTitle").focus();
    });
    $("#openSaved").addEventListener("click", () => {
      renderSavedInvestigations();
      $("#savedInvestigations").classList.toggle("hidden");
      $("#openSaved").setAttribute("aria-expanded", $("#savedInvestigations").classList.contains("hidden") ? "false" : "true");
    });
    const closeCreationDialog = () => {
      $("#creationForm").reset();
      $("#creationTitle").setCustomValidity("");
      $("#creationSituation").setCustomValidity("");
      $("#creationDialog").close();
      if (!$("#startPage").classList.contains("hidden")) $("#startInvestigation").focus();
    };
    $$('[data-close-creation]').forEach(button => button.addEventListener("click", closeCreationDialog));
    $("#creationDialog").addEventListener("close", () => {
      if (!$("#startPage").classList.contains("hidden")) $("#startInvestigation").focus();
    });
    $("#creationDialog").addEventListener("keydown", event => {
      if (event.key === "Escape") { event.preventDefault(); closeCreationDialog(); }
      if (event.key === "Enter" && event.target === $("#creationTitle")) { event.preventDefault(); $("#creationForm").requestSubmit(); }
    });
    [$("#creationTitle"), $("#creationSituation")].forEach(input => input.addEventListener("input", () => input.setCustomValidity("")));
    $("#creationForm").addEventListener("submit", event => {
      event.preventDefault();
      const titleInput = $("#creationTitle");
      const situationInput = $("#creationSituation");
      const title = titleInput.value.trim();
      const situation = situationInput.value.trim();
      titleInput.setCustomValidity(title ? "" : "Вкажіть назву розслідування.");
      situationInput.setCustomValidity(situation ? "" : "Опишіть початкову ситуацію.");
      if (!title || !situation) { $("#creationForm").reportValidity(); return; }
      const record = emptyInvestigation(title, situation);
      activeInvestigation = record;
      activeKind = "user";
      state = clone(record.data);
      persist();
      $("#creationForm").reset();
      $("#creationDialog").close();
      openWorkbench(activeInvestigation, "user");
    });

    $("#unknownForm").addEventListener("submit", event => {
      event.preventDefault();
      const input = $("#unknownInput");
      state.unknowns.push({ id: `unknown-${Date.now()}`, title: input.value.trim(), note: "Додано власником · ще не досліджено", kind: "Відкрите питання" });
      input.value = "";
      persist();
      renderSituation();
      announce("Відкрите питання додано. Воно не стало фактом або завданням.");
    });

    $("#addMaterial").addEventListener("click", () => $("#materialDialog").showModal());
    $("#addHypothesis").addEventListener("click", () => { updateHypothesisEvidenceOptions(); $("#hypothesisDialog").showModal(); });
    $("#editSituation").addEventListener("click", () => { $("#situationInput").value = state.situation.summary; $("#situationDialog").showModal(); });

    $("#materialForm").addEventListener("submit", event => {
      event.preventDefault();
      const item = {
        id: `evidence-${Date.now()}`,
        type: $("#materialType").value,
        title: $("#materialTitle").value.trim(),
        source: $("#materialSource").value.trim(),
        summary: $("#materialSummary").value.trim(),
        status: "unverified",
        attribution: "Додано власником у локальному прототипі",
        date: "Сьогодні",
        locator: "Локальний матеріал · локатор відсутній",
        eventTime: "Не вказано",
        recordTime: "Сьогодні"
      };
      state.evidence.push(item);
      persist();
      $("#materialForm").reset();
      $("#materialDialog").close();
      renderEvidence();
      announce(`${item.title} додано як неперевірений локальний матеріал.`);
    });

    $("#hypothesisForm").addEventListener("submit", event => {
      event.preventDefault();
      const evidenceId = $("#hypothesisEvidence").value;
      const item = { id: `hypothesis-${Date.now()}`, text: $("#hypothesisText").value.trim(), status: "Попередня", support: evidenceId ? [evidenceId] : [], contradict: [] };
      state.hypotheses.push(item);
      persist();
      $("#hypothesisForm").reset();
      $("#hypothesisDialog").close();
      renderHypotheses();
      announce("Гіпотезу додано як попередню робочу версію.");
    });

    $("#situationForm").addEventListener("submit", event => {
      event.preventDefault();
      const previous = state.situation.summary;
      state.situation.summary = $("#situationInput").value.trim();
      state.situation.revisions.push({ at: "Сьогодні · нова версія", text: `Попередню версію збережено: ${previous}` });
      persist();
      $("#situationDialog").close();
      renderSituation();
      announce("Поточну ситуацію уточнено. Попередню версію збережено в історії.");
    });

    $("#closeInspector").addEventListener("click", closeInspector);
    $("#resetWorkspace").addEventListener("click", () => {
      if (!window.confirm("Відновити початкові демонстраційні дані? Локальні зміни цього прикладу буде втрачено.")) return;
      localStorage.removeItem(STORAGE_KEY);
      state = clone(seed);
      focused = null;
      renderAll();
      closeInspector();
      announce("Початковий приклад відновлено.");
    });
    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "quiet-button";
    backButton.id = "backToStart";
    backButton.textContent = "До початку";
    backButton.addEventListener("click", showStart);
    $(".command-status").prepend(backButton);
    $("#mobileRailToggle").addEventListener("click", () => {
      const open = document.body.classList.toggle("rail-open");
      $("#mobileRailToggle").setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderAll() {
    renderSituation();
    renderEvidence();
    renderWorkingSet();
    renderHypotheses();
    renderTimeline();
  }

  function init() {
    demoMetricsMarkup = $(".metric-row").innerHTML;
    bindEvents();
    const params = new URLSearchParams(location.search);
    if (params.get("demo") === "MAT-0247") openWorkbench(null, "demo");
    else {
      const record = loadInvestigations().find(item => item.id === params.get("investigation"));
      if (record) openWorkbench(record, "user"); else showStart();
    }
  }

  init();
})();
