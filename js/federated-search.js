(function () {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const escapeHtml = value => String(value || "").replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[c]);
  let repository = null;
  try { repository = new ManagementOSOperatingModel.OperatingModelRepository(new ManagementOSOperatingModel.BrowserPersistenceAdapter()); } catch (_) {}
  function read(key, property) { try { return JSON.parse(localStorage.getItem(key))?.[property] || []; } catch (_) { return []; } }
  function results(query) {
    const q = query.toLocaleLowerCase("uk-UA"), model = repository?.snapshot();
    const groups = { "Організація":[], "Люди":[], "Матеріали":[], "Розслідування":[], "Вдосконалення":[], "Операційна пам’ять":[] };
    (model?.elements || []).filter(item => item.kind !== "organization" && item.label.toLocaleLowerCase("uk-UA").includes(q)).forEach(item => groups["Організація"].push({ title:item.label, meta:item.kind, href:`index.html?context=${encodeURIComponent(item.id)}` }));
    (repository?.visiblePersons({ purpose:"person-workbench" }) || []).filter(person => person.displayName.toLocaleLowerCase("uk-UA").includes(q)).forEach(person => groups["Люди"].push({ title:person.displayName, meta:"Людина", href:`index.html?person=${encodeURIComponent(person.id)}` }));
    MaterialStore.list().filter(item => `${item.title} ${item.description} ${MaterialStore.safeSourceName(item)}`.toLocaleLowerCase("uk-UA").includes(q)).forEach(item => groups["Матеріали"].push({ title:item.title, meta:MaterialStore.safeSourceName(item) || item.fileName || "Матеріал", href:`materials.html?open=${encodeURIComponent(item.id)}` }));
    read("management-os-user-investigations-v1", "investigations").filter(item => `${item.title} ${item.data?.situation?.summary} ${item.conclusion}`.toLocaleLowerCase("uk-UA").includes(q)).forEach(item => groups[item.status === "closed" ? "Операційна пам’ять" : "Розслідування"].push({ title:item.title, meta:item.status === "closed" ? "Завершено" : "У роботі", href:item.status === "closed" ? `memory.html?open=${encodeURIComponent(item.id)}` : `index.html?investigation=${encodeURIComponent(item.id)}` }));
    read("management-os-improvements-v1", "items").filter(item => `${item.idea} ${item.context} ${item.currentState}`.toLocaleLowerCase("uk-UA").includes(q)).forEach(item => groups[item.status === "closed" ? "Операційна пам’ять" : "Вдосконалення"].push({ title:item.idea, meta:item.context || "Вдосконалення", href:item.status === "closed" ? `memory.html?open=${encodeURIComponent(item.id)}` : `improvements.html?open=${encodeURIComponent(item.id)}` }));
    return groups;
  }
  function render() {
    const query = $("#globalSearch").value.trim(); if (query.length < 2) { $("#searchResults").innerHTML = `<div class="op-empty"><strong>Введіть щонайменше два символи</strong></div>`; return; }
    const sections = Object.entries(results(query)).filter(([,items]) => items.length);
    $("#searchResults").innerHTML = sections.length ? sections.map(([name,items]) => `<section class="search-group"><h2>${name}</h2>${items.slice(0,12).map(item => `<a href="${item.href}"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.meta)}</small></a>`).join("")}</section>`).join("") : `<div class="op-empty"><strong>Нічого не знайдено</strong></div>`;
  }
  $("#globalSearch").addEventListener("input", render); const query = new URLSearchParams(location.search).get("q"); if (query) { $("#globalSearch").value = query; render(); }
})();
