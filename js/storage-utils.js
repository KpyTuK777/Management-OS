function getStorageItem(key, defaultValue) {

	const data = localStorage.getItem(key);

	return data === null ? defaultValue : JSON.parse(data);

}

function setStorageItem(key, value) {

	localStorage.setItem(key, JSON.stringify(value));

}
