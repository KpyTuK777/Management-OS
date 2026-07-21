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

	const matchingProjects = filterCollection(projects, ["name"], searchQuery);

	return matchingProjects.filter(project => {

		const projectStatus = project.status || PROJECT_STATUSES[0];
		const matchesStatus =
			selectedStatus === "Усі" || projectStatus === selectedStatus;

		return matchesStatus;

	});

}

// =========================
// Відображення проєктів
// =========================

function renderProjects() {

	projectsList.replaceChildren();

	const filteredProjects = filterProjects(projects);

	if (filteredProjects.length === 0) {

		projectsList.appendChild(
			createTextElement("p", "Проєкти не знайдено.", "projects-list__empty")
		);

		return;

	}

	filteredProjects.forEach(project => {

		const projectStatus = project.status || PROJECT_STATUSES[0];
		const projectProgress = Number(project.progress) || 0;

		const card = createElement("div", "project-card");

		card.innerHTML = `

    <div class="project-card__header">

        <h3 class="project-card__title"></h3>

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

    <p class="project-card__description"></p>

    <div class="project-card__footer">

        <small class="project-card__date"></small>

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

		setText(card.querySelector(".project-card__title"), project.name);
		setText(card.querySelector(".project-card__description"), project.description);
		setText(card.querySelector(".project-card__date"), `Створено: ${project.createdAt}`);

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

		const editProjectBtn = createTextElement(
			"button",
			"Редагувати",
			"btn-primary project-card__edit-btn"
		);

		editProjectBtn.type = "button";

		editProjectBtn.addEventListener("click", () => {

			startEditingProject(project);

		});

		const deleteProjectBtn = createTextElement(
			"button",
			"Видалити",
			"btn-primary project-card__delete-btn"
		);

		deleteProjectBtn.type = "button";

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
