# Living Organizational Model Interaction Architecture critical review

## Review identity

- Architecture commit: `336c4c0281f2b139137f8033deee0ae28c4dc805`
- Architecture blob: `e330bfb11ca9066ef5956f8047429ec10d85341e`
- Readiness commit: `8ebe5206d6f82bb61980f3d7b2792e8fbe078309`
- Readiness blob: `b4d8120b31574e35084d47dca13124e2fb45c61d`
- Method: independent Product, interaction, privacy, accessibility, responsive, authority, and non-implementation review
- Initial disposition: **FAIL — five bounded Interaction Architecture blockers**
- Canonical, Engineering, and implementation effect: none

## Blocking findings

### F1 — single-layer Map behavior can conceal material cross-layer dependency

The architecture sensibly prevents universal-graph overload by emphasizing one supporting relationship concern at a time. It does not guarantee that a selected object’s material dependency from another layer remains visible. A process-focused view could therefore hide a disputed system or SOP dependency necessary to understand the selection.

Required correction: keep one primary lens, but preserve a small explicit set of material cross-lens relationships for the selected object, labeled by type and reason. The user must be able to reveal or suppress those supporting relationships without activating every layer. Hidden relationship count must not imply safety or completeness.

### F2 — person-origin contextual entry can leak restricted existence

Investigation and Improvement entry previews show origin and proposed context, but the architecture does not specify privacy filtering before the preview. Starting from a Person, contribution, or restricted work relationship could reveal another restricted Matter, participation link, source, or subject merely through suggested context.

Required correction: construct the preview from already authorized, purpose-compatible references only; do not reveal inaccessible candidates, counts, or omission reasons; require explicit inclusion of named-person context; and preserve protected absence through the created link and return path.

### F3 — historical-capacity defaulting is unsafe when communication time is approximate

Person-as-Source may default contribution-time role/department from communication time “when supported.” The contract does not state what happens when the time is a range, date-only, or conflicts with multiple effective intervals. A silent current-role fallback would rewrite history.

Required correction: default only from one unambiguous authoritative effective interval. Otherwise show role/department as “to confirm,” allow an explicit historical selection or unknown, disclose the time uncertainty, and never fall back silently to current capacity.

### F4 — mobile degradation may weaken people correction and dispute rights

The 390 px contract permits sensitive administrative review to become read-only or move to a wider screen. It does not explicitly protect a person’s ability to inspect the safe summary, submit a correction/dispute/response, or preserve a request when full adjudication requires a wider screen.

Required correction: narrow screens must retain safe inspection and initiation of correction, dispute, response, withdrawal, or protected review. Complex resolution may hand off, but the request and entered content must be preserved with an honest status and no forced desktop-only deadline.

### F5 — empty-state language does not fully reconcile restricted absence

The architecture distinguishes restricted from missing but also says unauthorized views should not leak sensitive existence. The example states do not define when “restricted” may be named versus when it must look like a non-revealing unavailable state.

Required correction: define two interaction states: authorized viewers may see a bounded restriction label and review route; unauthorized viewers receive no count, placeholder, gap, or implication that a hidden record exists. Search, Map, workbenches, Inspector, Memory, and Watson must behave consistently.

## Required review disposition

| Required verification | Initial disposition |
| --- | --- |
| Product meaning preserved | PASS |
| Living Model remains Operating Model projection | PASS |
| Investigation unchanged | PASS |
| Improvement distinct | PASS |
| People & Privacy respected | FAIL PENDING F2–F5 |
| Constructor avoids form-heavy administration | PASS |
| Organization Map navigable | FAIL PENDING F1 |
| Department Workbench operational rather than HR-oriented | PASS |
| Person Workbench avoids dossier behavior | PASS WITH F2/F5 |
| Person-as-Source remains human-readable | PASS WITH F3 |
| Metadata does not dominate | PASS |
| Viewport use is efficient | PASS |
| Empty states remain honest | FAIL PENDING F5 |
| Watson remains non-authoritative | PASS |
| No implementation occurred | PASS |

## Additional review observations

- First use is genuinely progressive and useful with minimal information: PASS.
- Hierarchy mutation is distinguished from personal view arrangement: PASS, but the correction should require semantic preview on every authority-bearing rearrangement.
- Process, system, SOP, KPI, report, meeting, and interaction meanings remain distinct: PASS.
- Investigation context does not become Evidence/Working Set/Hypothesis/fact: PASS.
- Improvement does not imply failure and uses distinct intent language: PASS.
- Current state remains primary over Memory: PASS.
- Watson placement is quiet and contextual rather than generic chat: PASS.
- Responsive model avoids miniature desktop and supports bounded read-only degradation: PASS WITH F4.
- Accessibility obligations are explicit at architecture level: PASS.
- Engineering choices remain unselected: PASS.

## Required bounded correction

One correction supplement may resolve F1–F5 without editing the historical architecture. It must retain the architecture’s one-primary-lens, purpose-filtered, progressive-disclosure, and narrow-mobile principles while adding the missing safety contracts.

A separate repeat review must verify all fifteen required checks, confirm closure of each finding, and ensure that correction adds no Engineering or implementation authority.

## Authority effect

NONE. This review blocks neutral authority-package preparation until correction and repeat review. It does not reject the Interaction direction, adopt any architecture, authorize implementation, or change Product/canonical meaning.
