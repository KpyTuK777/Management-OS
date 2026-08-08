# Investigation P1 live-usage corrections — implementation evidence

Date: 2026-08-05

## Implemented boundary

- Increased practical sizes for Investigation header metadata, card provenance, semantic statuses, hypothesis support metadata, relationships, timeline metadata, Working Set guidance, Watson secondary text, and capability-boundary text.
- Made `Короткий зміст` optional while retaining required validation for material title and source.
- Empty descriptions persist honestly as an empty string and do not render a blank description block.
- Replaced generated two-letter material abbreviations with type-specific inline SVG icons.
- Added human-readable Photo, Video, and Audio type choices and matching icons without adding file attachment behavior.
- Each material icon exposes the full type through an accessible name.

## Verification status

- `git diff --check`: PASS.
- Static source inspection: PASS for optional description, absence of abbreviation generation, SVG icon mapping, accessible icon naming, increased metadata sizes, and bounded P2 record.
- Automated journey assertions were extended to cover optional empty-description creation and persistence, required-field protection, SVG-only icon slots, icon accessible naming, demo icon rendering, media type choices, and 12 px material provenance.
- Browser execution at 390 × 844 and 1280 × 800: **BLOCKED BY ENVIRONMENT**. The managed runner rejected headless Edge because its external usage quota was exhausted until 2026-08-08 08:44. No browser PASS is claimed for this change.
- JavaScript runtime syntax check: **BLOCKED BY ENVIRONMENT** because Node.js is unavailable. The changed JavaScript was reviewed structurally instead.

The most recent pre-change full browser baseline passed both exact viewports in commit `7cfde9c`; this is background context only and not presented as post-change verification.

## P2 boundary

Future findings are recorded in `governance/retrospectives/INVESTIGATION_LIVE_USAGE_FINDINGS_2026-08-05.md`. No filtering, attachments, native viewers, Watson information-model change, or Working Set redesign was implemented.
