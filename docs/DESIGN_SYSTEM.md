# Design System

The current design system is implemented through CSS custom properties in `css/base.css` and imported through `css/style.css`.

## Typography

The interface uses the `Inter` font family when available. The base scale is:

| Token | Size | Typical use |
| --- | --- | --- |
| `--font-xl` | 40px | Page title (`h1`) |
| `--font-lg` | 32px | Section title (`h2`) |
| `--font-md` | 24px | Card title (`h3`) |
| `--font-base` | 16px | Body text and buttons |
| `--font-small` | 14px | Supporting text |

## Spacing

Spacing follows an 8px rhythm. Available tokens are `--space-8`, `--space-16`, `--space-24`, `--space-32`, `--space-40`, `--space-48`, and `--space-64`.

## Colors

| Purpose | Token |
| --- | --- |
| Primary action | `--primary` / `--primary-hover` |
| Application background | `--background` |
| Surface | `--surface` |
| Primary text | `--text` |
| Secondary text | `--text-secondary` |
| Border | `--border` |
| Semantic states | `--success`, `--warning`, `--danger` |

## Layout

The `.app` shell is a two-column grid with a 280px sidebar (`--sidebar-width`) and a fluid content area. The sidebar is sticky and the main content uses 40px padding. `.container` limits content width to 1440px when used.

## Buttons

`.btn-primary` is the implemented primary button. It uses the primary color, 10px radius, 12px × 20px padding, hover elevation, and an active state. Other button variants should be documented only when they are implemented.

## Cards

`.project-card` is the implemented reusable card pattern: surface background, border, 16px radius, spacing, and a small shadow. Supporting elements include `.project-card__header`, `.project-card__footer`, and `.project-status`.

## Forms

Portfolio forms use `.form-group` with native inputs and textareas. Hidden form state uses the `.hidden` utility class. New form components should reuse the existing spacing, colors, radius, and typography tokens.

## Naming conventions

- Use lowercase, hyphenated CSS class names.
- Use BEM-style element names where a component has internal parts: `.project-card__header`.
- Use state or utility classes for simple toggles: `.hidden`, `.active`.
- Prefer CSS custom properties for shared visual values instead of repeated literal values.
