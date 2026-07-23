const InvestigationPrototype = (() => {
	let elements;

	function announce(message) {
		elements.announcement.textContent = "";
		window.requestAnimationFrame(() => {
			elements.announcement.textContent = message;
		});
	}

	function showView(viewName) {
		elements.stageButtons.forEach(button => {
			const isActive = button.dataset.view === viewName;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-pressed", String(isActive));
		});

		elements.caseViews.forEach(view => {
			view.classList.toggle("is-active", view.dataset.caseView === viewName);
		});
	}

	function openInvestigation(event) {
		event.preventDefault();
		const symptom = elements.input.value.trim();
		if (!symptom) return;

		elements.reportedSymptom.textContent = `“${symptom}”`;
		elements.home.classList.add("hidden");
		elements.workspace.classList.remove("hidden");
		showView("understanding");
		elements.workspace.focus({ preventScroll: true });
		window.location.hash = "reality";
		announce("Створено тимчасове розслідування INV-0247. Повідомлений симптом збережено лише в пам’яті сторінки.");
	}

	function resetInvestigation() {
		elements.workspace.classList.add("hidden");
		elements.home.classList.remove("hidden");
		elements.scenario.classList.add("hidden");
		elements.input.value = "";
		window.location.hash = "";
		elements.input.focus();
		announce("Прототип повернувся до нового повідомлення.");
	}

	function filterEvidence(category) {
		elements.evidenceFilters.forEach(button => {
			const isActive = button.dataset.evidenceFilter === category;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-pressed", String(isActive));
		});

		elements.evidenceCards.forEach(card => {
			const categories = card.dataset.evidenceCategory.split(" ");
			card.classList.toggle("hidden", category !== "all" && !categories.includes(category));
		});
	}

	function showPrototypeMessage(message) {
		announce(message);
		window.alert(message);
	}

	function getElements() {
		return {
			home: document.getElementById("investigationHome"),
			workspace: document.getElementById("investigationWorkspace"),
			form: document.getElementById("investigationIntake"),
			input: document.getElementById("investigationInput"),
			reportedSymptom: document.getElementById("reportedSymptomText"),
			newButton: document.getElementById("newInvestigationButton"),
			stageButtons: [...document.querySelectorAll("[data-view]")],
			caseViews: [...document.querySelectorAll("[data-case-view]")],
			evidenceFilters: [...document.querySelectorAll("[data-evidence-filter]")],
			evidenceCards: [...document.querySelectorAll("[data-evidence-category]")],
			requestEvidence: document.getElementById("requestEvidenceButton"),
			openSimulation: document.getElementById("openSimulationButton"),
			closeSimulation: document.getElementById("closeSimulationButton"),
			scenario: document.getElementById("scenarioBranch"),
			reviewStep: document.getElementById("reviewStepButton"),
			gymDemo: document.getElementById("gymDemoButton"),
			announcement: document.getElementById("prototypeAnnouncement")
		};
	}

	function init() {
		elements = getElements();
		if (!elements.form) return;

		elements.workspace.setAttribute("tabindex", "-1");
		elements.form.addEventListener("submit", openInvestigation);
		elements.newButton.addEventListener("click", resetInvestigation);
		elements.stageButtons.forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
		elements.evidenceFilters.forEach(button => button.addEventListener("click", () => filterEvidence(button.dataset.evidenceFilter)));
		elements.openSimulation.addEventListener("click", () => {
			elements.scenario.classList.remove("hidden");
			elements.scenario.scrollIntoView({ behavior: "smooth", block: "nearest" });
			announce("Відкрито модельовану сценарну гілку. Це не прогноз.");
		});
		elements.closeSimulation.addEventListener("click", () => {
			elements.scenario.classList.add("hidden");
			elements.openSimulation.focus();
		});
		elements.requestEvidence.addEventListener("click", () => showPrototypeMessage("Прототип: AI підготував би запит на джерело, а власник перевірив би дозвіл і мету."));
		elements.reviewStep.addEventListener("click", () => showPrototypeMessage("Прототип: запит потребує схвалення власника. Жодні дані не отримано автоматично."));
		elements.gymDemo.addEventListener("click", () => showPrototypeMessage("Прототип Gym використовуватиме ту саму структуру розслідування у чітко позначеному навчальному середовищі."));

		if (new URLSearchParams(window.location.search).get("demo") === "investigation") {
			elements.input.value = "Наші продажі почали знижуватися.";
			elements.form.requestSubmit();
		}
	}

	return { init };
})();

InvestigationPrototype.init();
