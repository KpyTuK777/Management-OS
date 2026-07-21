const LearningAnalysis = (() => {

	function calculatePercentage(part, total) {

		return total === 0 ? 0 : Math.round((part / total) * 100);

	}

	function calculateAverage(values) {

		if (values.length === 0) return null;

		return values.reduce((sum, value) => sum + value, 0) / values.length;

	}

	function countRepeatedPhrases(values, limit = 3) {

		const phrases = new Map();

		values.forEach(value => {

			const label = String(value || "").trim().replace(/\s+/g, " ");

			if (!label) return;

			const key = label.toLocaleLowerCase("uk-UA");
			const current = phrases.get(key);

			if (current) {

				current.count += 1;

			} else {

				phrases.set(key, { label, count: 1 });

			}

		});

		return Array.from(phrases.values())
			.filter(phrase => phrase.count >= 2)
			.sort((first, second) =>
				second.count - first.count
				|| first.label.localeCompare(second.label, "uk-UA")
			)
			.slice(0, limit);

	}

	function calculateInsightsData(collections = {}) {

		const executions = Array.isArray(collections.executions)
			? collections.executions
			: [];
		const reviews = Array.isArray(collections.reviews) ? collections.reviews : [];
		const knowledgeEntries = Array.isArray(collections.knowledgeEntries)
			? collections.knowledgeEntries
			: [];
		const sops = Array.isArray(collections.sops) ? collections.sops : [];
		const notes = Array.isArray(collections.notes) ? collections.notes : [];
		const completedExecutions = executions.filter(
			execution => execution.finishedAt !== null && execution.finishedAt !== undefined
		);
		const durations = completedExecutions
			.map(execution =>
				new Date(execution.finishedAt).getTime()
				- new Date(execution.startedAt).getTime()
			)
			.filter(duration => Number.isFinite(duration) && duration >= 0)
			.map(duration => duration / 60000);
		const ratings = reviews
			.map(review => Number(review.rating))
			.filter(rating => Number.isFinite(rating) && rating >= 1 && rating <= 5);
		const completedExecutionIds = new Set(
			completedExecutions.map(execution => execution.id)
		);
		const reviewedExecutionIds = new Set(
			reviews
				.map(review => review.executionId)
				.filter(executionId => completedExecutionIds.has(executionId))
		);
		const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
		const outcomeDistribution = { successful: 0, partial: 0, failed: 0 };

		ratings.forEach(rating => {

			ratingDistribution[Math.round(rating)] += 1;

		});

		reviews.forEach(review => {

			if (Object.hasOwn(outcomeDistribution, review.outcome)) {

				outcomeDistribution[review.outcome] += 1;

			}

		});

		const executionCountsBySop = completedExecutions.reduce((counts, execution) => {

			counts.set(execution.sopId, (counts.get(execution.sopId) || 0) + 1);

			return counts;

		}, new Map());
		const neverExecutedSops = sops.filter(sop =>
			!executions.some(execution => execution.sopId === sop.id)
		);
		const frequentlyExecutedSops = sops
			.map(sop => ({
				id: sop.id,
				title: sop.title,
				count: executionCountsBySop.get(sop.id) || 0
			}))
			.filter(sop => sop.count >= 2)
			.sort((first, second) =>
				second.count - first.count
				|| first.title.localeCompare(second.title, "uk-UA")
			);
		const convertedKnowledgeEntries = knowledgeEntries.filter(
			entry => entry.sopId !== null && entry.sopId !== undefined
		).length;
		const convertedNotes = notes.filter(
			note => note.knowledgeEntryId !== null && note.knowledgeEntryId !== undefined
		).length;

		return {
			executions: {
				total: executions.length,
				completed: completedExecutions.length,
				averageRating: calculateAverage(ratings),
				averageDurationMinutes: calculateAverage(durations),
				reviewCompletionRate: calculatePercentage(
					reviewedExecutionIds.size,
					completedExecutions.length
				),
				reviewedCount: reviewedExecutionIds.size
			},
			reviews: {
				total: reviews.length,
				ratingDistribution,
				outcomeDistribution,
				commonBlockers: countRepeatedPhrases(
					reviews.map(review => review.blockers)
				),
				commonImprovements: countRepeatedPhrases(
					reviews.map(review => review.improvements)
				)
			},
			knowledge: {
				total: knowledgeEntries.length,
				converted: convertedKnowledgeEntries,
				conversionRate: calculatePercentage(
					convertedKnowledgeEntries,
					knowledgeEntries.length
				)
			},
			sops: {
				total: sops.length,
				neverExecuted: neverExecutedSops.length,
				frequentlyExecuted: frequentlyExecutedSops
			},
			notes: {
				total: notes.length,
				converted: convertedNotes,
				conversionRate: calculatePercentage(convertedNotes, notes.length)
			}
		};

	}

	return {
		calculateInsightsData
	};

})();
