const NOTE_KNOWLEDGE_WORKFLOW_KEY = "noteKnowledgeSourceId";

function startNoteKnowledgeFlow(noteId) {

	sessionStorage.setItem(NOTE_KNOWLEDGE_WORKFLOW_KEY, String(noteId));
	window.location.href = "knowledge-base.html";

}

function consumeNoteKnowledgeFlow() {

	const sourceNoteId = sessionStorage.getItem(NOTE_KNOWLEDGE_WORKFLOW_KEY);

	sessionStorage.removeItem(NOTE_KNOWLEDGE_WORKFLOW_KEY);

	if (sourceNoteId === null) return null;

	const note = loadNotes().find(item => String(item.id) === sourceNoteId);

	if (!note || note.knowledgeEntryId) return null;

	return {
		sourceNoteId: note.id,
		title: note.title,
		content: note.content
	};

}

function completeNoteKnowledgeFlow(sourceNoteId, knowledgeEntryId) {

	const notes = loadNotes();
	const note = notes.find(item => item.id === sourceNoteId);

	if (!note || note.knowledgeEntryId) return false;

	note.knowledgeEntryId = knowledgeEntryId;
	saveNotes(notes);

	return true;

}
