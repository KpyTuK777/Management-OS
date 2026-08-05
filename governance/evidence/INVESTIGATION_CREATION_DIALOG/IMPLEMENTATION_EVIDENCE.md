# New Investigation Creation Dialog — Implementation Evidence

Date: 2026-08-05  
Implementation commit: `e5160eb`

## Bounded correction

The creation dialog was reduced to a minimal two-field form and explicitly centered as a native modal. Investigation data semantics, empty creation, local persistence, saved opening, demo isolation, and Historical Reader routing were preserved.

## Changed files

- `index.html`: minimal title, labels, placeholders, and action copy.
- `css/investigation-workbench.css`: creation-dialog-only centered geometry, restrained width, safe viewport bounds, premium spacing and overlay.
- `js/investigation-workbench.js`: first-field focus, Escape/Enter behavior, deterministic focus return, abandoned-value reset.
- `execution-smoke-test.html`: rendered 390 px test surface and keyboard/focus/modal assertions.

## Visual evidence

- `01-desktop-centered.png`: 1280 × 800 desktop centered-modal render.
- `02-mobile-390.png`: 450 × 900 artifact containing an exact 390 × 844 modal render.

## Exact verification

- Desktop centering: PASS.
- Exact 390 px safe margins and no visible horizontal overflow: PASS.
- Native modal top-layer state (`:modal`): PASS.
- Focus enters title: PASS.
- Escape closes, creates no state, returns focus: PASS.
- Cancel/close creates no state, clears abandoned values, returns focus: PASS.
- Invalid Enter remains open and creates no state: PASS.
- Valid Enter creates an Investigation: PASS.
- New Investigation required collections remain empty: PASS.
- First material and local persistence: PASS.
- Rendered saved-record reopening: PASS.
- Explicit demo selection and separation: PASS.
- Historical Reader navigation: PASS.
- Complete browser journey: `PASS: start → create empty → add material → open saved → demo separation → Historical Reader`.
- `git diff --check`: PASS; line-ending warnings only.

## Findings and corrections

- Blocking UX: tutorial-like heading and explanatory paragraph. Removed.
- Blocking UX: modal placement was not explicitly constrained. Added fixed top-layer centering with balanced viewport bounds.
- Interaction finding: focus verification was impossible with a hidden iframe. Test surface changed to a rendered off-screen iframe.
- Interaction finding: focus return was not deterministic after synthetic Escape. Added explicit focus restoration.
- Interaction finding: Cancel retained abandoned input. Cancel/Escape now reset form state.

Disposition: ready for independent critical review.
