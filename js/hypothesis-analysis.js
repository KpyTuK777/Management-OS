const HypothesisAnalysis = (() => {

	function sampleConfidence(sampleSize, mediumThreshold, highThreshold) {

		if (sampleSize >= highThreshold) return "high";
		if (sampleSize >= mediumThreshold) return "medium";

		return "low";

	}

	function createHypothesis(definition) {

		return {
			...definition,
			evidence: definition.evidence.map(item => ({ ...item })),
			limitations: [...definition.limitations],
			sourceModules: [...definition.sourceModules]
		};

	}

	function phraseHypotheses(patterns, kind, insights) {

		return patterns.map(pattern => {

			const isBlocker = kind === "blocker";
			const confidence = pattern.count >= 5
				&& insights.executions.reviewCompletionRate >= 60
				? "high"
				: sampleConfidence(pattern.count, 3, 5);

			return createHypothesis({
				id: `${kind}:${pattern.label.trim().toLocaleLowerCase("uk-UA")}`,
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
			...phraseHypotheses(insights.reviews.commonBlockers, "blocker", insights),
			...phraseHypotheses(insights.reviews.commonImprovements, "improvement", insights)
		];
		const adverseOutcomes = insights.reviews.outcomeDistribution.partial
			+ insights.reviews.outcomeDistribution.failed;
		const adverseRate = insights.reviews.total
			? Math.round((adverseOutcomes / insights.reviews.total) * 100)
			: 0;

		if (insights.reviews.total >= 5 && adverseRate >= 40) {

			hypotheses.push(createHypothesis({
				id: "outcome-consistency",
				type: "outcome-consistency",
				group: "Виконання",
				subject: "",
				statement: "Наявні огляди можуть вказувати на несталі результати виконання.",
				explanation: "Значна частина оглядів має частковий або неуспішний результат.",
				evidence: [{ metric: "Часткові та неуспішні результати", observedValue: `${adverseRate}%`, comparisonValue: "40%", sampleSize: insights.reviews.total, source: "Review outcome distribution" }],
				confidence: sampleConfidence(insights.reviews.total, 8, 15),
				confidenceBasis: `Висновок базується на ${insights.reviews.total} оглядах.`,
				limitations: ["Результат огляду відображає оцінку користувача, а не причинний аналіз."],
				sourceModules: ["Reviews", "Insights"]
			}));

		}

		if (insights.executions.completed >= 5
			&& insights.executions.reviewCompletionRate < 60) {

			hypotheses.push(createHypothesis({
				id: "review-coverage",
				type: "evidence-coverage",
				group: "Обмеження доказів",
				subject: "",
				statement: "Поточні закономірності оглядів можуть не представляти всю історію виконань.",
				explanation: "Огляди збережено менш ніж для 60% завершених виконань.",
				evidence: [{ metric: "Повнота оглядів", observedValue: `${insights.executions.reviewCompletionRate}%`, comparisonValue: "60%", sampleSize: insights.executions.completed, source: "Execution and Review Insights" }],
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
					subject: "",
					statement: "Частина бібліотеки SOP може ще не відображатися у фактичному виконанні.",
					explanation: "Для значної частини поточних SOP не створено жодної сесії виконання.",
					evidence: [{ metric: "SOP без виконань", observedValue: `${unusedRate}%`, comparisonValue: "40%", sampleSize: insights.sops.total, source: "SOP usage Insights" }],
					confidence: sampleConfidence(insights.sops.total, 5, 10),
					confidenceBasis: `Спостереження охоплює ${insights.sops.total} SOP.`,
					limitations: ["SOP може бути новим, сезонним або навмисно рідко використовуваним."],
					sourceModules: ["SOP", "Executions", "Insights"]
				}));

			}

		}

		const topSop = insights.sops.frequentlyExecuted[0];

		if (topSop && insights.executions.completed >= 5) {

			const share = Math.round((topSop.count / insights.executions.completed) * 100);

			if (share >= 60) {

				hypotheses.push(createHypothesis({
					id: `sop-concentration:${topSop.id}`,
					type: "sop-concentration",
					group: "Використання SOP",
					subject: topSop.title,
					statement: `Операційна активність може бути зосереджена навколо SOP «${topSop.title}».`,
					explanation: "Один SOP становить більшість завершених виконань.",
					evidence: [{ metric: "Частка завершених виконань", observedValue: `${share}%`, comparisonValue: "60%", sampleSize: insights.executions.completed, source: "SOP execution frequency Insight" }],
					confidence: sampleConfidence(insights.executions.completed, 8, 15),
					confidenceBasis: `Розподіл базується на ${insights.executions.completed} завершених виконаннях.`,
					limitations: ["Висока частота може бути нормальною для основного або сезонного процесу."],
					sourceModules: ["SOP", "Executions", "Insights"]
				}));

			}

		}

		[
			{ id: "notes-lifecycle", label: "Нотатки", target: "структурованими знаннями", data: insights.notes, sources: ["Notes", "Knowledge", "Insights"] },
			{ id: "knowledge-lifecycle", label: "Записи Knowledge Base", target: "операційними процедурами", data: insights.knowledge, sources: ["Knowledge", "SOP", "Insights"] }
		].forEach(stage => {

			if (stage.data.total < 5) return;
			if (stage.data.conversionRate > 20 && stage.data.conversionRate < 80) return;

			const lowConversion = stage.data.conversionRate <= 20;

			hypotheses.push(createHypothesis({
				id: stage.id,
				type: "information-lifecycle",
				group: "Життєвий цикл інформації",
				subject: stage.label,
				statement: lowConversion
					? `${stage.label} можуть переважно залишатися на поточному етапі життєвого циклу.`
					: `${stage.label} можуть часто ставати ${stage.target}.`,
				explanation: `Зафіксований рівень конверсії становить ${stage.data.conversionRate}%.`,
				evidence: [{ metric: "Конверсія життєвого циклу", observedValue: `${stage.data.conversionRate}%`, comparisonValue: lowConversion ? "≤20%" : "≥80%", sampleSize: stage.data.total, source: "Information Lifecycle Insights" }],
				confidence: sampleConfidence(stage.data.total, 10, 20),
				confidenceBasis: `Спостереження охоплює ${stage.data.total} записів.`,
				limitations: ["Конверсія описує зв’язки між записами, але не наміри користувача."],
				sourceModules: stage.sources
			}));

		});

		return hypotheses;

	}

	return {
		generateHypotheses
	};

})();
