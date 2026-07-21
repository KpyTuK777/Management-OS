const newNoteButtons = document.querySelectorAll("[data-action='new-note']");
const noteForm = document.getElementById("noteForm");
const noteFormTitle = document.getElementById("noteFormTitle");
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const noteSubmitBtn = document.getElementById("noteSubmitBtn");
const notesSearch = document.getElementById("notesSearch");
const notesSearchInput = document.getElementById("notesSearchInput");
const notesList = document.getElementById("notesList");
const notesEmptyState = document.getElementById("notesEmptyState");

let notes = loadNotes();
let editingNoteId = null;
let searchQuery = "";

function createNoteCard(note) {

	const card = createElement("article", "notes-card");
	const title = createTextElement("h3", note.title);
	const content = createTextElement("p", note.content, "notes-card__content");
	const createdAt = createTextElement(
		"small",
		`Створено: ${new Date(note.createdAt).toLocaleDateString("uk-UA")}`,
		"notes-card__date"
	);
	const actions = createElement("div", "notes-card__actions");
	const editButton = createTextElement(
		"button",
		"Редагувати",
		"btn-primary notes-card__edit-btn"
	);
	const deleteButton = createTextElement(
		"button",
		"Видалити",
		"btn-primary notes-card__delete-btn"
	);

	editButton.type = "button";
	deleteButton.type = "button";

	editButton.addEventListener("click", () => {

		startEditingNote(note);

	});

	deleteButton.addEventListener("click", () => {

		if (!confirm("Видалити цю нотатку?")) return;

		notes = notes.filter(item => item.id !== note.id);

		saveNotes(notes);
		renderNotes();

	});

	card.appendChild(title);
	card.appendChild(content);
	card.appendChild(createdAt);
	actions.appendChild(editButton);
	actions.appendChild(deleteButton);
	card.appendChild(actions);

	return card;

}

function startEditingNote(note) {

	editingNoteId = note.id;
	noteTitle.value = note.title;
	noteContent.value = note.content;
	noteFormTitle.textContent = "Редагувати нотатку";
	noteSubmitBtn.textContent = "Зберегти зміни";
	noteForm.classList.remove("hidden");
	noteTitle.focus();

}

function resetNoteForm() {

	noteForm.reset();
	editingNoteId = null;
	noteFormTitle.textContent = "Нова нотатка";
	noteSubmitBtn.textContent = "Зберегти нотатку";

}

function renderNotes() {

	notesList.replaceChildren();

	if (notes.length === 0) {

		notesSearch.classList.add("hidden");
		notesList.classList.add("hidden");
		notesEmptyState.classList.remove("hidden");

		return;

	}

	const filteredNotes = filterCollection(
		notes,
		["title", "content"],
		searchQuery
	);

	notesSearch.classList.remove("hidden");
	notesEmptyState.classList.add("hidden");
	notesList.classList.remove("hidden");

	if (filteredNotes.length === 0) {

		notesList.appendChild(
			createTextElement("p", "Нотаток не знайдено.", "notes-list__empty")
		);

		return;

	}

	filteredNotes.forEach(note => {

		notesList.appendChild(createNoteCard(note));

	});

}

notesSearchInput.addEventListener("input", () => {

	searchQuery = notesSearchInput.value.trim();
	renderNotes();

});

newNoteButtons.forEach(button => {

	button.addEventListener("click", () => {

		resetNoteForm();
		noteForm.classList.remove("hidden");
		noteTitle.focus();

	});

});

noteForm.addEventListener("submit", event => {

	event.preventDefault();

	const title = noteTitle.value.trim();
	const content = noteContent.value.trim();

	if (!title || !content) return;

	const timestamp = new Date().toISOString();

	if (editingNoteId !== null) {

		const note = notes.find(note => note.id === editingNoteId);

		if (note) {

			note.title = title;
			note.content = content;
			note.updatedAt = timestamp;

		}

	} else {

		notes.push({
			id: Date.now(),
			title,
			content,
			createdAt: timestamp,
			updatedAt: timestamp
		});

	}

	saveNotes(notes);
	resetNoteForm();
	noteForm.classList.add("hidden");
	renderNotes();

});

renderNotes();
