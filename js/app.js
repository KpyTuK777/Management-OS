function getExecutionItems(execution) {

	return [
		...(Array.isArray(execution.steps) ? execution.steps : []),
		...(Array.isArray(execution.checklist) ? execution.checklist : [])
	];

}

function getExecutionProgress(execution) {

	const items = getExecutionItems(execution);
	const resolved = items.filter(item => item.status !== "pending").length;

	return {
		resolved,
		total: items.length,
		percentage: items.length === 0
			? 100
			: Math.round((resolved / items.length) * 100)
	};

}

function formatStartedAt(value) {

	const date = new Date(value);

	if (Number.isNaN(date.getTime())) return "Час початку не вказано";

	return `Розпочато ${date.toLocaleString("uk-UA", {
		dateStyle: "medium",
		timeStyle: "short"
	})}`;

}

function createActiveWorkCard(execution) {

	const card = createElement("article", "active-work-card");
	const title = createTextElement(
		"h3",
		execution.sopTitle || "Виконання SOP"
	);
	const progress = getExecutionProgress(execution);
	const progressText = createTextElement(
		"p",
		`${progress.resolved} із ${progress.total} пунктів · ${progress.percentage}%`,
		"active-work-card__progress"
	);
	const startedAt = createTextElement(
		"p",
		formatStartedAt(execution.startedAt),
		"active-work-card__meta"
	);
	const link = createTextElement(
		"a",
		`Продовжити «${execution.sopTitle || "виконання SOP"}»`,
		"active-work-card__link"
	);

	link.href = `sop-executions.html#execution-${encodeURIComponent(execution.id)}`;
	card.append(title, progressText, startedAt, link);

	return card;

}

function renderActiveWork() {

	const list = document.getElementById("activeWorkList");
	const empty = document.getElementById("activeWorkEmpty");

	if (!list || !empty) return;

	const activeExecutions = loadSopExecutions()
		.filter(execution => execution && execution.finishedAt === null)
		.sort((first, second) => {

			const firstStartedAt = new Date(first.startedAt).getTime() || 0;
			const secondStartedAt = new Date(second.startedAt).getTime() || 0;

			return secondStartedAt - firstStartedAt;

		})
		.slice(0, 3);

	list.replaceChildren();
	empty.classList.toggle("hidden", activeExecutions.length > 0);

	activeExecutions.forEach(execution => {

		list.appendChild(createActiveWorkCard(execution));

	});

}

window.addEventListener("storage", event => {

	if (event.key === "sopExecutions") {

		renderActiveWork();

	}

});

renderActiveWork();
