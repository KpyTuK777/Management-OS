const insightsSearchInput = document.getElementById("insightsSearchInput");
const insightsSections = document.getElementById("insightsSections");

const INSIGHT_SECTION_ORDER = [
	"Виконання",
	"Тренди оглядів",
	"Знання",
	"SOP",
	"Нотатки"
];

let insightsSearchQuery = "";

function formatAverageDuration(minutes) {

	if (minutes === null) return "—";

	const roundedMinutes = Math.round(minutes);
	const hours = Math.floor(roundedMinutes / 60);
	const remainder = roundedMinutes % 60;

	if (hours === 0) return `${roundedMinutes} хв`;
	if (remainder === 0) return `${hours} год`;

	return `${hours} год ${remainder} хв`;

}

function createPatternDetails(patterns) {

	return patterns.map(pattern => ({
		label: pattern.label,
		value: `${pattern.count}×`
	}));

}

function buildInsightCards(data) {

	const averageRating = data.executions.averageRating === null
		? "—"
		: data.executions.averageRating.toFixed(1);
	const blockersValue = data.reviews.commonBlockers[0]?.label || "Ще немає повторів";
	const improvementsValue = data.reviews.commonImprovements[0]?.label || "Ще немає повторів";

	return [
		{
			section: "Виконання",
			title: "Усього виконань",
			value: String(data.executions.total),
			explanation: "Усі активні та завершені сесії SOP."
		},
		{
			section: "Виконання",
			title: "Завершені виконання",
			value: String(data.executions.completed),
			explanation: `Із ${data.executions.total} створених виконань.`
		},
		{
			section: "Виконання",
			title: "Середня оцінка",
			value: averageRating,
			explanation: data.reviews.total
				? `На основі ${data.reviews.total} збережених оглядів.`
				: "Оцінок поки немає."
		},
		{
			section: "Виконання",
			title: "Середня тривалість",
			value: formatAverageDuration(data.executions.averageDurationMinutes),
			explanation: data.executions.completed
				? `На основі ${data.executions.completed} завершених виконань.`
				: "Завершених виконань поки немає."
		},
		{
			section: "Виконання",
			title: "Повнота оглядів",
			value: `${data.executions.reviewCompletionRate}%`,
			explanation: `${data.executions.reviewedCount} із ${data.executions.completed} завершених виконань мають огляд.`
		},
		{
			section: "Тренди оглядів",
			title: "Розподіл оцінок",
			value: `${data.reviews.total} оглядів`,
			explanation: "Кількість збережених оцінок від 1 до 5.",
			details: [5, 4, 3, 2, 1].map(rating => ({
				label: `${rating} балів`,
				value: String(data.reviews.ratingDistribution[rating])
			}))
		},
		{
			section: "Тренди оглядів",
			title: "Розподіл результатів",
			value: `${data.reviews.total} оглядів`,
			explanation: "Зафіксовані результати завершених оглядів.",
			details: [
				{ label: "Успішно", value: String(data.reviews.outcomeDistribution.successful) },
				{ label: "Частково", value: String(data.reviews.outcomeDistribution.partial) },
				{ label: "Неуспішно", value: String(data.reviews.outcomeDistribution.failed) }
			]
		},
		{
			section: "Тренди оглядів",
			title: "Повторювані перешкоди",
			value: blockersValue,
			explanation: "Точні фрази, що повторилися щонайменше у двох оглядах.",
			details: createPatternDetails(data.reviews.commonBlockers)
		},
		{
			section: "Тренди оглядів",
			title: "Повторювані теми покращень",
			value: improvementsValue,
			explanation: "Точні фрази, що повторилися щонайменше у двох оглядах.",
			details: createPatternDetails(data.reviews.commonImprovements)
		},
		{
			section: "Знання",
			title: "Записи бази знань",
			value: String(data.knowledge.total),
			explanation: "Усі структуровані записи бази знань."
		},
		{
			section: "Знання",
			title: "Перетворено на SOP",
			value: String(data.knowledge.converted),
			explanation: "Записи знань, пов’язані зі створеним SOP."
		},
		{
			section: "Знання",
			title: "Конверсія: База знань → SOP",
			value: `${data.knowledge.conversionRate}%`,
			explanation: `${data.knowledge.converted} із ${data.knowledge.total} записів перетворено на SOP.`
		},
		{
			section: "SOP",
			title: "Усього SOP",
			value: String(data.sops.total),
			explanation: "Усі визначені операційні процедури."
		},
		{
			section: "SOP",
			title: "SOP без виконань",
			value: String(data.sops.neverExecuted),
			explanation: "Процедури, для яких ще не створено жодної сесії."
		},
		{
			section: "SOP",
			title: "Часто виконувані SOP",
			value: String(data.sops.frequentlyExecuted.length),
			explanation: "Процедури з двома або більше завершеними виконаннями.",
			details: data.sops.frequentlyExecuted.slice(0, 3).map(sop => ({
				label: sop.title,
				value: String(sop.count)
			}))
		},
		{
			section: "Нотатки",
			title: "Усього нотаток",
			value: String(data.notes.total),
			explanation: "Усі записи швидкого захоплення у Вхідних."
		},
		{
			section: "Нотатки",
			title: "Додано до бази знань",
			value: String(data.notes.converted),
			explanation: "Нотатки, пов’язані зі створеним записом бази знань."
		},
		{
			section: "Нотатки",
			title: "Конверсія: Нотатки → База знань",
			value: `${data.notes.conversionRate}%`,
			explanation: `${data.notes.converted} із ${data.notes.total} нотаток додано до бази знань.`
		}
	].map((card, index) => ({
		...card,
		id: index,
		detailsText: (card.details || [])
			.map(detail => `${detail.label} ${detail.value}`)
			.join(" ")
	}));

}

