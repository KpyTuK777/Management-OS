# Investigation usability polish — implementation evidence

Date: 2026-08-05

Implementation commit: `0316b9a`

## Implemented boundary

- Shared short-form modal behavior: Enter requests the form's primary submit; Shift+Enter inserts a newline in textareas.
- Native form validation remains authoritative, so invalid Enter does not create or change Investigation state.
- A `data-long-form` escape hatch preserves ordinary multiline behavior for future genuinely long-form dialogs.
- Visible Investigation assistant language is now Watson; internal identifiers were deliberately left unchanged.
- Watson's dormant state explicitly says that it does not analyze materials yet. No AI behavior was added.

## Exact browser verification

Headless Microsoft Edge, local files, fresh browser-local profiles:

- 390 × 844: `PASS: start → create empty → add material → open saved → demo separation → Historical Reader`
- 1280 × 800: `PASS: start → create empty → add material → open saved → demo separation → Historical Reader`

The journey asserts:

- invalid Enter stays open and creates no state;
- IME composition Enter is ignored and cannot submit accidentally;
- Shift+Enter inserts exactly one newline and does not submit;
- the long-form escape hatch bypasses short-form Enter submission;
- Enter submits valid New Investigation, Add Material, Add Hypothesis, and Edit Current Situation forms;
- close icon, Cancel, and Escape dismiss every current modal and restore focus;
- each modal can be reopened repeatedly without a stale overlay;
- Watson title and honest unavailable copy render, with no visible legacy `Інспектор` label;
- user-created data persists and restores while MAT-0247 remains isolated;
- Historical Reader navigation still works.

## Visual evidence

- `watson-desktop.png`: Watson dormant state within the desktop Workbench.
- `workbench-390.png`: the pre-existing Workbench at 390 px, retained as a visual context record rather than evidence of full Workbench responsiveness. Exact-width claims here concern the bounded modal/keyboard journey, not a redesign of the legacy Workbench layout.

## Findings and corrections

1. The creation form had a one-off Enter handler while other dialogs retained textarea defaults. Replaced it with one shared modal keyboard policy.
2. Shift+Enter needed explicit handling because plain Enter is now reserved for the primary action. Added caret-aware newline insertion and an input event.
3. The previous unavailable panel implied inspection behavior. Replaced it with an explicit dormant-capability boundary and stronger but restrained hierarchy.

No canonical Product, Interaction, Engineering, persistence, or AI capability meaning changed.
