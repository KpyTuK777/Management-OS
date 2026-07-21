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
let editingProjectId = null;

// =========================
// Відображення проєктів
// =========================

function renderProjects() {

	projectsList.innerHTML = "";

	projects.forEach(project => {

		const card = document.createElement("div");

		card.className = "project-card";

		card.innerHTML = `

    <div class="project-card__header">

        <h3>${project.name}</h3>

        <span class="project-status">

            ${project.status}

        </span>

    </div>

    <p>

        ${project.description}

    </p>

    <div class="project-card__footer">

        <small>

            Створено: ${project.createdAt}

        </small>

        <small>

            Прогрес: ${project.progress}%

        </small>

    </div>

`;

		const editProjectBtn = document.createElement("button");

		editProjectBtn.className = "btn-primary project-card__edit-btn";
		editProjectBtn.type = "button";
		editProjectBtn.textContent = "Редагувати";

		editProjectBtn.addEventListener("click", () => {

			startEditingProject(project);

		});

		const deleteProjectBtn = document.createElement("button");

		deleteProjectBtn.className = "btn-primary project-card__delete-btn";
		deleteProjectBtn.type = "button";
		deleteProjectBtn.textContent = "Видалити";

		deleteProjectBtn.addEventListener("click", () => {

			if (!confirm("Видалити цей проєкт?")) return;

			projects = projects.filter(item => item.id !== project.id);

			saveProjects(projects);
			renderProjects();

		});

		card.appendChild(editProjectBtn);
		card.appendChild(deleteProjectBtn);

		projectsList.appendChild(card);

	});

}

// =========================
// Показати / приховати форму
// =========================

newProjectBtn.addEventListener("click", () => {

	projectForm.classList.toggle("hidden");

});

function startEditingProject(project) {

	editingProjectId = project.id;

	projectName.value = project.name;
	projectDescription.value = project.description;

	createProjectBtn.textContent = "Зберегти зміни";
	projectForm.classList.remove("hidden");

}

function resetProjectForm() {

	projectName.value = "";
	projectDescription.value = "";

	editingProjectId = null;
	createProjectBtn.textContent = "Створити проєкт";

}

// =========================
// Створення проєкту
// =========================

createProjectBtn.addEventListener("click", () => {

	const name = projectName.value.trim();
	const description = projectDescription.value.trim();

	if (name === "") return;

	if (editingProjectId !== null) {

		const project = projects.find(project => project.id === editingProjectId);

		if (project) {

			project.name = name;
			project.description = description;

		}

	} else {

	const project = {

		id: Date.now(),

		name,

		description,

		status: "Активний",

		progress: 0,

		createdAt: new Date().toLocaleDateString("uk-UA")

	};

	projects.push(project);

	}

	saveProjects(projects);

	renderProjects();

	resetProjectForm();

	projectForm.classList.add("hidden");

});

// =========================
// Запуск
// =========================

renderProjects();
