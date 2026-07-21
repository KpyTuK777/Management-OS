const newEntryButtons = document.querySelectorAll("[data-action='new-entry']");
const knowledgeEntryForm = document.getElementById("knowledgeEntryForm");
const knowledgeEntriesList = document.getElementById("knowledgeEntriesList");
const knowledgeEmptyState = document.getElementById("knowledgeEmptyState");

const knowledgeTitle = document.getElementById("knowledgeTitle");
const knowledgeCategory = document.getElementById("knowledgeCategory");
const knowledgeSummary = document.getElementById("knowledgeSummary");
const knowledgeContent = document.getElementById("knowledgeContent");
const knowledgeSubmitBtn = document.getElementById("knowledgeSubmitBtn");

let knowledgeEntries = loadKnowledgeEntries();
let editingEntryId = null;

function createKnowledgeCard(entry) {

	const card = document.createElement("article");
	const header = document.createElement("div");
	const title = document.createElement("h3");
	const category = document.createElement("span");
	const summary = document.createElement("p");
	const createdAt = document.createElement("small");
	const actions = document.createElement("div");
	const editButton = document.createElement("button");
	const deleteButton = document.createElement("button");

	card.className = "knowledge-card";
	header.className = "knowledge-card__header";
	category.className = "knowledge-card__category";
	createdAt.className = "knowledge-card__date";
	actions.className = "knowledge-card__actions";
	editButton.className = "btn-primary knowledge-card__edit-btn";
	editButton.type = "button";
	deleteButton.className = "btn-primary knowledge-card__delete-btn";
	deleteButton.type = "button";

	title.textContent = entry.title;
	category.textContent = entry.category;
	summary.textContent = entry.summary;
	createdAt.textContent = `Створено: ${new Date(entry.createdAt).toLocaleDateString("uk-UA")}`;
	editButton.textContent = "Редагувати";
	deleteButton.textContent = "Видалити";

	editButton.addEventListener("click", () => {

		startEditingEntry(entry);

	});

	deleteButton.addEventListener("click", () => {

		if (!confirm("Видалити цей запис?")) return;

		knowledgeEntries = knowledgeEntries.filter(item => item.id !== entry.id);

		saveKnowledgeEntries(knowledgeEntries);
		renderKnowledgeEntries();

	});

	header.appendChild(title);
	header.appendChild(category);
	card.appendChild(header);
	card.appendChild(summary);
	card.appendChild(createdAt);
	actions.appendChild(editButton);
	actions.appendChild(deleteButton);
	card.appendChild(actions);

	return card;

}

function startEditingEntry(entry) {

	editingEntryId = entry.id;

	knowledgeTitle.value = entry.title;
	knowledgeCategory.value = entry.category;
	knowledgeSummary.value = entry.summary;
	knowledgeContent.value = entry.content;

	knowledgeSubmitBtn.textContent = "Зберегти зміни";
	knowledgeEntryForm.classList.remove("hidden");
	knowledgeTitle.focus();

}

function resetKnowledgeForm() {

	knowledgeEntryForm.reset();
	editingEntryId = null;
	knowledgeSubmitBtn.textContent = "Зберегти запис";

}

function renderKnowledgeEntries() {

	knowledgeEntriesList.innerHTML = "";

	if (knowledgeEntries.length === 0) {

		knowledgeEntriesList.classList.add("hidden");
		knowledgeEmptyState.classList.remove("hidden");

		return;

	}

	knowledgeEmptyState.classList.add("hidden");
	knowledgeEntriesList.classList.remove("hidden");

	knowledgeEntries.forEach(entry => {

		knowledgeEntriesList.appendChild(createKnowledgeCard(entry));

	});

}

newEntryButtons.forEach(button => {

	button.addEventListener("click", () => {

		resetKnowledgeForm();
		knowledgeEntryForm.classList.remove("hidden");
		knowledgeTitle.focus();

	});

});

knowledgeEntryForm.addEventListener("submit", event => {

	event.preventDefault();

	const title = knowledgeTitle.value.trim();
	const category = knowledgeCategory.value.trim();
	const summary = knowledgeSummary.value.trim();
	const content = knowledgeContent.value.trim();

	if (!title || !category || !summary || !content) return;

	const timestamp = new Date().toISOString();

	if (editingEntryId !== null) {

		const entry = knowledgeEntries.find(entry => entry.id === editingEntryId);

		if (entry) {

			entry.title = title;
			entry.category = category;
			entry.summary = summary;
			entry.content = content;
			entry.updatedAt = timestamp;

		}

	} else {

		knowledgeEntries.push({
			id: Date.now(),
			title,
			category,
			summary,
			content,
			createdAt: timestamp,
			updatedAt: timestamp
		});

	}

	saveKnowledgeEntries(knowledgeEntries);
	resetKnowledgeForm();
	knowledgeEntryForm.classList.add("hidden");
	renderKnowledgeEntries();

});

renderKnowledgeEntries();
