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

Reproducible Windows/Edge invocation from the repository root:

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --no-first-run --allow-file-access-from-files --user-data-dir="$PWD\.edge-dialog-verification" --dump-dom 'file:///D:/Frontend/GitHub/Management-OS/execution-smoke-test.html'
```

`--allow-file-access-from-files` is required because this static prototype and its iframe test harness are loaded from `file://`; without it, Edge correctly blocks null-origin frame access. Verification used Microsoft Edge headless on Windows in a clean disposable profile.

- Desktop centering: PASS by inspected browser screenshot.
- Exact 390 px centering: PASS by bounding-rect assertions for both axes.
- Exact 390 px 20px side/top/bottom safety margins: PASS by bounding-rect assertions.
- Exact 390 px no horizontal modal overflow: PASS by `scrollWidth <= clientWidth` assertion and inspected screenshot.
- Native modal top-layer state (`:modal`): PASS.
- Focus enters title: PASS.
- Escape closes, creates no state, returns focus: PASS.
- Header close creates no state, clears abandoned values, returns focus: PASS through direct control click.
- Footer Cancel creates no state, clears abandoned values, returns focus: PASS through direct control click.
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
