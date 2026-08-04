# M9 Investigation-first Canonical Product Materialization Implementation Critical Review

## Review identity

- Implementation commit: `8fd2a05d03840a686d4d87308efa71fba3330d7e`
- Implementation report commit: `a942b9d91d2550a033c2972494452181a43c29a9`
- Implementation report blob: `13d0baa7a9b2bfb1e7e32b38f5207f97acb05e9a`
- Review date: 2026-08-04
- Review disposition: PASS — NO BLOCKING FINDINGS
- Deployment authority: NONE

## Review question

Does the implementation provide a coherent, usable Investigation-first Live Server experience while realizing only repository-supported meaning and preserving all fixed authority boundaries?

## Review method

The implementation was reviewed against the 32-capability inventory, bounded MVP definition, eight-stage plan, authority Decision, transition, Wave 1.5 comprehension principle, fixed Design Bible, browser journey, and four principal screenshots.

The review treated working code as non-authoritative until its visible behavior could be traced to the reviewed scope.

## Product-coherence review

| Test | Result | Finding |
| --- | --- | --- |
| Investigation is the primary product destination | PASS | Shell, title, navigation, and working context all prioritize Investigation. |
| Reader remains supporting and intact | PASS | Reader is linked as a learning module and no Reader file changed. |
| Current Situation anchors comprehension | PASS | Situation question, bounded summary, knowns, unknowns, and gaps precede metadata. |
| Evidence discipline remains visible | PASS | Material, Evidence status, provenance, source, and uncertainty remain distinct. |
| Working Set preserves temporary relevance | PASS | Add/remove persists locally without changing Evidence status. |
| Reasoning remains provisional | PASS | Hypotheses state their provisional status and evidence relationships. |
| Timeline is honest about incompleteness | PASS | Read-only/partial label, dual time, and unavailable editing are explicit. |
| Inspector preserves context | PASS | Focused inspection occurs alongside the active Investigation. |
| Human judgment boundary is explicit | PASS | Decision control is disabled and the reason is stated. |
| Product is usable without Git/Markdown knowledge | PASS | All core interaction occurs in the Live Server interface. |

## Semantic review

- No new domain identity, lifecycle, classification, Relationship type, or authority state was introduced.
- The sample Investigation uses fixed concepts and is visibly local/non-authoritative.
- Current Situation revision preserves previous text.
- Selection is not acceptance; hypothesis is not fact; Relationship is not causation; activity is not Outcome.
- Event time and record time remain separate.
- Missing or uncertain time remains qualified.
- No authoritative Decision, post-Decision execution, knowledge promotion, or operational source mutation occurs.

Disposition: PASS.

## Interaction and comprehension review

The primary reading order is:

> understand → inspect → verify → technical details

Metadata is concentrated in the Inspector. Primary canvas language is Ukrainian and operationally understandable. The Workbench uses stable tabs, a persistent context column on wide screens, and a mobile navigation drawer with horizontally scrollable direct-access tabs.

Disposition: PASS.

## Visual review

The interface presents a unified operational-office composition using warm paper, dark wood, restrained brass, editorial hierarchy, thin material boundaries, and low-noise controls. It avoids dashboard chrome, neon, gaming, crime-board, and sticky-note-wall metaphors.

The first screenshots revealed two blocking visual defects attributable to implementation:

1. legacy hypothesis-card styling broke the unified language and caused internal overlap;
2. inherited global `main` sizing clipped the narrow viewport.

Both were corrected. Repeated browser review passed, including a 390 px document-overflow assertion. Updated reasoning and mobile screenshots show the corrections.

Disposition after correction: PASS.

## Accessibility review

Confirmed:

- `lang="uk"`;
- semantic landmark and heading structure;
- labeled navigation, filters, dialogs, forms, Inspector, and mobile control;
- visible focus styling;
- native keyboard-operable controls;
- live announcements for context/state changes;
- reduced-motion treatment;
- narrow-viewport continuity.

Formal assistive-technology certification was not performed and is not claimed.

Disposition: PASS WITH NON-BLOCKING FOLLOW-UP.

## Verification findings

### Browser journey

PASS in headless Microsoft Edge.

### Node contract tests

NOT RUN — Node.js is unavailable in the current environment. Existing model modules were not changed; this is a non-blocking environment limitation, not a silent pass.

### Screenshot review

PASS after correction for Situation, Evidence, Reasoning, and narrow viewport.

## Authority review

| Boundary | Result |
| --- | --- |
| Canonical/Product/Interaction/Engineering meaning unchanged | PASS |
| Only implementation, test, and evidence files changed | PASS |
| Reader historical content unchanged | PASS |
| Dependencies/framework unchanged | PASS |
| No external integration or AI runtime | PASS |
| No Replay/H3/Root Cause/causal proof | PASS |
| No deployment | PASS |
| ROADMAP/BACKLOG unchanged during implementation | PASS |

## Findings

### Blocking

NONE after correction.

### Non-blocking

1. Direct Product Owner traversal is now required to discover experiential and workflow deficiencies that repository review cannot establish.
2. Formal assistive-technology testing remains future verification work.
3. Node model tests remain unexecuted in this environment because Node.js is absent.
4. Local persistence, representative data, partial timeline, and unavailable integration/AI/Decision capabilities must remain visibly bounded.

## Completion disposition

PASS — NO BLOCKING FINDINGS.

The repository now provides the first coherent, working Investigation-first Live Server experience covering the majority of implementation-ready capabilities. Additional autonomous implementation would now require either findings from direct human use or expansion into capabilities explicitly classified incomplete or unauthorized.

The next genuine indispensable human judgment is Serhii’s direct traversal assessment of the working product experience. This review does not authorize deployment or any excluded capability.

