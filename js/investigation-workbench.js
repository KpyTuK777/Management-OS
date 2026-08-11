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
  const modalInvokers = new WeakMap();

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
    try {
      if (activeKind === "demo") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data: state }));
        return true;
      }
      const records = loadInvestigations();
      const index = records.findIndex(item => item.id === activeInvestigation.id);
      const next = { ...activeInvestigation, updatedAt: new Date().toISOString(), data: clone(state) };
      if (index >= 0) records[index] = next; else records.unshift(next);
      localStorage.setItem(INVESTIGATIONS_KEY, JSON.stringify({ version: 1, investigations: records }));
      activeInvestigation = next;
      return true;
    } catch (_) {
      announce("Не вдалося зберегти зміни: локальне сховище браузера переповнене.");
      return false;
    }
  }

  function loadInvestigations() {
    try {
      const stored = JSON.parse(localStorage.getItem(INVESTIGATIONS_KEY));
      return stored?.version === 1 && Array.isArray(stored.investigations) ? stored.investigations : [];
    } catch (_) { return []; }
  }

  function emptyInvestigation(title, situation, date, organizationContext) {
    return {
      id: `INV-${Date.now()}`,
      title,
      date,
      status: "open",
      causeFound: false,
      conclusion: "",
      closedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: { situation: { summary: situation, revisions: [] }, known: [], unknowns: [], attention: [], evidence: [], hypotheses: [], linkedHypotheses: [], workingSet: [], timeline: [], lifecycle: { decision: null, plan: null, steps: [], observations: [], stabilization: null, memory: null }, organizationContext: organizationContext || null }
    };
  }

  function systemHypotheses() {
    if (typeof HypothesisAnalysis === "undefined" || typeof LearningAnalysis === "undefined" || typeof loadInsightsSourceCollections !== "function") return [];
    return HypothesisAnalysis.generateHypotheses(LearningAnalysis.calculateInsightsData(loadInsightsSourceCollections()));
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

  function materialPreview(item) {
    if (!item.dataUrl) return "";
    const mime = item.mimeType || "";
    if (mime.startsWith("image/")) return `<img class="material-preview" src="${item.dataUrl}" alt="${escapeHtml(item.title)}">`;
    if (mime.startsWith("audio/")) return `<audio class="material-preview" controls src="${item.dataUrl}">Ваш браузер не підтримує відтворення аудіо.</audio>`;
    if (mime.startsWith("video/")) return `<video class="material-preview" controls src="${item.dataUrl}"></video>`;
    if (mime === "application/pdf") return `<object class="material-preview material-preview--document" data="${item.dataUrl}" type="application/pdf"><a href="${item.dataUrl}" download="${escapeHtml(item.fileName || item.title)}">Завантажити PDF</a></object>`;
    if (mime.startsWith("text/") && item.fileText) return `<pre class="material-text-preview">${escapeHtml(item.fileText)}</pre>`;
    return `<a class="secondary-button" href="${item.dataUrl}" download="${escapeHtml(item.fileName || item.title)}">Завантажити файл</a>`;
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  function readFileText(file) {
    return new Promise(resolve => {
      if (!file.type.startsWith("text/") && !/\.(csv|tsv|md|txt)$/i.test(file.name)) { resolve(""); return; }
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).slice(0, 20000));
      reader.onerror = () => resolve("");
      reader.readAsText(file);
    });
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
        <button class="card-main compact-item" type="button" data-inspect="${item.id}"><span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><span class="evidence-card__meta"><span class="semantic-status semantic-status--${item.status}">${statusLabel(item.status)}</span><small>${escapeHtml(item.source)} · ${escapeHtml(item.date)}</small></span></span><span>Watson</span></button>
        <div class="evidence-actions"><button type="button" data-inspect="${item.id}" aria-label="Переглянути ${escapeHtml(item.title)}">⌕</button><button class="${inSet ? "is-added" : ""}" type="button" data-working-set="${item.id}" aria-pressed="${inSet}" aria-label="${inSet ? "Вилучити з" : "Додати до"} робочого набору">${inSet ? "✓" : "+"}</button>${activeKind === "user" && item.status !== "verified" ? `<button type="button" data-mark-evidence="${item.id}" aria-label="Визнати матеріал доказом">E</button>` : ""}</div>
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

  function renderInvestigationLifecycle() {
    if (activeKind !== "user" || !activeInvestigation) return;
    const linkedIds = state.linkedHypotheses || [];
    const available = systemHypotheses();
    const linked = linkedIds.map(id => available.find(item => item.id === id)).filter(Boolean);
    $("#linkedHypothesesList").innerHTML = linked.length
      ? linked.map(item => `<p class="linked-hypothesis"><strong>${escapeHtml(item.statement)}</strong></p>`).join("")
      : "<p>Ще не прив’язано.</p>";
    $("#causeState").textContent = activeInvestigation.causeFound ? "Причину знайдено" : "Причину ще не зафіксовано";
    $("#causeConclusion").textContent = activeInvestigation.conclusion || "Після перевірки доказів зафіксуйте людський висновок.";
    $("#markCauseFound").textContent = activeInvestigation.causeFound ? "Змінити висновок" : "Причину знайдено";
    $("#closeInvestigation").textContent = activeInvestigation.status === "closed" ? "Розслідування закрито" : "Перейти до рішення і зміни";
    $("#closeInvestigation").disabled = activeInvestigation.status === "closed" || !activeInvestigation.causeFound;
    const closed = activeInvestigation.status === "closed";
    ["#addMaterial", "#addHypothesis", "#editSituation", "#linkExistingHypothesis", "#markCauseFound"].forEach(selector => { $(selector).disabled = closed; });
    [...$("#unknownForm").elements].forEach(control => control.disabled = closed);
  }

  function ensureLifecycle() {
    if (!state.lifecycle) state.lifecycle = { decision: null, plan: null, steps: [], observations: [], stabilization: null, memory: null };
    state.lifecycle.steps ||= [];
    state.lifecycle.observations ||= [];
    return state.lifecycle;
  }

  function setFormEnabled(form, enabled) {
    [...form.elements].forEach(control => control.disabled = !enabled);
    form.classList.toggle("is-locked", !enabled);
  }

  function renderChangeLifecycle() {
    const lifecycle = ensureLifecycle();
    const isUser = activeKind === "user";
    const hasCause = isUser && activeInvestigation.causeFound;
    const hasDecision = Boolean(lifecycle.decision);
    const hasPlan = Boolean(lifecycle.plan);
    const allStepsDone = hasPlan && lifecycle.steps.length > 0 && lifecycle.steps.every(step => step.complete);
    const hasObservation = lifecycle.observations.length > 0;
    const hasStabilization = Boolean(lifecycle.stabilization);
    setFormEnabled($("#decisionForm"), hasCause && activeInvestigation.status !== "closed");
    setFormEnabled($("#changePlanForm"), hasDecision && activeInvestigation.status !== "closed");
    setFormEnabled($("#monitoringForm"), allStepsDone && activeInvestigation.status !== "closed");
    setFormEnabled($("#stabilizationForm"), hasObservation && activeInvestigation.status !== "closed");
    if (lifecycle.decision) {
      $("#decisionText").value = lifecycle.decision.text;
      $("#decisionRationale").value = lifecycle.decision.rationale;
      $("#decisionOwner").value = lifecycle.decision.owner;
      $("#decisionOutcome").value = lifecycle.decision.outcome;
      $("#decisionRisks").value = lifecycle.decision.risks;
    }
    if (lifecycle.plan) {
      $("#intendedState").value = lifecycle.plan.intendedState;
      $("#changeDescription").value = lifecycle.plan.description;
      $("#changeCheckpoint").value = lifecycle.plan.checkpoint;
      $("#expectedSignal").value = lifecycle.plan.expectedSignal;
      $("#changeSteps").value = lifecycle.steps.map(step => step.text).join("\n");
    }
    $("#executionSteps").innerHTML = lifecycle.steps.length ? lifecycle.steps.map(step => `<label class="execution-step ${step.complete ? "is-complete" : ""}"><input type="checkbox" data-execution-step="${escapeHtml(step.id)}" ${step.complete ? "checked" : ""} ${activeInvestigation?.status === "closed" ? "disabled" : ""}><strong>${escapeHtml(step.text)}</strong><small>${step.complete ? "Виконано" : "У роботі"}</small></label>`).join("") : `<p class="honest-empty">Після збереження плану тут з’являться кроки.</p>`;
    $("#monitoringHistory").innerHTML = lifecycle.observations.map(item => `<article class="monitoring-entry"><strong>${new Date(item.at).toLocaleString("uk-UA")}</strong><p><b>Очікували:</b> ${escapeHtml(lifecycle.plan?.expectedSignal || "Не вказано")}</p><p><b>Спостерігаємо:</b> ${escapeHtml(item.actual)}</p>${item.deviation ? `<small>Відхилення: ${escapeHtml(item.deviation)}</small>` : ""}${item.nextCheckpoint ? `<small>Наступна точка: ${escapeHtml(item.nextCheckpoint)}</small>` : ""}</article>`).join("");
    if (lifecycle.stabilization) {
      $("#stabilizationStatus").value = lifecycle.stabilization.status;
      $("#stabilizationBasis").value = lifecycle.stabilization.basis;
    }
    const readyToClose = hasStabilization && lifecycle.stabilization.status === "stable" && allStepsDone;
    $("#closeToMemory").disabled = !readyToClose || activeInvestigation?.status === "closed";
    const stage = activeInvestigation?.status === "closed" ? "Закрито · в операційній пам’яті" : readyToClose ? "Готове до закриття" : hasStabilization ? "Потрібна подальша робота" : hasObservation ? "Стабілізація" : allStepsDone ? "Моніторинг" : hasPlan ? "Виконання" : hasDecision ? "Планування зміни" : hasCause ? "Рішення" : "Очікує причини";
    $("#changeStageLabel").textContent = stage;
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
    $("#inspectorContent").innerHTML = `<div class="inspector-summary">${escapeHtml(summary)}</div>${materialPreview(item)}<dl>${fields.map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl><details class="inspector-details"><summary>Технічні деталі</summary><pre>ID: ${escapeHtml(item.id)}\nЛокальний приклад: так\nКанонічні повноваження: відсутні</pre></details>`;
    if (window.innerWidth < 921) $("#inspectorPanel").scrollIntoView({ block: "start", behavior: "smooth" });
    announce(`Відкрито Watson: ${item.title || item.text}`);
  }

  function closeInspector() {
    focused = null;
    $("#inspectorTitle").textContent = "Watson";
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
      button.tabIndex = active ? 0 : -1;
    });
    history.replaceState(null, "", `${location.pathname}${location.search}#${view}`);
    announce(`Відкрито розділ ${$("[data-view].is-active").textContent.trim()}`);
  }

  function updateHypothesisEvidenceOptions() {
    $("#hypothesisEvidence").innerHTML = `<option value="">Без підтримувального матеріалу</option>${state.evidence.map(item => `<option value="${item.id}">${escapeHtml(item.title)} · ${statusLabel(item.status)}</option>`).join("")}`;
  }

  function openModal(dialog, invoker) {
    if (dialog.open) return;
    modalInvokers.set(dialog, invoker || document.activeElement);
    dialog.showModal();
    const firstField = dialog.querySelector("[data-modal-autofocus]") || dialog.querySelector("input, textarea, select, button");
    if (firstField) firstField.focus();
  }

  function closeModal(dialog) {
    if (!dialog.open) return;
    if (dialog === $("#creationDialog")) sessionStorage.removeItem("management-os-pending-organization-context-v1");
    const form = dialog.querySelector("form");
    if (form) form.reset();
    dialog.querySelectorAll("input, textarea, select").forEach(field => field.setCustomValidity(""));
    dialog.close();
    const invoker = modalInvokers.get(dialog);
    if (invoker?.isConnected && !invoker.closest(".hidden")) invoker.focus();
  }

  function bindModalFoundation() {
    $$("dialog").forEach(dialog => {
      dialog.querySelectorAll("[data-modal-close]").forEach(control => control.addEventListener("click", () => closeModal(dialog)));
      dialog.addEventListener("cancel", event => { event.preventDefault(); closeModal(dialog); });
      dialog.addEventListener("keydown", event => {
        if (event.isComposing) return;
        if (event.key === "Escape") { event.preventDefault(); closeModal(dialog); }
        if (event.key === "Enter" && event.shiftKey && event.target.matches("textarea") && !event.target.hasAttribute("data-long-form")) {
          event.preventDefault();
          event.target.setRangeText("\n", event.target.selectionStart, event.target.selectionEnd, "end");
          event.target.dispatchEvent(new Event("input", { bubbles: true }));
        }
        if (event.key === "Enter" && !event.shiftKey && event.target.matches("input:not([type='button']):not([type='submit']), textarea") && !event.target.hasAttribute("data-long-form")) {
          event.preventDefault();
          dialog.querySelector("form")?.requestSubmit();
        }
      });
      dialog.addEventListener("close", () => {
        const invoker = modalInvokers.get(dialog);
        if (invoker?.isConnected && !invoker.closest(".hidden")) invoker.focus();
      });
    });
  }

  function showStart() {
    $("#startPage").classList.remove("hidden");
    $("#workbenchShell").classList.add("hidden");
    history.replaceState(null, "", location.pathname);
    renderSavedInvestigations();
  }

  function returnToManagementOS() {
    location.href = "index.html";
  }

  function renderSavedInvestigations() {
    const records = loadInvestigations();
    $("#savedInvestigationList").innerHTML = records.length ? records.map(item => `<button class="saved-investigation" type="button" data-open-investigation="${escapeHtml(item.id)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.data.situation.summary)}</span><small>${item.status === "closed" ? "Закрито" : "Відкрите"} · ${new Date(item.updatedAt).toLocaleDateString("uk-UA")}</small></button>`).join("") : `<div class="honest-empty"><strong>Збережених розслідувань ще немає.</strong><p>Створене розслідування збережеться лише в цьому браузері.</p></div>`;
  }

  function openWorkbench(record, kind) {
    activeKind = kind;
    activeInvestigation = kind === "user" ? record : null;
    state = kind === "user" ? clone(record.data) : loadState();
    if (!Array.isArray(state.linkedHypotheses)) state.linkedHypotheses = [];
    ensureLifecycle();
    $("#startPage").classList.add("hidden");
    $("#workbenchShell").classList.remove("hidden");
    const title = kind === "demo" ? "Чому прибуток знижується, хоча виручка зростає?" : record.title;
    $(".investigation-header h1").textContent = title;
    let contextBanner = $("#investigationOrganizationContext");
    if (!contextBanner) {
      contextBanner = document.createElement("div");
      contextBanner.id = "investigationOrganizationContext";
      contextBanner.className = "investigation-context-banner hidden";
      $(".investigation-header").append(contextBanner);
    }
    const organizationContext = kind === "user" ? record.data.organizationContext : null;
    contextBanner.classList.toggle("hidden", !organizationContext);
    if (organizationContext) {
      contextBanner.innerHTML = `<span>Контекст організації</span><strong>${escapeHtml(organizationContext.label)}</strong><small>Посилання не є матеріалом, доказом або фактом.</small>`;
    } else contextBanner.replaceChildren();
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
      metaValues[0].textContent = record.status === "closed" ? "Закрито" : record.causeFound ? "Причину знайдено" : "У роботі";
      metaValues[1].textContent = "Ви";
      metaValues[2].textContent = new Date(record.updatedAt).toLocaleDateString("uk-UA");
      $(".working-set-panel > p").textContent = "Тримайте тут матеріали, які ви зараз активно вивчаєте.";
      $("#workingSetEmpty strong").textContent = "Робочий набір порожній";
      $("#workingSetEmpty span").textContent = "Додайте сюди матеріал, який зараз розглядаєте.";
    }
    renderAll();
    renderInvestigationLifecycle();
    closeInspector();
    const requestedView = location.hash.slice(1);
    switchView(["situation", "evidence", "reasoning", "change", "timeline"].includes(requestedView) ? requestedView : "situation");
  }

  function bindEvents() {
    document.addEventListener("click", event => {
      const inspectControl = event.target.closest("[data-inspect]");
      const setControl = event.target.closest("[data-working-set]");
      const viewControl = event.target.closest("[data-view]");
      const filterControl = event.target.closest("[data-evidence-filter]");
      const materialControl = event.target.closest("[data-start-material]");
      const openControl = event.target.closest("[data-open-investigation]");
      const evidenceControl = event.target.closest("[data-mark-evidence]");
      if (inspectControl) inspect(inspectControl.dataset.inspect);
      if (setControl) toggleWorkingSet(setControl.dataset.workingSet);
      if (viewControl) switchView(viewControl.dataset.view);
      if (filterControl) {
        currentFilter = filterControl.dataset.evidenceFilter;
        $$("[data-evidence-filter]").forEach(button => {
          const active = button === filterControl;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        renderEvidence();
      }
      if (materialControl) { switchView("evidence"); openModal($("#materialDialog"), materialControl); }
      if (evidenceControl) {
        const item = evidenceById(evidenceControl.dataset.markEvidence);
        if (item && window.confirm("Визнати цей матеріал доказом у поточному розслідуванні?")) {
          item.status = "verified";
          item.verifiedAt = new Date().toISOString();
          persist(); renderEvidence(); announce("Матеріал визнано доказом людським рішенням.");
        }
      }
      if (openControl) {
        const record = loadInvestigations().find(item => item.id === openControl.dataset.openInvestigation);
        if (record) openWorkbench(record, "user");
      }
    });

    bindModalFoundation();
    $(".workspace-tabs").addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const tabs = $$("[data-view]");
      const current = tabs.indexOf(document.activeElement);
      if (current < 0) return;
      event.preventDefault();
      const target = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[target].focus();
      switchView(tabs[target].dataset.view);
    });
    $("#startInvestigation").addEventListener("click", event => openModal($("#creationDialog"), event.currentTarget));
    $("#creationDate").value = new Date().toISOString().slice(0, 10);
    $("#openSaved").addEventListener("click", () => {
      renderSavedInvestigations();
      $("#savedInvestigations").classList.toggle("hidden");
      $("#openSaved").setAttribute("aria-expanded", $("#savedInvestigations").classList.contains("hidden") ? "false" : "true");
    });
    [$("#creationTitle"), $("#creationSituation")].forEach(input => input.addEventListener("input", () => input.setCustomValidity("")));
    $("#creationForm").addEventListener("submit", event => {
      event.preventDefault();
      const titleInput = $("#creationTitle");
      const situationInput = $("#creationSituation");
      const title = titleInput.value.trim();
      const situation = situationInput.value.trim();
      const date = $("#creationDate").value;
      titleInput.setCustomValidity(title ? "" : "Вкажіть назву розслідування.");
      situationInput.setCustomValidity(situation ? "" : "Опишіть початкову ситуацію.");
      if (!title || !situation || !date) { $("#creationForm").reportValidity(); return; }
      let organizationContext = null;
      try {
        const pending = JSON.parse(sessionStorage.getItem("management-os-pending-organization-context-v1"));
        if (pending?.version === 1 && pending.elementId && pending.workspaceId) organizationContext = pending;
      } catch (_) { /* malformed pending context is ignored, never promoted */ }
      const record = emptyInvestigation(title, situation, date, organizationContext);
      sessionStorage.removeItem("management-os-pending-organization-context-v1");
      activeInvestigation = record;
      activeKind = "user";
      state = clone(record.data);
      persist();
      closeModal($("#creationDialog"));
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

    $("#addMaterial").addEventListener("click", event => openModal($("#materialDialog"), event.currentTarget));
    $("#addHypothesis").addEventListener("click", event => { updateHypothesisEvidenceOptions(); openModal($("#hypothesisDialog"), event.currentTarget); });
    $("#editSituation").addEventListener("click", event => { $("#situationInput").value = state.situation.summary; openModal($("#situationDialog"), event.currentTarget); });

    $("#materialForm").addEventListener("submit", async event => {
      event.preventDefault();
      const file = $("#materialFile").files[0];
      const summary = $("#materialSummary").value.trim();
      if (!file && !summary) { $("#materialSummary").setCustomValidity("Додайте текст або оберіть файл."); $("#materialSummary").reportValidity(); return; }
      if (file && file.size > 1024 * 1024) { $("#materialFile").setCustomValidity("Файл має бути не більшим за 1 МБ для локального збереження."); $("#materialFile").reportValidity(); return; }
      $("#materialSummary").setCustomValidity(""); $("#materialFile").setCustomValidity("");
      const [dataUrl, fileText] = file ? await Promise.all([readFile(file), readFileText(file)]) : [null, ""];
      const item = {
        id: `evidence-${Date.now()}`,
        type: file ? "Файл" : "Текст",
        title: $("#materialTitle").value.trim(),
        source: "Додано власником",
        summary: summary || `Файл ${file.name}`,
        fileName: file?.name || null,
        mimeType: file?.type || null,
        dataUrl,
        fileText,
        status: "unverified",
        attribution: "Додано власником у локальному прототипі",
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString("uk-UA"),
        locator: "Локальний матеріал · локатор відсутній",
        eventTime: "Не вказано",
        recordTime: new Date().toLocaleString("uk-UA")
      };
      state.evidence.push(item);
      if (!persist()) { state.evidence.pop(); window.alert("Файл не додано: у локальному сховищі недостатньо місця."); return; }
      closeModal($("#materialDialog"));
      renderEvidence();
      announce(`${item.title} додано як неперевірений локальний матеріал.`);
    });

    $("#hypothesisForm").addEventListener("submit", event => {
      event.preventDefault();
      const evidenceId = $("#hypothesisEvidence").value;
      const item = { id: `hypothesis-${Date.now()}`, text: $("#hypothesisText").value.trim(), status: "Попередня", support: evidenceId ? [evidenceId] : [], contradict: [] };
      state.hypotheses.push(item);
      persist();
      closeModal($("#hypothesisDialog"));
      renderHypotheses();
      announce("Гіпотезу додано як попередню робочу версію.");
    });

    $("#situationForm").addEventListener("submit", event => {
      event.preventDefault();
      const previous = state.situation.summary;
      state.situation.summary = $("#situationInput").value.trim();
      state.situation.revisions.push({ at: "Сьогодні · нова версія", text: `Попередню версію збережено: ${previous}` });
      persist();
      closeModal($("#situationDialog"));
      renderSituation();
      announce("Поточну ситуацію уточнено. Попередню версію збережено в історії.");
    });

    $("#linkExistingHypothesis").addEventListener("click", event => {
      const linked = state.linkedHypotheses || [];
      const available = systemHypotheses().filter(item => !linked.includes(item.id));
      $("#existingHypothesisSelect").innerHTML = available.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.statement)}</option>`).join("");
      $("#hypothesisEmptyHint").textContent = available.length ? "Список формується з записів модуля Hypotheses." : "Немає доступних гіпотез для прив’язки.";
      $("#linkHypothesisForm").querySelector("button[type='submit']").disabled = available.length === 0;
      openModal($("#linkHypothesisDialog"), event.currentTarget);
    });
    $("#linkHypothesisForm").addEventListener("submit", event => {
      event.preventDefault();
      const id = $("#existingHypothesisSelect").value;
      if (!id) return;
      state.linkedHypotheses = [...new Set([...(state.linkedHypotheses || []), id])];
      persist();
      closeModal($("#linkHypothesisDialog"));
      renderInvestigationLifecycle();
      announce("Існуючу гіпотезу прив’язано до розслідування.");
    });
    $("#markCauseFound").addEventListener("click", event => {
      $("#causeConclusionInput").value = activeInvestigation?.conclusion || "";
      openModal($("#causeDialog"), event.currentTarget);
    });
    $("#causeForm").addEventListener("submit", event => {
      event.preventDefault();
      const conclusion = $("#causeConclusionInput").value.trim();
      if (!conclusion || activeKind !== "user") return;
      activeInvestigation.causeFound = true;
      activeInvestigation.conclusion = conclusion;
      persist();
      closeModal($("#causeDialog"));
      renderInvestigationLifecycle();
      openWorkbench(activeInvestigation, "user");
    });
    $("#closeInvestigation").addEventListener("click", () => { if (activeInvestigation?.causeFound) switchView("change"); });
    $("#decisionForm").addEventListener("submit", event => {
      event.preventDefault();
      const lifecycle = ensureLifecycle();
      const previousDecision = JSON.stringify(lifecycle.decision);
      lifecycle.decision = { text: $("#decisionText").value.trim(), rationale: $("#decisionRationale").value.trim(), owner: $("#decisionOwner").value.trim(), outcome: $("#decisionOutcome").value.trim(), risks: $("#decisionRisks").value.trim(), at: new Date().toISOString() };
      if (previousDecision && previousDecision !== JSON.stringify(lifecycle.decision)) { lifecycle.plan = null; lifecycle.steps = []; lifecycle.observations = []; lifecycle.stabilization = null; }
      persist(); renderChangeLifecycle(); announce("Рішення збережено. Тепер можна спланувати зміну.");
    });
    $("#changePlanForm").addEventListener("submit", event => {
      event.preventDefault();
      const lifecycle = ensureLifecycle();
      const previousPlan = JSON.stringify(lifecycle.plan);
      lifecycle.plan = { intendedState: $("#intendedState").value.trim(), description: $("#changeDescription").value.trim(), checkpoint: $("#changeCheckpoint").value.trim(), expectedSignal: $("#expectedSignal").value.trim(), at: new Date().toISOString() };
      const previous = new Map(lifecycle.steps.map(step => [step.text, step]));
      lifecycle.steps = $("#changeSteps").value.split("\n").map(text => text.trim()).filter(Boolean).map((text, index) => previous.get(text) || { id: `step-${Date.now()}-${index}`, text, complete: false, completedAt: null });
      if (previousPlan && previousPlan !== JSON.stringify(lifecycle.plan)) { lifecycle.observations = []; lifecycle.stabilization = null; }
      persist(); renderChangeLifecycle(); announce("План зміни збережено. Кроки готові до виконання.");
    });
    $("#executionSteps").addEventListener("change", event => {
      const control = event.target.closest("[data-execution-step]");
      if (!control) return;
      const step = ensureLifecycle().steps.find(item => item.id === control.dataset.executionStep);
      if (!step) return;
      step.complete = control.checked; step.completedAt = control.checked ? new Date().toISOString() : null;
      persist(); renderChangeLifecycle();
    });
    $("#monitoringForm").addEventListener("submit", event => {
      event.preventDefault();
      ensureLifecycle().observations.unshift({ id: `observation-${Date.now()}`, actual: $("#monitoringActual").value.trim(), deviation: $("#monitoringDeviation").value.trim(), nextCheckpoint: $("#monitoringNextCheckpoint").value, at: new Date().toISOString() });
      $("#monitoringActual").value = ""; $("#monitoringDeviation").value = ""; $("#monitoringNextCheckpoint").value = "";
      persist(); renderChangeLifecycle(); announce("Спостереження збережено.");
    });
    $("#stabilizationForm").addEventListener("submit", event => {
      event.preventDefault();
      ensureLifecycle().stabilization = { status: $("#stabilizationStatus").value, basis: $("#stabilizationBasis").value.trim(), at: new Date().toISOString() };
      persist(); renderChangeLifecycle(); announce("Висновок про стабілізацію збережено.");
    });
    $("#closeToMemory").addEventListener("click", () => {
      const lifecycle = ensureLifecycle();
      if (!lifecycle.stabilization || lifecycle.stabilization.status !== "stable" || !lifecycle.steps.every(step => step.complete) || activeKind !== "user") return;
      lifecycle.memory = { summary: activeInvestigation.conclusion, decision: lifecycle.decision?.text || "", outcome: lifecycle.observations[0]?.actual || "", stabilizedAs: lifecycle.stabilization.status, closedAt: new Date().toISOString() };
      activeInvestigation.status = "closed"; activeInvestigation.closedAt = lifecycle.memory.closedAt;
      persist(); openWorkbench(activeInvestigation, "user"); switchView("change"); announce("Справу закрито й збережено в операційній пам’яті.");
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
    backButton.addEventListener("click", returnToManagementOS);
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
    renderInvestigationLifecycle();
    renderChangeLifecycle();
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
