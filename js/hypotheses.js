const hypothesesCoverage = document.getElementById("hypothesesCoverage");
const hypothesesSearchInput = document.getElementById("hypothesesSearchInput");
const hypothesesSections = document.getElementById("hypothesesSections");
const hypothesesEmptyState = document.getElementById("hypothesesEmptyState");

const HYPOTHESIS_GROUP_ORDER = [
	"Виконання",
	"Огляди",
	"Використання SOP",
	"Життєвий цикл інформації",
	"Обмеження доказів"
];

let hypothesisSearchQuery = "";

function getConfidenceLabel(confidence) {

	return { low: "Низька", medium: "Середня", high: "Висока" }[confidence];

}

function formatHypothesisCount(count) {

	const lastTwoDigits = count % 100;
	const lastDigit = count % 10;
	const noun = lastTwoDigits >= 11 && lastTwoDigits <= 14
		? "гіпотез"
		: lastDigit === 1
			? "гіпотеза"
			: lastDigit >= 2 && lastDigit <= 4
				? "гіпотези"
				: "гіпотез";

	return `${count} ${noun}`;

}

function renderEvidenceCoverage(insights, hypothesisCount) {

	hypothesesCoverage.replaceChildren();

	[
		["Завершені виконання", insights.executions.completed],
		["Збережені огляди", insights.reviews.total],
		["Повнота оглядів", `${insights.executions.reviewCompletionRate}%`],
		["Сформовані гіпотези", hypothesisCount]
	].forEach(([label, value]) => {

		const card = createElement("article", "hypotheses-coverage-card");

		card.appendChild(createTextElement("span", label));
		card.appendChild(createTextElement("strong", String(value)));
		hypothesesCoverage.appendChild(card);

	});

}

function formatEvidenceValue(value) {

	return value === null || value === undefined ? "—" : String(value);

}

function createHypothesisCard(hypothesis) {

	const card = createElement("article", "hypothesis-card");
	const header = createElement("div", "hypothesis-card__header");
	const statement = createTextElement("h3", hypothesis.statement);
	const confidence = createTextElement(
		"span",
		`${getConfidenceLabel(hypothesis.confidence)} впевненість`,
		`hypothesis-card__confidence hypothesis-card__confidence--${hypothesis.confidence}`
	);
	const evidenceList = createElement("dl", "hypothesis-card__evidence");
	const confidenceBlock = createElement("div", "hypothesis-card__context");
	const limitations = createElement("div", "hypothesis-card__context");
	const proposalButton = createTextElement(
		"button",
		"Створити пропозицію покращення SOP",
		"btn-secondary hypothesis-card__proposal-btn"
	);

	proposalButton.type = "button";
	proposalButton.addEventListener("click", () => {

		startImprovementProposalFlow(hypothesis.id);

	});

	header.appendChild(statement);
	header.appendChild(confidence);
	card.appendChild(header);
	card.appendChild(
		createTextElement("p", hypothesis.explanation, "hypothesis-card__explanation")
	);
	card.appendChild(createTextElement("h4", "Докази"));

	hypothesis.evidence.forEach(item => {

		const description = item.comparisonValue === null
			? formatEvidenceValue(item.observedValue)
			: `${formatEvidenceValue(item.observedValue)} · поріг ${formatEvidenceValue(item.comparisonValue)}`;

		evidenceList.appendChild(createTextElement("dt", item.metric));
		evidenceList.appendChild(createTextElement("dd", description));

	});

	confidenceBlock.appendChild(createTextElement("h4", "Основа впевненості"));
	confidenceBlock.appendChild(createTextElement("p", hypothesis.confidenceBasis));
	limitations.appendChild(createTextElement("h4", "Обмеження"));
	hypothesis.limitations.forEach(item => limitations.appendChild(createTextElement("p", item)));

	card.appendChild(evidenceList);
	card.appendChild(confidenceBlock);
	card.appendChild(limitations);
	card.appendChild(
		createTextElement(
			"small",
			`Джерела: ${hypothesis.sourceModules.join(", ")}`,
			"hypothesis-card__sources"
		)
	);
	card.appendChild(
		createTextElement("strong", "Дія не пропонується.", "hypothesis-card__boundary")
	);
	card.appendChild(proposalButton);

	return card;

}

function renderHypotheses(hypotheses) {

	hypothesesSections.replaceChildren();

	const searchable = hypotheses.map(hypothesis => ({
		...hypothesis,
		evidenceText: hypothesis.evidence.map(item =>
			`${item.metric} ${item.observedValue} ${item.source}`
		).join(" "),
		limitationsText: hypothesis.limitations.join(" "),
		sourcesText: hypothesis.sourceModules.join(" "),
		confidenceText: getConfidenceLabel(hypothesis.confidence)
	}));
	const filtered = filterCollection(
		searchable,
		["group", "subject", "statement", "explanation", "evidenceText", "limitationsText", "sourcesText", "confidenceText"],
		hypothesisSearchQuery
	);

	hypothesesEmptyState.classList.toggle("hidden", hypotheses.length > 0);

	if (hypotheses.length === 0) return;

	if (filtered.length === 0) {

		hypothesesSections.appendChild(
			createTextElement("p", "Гіпотез не знайдено.", "hypotheses-search-empty")
		);
		return;

	}

	HYPOTHESIS_GROUP_ORDER.forEach(groupName => {

		const items = filtered.filter(hypothesis => hypothesis.group === groupName);

		if (items.length === 0) return;

		const section = createElement("section", "hypotheses-group");
		const header = createElement("div", "section-header");
		const grid = createElement("div", "hypotheses-grid");

		header.appendChild(createTextElement("h2", groupName));
		header.appendChild(
			createTextElement("span", formatHypothesisCount(items.length), "hypotheses-group__count")
		);
		items.forEach(item => grid.appendChild(createHypothesisCard(item)));
		section.appendChild(header);
		section.appendChild(grid);
		hypothesesSections.appendChild(section);

	});

}

const hypothesisInsights = LearningAnalysis.calculateInsightsData(
	loadInsightsSourceCollections()
);
const hypotheses = HypothesisAnalysis.generateHypotheses(hypothesisInsights);

renderEvidenceCoverage(hypothesisInsights, hypotheses.length);
renderHypotheses(hypotheses);

hypothesesSearchInput.addEventListener("input", () => {

	hypothesisSearchQuery = hypothesesSearchInput.value.trim();
	renderHypotheses(hypotheses);

});
