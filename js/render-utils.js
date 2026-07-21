function createElement(tag, className = "") {

	const element = document.createElement(tag);

	if (className) element.className = className;

	return element;

}

function setText(element, text) {

	element.textContent = text ?? "";

	return element;

}

function createTextElement(tag, text, className = "") {

	return setText(createElement(tag, className), text);

}
