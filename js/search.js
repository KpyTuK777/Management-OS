function filterCollection(collection, fields, query) {

	const normalizedQuery = String(query ?? "").toLowerCase();

	return collection.filter(item => {

		return fields.some(field =>
			String(item?.[field] ?? "")
				.toLowerCase()
				.includes(normalizedQuery)
		);

	});

}
