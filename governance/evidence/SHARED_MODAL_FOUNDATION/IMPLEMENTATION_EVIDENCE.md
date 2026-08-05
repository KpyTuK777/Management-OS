# Shared Reusable Modal Foundation — Implementation Evidence

Date: 2026-08-05  
Implementation commit: `14e9a2e`

## Bounded correction

All editable Investigation dialogs now inherit one reusable modal interaction and geometry model. No individual dialog-specific close patch was introduced.

## Foundation behavior

- `openModal(dialog, invoker)` records the invoking control, uses native `showModal()`, and focuses the explicitly marked first field.
- `closeModal(dialog)` resets abandoned form state and custom validity, closes the top-layer modal, and restores focus.
- `bindModalFoundation()` supplies shared ×, Cancel, Escape, close-event, and repeated-use behavior.
- Shared CSS centers every open dialog using fixed positioning, `inset: 0`, auto margins, restrained width, layout-viewport-safe bounds, overlay dimming, and internal scrolling.

## Corrected modal list

- New Investigation
- Add Material
- Add Hypothesis
- Edit Situation

## Changed files

- `index.html`
- `css/investigation-workbench.css`
- `js/investigation-workbench.js`
- `execution-smoke-test.html`

## Reproducible browser verification

From the repository root, with a clean disposable profile:

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --no-first-run --allow-file-access-from-files --user-data-dir="$PWD\.edge-modal-mobile" --dump-dom 'file:///D:/Frontend/GitHub/Management-OS/execution-smoke-test.html'
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --no-first-run --allow-file-access-from-files --user-data-dir="$PWD\.edge-modal-desktop" --dump-dom 'file:///D:/Frontend/GitHub/Management-OS/execution-smoke-test.html?viewport=desktop'
```

The file-access flag is required for this static `file://` iframe test harness.

## Exact results

- 390 × 844 complete shared-modal stress journey: PASS.
- 1280 × 800 complete shared-modal stress journey: PASS.
- Four dialogs opened as native `:modal`: PASS.
- Four dialogs centered on both axes within 1 px: PASS.
- Four dialogs preserve 20 px margins on all edges: PASS.
- Four dialogs have no horizontal overflow: PASS.
- Marked-field autofocus for every dialog: PASS.
- Header × for every dialog: PASS.
- Footer Cancel for every dialog: PASS.
- Escape for every dialog: PASS.
- Focus restoration for every dismissal: PASS.
- Three consecutive open/dismiss cycles per editable Workbench dialog: PASS.
- No stale overlay or frozen state after dismissal: PASS.
- Dismissed Material/Hypothesis/Situation state unchanged: PASS.
- Add Material submit and local persistence: PASS.
- Empty Investigation and demo isolation: PASS.
- Complete entry journey: PASS.
- `git diff --check`: PASS; line-ending warnings only.

## Visual evidence

- `01-add-material-desktop.png`: centered Add Material at 1280 × 800.
- `02-add-material-390.png`: 450 × 900 artifact containing exact 390 × 844 Add Material render.

## Findings and corrections

- Blocking: editable dialogs inherited inconsistent corner-attached geometry. Replaced by shared fixed centering and safe bounds.
- Blocking: Add Material × was an implicit submit control blocked by required-field validation. Normalized all × and Cancel controls to `type="button" data-modal-close`.
- Interaction: shared autofocus initially selected the close button. Corrected explicit autofocus priority.
- Responsive: viewport units included scrollbar gutter. Corrected shared bounds to layout-viewport percentages.

Disposition: ready for independent critical review.
