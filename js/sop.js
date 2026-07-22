const newSopButtons = document.querySelectorAll("[data-action='new-sop']");
const sopForm = document.getElementById("sopForm");
const sopFormTitle = document.getElementById("sopFormTitle");
const sopSourceContext = document.getElementById("sopSourceContext");
const sopSourceContent = document.getElementById("sopSourceContent");
const sopProposalContext = document.getElementById("sopProposalContext");
const sopProposalTitle = document.getElementById("sopProposalTitle");
const sopProposalImprovement = document.getElementById("sopProposalImprovement");
const sopProposalBenefit = document.getElementById("sopProposalBenefit");
const sopProposalEvidence = document.getElementById("sopProposalEvidence");
const sopTitle = document.getElementById("sopTitle");
const sopPurpose = document.getElementById("sopPurpose");
const sopTrigger = document.getElementById("sopTrigger");
const sopSteps = document.getElementById("sopSteps");
const sopChecklist = document.getElementById("sopChecklist");
const addSopStepBtn = document.getElementById("addSopStepBtn");
const addSopChecklistBtn = document.getElementById("addSopChecklistBtn");
const sopSubmitBtn = document.getElementById("sopSubmitBtn");
const sopSearch = document.getElementById("sopSearch");
const sopSearchInput = document.getElementById("sopSearchInput");
const sopList = document.getElementById("sopList");
const sopEmptyState = document.getElementById("sopEmptyState");

let sops = loadSops();
let editingSopId = null;
let searchQuery = "";
let activeKnowledgeSopWorkflow = consumeKnowledgeSopFlow();
let activeImprovementProposalContext = consumeSopImprovementProposalContext();

function createSopItem(container, value, type) {

	const row = createElement("div", "sop-item");
	const input = type === "step"
		? createElement("textarea", "sop-item__input")
		: createElement("input", "sop-item__input");
	const moveUpButton = createTextElement("button", "↑", "btn-secondary sop-item__move");
	const moveDownButton = createTextElement("button", "↓", "btn-secondary sop-item__move");
	const removeButton = createTextElement("button", "Видалити", "btn-secondary sop-item__remove");

	input.value = value;
	input.setAttribute("aria-label", type === "step" ? "Крок SOP" : "Пункт чекліста");

	if (type === "step") input.rows = 2;
	if (type === "checklist") input.type = "text";

	moveUpButton.type = "button";
	moveDownButton.type = "button";
	removeButton.type = "button";
	moveUpButton.setAttribute("aria-label", "Перемістити вгору");
	moveDownButton.setAttribute("aria-label", "Перемістити вниз");

	input.addEventListener("input", () => {

		input.setCustomValidity("");

	});

	moveUpButton.addEventListener("click", () => {

		const previousRow = row.previousElementSibling;

		if (previousRow) container.insertBefore(row, previousRow);

	});

	moveDownButton.addEventListener("click", () => {

		const nextRow = row.nextElementSibling;

		if (nextRow) container.insertBefore(nextRow, row);

	});

	removeButton.addEventListener("click", () => {

		row.remove();

	});

	row.appendChild(input);
	row.appendChild(moveUpButton);
	row.appendChild(moveDownButton);
	row.appendChild(removeButton);
	container.appendChild(row);

	return input;

}

function renderSopItems(container, values, type) {

	container.replaceChildren();

	const items = values.length > 0 ? values : [""];

	items.forEach(value => createSopItem(container, value, type));

}

function getSopItemValues(container) {

	return Array.from(container.querySelectorAll(".sop-item__input"))
		.map(input => input.value.trim())
		.filter(Boolean);

}

function createSopRelationship(sop) {

	if (!sop.sourceKnowledgeEntryId) return null;

	const sourceEntry = getKnowledgeEntryForSop(sop);

	if (!sourceEntry) {

		return createTextElement(
			"p",
			"Пов’язаний запис бази знань недоступний",
			"relationship-missing"
		);

	}

	const relationship = createElement("p", "relationship-row");
	const label = createTextElement("span", "Створено зі знання: ");
	const link = createTextElement(
		"a",
		`${sourceEntry.title} →`,
		"relationship-link"
	);

	link.href = `knowledge-base.html#knowledge-entry-${sourceEntry.id}`;
	relationship.appendChild(label);
	relationship.appendChild(link);

	return relationship;

}

