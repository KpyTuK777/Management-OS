# Living Organizational Model broad implementation execution contract

## Contract state

- Scope basis: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_BROAD_IMPLEMENTATION_SCOPE_AND_RECONCILIATION.md` at commit `83f46a02a52f4e8f5d6996814c581d40d341b147`, blob `a7e0669ae3acf817078832842114076398467f8a`
- Engineering authority: adopted at commit `729163ece6d58789fbdde826768e3e38c77f6fec`
- Purpose: define a bounded future autonomous execution and its verification obligations
- Current implementation authority: NONE

If later adopted through a separate Implementation Authority Decision, this contract authorizes only the maximum coherent READY scope and the explicitly bounded PARTIAL subsets in the scope reconciliation.

## 1. Product outcome and execution unit

The execution unit is one broad local materialization that makes Management OS organization-first and substantially usable in Live Server. It must deliver a coherent shell, Living Organizational Model, Constructor, Map, Workbenches, operational modelling, contextual Investigation/Improvement entry, Memory references, persistence, migration, recovery, search, responsive behavior, accessibility baseline, verification evidence, critical review, corrections, and a clean handoff.

The executor may sequence work internally by dependency, but governance does not require approval per screen, component, refactor, style choice, test, or commit while choices stay within this contract.

## 2. Permitted implementation areas

Writes are limited by purpose, not an exhaustive filename list:

- root application HTML entry points needed for the integrated Management OS experience;
- `css/` for application layout, components, responsive behavior, accessibility, and visual continuity;
- `js/` for the adopted domain boundaries, Product state, interaction, persistence adapters, migrations, search, projections, and compatibility adapters;
- `tests/` for unit/contract/browser fixtures and test runners;
- bounded people-free local fixtures used only by tests or an explicitly labeled demonstration mode that can never appear as user data;
- `governance/evidence/` for screenshots, browser results, migration/recovery fixtures, and execution evidence;
- new implementation review/correction artifacts under `governance/reviews/` or `governance/proposals/` only when they record the authorized execution/review chain;
- `README.md` only for accurate local run and verification instructions necessitated by the materialization.

Edits must be directly necessary for the integrated scope. Unrelated legacy pages are not a general cleanup license. Adopted canonical, Product, Interaction, privacy, and Engineering authority artifacts are read-only. `ROADMAP.md` and `BACKLOG.md` are excluded. Generated browser profiles, temporary files, and machine-specific paths must not be committed.

## 3. Technology and dependency boundary

Default and authorized technology:

- semantic HTML;
- existing CSS architecture;
- modular plain JavaScript;
- browser APIs and browser-local persistence behind the adopted adapter;
- existing direct-browser verification mechanisms.

No framework, build system, backend, database, package manager, external service, AI runtime, or new dependency is required or authorized. Existing repository code may be refactored and modules added. If execution finds a new dependency genuinely indispensable, it must stop and request a narrow separate authority Decision identifying the package, version/range, purpose, security/license review, alternatives, lockfile effect, and removal boundary. Convenience, aesthetics, or test preference is insufficient.

## 4. Implementation responsibilities

### Organization-first shell and first use

- Start with no fabricated user organization, person, Investigation, Improvement, or operational content.
- When no organization exists, make `Створити організацію` the clear primary action.
- Permit immediate use after minimal organization identity creation; no setup wizard or completeness score.
- Preserve an explicit, separately labeled demonstration path only if it cannot contaminate current user state.
- Make organization, not Investigation, the primary navigation and orientation context.

### Constructor

- Use contextual commands and small focused dialogs/sheets: create/revise organization or department; add role, process, system, SOP, measure, report, meeting, interaction, responsibility, dependency, flow, association, or explicit unknown/dispute where READY.
- Show the committed result immediately in Map/Workbench projections.
- Validate authority, kind, endpoints, expected version, interval, family-specific integrity, and privacy before mutation.
- Preserve correction and supersession history; do not expose architectural field names in primary UI.

### Map and Workbenches

- Implement a functional structural Map with bounded named lenses; never show all relationship families simultaneously by default.
- Support search-to-focus, keyboard selection, Inspector, Department navigation, qualification states, and contextual Investigation/Improvement actions.
- Keep coordinates, zoom, pan, grouping, selection, expanded state, and lenses outside governed state.
- Compose Department/Role Workbenches into a primary workspace plus focused Inspector/drawers, with processes, systems, SOPs, measures, reports, meetings, interactions, responsibilities, unresolved questions, active work, and history only as authorized.
- Process comprehension begins with `Вхід → Процес → Вихід → Результат`; detail progressively reveals trigger, owner role, participants, systems, SOPs, handoffs, constraints, exceptions, and expected result.

### Investigation, Improvement, and Memory

- Preserve saved Investigation identity and data through a compatibility adapter and copy-on-write migration.
- Contextual Investigation creation carries authorized traceable references only. Evidence, Working Set, Hypotheses, facts, and Current Situation remain explicit Investigation actions/state.
- Implement only the bounded Improvement subset: identity, organizational context, deliberate-change framing, proposed change separate from current state, and honest unavailable later lifecycle.
- Use the user-facing distinction `Зрозуміти, що відбувається` for Investigation and `Спланувати свідому зміну` for Improvement; Improvement never implies failure.
- Show permission-aware Memory/history references only; preserve Historical Walkthrough Reader functionality and access.

### People and Watson

- Operate completely without people.
- Do not enable named-person creation, unrestricted person search, dossier behavior, performance/credibility scoring, personality inference, surveillance, or sensitive fields.
- Permitted partial scaffolding must remain disabled/protected and must not place names into indexes or fixtures.
- Watson may appear only as an honest unavailable future capability where useful. No generated text, heuristics presented as AI, API, provider, model, scoring, execution, mutation, or recommendation.

## 5. Persistence and migration contract

- All new organizational persistence goes through the adopted adapter and repository contracts; domain/UI modules do not call raw `localStorage`.
- Use schema-versioned immutable workspace generations, parent generation, checksum, commit marker, read-back verification, pointer-as-hint activation, and retention of the active plus at least one prior validated generation.
- Commit acknowledgment occurs only after activated-generation read-back and validation.
- Recovery deterministically selects the highest valid committed generation with intact lineage; ambiguity enters read-only recovery.
- Migrations are deterministic, copy-on-write, restartable, capacity-checked, and leave the old generation usable on failure.
- Existing Investigation v1 stores are preserved in place until a verified compatibility read and migrated copy exist. No destructive source removal occurs in this cycle unless review evidence proves recoverability and the authority package expressly permits that exact removal; this contract does not.
- Malformed records are quarantined or rejected without fabricating replacements. Failed persistence never produces a success state.
- Derived indexes are disposable and rebuilt after generation or policy change.
- People-data export/import remains unavailable. A people-free recovery export/import may be implemented only with allowlisted fields, validation without activation, new custody metadata, no imported authority, and collision reconciliation.

## 6. Human-first UX contract

- Ukrainian is the primary human-facing language.
- Preserve the calm, professional, warm, dark, premium, operational visual direction.
- Maximize useful viewport composition and information density without dashboard clutter.
- Prefer direct action → focused input → immediate visible result.
- Use progressive disclosure; hide IDs, schema versions, provenance locators, source-resolution, envelopes, mutation ownership, and temporal internals by default.
- Primary and secondary actions have unequal visual weight. All controls expose hover, focus-visible, active/pressed, disabled, busy, success, and failure states where applicable.
- Maintain consistent dialog/drawer close, Escape, focus trap, focus restoration, background inertness, scroll lock, and repeated-open safety.
- Avoid generic SaaS/admin/CRM, cyberpunk/neon/gaming, oversized decorative emptiness, dense technical labels, and detective-board metaphors.

## 7. Viewport and accessibility contract

- Treat large desktop and ordinary laptop as primary work environments; verify useful composition at 1920×1080 and 1440×900 or equivalent.
- Tablet collapses secondary regions before primary work and uses bounded drawers/sheets.
- At 390 px, preserve orientation, inspection, history, safe correction/dispute initiation, contextual Investigation/Improvement entry, and honest limitations on complex arrangement.
- No unintended horizontal document overflow at 390 px. Intentional bounded scrollers must be labeled and keyboard/touch usable.
- Provide semantic landmarks, heading order, accessible names, native controls where possible, keyboard reachability, visible focus, sufficient contrast, reduced-motion respect, announcements for dynamic results/errors, and non-color-only state communication.

## 8. Search and capacity contract

- Search authorized organization, department, role, process, system, SOP, and measure labels; named-person search remains disabled.
- Reauthorize every result on selection. Index only fields permitted for the active purpose and never reveal restricted counts/tokens.
- Support cancellable/chunked search, bounded traversal, pagination/progressive expansion, and explicit complete/partial/cancelled/stale states.
- Cursor tokens bind to workspace, committed generation, policy generation, purpose, query, and lens.
- No fixed tiny-organization limit or assumption that the entire graph fits one viewport.

## 9. Verification plan

Execution authority includes creating and running proportionate unit, contract, migration, invariant, policy, and browser tests plus collecting evidence. Direct-browser testing is the required fallback where Node is unavailable.

### Required functional journeys

1. Empty storage → honest first start → create organization → enter useful empty model.
2. Create/revise department and role; record valid people-free relationships; reject invalid cross-workspace/endpoints.
3. Model Input → Process → Output → Result and link systems, SOPs, measures, responsibility, handoffs, constraints, and exceptions.
4. Navigate Map lenses, search-to-focus, selection, Inspector, Department/Role Workbenches, unknown/stale/disputed states.
5. Create Investigation from department/process context; verify references arrive and Evidence, Working Set, Hypotheses, and facts do not.
6. Create Improvement from context; verify proposed state cannot mutate current governed state and later lifecycle is honestly unavailable.
7. Inspect Memory references and complete Historical Walkthrough Reader journeys without regression.

### Required integrity and failure tests

- stable identity, workspace separation, relationship family/endpoints/direction/interval integrity;
- authority-before-recency and equal-rank conflict qualification;
- correction, supersession, dispute, redaction, deletion, and historical role distinctions;
- privacy filtering before counts, traversal, navigation, history, saved references, indexes, and future context;
- protected absence with no revealing error/count/search difference;
- immutable-generation commit, checksum failure, interrupted pointer update, invalid newest generation, recovery, quota failure, and restartable migration;
- preserved Investigation v1 data, idempotent migration, rollback/read-only recovery, and no casual deletion;
- broken external references, malformed state, stale source, incomplete results, and failed persistence.

### Required interaction and viewport tests

- keyboard-only primary journeys, tab order, visible focus, accessible names, dialog focus trap/restoration, Escape, and background inertness;
- repeated open/close and rapid action stress with no stale overlay, duplicate handler, scroll lock, lost focus, or frozen application;
- 1920×1080 and 1440×900 useful workspace composition;
- tablet behavior and 390 px overflow/orientation/inspection/correction/context-entry checks;
- zoom and long Ukrainian labels, reduced motion, non-color state communication, and empty/error/loading states.

### Evidence and completion gates

- run all available automated and browser checks;
- record commands, environment, results, known limitations, screenshots of representative desktop/390 states, and migration/recovery evidence;
- run `git diff --check` and confirm a clean status after committed execution artifacts;
- perform an independent critical review of semantics, privacy, migration safety, responsive behavior, accessibility, and stale/frozen interaction risk;
- correct bounded implementation defects, rerun affected plus regression checks, and complete repeat review.

## 10. Stop conditions

Stop before crossing any need for:

- new or changed canonical, Product, Interaction, Engineering, or privacy meaning;
- sensitive/named-person capability beyond the permitted disabled scaffolding;
- framework migration, build system, backend, database, new dependency, external integration, or deployment;
- Watson/AI execution or provider selection;
- repository transition or ROADMAP/BACKLOG change;
- destructive migration without a separately reviewed recovery path;
- Replay, H3 validation, Root Cause determination, or causal proof.

Ordinary implementation choices inside adopted contracts—module boundaries, DOM/SVG/canvas choice after measurement, component structure, CSS details, test organization, refactoring, and commit cadence—are delegated and are not stop conditions.

## 11. Autonomous execution and completion

If adopted, the executor proceeds autonomously:

`implement coherent product → verify → correct defects → verify → independent critical review → bounded correction → repeat review → Product Owner experiential handoff`.

Completion occurs when either:

- the maximum authorized coherent implementation is materialized, verified, reviewed, corrected, Live Server-ready, documented, and clean, with unavailable/deferred capabilities listed; or
- a genuine stop condition is precisely evidenced.

Completion does not imply benefit, deployment, canonical validation, Replay, H3, Root Cause, or causal proof.

## Authority effect

NONE. This is a proposed execution contract awaiting review and an attributable human Implementation Authority Decision.
