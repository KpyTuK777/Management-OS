# Creation modal placeholder removal — implementation evidence

Date: 2026-08-05

## Bounded correction

- Removed the placeholder attribute from `Назва`.
- Removed the placeholder attribute from `Що відбувається?`.
- Added no replacement helper text, example, hint, description, tooltip, or instructional copy.
- Preserved modal title, visible labels, close control, Cancel, primary action, shared modal behavior, persistence, and state separation.

## Exact browser verification

Headless Microsoft Edge with fresh browser-local profiles:

- 390 × 844: `PASS: start → create empty → add material → open saved → demo separation → Historical Reader`
- 1280 × 800: `PASS: start → create empty → add material → open saved → demo separation → Historical Reader`

The journey explicitly asserts:

- neither creation field has a `placeholder` attribute;
- both controls retain exactly one associated label;
- focus enters `Назва`;
- invalid Enter leaves the required form open and creates no state;
- Shift+Enter inserts a newline without submission;
- valid Enter creates a genuinely empty Investigation;
- close icon, Cancel, Escape, and focus restoration continue to work;
- user persistence remains isolated from MAT-0247 demo data.

## Visual evidence

- `creation-modal-desktop.png`: centered empty creation form at 1280 × 800.
- `creation-modal-390.png`: centered empty creation form inside an exact 390 × 844 content viewport.

Both captures show balanced field geometry without placeholder copy, safe viewport margins, visible labels, and intact actions.
