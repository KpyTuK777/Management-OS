(() => {
  "use strict";

  const STORAGE_KEY = "management-os-user-investigations-v1";
  const registry = document.getElementById("investigationRegistry");
  let filter = "all";

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  function loadInvestigations() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return stored?.version === 1 && Array.isArray(stored.investigations) ? stored.investigations : [];
    } catch (_) { return []; }
  }

  function render() {
    const records = loadInvestigations().filter(item => filter === "all" || (item.status || "open") === filter);
    registry.innerHTML = records.length ? records.map(item => `
      <article class="registry-card">
        <div><span class="state-label">${item.status === "closed" ? "Закрито" : item.causeFound ? "Причину знайдено" : "Відкрите"}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.data?.situation?.summary || "")}</p></div>
        <dl><div><dt>Дата</dt><dd>${escapeHtml(item.date || new Date(item.createdAt).toLocaleDateString("uk-UA"))}</dd></div><div><dt>Доказів</dt><dd>${item.data?.evidence?.length || 0}</dd></div></dl>
        <a class="secondary-button" href="index.html?investigation=${encodeURIComponent(item.id)}">Відкрити</a>
      </article>`).join("") : `<div class="honest-empty"><strong>Розслідувань у цій категорії немає.</strong><p>Створіть нове розслідування на головній сторінці модуля.</p></div>`;
  }

  document.querySelector(".filter-bar").addEventListener("click", event => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    filter = button.dataset.status;
    document.querySelectorAll("[data-status]").forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  });

  render();
})();
