const SOP_EXECUTION_SOURCE_KEY = "sopExecutionSourceId";
const REVIEW_EXECUTION_CONTEXT_KEY = "reviewExecutionId";

function startExecutionReview(executionId) {

	sessionStorage.setItem(REVIEW_EXECUTION_CONTEXT_KEY, String(executionId));
	window.location.href = "review.html";

}

function startSopExecution(sopId) {

	const activeExecution = loadSopExecutions().find(
		execution => execution.sopId === sopId && execution.finishedAt === null
	);

	if (activeExecution) {

		window.location.href = `sop-executions.html#execution-${activeExecution.id}`;
		return;

	}

	sessionStorage.setItem(SOP_EXECUTION_SOURCE_KEY, String(sopId));
	window.location.href = "sop-executions.html";

}

function initSopExecutionPage() {

	const activeExecutionContainer = document.getElementById("activeExecution");
	const executionSearch = document.getElementById("executionSearch");
	const executionSearchInput = document.getElementById("executionSearchInput");
	const executionHistoryList = document.getElementById("executionHistoryList");
	const executionEmptyState = document.getElementById("executionEmptyState");
	let executions = loadSopExecutions();
	let searchQuery = "";
	let justCompletedExecutionId = null;

	function createExecutionItems(items) {

		return items.map((text, index) => ({
			order: index + 1,
			text,
			status: "pending",
			resolvedAt: null,
			note: ""
		}));

	}

	function createExecutionFromContext() {

		const sourceId = sessionStorage.getItem(SOP_EXECUTION_SOURCE_KEY);
		sessionStorage.removeItem(SOP_EXECUTION_SOURCE_KEY);

		if (sourceId === null) return;

		const sop = loadSops().find(item => String(item.id) === sourceId);

		if (!sop) return;

		const activeExecution = executions.find(
			execution => execution.sopId === sop.id && execution.finishedAt === null
		);

		if (activeExecution) {

			window.location.hash = `execution-${activeExecution.id}`;
			return;

		}

		const execution = {
			id: Date.now(),
			sopId: sop.id,
			sopTitle: sop.title,
			startedAt: new Date().toISOString(),
			finishedAt: null,
			steps: createExecutionItems(sop.steps || []),
			checklist: createExecutionItems(sop.checklist || []),
			notes: ""
		};

		executions.push(execution);
		saveSopExecutions(executions);
		window.location.hash = `execution-${execution.id}`;

	}

	function getActiveExecution() {

		const executionFragment = "#execution-";

		if (window.location.hash.startsWith(executionFragment)) {

			const executionId = window.location.hash.slice(executionFragment.length);
			const requested = executions.find(
				execution => String(execution.id) === executionId
			);

			if (requested && requested.finishedAt === null) return requested;

		}

		return executions.find(execution => execution.finishedAt === null) || null;

	}

	function getResolvedCount(execution) {

		return [...execution.steps, ...execution.checklist].filter(
			item => item.status !== "pending"
		).length;

	}

	function formatDateTime(value) {

		return new Date(value).toLocaleString("uk-UA", {
			dateStyle: "medium",
			timeStyle: "short"
		});

	}

	function formatDuration(execution) {

		const end = execution.finishedAt
			? new Date(execution.finishedAt).getTime()
			: Date.now();
		const minutes = Math.max(
			1,
			Math.round((end - new Date(execution.startedAt).getTime()) / 60000)
		);
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;

		if (hours === 0) return `${minutes} хв`;
		if (remainingMinutes === 0) return `${hours} год`;

		return `${hours} год ${remainingMinutes} хв`;

	}

	function saveAndRender() {

		saveSopExecutions(executions);
		renderActiveExecution();
		renderHistory();

	}

	function createStatusButton(item, status, label, execution) {

		const button = createTextElement("button", label, "btn-secondary");

		button.type = "button";
		button.classList.toggle("execution-item__status--selected", item.status === status);
		button.setAttribute("aria-pressed", String(item.status === status));
		button.addEventListener("click", () => {

			if (item.status === status) {

				item.status = "pending";
				item.resolvedAt = null;

			} else {

				item.status = status;
				item.resolvedAt = new Date().toISOString();

			}

			saveAndRender();
			presentExecution(execution.id);

		});

		return button;

	}

	function createActiveItem(item, kind, execution, isActive) {

		const row = createElement(
			"li",
			`execution-item execution-item--${item.status}${isActive ? " execution-item--active" : ""}`
		);
		const content = createElement("div", "execution-item__content");
		const label = createTextElement(
			"strong",
			`${kind === "step" ? `Крок ${item.order}` : `Перевірка ${item.order}`}. ${item.text}`
		);
		const note = createElement("textarea", "execution-item__note");
		const actions = createElement("div", "execution-item__actions");

		row.tabIndex = -1;

		if (isActive) {

			content.appendChild(
				createTextElement("span", "Поточний пункт", "execution-item__active-label")
			);

		}

		note.rows = 2;
		note.value = item.note || "";
		note.placeholder = "Нотатка до цього пункту (необов’язково)";
		note.setAttribute("aria-label", `Нотатка: ${item.text}`);
		note.addEventListener("change", () => {

			item.note = note.value.trim();
			saveSopExecutions(executions);

		});

		content.appendChild(label);
		content.appendChild(note);
		actions.appendChild(createStatusButton(item, "completed", "Виконано", execution));
		actions.appendChild(createStatusButton(item, "skipped", "Пропустити", execution));
		row.appendChild(content);
		row.appendChild(actions);

		return row;

	}

	function renderActiveExecution() {

		activeExecutionContainer.replaceChildren();
		const execution = getActiveExecution();

		if (!execution) {

			activeExecutionContainer.classList.add("hidden");
			activeExecutionContainer.removeAttribute("id");
			return;

		}

		const total = execution.steps.length + execution.checklist.length;
		const resolved = getResolvedCount(execution);
		const percentage = total === 0 ? 100 : Math.round((resolved / total) * 100);
		const header = createElement("div", "execution-active__header");
		const heading = createElement("div");
		const title = createTextElement("h2", execution.sopTitle);
		const sourceSop = loadSops().find(sop => sop.id === execution.sopId);
		const source = sourceSop
			? createTextElement("a", "Відкрити SOP →", "relationship-link")
			: createTextElement("p", "Пов’язаний SOP недоступний", "relationship-missing");
		const progress = createElement("div", "execution-progress");
		const progressText = createTextElement(
			"strong",
			`${resolved} з ${total} · ${percentage}%`
		);
		const progressBar = createElement("div", "execution-progress__bar");
		const progressFill = createElement("div", "execution-progress__fill");
		const started = createTextElement(
			"p",
			`Розпочато: ${formatDateTime(execution.startedAt)} · ${formatDuration(execution)}`,
			"execution-active__meta"
		);
		const stepsTitle = createTextElement("h3", "Кроки");
		const steps = createElement("ol", "execution-items");
		const notesLabel = createTextElement("label", "Нотатки виконання", "form-group__label");
		const notes = createElement("textarea", "execution-active__notes");
		const finishButton = createTextElement("button", "Завершити виконання", "btn-primary");
		const pendingItems = [...execution.steps, ...execution.checklist].filter(
			item => item.status === "pending"
		);
		const activeItem = pendingItems[0] || null;

		activeExecutionContainer.id = `execution-${execution.id}`;
		activeExecutionContainer.tabIndex = -1;
		activeExecutionContainer.classList.remove("hidden");

		if (sourceSop) source.href = `sop.html#sop-${sourceSop.id}`;

		progressBar.setAttribute("role", "progressbar");
		progressBar.setAttribute("aria-valuemin", "0");
		progressBar.setAttribute("aria-valuemax", String(total));
		progressBar.setAttribute("aria-valuenow", String(resolved));
		progressFill.style.width = `${percentage}%`;
		progressBar.appendChild(progressFill);
		progress.appendChild(progressText);
		progress.appendChild(progressBar);

		execution.steps.forEach(item => {

			steps.appendChild(createActiveItem(item, "step", execution, item === activeItem));

		});

		notes.rows = 4;
		notes.value = execution.notes || "";
		notes.placeholder = "Що варто запам’ятати з цього виконання?";
		notes.addEventListener("change", () => {

			execution.notes = notes.value.trim();
			saveSopExecutions(executions);

		});

		finishButton.type = "button";
		finishButton.disabled = resolved !== total;
		finishButton.addEventListener("click", () => {

			if (getResolvedCount(execution) !== total) return;
			if (!confirm("Завершити це виконання? Після завершення його не можна буде змінити.")) return;

			execution.notes = notes.value.trim();
			execution.finishedAt = new Date().toISOString();
			justCompletedExecutionId = execution.id;
			saveSopExecutions(executions);
			window.location.hash = `execution-${execution.id}`;
			renderActiveExecution();
			renderHistory();
			presentHistoryTarget();

		});

		heading.appendChild(title);
		heading.appendChild(source);
		header.appendChild(heading);
		header.appendChild(progress);
		activeExecutionContainer.appendChild(header);
		activeExecutionContainer.appendChild(started);
		activeExecutionContainer.appendChild(stepsTitle);
		activeExecutionContainer.appendChild(steps);

		if (execution.checklist.length > 0) {

			const checklistTitle = createTextElement("h3", "Чекліст");
			const checklist = createElement("ul", "execution-items");

			execution.checklist.forEach(item => {

				checklist.appendChild(
					createActiveItem(item, "checklist", execution, item === activeItem)
				);

			});

			activeExecutionContainer.appendChild(checklistTitle);
			activeExecutionContainer.appendChild(checklist);

		}

		activeExecutionContainer.appendChild(notesLabel);
		activeExecutionContainer.appendChild(notes);
		activeExecutionContainer.appendChild(finishButton);

	}

	function createHistoryCard(execution) {

		const card = createElement("article", "execution-history-card");
		const title = createTextElement("h3", execution.sopTitle);
		const sourceSop = loadSops().find(sop => sop.id === execution.sopId);
		const source = sourceSop
			? createTextElement("a", "Відкрити SOP →", "relationship-link")
			: createTextElement("p", "Пов’язаний SOP недоступний", "relationship-missing");
		const completed = [...execution.steps, ...execution.checklist].filter(
			item => item.status === "completed"
		).length;
		const skipped = [...execution.steps, ...execution.checklist].filter(
			item => item.status === "skipped"
		).length;
		const summary = createTextElement(
			"p",
			`Виконано: ${completed} · Пропущено: ${skipped} · Тривалість: ${formatDuration(execution)}`,
			"execution-history-card__summary"
		);
		const dates = createTextElement(
			"small",
			`${formatDateTime(execution.startedAt)} — ${formatDateTime(execution.finishedAt)}`,
			"execution-history-card__date"
		);
		const details = createElement("details", "execution-history-card__details");
		const detailsSummary = createTextElement("summary", "Переглянути результат");
		const list = createElement("ol", "execution-history-card__items");

		card.id = `execution-${execution.id}`;
		card.dataset.sopId = String(execution.sopId);
		card.tabIndex = -1;
		if (sourceSop) source.href = `sop.html#sop-${sourceSop.id}`;

		[...execution.steps, ...execution.checklist].forEach(item => {

			const status = item.status === "completed" ? "Виконано" : "Пропущено";
			const text = item.note
				? `${status}: ${item.text} — ${item.note}`
				: `${status}: ${item.text}`;

			list.appendChild(createTextElement("li", text));

		});

		details.appendChild(detailsSummary);
		details.appendChild(list);

		if (execution.notes) {

			details.appendChild(
				createTextElement("p", `Нотатки: ${execution.notes}`, "execution-history-card__notes")
			);

		}

		card.appendChild(title);
		card.appendChild(source);
		card.appendChild(summary);
		card.appendChild(dates);
		card.appendChild(details);

		const review = loadExecutionReviews().find(
			item => item.executionId === execution.id
		);

		if (review) {

			const reviewLink = createTextElement(
				"a",
				"Переглянути огляд →",
				"relationship-link"
			);

			reviewLink.href = `review.html#review-${review.id}`;
			card.appendChild(reviewLink);

		} else {

			const reviewActions = createElement("div", "execution-review-actions");
			const reviewButton = createTextElement(
				"button",
				justCompletedExecutionId === execution.id
					? "Короткий огляд"
					: "Додати огляд",
				"btn-primary"
			);

			reviewButton.type = "button";
			reviewButton.addEventListener("click", () => {

				startExecutionReview(execution.id);

			});

			if (justCompletedExecutionId === execution.id) {

				const prompt = createTextElement(
					"p",
					"Зафіксувати результат зараз? Це займе менше хвилини.",
					"execution-review-prompt"
				);
				const laterButton = createTextElement(
					"button",
					"Зробити пізніше",
					"btn-secondary"
				);

				laterButton.type = "button";
				laterButton.addEventListener("click", () => {

					justCompletedExecutionId = null;
					renderHistory();

				});

				card.appendChild(prompt);
				reviewActions.appendChild(reviewButton);
				reviewActions.appendChild(laterButton);

			} else {

				reviewActions.appendChild(reviewButton);

			}

			card.appendChild(reviewActions);

		}

		return card;

	}

	function getHistorySopId() {

		const prefix = "#sop-history-";

		return window.location.hash.startsWith(prefix)
			? window.location.hash.slice(prefix.length)
			: null;

	}

	function renderHistory() {

		executionHistoryList.replaceChildren();
		const finished = executions.filter(execution => execution.finishedAt !== null);
		const historySopId = getHistorySopId();
		const scoped = historySopId === null
			? finished
			: finished.filter(execution => String(execution.sopId) === historySopId);
		const searchable = scoped.map(execution => ({
			...execution,
			stepsText: execution.steps.map(item => `${item.text} ${item.note}`).join(" "),
			checklistText: execution.checklist.map(item => `${item.text} ${item.note}`).join(" ")
		}));
		const filtered = filterCollection(
			searchable,
			["sopTitle", "notes", "stepsText", "checklistText"],
			searchQuery
		);

		executionSearch.classList.toggle("hidden", scoped.length === 0);
		executionEmptyState.classList.toggle("hidden", scoped.length > 0);

		if (scoped.length === 0) {

			const message = historySopId === null
				? "Виконань поки немає."
				: "Для цього SOP завершених виконань поки немає.";

			executionEmptyState.querySelector("h3").textContent = message;
			return;

		}

		if (filtered.length === 0) {

			executionHistoryList.appendChild(
				createTextElement("p", "Виконань не знайдено.", "execution-history__empty")
			);
			return;

		}

		filtered
			.sort((first, second) => new Date(second.finishedAt) - new Date(first.finishedAt))
			.forEach(execution => executionHistoryList.appendChild(createHistoryCard(execution)));

	}

	function presentExecution(executionId) {

		const target = document.getElementById(`execution-${executionId}`);

		if (!target) return false;

		target.classList.add("execution--highlighted");
		target.scrollIntoView({ behavior: "smooth", block: "center" });
		target.focus({ preventScroll: true });

		setTimeout(() => target.classList.remove("execution--highlighted"), 2500);

		return true;

	}

	function presentHistoryTarget() {

		const executionPrefix = "#execution-";

		if (window.location.hash.startsWith(executionPrefix)) {

			presentExecution(window.location.hash.slice(executionPrefix.length));

		}

	}

	executionSearchInput.addEventListener("input", () => {

		searchQuery = executionSearchInput.value.trim();
		renderHistory();

	});

	window.addEventListener("hashchange", () => {

		renderActiveExecution();
		renderHistory();
		presentHistoryTarget();

	});

	createExecutionFromContext();
	renderActiveExecution();
	renderHistory();
	presentHistoryTarget();

}

if (document.getElementById("executionPage")) initSopExecutionPage();
