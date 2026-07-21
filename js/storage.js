function saveProjects(projects) {

	localStorage.setItem("projects", JSON.stringify(projects));

}

function loadProjects() {

	const data = localStorage.getItem("projects");

	return data ? JSON.parse(data) : [];

}

function saveKnowledgeEntries(entries) {

	localStorage.setItem("knowledgeEntries", JSON.stringify(entries));

}

function loadKnowledgeEntries() {

	const data = localStorage.getItem("knowledgeEntries");

	return data ? JSON.parse(data) : [];

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

	localStorage.setItem("knowledgeCategories", JSON.stringify(categories));

}

function loadKnowledgeCategories() {

	const data = localStorage.getItem("knowledgeCategories");

	if (data !== null) return JSON.parse(data);

	const categories = [...DEFAULT_KNOWLEDGE_CATEGORIES];

	saveKnowledgeCategories(categories);

	return categories;

}
