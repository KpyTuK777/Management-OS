(function () {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value || "").replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]);
  function read(key, property) { try { return JSON.parse(localStorage.getItem(key))?.[property] || []; } catch (_) { return []; } }
  function entries() {
    const investigations = read("management-os-user-investigations-v1", "investigations").filter(item => item.status === "closed" && item.data?.lifecycle?.memory).map(item => ({ ...item, mode: "investigation" }));
    const improvements = read("management-os-improvements-v1", "items").filter(item => item.status === "closed" && item.memory).map(item => ({ id:item.id, title:item.idea, closedAt:item.closedAt, conclusion:item.memory.opportunity, mode:"improvement", context:item.context, data:{ situation:{summary:item.currentState}, organizationContext:item.context ? { label:item.context } : null, lifecycle:{ decision:item.decision, plan:{description:item.intendedState}, steps:item.steps, observations:item.observations, stabilization:item.stabilization, memory:item.memory } } }));
    return [...investigations, ...improvements].sort((a,b) => String(b.closedAt).localeCompare(String(a.closedAt)));
  }
  function contextLabels(item) { return [item.data?.organizationContext?.label, item.data?.lifecycle?.decision?.owner].filter(Boolean); }
  function render() {
    const query = $("#memorySearch").value.trim().toLocaleLowerCase("uk-UA");
    const all = entries(); const visible = all.filter(item => !query || `${item.title} ${item.data.situation.summary} ${item.conclusion} ${contextLabels(item).join(" ")}`.toLocaleLowerCase("uk-UA").includes(query));
    $("#memoryList").innerHTML = visible.length ? visible.map(item => `<button class="op-card" data-memory="${escapeHtml(item.id)}"><span>${item.mode === "improvement" ? "Вдосконалення" : "Розслідування"} · ${new Date(item.closedAt).toLocaleDateString("uk-UA")}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.conclusion)}</p><small>${escapeHtml(contextLabels(item).join(" · ") || "Без організаційної прив’язки")}</small></button>`).join("") : `<div class="op-empty"><strong>Завершених ситуацій ще немає</strong></div>`;
    const counts = {}; all.forEach(item => contextLabels(item).forEach(label => counts[label] = (counts[label] || 0) + 1));
    $("#patternList").innerHTML = Object.entries(counts).filter(([,count]) => count > 1).map(([label,count]) => `<p><strong>${escapeHtml(label)}</strong> згадується у ${count} завершених ситуаціях. Це повторення контексту, не доказ спільної причини.</p>`).join("");
  }
  function open(id) {
    const item = entries().find(entry => entry.id === id); if (!item) return; const lifecycle = item.data.lifecycle; const isImprovement = item.mode === "improvement";
    $("#memoryTitle").textContent = item.title;
    $("#memoryDetail").innerHTML = `<p class="memory-boundary">Історичний запис завершеної роботи. Він не визначає поточний стан автоматично.</p><section><h3>${isImprovement ? "Яку можливість побачили?" : "Що сталося?"}</h3><p>${escapeHtml(item.data.situation.summary)}</p></section>${isImprovement ? `<section><h3>Якого стану прагнули?</h3><p>${escapeHtml(lifecycle.plan?.description)}</p></section>` : `<section><h3>Яку причину зафіксували?</h3><p>${escapeHtml(item.conclusion)}</p></section>`}<section><h3>Що вирішили?</h3><p>${escapeHtml(lifecycle.decision?.text)}</p></section><section><h3>Що змінили?</h3><p>${escapeHtml(lifecycle.plan?.description)}</p><ol>${(lifecycle.steps || []).map(step => `<li>${escapeHtml(step.text)}</li>`).join("")}</ol></section><section><h3>Що спостерігали?</h3>${(lifecycle.observations || []).map(observation => `<p>${escapeHtml(observation.actual)}${observation.deviation ? ` · Відхилення: ${escapeHtml(observation.deviation)}` : ""}</p>`).join("") || "<p>Спостережень не збережено.</p>"}</section><section><h3>Що варто пам’ятати?</h3><p>${escapeHtml(lifecycle.stabilization?.basis)}</p></section>${item.data.organizationContext ? `<a href="index.html?context=${encodeURIComponent(item.data.organizationContext.elementId || "")}">Повернутися до ${escapeHtml(item.data.organizationContext.label)}</a>` : `<a href="index.html">Повернутися до організації</a>`}`;
    $("#saveKnowledge").onclick = () => sessionStorage.setItem("management-os-knowledge-draft-v1", JSON.stringify({ title:item.title, content:`${item.conclusion || item.data.situation.summary}\n\n${lifecycle.stabilization?.basis || ""}`, source:`Операційна пам’ять · ${item.id}` }));
    $("#memoryDialog").showModal();
  }
  document.addEventListener("click", event => { const entry = event.target.closest("[data-memory]"); if (entry) open(entry.dataset.memory); if (event.target.closest("[data-close]")) event.target.closest("dialog").close(); });
  $("#memorySearch").addEventListener("input", render); render(); const requested = new URLSearchParams(location.search).get("open"); if (requested) open(requested);
})();
