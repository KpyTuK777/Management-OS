const REVIEW_EXECUTION_CONTEXT_KEY = "reviewExecutionId";

const reviewForm = document.getElementById("reviewForm");
const reviewFormTitle = document.getElementById("reviewFormTitle");
const reviewExecutionSummary = document.getElementById("reviewExecutionSummary");
const reviewOutcome = document.getElementById("reviewOutcome");
const reviewBlockers = document.getElementById("reviewBlockers");
const reviewImprovements = document.getElementById("reviewImprovements");
const reviewLessons = document.getElementById("reviewLessons");
const reviewLaterBtn = document.getElementById("reviewLaterBtn");
const pendingReviewList = document.getElementById("pendingReviewList");
const reviewSearch = document.getElementById("reviewSearch");
const reviewSearchInput = document.getElementById("reviewSearchInput");
const reviewList = document.getElementById("reviewList");
const reviewEmptyState = document.getElementById("reviewEmptyState");

let reviews = loadExecutionReviews();
let executions = loadSopExecutions();
let reviewingExecutionId = null;
let searchQuery = "";

function getFinishedExecution(executionId) {

	return executions.find(
		execution => execution.id === executionId && execution.finishedAt !== null
	) || null;

}

function getReviewForExecution(executionId) {

	return reviews.find(review => review.executionId === executionId) || null;

}

function formatReviewDate(value) {

	return new Date(value).toLocaleString("uk-UA", {
		dateStyle: "medium",
		timeStyle: "short"
	});

}

function formatExecutionDuration(execution) {

	const duration = new Date(execution.finishedAt).getTime()
		- new Date(execution.startedAt).getTime();
	const minutes = Math.max(1, Math.round(duration / 60000));
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	if (hours === 0) return `${minutes} хв`;
	if (remainingMinutes === 0) return `${hours} год`;

	return `${hours} год ${remainingMinutes} хв`;

}

function getExecutionOutcomeCounts(execution) {

	const items = [...execution.steps, ...execution.checklist];

	return {
		completed: items.filter(item => item.status === "completed").length,
		skipped: items.filter(item => item.status === "skipped").length
	};

}

function getOutcomeLabel(outcome) {

	const labels = {
		successful: "Успішно",
		partial: "Частково",
		failed: "Неуспішно"
	};

	return labels[outcome] || outcome;

}

function resetReviewForm() {

	reviewForm.reset();
	reviewingExecutionId = null;
	reviewExecutionSummary.textContent = "";
	reviewForm.classList.add("hidden");

}

function openReviewForm(executionId) {

	const execution = getFinishedExecution(executionId);

	if (!execution || getReviewForExecution(executionId)) return false;

	const counts = getExecutionOutcomeCounts(execution);

	reviewForm.reset();
	reviewingExecutionId = execution.id;
	reviewFormTitle.textContent = execution.sopTitle;
	reviewExecutionSummary.textContent =
		`Виконано: ${counts.completed} · Пропущено: ${counts.skipped} · ${formatExecutionDuration(execution)}`;
	reviewForm.classList.remove("hidden");
	reviewForm.scrollIntoView({ behavior: "smooth", block: "start" });
	reviewForm.querySelector("input[name='reviewRating']").focus();

	return true;

}

function createPendingReviewCard(execution) {

	const card = createElement("article", "review-pending-card");
	const heading = createTextElement("h3", execution.sopTitle);
	const counts = getExecutionOutcomeCounts(execution);
	const summary = createTextElement(
		"p",
		`Виконано: ${counts.completed} · Пропущено: ${counts.skipped} · ${formatExecutionDuration(execution)}`
	);
	const date = createTextElement(
		"small",
		`Завершено: ${formatReviewDate(execution.finishedAt)}`,
		"review-card__date"
	);
	const actions = createElement("div", "review-card__actions");
	const reviewButton = createTextElement("button", "Додати огляд", "btn-primary");
	const executionLink = createTextElement("a", "Переглянути виконання", "btn-secondary");

	reviewButton.type = "button";
	executionLink.href = `sop-executions.html#execution-${execution.id}`;
	reviewButton.addEventListener("click", () => openReviewForm(execution.id));

	actions.appendChild(reviewButton);
	actions.appendChild(executionLink);
	card.appendChild(heading);
	card.appendChild(summary);
	card.appendChild(date);
	card.appendChild(actions);

	return card;

}

function renderPendingReviews() {

	pendingReviewList.replaceChildren();

	const pendingExecutions = executions
		.filter(execution => execution.finishedAt !== null)
		.filter(execution => !getReviewForExecution(execution.id))
		.sort((first, second) => new Date(second.finishedAt) - new Date(first.finishedAt));

	if (pendingExecutions.length === 0) {

		pendingReviewList.appendChild(
			createTextElement("p", "Усі завершені виконання опрацьовано.", "review-pending__empty")
		);
		return;

	}

	pendingExecutions.forEach(execution => {

		pendingReviewList.appendChild(createPendingReviewCard(execution));

	});

}

