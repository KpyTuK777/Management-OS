const Layout = (() => {
  const modes = {
    student: {
      label: "Режим навчання",
      links: [["Головна", "index.html"], ["Порядок денний", "index.html#agenda"], ["Операційні справи", "index.html#investigations"], ["Знання", "knowledge-base.html"], ["Історичний розбір", "historical-reader.html"]]
    },
    work: {
      label: "Робочий режим",
      links: [["Головна", "index.html"], ["Порядок денний", "index.html#agenda"], ["Операційні справи", "index.html#investigations"], ["Знання", "knowledge-base.html"], ["Історичний розбір", "historical-reader.html"]]
    }
  };
  const readerLinks = [["Орієнтація", "#orientation"], ["Історичне читання", "#workspace"], ["Межа осмислення", "#reflection"]];
  const navigationIcons = {
    "Головна": '<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-5h4v5"/>',
    "Порядок денний": '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3.5 2"/>',
    "Операційні справи": '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v3M22.5 12h-3M12 22.5v-3M1.5 12h3"/>',
    "Знання": '<path d="M5 4.5h10a4 4 0 0 1 4 4V20H8a3 3 0 0 1-3-3Z"/><path d="M8 4.5V20M11 8h5M11 12h5"/>',
    "Історичний розбір": '<path d="M6 3.5h12v17H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    "Орієнтація": '<circle cx="12" cy="12" r="8"/><path d="m9.5 14.5 2-5 3-1-2 5z"/>',
    "Історичне читання": '<path d="M6 3.5h12v17H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    "Межа осмислення": '<path d="M12 3a7 7 0 0 0-4 12.7V20h8v-4.3A7 7 0 0 0 12 3Z"/><path d="M9 16h6M9 20h6"/>'
  };
  const svgNamespace = "http://www.w3.org/2000/svg";

  function createSvg(paths, className = "dock-icon") {
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.classList.add(className);
    svg.innerHTML = paths;
    return svg;
  }

  function getCurrentMode() {
    return window.sessionStorage.getItem("managementOsPrototypeMode") || "student";
  }

  function isCurrent(href) {
    if (href.startsWith("#")) return window.location.hash === href || (!window.location.hash && href === "#orientation");
    const page = window.location.pathname.split("/").pop() || "index.html";
    const [targetPage, targetHash] = href.split("#");
    if (targetPage !== page) return false;
    if (targetHash) return window.location.hash === `#${targetHash}`;
    return !window.location.hash;
  }

  function createLink([label, href]) {
    const anchor = document.createElement("a");
    const text = document.createElement("span");
    anchor.href = href;
    anchor.setAttribute("aria-label", label);
    anchor.dataset.label = label;
    if (href.startsWith("#")) anchor.dataset.route = href.slice(1);
    text.className = "dock-label";
    text.textContent = label;
    anchor.append(createSvg(navigationIcons[label] || '<circle cx="12" cy="12" r="2"/>'), text);
    if (isCurrent(href)) {
      anchor.classList.add("active");
      anchor.setAttribute("aria-current", "page");
    }
    return anchor;
  }

  function createProductIdentity(isReader) {
    const logo = document.createElement("div");
    const title = document.createElement("h1");
    const descriptor = document.createElement("span");
    const productMark = document.createElement("span");
    const productName = document.createElement("span");
    logo.className = "sidebar__logo";
    title.setAttribute("aria-label", "Management OS");
    productMark.className = "product-mark product-mark--os";
    productMark.textContent = "OS";
    productName.className = "sidebar__product-name";
    productName.textContent = "Management OS";
    descriptor.textContent = isReader ? "Операційний кабінет" : "Операційні справи";
    title.append(productMark, productName);
    logo.append(title, descriptor);
    return logo;
  }

  function renderReaderSidebar(mountPoint) {
    const logo = createProductIdentity(true);
    const caseContext = document.createElement("section");
    const caseLink = document.createElement("a");
    const label = document.createElement("p");
    const name = document.createElement("strong");
    const meta = document.createElement("span");
    caseContext.className = "sidebar__case-context sidebar__case-context--primary";
    caseLink.href = "historical-reader.html";
    caseLink.setAttribute("aria-label", "Історичний розбір");
    label.textContent = "Відкритий кейс";
    name.textContent = "Knight Capital";
    meta.textContent = "Розбір 01 · Shape B";
    caseLink.append(name, meta);
    caseContext.append(label, caseLink);

    const navigationLabel = document.createElement("p");
    const navigation = document.createElement("nav");
    navigationLabel.className = "sidebar__section-label";
    navigationLabel.textContent = "Робота з кейсом";
    navigation.setAttribute("aria-label", "Робота з відкритим кейсом");
    readerLinks.forEach(link => navigation.appendChild(createLink(link)));

    const organizationLink = document.createElement("a");
    organizationLink.href = "index.html?surface=organization";
    organizationLink.className = "sidebar__organization-return";
    organizationLink.setAttribute("aria-label", "Повернутися до організації");
    organizationLink.innerHTML = '<span class="dock-icon" aria-hidden="true">⌂</span><span class="dock-label">Повернутися до організації</span>';
    navigation.prepend(organizationLink);

    const otherSpaces = document.createElement("details");
    const otherSummary = document.createElement("summary");
    const otherNavigation = document.createElement("nav");
    otherSpaces.className = "sidebar__other-spaces";
    otherSummary.textContent = "Інші простори Management OS";
    otherNavigation.setAttribute("aria-label", "Інші простори Management OS");
    modes.student.links.slice(0, 4).forEach(link => otherNavigation.appendChild(createLink(link)));
    otherSpaces.append(otherSummary, otherNavigation);

    const progress = document.createElement("section");
    const progressLabel = document.createElement("p");
    const currentPhase = document.createElement("strong");
    const phaseProgress = document.createElement("span");
    const attention = document.createElement("span");
    const currentClaim = document.createElement("span");
    const authority = document.createElement("span");
    progress.className = "sidebar__case-progress";
    progressLabel.textContent = "Поточний стан";
    currentPhase.id = "sidebarCurrentPhase";
    currentPhase.textContent = "Завантаження фази";
    phaseProgress.id = "sidebarPhaseProgress";
    phaseProgress.textContent = "0 з 11 фаз переглянуто";
    attention.id = "sidebarAttentionCount";
    attention.textContent = "11 ще потребують уваги";
    currentClaim.id = "sidebarCurrentClaim";
    currentClaim.textContent = "Твердження не вибрано";
    authority.className = "sidebar__case-state";
    authority.textContent = "Історичні матеріали · лише читання";
    progress.append(progressLabel, currentPhase, phaseProgress, attention, currentClaim, authority);
    mountPoint.replaceChildren(logo, caseContext, navigationLabel, navigation, otherSpaces, progress);
  }

  function renderDefaultSidebar(mountPoint) {
    const mode = modes[getCurrentMode()];
    const logo = createProductIdentity(false);
    const navigationLabel = document.createElement("p");
    const navigation = document.createElement("nav");
    const dockFooter = document.createElement("div");
    const modeLabel = document.createElement("label");
    const modeSelect = document.createElement("select");
    const priorities = document.createElement("p");
    navigationLabel.className = "sidebar__section-label";
    navigationLabel.textContent = "Простори";
    navigation.setAttribute("aria-label", "Основні простори Management OS");
    mode.links.forEach(link => navigation.appendChild(createLink(link)));
    dockFooter.className = "sidebar__footer";
    modeLabel.className = "sidebar__mode";
    modeSelect.id = "operatingMode";
    modeLabel.htmlFor = modeSelect.id;
    priorities.className = "sidebar__priority-note";
    modeLabel.textContent = "Поточний акцент";
    priorities.textContent = "Профіль";
    Object.entries(modes).forEach(([value, definition]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = definition.label;
      option.selected = value === getCurrentMode();
      modeSelect.appendChild(option);
    });
    modeSelect.addEventListener("change", () => {
      window.sessionStorage.setItem("managementOsPrototypeMode", modeSelect.value);
      window.dispatchEvent(new CustomEvent("managementos:modechange", { detail: { mode: modeSelect.value } }));
      renderSidebar();
    });
    modeLabel.appendChild(modeSelect);
    dockFooter.append(priorities, modeLabel);
    mountPoint.replaceChildren(logo, navigationLabel, navigation, dockFooter);
  }

  function renderSidebar() {
    const mountPoint = document.getElementById("sidebar");
    if (!mountPoint) return;
    document.body.classList.contains("historical-reader-page") ? renderReaderSidebar(mountPoint) : renderDefaultSidebar(mountPoint);
  }

  function init() {
    renderSidebar();
  }

  return { init, renderSidebar };
})();

Layout.init();
