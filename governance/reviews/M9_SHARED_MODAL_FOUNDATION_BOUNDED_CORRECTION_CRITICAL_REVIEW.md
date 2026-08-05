# Shared Reusable Modal Foundation — Independent Critical Review

Date: 2026-08-05  
Final disposition: **APPROVE**

## Reviewed scope

- Implementation commit: `14e9a2e`
- Evidence commit: `4c8f696`
- Shared HTML modal contract, CSS geometry, JavaScript lifecycle, desktop and exact 390 px journeys, visual captures, state integrity, and evidence reproducibility.

## Architecture validation

The correction is genuinely shared:

- one `openModal` function;
- one `closeModal` function;
- one `bindModalFoundation` function;
- one `data-modal-close` / `data-modal-autofocus` contract;
- one shared `dialog` geometry and backdrop model.

No Add Material-specific close or positioning patch was introduced.

## Corrected modal inventory

- New Investigation
- Add Material
- Add Hypothesis
- Edit Situation

## Findings

- P0: none.
- P1: none.
- P2: none.
- P3: none.

## Verified behavior

- Native top-layer modality and background isolation: approved.
- Horizontal and vertical centering: approved at 390 × 844 and 1280 × 800.
- 20 px safe margins on every viewport edge: approved.
- Restrained width, internal scrolling, and no horizontal overflow: approved.
- Marked-field autofocus: approved.
- Header ×, footer Cancel, and Escape: approved for every dialog.
- Focus restoration to the invoker: approved for every dismissal path.
- Three repeated open/dismiss cycles per Workbench dialog: approved.
- No stale overlay or frozen application state: approved.
- Add Material × root-cause fix (`type="button"`): approved.
- Dismissed dialog state integrity: approved.
- Add Material persistence, empty Investigation, saved reopening, and demo isolation: approved.
- Visual evidence and reproducible invocation: approved.

Optional overlay-click dismissal remains intentionally unsupported and documented.

No attributable blocking or non-blocking correction remains.
