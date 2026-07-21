const newProjectBtn = document.getElementById("newProjectBtn");
const projectForm = document.getElementById("projectForm");

const createProjectBtn = document.getElementById("createProjectBtn");

const projectName = document.getElementById("projectName");
const projectDescription = document.getElementById("projectDescription");

const projectsList = document.getElementById("projectsList");
const statusFilter = document.getElementById("statusFilter");
const projectSearch = document.getElementById("projectSearch");

const PROJECT_STATUSES = [
	"Активний",
	"На паузі",
	"Завершений",
	"Архів"
];

const PROJECT_STATUS_CLASSES = {
	"Активний": "project-status--active",
	"На паузі": "project-status--paused",
	"Завершений": "project-status--completed",
	"Архів": "project-status--archived"
};

function getProjectStatusClass(status) {

	return PROJECT_STATUS_CLASSES[status] ?? "project-status--active";

}

// =========================
// Дані
// =========================

let projects = loadProjects();
let editingProjectId = null;
let selectedStatus = "Усі";
let searchQuery = "";

function filterProjects(projects) {

	return projects.filter(project => {

		const projectStatus = project.status || PROJECT_STATUSES[0];
		const matchesStatus =
			selectedStatus === "Усі" || projectStatus === selectedStatus;
		const matchesSearch = project.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		return matchesStatus && matchesSearch;

	});

}

// =========================
// Відображення проєктів
// =========================

function renderProjects() {

	projectsList.innerHTML = "";

	const filteredProjects = filterProjects(projects);

	if (filteredProjects.length === 0) {

		projectsList.innerHTML =
			'<p class="projects-list__empty">Проєкти не знайдено.</p>';

		return;

	}

	filteredProjects.forEach(project => {

		const projectStatus = project.status || PROJECT_STATUSES[0];
		const projectProgress = Number(project.progress) || 0;

		const card = document.createElement("div");

		card.className = "project-card";

		card.innerHTML = `

    <div class="project-card__header">

        <h3>${project.name}</h3>

        <select
            class="project-status ${getProjectStatusClass(projectStatus)}"
            aria-label="Статус проєкту">
            ${PROJECT_STATUSES.map(status => `
                <option value="${status}" ${status === projectStatus ? "selected" : ""}>
                    ${status}
                </option>
            `).join("")}
        </select>

    </div>

    <p>

        ${project.description}

    </p>

    <div class="project-card__footer">

        <small>

            Створено: ${project.createdAt}

        </small>

    </div>

    <div class="project-progress">

        <div class="project-progress__header">

            <span>Прогрес</span>

            <span class="project-progress__value">${projectProgress}%</span>

        </div>

        <div
            class="project-progress__bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${projectProgress}">

            <div
                class="project-progress__fill"
                style="width: ${projectProgress}%"></div>

        </div>

        <input
            class="project-progress__slider"
            type="range"
            min="0"
            max="100"
            value="${projectProgress}"
            aria-label="Прогрес проєкту">

    </div>

`;

		const statusSelect = card.querySelector(".project-status");

		statusSelect.addEventListener("change", () => {

			project.status = statusSelect.value;
			statusSelect.className = `project-status ${getProjectStatusClass(project.status)}`;

			saveProjects(projects);

		});

		const progressSlider = card.querySelector(".project-progress__slider");
		const progressFill = card.querySelector(".project-progress__fill");
		const progressValue = card.querySelector(".project-progress__value");
		const progressBar = card.querySelector(".project-progress__bar");

		progressSlider.addEventListener("input", () => {

			const progress = Number(progressSlider.value);

			project.progress = progress;
			progressFill.style.width = `${progress}%`;
			progressValue.textContent = `${progress}%`;
			progressBar.setAttribute("aria-valuenow", progress);

			saveProjects(projects);

		});

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

statusFilter.addEventListener("change", () => {

	selectedStatus = statusFilter.value;
	renderProjects();

});

projectSearch.addEventListener("input", () => {

	searchQuery = projectSearch.value.trim();
	renderProjects();

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
