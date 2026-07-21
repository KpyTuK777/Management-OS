const newEntryButtons = document.querySelectorAll("[data-action='new-entry']");
const knowledgeEntryForm = document.getElementById("knowledgeEntryForm");
const knowledgeEntriesList = document.getElementById("knowledgeEntriesList");
const knowledgeEmptyState = document.getElementById("knowledgeEmptyState");

const knowledgeTitle = document.getElementById("knowledgeTitle");
const knowledgeCategory = document.getElementById("knowledgeCategory");
const knowledgeSummary = document.getElementById("knowledgeSummary");
const knowledgeContent = document.getElementById("knowledgeContent");

let knowledgeEntries = loadKnowledgeEntries();

function createKnowledgeCard(entry) {

	const card = document.createElement("article");
	const header = document.createElement("div");
	const title = document.createElement("h3");
	const category = document.createElement("span");
	const summary = document.createElement("p");
	const createdAt = document.createElement("small");

	card.className = "knowledge-card";
	header.className = "knowledge-card__header";
	category.className = "knowledge-card__category";
	createdAt.className = "knowledge-card__date";

	title.textContent = entry.title;
	category.textContent = entry.category;
	summary.textContent = entry.summary;
	createdAt.textContent = `Створено: ${new Date(entry.createdAt).toLocaleDateString("uk-UA")}`;

	header.appendChild(title);
	header.appendChild(category);
	card.appendChild(header);
	card.appendChild(summary);
	card.appendChild(createdAt);

	return card;

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

	knowledgeEntries.push({
		id: Date.now(),
		title,
		category,
		summary,
		content,
		createdAt: timestamp,
		updatedAt: timestamp
	});

	saveKnowledgeEntries(knowledgeEntries);
	knowledgeEntryForm.reset();
	knowledgeEntryForm.classList.add("hidden");
	renderKnowledgeEntries();

});

renderKnowledgeEntries();