function createSopCard(sop) {

	const card = createElement("article", "sop-card");
	const title = createTextElement("h3", sop.title);
	const purpose = createTextElement("p", sop.purpose, "sop-card__purpose");
	const trigger = createTextElement(
		"p",
		`Тригер: ${sop.trigger}`,
		"sop-card__trigger"
	);
	const counts = createTextElement(
		"p",
		`Кроків: ${(sop.steps || []).length} · Пунктів чекліста: ${(sop.checklist || []).length}`,
		"sop-card__counts"
	);
	const updatedAt = createTextElement(
		"small",
		`Оновлено: ${new Date(sop.updatedAt).toLocaleDateString("uk-UA")}`,
		"sop-card__date"
	);
	const relationship = createSopRelationship(sop);
	const actions = createElement("div", "sop-card__actions");
	const activeExecution = loadSopExecutions().find(
		execution => execution.sopId === sop.id && execution.finishedAt === null
	);
	const executeButton = createTextElement(
		"button",
		activeExecution ? "Продовжити виконання" : "Почати виконання",
		"btn-primary sop-card__execute-btn"
	);
	const historyLink = createTextElement(
		"a",
		"Історія виконань",
		"btn-secondary sop-card__history-link"
	);
	const editButton = createTextElement(
		"button",
		"Редагувати",
		"btn-primary sop-card__edit-btn"
	);
	const deleteButton = createTextElement(
		"button",
		"Видалити",
		"btn-primary sop-card__delete-btn"
	);

	card.id = `sop-${sop.id}`;
	card.tabIndex = -1;
	executeButton.type = "button";
	editButton.type = "button";
	deleteButton.type = "button";
	historyLink.href = `sop-executions.html#sop-history-${sop.id}`;

	executeButton.addEventListener("click", () => {

		startSopExecution(sop.id);

	});

	editButton.addEventListener("click", () => {

		startEditingSop(sop);

	});

	deleteButton.addEventListener("click", () => {

		if (!confirm("Видалити цей SOP?")) return;

		sops = sops.filter(item => item.id !== sop.id);
		saveSops(sops);
		renderSops();

	});

	card.appendChild(title);
	card.appendChild(purpose);
	card.appendChild(trigger);
	card.appendChild(counts);
	card.appendChild(updatedAt);

	if (relationship) card.appendChild(relationship);

	actions.appendChild(executeButton);
	actions.appendChild(historyLink);
	actions.appendChild(editButton);
	actions.appendChild(deleteButton);
	card.appendChild(actions);

	return card;

}

function resetSopForm() {

	sopForm.reset();
	editingSopId = null;
	activeKnowledgeSopWorkflow = null;
	sopFormTitle.textContent = "Новий SOP";
	sopSubmitBtn.textContent = "Зберегти SOP";
	sopSourceContext.classList.add("hidden");
	sopSourceContent.textContent = "";
	sopProposalContext.classList.add("hidden");
	sopProposalTitle.textContent = "";
	sopProposalImprovement.textContent = "";
	sopProposalBenefit.textContent = "";
	sopProposalEvidence.replaceChildren();
	renderSopItems(sopSteps, [], "step");
	renderSopItems(sopChecklist, [], "checklist");

}

function renderImprovementProposalContext(proposal) {

	sopProposalTitle.textContent = proposal.title;
	sopProposalImprovement.textContent = `Запропоноване покращення: ${proposal.suggestedImprovement}`;
	sopProposalBenefit.textContent = `Очікувана користь: ${proposal.expectedBenefit}`;
	sopProposalEvidence.appendChild(createTextElement("p", proposal.hypothesisSummary));

	const evidenceList = createElement("ul");

	proposal.observedEvidence.forEach(item => {

		evidenceList.appendChild(
			createTextElement("li", `${item.metric}: ${item.observedValue}`)
		);

	});

	sopProposalEvidence.appendChild(evidenceList);
	sopProposalContext.classList.remove("hidden");

}

function startImprovementProposalEdit() {

	if (!activeImprovementProposalContext) return;

	const context = activeImprovementProposalContext;

	startEditingSop(context.sop);
	activeImprovementProposalContext = context;
	renderImprovementProposalContext(context.proposal);

}

function startEditingSop(sop) {

	resetSopForm();
	editingSopId = sop.id;
	sopTitle.value = sop.title;
	sopPurpose.value = sop.purpose;
	sopTrigger.value = sop.trigger;
	renderSopItems(sopSteps, sop.steps || [], "step");
	renderSopItems(sopChecklist, sop.checklist || [], "checklist");
	sopFormTitle.textContent = "Редагувати SOP";
	sopSubmitBtn.textContent = "Зберегти зміни";
	sopForm.classList.remove("hidden");
	sopTitle.focus();

}

