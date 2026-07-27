const Layout = (() => {
	const modes = {
		student: {
			label: "Режим навчання",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Операційні справи", "index.html#investigations"],
				["Знання", "knowledge-base.html"]
			]
		},
		work: {
			label: "Робочий режим",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Операційні справи", "index.html#investigations"],
				["Знання", "knowledge-base.html"]
			]
		}
	};
	const navigationIcons = {
		"Головна": '<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-5h4v5"/>',
		"Порядок денний": '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3.5 2"/>',
		"Операційні справи": '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v3M22.5 12h-3M12 22.5v-3M1.5 12h3"/>',
		"Знання": '<path d="M5 4.5h10a4 4 0 0 1 4 4V20H8a3 3 0 0 1-3-3Z"/><path d="M8 4.5V20M11 8h5M11 12h5"/>'
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
		text.className = "dock-label";
		text.textContent = label;
		anchor.append(createSvg(navigationIcons[label] || '<circle cx="12" cy="12" r="2"/>'), text);
		if (isCurrent(href)) {
			anchor.classList.add("active");
			anchor.setAttribute("aria-current", "page");
		}
		return anchor;
	}

	function renderSidebar() {
		const mountPoint = document.getElementById("sidebar");
		if (!mountPoint) return;

		const currentMode = getCurrentMode();
		const mode = modes[currentMode];
		const logo = document.createElement("div");
		const title = document.createElement("h1");
		const descriptor = document.createElement("span");
		const modeLabel = document.createElement("label");
		const modeSelect = document.createElement("select");
		const navigation = document.createElement("nav");
		const priorities = document.createElement("p");

		logo.className = "sidebar__logo";
		modeLabel.className = "sidebar__mode";
		modeSelect.id = "operatingMode";
		modeLabel.htmlFor = modeSelect.id;
		priorities.className = "sidebar__priority-note";
		title.textContent = "Management OS";
		descriptor.textContent = "Операційні справи";
		modeLabel.textContent = "Поточний акцент";
		priorities.textContent = "Профіль";

		Object.entries(modes).forEach(([value, definition]) => {
			const option = document.createElement("option");
			option.value = value;
			option.textContent = definition.label;
			option.selected = value === currentMode;
			modeSelect.appendChild(option);
		});

		modeSelect.addEventListener("change", () => {
			window.sessionStorage.setItem("managementOsPrototypeMode", modeSelect.value);
			window.dispatchEvent(new CustomEvent("managementos:modechange", { detail: { mode: modeSelect.value } }));
			renderSidebar();
		});

		title.textContent = "";
		title.setAttribute("aria-label", "Management OS");
		title.appendChild(createSvg('<path d="M5 6.5 12 2l7 4.5v11L12 22l-7-4.5Z"/><path d="m8 9 4-2.5L16 9v6l-4 2.5L8 15Z"/><path d="M12 6.5v11M8 9l8 6M16 9l-8 6"/>', "product-mark"));
		logo.append(title, descriptor);
		modeLabel.appendChild(modeSelect);
		mode.links.forEach(link => navigation.appendChild(createLink(link)));
		const dockFooter = document.createElement("div");
		dockFooter.className = "sidebar__footer";
		dockFooter.append(priorities, modeLabel);
		mountPoint.replaceChildren(logo, navigation, dockFooter);
	}

	function init() {
		renderSidebar();
		window.addEventListener("hashchange", renderSidebar);
	}

	return { init, renderSidebar };
})();

Layout.init();