function createInsightCard(card) {

	const article = createElement("article", "insight-card");
	const title = createTextElement("h3", card.title);
	const value = createTextElement("strong", card.value, "insight-card__value");
	const explanation = createTextElement("p", card.explanation, "insight-card__explanation");

	article.appendChild(title);
	article.appendChild(value);
	article.appendChild(explanation);

	if (card.details?.length) {

		const details = createElement("dl", "insight-card__details");

		card.details.forEach(detail => {

			details.appendChild(createTextElement("dt", detail.label));
			details.appendChild(createTextElement("dd", detail.value));

		});

		article.appendChild(details);

	}

	return article;

}

function renderInsights(cards) {

	insightsSections.replaceChildren();

	const filteredCards = filterCollection(
		cards,
		["section", "title", "value", "explanation", "detailsText"],
		insightsSearchQuery
	);

	if (filteredCards.length === 0) {

		insightsSections.appendChild(
			createTextElement("p", "Інсайтів не знайдено.", "insights-empty")
		);
		return;

	}

	INSIGHT_SECTION_ORDER.forEach(sectionName => {

		const sectionCards = filteredCards.filter(card => card.section === sectionName);

		if (sectionCards.length === 0) return;

		const section = createElement("section", "insights-group");
		const header = createElement("div", "section-header");
		const title = createTextElement("h2", sectionName);
		const count = createTextElement(
			"span",
			`${sectionCards.length} показників`,
			"insights-group__count"
		);
		const grid = createElement("div", "insights-grid");

		header.appendChild(title);
		header.appendChild(count);
		sectionCards.forEach(card => grid.appendChild(createInsightCard(card)));
		section.appendChild(header);
		section.appendChild(grid);
		insightsSections.appendChild(section);

	});

}

const insightCards = buildInsightCards(
	LearningAnalysis.calculateInsightsData(loadInsightsSourceCollections())
);

insightsSearchInput.addEventListener("input", () => {

	insightsSearchQuery = insightsSearchInput.value.trim();
	renderInsights(insightCards);

});

renderInsights(insightCards);
