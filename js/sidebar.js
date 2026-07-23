const Layout = (() => {
	const modes = {
		student: {
			label: "Режим навчання",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Навчання", "knowledge-base.html"],
				["Операційні розслідування", "index.html#investigations"],
				["Знання", "knowledge-base.html"]
			]
		},
		work: {
			label: "Робочий режим",
			links: [
				["Головна", "index.html"],
				["Порядок денний", "index.html#agenda"],
				["Операційні розслідування", "index.html#investigations"],
				["Знання", "knowledge-base.html"]
			]
		}
	};

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
		anchor.href = href;
		anchor.textContent = label;
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
		descriptor.textContent = "Операційні розслідування";
		modeLabel.textContent = "Поточний акцент";
		priorities.textContent = "Навігація змінює пріоритети, а не доступність можливостей.";

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

		logo.append(title, descriptor);
		modeLabel.appendChild(modeSelect);
		mode.links.forEach(link => navigation.appendChild(createLink(link)));
		mountPoint.replaceChildren(logo, modeLabel, navigation, priorities);
	}

	function init() {
		renderSidebar();
		window.addEventListener("hashchange", renderSidebar);
	}

	return { init, renderSidebar };
})();

Layout.init();
