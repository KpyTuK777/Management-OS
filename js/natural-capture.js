const InvestigationPrototype = (() => {
	let elements;
	let guidedPhase = "orientation";
	const journeyLabels = ["Повідомлений симптом", "Справу створено", "Підготовка", "Збір доказів", "Поточне розуміння", "Перевірка гіпотез", "Перевірка причин", "Готовність до рішення", "Рішення", "План виконання", "Перевірка результату", "Кандидат знання"];
	const guidedStates = {
		orientation: {
			condition: "Орієнтація",
			title: "Встановити базове порівняння",
			reason: "Без періоду та сегментованого зрізу неможливо відрізнити загальну зміну від локального сигналу.",
			need: "Період, базову лінію та уражений сегмент",
			effect: "Підтвердити масштаб відхилення та відкрити порівняння пояснень",
			action: "Переглянути запит доказів"
		},
		evidence: {
			condition: "Збір доказів",
			title: "Отримати сегментований CRM-зріз",
			reason: "Це найменший доступний доказ, який покаже, чи зміна загальна або локалізована.",
			need: "CRM-когорти за періодом і сегментом",
			effect: "Дозволити або відкласти порівняння конкуруючих пояснень",
			action: "Отримати демонстраційні докази"
		},
		hypotheses: {
			condition: "Перевірка пояснень",
			title: "Порівняти конкуруючі гіпотези",
			reason: "Базовий зріз уже встановив сегментовану зміну; тепер важливо шукати розрізнювальні, а не лише підтверджувальні докази.",
			need: "Підтримувальні та спростовувальні умови",
			effect: "Відхилити слабкі пояснення та підготувати перевірку причинності",
			action: "Перевірити причинне пояснення"
		},
		decision: {
			condition: "Підготовка рішення",
			title: "Переглянути готовність до рішення",
			reason: "Докази підтримують обмежене судження, але залишкова невизначеність має бути прийнята власником явно.",
			need: "Відоме, невідоме, ризики та захисні умови",
			effect: "Прийняти рішення або повернутися до розслідування",
			action: "Переглянути та прийняти рішення"
		},
		execution: {
			condition: "Виконання",
			title: "Схвалити обмежений план виконання",
			reason: "Рішення прийнято; наступний крок має зберегти межі пілоту, відповідальність і перевірку результату.",
			need: "Власника дії, межі, захисні показники та дату перевірки",
			effect: "Розпочати контрольоване виконання без розширення рішення",
			action: "Схвалити план виконання"
		},
		outcome: {
			condition: "Перевірка результату",
			title: "Зафіксувати спостережуваний результат",
			reason: "Виконання не завершує розслідування: очікуваний ефект і захисні показники потрібно перевірити.",
			need: "Ефект, контекст спостереження та небажані наслідки",
			effect: "Підтвердити, спростувати або обмежити операційне навчання",
			action: "Зафіксувати результат"
		},
		learning: {
			condition: "Навчання",
			title: "Підготувати кандидат знання до окремого перегляду",
			reason: "Результат спостережено лише в обмеженому контексті, тому він не може автоматично стати затвердженим знанням.",
			need: "Межі застосовності, докази та невизначеність",
			effect: "Зберегти перевірюване навчання без переписування історії",
			action: "Підготувати кандидат знання"
		}
	};

	function announce(message) {
		elements.announcement.textContent = "";
		window.requestAnimationFrame(() => {
			elements.announcement.textContent = message;
		});
	}

	function setGuidedPhase(phase) {
		guidedPhase = phase;
		const state = guidedStates[phase];
		if (elements.boardInspection && phase !== "evidence") {
			elements.boardInspection.open = false;
		}
		elements.guidedCondition.textContent = state.condition;
		elements.guidedTitle.textContent = state.title;
		elements.guidedReason.textContent = state.reason;
		elements.guidedNeed.textContent = state.need;
		elements.guidedEffect.textContent = state.effect;
		elements.guidedAction.textContent = state.action;
	}

	function advanceGuidedAction() {
		if (guidedPhase === "orientation") return beginEvidenceCollection();
		if (guidedPhase === "evidence") return collectEvidence();
		if (guidedPhase === "hypotheses") return validateCause();
		if (guidedPhase === "decision") return approveDecision();
		if (guidedPhase === "execution") return approvePlan();
		if (guidedPhase === "outcome") return recordOutcome();
		if (guidedPhase === "learning") return captureKnowledge();
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
		elements.boardInspection.open = true;
		showView("evidence");
		setGuidedPhase("evidence");
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
		setGuidedPhase("hypotheses");
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
		setGuidedPhase("decision");
		announce("AI підготував огляд готовності. Рішення залишається за власником.");
	}

	function approveDecision() {
		setJourneyStep(9);
		elements.approveDecision.disabled = true;
		elements.approveDecision.textContent = "Рішення прийнято власником";
		elements.executionPlan.classList.remove("hidden");
		setJourneyStep(10);
		setGuidedPhase("execution");
		elements.executionPlan.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

	function approvePlan() {
		setJourneyStep(11);
		showView("outcome");
		elements.followUpTitle.textContent = "Перевірка запланована на 30-й день";
		elements.followUpDescription.textContent = "Власник порівняє поновлення, час відповіді та захисні показники інших сегментів.";
		elements.recordOutcome.classList.remove("hidden");
		setGuidedPhase("outcome");
	}

	function recordOutcome() {
		elements.followUpTitle.textContent = "Пілот покращив поновлення без порушення захисних показників";
		elements.followUpDescription.textContent = "Спостережено в одній команді протягом 30 днів. Результат обмежений цим контекстом.";
		elements.recordOutcome.classList.add("hidden");
		elements.knowledgeCapture.classList.remove("hidden");
		setJourneyStep(12);
		setGuidedPhase("learning");
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
		elements.guidedInvestigation.classList.add("hidden");
		elements.watsonContributionReview.classList.remove("hidden");
		elements.reasoningMilestone.classList.add("hidden");
		elements.approveMatterContribution.disabled = false;
		elements.approveMatterContribution.textContent = "Схвалити як внесок для перевірки";
		elements.watsonContributionReview.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
		setGuidedPhase(guidedPhase);
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
		elements.approveMatterContribution.disabled = true;
		elements.approveMatterContribution.textContent = "Внесок схвалено для перевірки";
		elements.boardInspection.open = true;
		elements.reasoningMilestone.scrollIntoView({ behavior: "smooth", block: "nearest" });
		announce("Внесок схвалено в пам’яті сторінки. Watson повторно оцінив рекомендацію; поточний напрям не змінився. Доказ, стан справи та авторитетні записи не змінено.");
	}

	function discardMatterContribution() {
		elements.matterCaptureReview.classList.add("hidden");
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
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
			guidedInvestigation: document.getElementById("guidedInvestigation"),
			watsonContributionReview: document.getElementById("watsonContributionReview"),
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
			boardInspection: document.getElementById("boardInspection"),
			guidedCondition: document.getElementById("guidedCondition"),
			guidedTitle: document.getElementById("guidedInvestigationTitle"),
			guidedReason: document.getElementById("guidedInvestigationReason"),
			guidedNeed: document.getElementById("guidedInvestigationNeed"),
			guidedEffect: document.getElementById("guidedInvestigationEffect"),
			guidedAction: document.getElementById("guidedActionButton"),
			redirectGuidance: document.getElementById("redirectGuidanceButton"),
			deferGuidance: document.getElementById("deferGuidanceButton"),
			rejectGuidance: document.getElementById("rejectGuidanceButton"),
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
		elements.guidedAction.addEventListener("click", advanceGuidedAction);
		elements.redirectGuidance.addEventListener("click", () => {
			elements.matterCaptureInput.focus();
			elements.matterCaptureInput.scrollIntoView({ behavior: "smooth", block: "center" });
			announce("Напрям не змінено. Додайте те, що вже відомо, своїми словами.");
		});
		elements.deferGuidance.addEventListener("click", () => {
			announce("Рекомендацію відкладено. Операційна справа й повна картина залишаються доступними; стан не змінено.");
		});
		elements.rejectGuidance.addEventListener("click", () => {
			elements.rejectGuidance.disabled = true;
			elements.rejectGuidance.textContent = "Рекомендацію відхилено";
			announce("Рекомендацію Watson відхилено. Власник може змінити напрям або продовжити без неї; стан справи не змінено.");
		});
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
