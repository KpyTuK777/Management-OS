# Shared Modal Foundation — Design QA

- Implementation commit: `14e9a2e`
- Desktop visual evidence: `governance/evidence/SHARED_MODAL_FOUNDATION/01-add-material-desktop.png`
- Mobile visual evidence: `governance/evidence/SHARED_MODAL_FOUNDATION/02-add-material-390.png`
- Desktop test viewport: 1280 × 800 CSS px.
- Mobile test viewport: exact 390 × 844 CSS px inside a 450 × 900 artifact.
- State: Add Material opened from the Investigation Workbench through the shared modal foundation.

## Visual review

Desktop Add Material is centered on both axes with balanced surrounding space, restrained width, calm dimmed background, and clear form focus. The dialog reads as a deliberate interruption rather than a corner-attached technical panel.

At 390 px, the dialog remains centered within 20 px safe side margins, fits within vertical safety bounds, uses internal scrolling when necessary, and shows no horizontal overflow. The close and primary/secondary actions remain visible and readable.

## Shared coverage

The reusable geometry and interaction foundation is inherited by:

- New Investigation (`creationDialog`)
- Add Material (`materialDialog`)
- Add Hypothesis (`hypothesisDialog`)
- Edit Situation (`situationDialog`)

Both 390 × 844 and 1280 × 800 browser journeys assert for every dialog:

- native top-layer modality;
- horizontal and vertical centering within 1 px;
- at least 20 px safe margins on every edge;
- no horizontal modal overflow;
- marked-field autofocus;
- header close dismissal;
- footer Cancel dismissal;
- Escape dismissal;
- focus restoration to the invoker;
- repeated reopening;
- no stale `dialog:modal` overlay.

## Interaction and state review

- Shared close resets abandoned form values and custom validity.
- Dismissed Material, Hypothesis, and Situation dialogs leave Investigation state unchanged.
- Add Material submit still creates and persists the first user material.
- New Investigation remains empty and demo-free.
- Saved reopening, explicit demo isolation, and Historical Reader navigation remain passing.
- Optional overlay click was not added; native modal dismissal remains explicit through ×, Cancel, and Escape.

## Comparison history

1. Initial shared foundation: autofocus fallback selector returned the first close button because selector-list document order overrode intended priority. Corrected to explicitly prefer `[data-modal-autofocus]`.
2. Initial 390 Workbench run: `100vw` included the browser scrollbar gutter, reducing effective safe margins. Shared modal width and height now use layout-viewport percentages.
3. Final repeated runs at 390 × 844 and 1280 × 800: all four dialogs and all three dismissal paths passed.

## Residual findings

No P0, P1, P2, or attributable P3 finding remains.

final result: passed
