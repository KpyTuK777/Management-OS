const InvestigationPrototype = (() => {
	let elements;
	let guidedPhase = "orientation";
	let contributionRound = "context";
	let awaitingClarification = false;
	let lastCollectionTrigger = null;
	const collectionItems = {
		symptoms: [{ title: "Прибуток впав протягом двох місяців", meta: "Повідомив власник · без інтерпретації" }],
		conversations: [{ title: "Перше повідомлення власника", meta: "Розмова · збережено у справі" }],
		observations: [],
		documents: [],
		data: [],
		hypotheses: [],
		contradictions: []
	};
	const collectionLabels = {
		symptoms: ["📌", "Симптоми"],
		conversations: ["🎙", "Розмови"],
		observations: ["👀", "Спостереження"],
		documents: ["📄", "Документи"],
		data: ["📊", "Дані"],
		hypotheses: ["🧠", "Гіпотези"],
		contradictions: ["⚠", "Суперечності"]
	};
	const guidedStates = {
		orientation: {
			condition: "Почнімо з вашого досвіду",
			title: "Коли ви вперше помітили падіння і що вже про нього знаєте?",
			reason: "Ви повідомили про різке падіння прибутку за останні два місяці. Поки це не перевірено за джерелами.",
			need: "Це допоможе відокремити те, що вже відомо, від того, що потрібно перевірити.",
			action: "Перейти до відповіді",
			captureFirst: true
		},
		orientationGap: {
			condition: "Одне уточнення",
			title: "Прибуток знизився через менший дохід, меншу маржу чи обидва показники?",
			reason: "Я зрозумів, коли почалося падіння і кого воно може стосуватися. Залишилося уточнити, який саме показник змінився.",
			need: "Відповідь підкаже, яке порівняння перевірити першим.",
			action: "Перейти до відповіді",
			captureFirst: true
		},
		evidence: {
			condition: "Перевірмо перше джерело",
			title: "Порівняти дохід і маржу за сегментами за останні два місяці?",
			reason: "Це покаже, чи падіння загальне, чи зосереджене в окремій частині бізнесу.",
			need: "Доступ до внутрішнього звіту потребує вашого дозволу.",
			action: "Дозволити демонстраційне порівняння"
		},
		hypotheses: {
			condition: "З’явилася розбіжність",
			title: "Чи могли затримки передачі B2B-лідів вплинути на падіння маржі?",
			reason: "Звіт показує, що дохід майже не змінився, але маржа B2B знизилася після зростання часу передачі лідів.",
			need: "Це лише можливе пояснення. Його потрібно перевірити проти інших причин.",
			action: "Порівняти пояснення"
		},
		decision: {
			condition: "Потрібне ваше рішення",
			title: "Чи достатньо підстав для обмеженого пілоту?",
			reason: "Одне пояснення підтримується сильніше, але вплив ціни ще не відокремлено.",
			need: "Порівняйте відоме, невідоме та захисні умови.",
			action: "Переглянути рішення"
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
		elements.guidedAction.textContent = state.action;
		elements.redirectGuidance.classList.toggle("hidden", Boolean(state.captureFirst));
		elements.rejectGuidance.classList.toggle("hidden", Boolean(state.captureFirst));
		window.sessionStorage.setItem("managementOsWorkbenchWatson", phase);
	}

	function advanceGuidedAction() {
		if (guidedStates[guidedPhase].captureFirst) {
			elements.matterCaptureInput.focus();
			return elements.matterCaptureInput.scrollIntoView({ behavior: "smooth", block: "center" });
		}
		if (guidedPhase === "evidence") return collectEvidence();
		if (guidedPhase === "hypotheses") return validateCause();
		if (guidedPhase === "decision") return approveDecision();
		if (guidedPhase === "execution") return approvePlan();
		if (guidedPhase === "outcome") return recordOutcome();
		if (guidedPhase === "learning") return captureKnowledge();
	}

	function showView(viewName) {
		window.sessionStorage.setItem("managementOsWorkbenchView", viewName);
		elements.stageButtons.forEach(button => {
			const isActive = button.dataset.view === viewName;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-pressed", String(isActive));
		});

		elements.caseViews.forEach(view => {
			view.classList.toggle("is-active", view.dataset.caseView === viewName);
		});
	}

	function updateCollection(name) {
		const button = elements.collectionButtons.find(item => item.dataset.collection === name);
		if (!button) return;
		const count = collectionItems[name].length;
		button.querySelector("[data-collection-count]").textContent = String(count);
		button.classList.toggle("hidden", count === 0);
		elements.workingCollections.classList.toggle("hidden", !elements.collectionButtons.some(item => !item.classList.contains("hidden")));
	}

	function openCollection(name, trigger) {
		const [icon, label] = collectionLabels[name];
		lastCollectionTrigger = trigger;
		elements.collectionInspectionIcon.textContent = icon;
		elements.collectionInspectionTitle.textContent = `${label} (${collectionItems[name].length})`;
		elements.collectionInspectionItems.replaceChildren(...collectionItems[name].map(item => {
			const article = document.createElement("article");
			const title = document.createElement("strong");
			const meta = document.createElement("small");
			title.textContent = item.title;
			meta.textContent = item.meta;
			article.append(title, meta);
			return article;
		}));
		elements.collectionInspection.classList.remove("hidden");
		elements.workbench.classList.add("is-inspecting");
		elements.collectionInspection.focus({ preventScroll: true });
		window.sessionStorage.setItem("managementOsWorkbenchCollection", name);
		announce(`Відкрито колекцію «${label}». Поточна ситуація залишається на місці.`);
	}

	function closeCollection() {
		elements.collectionInspection.classList.add("hidden");
		elements.workbench.classList.remove("is-inspecting");
		window.sessionStorage.removeItem("managementOsWorkbenchCollection");
		if (lastCollectionTrigger) lastCollectionTrigger.focus({ preventScroll: true });
		announce("Колекцію закрито. Просторовий контекст відновлено.");
	}

	function expandWatson() {
		elements.watsonToggle.setAttribute("aria-expanded", "true");
		elements.watsonExpanded.classList.remove("hidden");
		elements.watsonSurface.classList.remove("is-compact");
	}

	function openInvestigation(event) {
		event.preventDefault();
		const symptom = elements.input.value.trim();
		if (!symptom) return;

		elements.reportedSymptom.textContent = `“${symptom}”`;
		applyContext(elements.context.value);
		elements.home.classList.add("hidden");
		elements.workspace.classList.remove("hidden");
		updateCollection("symptoms");
		updateCollection("conversations");
		showView("understanding");
		elements.workspace.focus({ preventScroll: true });
		window.scrollTo({ top: 0, behavior: "instant" });
		window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#investigations`);
		document.querySelectorAll(".sidebar nav a").forEach(link => {
			const active = link.getAttribute("href") === "index.html#investigations";
			link.classList.toggle("active", active);
			if (active) link.setAttribute("aria-current", "page");
			else link.removeAttribute("aria-current");
		});
		announce("Створено тимчасову операційну справу MAT-0247 і перше розслідування. Повідомлений симптом збережено лише в пам’яті сторінки.");
	}

	function beginEvidenceCollection() {
		elements.sourcePermissionSafeguard.classList.remove("hidden");
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
		showView("understanding");
		elements.evidenceSummaryCard.classList.remove("hidden");
		elements.hypothesisSection.classList.remove("hidden");
		elements.hypothesisSummaryCard.classList.remove("hidden");
		elements.boardUnderstanding.textContent = "Маржа B2B знизилася, тоді як загальний дохід майже не змінився";
		elements.boardRecentChange.textContent = "Фінансовий звіт · B2B-сегмент · останні два місяці";
		elements.boardNextJudgment.textContent = "Затримки передачі B2B-лідів могли вплинути на маржу";
		elements.sourcePermissionSafeguard.classList.add("hidden");
		elements.workingCollections.classList.remove("hidden");
		elements.dataCollection.classList.remove("hidden");
		elements.hypothesisCollection.classList.remove("hidden");
		elements.contradictionCollection.classList.remove("hidden");
		collectionItems.data.push({ title: "Фінансовий зріз за сегментами", meta: "Джерело · отримано з дозволу власника" });
		collectionItems.hypotheses.push({ title: "Затримка передачі лідів могла вплинути на маржу", meta: "Пропозиція Watson · не підтверджено" });
		collectionItems.contradictions.push({ title: "Дохід стабільний, але маржа B2B знизилась", meta: "Можлива суперечність · потребує перевірки" });
		updateCollection("data");
		updateCollection("hypotheses");
		updateCollection("contradictions");
		elements.cognitiveMap.classList.remove("hidden");
		elements.hypothesisList.classList.remove("hidden");
		elements.validateCause.classList.remove("hidden");
		setGuidedPhase("hypotheses");
		announce("Докази зібрано. Показано конкуруючі гіпотези та обмеження.");
	}

	function validateCause() {
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
		setGuidedPhase("decision");
		announce("AI підготував огляд готовності. Рішення залишається за власником.");
	}

	function approveDecision() {
		elements.approveDecision.disabled = true;
		elements.approveDecision.textContent = "Рішення підтверджено · невизначеність прийнято";
		elements.executionPlan.classList.remove("hidden");
		elements.transitionEmphasis.classList.remove("hidden");
		elements.workbench.classList.add("is-transition-focused");
		elements.situationBoardTitle.textContent = "Обмежений пілот передачі B2B-лідів";
		elements.boardUnderstanding.textContent = "Рішення прийнято з видимою невизначеністю. Поточна робота — узгодити адаптації, виконання та перевірку результату.";
		setGuidedPhase("execution");
		elements.transitionEmphasis.scrollIntoView({ behavior: "smooth", block: "nearest" });
	}

	function approvePlan() {
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
		setGuidedPhase("learning");
	}

	function captureKnowledge() {
		elements.knowledgeCaptured.classList.remove("hidden");
		elements.captureKnowledge.disabled = true;
		elements.captureKnowledge.textContent = "Кандидат підготовлено";
		announce("Підготовлено кандидат на окремий перегляд знання. Він не є схваленим знанням і не змінює стан операційної справи.");
	}

	function semanticItem(category, wording, importance = "Звичайна") {
		const row = document.createElement("article");
		const selected = document.createElement("input");
		const icon = document.createElement("span");
		const select = document.createElement("select");
		const text = document.createElement("span");
		const significance = document.createElement("button");
		selected.type = "checkbox";
		selected.setAttribute("aria-label", `Вибрати: ${wording}`);
		icon.setAttribute("aria-hidden", "true");
		icon.textContent = { "Розмова": "🎙", "Симптом": "📌", "Час": "◷", "Джерело": "↗", "Спостереження": "👀" }[category] || "•";
		["Розмова", "Симптом", "Спостереження", "Час", "Джерело", "Інше"].forEach(optionLabel => {
			const option = document.createElement("option");
			option.textContent = optionLabel;
			option.selected = optionLabel === category;
			select.appendChild(option);
		});
		select.setAttribute("aria-label", "Категорія");
		text.contentEditable = "true";
		text.setAttribute("role", "textbox");
		text.setAttribute("aria-label", "Формулювання");
		text.textContent = wording;
		significance.type = "button";
		significance.className = "semantic-significance";
		significance.textContent = importance;
		significance.addEventListener("click", () => {
			significance.textContent = significance.textContent === "Важлива" ? "Звичайна" : "Важлива";
		});
		row.append(selected, icon, select, text, significance);
		return row;
	}

	function showSemanticReview(original) {
		elements.semanticItems.replaceChildren(
			semanticItem("Розмова", "Повідомлення власника"),
			semanticItem("Симптом", original, "Важлива"),
			semanticItem("Час", /два|двох|2/i.test(original) ? "Останні два місяці" : "Час ще не уточнено"),
			semanticItem("Джерело", "Власник")
		);
		elements.matterCaptureReview.classList.remove("hidden");
		elements.semanticReviewBody.classList.add("hidden");
		elements.semanticReviewToggle.setAttribute("aria-expanded", "false");
	}

	function selectedSemanticItems() {
		return [...elements.semanticItems.querySelectorAll("article")].filter(item => item.querySelector("input").checked);
	}

	function prepareMatterContribution(event) {
		event.preventDefault();
		const original = elements.matterCaptureInput.value.trim();
		const files = [...elements.matterCaptureFiles.files];
		if (!original && files.length === 0) return;

		if (awaitingClarification && (files.length > 0 || /(документ|звіт|файл|report|document)/i.test(original))) {
			collectionItems.documents.push({
				title: files[0]?.name || original || "Доданий документ",
				meta: "Додав власник · класифікація запропонована"
			});
			updateCollection("documents");
			elements.captureOriginal.textContent = `“${original || files[0].name}”`;
			elements.matterCaptureInput.value = "";
			elements.matterCaptureFiles.value = "";
			elements.guidedInvestigation.classList.remove("hidden");
			elements.watsonContributionReview.classList.add("hidden");
			elements.guidedCondition.textContent = "Документ додано";
			elements.guidedReason.textContent = "Я зберіг його з розслідуванням. Моє питання залишається відкритим.";
			elements.guidedTitle.textContent = "Що насправді змінилося?";
			elements.watsonStatus.textContent = "Документ збережено";
			announce("Документ додано незалежно від запитання Watson. Inbox залишається доступним.");
			return;
		}

		if (contributionRound === "context" && collectionItems.observations.length === 0) {
			collectionItems.observations.push(
				{ title: "Падіння триває близько двох місяців", meta: "Спостереження власника · не перевірено" },
				{ title: original, meta: "Нове спостереження · класифікація запропонована" }
			);
			updateCollection("observations");
		}

		elements.captureOriginal.textContent = `“${original}”`;
		showSemanticReview(original);
		elements.guidedInvestigation.classList.add("hidden");
		elements.watsonContributionReview.classList.remove("hidden");
		elements.reasoningMilestone.classList.add("hidden");
		elements.approveMatterContribution.disabled = false;
		elements.approveMatterContribution.textContent = "Так";
		elements.watsonUnderstandingSummary.textContent = contributionRound === "context"
			? "Я зрозумів, що падіння почалося приблизно два місяці тому і, можливо, стосується B2B-напряму. Поки не зрозуміло, змінився дохід, маржа чи обидва показники."
			: "Я зрозумів, що основна зміна стосується маржі, а не загального доходу. Це потрібно перевірити за сегментованим звітом.";
		elements.watsonStatus.textContent = "Є думка";
		announce("Матеріал збережено. Watson має необов’язкову думку; можна продовжувати роботу.");
	}

	function approveMatterContribution() {
		const original = elements.matterCaptureInput.value.trim();
		if (!original) return;

		elements.milestoneContribution.textContent = original;
		if (contributionRound === "context") {
			elements.perceptualWorkspace.classList.add("has-board");
			elements.boardUnderstanding.textContent = "Падіння повідомлено за останні два місяці; причина ще не встановлена";
			elements.boardReasoningBasis.textContent = "Падіння, ймовірно, помітне в B2B-напрямі";
			elements.knownContextCard.classList.remove("hidden");
			elements.missingOrientationCard.classList.remove("hidden");
			elements.workingCollections.classList.remove("hidden");
			contributionRound = "orientation";
			elements.matterCapturePrompt.textContent = "Уточніть показник або додайте іншу важливу деталь.";
			setGuidedPhase("orientationGap");
		} else {
			elements.boardUncertainty.textContent = "Маржа могла знизитися без такого самого падіння доходу";
			beginEvidenceCollection();
		}
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
		elements.approveMatterContribution.disabled = true;
		elements.matterCaptureInput.value = "";
		elements.guidedInvestigation.scrollIntoView({ behavior: "smooth", block: "nearest" });
		announce("Ваше формулювання збережено. Watson оновив спільне розуміння та показав один наступний крок.");
	}

	function discardMatterContribution() {
		elements.matterCaptureReview.classList.add("hidden");
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
		elements.reasoningMilestone.classList.add("hidden");
		elements.matterCaptureInput.focus();
		announce("Повернуто вашу відповідь для виправлення. Watson нічого не прийняв як факт.");
	}

	function rejectMatterContribution() {
		awaitingClarification = true;
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
		elements.guidedCondition.textContent = "Я неправильно зрозумів";
		elements.guidedReason.textContent = "Ні, це не те, що ви мали на увазі.";
		elements.guidedTitle.textContent = "Що насправді змінилося?";
		elements.guidedNeed.textContent = "Відповідайте, коли зручно, або додайте щось інше.";
		elements.guidedAction.textContent = "Перейти до Inbox";
		elements.watsonStatus.textContent = "Потрібне уточнення";
		announce("Watson не прийняв свою інтерпретацію. Можна відповісти або додати будь-що інше.");
	}

	function deferMatterContribution() {
		elements.watsonContributionReview.classList.add("hidden");
		elements.guidedInvestigation.classList.remove("hidden");
		elements.watsonStatus.textContent = "Відкладено";
		announce("Підтвердження відкладено. Inbox залишається доступним.");
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
			workbench: document.getElementById("operationalWorkbench"),
			situationBoardTitle: document.getElementById("situationBoardTitle"),
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
			hypothesisSection: document.getElementById("hypothesisSection"),
			knownContextCard: document.getElementById("knownContextCard"),
			missingOrientationCard: document.getElementById("missingOrientationCard"),
			evidenceSummaryCard: document.getElementById("evidenceSummaryCard"),
			hypothesisSummaryCard: document.getElementById("hypothesisSummaryCard"),
			sourcePermissionSafeguard: document.getElementById("sourcePermissionSafeguard"),
			workingCollections: document.getElementById("workingCollections"),
			collectionInspection: document.getElementById("collectionInspection"),
			collectionInspectionIcon: document.getElementById("collectionInspectionIcon"),
			collectionInspectionTitle: document.getElementById("collectionInspectionTitle"),
			collectionInspectionItems: document.getElementById("collectionInspectionItems"),
			closeCollectionInspection: document.getElementById("closeCollectionInspection"),
			dataCollection: document.getElementById("dataCollection"),
			hypothesisCollection: document.getElementById("hypothesisCollection"),
			contradictionCollection: document.getElementById("contradictionCollection"),
			cognitiveMap: document.getElementById("cognitiveMap"),
			collectionButtons: [...document.querySelectorAll("[data-collection]")],
			validateCause: document.getElementById("validateCauseButton"),
			readinessSummary: document.getElementById("readinessSummary"),
			decisionReadinessTitle: document.getElementById("decisionReadinessTitle"),
			readinessChip: document.getElementById("readinessChip"),
			approveDecision: document.getElementById("approveDecisionButton"),
			executionPlan: document.getElementById("executionPlan"),
			approvePlan: document.getElementById("approvePlanButton"),
			transitionEmphasis: document.getElementById("transitionEmphasis"),
			returnToInvestigation: document.getElementById("returnToInvestigation"),
			followUpTitle: document.getElementById("followUpTitle"),
			followUpDescription: document.getElementById("followUpDescription"),
			recordOutcome: document.getElementById("recordOutcomeButton"),
			knowledgeCapture: document.getElementById("knowledgeCapture"),
			captureKnowledge: document.getElementById("captureKnowledgeButton"),
			knowledgeCaptured: document.getElementById("knowledgeCaptured"),
			matterCaptureForm: document.getElementById("matterCaptureForm"),
			matterCaptureInput: document.getElementById("matterCaptureInput"),
			matterCaptureFiles: document.getElementById("matterCaptureFiles"),
			matterCapturePrompt: document.getElementById("matterCapturePrompt"),
			matterCaptureReview: document.getElementById("matterCaptureReview"),
			semanticReviewToggle: document.getElementById("semanticReviewToggle"),
			semanticReviewBody: document.getElementById("semanticReviewBody"),
			semanticItems: document.getElementById("semanticItems"),
			closeSemanticReview: document.getElementById("closeSemanticReview"),
			splitSemanticItem: document.getElementById("splitSemanticItem"),
			mergeSemanticItems: document.getElementById("mergeSemanticItems"),
			deleteSemanticItems: document.getElementById("deleteSemanticItems"),
			attachSemanticEvidence: document.getElementById("attachSemanticEvidence"),
			situationBoard: document.getElementById("situationBoard"),
			perceptualWorkspace: document.querySelector(".perceptual-workspace"),
			guidedInvestigation: document.getElementById("guidedInvestigation"),
			watsonContributionReview: document.getElementById("watsonContributionReview"),
			watsonUnderstandingSummary: document.getElementById("watsonUnderstandingSummary"),
			captureOriginal: document.getElementById("captureOriginal"),
			approveMatterContribution: document.getElementById("approveMatterContribution"),
			discardMatterContribution: document.getElementById("discardMatterContribution"),
			addMatterDetail: document.getElementById("addMatterDetail"),
			rejectMatterContribution: document.getElementById("rejectMatterContribution"),
			laterMatterContribution: document.getElementById("laterMatterContribution"),
			reasoningMilestone: document.getElementById("reasoningMilestone"),
			milestoneContribution: document.getElementById("milestoneContribution"),
			boardUnderstanding: document.getElementById("boardUnderstanding"),
			boardReasoningBasis: document.getElementById("boardReasoningBasis"),
			boardRecentChange: document.getElementById("boardRecentChange"),
			boardNextJudgment: document.getElementById("boardNextJudgment"),
			openSimulation: document.getElementById("openSimulationButton"),
			closeSimulation: document.getElementById("closeSimulationButton"),
			scenario: document.getElementById("scenarioBranch"),
			boardInspection: document.getElementById("boardInspection"),
			guidedCondition: document.getElementById("guidedCondition"),
			guidedTitle: document.getElementById("guidedInvestigationTitle"),
			guidedReason: document.getElementById("guidedInvestigationReason"),
			guidedNeed: document.getElementById("guidedInvestigationNeed"),
			guidedAction: document.getElementById("guidedActionButton"),
			redirectGuidance: document.getElementById("redirectGuidanceButton"),
			deferGuidance: document.getElementById("deferGuidanceButton"),
			rejectGuidance: document.getElementById("rejectGuidanceButton"),
			watsonSurface: document.getElementById("watsonSurface"),
			watsonToggle: document.getElementById("watsonToggle"),
			watsonExpanded: document.getElementById("watsonExpanded"),
			watsonStatus: document.getElementById("watsonStatus"),
			inboxWatsonTrigger: document.getElementById("inboxWatsonTrigger"),
			watsonRequests: [...document.querySelectorAll("[data-watson-request]")],
			structuredEntry: document.getElementById("structuredEntryButton"),
			voiceNote: document.getElementById("voiceNoteButton"),
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
		elements.collectionButtons.forEach(button => button.addEventListener("click", () => openCollection(button.dataset.collection, button)));
		elements.closeCollectionInspection.addEventListener("click", closeCollection);
		elements.collectionInspection.addEventListener("keydown", event => {
			if (event.key === "Escape") closeCollection();
		});
		elements.watsonToggle.addEventListener("click", () => {
			const expanded = elements.watsonToggle.getAttribute("aria-expanded") === "true";
			elements.watsonToggle.setAttribute("aria-expanded", String(!expanded));
			elements.watsonExpanded.classList.toggle("hidden", expanded);
			elements.watsonSurface.classList.toggle("is-compact", expanded);
		});
		elements.inboxWatsonTrigger.addEventListener("click", () => {
			expandWatson();
			elements.guidedInvestigation.classList.remove("hidden");
			elements.watsonContributionReview.classList.add("hidden");
			elements.watsonStatus.textContent = "Слухаю";
			elements.guidedCondition.textContent = "Watson";
			elements.guidedReason.textContent = "Я поруч, коли потрібен другий погляд.";
			elements.guidedTitle.textContent = "Що ви хочете перевірити?";
			elements.guidedNeed.textContent = "Можна попросити переглянути матеріал, знайти суперечність або кинути виклик поясненню.";
		});
		elements.watsonRequests.forEach(button => button.addEventListener("click", () => {
			expandWatson();
			elements.guidedInvestigation.classList.remove("hidden");
			elements.watsonContributionReview.classList.add("hidden");
			const contradiction = button.dataset.watsonRequest === "contradiction";
			elements.watsonStatus.textContent = contradiction ? "Перевіряю зв’язки" : "Переглядаю";
			elements.guidedCondition.textContent = contradiction ? "Можлива суперечність" : "Другий погляд";
			elements.guidedReason.textContent = contradiction
				? "Загальний дохід майже стабільний, але повідомлене падіння прибутку триває."
				: "Я перегляну лише те, що вже є на робочому столі.";
			elements.guidedTitle.textContent = contradiction
				? "Це може вплинути на поточне пояснення."
				: "Що саме варто поставити під сумнів?";
			elements.guidedNeed.textContent = "Ви вирішуєте, чи ця думка має значення.";
		}));
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
		elements.structuredEntry.addEventListener("click", () => {
			elements.matterCaptureInput.value = "Посилання: https://\nЩо в ньому важливого: ";
			elements.matterCaptureInput.focus();
			announce("Додайте посилання й коротко напишіть, чому воно важливе.");
		});
		elements.voiceNote.addEventListener("click", () => {
			elements.matterCaptureInput.value = "Голосова нотатка: ";
			elements.matterCaptureInput.focus();
			announce("Демонстраційний прототип не записує звук. Диктування можна подати тут як звичайну нотатку.");
		});
		elements.collectEvidence.addEventListener("click", collectEvidence);
		elements.validateCause.addEventListener("click", validateCause);
		elements.approveDecision.addEventListener("click", approveDecision);
		elements.approvePlan.addEventListener("click", approvePlan);
		elements.returnToInvestigation.addEventListener("click", () => {
			elements.boardInspection.open = true;
			showView("decision");
			elements.boardInspection.scrollIntoView({ behavior: "smooth", block: "start" });
			announce("Підстави рішення залишаються доступними; акцент переходу не скасовано.");
		});
		elements.recordOutcome.addEventListener("click", recordOutcome);
		elements.captureKnowledge.addEventListener("click", captureKnowledge);
		elements.matterCaptureForm.addEventListener("submit", prepareMatterContribution);
		elements.semanticReviewToggle.addEventListener("click", () => {
			const willOpen = elements.semanticReviewBody.classList.contains("hidden");
			elements.semanticReviewBody.classList.toggle("hidden", !willOpen);
			elements.semanticReviewToggle.setAttribute("aria-expanded", String(willOpen));
			elements.workbench.classList.toggle("has-semantic-review", willOpen);
			if (willOpen && window.matchMedia("(min-width: 1001px)").matches) {
				elements.workbench.style.gridTemplateColumns = "minmax(0, 1fr) 420px";
			} else {
				elements.workbench.style.removeProperty("grid-template-columns");
			}
		});
		elements.closeSemanticReview.addEventListener("click", () => {
			elements.semanticReviewBody.classList.add("hidden");
			elements.semanticReviewToggle.setAttribute("aria-expanded", "false");
			elements.workbench.classList.remove("has-semantic-review");
			elements.workbench.style.removeProperty("grid-template-columns");
			elements.matterCaptureInput.focus();
		});
		elements.splitSemanticItem.addEventListener("click", () => {
			const item = selectedSemanticItems()[0] || elements.semanticItems.querySelector("article");
			if (!item) return;
			const wording = item.querySelector('[role="textbox"]').textContent;
			const midpoint = Math.max(1, Math.floor(wording.length / 2));
			item.after(semanticItem("Спостереження", wording.slice(midpoint).trim() || "Нове значення"));
			item.querySelector('[role="textbox"]').textContent = wording.slice(0, midpoint).trim();
			announce("Значення розділено. Обидва формулювання можна змінити.");
		});
		elements.mergeSemanticItems.addEventListener("click", () => {
			const selected = selectedSemanticItems();
			if (selected.length < 2) return announce("Виберіть щонайменше два значення для об’єднання.");
			selected[0].querySelector('[role="textbox"]').textContent = selected.map(item => item.querySelector('[role="textbox"]').textContent).join(" · ");
			selected.slice(1).forEach(item => item.remove());
			announce("Вибрані значення об’єднано.");
		});
		elements.deleteSemanticItems.addEventListener("click", () => {
			const selected = selectedSemanticItems();
			if (!selected.length) return announce("Виберіть значення, яке слід видалити.");
			selected.forEach(item => item.remove());
			announce("Вибрані значення видалено.");
		});
		elements.attachSemanticEvidence.addEventListener("click", () => {
			elements.matterCaptureFiles.click();
			announce("Виберіть файл, який підтримує вибране значення.");
		});
		elements.approveMatterContribution.addEventListener("click", approveMatterContribution);
		elements.rejectMatterContribution.addEventListener("click", rejectMatterContribution);
		elements.discardMatterContribution.addEventListener("click", discardMatterContribution);
		elements.laterMatterContribution.addEventListener("click", deferMatterContribution);
		elements.addMatterDetail.addEventListener("click", () => {
			elements.watsonContributionReview.classList.add("hidden");
			elements.guidedInvestigation.classList.remove("hidden");
			elements.matterCaptureInput.focus();
			announce("Додайте будь-яку важливу деталь. Попередній текст залишається у вашій відповіді.");
		});

		if (new URLSearchParams(window.location.search).get("demo") === "investigation") {
			elements.input.value = "Прибуток різко впав протягом останніх двох місяців.";
			elements.form.requestSubmit();
			const captureState = new URLSearchParams(window.location.search).get("capture");
			if (["review", "approved"].includes(captureState)) {
				elements.matterCaptureInput.value = "Падіння помітили близько двох місяців тому. Команда B2B повідомляє про довшу передачу лідів. Є щомісячний фінансовий звіт, але ми ще не порівнювали дохід і маржу.";
				elements.matterCaptureForm.requestSubmit();
			}
			if (captureState === "approved") {
				elements.approveMatterContribution.click();
			}
			const journey = new URLSearchParams(window.location.search).get("journey");
			if (journey === "workbench-reset") {
				elements.matterCaptureInput.value = "Команда B2B помітила довшу передачу лідів.";
				elements.matterCaptureForm.requestSubmit();
				elements.rejectMatterContribution.click();
				elements.matterCaptureInput.value = "Додаю окремий місячний звіт.";
				elements.matterCaptureForm.requestSubmit();
			}
			if (journey === "evidence") {
				elements.boardUncertainty.textContent = "Маржа могла знизитися без такого самого падіння доходу";
				beginEvidenceCollection();
			}
			if (["first-hypothesis", "transition", "complete"].includes(journey)) {
				elements.matterCaptureInput.value = "Схоже, що знизилася насамперед маржа B2B, тоді як загальний дохід змінився незначно.";
				elements.matterCaptureForm.requestSubmit();
				elements.approveMatterContribution.click();
				collectEvidence();
			}
			if (["transition", "complete"].includes(journey)) {
				validateCause();
				approveDecision();
			}
			if (journey === "complete") {
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
