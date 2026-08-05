# New Investigation Creation Dialog — Design QA

- Desktop implementation: `governance/evidence/INVESTIGATION_CREATION_DIALOG/01-desktop-centered.png`
- Mobile implementation: `governance/evidence/INVESTIGATION_CREATION_DIALOG/02-mobile-390.png`
- Desktop viewport: visible 1280 × 800 CSS px iframe in a 1280 × 800 artifact.
- Mobile viewport: fixed 390 × 844 CSS px iframe inside a 450 × 900 artifact.
- State: default start page with the New Investigation modal open and focus in the title field.

## Full-view evidence

The desktop capture shows a horizontally and vertically centered restrained-width modal, calm dimmed backdrop, strong but quiet title, two self-explanatory fields, and a clear primary/secondary action pair. It does not read as a drawer, alert, settings panel, or debug surface.

The exact 390 px capture shows 20 px safe side margins, balanced top and bottom space, no horizontal overflow, a full-width field stack, and actions that remain readable without crowding.

## Required fidelity surfaces

- Typography: existing Management OS editorial/sans pairing retained. Dialog heading is prominent without competing with the start-page hierarchy.
- Spacing: desktop and mobile modal geometry is balanced; field and footer rhythm is consistent.
- Colors: existing warm paper, dark ink, brass focus ring, and calm translucent overlay retained.
- Assets: no imagery or icons are required for this minimal bounded flow.
- Copy: only “Нове розслідування”, “Назва”, “Що відбувається?”, concise placeholders, “Скасувати”, and “Створити розслідування” remain.

## Interaction verification

- Primary entry action opens a native top-layer modal.
- Background content is protected by native `showModal()` modality.
- Focus enters `#creationTitle`.
- Escape closes without creating state and returns focus to the primary entry action.
- Close and Cancel clear abandoned values, create no state, and return focus.
- At 390 px, bounding-rect assertions verify horizontal and vertical centering plus 20 px minimum viewport margins; modal `scrollWidth <= clientWidth` verifies no internal horizontal overflow.
- Enter from the title field does not submit while the situation field is empty.
- Enter submits when both required fields are valid.
- Valid creation opens a genuinely empty Investigation with no demo content.
- First user material, local persistence, saved-state reopening, explicit demo isolation, and Historical Reader navigation remain passing.

## Comparison history

1. Initial implementation capture: visual centering and minimal copy passed on desktop and 390 px.
2. First interaction run: focus could not be observed because the test iframe was `hidden`. Replaced it with a rendered off-screen 390 × 844 iframe.
3. Second interaction run: deterministic focus return after Escape failed. Added an explicit close helper that returns focus.
4. Third interaction run: Cancel retained prior values, making a later invalid-Enter scenario appear valid. Cancel/Escape now reset abandoned form values and custom validity.
5. Final repeated browser journey: passed with all modal, keyboard, empty-state, persistence, saved, demo, and Historical Reader assertions.

## Residual findings

No P0, P1, P2, or attributable P3 finding remains.

final result: passed
