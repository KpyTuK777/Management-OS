const Layout = (() => {
	const modes = {
		student: {
			label: "Режим навчання",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Операційні справи", "index.html#investigations"],
				["Знання", "knowledge-base.html"],
				["Історичний розбір", "historical-reader.html"]
			]
		},
		work: {
			label: "Робочий режим",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Операційні справи", "index.html#investigations"],
				["Знання", "knowledge-base.html"],
				["Історичний розбір", "historical-reader.html"]
			]
		}
	};
	const navigationIcons = {
		"Головна": '<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10.5V20h11v-9.5"/><path d="M10 20v-5h4v5"/>',
		"Порядок денний": '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3.5 2"/>',
		"Операційні справи": '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v3M22.5 12h-3M12 22.5v-3M1.5 12h3"/>',
		"Знання": '<path d="M5 4.5h10a4 4 0 0 1 4 4V20H8a3 3 0 0 1-3-3Z"/><path d="M8 4.5V20M11 8h5M11 12h5"/>',
		"Історичний розбір": '<path d="M6 3.5h12v17H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>'
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
		const isReader = document.body.classList.contains("historical-reader-page");
		const logo = document.createElement("div");
		const title = document.createElement("h1");
		const descriptor = document.createElement("span");
		const navigation = document.createElement("nav");
		const navigationLabel = document.createElement("p");
		const dockFooter = document.createElement("div");

		logo.className = "sidebar__logo";
		title.setAttribute("aria-label", "Management OS");
		const productMark = document.createElement("span");
		productMark.className = "product-mark product-mark--os";
		productMark.textContent = "OS";
		const productName = document.createElement("span");
		productName.className = "sidebar__product-name";
		productName.textContent = "Management OS";
		title.append(productMark, productName);
		descriptor.textContent = isReader ? "Операційний кабінет" : "Операційні справи";
		logo.append(title, descriptor);

		navigationLabel.className = "sidebar__section-label";
		navigationLabel.textContent = "Простори";
		navigation.setAttribute("aria-label", "Основні простори Management OS");
		mode.links.forEach(link => navigation.appendChild(createLink(link)));

		dockFooter.className = "sidebar__footer";
		if (isReader) {
			const caseContext = document.createElement("section");
			const label = document.createElement("p");
			const name = document.createElement("strong");
			const meta = document.createElement("span");
			const state = document.createElement("span");
			caseContext.className = "sidebar__case-context";
			label.textContent = "Відкритий кейс";
			name.textContent = "Knight Capital";
			meta.textContent = "Історичний розбір 01 · Shape B";
			state.className = "sidebar__case-state";
			state.textContent = "Лише читання";
			caseContext.append(label, name, meta, state);
			dockFooter.append(caseContext);
		} else {
			const modeLabel = document.createElement("label");
			const modeSelect = document.createElement("select");
			const priorities = document.createElement("p");
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
				option.selected = value === currentMode;
				modeSelect.appendChild(option);
			});
			modeSelect.addEventListener("change", () => {
				window.sessionStorage.setItem("managementOsPrototypeMode", modeSelect.value);
				window.dispatchEvent(new CustomEvent("managementos:modechange", { detail: { mode: modeSelect.value } }));
				renderSidebar();
			});
			modeLabel.appendChild(modeSelect);
			dockFooter.append(priorities, modeLabel);
		}
		mountPoint.replaceChildren(logo, navigationLabel, navigation, dockFooter);
	}

	function init() {
		renderSidebar();
		window.addEventListener("hashchange", renderSidebar);
	}

	return { init, renderSidebar };
})();

Layout.init();
