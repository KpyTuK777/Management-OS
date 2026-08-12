(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const page = location.pathname.split("/").pop() || "index.html";
  const labels = { "index.html":"Організація", "materials.html":"Матеріали", "investigations.html":"Розслідування", "improvements.html":"Вдосконалення", "memory.html":"Пам’ять", "historical-reader.html":"Історичний розбір", "search.html":"Пошук", "watson.html":"Watson" };
  const context = { type:params.get("type") || params.get("contextType") || "organization", id:params.get("context") || params.get("contextId") || params.get("person") || "", label:params.get("label") || params.get("contextLabel") || "Організація", returnUrl:params.get("return") || "" };
  const safeLocalUrl = value => { try { const url = new URL(value, location.href); return url.origin === location.origin ? `${url.pathname.split("/").pop()}${url.search}${url.hash}` : "index.html"; } catch (_) { return "index.html"; } };
  const currentUrl = () => `${page}${location.search}${location.hash}`;
  function contextQuery(extra = {}) { const query = new URLSearchParams(); if (context.id) query.set("context", context.id); if (context.type) query.set("type", context.type); if (context.label) query.set("contextLabel", context.label); query.set("return", currentUrl()); Object.entries(extra).forEach(([key,value]) => { if (value) query.set(key,value); }); return query.toString(); }
  function escapeHtml(value) { return String(value || "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]); }
  function enhance() {
    document.documentElement.classList.add("management-os-integrated");
    const header = document.querySelector(".op-header, .reader-header");
    if (header && !document.querySelector(".integration-context")) {
      const bar = document.createElement("div"); bar.className = "integration-context";
      const target = context.returnUrl ? safeLocalUrl(context.returnUrl) : (context.id ? `index.html?${new URLSearchParams(context.type === "person" ? {person:context.id} : {context:context.id})}` : "index.html");
      bar.innerHTML = `<a class="integration-back" href="${target}">Повернутися до ${escapeHtml(context.label)}</a><span>${escapeHtml(labels[page] || document.title.split("—")[0].trim())}</span><a href="watson.html?${contextQuery()}">Запитати Watson у цьому контексті</a>`;
      header.before(bar);
    }
    document.querySelectorAll("a[href]").forEach(link => { const href=link.getAttribute("href"); if(!href||href.startsWith("#")||href.startsWith("http")||href.startsWith("mailto:"))return; const target=href.split("?")[0]; if(["materials.html","improvements.html","memory.html","watson.html"].includes(target)&&context.id&&!href.includes("context=")) link.href=`${href}${href.includes("?")?"&":"?"}${contextQuery()}`; });
    if (page !== "index.html") sessionStorage.setItem("management-os-last-workspace-v1", currentUrl());
    const icons=document.createElement("script");icons.src="js/icon-system.js";document.body.append(icons);
  }
  window.ManagementOSContext = { context, contextQuery, currentUrl };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance); else enhance();
})();
