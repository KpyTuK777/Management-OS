# New Investigation Creation Dialog — Independent Critical Review

Date: 2026-08-05  
Final disposition: **APPROVE**

## Reviewed scope

- Implementation commit: `e5160eb`
- Evidence commit: `f40ce17`
- Review correction commit: `415b6cc`
- Minimal creation copy, modal geometry, desktop and exact 390 px evidence, keyboard/focus lifecycle, empty creation, persistence, and demo isolation.

## First-pass disposition

**APPROVE WITH CORRECTIONS**

- P2: browser PASS was not independently reproducible because the required Edge file-access flag and environment were not documented.
- P3: geometry and overflow were visually supported but not asserted in the browser journey.
- P3: the test exercised the header close control but evidence also claimed direct Footer Cancel coverage.

No implementation-level blocker was found. Minimal copy, visual centering, native modality, and Investigation state behavior were acceptable.

## Corrections reviewed

- Evidence documents the exact Windows Edge invocation and why `--allow-file-access-from-files` is required for the static `file://` iframe harness.
- The 390 × 844 test surface asserts horizontal and vertical centering within 1 px.
- It asserts at least 20 px safe margins on every viewport edge.
- It asserts `scrollWidth <= clientWidth` for the open modal.
- Header close and footer Cancel are clicked separately, each with no-state and focus-return assertions.

## Final findings

- P0: none.
- P1: none.
- P2: none.
- P3: none.

## Final verification disposition

- Minimal human-first copy: approved.
- Desktop centered composition: approved.
- Exact 390 px centered composition and safe margins: approved.
- Native modality and background isolation: approved.
- Focus entry, Escape, Close, Cancel, and focus return: approved.
- Invalid and valid Enter behavior: approved.
- Empty Investigation creation: approved.
- Local persistence and saved reopening: approved.
- Demo/user separation: approved.
- Evidence accuracy and reproducibility: approved after correction.

No attributable blocking or non-blocking correction remains.
