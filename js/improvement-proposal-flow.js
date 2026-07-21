const IMPROVEMENT_HYPOTHESIS_CONTEXT_KEY = "improvementProposalHypothesisId";
const SOP_IMPROVEMENT_CONTEXT_KEY = "sopImprovementProposalId";

function getCurrentHypotheses() {

	const insights = LearningAnalysis.calculateInsightsData(
		loadInsightsSourceCollections()
	);

	return HypothesisAnalysis.generateHypotheses(insights);

}

function startImprovementProposalFlow(hypothesisId) {

	sessionStorage.setItem(IMPROVEMENT_HYPOTHESIS_CONTEXT_KEY, hypothesisId);
	window.location.href = "improvement-proposals.html";

}

function consumeImprovementHypothesisContext() {

	const hypothesisId = sessionStorage.getItem(IMPROVEMENT_HYPOTHESIS_CONTEXT_KEY);
	sessionStorage.removeItem(IMPROVEMENT_HYPOTHESIS_CONTEXT_KEY);

	if (hypothesisId === null) return null;

	return getCurrentHypotheses().find(item => item.id === hypothesisId) || null;

}

function createProposalTraceabilitySnapshot(hypothesis, sop) {

	return {
		sourceHypothesisId: hypothesis.id,
		sourceHypothesisType: hypothesis.type,
		sourceSopId: sop.id,
		sourceSopTitle: sop.title,
		observedEvidence: hypothesis.evidence.map(item => ({ ...item })),
		hypothesisSummary: hypothesis.statement,
		hypothesisLimitations: [...hypothesis.limitations],
		confidence: {
			level: hypothesis.confidence,
			basis: hypothesis.confidenceBasis
		},
		sourceModules: [...hypothesis.sourceModules]
	};

}

function startAcceptedProposalSopEdit(proposalId) {

	const proposal = loadImprovementProposals().find(
		item => item.id === proposalId && item.status === "accepted"
	);
	const sop = proposal
		? loadSops().find(item => item.id === proposal.sourceSopId)
		: null;

	if (!proposal || !sop) return false;

	sessionStorage.setItem(SOP_IMPROVEMENT_CONTEXT_KEY, String(proposalId));
	window.location.href = "sop.html";

	return true;

}

function consumeSopImprovementProposalContext() {

	const proposalId = sessionStorage.getItem(SOP_IMPROVEMENT_CONTEXT_KEY);
	sessionStorage.removeItem(SOP_IMPROVEMENT_CONTEXT_KEY);

	if (proposalId === null) return null;

	const proposal = loadImprovementProposals().find(
		item => String(item.id) === proposalId && item.status === "accepted"
	);
	const sop = proposal
		? loadSops().find(item => item.id === proposal.sourceSopId)
		: null;

	return proposal && sop ? { proposal, sop } : null;

}
