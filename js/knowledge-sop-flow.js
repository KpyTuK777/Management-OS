const KNOWLEDGE_SOP_WORKFLOW_KEY = "knowledgeSopSourceId";

function startKnowledgeSopFlow(knowledgeEntryId) {

	sessionStorage.setItem(KNOWLEDGE_SOP_WORKFLOW_KEY, String(knowledgeEntryId));
	window.location.href = "sop.html";

}

function consumeKnowledgeSopFlow() {

	const sourceKnowledgeEntryId = sessionStorage.getItem(KNOWLEDGE_SOP_WORKFLOW_KEY);

	sessionStorage.removeItem(KNOWLEDGE_SOP_WORKFLOW_KEY);

	if (sourceKnowledgeEntryId === null) return null;

	const entry = loadKnowledgeEntries().find(
		item => String(item.id) === sourceKnowledgeEntryId
	);

	if (!entry || entry.sopId) return null;

	return {
		sourceKnowledgeEntryId: entry.id,
		title: entry.title,
		purpose: entry.summary,
		sourceContent: entry.content
	};

}

function completeKnowledgeSopFlow(sourceKnowledgeEntryId, sopId) {

	const entries = loadKnowledgeEntries();
	const entry = entries.find(item => item.id === sourceKnowledgeEntryId);

	if (!entry || entry.sopId) return false;

	entry.sopId = sopId;
	saveKnowledgeEntries(entries);

	return true;

}

function getSopForKnowledgeEntry(entry) {

	if (!entry.sopId) return null;

	return loadSops().find(sop => sop.id === entry.sopId) || null;

}

function getKnowledgeEntryForSop(sop) {

	if (!sop.sourceKnowledgeEntryId) return null;

	return loadKnowledgeEntries().find(
		entry => entry.id === sop.sourceKnowledgeEntryId
	) || null;

}
