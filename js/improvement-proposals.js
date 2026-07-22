const proposalForm = document.getElementById("proposalForm");
const proposalFormTitle = document.getElementById("proposalFormTitle");
const proposalSource = document.getElementById("proposalSource");
const proposalSop = document.getElementById("proposalSop");
const proposalTitle = document.getElementById("proposalTitle");
const proposalImprovement = document.getElementById("proposalImprovement");
const proposalBenefit = document.getElementById("proposalBenefit");
const proposalCancelBtn = document.getElementById("proposalCancelBtn");
const proposalDecisionForm = document.getElementById("proposalDecisionForm");
const proposalDecisionTitle = document.getElementById("proposalDecisionTitle");
const proposalDecisionReason = document.getElementById("proposalDecisionReason");
const proposalDecisionCancelBtn = document.getElementById("proposalDecisionCancelBtn");
const proposalSearchInput = document.getElementById("proposalSearchInput");
const proposalStatusFilter = document.getElementById("proposalStatusFilter");
const proposalList = document.getElementById("proposalList");
const proposalEmptyState = document.getElementById("proposalEmptyState");

let proposals = loadImprovementProposals();
let activeHypothesis = consumeImprovementHypothesisContext();
let editingProposalId = null;
let decisionProposalId = null;
let pendingDecisionStatus = null;
let proposalSearchQuery = "";
let proposalStatus = "all";

function getStatusLabel(status) {

	return { open: "Відкрита", accepted: "Прийнята", rejected: "Відхилена" }[status];

}

function getConfidenceLabel(level) {

	return { low: "Низька", medium: "Середня", high: "Висока" }[level];

}

function populateSopOptions(selectedId = null) {

	proposalSop.replaceChildren();
	const placeholder = createTextElement("option", "Оберіть SOP");

	placeholder.value = "";
	proposalSop.appendChild(placeholder);
	loadSops()
		.slice()
		.sort((first, second) => first.title.localeCompare(second.title, "uk-UA"))
		.forEach(sop => {

			const option = createTextElement("option", sop.title);

			option.value = String(sop.id);
			option.selected = sop.id === selectedId;
			proposalSop.appendChild(option);

		});

}

function renderEvidence(container, evidence) {

	const list = createElement("dl", "proposal-evidence");

	evidence.forEach(item => {

		const comparison = item.comparisonValue === null
			|| item.comparisonValue === undefined
			? ""
			: ` · поріг ${item.comparisonValue}`;

		list.appendChild(createTextElement("dt", item.metric));
		list.appendChild(
			createTextElement("dd", `${item.observedValue}${comparison}`)
		);

	});

	container.appendChild(list);

}

function renderSourceContext(source, isSnapshot) {

	proposalSource.replaceChildren();
	const statement = isSnapshot ? source.hypothesisSummary : source.statement;
	const evidence = isSnapshot ? source.observedEvidence : source.evidence;
	const confidence = isSnapshot ? source.confidence : {
		level: source.confidence,
		basis: source.confidenceBasis
	};
	const limitations = isSnapshot
		? source.hypothesisLimitations
		: source.limitations;

	proposalSource.appendChild(createTextElement("strong", "Пов’язана гіпотеза"));
	proposalSource.appendChild(createTextElement("p", statement));
	renderEvidence(proposalSource, evidence);
	proposalSource.appendChild(
		createTextElement(
			"p",
			`Впевненість: ${getConfidenceLabel(confidence.level)}. ${confidence.basis}`,
			"proposal-source__confidence"
		)
	);
	limitations.forEach(item => {

		proposalSource.appendChild(
			createTextElement("small", `Обмеження: ${item}`)
		);

	});

}

function resetProposalForm() {

	proposalForm.reset();
	proposalForm.classList.add("hidden");
	proposalSop.disabled = false;
	editingProposalId = null;
	activeHypothesis = null;
	proposalSource.replaceChildren();

}

function openCreationForm(hypothesis) {

	if (!hypothesis) return;

	if (loadSops().length === 0) {

		proposalEmptyState.appendChild(
			createTextElement(
				"p",
				"Спочатку створіть SOP, до якого можна прив’язати цю пропозицію.",
				"relationship-missing"
			)
		);
		return;

	}

	activeHypothesis = hypothesis;
	editingProposalId = null;
	proposalForm.reset();
	proposalSop.disabled = false;
	populateSopOptions();
	renderSourceContext(hypothesis, false);
	proposalFormTitle.textContent = "Нова пропозиція";
	proposalForm.classList.remove("hidden");
	proposalSop.focus();

}

