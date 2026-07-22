# Design System

The design system begins with CSS custom properties in `CSS/base.css`. Shared
Sprint 6 presentation refinements and effective token overrides live in
`CSS/modernization.css`, which is imported last through `CSS/style.css`.

## Typography

The interface uses the `Inter` font family when available. The base scale is:

| Token | Size | Typical use |
| --- | --- | --- |
| `--font-xl` | `clamp(2rem, 3vw, 2.5rem)` | Page title (`h1`) |
| `--font-lg` | `clamp(1.5rem, 2vw, 1.75rem)` | Section title (`h2`) |
| `--font-md` | 1.125rem | Card title (`h3`) |
| `--font-base` | 16px | Body text and buttons |
| `--font-small` | 14px | Supporting text |

## Spacing

Spacing follows an 8px rhythm with 4px and 12px intermediate values. Available
tokens are `--space-4`, `--space-8`, `--space-12`, `--space-16`, `--space-24`,
`--space-32`, `--space-40`, `--space-48`, and `--space-64`.

## Colors

| Purpose | Token |
| --- | --- |
| Primary action | `--primary` / `--primary-hover` |
| Application background | `--background` |
| Surface | `--surface` |
| Primary text | `--text` |
| Secondary text | `--text-secondary` |
| Border | `--border` |
| Strong control border | `--border-strong` |
| Subtle selected surface | `--primary-soft` |
| Subtle neutral surface | `--surface-subtle` |
| Keyboard focus | `--focus-ring` |
| Semantic states | `--success`, `--warning`, `--danger` |

## Layout

The `.app` shell is a two-column grid with a 248px sidebar
(`--sidebar-width`) and a fluid content area. Main content is limited to 1440px and
uses responsive horizontal padding.

At 900px and below, the sidebar becomes a sticky horizontal navigation bar. At
650px and below, page headers, filters, operational grids, and dense controls
collapse into single-column layouts where appropriate.

Dashboard sections use the same 1440px content limit and a 40px vertical rhythm.
Operational content is ordered by importance, while prototype experiments remain
available in the visually secondary **Додатковий контекст** disclosure.

## Buttons

`.btn-primary` and `.btn-secondary` provide the shared action hierarchy. Controls
use a minimum 44px target height, 10px radius, concise labels, visible keyboard
focus, and restrained hover feedback. Destructive actions continue to use the
semantic danger treatment owned by their feature component.

## Cards

Operational cards share a surface background, border, effective 14px radius,
feature-appropriate spacing, and a small shadow. Hoverable cards strengthen their
border and shadow without introducing decorative movement.

Dashboard surfaces reuse the same background, border, `--radius-md`, 24px padding,
and `--shadow-sm`. Primary attention uses the existing warning color as a restrained
left-border accent; supporting cards do not introduce another visual language.

## Forms

Forms use `.form-group` with native inputs, selects, and textareas. Controls have a
minimum 44px height, a stronger default border, and a visible focus ring. Longer
forms are constrained to a readable width. Hidden form state uses the `.hidden`
utility class.

## Empty states

Empty states use a standard surface, dashed border, restrained minimum height, and
centered content. They state the current condition and, where useful, provide one
calm next action. Empty collections and empty search results must remain distinct.

## Accessibility

- All interactive controls require a visible `:focus-visible` state.
- Important state must not depend on color alone.
- Interactive targets use a minimum height of 44px where practical.
- Layouts must remain usable from a 320px viewport width.
- `prefers-reduced-motion` removes non-essential transition duration.
- Text and control contrast must be reviewed when semantic colors change.

## Execution states

Execution items use the existing semantic colors: success for completed items and
warning for skipped items. Progress combines a text count with a bar so state does
not depend on color alone. Finished execution cards use the standard surface,
border, radius, and shadow tokens.

## Naming conventions

- Use lowercase, hyphenated CSS class names.
- Use BEM-style element names where a component has internal parts: `.project-card__header`.
- Use state or utility classes for simple toggles: `.hidden`, `.active`.
- Prefer CSS custom properties for shared visual values instead of repeated literal values.
