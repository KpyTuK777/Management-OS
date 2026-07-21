# Development

## Run the project

1. Open the repository folder in Visual Studio Code.
2. Install the VS Code **Live Server** extension if it is not already available.
3. Open `index.html` or `portfolio.html`.
4. Start Live Server and use the browser URL it provides.

The project can also be opened directly in a modern browser, although Live Server is recommended during development.

## Tooling

- No package manager is required.
- No build tools are used.
- No dependencies are installed.
- No backend service is required.

## Browser requirements

Use a current version of Chrome, Edge, Firefox, or Safari with JavaScript and `localStorage` enabled.

## Project conventions

- Keep application UI text in Ukrainian; see [UI Language](UI_LANGUAGE.md).
- Keep CSS concerns separated by the files described in [Architecture](ARCHITECTURE.md).
- Keep browser persistence behind `js/storage.js`.
- Keep one responsibility per JavaScript module and avoid duplicating UI logic.
- Use 8px-based spacing and existing CSS variables where applicable.
