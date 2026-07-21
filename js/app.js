function calculateDashboardStatistics(projects) {

	const totalProjects = projects.length;
	const activeProjects = projects.filter(
		project => project.status === "Активний"
	).length;
	const completedProjects = projects.filter(
		project => project.status === "Завершений"
	).length;
	const totalProgress = projects.reduce(
		(sum, project) => sum + Number(project.progress || 0),
		0
	);

	return {
		totalProjects,
		activeProjects,
		completedProjects,
		averageProgress: totalProjects
			? Math.round(totalProgress / totalProjects)
			: 0
	};

}

function getAttentionProjects(projects) {

	return projects.filter(project => {

		const progress = Number(project.progress || 0);
		const status = project.status || "Активний";

		return status === "На паузі" || progress < 30 || progress === 0;

	});

}

function renderDashboardStatistics() {

	const totalProjectsElement = document.getElementById("totalProjects");

	if (!totalProjectsElement) return;

	const statistics = calculateDashboardStatistics(loadProjects());

	totalProjectsElement.textContent = statistics.totalProjects;
	document.getElementById("activeProjects").textContent =
		statistics.activeProjects;
	document.getElementById("completedProjects").textContent =
		statistics.completedProjects;
	document.getElementById("averageProgress").textContent =
		`${statistics.averageProgress}%`;

}

function renderAttentionProjects() {

	const attentionProjectsElement =
		document.getElementById("attentionProjects");

	if (!attentionProjectsElement) return;

	const attentionProjects = getAttentionProjects(loadProjects());

	if (attentionProjects.length === 0) {

		attentionProjectsElement.innerHTML =
			'<p class="dashboard-attention__empty">' +
			'Наразі немає проєктів, що потребують уваги.' +
			'</p>';

		return;

	}

	attentionProjectsElement.innerHTML = attentionProjects.map(project => {

		const status = project.status || "Активний";
		const progress = Number(project.progress || 0);

		return `
			<article class="dashboard-attention-card">

				<h3>${project.name}</h3>

				<div class="dashboard-attention-card__meta">
					<span>Статус: ${status}</span>
					<span>Прогрес: ${progress}%</span>
				</div>

			</article>
		`;

	}).join("");

}

function renderDashboard() {

	renderDashboardStatistics();
	renderAttentionProjects();

}

window.addEventListener("storage", event => {

	if (event.key === "projects") {

		renderDashboard();

	}

});

renderDashboard();
