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

window.addEventListener("storage", event => {

	if (event.key === "projects") {

		renderDashboardStatistics();

	}

});

renderDashboardStatistics();
