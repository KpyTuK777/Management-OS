# Investigation Entry Hierarchy — Design QA

- Source visual truth: `C:\Users\serge\OneDrive\Рабочий стол\ChatGPT Image 5 серп. 2026 р., 10_03_46.png`
- Wide implementation: `governance/evidence/INVESTIGATION_ENTRY_HIERARCHY/01-start-wide.png`
- Exact responsive implementation: `governance/evidence/INVESTIGATION_ENTRY_HIERARCHY/07-start-390-iframe.png`
- Combined comparison: `governance/evidence/INVESTIGATION_ENTRY_HIERARCHY/05-reference-comparison.png`
- Wide viewport: 1620 × 980 CSS px, device scale 1; source normalized from 1647 × 987 to 1635 × 980 for the combined comparison.
- Mobile viewport: exact 390 × 844 CSS px inside a visible iframe; top-level Edge screenshots were rejected because headless Edge imposed a wider minimum layout viewport.
- State: default start page, no saved Investigation list expanded.

## Full-view comparison evidence

The combined source/implementation image confirms the intended, non-literal hierarchy: editorial orientation first, one autonomous dark primary entry block, a clearly separated supporting-tools section, and a final local-storage note. Existing Management OS tokens and typography are retained.

## Focused responsive evidence

The 390 × 844 iframe capture was inspected at original resolution. The primary action remains first and dominant; all three supporting tools stack; copy wraps within the viewport; no horizontal overflow is present; the privacy note remains visible without competing with the workflow.

## Required fidelity surfaces

- Fonts and typography: existing Georgia/Management OS editorial stack retained; display hierarchy and optical weight follow the reference direction without claiming a new font canon.
- Spacing and layout rhythm: strong central composition, controlled whitespace, explicit divider before supporting tools, and responsive vertical stacking.
- Colors and tokens: existing warm paper, dark wood, brass, and ink tokens retained. No new canonical palette introduced.
- Image and asset fidelity: the reference contains optional line icons. They were intentionally omitted rather than approximated with custom SVG/CSS/glyph assets; hierarchy does not depend on them.
- Copy and content: primary purpose, primary action, supporting purpose statements, and local-only persistence are all human-readable and explicit.

## Comparison history

1. Initial wide pass: no P0/P1 findings. The primary action and secondary tools were materially separated as required.
2. Initial 390 top-level capture: apparent P2 right-edge crop on the CTA and long descriptions. Added mobile safe gutters and explicit wrapping.
3. Repeated top-level capture retained the crop because Edge headless used a minimum top-level layout width. The browser journey's scroll-width assertion passed, identifying the capture method as the remaining mismatch.
4. Final exact 390 iframe capture: safe gutters, wrapping, vertical tool stack, and privacy note all render correctly. No actionable P0/P1/P2 remains.

## Interaction verification

- Default entry renders the start page, not MAT-0247.
- Primary action opens the bounded creation dialog.
- Closing with valid values creates no Investigation.
- Native submit creates an empty Investigation.
- First material persists and restores.
- Saved Investigation opening remains available.
- Explicit demo route preserves MAT-0247 without user-state contamination.
- Historical reader link remains `historical-reader.html`.
- Console/runtime blocking errors: none observed in the browser journeys.

## Residual P3

No iconography was added. If canonical start-page icons are later authorized, they may improve scanning, but they are not required for the corrected hierarchy.

final result: passed
