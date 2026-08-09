# Organization Map Spatial Scroll Refinement — Implementation Evidence

Date: 2026-08-09

## Bounded refinement

- Structure now projects the existing active `containment` relationships recursively instead of stopping after organization → department → role.
- The hierarchy uses readable fixed-minimum node widths and a natural `max-content` spatial width.
- Horizontal and vertical overflow are owned by `#organizationMap`; the application document, sidebar, topbar, and Inspector remain bounded.
- The initial Structure render centers the organization root. Search selection explicitly centers the governed result inside the Map viewport.
- Departments without containment remain visibly separated as unplaced items; no hierarchy meaning is inferred.
- No domain schema, relationship family, identity, persistence, history, Investigation, or Improvement semantics changed.

## Large fixture

The real-entry journey creates:

- 15 sibling departments directly contained by the organization;
- a nested department inside `Операційний відділ`;
- a further nested team;
- a role contained by that team;
- an information handoff and the existing process/role/Improvement/Investigation regression material.

## Browser verification

Runner: `tests/living-organizational-model.browser.html`

Browser: Microsoft Edge headless with local-file access, real `index.html`, isolated profile.

Result: **PASS**, 39 assertions, including:

- fifteen siblings remain on one spatial level;
- seventeen departments render recursively;
- the three-level nested branch contains its role;
- Map `scrollWidth > clientWidth` and programmatic horizontal navigation succeeds;
- document `scrollWidth === clientWidth` while the Map pans;
- search focuses a nested department in both Map and Inspector;
- search navigates horizontally to a distant department;
- Inspector closes and restores workspace width;
- desktop, laptop, and 390 px organization behavior remains bounded;
- 390 px exposes a scrollable Map without claiming the full hierarchy fits;
- persistence/reload, Investigation non-promotion, and Improvement separation remain intact.

## Visual review

Desktop and laptop captures show the organization root centered above a continuous sibling connector, readable department cards, and Map-owned horizontal/vertical scrollbars. The visible partial branches at the canvas edges communicate additional spatial content. The narrow capture shows an honest window into the same readable hierarchy rather than compressed nodes or an artificial single-column rewrite.

## Correction found during verification

The larger fixture exposed a pre-existing projection timing defect: after adding a second role, the Role Workbench could continue showing the first role because repository notification rendered before `selectedId` changed. Creation now re-renders the active projection after assigning the governed identity; no persistence or domain behavior changed.
