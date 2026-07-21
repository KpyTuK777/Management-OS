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

function getSampleConfidence(sampleSize, mediumThreshold, highThreshold) {

	if (sampleSize >= highThreshold) return "high";
	if (sampleSize >= mediumThreshold) return "medium";

	return "low";

}

function getConfidenceLabel(confidence) {

	return {
		low: "Низька",
		medium: "Середня",
		high: "Висока"
	}[confidence];

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

function createHypothesis({
	id,
	type,
	group,
	subject = "",
	statement,
	explanation,
	evidence,
	confidence,
	confidenceBasis,
	limitations,
	sourceModules
}) {

	return {
		id,
		type,
		group,
		subject,
		statement,
		explanation,
		evidence: evidence.map(item => ({ ...item })),
		confidence,
		confidenceBasis,
		limitations: [...limitations],
		sourceModules: [...sourceModules]
	};

}

function createRecurringPhraseHypotheses(patterns, kind, insights) {

	return patterns.map((pattern, index) => {

		const confidence = pattern.count >= 5 && insights.executions.reviewCompletionRate >= 60
			? "high"
			: getSampleConfidence(pattern.count, 3, 5);
		const isBlocker = kind === "blocker";

		return createHypothesis({
			id: `${kind}-${index}-${pattern.label.toLocaleLowerCase("uk-UA")}`,
			type: isBlocker ? "recurring-blocker" : "recurring-improvement",
			group: "Огляди",
			subject: pattern.label,
			statement: isBlocker
				? `«${pattern.label}» може бути повторюваним операційним ускладненням.`
				: `Повторні згадки «${pattern.label}» можуть відображати стабільну тему покращення.`,
			explanation: isBlocker
				? "Однакова перешкода зафіксована у кількох незалежних оглядах."
				: "Однакова ідея покращення повторюється у кількох оглядах.",
			evidence: [
				{
					metric: isBlocker ? "Повторення перешкоди" : "Повторення теми",
					observedValue: pattern.count,
					comparisonValue: 2,
					sampleSize: insights.reviews.total,
					source: "Execution Reviews"
				},
				{
					metric: "Повнота оглядів",
					observedValue: `${insights.executions.reviewCompletionRate}%`,
					comparisonValue: null,
					sampleSize: insights.executions.completed,
					source: "Insights"
				}
			],
			confidence,
			confidenceBasis: confidence === "high"
				? "Фраза повторюється щонайменше п’ять разів за достатнього покриття оглядами."
				: confidence === "medium"
					? "Фраза повторюється у трьох або чотирьох оглядах."
					: "Досягнуто мінімальний поріг у два повторення.",
			limitations: insights.executions.reviewCompletionRate < 60
				? ["Огляди охоплюють менше 60% завершених виконань."]
				: ["Однакова фраза може мати різний контекст у різних оглядах."],
			sourceModules: ["Reviews", "Insights"]
		});

	});

}

function generateHypotheses(insights) {

	const hypotheses = [
		...createRecurringPhraseHypotheses(
			insights.reviews.commonBlockers,
			"blocker",
			insights
		),
		...createRecurringPhraseHypotheses(
			insights.reviews.commonImprovements,
			"improvement",
			insights
		)
	];
	const adverseOutcomes = insights.reviews.outcomeDistribution.partial
		+ insights.reviews.outcomeDistribution.failed;
	const adverseRate = insights.reviews.total === 0
		? 0
		: Math.round((adverseOutcomes / insights.reviews.total) * 100);

	if (insights.reviews.total >= 5 && adverseRate >= 40) {

		const confidence = getSampleConfidence(insights.reviews.total, 8, 15);

		hypotheses.push(createHypothesis({
			id: "outcome-consistency",
			type: "outcome-consistency",
			group: "Виконання",
			statement: "Наявні огляди можуть вказувати на несталі результати виконання.",
			explanation: "Значна частина оглядів має частковий або неуспішний результат.",
			evidence: [{
				metric: "Часткові та неуспішні результати",
				observedValue: `${adverseRate}%`,
				comparisonValue: "40%",
				sampleSize: insights.reviews.total,
				source: "Review outcome distribution"
			}],
			confidence,
			confidenceBasis: `Висновок базується на ${insights.reviews.total} оглядах.`,
			limitations: ["Результат огляду відображає оцінку користувача, а не причинний аналіз."],
			sourceModules: ["Reviews", "Insights"]
		}));

	}

	if (insights.executions.completed >= 5 && insights.executions.reviewCompletionRate < 60) {

		hypotheses.push(createHypothesis({
			id: "review-coverage",
			type: "evidence-coverage",
			group: "Обмеження доказів",
			statement: "Поточні закономірності оглядів можуть не представляти всю історію виконань.",
			explanation: "Огляди збережено менш ніж для 60% завершених виконань.",
			evidence: [{
				metric: "Повнота оглядів",
				observedValue: `${insights.executions.reviewCompletionRate}%`,
				comparisonValue: "60%",
				sampleSize: insights.executions.completed,
				source: "Execution and Review Insights"
			}],
			confidence: insights.executions.completed >= 10 ? "high" : "medium",
			confidenceBasis: "Порівняно кількість завершених виконань і унікальних пов’язаних оглядів.",
			limitations: ["Відсутність огляду не означає відсутність операційного досвіду."],
			sourceModules: ["Executions", "Reviews", "Insights"]
		}));

	}

	if (insights.sops.total >= 3) {

		const unusedRate = Math.round(
			(insights.sops.neverExecuted / insights.sops.total) * 100
		);

		if (unusedRate >= 40) {

			hypotheses.push(createHypothesis({
				id: "sop-adoption",
				type: "sop-adoption",
				group: "Використання SOP",
				statement: "Частина бібліотеки SOP може ще не відображатися у фактичному виконанні.",
				explanation: "Для значної частини поточних SOP не створено жодної сесії виконання.",
				evidence: [{
					metric: "SOP без виконань",
					observedValue: `${unusedRate}%`,
					comparisonValue: "40%",
					sampleSize: insights.sops.total,
					source: "SOP usage Insights"
				}],
				confidence: getSampleConfidence(insights.sops.total, 5, 10),
				confidenceBasis: `Спостереження охоплює ${insights.sops.total} SOP.`,
				limitations: ["SOP може бути новим, сезонним або навмисно рідко використовуваним."],
				sourceModules: ["SOP", "Executions", "Insights"]
			}));

		}

	}

	const topSop = insights.sops.frequentlyExecuted[0];

	if (topSop && insights.executions.completed >= 5) {

		const topShare = Math.round((topSop.count / insights.executions.completed) * 100);

		if (topShare >= 60) {

			hypotheses.push(createHypothesis({
				id: `sop-concentration-${topSop.id}`,
				type: "sop-concentration",
				group: "Використання SOP",
				subject: topSop.title,
				statement: `Операційна активність може бути зосереджена навколо SOP «${topSop.title}».`,
				explanation: "Один SOP становить більшість завершених виконань.",
				evidence: [{
					metric: "Частка завершених виконань",
					observedValue: `${topShare}%`,
					comparisonValue: "60%",
					sampleSize: insights.executions.completed,
					source: "SOP execution frequency Insight"
				}],
				confidence: getSampleConfidence(insights.executions.completed, 8, 15),
				confidenceBasis: `Розподіл базується на ${insights.executions.completed} завершених виконаннях.`,
				limitations: ["Висока частота може бути нормальною для основного або сезонного процесу."],
				sourceModules: ["SOP", "Executions", "Insights"]
			}));

		}

	}

	[
		{
			key: "notes-lifecycle",
			label: "Нотатки",
			target: "структурованими знаннями",
			data: insights.notes,
			group: "Життєвий цикл інформації",
			sources: ["Notes", "Knowledge", "Insights"]
		},
		{
			key: "knowledge-lifecycle",
			label: "Записи Knowledge Base",
			target: "операційними процедурами",
			data: insights.knowledge,
			group: "Життєвий цикл інформації",
			sources: ["Knowledge", "SOP", "Insights"]
		}
	].forEach(stage => {

		if (stage.data.total < 5) return;
		if (stage.data.conversionRate > 20 && stage.data.conversionRate < 80) return;

		const lowConversion = stage.data.conversionRate <= 20;

		hypotheses.push(createHypothesis({
			id: stage.key,
			type: "information-lifecycle",
			group: stage.group,
			statement: lowConversion
				? `${stage.label} можуть переважно залишатися на поточному етапі життєвого циклу.`
				: `${stage.label} можуть часто ставати ${stage.target}.`,
			explanation: `Зафіксований рівень конверсії становить ${stage.data.conversionRate}%.`,
			evidence: [{
				metric: "Конверсія життєвого циклу",
				observedValue: `${stage.data.conversionRate}%`,
				comparisonValue: lowConversion ? "≤20%" : "≥80%",
				sampleSize: stage.data.total,
				source: "Information Lifecycle Insights"
			}],
			confidence: getSampleConfidence(stage.data.total, 10, 20),
			confidenceBasis: `Спостереження охоплює ${stage.data.total} записів.`,
			limitations: ["Конверсія описує зв’язки між записами, але не наміри користувача."],
			sourceModules: stage.sources
		}));

	});

	return hypotheses;

}

function renderEvidenceCoverage(insights, eligibleInsights) {

	hypothesesCoverage.replaceChildren();

	[
		["Завершені виконання", insights.executions.completed],
		["Збережені огляди", insights.reviews.total],
		["Повнота оглядів", `${insights.executions.reviewCompletionRate}%`],
		["Сформовані гіпотези", eligibleInsights]
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
	const explanation = createTextElement(
		"p",
		hypothesis.explanation,
		"hypothesis-card__explanation"
	);
	const evidenceTitle = createTextElement("h4", "Докази");
	const evidenceList = createElement("dl", "hypothesis-card__evidence");
	const confidenceBlock = createElement("div", "hypothesis-card__context");
	const limitations = createElement("div", "hypothesis-card__context");
	const sources = createTextElement(
		"small",
		`Джерела: ${hypothesis.sourceModules.join(", ")}`,
		"hypothesis-card__sources"
	);
	const boundary = createTextElement(
		"strong",
		"Дія не пропонується.",
		"hypothesis-card__boundary"
	);

	header.appendChild(statement);
	header.appendChild(confidence);
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

	hypothesis.limitations.forEach(limitation => {

		limitations.appendChild(createTextElement("p", limitation));

	});

	card.appendChild(header);
	card.appendChild(explanation);
	card.appendChild(evidenceTitle);
	card.appendChild(evidenceList);
	card.appendChild(confidenceBlock);
	card.appendChild(limitations);
	card.appendChild(sources);
	card.appendChild(boundary);

	return card;

}

function renderHypotheses(hypotheses) {

	hypothesesSections.replaceChildren();

	const searchable = hypotheses.map(hypothesis => ({
		...hypothesis,
		evidenceText: hypothesis.evidence
			.map(item => `${item.metric} ${item.observedValue} ${item.source}`)
			.join(" "),
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

		const groupHypotheses = filtered.filter(hypothesis => hypothesis.group === groupName);

		if (groupHypotheses.length === 0) return;

		const section = createElement("section", "hypotheses-group");
		const header = createElement("div", "section-header");
		const grid = createElement("div", "hypotheses-grid");

		header.appendChild(createTextElement("h2", groupName));
		header.appendChild(
			createTextElement(
				"span",
				formatHypothesisCount(groupHypotheses.length),
				"hypotheses-group__count"
			)
		);
		groupHypotheses.forEach(hypothesis => grid.appendChild(createHypothesisCard(hypothesis)));
		section.appendChild(header);
		section.appendChild(grid);
		hypothesesSections.appendChild(section);

	});

}

const hypothesisInsights = LearningAnalysis.calculateInsightsData(
	loadInsightsSourceCollections()
);
const hypotheses = generateHypotheses(hypothesisInsights);

renderEvidenceCoverage(hypothesisInsights, hypotheses.length);
renderHypotheses(hypotheses);

hypothesesSearchInput.addEventListener("input", () => {

	hypothesisSearchQuery = hypothesesSearchInput.value.trim();
	renderHypotheses(hypotheses);

});
