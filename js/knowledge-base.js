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

	knowledgeCategory.innerHTML = "";

	knowledgeCategories.forEach(category => {

		const option = document.createElement("option");

		option.value = category;
		option.textContent = category;
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

function filterKnowledgeEntries(entries) {

	const normalizedQuery = searchQuery.toLowerCase();

	return entries.filter(entry => {

		return [
			entry.title,
			entry.category,
			entry.summary,
			entry.content
		].some(value =>
			(value || "").toLowerCase().includes(normalizedQuery)
		);

	});

}

function renderKnowledgeEntries() {

	knowledgeEntriesList.innerHTML = "";

	if (knowledgeEntries.length === 0) {

		knowledgeSearch.classList.add("hidden");
		knowledgeEntriesList.classList.add("hidden");
		knowledgeEmptyState.classList.remove("hidden");

		return;

	}

	const filteredEntries = filterKnowledgeEntries(knowledgeEntries);

	knowledgeSearch.classList.remove("hidden");
	knowledgeEmptyState.classList.add("hidden");
	knowledgeEntriesList.classList.remove("hidden");

	if (filteredEntries.length === 0) {

		const noResults = document.createElement("p");

		noResults.className = "knowledge-entries__empty";
		noResults.textContent = "Записів не знайдено.";
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
