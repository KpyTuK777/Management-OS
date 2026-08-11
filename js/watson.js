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
    (repository?.visiblePersons({ purpose:"person-workbench" }) || []).forEach(person => { if (needle.includes("хто") || words.some(word => person.displayName.toLowerCase().includes(word))) { const context = model.peopleRelationships.filter(link => link.personId === person.id && link.lifecycle === "active").map(link => model.elements.find(item => item.id === link.targetId)?.label).filter(Boolean); hits.push(`${person.displayName}: ${context.join(" · ") || "контекст не визначено"}`); } });
    MaterialStore.list().forEach(item => { const source = MaterialStore.safeSourceName(item); if (words.some(word => `${item.title} ${item.description} ${source}`.toLowerCase().includes(word))) hits.push(`Матеріал «${item.title}»${source ? `, надав(ла) ${source}` : ""}`); });
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
    try {
      repository.transact("watson-confirmed-organization-proposal", model => {
        const departments = {};
        const ensure = (kind, label, parentId) => { let item = model.elements.find(entry => entry.kind === kind && entry.label === label); if (!item) { item = repository.makeElement(model, kind, label, "known"); model.elements.push(item); if (parentId) repository.addRelationshipToState(model, { family:"containment", fromId:parentId, toId:item.id, label:"містить" }); } return item; };
        pending.departments.forEach(label => departments[label] = ensure("department", label).id);
        pending.children.forEach(label => departments[label] = ensure("department", label, departments["Продажі"]).id);
        if (pending.person && departments["Онлайн-продажі"]) {
          const leader = ensure("role", "Керівник онлайн-продажів", departments["Онлайн-продажі"]); const manager = ensure("role", "Менеджер онлайн-продажів", departments["Онлайн-продажі"]);
          if (!model.persons.some(person => person.displayName === pending.person)) { const at = new Date().toISOString(), person = { id:`person-${crypto.randomUUID()}`, workspaceId:model.workspaceId, displayName:pending.person, qualification:"known", lifecycle:"active", visibility:"permitted", purpose:"team-composition", ownershipMode:"operating-model-owned", createdAt:at, updatedAt:at, reviewAt:new Date(Date.now()+365*86400000).toISOString(), version:1 }; model.persons.push(person); repository.addPeopleRelationshipToState(model,{family:"role-occupancy",personId:person.id,targetId:leader.id}); repository.addPeopleRelationshipToState(model,{family:"department-membership",personId:person.id,targetId:departments["Онлайн-продажі"]}); }
          if (pending.managerCapacity && !model.roleCapacityAssertions.some(item => item.roleId === manager.id && item.scopeId === departments["Онлайн-продажі"] && item.lifecycle === "active")) model.roleCapacityAssertions.push({ id:`capacity-${crypto.randomUUID()}`, workspaceId:model.workspaceId, roleId:manager.id, scopeId:departments["Онлайн-продажі"], meaning:"planned", plannedCapacity:pending.managerCapacity, qualification:"known", effectiveFrom:new Date().toISOString(), effectiveTo:null, lifecycle:"active", version:1, recordedAt:new Date().toISOString(), ownershipMode:"operating-model-owned", updateOwner:"accountable-local-owner" });
        }
        return { applied:true };
      });
    } catch (error) {
      add("Watson", `Пропозицію не застосовано: ${error.message}. Попередній стан організації збережено.`); return;
    }
    add("Watson", "Підтверджену структуру застосовано через ті самі правила моделі організації."); pending = null; $("#proposal").classList.add("hidden");
  }
  function providerConfig() { try { return JSON.parse(sessionStorage.getItem("management-os-watson-provider-v1")); } catch (_) { return null; } }
  async function providerAnswer(question, localHits) {
    const config = providerConfig(); if (!config) return null;
    const context = `Поточний безпечний контекст: ${new URLSearchParams(location.search).get("contextLabel") || "Management OS"}. Результати локального пошуку:\n${localHits.join("\n") || "Немає"}`;
    const response = await fetch(config.endpoint, { method:"POST", headers:{ "Content-Type":"application/json", "Authorization":`Bearer ${config.key}` }, body:JSON.stringify({ model:config.model, messages:[{ role:"system", content:"Ти Watson у Management OS. Відповідай українською, не вигадуй дані, не встановлюй Причину і не пропонуй автономних мутацій." }, { role:"user", content:`${context}\n\nПитання: ${question}` }] }) });
    if (!response.ok) throw new Error("AI provider не відповів успішно."); const data = await response.json(); return data.choices?.[0]?.message?.content || null;
  }
  $("#watsonForm").addEventListener("submit", async event => { event.preventDefault(); const text = $("#watsonInput").value.trim(); add("Ви", text); $("#watsonInput").value = ""; const proposal = parseOrganization(text); if (proposal) { showProposal(proposal); return; } const hits = retrieve(text); try { const answer = await providerAnswer(text, hits); add("Watson", answer || (hits.length ? hits.join("\n") : "У поточних даних Management OS я цього не знайшов. Я не буду вигадувати відповідь.")); } catch (error) { add("Watson", `${error.message} Локальний пошук продовжує працювати.\n${hits.join("\n")}`); } });
  $("#configureProvider").addEventListener("click", () => $("#providerDialog").showModal());
  $("#providerForm").addEventListener("submit", event => { event.preventDefault(); sessionStorage.setItem("management-os-watson-provider-v1", JSON.stringify({ endpoint:$("#providerEndpoint").value, model:$("#providerModel").value, key:$("#providerKey").value })); $("#providerDialog").close(); $("#watsonStatus").textContent = "AI provider налаштовано для цієї вкладки · локальні можливості залишаються доступними"; });
  document.addEventListener("click", event => { if (event.target.closest("[data-confirm]")) applyProposal(); if (event.target.closest("[data-cancel]")) { pending = null; $("#proposal").classList.add("hidden"); } if (event.target.closest("[data-provider-close]")) $("#providerDialog").close(); });
  if (providerConfig()) $("#watsonStatus").textContent = "AI provider налаштовано для цієї вкладки";
})();
