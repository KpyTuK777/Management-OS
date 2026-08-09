# Organization Lifecycle Correction — Implementation Evidence

Date: 2026-08-09

Finding: `EXP-001 — Organization lifecycle dead end — BLOCKER`

## Bounded correction

- The existing generation persistence remains the sole storage architecture.
- Each organization owns an independent locally generated workspace boundary and generation chain.
- The existing active pointer selects one validated organization generation.
- Creating a new organization commits a fresh `createEmptyState` containing only its organization root.
- Switching activates the latest validated generation for the selected organization.
- Renaming uses the existing governed element revision/history path.
- No deletion, archive, duplication, import/export, membership, authentication, backend, integration, or template behavior was added.

## Product interaction

The topbar now states “Зараз працюєте з” and exposes the active organization name as the natural context control. Its dialog provides:

- the available organizations with a human `Поточна` / `Перейти` distinction;
- `Нова організація`;
- `Редагувати назву` for the active organization.

All forms use the existing modal foundation. New and rename dialogs restore focus to the visible organization trigger. Technical IDs, keys, schema, and generation metadata are not shown.

## Acceptance journey

Runner: `tests/organization-lifecycle.browser.html`

Result: **PASS**, 20 assertions:

1. create and populate `Сонечко`;
2. create `Northstar Home` through the Product UI;
3. verify Northstar is genuinely empty and contains no `Сонечко` organizational content;
4. add an independent Northstar department;
5. switch A → B → A and verify isolation both ways;
6. rename Northstar to `Northstar Living`;
7. reload and restore the active renamed Northstar state;
8. switch after reload and re-check isolation;
9. preserve existing Investigation storage byte-for-byte;
10. verify desktop, laptop, and usable 390 px behavior;
11. verify a deliberately long organization name remains contained;
12. verify modal focus restoration.

## Persistence contracts

Runner: `tests/operating-model-repository.browser.html`

Result: **PASS**, including independent empty state, two-organization listing, switching, rename/reload, B-local relationship rejection without mutation, malformed-pointer recovery, and corrupted-generation recovery constrained to the active organization.

## Preserved regressions

- `tests/living-organizational-model.browser.html`: **PASS**.
- `tests/investigation-workbench.browser.html`: **PASS**.
- `tests/historical-reader-structural.browser.html`: **PASS**.
- `git diff --check`: **PASS**.

## Independent critical review

The reviewer confirmed normal lifecycle isolation and found four hardening issues. The final implementation:

- falls back deterministically when an active pointer is malformed while retaining same-workspace recovery when its generation is corrupt;
- restores child-dialog focus to the visible topbar trigger;
- exercises self-link and containment-cycle rejection with B-local governed identities;
- tests a long organization name and full trigger/dialog bounds at 390 px.

## Visual review

The desktop real-index capture shows the long active name truncated only in the compact context trigger while its full governed name remains readable on the organization node. The topbar, search, primary Add action, Map, and navigation retain their hierarchy without document overflow.
