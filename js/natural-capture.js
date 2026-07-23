const InvestigationPrototype = (() => {
	let elements;
	const journeyLabels = ["Повідомлений симптом", "Розслідування створено", "AI готує розслідування", "Збір доказів", "Операційне розуміння", "Розвиток гіпотез", "Валідація причин", "Готовність до рішення", "Рішення власника", "План виконання", "Перевірка результату", "Захоплення знання"];

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

	function setJourneyStep(step) {
		elements.currentJourneyStep.textContent = journeyLabels[step - 1].toLowerCase();
		elements.currentJourneyLabel.textContent = journeyLabels[step - 1];
		elements.journeySteps.forEach((item, index) => {
			item.classList.toggle("is-complete", index < step - 1);
			item.classList.toggle("is-current", index === step - 1);
		});
	}

	function openInvestigation(event) {
		event.preventDefault();
		const symptom = elements.input.value.trim();
		if (!symptom) return;

		elements.reportedSymptom.textContent = `“${symptom}”`;
		applyContext(elements.context.value);
		elements.home.classList.add("hidden");
		elements.workspace.classList.remove("hidden");
		showView("understanding");
		setJourneyStep(3);
		elements.workspace.focus({ preventScroll: true });
		window.location.hash = "investigations";
		announce("Створено тимчасову операційну справу MAT-0247 і перше розслідування. Повідомлений симптом збережено лише в пам’яті сторінки.");
	}

	function beginEvidenceCollection() {
		setJourneyStep(4);
		showView("evidence");
		announce("AI підготував мінімальний запит доказів. Власник перевіряє і схвалює його.");
	}

	function collectEvidence() {
		const missingCard = elements.evidenceCards.find(card => card.dataset.evidenceCategory.includes("system"));
		const state = missingCard.querySelector(".evidence-card__state");
		const influence = missingCard.querySelector(".influence-role");
		state.textContent = "Отримано · демонстрація";
		state.className = "evidence-card__state";
		influence.textContent = "Вплив: встановив масштаб симптома";
		influence.classList.remove("influence-role--pending");
		elements.evidenceFlowStatus.textContent = "Докази організовано. AI виявив сегментований спад і підготував гіпотези; власник перевіряє інтерпретацію.";
		elements.collectEvidence.disabled = true;
		elements.collectEvidence.textContent = "Демонстраційні докази отримано";
		setJourneyStep(5);
		showView("understanding");
		elements.hypothesisList.classList.remove("hidden");
		elements.validateCause.classList.remove("hidden");
		setJourneyStep(6);
		announce("Докази зібрано. Показано конкуруючі гіпотези та обмеження.");
	}

	function validateCause() {
		setJourneyStep(7);
		elements.validateCause.disabled = true;
		elements.validateCause.textContent = "Причинне пояснення прийнято власником у межах пілоту";
		elements.primaryInflection.classList.remove("is-candidate");
		elements.primaryInflection.classList.add("is-accepted");
		elements.inflectionStatus.textContent = "Прийнята точка перелому · власник";
		elements.inflectionSummaryStatus.textContent = "Прийнято власником";
		showView("decision");
		elements.readinessSummary.classList.remove("hidden");
		elements.decisionReadinessTitle.textContent = "Готове до рішення з видимою невизначеністю";
		elements.readinessChip.textContent = "AI підготував · вирішує власник";
		elements.approveDecision.classList.remove("hidden");
		setJourneyStep(8);
		announce("AI підготував огляд готовності. Рішення залишається за власником.");
	}

	function approveDecision() {
		setJourneyStep(9);
		elements.approveDecision.disabled = true;
		elements.approveDecision.textContent = "Рішення прийнято власником";
		elements.executionPlan.classList.remove("hidden");
		setJourneyStep(10);
		elements.executionPlan.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

	function approvePlan() {
		setJourneyStep(11);
		showView("outcome");
		elements.followUpTitle.textContent = "Перевірка запланована на 30-й день";
		elements.followUpDescription.textContent = "Власник порівняє поновлення, час відповіді та захисні показники інших сегментів.";
		elements.recordOutcome.classList.remove("hidden");
	}

	function recordOutcome() {
		elements.followUpTitle.textContent = "Пілот покращив поновлення без порушення захисних показників";
		elements.followUpDescription.textContent = "Спостережено в одній команді протягом 30 днів. Результат обмежений цим контекстом.";
		elements.recordOutcome.classList.add("hidden");
		elements.knowledgeCapture.classList.remove("hidden");
		setJourneyStep(12);
	}

	function captureKnowledge() {
		elements.knowledgeCaptured.classList.remove("hidden");
		elements.captureKnowledge.disabled = true;
		elements.captureKnowledge.textContent = "Кандидат підготовлено";
		announce("Підготовлено кандидат на окремий перегляд знання. Він не є схваленим знанням і не змінює стан операційної справи.");
	}

	function prepareMatterContribution(event) {
		event.preventDefault();
		const original = elements.matterCaptureInput.value.trim();
		if (!original) return;

		elements.captureOriginal.textContent = `“${original}”`;
		elements.matterCaptureReview.classList.remove("hidden");
		elements.reasoningMilestone.classList.add("hidden");
		elements.approveMatterContribution.disabled = false;
		elements.approveMatterContribution.textContent = "Схвалити як внесок для перевірки";
		elements.matterCaptureReview.scrollIntoView({ behavior: "smooth", block: "nearest" });
		announce("Watson підготував класифікацію та зв’язки. Оригінальне формулювання збережено; потрібна перевірка власника.");
	}

	function approveMatterContribution() {
		const original = elements.matterCaptureInput.value.trim();
		if (!original) return;

		elements.milestoneContribution.textContent = original;
		elements.reasoningMilestone.classList.remove("hidden");
		elements.boardRecentChange.textContent = "Схвалено внесок, що уточнює можливу часову межу";
		elements.boardUnderstanding.textContent = "18 квітня є кандидатом межі зміни, а не підтвердженим фактом";
		elements.boardReasoningBasis.textContent = "Власницьке спостереження потребує зіставлення з CRM і SLA";
		elements.approveMatterContribution.disabled = true;
		elements.approveMatterContribution.textContent = "Внесок схвалено для перевірки";
		elements.reasoningMilestone.scrollIntoView({ behavior: "smooth", block: "nearest" });
		announce("Внесок схвалено в пам’яті сторінки. Операційну картину оновлено, але доказ, стан справи та авторитетні записи не змінено.");
	}

	function discardMatterContribution() {
		elements.matterCaptureReview.classList.add("hidden");
		elements.reasoningMilestone.classList.add("hidden");
		elements.matterCaptureInput.focus();
		announce("Пропозицію Watson відхилено. Оригінальний текст залишається в полі введення для редагування.");
	}

	function resetInvestigation() {
		window.location.assign(window.location.pathname);
	}

	function reviewWorkingTitle() {
		const title = elements.workingTitle.value.trim();
		const causalClaim = /\b(через|спричинен|спричинила|причина|внаслідок)\b/i.test(title);

		if (!title) {
			elements.workingTitle.value = "Дослідження повідомленої операційної зміни";
		}

		elements.workingTitleGuidance.textContent = causalClaim
			? "Перевірте назву: вона може звучати як підтверджена причина, якої докази ще не встановили."
			: "Робоча назва змінена лише для орієнтації. Вона не змінює симптом, докази або висновок.";
		elements.workingTitleGuidance.classList.toggle("working-title-warning", causalClaim);
		announce(causalClaim ? "Робоча назва може містити передчасний причинний висновок." : "Робочу назву оновлено.");
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

	function defaultContext(mode = window.sessionStorage.getItem("managementOsPrototypeMode") || "student") {
		return mode === "work" ? "reality" : "learning";
	}

	function applyContext(context) {
		const learning = context === "learning";
		elements.context.value = learning ? "learning" : "reality";
		elements.contextBadge.textContent = learning ? "Операційне навчання" : "Операційна реальність";
		elements.contextBadge.className = `environment-badge environment-badge--${learning ? "learning" : "reality"}`;
	}

	function getElements() {
		return {
			home: document.getElementById("investigationHome"),
			workspace: document.getElementById("investigationWorkspace"),
			form: document.getElementById("investigationIntake"),
			input: document.getElementById("investigationInput"),
			context: document.getElementById("investigationContext"),
			contextBadge: document.getElementById("investigationContextBadge"),
			workingTitle: document.getElementById("caseWorkingTitle"),
			workingTitleGuidance: document.getElementById("workingTitleGuidance"),
			currentJourneyStep: document.getElementById("currentJourneyStep"),
			currentJourneyLabel: document.getElementById("currentJourneyLabel"),
			journeySteps: [...document.querySelectorAll("#journeySteps li")],
			primaryInflection: document.getElementById("primaryInflectionPoint"),
			inflectionStatus: document.getElementById("inflectionStatus"),
			inflectionSummaryStatus: document.getElementById("inflectionSummaryStatus"),
			reportedSymptom: document.getElementById("reportedSymptomText"),
			newButton: document.getElementById("newInvestigationButton"),
			stageButtons: [...document.querySelectorAll("[data-view]")],
			caseViews: [...document.querySelectorAll("[data-case-view]")],
			evidenceFilters: [...document.querySelectorAll("[data-evidence-filter]")],
			evidenceCards: [...document.querySelectorAll("[data-evidence-category]")],
			requestEvidence: document.getElementById("requestEvidenceButton"),
			collectEvidence: document.getElementById("collectEvidenceButton"),
			evidenceFlowStatus: document.getElementById("evidenceFlowStatus"),
			hypothesisList: document.getElementById("hypothesisList"),
			validateCause: document.getElementById("validateCauseButton"),
			readinessSummary: document.getElementById("readinessSummary"),
			decisionReadinessTitle: document.getElementById("decisionReadinessTitle"),
			readinessChip: document.getElementById("readinessChip"),
			approveDecision: document.getElementById("approveDecisionButton"),
			executionPlan: document.getElementById("executionPlan"),
			approvePlan: document.getElementById("approvePlanButton"),
			followUpTitle: document.getElementById("followUpTitle"),
			followUpDescription: document.getElementById("followUpDescription"),
			recordOutcome: document.getElementById("recordOutcomeButton"),
			knowledgeCapture: document.getElementById("knowledgeCapture"),
			captureKnowledge: document.getElementById("captureKnowledgeButton"),
			knowledgeCaptured: document.getElementById("knowledgeCaptured"),
			matterCaptureForm: document.getElementById("matterCaptureForm"),
			matterCaptureInput: document.getElementById("matterCaptureInput"),
			matterCaptureReview: document.getElementById("matterCaptureReview"),
			captureOriginal: document.getElementById("captureOriginal"),
			approveMatterContribution: document.getElementById("approveMatterContribution"),
			discardMatterContribution: document.getElementById("discardMatterContribution"),
			reasoningMilestone: document.getElementById("reasoningMilestone"),
			milestoneContribution: document.getElementById("milestoneContribution"),
			boardUnderstanding: document.getElementById("boardUnderstanding"),
			boardReasoningBasis: document.getElementById("boardReasoningBasis"),
			boardRecentChange: document.getElementById("boardRecentChange"),
			openSimulation: document.getElementById("openSimulationButton"),
			closeSimulation: document.getElementById("closeSimulationButton"),
			scenario: document.getElementById("scenarioBranch"),
			reviewStep: document.getElementById("reviewStepButton"),
			announcement: document.getElementById("prototypeAnnouncement")
		};
	}

	function init() {
		elements = getElements();
		if (!elements.form) return;

		elements.workspace.setAttribute("tabindex", "-1");
		elements.form.addEventListener("submit", openInvestigation);
		const requestedContext = new URLSearchParams(window.location.search).get("context");
		applyContext(["reality", "learning"].includes(requestedContext) ? requestedContext : defaultContext());
		window.addEventListener("managementos:modechange", event => {
			if (elements.workspace.classList.contains("hidden")) applyContext(defaultContext(event.detail.mode));
		});
		elements.workingTitle.addEventListener("change", reviewWorkingTitle);
		elements.newButton.addEventListener("click", resetInvestigation);
		elements.stageButtons.forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
		elements.evidenceFilters.forEach(button => button.addEventListener("click", () => filterEvidence(button.dataset.evidenceFilter)));
		elements.openSimulation.addEventListener("click", () => {
			elements.scenario.classList.remove("hidden");
			elements.scenario.scrollIntoView({ behavior: "smooth", block: "nearest" });
			announce("Відкрито неавторитетну модельовану гілку від MAT-0247 v1. Це не доказ, прогноз або рішення.");
		});
		elements.closeSimulation.addEventListener("click", () => {
			elements.scenario.classList.add("hidden");
			elements.openSimulation.focus();
		});
		elements.requestEvidence.addEventListener("click", beginEvidenceCollection);
		elements.reviewStep.addEventListener("click", beginEvidenceCollection);
		elements.collectEvidence.addEventListener("click", collectEvidence);
		elements.validateCause.addEventListener("click", validateCause);
		elements.approveDecision.addEventListener("click", approveDecision);
		elements.approvePlan.addEventListener("click", approvePlan);
		elements.recordOutcome.addEventListener("click", recordOutcome);
		elements.captureKnowledge.addEventListener("click", captureKnowledge);
		elements.matterCaptureForm.addEventListener("submit", prepareMatterContribution);
		elements.approveMatterContribution.addEventListener("click", approveMatterContribution);
		elements.discardMatterContribution.addEventListener("click", discardMatterContribution);

		if (new URLSearchParams(window.location.search).get("demo") === "investigation") {
			elements.input.value = "Наші продажі знижуються протягом останніх трьох місяців.";
			elements.form.requestSubmit();
			if (new URLSearchParams(window.location.search).get("capture") === "approved") {
				elements.matterCaptureInput.value = "Керівник enterprise-команди повідомив, що час передачі лідів зріс після 18 квітня.";
				elements.matterCaptureForm.requestSubmit();
				elements.approveMatterContribution.click();
			}
			if (new URLSearchParams(window.location.search).get("journey") === "complete") {
				collectEvidence();
				validateCause();
				approveDecision();
				approvePlan();
				recordOutcome();
				captureKnowledge();
			}
			const demoView = new URLSearchParams(window.location.search).get("view");
			if (["understanding", "evidence", "decision", "outcome"].includes(demoView)) {
				showView(demoView);
			}
		}
	}

	return { init };
})();

InvestigationPrototype.init();
