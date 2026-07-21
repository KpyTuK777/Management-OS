const Layout = (() => {

	const sidebarLinks = [
		{
			label: "Поточний фокус",
			href: "index.html",
			pages: ["index.html", "portfolio.html"]
		},
		{
			label: "Нотатки",
			href: "notes.html",
			pages: ["notes.html"]
		},
		{
			label: "База знань",
			href: "knowledge-base.html",
			pages: ["knowledge-base.html"]
		},
		{
			label: "SOP",
			href: "sop.html",
			pages: ["sop.html"]
		},
		{
			label: "Виконання",
			href: "sop-executions.html",
			pages: ["sop-executions.html"]
		},
		{
			label: "Огляди",
			href: "review.html",
			pages: ["review.html"]
		},
		{
			label: "Інсайти",
			href: "insights.html",
			pages: ["insights.html"]
		},
		{
			label: "Гіпотези",
			href: "hypotheses.html",
			pages: ["hypotheses.html"]
		},
		{
			label: "Пропозиції",
			href: "improvement-proposals.html",
			pages: ["improvement-proposals.html"]
		},
		{
			label: "Навички",
			href: "#",
			pages: []
		},
		{
			label: "Налаштування",
			href: "#",
			pages: []
		}
	];

	function getCurrentPage() {

		return window.location.pathname.split("/").pop() || "index.html";

	}

	function createSidebarLink(link, currentPage) {

		const anchor = document.createElement("a");
		const isActive = link.pages.includes(currentPage);

		anchor.href = link.href;
		anchor.textContent = link.label;

		if (isActive) {

			anchor.classList.add("active");
			anchor.setAttribute("aria-current", "page");

		}

		return anchor;

	}

	function renderSidebar() {

		const mountPoint = document.getElementById("sidebar");

		if (!mountPoint) return;

		const logo = document.createElement("div");
		const title = document.createElement("h1");
		const mode = document.createElement("span");
		const navigation = document.createElement("nav");
		const currentPage = getCurrentPage();

		logo.className = "sidebar__logo";
		navigation.className = "sidebar__nav";
		title.textContent = "Management OS";
		mode.textContent = "Student Mode";

		logo.appendChild(title);
		logo.appendChild(mode);

		sidebarLinks.forEach(link => {

			navigation.appendChild(createSidebarLink(link, currentPage));

		});

		mountPoint.replaceChildren(logo, navigation);

	}

	function init() {

		renderSidebar();

	}

	return {
		init,
		renderSidebar
	};

})();

Layout.init();
