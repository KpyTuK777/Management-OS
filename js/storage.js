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
