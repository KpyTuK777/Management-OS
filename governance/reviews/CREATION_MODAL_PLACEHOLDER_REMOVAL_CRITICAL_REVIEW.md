# Creation modal placeholder removal — independent critical review

Date: 2026-08-05

Reviewed commits: implementation `7cfde9c`, evidence `d642d41`

## Disposition

**ACCEPT.** P0 0, P1 0, P2 0, P3 0. No blocking or attributable non-blocking product findings and no scope drift.

## Verified implementation

- Both creation controls have no placeholder attribute.
- The exact title, visible labels, close accessible name, Cancel, and primary action remain.
- Each control remains structurally nested in one visible label; browser assertions confirm one associated label per control.
- `required`, maximum lengths, autofocus, shared modal geometry, Enter/Shift+Enter, Escape, dismissal, and focus restoration remain intact.
- Valid submission still creates a genuinely empty Investigation and does not inherit demo state.

## Evidence assessment

- Browser assertions directly cover placeholder absence and label association.
- The complete journey passes at 390 × 844 and 1280 × 800.
- Desktop and exact-width mobile captures show visually balanced empty controls, centered geometry, safe margins, and intact actions.
- The mobile evidence canvas includes unused space outside the explicitly bounded 390 px iframe; this does not affect the verified content viewport and is not a product finding.

Repository checks at review time: `git diff --check` passed; worktree clean.