function openEditingForm(proposal) {

	if (proposal.status !== "open") return;

	activeHypothesis = null;
	editingProposalId = proposal.id;
	populateSopOptions(proposal.sourceSopId);
	proposalSop.disabled = true;
	proposalTitle.value = proposal.title;
	proposalImprovement.value = proposal.suggestedImprovement;
	proposalBenefit.value = proposal.expectedBenefit;
	proposalFormTitle.textContent = "Редагувати пропозицію";
	renderSourceContext(proposal, true);
	proposalForm.classList.remove("hidden");
	proposalTitle.focus();

}

function formatProposalDate(value) {

	return new Date(value).toLocaleString("uk-UA", {
		dateStyle: "medium",
		timeStyle: "short"
	});

}

function startDecision(proposal, status) {

	if (proposal.status !== "open") return;

	decisionProposalId = proposal.id;
	pendingDecisionStatus = status;
	proposalDecisionReason.value = "";
	proposalDecisionTitle.textContent = status === "accepted"
		? "Прийняти пропозицію"
		: "Відхилити пропозицію";
	proposalDecisionForm.classList.remove("hidden");
	proposalDecisionReason.focus();

}

function resetDecisionForm() {

	proposalDecisionForm.reset();
	proposalDecisionForm.classList.add("hidden");
	decisionProposalId = null;
	pendingDecisionStatus = null;

}

function appendProposalContext(card, label, value) {

	const context = createElement("div", "proposal-card__context");

	context.appendChild(createTextElement("strong", label));
	context.appendChild(createTextElement("p", value));
	card.appendChild(context);

}

function createProposalCard(proposal) {

	const card = createElement("article", "proposal-card");
	const header = createElement("div", "proposal-card__header");
	const title = createTextElement("h3", proposal.title);
	const status = createTextElement(
		"span",
		getStatusLabel(proposal.status),
		`proposal-status proposal-status--${proposal.status}`
	);
	const sourceSop = loadSops().find(sop => sop.id === proposal.sourceSopId);
	const source = sourceSop
		? createTextElement("a", `${sourceSop.title} →`, "relationship-link")
		: createTextElement("p", "Пов’язаний SOP недоступний", "relationship-missing");
	const evidenceDetails = createElement("details", "proposal-card__evidence");
	const evidenceSummary = createTextElement("summary", "Докази та гіпотеза");
	const evidenceContent = createElement("div", "proposal-card__evidence-content");
	const meta = createTextElement(
		"small",
		`Створено: ${formatProposalDate(proposal.createdAt)}`,
		"proposal-card__date"
	);
	const actions = createElement("div", "proposal-card__actions");

	if (sourceSop) source.href = `sop.html#sop-${sourceSop.id}`;
	header.appendChild(title);
	header.appendChild(status);
	card.appendChild(header);
	card.appendChild(source);
	appendProposalContext(card, "Запропоноване покращення", proposal.suggestedImprovement);
	appendProposalContext(card, "Очікувана користь", proposal.expectedBenefit);
	evidenceContent.appendChild(createTextElement("p", proposal.hypothesisSummary));
	renderEvidence(evidenceContent, proposal.observedEvidence);
	evidenceContent.appendChild(
		createTextElement(
			"p",
			`Впевненість: ${getConfidenceLabel(proposal.confidence.level)}. ${proposal.confidence.basis}`
		)
	);
	evidenceDetails.appendChild(evidenceSummary);
	evidenceDetails.appendChild(evidenceContent);
	card.appendChild(evidenceDetails);
	card.appendChild(meta);

	if (proposal.reviewedAt) {

		card.appendChild(
			createTextElement(
				"small",
				`Розглянуто: ${formatProposalDate(proposal.reviewedAt)}`,
				"proposal-card__date"
			)
		);

	}

	if (proposal.decisionReason) {

		appendProposalContext(card, "Причина рішення", proposal.decisionReason);

	}

	if (proposal.status === "open") {

		const editButton = createTextElement("button", "Редагувати", "btn-secondary");
		const acceptButton = createTextElement("button", "Прийняти", "btn-primary");
		const rejectButton = createTextElement("button", "Відхилити", "btn-secondary proposal-card__reject");

		editButton.type = "button";
		acceptButton.type = "button";
		rejectButton.type = "button";
		editButton.addEventListener("click", () => openEditingForm(proposal));
		acceptButton.addEventListener("click", () => startDecision(proposal, "accepted"));
		rejectButton.addEventListener("click", () => startDecision(proposal, "rejected"));
		actions.appendChild(editButton);
		actions.appendChild(acceptButton);
		actions.appendChild(rejectButton);

	} else if (proposal.status === "accepted" && sourceSop) {

		const editSopButton = createTextElement("button", "Відкрити редактор SOP", "btn-primary");

		editSopButton.type = "button";
		editSopButton.addEventListener("click", () => {

			startAcceptedProposalSopEdit(proposal.id);

		});
		actions.appendChild(editSopButton);

	}

	if (actions.childElementCount) card.appendChild(actions);

	return card;

}

