# Organization System Experience Correction — Implementation Evidence

Date: 2026-08-09

## Bounded implementation

- Structure is rendered as an organization root, connected department branches, and contained roles where present.
- Department Workbench preserves organization context and provides one compact sibling switcher.
- Work and Flow render only the already-governed relationship families relevant to their human questions.
- Inspector is removed from the layout until context is selected, restores full width on close, and replaces raw relationship totals with organizational facts.
- Ordinary creation defaults the canonical `known` qualification and exposes alternative knowledge states under “Що ми про це знаємо?”.
- Relationship storage families, element identities, persistence, history, Investigation non-promotion, and Improvement separation were not changed.

## Real-browser verification

Runner: `tests/living-organizational-model.browser.html`

Browser: Microsoft Edge headless, real `index.html`, local file access enabled, isolated browser profile.

Result: **PASS**, 32 assertions. The journey creates a six-department organization, verifies the connected hierarchy, Work inventory, a directional Flow handoff at 390 px, direct department switching, optional knowledge-state qualification, process and role projections, Improvement separation, reload persistence, human Inspector summaries, full-width recovery, Investigation preservation and non-promotion, and document-width equality at normal and 390 px iframe widths.

Additional regressions:

- `tests/operating-model-repository.browser.html`: **PASS**.
- `tests/investigation-workbench.browser.html`: **PASS**.
- `tests/historical-reader-structural.browser.html`: executed without a reported failure; no Historical Reader code changed.
- `git diff --check`: **PASS**.

## Visual review

The desktop capture of the real seeded application showed one organization root connected to six department branches without the Inspector consuming workspace width. Laptop and narrow behavior remain governed by the responsive layout and the real-entry measured overflow assertion. Edge's narrow headless screenshot can physically crop below its effective minimum window width; it is not treated as width evidence.

## Preservation evidence

The browser journey keeps a pre-existing Investigation sentinel byte-for-byte unchanged, confirms inherited organization context remains `promoted: false`, creates no Evidence Working Set or Hypothesis material, and confirms an Improvement does not mutate current governed elements.

## Independent critical review and corrections

An independent reviewer found that the first pass made Work relationship-led, counted non-department endpoints as department interactions, could show an empty Inspector relationship section, and hid Flow arrows at 390 px. The final correction adds governed work inventory and active-work summaries, filters the department interaction fact to department endpoints, gates the Inspector section on visible work relationships, and preserves a vertical source → handoff → destination sequence on narrow screens. The final browser journey explicitly covers Work inventory and the 390 px Flow sequence.
