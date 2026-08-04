const HistoricalReader = (() => {
  const base = "governance/walkthroughs/";
  const names = [
    "PHASE_01_SOURCE_BOUND_ORIENTATION",
    "PHASE_02_PRE_INCIDENT_OPERATIONAL_CONTEXT",
    "PHASE_03_DEPLOYMENT_RECONSTRUCTION",
    "PHASE_04_PRODUCTION_STATE_RECONSTRUCTION",
    "PHASE_05_INCIDENT_EMERGENCE",
    "PHASE_06_DETECTION_AND_VISIBILITY",
    "PHASE_07_RESPONSE_AND_CONTAINMENT",
    "PHASE_08_IMMEDIATE_OUTCOME",
    "PHASE_09_LATER_OFFICIAL_FINDINGS",
    "PHASE_10_EVIDENCE_GAP_REVIEW",
    "PHASE_11_EXPERIENCE_AMPLIFICATION_REFLECTION_PREPARATION"
  ];
  const shortNames = ["Орієнтація", "Контекст", "Розгортання", "Стан у виробничому середовищі", "Виникнення інциденту", "Виявлення", "Реагування", "Безпосередній результат", "Офіційні висновки", "Прогалини в доказах", "Підготовка осмислення"];
  const prefix = "M9_KNIGHT_CAPITAL_PUBLISHED_HISTORICAL_WALKTHROUGH_01_";
  const sourceManifest = "architecture/research/M9_KNIGHT_CAPITAL_SOURCE_MANIFEST.md";
  const evidenceGap = "architecture/research/M9_KNIGHT_CAPITAL_EVIDENCE_GAP_ASSESSMENT.md";
  const chronology = "architecture/research/M9_KNIGHT_CAPITAL_BOUNDED_CHRONOLOGY_ASSESSMENT.md";
  const translations = window.HistoricalReaderUkrainianClaims || {};
  const state = {
    route: "orientation",
    phases: [],
    sources: {},
    selectedPhase: null,
    selectedClaim: null,
    workingSet: [],
    visitedPhases: new Set(),
    inspectedClaims: new Set(),
    reflection: { status: "unavailable", attributableIdentity: null },
    traceability: { claimId: null, sourceId: null, locator: null }
  };
  const fields = ["Claim text", "Claim class", "Walkthrough phase", "Source identity", "Citation locator", "Attribution", "Source date", "Historical-knowledge status", "Hindsight status", "Confidence boundary", "Contradictory source", "Evidence-gap reference", "Replay eligibility", "Reviewer note"];
  const fieldLabels = {
    "Source identity": "Ідентичність джерела",
    "Citation locator": "Точне місце в джерелі",
    "Attribution": "Атрибуція",
    "Source date": "Дата джерела",
    "Historical-knowledge status": "Статус історичного знання",
    "Hindsight status": "Статус ретроспективного знання",
    "Confidence boundary": "Межа впевненості",
    "Contradictory source": "Суперечливе джерело",
    "Evidence-gap reference": "Посилання на прогалину в доказах",
    "Replay eligibility": "Допустимість повторного проходження",
    "Reviewer note": "Примітка перевірки"
  };
  const claimClassLabels = {
    "A — Direct source claim": "A — Пряме твердження з джерела",
    "B — Bounded chronology claim": "B — Твердження в межах хронології",
    "C — Attributed official finding": "C — Атрибутований офіційний висновок",
    "D — Aggregate observable Outcome claim": "D — Сукупний спостережуваний результат",
    "E — Explicit uncertainty claim": "E — Явне твердження про невизначеність"
  };

  const clean = value => value.replace(/`/g, "").replace(/\s+/g, " ").trim();
  const excerpt = (value, max = 112) => {
    const text = clean(value || "");
    return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, "")}…` : text;
  };
  const translationFor = claim => translations[claim.id] || "Український переклад цього зафіксованого твердження недоступний.";

  function parseClaims(markdown) {
    const headings = [...markdown.matchAll(/^#{2,3}\s+(KC-P\d+-[A-Z]\d+)\s*$/gm)];
    return headings.map((match, index) => {
      const block = markdown.slice(match.index + match[0].length, headings[index + 1]?.index || markdown.length);
      const claim = { id: match[1] };
      fields.forEach((field, position) => {
        const start = block.search(new RegExp(`^- \\*\\*${field}:\\*\\*`, "m"));
        if (start < 0) return;
        const tail = block.slice(start).replace(new RegExp(`^- \\*\\*${field}:\\*\\*\\s*`), "");
        const next = fields.slice(position + 1).map(name => tail.search(new RegExp(`^- \\*\\*${name}:\\*\\*`, "m"))).filter(value => value >= 0);
        const heading = tail.search(/^#{2,3}\s/m);
        claim[field] = clean(tail.slice(0, next.length ? Math.min(...next) : heading >= 0 ? heading : tail.length));
      });
      return claim;
    });
  }

  function title(markdown, fallback) {
    return clean((markdown.match(/^#\s+(.+)$/m) || [])[1] || fallback);
  }

  function parseSources(markdown) {
    const sources = {};
    for (const match of markdown.matchAll(/^##\s+((?:P-[RC]|S-J)\d+)\s+[^\n]*\n[\s\S]*?^- \*\*Source identity:\*\* \[([^\]]+)\]\((https?:\/\/[^)]+)\)/gm)) {
      sources[match[1]] = { label: match[2], url: match[3] };
    }
    return sources;
  }

  async function load() {
    const [results, manifestResponse] = await Promise.all([
      Promise.all(names.map(async (name, index) => {
        const path = `${base}${prefix}${name}.md`;
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Не вдалося завантажити фазу ${index + 1}`);
        const markdown = await response.text();
        return { id: index + 1, path, shortName: shortNames[index], title: title(markdown, `Фаза ${index + 1}`), claims: parseClaims(markdown) };
      })),
      fetch(sourceManifest)
    ]);
    if (!manifestResponse.ok) throw new Error("Не вдалося завантажити зафіксований маніфест джерел");
    state.sources = parseSources(await manifestResponse.text());
    state.phases = results;
    renderPhases();
    document.getElementById("readerStatus").textContent = `${results.length} зафіксованих фаз · ${results.reduce((sum, phase) => sum + phase.claims.length, 0)} тверджень`;
    selectPhase(2);
  }

  function renderRoute() {
    const requested = location.hash.slice(1);
    state.route = ["orientation", "workspace", "reflection"].includes(requested) ? requested : "orientation";
    document.querySelectorAll("[data-panel]").forEach(panel => panel.hidden = panel.dataset.panel !== state.route);
    document.querySelectorAll("[data-route]").forEach(link => link.dataset.route === state.route ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current"));
    document.getElementById("historicalReader").dataset.readerState = state.route === "orientation" ? "unoriented" : "oriented";
  }

  function renderPhases() {
    const nav = document.getElementById("phaseNavigation");
    nav.replaceChildren(...state.phases.map(phase => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `<span>${String(phase.id).padStart(2, "0")}</span><small>${phase.shortName}</small>`;
      button.title = `Фаза ${phase.id} — ${phase.shortName}`;
      button.setAttribute("aria-label", `Фаза ${phase.id}: ${phase.shortName}, доступна`);
      button.addEventListener("click", () => selectPhase(phase.id));
      return button;
    }));
  }

  function updateSidebarContext() {
    const phase = document.getElementById("sidebarCurrentPhase");
    const progress = document.getElementById("sidebarPhaseProgress");
    const attention = document.getElementById("sidebarAttentionCount");
    const claim = document.getElementById("sidebarCurrentClaim");
    if (phase && state.selectedPhase) phase.textContent = `Фаза ${String(state.selectedPhase.id).padStart(2, "0")} · ${state.selectedPhase.shortName}`;
    if (progress) progress.textContent = `${state.visitedPhases.size} з 11 фаз переглянуто`;
    if (attention) attention.textContent = `${Math.max(0, 11 - state.visitedPhases.size)} ще потребують уваги`;
    if (claim) claim.textContent = state.selectedClaim ? `У фокусі: ${state.selectedClaim.id}` : "Твердження не вибрано";
  }

  function selectPhase(id) {
    const phase = state.phases.find(item => item.id === id);
    if (!phase) return;
    state.selectedPhase = phase;
    state.visitedPhases.add(id);
    document.getElementById("phasePosition").textContent = `Фаза ${String(id).padStart(2, "0")} з 11`;
    document.getElementById("currentSituationTitle").textContent = phase.shortName;
    document.getElementById("currentSituationText").textContent = `${phase.claims.length} тверджень · ${state.inspectedClaims.size} перевірено під час цього проходження`;
    document.getElementById("phaseClaimCount").textContent = phase.claims.length;
    document.querySelectorAll("#phaseNavigation button").forEach((button, index) => {
      const phaseId = index + 1;
      button.dataset.visited = String(state.visitedPhases.has(phaseId));
      if (phaseId === id) {
        button.setAttribute("aria-current", "step");
        button.setAttribute("aria-label", `Фаза ${phaseId}: ${state.phases[index].shortName}, поточна`);
      } else {
        button.removeAttribute("aria-current");
        button.setAttribute("aria-label", `Фаза ${phaseId}: ${state.phases[index].shortName}, ${state.visitedPhases.has(phaseId) ? "переглянута" : "доступна"}`);
      }
    });
    document.getElementById("previousPhase").disabled = id === 1;
    document.getElementById("nextPhase").disabled = id === state.phases.length;
    state.selectedClaim = phase.claims[0] || null;
    if (state.selectedClaim) state.traceability = { claimId: state.selectedClaim.id, sourceId: state.selectedClaim["Source identity"] || null, locator: state.selectedClaim["Citation locator"] || null };
    renderClaims();
    renderEvidence();
    renderTraceability();
    updateSidebarContext();
  }

  function renderClaims() {
    const list = document.getElementById("claimList");
    if (!state.selectedPhase?.claims.length) {
      list.innerHTML = '<p class="empty-state">У цій фазі немає записів у реєстрі історичних тверджень.</p>';
      return;
    }
    const ul = document.createElement("ul");
    ul.className = "claim-list";
    state.selectedPhase.claims.forEach(claim => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      const id = document.createElement("span");
      const label = document.createElement("span");
      const kind = document.createElement("span");
      button.type = "button";
      button.className = "claim-button";
      button.setAttribute("aria-pressed", String(state.selectedClaim?.id === claim.id));
      id.className = "claim-id";
      id.textContent = claim.id;
      label.className = "claim-label";
      label.lang = "uk";
      label.textContent = excerpt(translationFor(claim));
      kind.className = "claim-kind";
      kind.textContent = `${state.inspectedClaims.has(claim.id) ? "Переглянуто" : "Потребує уваги"} · ${claimClassLabels[claim["Claim class"]] || "Зафіксоване твердження"}`;
      button.append(id, label, kind);
      button.addEventListener("click", () => selectClaim(claim, true));
      li.append(button);
      ul.append(li);
    });
    list.replaceChildren(ul);
  }

  function selectClaim(claim, inspected = false) {
    state.selectedClaim = claim;
    if (inspected) state.inspectedClaims.add(claim.id);
    state.traceability = { claimId: claim.id, sourceId: claim["Source identity"] || null, locator: claim["Citation locator"] || null };
    renderClaims();
    renderEvidence();
    renderTraceability();
    document.getElementById("currentSituationText").textContent = `${state.selectedPhase.claims.length} тверджень · ${state.inspectedClaims.size} перевірено під час цього проходження`;
    updateSidebarContext();
  }

  function metadata(claim, keys, className = "metadata") {
    const dl = document.createElement("dl");
    dl.className = className;
    keys.forEach(key => {
      if (!claim[key]) return;
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = fieldLabels[key] || key;
      dd.lang = "en";
      dd.textContent = claim[key];
      dl.append(dt, dd);
    });
    return dl;
  }

  function artifactLink(label, href) {
    const link = document.createElement("a");
    link.className = "source-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = label;
    return link;
  }

  function disclosure(summaryText, className) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    details.className = className;
    summary.textContent = summaryText;
    details.append(summary);
    return details;
  }

  function renderEvidence() {
    const target = document.getElementById("evidenceDetail");
    const claim = state.selectedClaim;
    if (!claim) {
      target.innerHTML = '<p class="empty-state">Оберіть твердження, щоб відкрити його зафіксований запис.</p>';
      return;
    }
    const header = document.createElement("div");
    const id = document.createElement("span");
    const kind = document.createElement("span");
    const translationLabel = document.createElement("p");
    const translation = document.createElement("p");
    const add = document.createElement("button");
    const sourceText = claim["Source identity"] || "";
    const sourceId = (sourceText.match(/(?:P-[RC]|S-J)\d+/) || [])[0];
    header.className = "claim-record-header";
    id.className = "record-id";
    id.textContent = claim.id;
    kind.className = "record-kind";
    kind.textContent = claimClassLabels[claim["Claim class"]] || "Зафіксоване твердження";
    header.append(id, kind);
    translationLabel.className = "translation-language-note";
    translationLabel.textContent = "Український переклад для робочого читання";
    translation.className = "claim-translation";
    translation.lang = "uk";
    translation.textContent = translationFor(claim);
    add.type = "button";
    add.className = "inspection-action";
    const held = state.workingSet.some(item => item.id === claim.id);
    add.textContent = held ? "У робочому наборі" : "Додати до робочого набору";
    add.disabled = held;
    add.addEventListener("click", () => {
      state.workingSet.push(claim);
      document.getElementById("workingSetFeedback").textContent = `${claim.id} додано. Наявність у робочому наборі не змінює статус доказу.`;
      renderWorkingSet();
      renderEvidence();
    });

    const original = disclosure("Показати мовою оригіналу", "original-disclosure");
    const originalNote = document.createElement("p");
    const originalText = document.createElement("p");
    originalNote.className = "original-language-note";
    originalNote.textContent = "Оригінальний зафіксований текст · англійською";
    originalText.className = "claim-text";
    originalText.lang = "en";
    originalText.textContent = claim["Claim text"] || "Текст твердження відсутній у зафіксованому блоці.";
    original.append(originalNote, originalText);

    const source = disclosure("Перевірити джерело й атрибуцію", "source-disclosure");
    const links = document.createElement("div");
    links.className = "source-actions";
    links.append(artifactLink("Зафіксована фаза", state.selectedPhase.path), artifactLink("Маніфест джерел", sourceManifest));
    if (sourceId && state.sources[sourceId]) links.append(artifactLink(`${sourceId} · публічне джерело`, state.sources[sourceId].url));
    if (/Evidence-Gap/i.test(`${sourceText} ${claim["Evidence-gap reference"] || ""}`)) links.append(artifactLink("Оцінка прогалин у доказах", evidenceGap));
    if (/Chronology/i.test(sourceText)) links.append(artifactLink("Оцінка хронології", chronology));
    source.append(metadata(claim, ["Source identity", "Citation locator", "Attribution", "Source date"], "evidence-summary"), links);
    target.replaceChildren(header, translationLabel, translation, add, original, source);
  }

  function renderTraceability() {
    const target = document.getElementById("traceabilityDetail");
    const claim = state.selectedClaim;
    if (!claim) {
      target.innerHTML = '<p class="empty-state">Зв’язок твердження з джерелом не вибрано.</p>';
      return;
    }
    const details = disclosure("Відкрити невизначеність і повну простежуваність", "traceability-details");
    const callout = document.createElement("div");
    const label = document.createElement("strong");
    const originalLabel = document.createElement("span");
    const text = document.createElement("p");
    callout.className = "uncertainty-callout";
    label.textContent = "Межа впевненості";
    originalLabel.className = "original-inline-note";
    originalLabel.textContent = "Оригінальний запис англійською";
    text.lang = "en";
    text.textContent = claim["Confidence boundary"] || "У зафіксованому блоці немає сильнішого твердження про впевненість.";
    callout.append(label, originalLabel, text);
    details.append(callout, metadata(claim, ["Historical-knowledge status", "Hindsight status", "Contradictory source", "Evidence-gap reference", "Replay eligibility", "Reviewer note"]));
    target.replaceChildren(details);
  }

  function renderWorkingSet() {
    const target = document.getElementById("workingSetList");
    if (!state.workingSet.length) {
      target.innerHTML = '<p class="empty-state">Робочий набір порожній. Додайте твердження під час його перевірки.</p>';
    } else {
      const ul = document.createElement("ul");
      ul.className = "working-set-list";
      state.workingSet.forEach(claim => {
        const li = document.createElement("li");
        const copy = document.createElement("div");
        const id = document.createElement("strong");
        const label = document.createElement("span");
        const button = document.createElement("button");
        li.className = "working-set-item";
        id.textContent = claim.id;
        label.lang = "uk";
        label.textContent = excerpt(translationFor(claim), 82);
        copy.append(id, label);
        button.type = "button";
        button.className = "working-set-remove";
        button.textContent = "Вилучити";
        button.setAttribute("aria-label", `Вилучити ${claim.id} з робочого набору`);
        button.addEventListener("click", () => {
          state.workingSet = state.workingSet.filter(item => item.id !== claim.id);
          document.getElementById("workingSetFeedback").textContent = `${claim.id} вилучено. Історичний статус і статус доказів залишилися незмінними.`;
          renderWorkingSet();
          renderEvidence();
        });
        li.append(copy, button);
        ul.append(li);
      });
      target.replaceChildren(ul);
    }
    document.getElementById("workingSetCount").textContent = state.workingSet.length;
  }

  function bind() {
    document.getElementById("previousPhase").addEventListener("click", () => selectPhase(state.selectedPhase.id - 1));
    document.getElementById("nextPhase").addEventListener("click", () => selectPhase(state.selectedPhase.id + 1));
  }

  async function init() {
    renderRoute();
    renderWorkingSet();
    bind();
    addEventListener("hashchange", renderRoute);
    window.HistoricalReaderState = state;
    try {
      await load();
    } catch (error) {
      document.getElementById("readerStatus").textContent = `Зафіксовані матеріали недоступні: ${error.message}`;
    }
  }

  return { init, state, selectPhase, selectClaim };
})();

HistoricalReader.init();
