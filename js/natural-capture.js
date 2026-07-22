const NaturalCapture = (() => {

	const states = Object.freeze({
		EMPTY: "empty",
		EDITING: "editing",
		REVIEWING: "reviewing"
	});

	const capture = {
		originalText: "",
		currentText: "",
		state: states.EMPTY,
		createdAt: null,
		lastEditedAt: null,
		reviewed: false
	};

	let elements;
	let isDiscarding = false;

	function hasMeaningfulText(value = capture.currentText) {

		return value.trim().length > 0;

	}

	function announce(message) {

		elements.announcement.textContent = "";

		window.requestAnimationFrame(() => {

			elements.announcement.textContent = message;

		});

	}

	function render() {

		const isReviewing = capture.state === states.REVIEWING;
		const hasText = hasMeaningfulText();

		elements.captureSection.classList.toggle("hidden", isReviewing);
		elements.reviewSection.classList.toggle("hidden", !isReviewing);
		elements.reviewButton.disabled = !hasText;
		elements.state.textContent = hasText ? "Тимчасове введення" : "Не збережено";

		if (isReviewing) {

			elements.reviewText.textContent = capture.currentText;

		}

	}

	function handleInput() {

		const value = elements.input.value;
		const now = new Date().toISOString();

		if (!capture.createdAt && hasMeaningfulText(value)) {

			capture.createdAt = now;

		}

		capture.currentText = value;
		capture.lastEditedAt = now;
		capture.reviewed = false;
		capture.state = hasMeaningfulText(value) ? states.EDITING : states.EMPTY;

		if (capture.state === states.EMPTY) {

			capture.originalText = "";
			capture.createdAt = null;

		}

		render();

	}

	function reviewCapture() {

		if (!hasMeaningfulText()) return;

		capture.currentText = elements.input.value;

		if (!capture.originalText) {

			capture.originalText = capture.currentText;

		}

		capture.state = states.REVIEWING;
		capture.reviewed = true;

		render();
		elements.reviewSection.focus();
		announce("Тимчасове введення готове до перегляду. Текст не інтерпретовано і не збережено постійно.");

	}

	function continueEditing() {

		capture.state = states.EDITING;
		capture.reviewed = false;

		render();
		elements.input.focus();
		elements.input.setSelectionRange(elements.input.value.length, elements.input.value.length);
		announce("Редагування тимчасового введення продовжено.");

	}

	function requestDiscard() {

		if (!hasMeaningfulText()) {

			resetCapture();
			return;

		}

		elements.discardDialog.showModal();
		window.requestAnimationFrame(() => elements.keepButton.focus());

	}

	function keepCapture() {

		elements.discardDialog.close();

	}

	function resetCapture() {

		capture.originalText = "";
		capture.currentText = "";
		capture.state = states.EMPTY;
		capture.createdAt = null;
		capture.lastEditedAt = null;
		capture.reviewed = false;
		elements.input.value = "";

		render();
		elements.input.focus();
		announce("Тимчасове введення відкинуто.");

	}

	function confirmDiscard() {

		isDiscarding = true;
		elements.discardDialog.close();
		resetCapture();
		isDiscarding = false;

	}

	function handleDialogClose() {

		if (!isDiscarding && capture.state === states.REVIEWING) {

			elements.discardButton.focus();

		}

	}

	function warnBeforeLeaving(event) {

		if (!hasMeaningfulText()) return;

		event.preventDefault();
		event.returnValue = "";

	}

	function getElements() {

		return {
			captureSection: document.getElementById("naturalCapture"),
			input: document.getElementById("naturalCaptureInput"),
			state: document.getElementById("naturalCaptureState"),
			reviewButton: document.getElementById("naturalCaptureReviewButton"),
			announcement: document.getElementById("naturalCaptureAnnouncement"),
			reviewSection: document.getElementById("naturalCaptureReview"),
			reviewText: document.getElementById("naturalCaptureReviewText"),
			editButton: document.getElementById("naturalCaptureEditButton"),
			discardButton: document.getElementById("naturalCaptureDiscardButton"),
			discardDialog: document.getElementById("naturalCaptureDiscardDialog"),
			keepButton: document.getElementById("naturalCaptureKeepButton"),
			confirmDiscardButton: document.getElementById("naturalCaptureConfirmDiscardButton")
		};

	}

	function init() {

		elements = getElements();

		if (Object.values(elements).some(element => !element)) return;

		elements.input.addEventListener("input", handleInput);
		elements.reviewButton.addEventListener("click", reviewCapture);
		elements.editButton.addEventListener("click", continueEditing);
		elements.discardButton.addEventListener("click", requestDiscard);
		elements.keepButton.addEventListener("click", keepCapture);
		elements.confirmDiscardButton.addEventListener("click", confirmDiscard);
		elements.discardDialog.addEventListener("close", handleDialogClose);
		window.addEventListener("beforeunload", warnBeforeLeaving);

		render();

	}

	return { init };

})();

NaturalCapture.init();