function appendReviewObservation(card, label, value) {

	if (!value) return;

	const observation = createElement("div", "review-card__observation");

	observation.appendChild(createTextElement("strong", label));
	observation.appendChild(createTextElement("p", value));
	card.appendChild(observation);

}

function createReviewCard(review) {

	const execution = executions.find(item => item.id === review.executionId) || null;
	const card = createElement("article", "review-card");
	const header = createElement("div", "review-card__header");
	const heading = createTextElement(
		"h3",
		execution ? execution.sopTitle : "Виконання недоступне"
	);
	const rating = createTextElement(
		"span",
		`${review.rating}/5`,
		"review-card__rating"
	);
	const outcome = createTextElement(
		"span",
		getOutcomeLabel(review.outcome),
		`review-card__outcome review-card__outcome--${review.outcome}`
	);
	const meta = createElement("div", "review-card__meta");
	const date = createTextElement(
		"small",
		`Огляд: ${formatReviewDate(review.createdAt)}`,
		"review-card__date"
	);

	card.id = `review-${review.id}`;
	card.tabIndex = -1;
	header.appendChild(heading);
	header.appendChild(rating);
	meta.appendChild(outcome);
	meta.appendChild(date);
	card.appendChild(header);
	card.appendChild(meta);
	appendReviewObservation(card, "Перешкоди", review.blockers);
	appendReviewObservation(card, "Покращення", review.improvements);
	appendReviewObservation(card, "Урок", review.lessonsLearned);

	if (execution) {

		const executionLink = createTextElement(
			"a",
			"Переглянути виконання →",
			"relationship-link"
		);

		executionLink.href = `sop-executions.html#execution-${execution.id}`;
		card.appendChild(executionLink);

	} else {

		card.appendChild(
			createTextElement("p", "Пов’язане виконання недоступне", "relationship-missing")
		);

	}

	return card;

}

function renderReviews() {

	reviewList.replaceChildren();
	reviewSearch.classList.toggle("hidden", reviews.length === 0);
	reviewEmptyState.classList.toggle("hidden", reviews.length > 0);

	if (reviews.length === 0) return;

	const searchableReviews = reviews.map(review => {

		const execution = executions.find(item => item.id === review.executionId);

		return {
			...review,
			executionTitle: execution?.sopTitle || "",
			outcomeText: getOutcomeLabel(review.outcome)
		};

	});
	const filteredReviews = filterCollection(
		searchableReviews,
		["executionTitle", "outcomeText", "rating", "blockers", "improvements", "lessonsLearned"],
		searchQuery
	);

	if (filteredReviews.length === 0) {

		reviewList.appendChild(
			createTextElement("p", "Оглядів не знайдено.", "review-list__empty")
		);
		return;

	}

	filteredReviews
		.sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
		.forEach(review => reviewList.appendChild(createReviewCard(review)));

}

function presentReview(reviewId) {

	const card = document.getElementById(`review-${reviewId}`);

	if (!card) return;

	card.classList.add("review-card--highlighted");
	card.scrollIntoView({ behavior: "smooth", block: "center" });
	card.focus({ preventScroll: true });

	setTimeout(() => card.classList.remove("review-card--highlighted"), 2500);

}

function consumeReviewContext() {

	const executionId = sessionStorage.getItem(REVIEW_EXECUTION_CONTEXT_KEY);
	sessionStorage.removeItem(REVIEW_EXECUTION_CONTEXT_KEY);

	if (executionId === null) return;

	openReviewForm(Number(executionId));

}

reviewForm.addEventListener("submit", event => {

	event.preventDefault();

	const execution = getFinishedExecution(reviewingExecutionId);
	const selectedRating = reviewForm.querySelector("input[name='reviewRating']:checked");

	if (!execution || getReviewForExecution(execution.id)) return;
	if (!selectedRating || !reviewOutcome.value) return;

	const review = {
		id: Date.now(),
		executionId: execution.id,
		rating: Number(selectedRating.value),
		outcome: reviewOutcome.value,
		blockers: reviewBlockers.value.trim(),
		improvements: reviewImprovements.value.trim(),
		lessonsLearned: reviewLessons.value.trim(),
		createdAt: new Date().toISOString()
	};

	reviews.push(review);
	saveExecutionReviews(reviews);
	resetReviewForm();
	renderPendingReviews();
	renderReviews();
	window.location.hash = `review-${review.id}`;
	presentReview(review.id);

});

reviewLaterBtn.addEventListener("click", resetReviewForm);

reviewSearchInput.addEventListener("input", () => {

	searchQuery = reviewSearchInput.value.trim();
	renderReviews();

});

window.addEventListener("hashchange", () => {

	const prefix = "#review-";

	if (window.location.hash.startsWith(prefix)) {

		presentReview(window.location.hash.slice(prefix.length));

	}

});

renderPendingReviews();
renderReviews();
consumeReviewContext();

if (window.location.hash.startsWith("#review-")) {

	presentReview(window.location.hash.slice("#review-".length));

}
