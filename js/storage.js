function saveProjects(projects) {

	setStorageItem("projects", projects);

}

function loadProjects() {

	return getStorageItem("projects", []);

}

function saveKnowledgeEntries(entries) {

	setStorageItem("knowledgeEntries", entries);

}

function loadKnowledgeEntries() {

	return getStorageItem("knowledgeEntries", []);

}

const DEFAULT_KNOWLEDGE_CATEGORIES = [
	"Management",
	"Frontend",
	"Backend",
	"Design",
	"Learning",
	"Personal"
];

function saveKnowledgeCategories(categories) {

	setStorageItem("knowledgeCategories", categories);

}

function loadKnowledgeCategories() {

	const categories = getStorageItem("knowledgeCategories", null);

	if (categories !== null) return categories;

	const defaultCategories = [...DEFAULT_KNOWLEDGE_CATEGORIES];

	saveKnowledgeCategories(defaultCategories);

	return defaultCategories;

}

function saveNotes(notes) {

	setStorageItem("notes", notes);

}

function loadNotes() {

	return getStorageItem("notes", []);

}

function saveSops(sops) {

	setStorageItem("sops", sops);

}

function loadSops() {

	return getStorageItem("sops", []);

}
