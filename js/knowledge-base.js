const newEntryButtons = document.querySelectorAll("[data-action='new-entry']");
const knowledgeEntryForm = document.getElementById("knowledgeEntryForm");
const knowledgeEntriesList = document.getElementById("knowledgeEntriesList");
const knowledgeEmptyState = document.getElementById("knowledgeEmptyState");
const knowledgeSearch = document.getElementById("knowledgeSearch");
const knowledgeSearchInput = document.getElementById("knowledgeSearchInput");

const knowledgeTitle = document.getElementById("knowledgeTitle");
const knowledgeCategory = document.getElementById("knowledgeCategory");
const knowledgeSummary = document.getElementById("knowledgeSummary");
const knowledgeContent = document.getElementById("knowledgeContent");
const knowledgeSubmitBtn = document.getElementById("knowledgeSubmitBtn");
const newCategoryBtn = document.getElementById("newCategoryBtn");
const knowledgeCategoryForm = document.getElementById("knowledgeCategoryForm");
const newCategoryName = document.getElementById("newCategoryName");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const cancelCategoryBtn = document.getElementById("cancelCategoryBtn");

let knowledgeEntries = loadKnowledgeEntries();
let knowledgeCategories = loadKnowledgeCategories();
let editingEntryId = null;
let searchQuery = "";

function includeExistingEntryCategories() {

	let categoriesChanged = false;

	knowledgeEntries.forEach(entry => {

		const categoryName = (entry.category || "").trim();
		const categoryExists = knowledgeCategories.some(category =>
			category.toLowerCase() === categoryName.toLowerCase()
		);

		if (categoryName && !categoryExists) {

			knowledgeCategories.push(categoryName);
			categoriesChanged = true;

		}

	});

	if (categoriesChanged) saveKnowledgeCategories(knowledgeCategories);

}

function renderCategoryOptions(selectedCategory = "") {

	knowledgeCategory.replaceChildren();

	knowledgeCategories.forEach(category => {

		const option = createTextElement("option", category);

		option.value = category;
		knowledgeCategory.appendChild(option);

	});

	if (selectedCategory) knowledgeCategory.value = selectedCategory;

}

function closeCategoryForm() {

	newCategoryName.value = "";
	newCategoryName.setCustomValidity("");
	knowledgeCategoryForm.classList.add("hidden");

}

function createKnowledgeCategory() {

	const categoryName = newCategoryName.value.trim();

	newCategoryName.setCustomValidity("");

	if (!categoryName) {

		newCategoryName.setCustomValidity("Введіть назву категорії.");
		newCategoryName.reportValidity();

		return;

	}

	const duplicateCategory = knowledgeCategories.find(category =>
		category.toLowerCase() === categoryName.toLowerCase()
	);

	if (duplicateCategory) {

		newCategoryName.setCustomValidity("Категорія вже існує.");
		newCategoryName.reportValidity();

		return;

	}

	knowledgeCategories.push(categoryName);
	saveKnowledgeCategories(knowledgeCategories);
	renderCategoryOptions(categoryName);
	closeCategoryForm();

}

includeExistingEntryCategories();
renderCategoryOptions();

function createKnowledgeCard(entry) {

	const card = createElement("article", "knowledge-card");
	const header = createElement("div", "knowledge-card__header");
	const title = createTextElement("h3", entry.title);
	const category = createTextElement(
		"span",
		entry.category,
		"knowledge-card__category"
	);
	const summary = createTextElement("p", entry.summary);
	const createdAt = createTextElement(
		"small",
		`Створено: ${new Date(entry.createdAt).toLocaleDateString("uk-UA")}`,
		"knowledge-card__date"
	);
	const actions = createElement("div", "knowledge-card__actions");
	const editButton = createTextElement(
		"button",
		"Редагувати",
		"btn-primary knowledge-card__edit-btn"
	);
	const deleteButton = createTextElement(
		"button",
		"Видалити",
		"btn-primary knowledge-card__delete-btn"
	);

	editButton.type = "button";
	deleteButton.type = "button";

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
	renderCategoryOptions(entry.category);
	knowledgeSummary.value = entry.summary;
	knowledgeContent.value = entry.content;

	knowledgeSubmitBtn.textContent = "Зберегти зміни";
	knowledgeEntryForm.classList.remove("hidden");
	knowledgeTitle.focus();

}

function resetKnowledgeForm() {

	knowledgeEntryForm.reset();
	closeCategoryForm();
	editingEntryId = null;
	knowledgeSubmitBtn.textContent = "Зберегти запис";

}

newCategoryBtn.addEventListener("click", () => {

	newCategoryName.setCustomValidity("");
	knowledgeCategoryForm.classList.remove("hidden");
	newCategoryName.focus();

});

addCategoryBtn.addEventListener("click", createKnowledgeCategory);

cancelCategoryBtn.addEventListener("click", closeCategoryForm);

newCategoryName.addEventListener("input", () => {

	newCategoryName.setCustomValidity("");

});

newCategoryName.addEventListener("keydown", event => {

	if (event.key !== "Enter") return;

	event.preventDefault();
	createKnowledgeCategory();

});

function renderKnowledgeEntries() {

	knowledgeEntriesList.replaceChildren();

	if (knowledgeEntries.length === 0) {

		knowledgeSearch.classList.add("hidden");
		knowledgeEntriesList.classList.add("hidden");
		knowledgeEmptyState.classList.remove("hidden");

		return;

	}

	const filteredEntries = filterCollection(
		knowledgeEntries,
		["title", "category", "summary", "content"],
		searchQuery
	);

	knowledgeSearch.classList.remove("hidden");
	knowledgeEmptyState.classList.add("hidden");
	knowledgeEntriesList.classList.remove("hidden");

	if (filteredEntries.length === 0) {

		const noResults = createTextElement(
			"p",
			"Записів не знайдено.",
			"knowledge-entries__empty"
		);
		knowledgeEntriesList.appendChild(noResults);

		return;

	}

	filteredEntries.forEach(entry => {

		knowledgeEntriesList.appendChild(createKnowledgeCard(entry));

	});

}

knowledgeSearchInput.addEventListener("input", () => {

	searchQuery = knowledgeSearchInput.value.trim();
	renderKnowledgeEntries();

});

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
