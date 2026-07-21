# Data Model

## Project

Projects are stored as objects in an array.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated with `Date.now()`. |
| `name` | string | Required project name. |
| `description` | string | Project description. |
| `status` | string | Current project state; new projects default to `Активний`. |
| `progress` | number | Progress percentage; new projects default to `0`. |
| `createdAt` | string | Creation date formatted with the Ukrainian locale. |

## Browser storage

The complete project array is serialized as JSON in browser `localStorage`.

| Key | Value |
| --- | --- |
| `projects` | Array of Project objects |

Storage access is implemented in `js/storage.js`.