function renderProposals() {

	proposalList.replaceChildren();
	proposalEmptyState.classList.toggle("hidden", proposals.length > 0);

	if (proposals.length === 0) return;

	const searchable = proposals.map(proposal => ({
		...proposal,
		statusText: getStatusLabel(proposal.status),
		evidenceText: proposal.observedEvidence.map(item =>
			`${item.metric} ${item.observedValue}`
		).join(" ")
	}));
	const searched = filterCollection(
		searchable,
		["title", "sourceSopTitle", "hypothesisSummary", "suggestedImprovement", "expectedBenefit", "decisionReason", "statusText", "evidenceText"],
		proposalSearchQuery
	);
	const filtered = proposalStatus === "all"
		? searched
		: searched.filter(proposal => proposal.status === proposalStatus);

	if (filtered.length === 0) {

		proposalList.appendChild(
			createTextElement("p", "Пропозицій не знайдено.", "proposal-list__empty")
		);
		return;

	}

	filtered
		.sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
		.forEach(proposal => proposalList.appendChild(createProposalCard(proposal)));

}

proposalForm.addEventListener("submit", event => {

	event.preventDefault();
	const timestamp = new Date().toISOString();

	if (editingProposalId !== null) {

		const proposal = proposals.find(item => item.id === editingProposalId);

		if (!proposal || proposal.status !== "open") return;

		proposal.title = proposalTitle.value.trim();
		proposal.suggestedImprovement = proposalImprovement.value.trim();
		proposal.expectedBenefit = proposalBenefit.value.trim();
		proposal.updatedAt = timestamp;

	} else {

		const sop = loadSops().find(item => String(item.id) === proposalSop.value);

		if (!activeHypothesis || !sop) return;

		proposals.push({
			id: Date.now(),
			...createProposalTraceabilitySnapshot(activeHypothesis, sop),
			title: proposalTitle.value.trim(),
			suggestedImprovement: proposalImprovement.value.trim(),
			expectedBenefit: proposalBenefit.value.trim(),
			status: "open",
			decisionReason: "",
			createdAt: timestamp,
			updatedAt: timestamp,
			reviewedAt: null
		});

	}

	saveImprovementProposals(proposals);
	resetProposalForm();
	renderProposals();

});

proposalDecisionForm.addEventListener("submit", event => {

	event.preventDefault();
	const proposal = proposals.find(item => item.id === decisionProposalId);

	if (!proposal || proposal.status !== "open" || !pendingDecisionStatus) return;

	proposal.status = pendingDecisionStatus;
	proposal.decisionReason = proposalDecisionReason.value.trim();
	proposal.reviewedAt = new Date().toISOString();
	saveImprovementProposals(proposals);
	const acceptedId = proposal.status === "accepted" ? proposal.id : null;

	resetDecisionForm();
	renderProposals();

	if (acceptedId !== null) startAcceptedProposalSopEdit(acceptedId);

});

proposalCancelBtn.addEventListener("click", resetProposalForm);
proposalDecisionCancelBtn.addEventListener("click", resetDecisionForm);
proposalSearchInput.addEventListener("input", () => {

	proposalSearchQuery = proposalSearchInput.value.trim();
	renderProposals();

});
proposalStatusFilter.addEventListener("change", () => {

	proposalStatus = proposalStatusFilter.value;
	renderProposals();

});

renderProposals();
if (activeHypothesis) openCreationForm(activeHypothesis);
