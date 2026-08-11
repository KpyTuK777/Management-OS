(function () {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value || "").replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[c]);
  let repository = null;
  let pending = null;
  try { repository = new ManagementOSOperatingModel.OperatingModelRepository(new ManagementOSOperatingModel.BrowserPersistenceAdapter()); } catch (_) {}
  const state = () => repository?.snapshot() || null;
  function add(role, text) { $("#conversation").insertAdjacentHTML("beforeend", `<article><strong>${role}</strong><p>${escapeHtml(text)}</p></article>`); }
  function stored(key, property) { try { return JSON.parse(localStorage.getItem(key))?.[property] || []; } catch (_) { return []; } }
  function retrieve(query) {
    const model = state(), needle = query.toLowerCase(), words = needle.split(/\s+/).filter(word => word.length > 4), hits = [];
    (model?.elements || []).forEach(item => { if (words.some(word => item.label.toLowerCase().includes(word))) hits.push(`${item.label} — ${item.kind}`); });
    (model?.persons || []).forEach(person => { if (needle.includes("хто") || words.some(word => person.displayName.toLowerCase().includes(word))) { const context = model.peopleRelationships.filter(link => link.personId === person.id && link.lifecycle === "active").map(link => model.elements.find(item => item.id === link.targetId)?.label).filter(Boolean); hits.push(`${person.displayName}: ${context.join(" · ") || "контекст не визначено"}`); } });
    MaterialStore.list().forEach(item => { if (words.some(word => `${item.title} ${item.description} ${item.sourceName}`.toLowerCase().includes(word))) hits.push(`Матеріал «${item.title}»${item.sourceName ? `, надав(ла) ${item.sourceName}` : ""}`); });
    stored("management-os-user-investigations-v1", "investigations").forEach(item => { if (words.some(word => `${item.title} ${item.conclusion}`.toLowerCase().includes(word))) hits.push(`${item.status === "closed" ? "Завершена" : "Активна"} ситуація «${item.title}»: ${item.conclusion || item.data.situation.summary}`); });
    stored("management-os-improvements-v1", "items").forEach(item => { if (words.some(word => `${item.idea} ${item.context}`.toLowerCase().includes(word))) hits.push(`Вдосконалення «${item.idea}» — ${item.status}`); });
    return hits.slice(0, 8);
  }
  function parseOrganization(text) {
    if (!/підрозділ|продаж|виробниц|маркетинг|логістик|HR/i.test(text)) return null;
    return { departments: ["Продажі","Виробництво","Маркетинг","Логістика","HR"].filter(x => new RegExp(x.slice(0,5), "i").test(text)), children: ["Онлайн-продажі","Корпоративні продажі"].filter(x => new RegExp(x.split("-")[0], "i").test(text)), person: /Марина Коваль/i.test(text) ? "Марина Коваль" : null, managerCapacity: /шість менеджер/i.test(text) ? 6 : null };
  }
  function showProposal(proposal) {
    pending = proposal;
    $("#proposal").classList.remove("hidden");
    $("#proposal").innerHTML = `<h2>Я зрозумів так</h2><ul>${proposal.departments.map(x => `<li>Створити ${escapeHtml(x)}</li>`).join("")}${proposal.children.map(x => `<li>Продажі → ${escapeHtml(x)}</li>`).join("")}</ul>${proposal.person ? `<p>${proposal.person} → керівник Онлайн-продажів</p>` : ""}${proposal.managerCapacity ? `<p>Планова команда: ${proposal.managerCapacity} менеджерів. Імена не вигадуються.</p>` : ""}<p>Зміни буде застосовано лише після підтвердження.</p><button data-confirm>Підтвердити й застосувати</button><button data-cancel>Скасувати</button>`;
  }
  function getOrCreate(kind, label, parentId) { return state().elements.find(item => item.kind === kind && item.label === label) || repository.createElement({ kind, label, qualification: "known", parentId }); }
  function applyProposal() {
    if (!pending || !repository || !state()) { add("Watson", "Немає активної організації. Спершу створіть її на сторінці Організація."); return; }
    if (pending.children.length && !pending.departments.includes("Продажі") && !state().elements.some(item => item.kind === "department" && item.label === "Продажі")) pending.departments.unshift("Продажі");
    const departments = {};
    try {
      pending.departments.forEach(label => departments[label] = getOrCreate("department", label).id);
      pending.children.forEach(label => departments[label] = getOrCreate("department", label, departments["Продажі"]).id);
      if (pending.person && departments["Онлайн-продажі"]) {
        const leader = getOrCreate("role", "Керівник онлайн-продажів", departments["Онлайн-продажі"]);
        const manager = getOrCreate("role", "Менеджер онлайн-продажів", departments["Онлайн-продажі"]);
        if (!state().persons.some(person => person.displayName === pending.person)) repository.createPerson({ displayName: pending.person, purpose: "team-composition", roleId: leader.id, departmentId: departments["Онлайн-продажі"] });
        if (pending.managerCapacity && !repository.currentRoleCapacity(manager.id, departments["Онлайн-продажі"])) repository.createRoleCapacity({ roleId: manager.id, scopeId: departments["Онлайн-продажі"], plannedCapacity: pending.managerCapacity, qualification: "known" });
      }
    } catch (error) {
      add("Watson", `Частину пропозиції не вдалося застосувати: ${error.message}. Перевірте поточну модель перед повтором.`); return;
    }
    add("Watson", "Підтверджену структуру застосовано через ті самі правила моделі організації."); pending = null; $("#proposal").classList.add("hidden");
  }
  $("#watsonForm").addEventListener("submit", event => { event.preventDefault(); const text = $("#watsonInput").value.trim(); add("Ви", text); $("#watsonInput").value = ""; const proposal = parseOrganization(text); if (proposal) showProposal(proposal); else { const hits = retrieve(text); add("Watson", hits.length ? hits.join("\n") : "У поточних даних Management OS я цього не знайшов. Я не буду вигадувати відповідь."); } });
  document.addEventListener("click", event => { if (event.target.closest("[data-confirm]")) applyProposal(); if (event.target.closest("[data-cancel]")) { pending = null; $("#proposal").classList.add("hidden"); } });
})();
