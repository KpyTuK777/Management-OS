# Investigation Entry Hierarchy Bounded Correction — Implementation Evidence

Date: 2026-08-05  
Implementation commits: `9be7f34`, `855df04`

## Authorized correction

The existing start page was corrected so the new-Investigation path is compositionally primary and the three other entry paths read as supporting tools. Investigation creation, local persistence, explicit demo entry, Historical Walkthrough Reader navigation, and demo/user separation were preserved.

## Changed product surface

- `index.html`: autonomous primary entry block, separated supporting-tools section, human explanations, local-storage note.
- `css/investigation-workbench.css`: wide central composition, high-contrast primary action, quiet three-column supporting options, stacked 390 px behavior, safe gutters.
- `execution-smoke-test.html`: explicit start-page horizontal-overflow assertion.

## Browser evidence

- `01-start-wide.png`: 1620 × 980 rendered start page.
- `05-reference-comparison.png`: normalized side-by-side reference and wide implementation.
- `07-start-390-iframe.png`: 450 × 900 outer artifact containing an exact 390 × 844 CSS px responsive iframe render.
- `02-start-390.png`, `03-start-390-corrected.png`, `04-start-390-final.png`, `06-start-390-reviewed.png`: rejected top-level Edge captures retained as iteration evidence; Edge's minimum top-level layout width made them unsuitable for exact responsive judgment.

## Exact verification results

- Full entry smoke journey: PASS — start → create empty → add material → open saved through the rendered list → click explicit demo → verify separation → click Historical Reader.
- Cancel/close with valid creation values: PASS — no user Investigation storage created.
- Start-page horizontal overflow assertion: PASS.
- Empty Workbench collections: PASS for facts, unknowns, Evidence, hypotheses, Relationships, Timeline, and Working Set.
- Demo isolation after opening MAT-0247: PASS.
- Existing MAT-0247 Workbench browser journey: PASS.
- Wide visual comparison: PASS after inspection against the supplied reference.
- Exact 390 × 844 visual inspection: PASS after safe-gutter correction.
- `git diff --check`: PASS; line-ending conversion warnings only.

## Findings and corrections

- P2: primary and supporting actions previously read as one group. Corrected with an autonomous full-width CTA and a separate supporting-tools section.
- P2: initial top-level 390 capture appeared cropped. Added safe gutters and wrapping, then replaced the invalid top-level capture method with an exact 390 px iframe capture.
- P3: reference icons were not recreated because they are not required by the bounded hierarchy and no canonical icon asset was provided.

Disposition: implementation evidence supports release to human experiential review.