function startKnowledgeSopEntry() {

	if (!activeKnowledgeSopWorkflow) return;

	sopTitle.value = activeKnowledgeSopWorkflow.title;
	sopPurpose.value = activeKnowledgeSopWorkflow.purpose;
	sopSourceContent.textContent = activeKnowledgeSopWorkflow.sourceContent;
	sopSourceContext.classList.remove("hidden");
	sopFormTitle.textContent = "Новий SOP зі знання";
	sopSubmitBtn.textContent = "Зберегти SOP";
	sopForm.classList.remove("hidden");
	sopTrigger.focus();

}

function createSearchableSops(collection) {

	return collection.map(sop => ({
		...sop,
		stepsText: (sop.steps || []).join(" "),
		checklistText: (sop.checklist || []).join(" ")
	}));

}

function renderSops() {

	sopList.replaceChildren();

	if (sops.length === 0) {

		sopSearch.classList.add("hidden");
		sopList.classList.add("hidden");
		sopEmptyState.classList.remove("hidden");

		return;

	}

	const filteredSops = filterCollection(
		createSearchableSops(sops),
		["title", "purpose", "trigger", "stepsText", "checklistText"],
		searchQuery
	);

	sopSearch.classList.remove("hidden");
	sopEmptyState.classList.add("hidden");
	sopList.classList.remove("hidden");

	if (filteredSops.length === 0) {

		sopList.appendChild(
			createTextElement("p", "SOP не знайдено.", "sop-list__empty")
		);

		return;

	}

	filteredSops.forEach(sop => sopList.appendChild(createSopCard(sop)));

}

function presentSop(sopId) {

	const card = document.getElementById(`sop-${sopId}`);

	if (!card) return;

	card.classList.add("sop-card--highlighted");
	card.scrollIntoView({ behavior: "smooth", block: "center" });
	card.focus({ preventScroll: true });

	setTimeout(() => {

		card.classList.remove("sop-card--highlighted");

	}, 2500);

}

function presentSopFromFragment() {

	const prefix = "#sop-";

	if (!window.location.hash.startsWith(prefix)) return;

	presentSop(window.location.hash.slice(prefix.length));

}

addSopStepBtn.addEventListener("click", () => {

	createSopItem(sopSteps, "", "step").focus();

});

addSopChecklistBtn.addEventListener("click", () => {

	createSopItem(sopChecklist, "", "checklist").focus();

});

sopSearchInput.addEventListener("input", () => {

	searchQuery = sopSearchInput.value.trim();
	renderSops();

});

newSopButtons.forEach(button => {

	button.addEventListener("click", () => {

		resetSopForm();
		sopForm.classList.remove("hidden");
		sopTitle.focus();

	});

});

sopForm.addEventListener("submit", event => {

	event.preventDefault();

	const title = sopTitle.value.trim();
	const purpose = sopPurpose.value.trim();
	const trigger = sopTrigger.value.trim();
	const steps = getSopItemValues(sopSteps);
	const checklist = getSopItemValues(sopChecklist);

	if (!title || !purpose || !trigger) return;

	if (steps.length === 0) {

		const firstStep = sopSteps.querySelector(".sop-item__input")
			|| createSopItem(sopSteps, "", "step");

		firstStep.setCustomValidity("Додайте хоча б один крок.");
		firstStep.reportValidity();

		return;

	}

	const timestamp = new Date().toISOString();
	let createdSopId = null;
	let sourceKnowledgeEntryId = null;

	if (editingSopId !== null) {

		const sop = sops.find(item => item.id === editingSopId);

		if (sop) {

			sop.title = title;
			sop.purpose = purpose;
			sop.trigger = trigger;
			sop.steps = steps;
			sop.checklist = checklist;
			sop.updatedAt = timestamp;

		}

	} else {

		const sop = {
			id: Date.now(),
			title,
			purpose,
			trigger,
			steps,
			checklist,
			createdAt: timestamp,
			updatedAt: timestamp
		};

		if (activeKnowledgeSopWorkflow) {

			sop.sourceKnowledgeEntryId =
				activeKnowledgeSopWorkflow.sourceKnowledgeEntryId;
			sourceKnowledgeEntryId =
				activeKnowledgeSopWorkflow.sourceKnowledgeEntryId;

		}

		sops.push(sop);
		createdSopId = sop.id;

	}

	saveSops(sops);

	if (sourceKnowledgeEntryId !== null) {

		completeKnowledgeSopFlow(sourceKnowledgeEntryId, createdSopId);
		searchQuery = "";
		sopSearchInput.value = "";

	}

	resetSopForm();
	sopForm.classList.add("hidden");
	renderSops();

	if (sourceKnowledgeEntryId !== null) presentSop(createdSopId);

});

renderSopItems(sopSteps, [], "step");
renderSopItems(sopChecklist, [], "checklist");
renderSops();
startKnowledgeSopEntry();
startImprovementProposalEdit();
presentSopFromFragment();
