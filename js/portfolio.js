const newProjectBtn = document.getElementById("newProjectBtn");
const projectForm = document.getElementById("projectForm");

const createProjectBtn = document.getElementById("createProjectBtn");

const projectName = document.getElementById("projectName");
const projectDescription = document.getElementById("projectDescription");

const projectsList = document.getElementById("projectsList");

// =========================
// Дані
// =========================

let projects = loadProjects();

// =========================
// Відображення проєктів
// =========================

function renderProjects() {

	projectsList.innerHTML = "";

	projects.forEach(project => {

		const card = document.createElement("div");

		card.className = "project-card";

		card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;

		projectsList.appendChild(card);

	});

}

// =========================
// Показати / приховати форму
// =========================

newProjectBtn.addEventListener("click", () => {

	projectForm.classList.toggle("hidden");

});

// =========================
// Створення проєкту
// =========================

createProjectBtn.addEventListener("click", () => {

	const name = projectName.value.trim();
	const description = projectDescription.value.trim();

	if (name === "") return;

	const project = {

		id: Date.now(),

		name,

		description

	};

	projects.push(project);

	saveProjects(projects);

	renderProjects();

	projectName.value = "";
	projectDescription.value = "";

	projectForm.classList.add("hidden");

});

// =========================
// Запуск
// =========================

renderProjects();