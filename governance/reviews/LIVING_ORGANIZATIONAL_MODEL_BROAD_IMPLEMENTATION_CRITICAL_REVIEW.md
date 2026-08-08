# Living Organizational Model broad implementation critical review

## Review identity

- Implementation commit: `e5c4e489cc0a7c52c4738060e7ce31bcb7ee1c48`
- Authority Decision: commit `89cafb12bb831907287c800e41bb3cbd7b10b1a9`, blob `a622aca9375543d07c1df2cc01a9f67fb428b10e`
- Review type: logically independent critical implementation review
- Disposition: **CONDITIONALLY COMPLETE — bounded corrections required**

## Implemented outcome confirmed

- Real `index.html` now starts from an honestly empty organization state rather than fabricated Investigation data.
- Organization creation enters a coherent dark operational shell with Constructor, Map lenses, Department/Role/Process workspaces, search-to-focus, Inspector, and contextual work actions.
- People-free element kinds cover the authorized operational scope; named-person and InformationContribution runtime are absent.
- Input → Process → Output → Result is visible as a human process model.
- Organizational persistence uses adapter-bound immutable generations, checksums, commit markers, read-back activation, retained generations, and corruption fallback.
- Existing Investigation v1 keys remain untouched; contextual creation stores a bounded non-promoted reference and creates no Evidence, Working Set, or Hypothesis content.
- Improvement proposals are stored separately and do not mutate governed elements.
- Historical Walkthrough navigation remains present.
- Direct browser contract and real-entry journeys pass; desktop and 390 px evidence exists.

## Changed-file accountability

| File/area | Classification and necessity |
|---|---|
| `index.html` | New organization-first materialization plus preserved Investigation composition. |
| `css/organization-workspace.css` | New viewport-first organization shell, Map, Workbenches, dialogs, responsive and focus states. |
| `js/operating-model-repository.js` | New governed repository/persistence boundary required by adopted Engineering Architecture. |
| `js/organization-workspace.js` | New Constructor, projection, Map, Workbench, search, Inspector and handoff behavior. |
| `js/investigation-workbench.js` | Compatibility integration for contextual reference and return to Management OS. |
| `css/investigation-workbench.css` | Visible bounded context banner and responsive adaptation. |
| `tests/operating-model-repository.browser.html` | Browser contract, identity, relationship, persistence, recovery and separation tests. |
| `tests/living-organizational-model.browser.html` | Real-entry functional, reload, preservation, context and 390 px journey. |
| `governance/evidence/LIVING_ORGANIZATIONAL_MODEL_BROAD_IMPLEMENTATION/` | Desktop and narrow visual evidence. |

No adopted authority artifact, ROADMAP/BACKLOG file, dependency, backend, integration, deployment, or unrelated legacy page was changed.

## Blocking findings

### ICR-1 — recovery does not yet prove immediate parent lineage

Severity: HIGH.

`BrowserPersistenceAdapter.load()` accepts the highest valid checksum/commit candidate but does not require its declared immediate parent to be another valid retained generation. An isolated syntactically valid generation could therefore win recovery without the adopted intact-lineage check.

Required correction: recovery candidates above generation 1 must have a valid same-workspace immediate parent unless they are reached through the active validated pointer. Record whether fallback recovery occurred and expose that qualified state to the UI.

### ICR-2 — cancelled contextual Investigation can leak stale context

Severity: HIGH.

The handoff places pending organizational context in `sessionStorage` and removes it after successful Investigation creation. If the user cancels and later opens a non-contextual Investigation, the stale envelope remains eligible for attachment.

Required correction: clear pending context whenever Investigation is opened without a context and when the creation dialog is cancelled/closed. Revalidate the referenced workspace/element before attaching where practical.

### ICR-3 — containment cycles are not rejected

Severity: HIGH.

The repository validates endpoints but does not prevent a containment edge that makes an element its own ancestor. This violates family-specific topology integrity and could make Map/Workbench traversal unsafe.

Required correction: before committing containment, traverse active containment descendants and reject an edge whose destination already contains the proposed source. Add a browser contract test.

### ICR-4 — recovered state is visually indistinguishable from ordinary current state

Severity: MEDIUM.

Corruption fallback works in the contract test, but the shell always says `Актуальна модель`. A user could unknowingly work from an older recovered generation.

Required correction: surface a non-technical, honest recovery qualification in the status bar and announce it. Do not expose keys, checksums, schema terminology, or corrupt payload.

### ICR-5 — real-entry journey lacks relationship and bounded Improvement UI coverage

Severity: MEDIUM.

Repository contracts cover relationship and Improvement invariants, but the actual UI journey does not prove creation controls, current/proposed separation through the UI, or Role Workbench availability.

Required correction: extend the real-entry browser journey to create a role, create a responsibility relationship, open Role Workbench, save an Improvement proposal, and verify governed element bytes remain unchanged.

## Non-blocking findings

- The 390 px headless screenshot is physically cropped by Edge's minimum headless window behavior, while the explicit 390 px iframe contract reports no document overflow. Retain the screenshot with this limitation in evidence and rely on the measured iframe assertion for the width invariant.
- The current bounded implementation creates report/meeting references and associations but intentionally does not own their external content.
- No Operating Model schema predates v1, so a cross-version organizational migration cannot be exercised yet. Restart/corruption behavior is testable now; the first future schema change must add explicit fixtures before release.
- The current Map is functional but intentionally uses cards and bounded relationship lists rather than a universal graph. This is consistent with adopted interaction scope.

## Review disposition

No authority stop condition or missing Product meaning was found. ICR-1 through ICR-5 are attributable implementation defects/test gaps within the authorized correction boundary. After correction, all repository and real-entry checks must be rerun and a repeat review recorded.

## Authority effect

This review authorizes no scope expansion. It directs only bounded correction under the recorded Implementation Authority Decision.
