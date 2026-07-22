# Documentation Backlog

This backlog stages documentation improvements according to product maturity. It
defines planning order only; an entry does not authorize implementation.

An authorized backlog item may be marked completed only after it satisfies the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done).

## Priority and effort

- **P0 — Critical:** required for release readiness or to control material risk.
- **P1 — High:** directly improves development quality and consistency.
- **P2 — Medium:** improves long-term maintainability.
- **P3 — Low:** optional governance optimization.
- **S:** several hours; **M:** one or two focused days; **L:** several days or
  cross-owner review.

Completed foundations are recorded for context and are not open backlog work.

## Stage 1 — Before Beta

Only work that directly supports current development and beta readiness belongs in
this stage.

| Improvement | Status | Priority | Rationale | Dependencies | Effort | Recommended milestone |
| --- | --- | --- | --- | --- | --- | --- |
| Product Language migration | Completed | P1 | Establish one language authority and remove conflicting terminology. | Product Language audit | S | Sprint 6 |
| Documentation Map | Completed | P1 | Define ownership, authority, lifecycle, and conflict resolution. | Team Governance | M | Sprint 6 |
| README modernization | Completed | P1 | Prevent obsolete phase and module claims from acting as authority. | Systems, Sprint Tracker | S | Sprint 6 |
| Design System refresh | Completed | P1 | Synchronize design documentation with the current presentation layer. | Sprint 6 UI modernization | M | Sprint 6 |
| Formally adopt the Development Methodology | Completed | P1 | Make the proven delivery model explicit before Beta without replacing canonical authorities. | Team, Architecture, Development, Documentation Map, Product Language, Design System | S–M | Before Beta |
| Introduce the Product Maturity Model | Completed | P1 | Define evidence-based release readiness independently from feature sequencing. | Roadmap, Methodology, Team, Development, Documentation Backlog | M | Alpha, before Beta scope freeze |
| Introduce the internal Project Health Dashboard | Completed | P1 | Aggregate canonical evidence into a concise answer to what blocks the target release. | Product Maturity, Methodology, Team, Documentation Map | M | Alpha, before Beta scope freeze |
| Introduce the lightweight Decision Log | Completed | P1 | Preserve consequential approved rationale below the ADR threshold. | Methodology, Team, Documentation Map, Changelog | M | Alpha, before Beta scope freeze |
| Create `TESTING.md` | Planned | P0 | Define repeatable testing expectations for current workflows. | Architecture, Development, Systems | M | Beta readiness |
| Define a regression matrix | Planned | P0 | Identify critical workflows, browsers, data states, and viewport coverage. | `TESTING.md` | M | Beta readiness |
| Create accessibility verification documentation | Planned | P0 | Turn Design System principles into a repeatable review process. | Design System, Product Language | M | Beta readiness |
| Define supported browsers | Planned | P1 | Replace the ambiguous “current browser” requirement with testable support. | `TESTING.md` | S | Beta readiness |
| Add a documentation validation checklist | Planned | P1 | Prevent broken links, stale filenames, and unsynchronized documents. | Documentation Map | S | Next documentation review |
| Normalize Sprint Tracker rules | Planned | P1 | Prevent future gaps while preserving unavailable Sprint 2 and Sprint 3 history. | Team Governance | S | Next sprint opening |
| Define Changelog entry rules | Planned | P1 | Establish when and how Unreleased work becomes release history. | Sprint Tracker, release decision | S | Before beta release |
| Audit current-status claims | Planned | P1 | Keep README, Systems, Sprints, and Changelog aligned. | Documentation Map | M | Beta scope freeze |
| Establish governed technical-debt evidence | Planned | P1 | Prevent missing debt information from being mistaken for release readiness. | Development, Architecture, Sprint reviews | M | Beta scope freeze |

### Stage 1 exit criteria

- Critical workflows have documented regression cases.
- Browser and viewport expectations are explicit.
- Accessibility checks are repeatable.
- Current-status documents agree.
- Documentation validation is part of sprint completion.

## Stage 2 — Before v1.0

This stage contains documentation required for the first stable release.

| Improvement | Priority | Rationale | Dependencies | Effort | Recommended milestone |
| --- | --- | --- | --- | --- | --- |
| Create a v1.0 release checklist | P0 | Define product, architecture, design, language, testing, and documentation gates. | Testing and accessibility documentation | M | v1.0 release candidate |
| Establish versioning and release policy | P0 | Give releases and Changelog entries a stable meaning. | Product Owner release decision | S | Before first tag |
| Publish an accessibility conformance review | P0 | Provide release evidence rather than principles alone. | Accessibility checklist, final UI | L | v1.0 release candidate |
| Publish a test-coverage report | P0 | Record verified workflows, browsers, and responsive states. | Testing strategy, regression matrix | M | v1.0 release candidate |
| Create a user guide | P1 | Explain stable workflows without overloading README. | Stable workflows and terminology | L | v1.0 documentation freeze |
| Create a Getting Started guide | P1 | Provide a short path through capture, knowledge, SOP, execution, and review. | User guide, Product Language | M | Public beta completion |
| Document data handling and recovery | P1 | Explain local persistence, browser dependence, limitations, and data-loss risks. | Data Model, stable persistence behavior | M | Before stable release |
| Consolidate repeated Learning Layer explanations | P1 | Keep product principles, architecture, and sequencing in their authoritative documents. | Documentation Map | M | v1.0 documentation freeze |
| Remove current-status detail from Roadmap | P1 | Keep current state in Systems and delivery history in Sprints. | Systems audit | M | Before roadmap publication |
| Finalize Changelog release sections | P1 | Move accepted milestones out of an indefinite Unreleased section. | Versioning policy | S | First tagged release |
| Retire `UI_LANGUAGE.md` | P2 | Finish the compatibility migration to one language authority. | Confirm no dependent references | S | v1.0 documentation freeze |
| Define documentation approval criteria | P2 | Make canonical-document review part of release acceptance. | Documentation Map, Team Governance | S | Before v1.0 freeze |

### Stage 2 exit criteria

- Release gates and verification evidence are documented.
- Users have setup, workflow, data-handling, and recovery guidance.
- Canonical documents no longer carry conflicting status or scope.
- Changelog and versioning support a stable release.
- Temporary compatibility documentation is retired safely.

## Stage 3 — After v1.0

This stage improves maintainability after the architecture and public workflows
have stabilized.

| Improvement | Priority | Rationale | Dependencies | Effort | Recommended milestone |
| --- | --- | --- | --- | --- | --- |
| Introduce Architecture Decision Records | P1 | Preserve rationale, alternatives, outcomes, and consequences of major decisions. | Stable architecture governance | M | First post-v1 architecture change |
| Add an ADR template and index | P1 | Make decision records consistent and discoverable. | ADR structure | S | Same milestone |
| Split Learning Architecture from `ARCHITECTURE.md` | P2 | Keep the architecture overview usable as Learning Layer detail grows. | Stable v1 architecture, ADR structure | L | Post-v1 architecture review |
| Establish a documentation archive | P2 | Give superseded documents a recoverable, non-authoritative destination. | First superseded document | M | First post-v1 retirement |
| Define archive retention rules | P2 | Prevent the archive becoming an unstructured second document set. | Documentation archive | S | Same milestone |
| Create `CONTRIBUTING.md` | P2 | Define submission, testing, review, and documentation expectations. | Stable Development and Team Governance | M | Before external contribution |
| Add documentation review to contribution practice | P2 | Keep canonical documentation synchronized with changes. | Contribution workflow | S | Post-v1 engineering workflow |
| Automate documentation link validation | P2 | Scale validation beyond manual review. | Tooling decision | M | Post-v1 maintenance sprint |
| Consider `SYSTEMS.md` → `SYSTEM_CATALOG.md` | P3 | Improve naming precision without changing document responsibility. | Link-migration plan | S | Opportunistic migration |
| Add terminology review automation | P3 | Reduce accidental reintroduction of deprecated terms. | Product Language maturity, tooling | M | Localization maintenance sprint |

## Stage 4 — Long-term

This stage covers mature product, documentation, privacy, and AI governance.

| Improvement | Priority | Rationale | Dependencies | Effort | Recommended milestone |
| --- | --- | --- | --- | --- | --- |
| Create AI governance documentation | P0 | Define authority, explainability, approval, and communication before AI behavior exists. | AI feature proposal, Product Vision | L | Before AI implementation |
| Create personal-data and privacy governance | P0 | Keep personalization transparent, controlled, and distinct from profiling. | AI Knowledge Model architecture | L | Before Personal Operational Model |
| Document AI knowledge-layer boundaries | P0 | Preserve distinct authority for Management, Organizational, and Personal knowledge. | Long-term AI architecture | L | Before AI Knowledge Model beta |
| Create a recommendation explainability standard | P0 | Standardize evidence, confidence, limitations, and approval language. | Learning Decision Pipeline | M | Before Recommendations Center |
| Version documentation by product release | P2 | Support users of more than one maintained product version. | Multiple supported releases | L | Multi-version product |
| Create a public documentation portal | P2 | Improve navigation, search, and user education beyond repository Markdown. | Stable guides and release cadence | L | Mature public product |
| Establish multilingual governance | P2 | Define source-language authority and translation synchronization. | Demand for a second language | L | Before second-language release |
| Define a formal audit cadence | P2 | Supplement change-triggered reviews with scheduled governance. | Stable ownership and releases | M | Operational maturity |
| Add documentation quality metrics | P3 | Track link health, review age, ownership, and release coverage. | Automated tooling | M | Mature governance |
| Define long-term retention policy | P3 | Govern multiple releases, ADR generations, and archives. | Documentation versioning and archive | M | Multi-release maturity |

## Priority matrix

| Priority | Before Beta | Before v1.0 | After v1.0 | Long-term |
| --- | --- | --- | --- | --- |
| P0 | Testing, regression, accessibility | Release gates, versioning, conformance and coverage reports | — | AI, privacy, knowledge boundaries, explainability |
| P1 | Validation, browser support, sprint and release rules, status audit | User guidance, data handling, consolidation | ADR structure | — |
| P2 | — | Compatibility retirement, approval criteria | Architecture split, archive, contribution and link automation | Versioned docs, portal, multilingual governance, audit cadence |
| P3 | — | — | Optional renames and terminology automation | Metrics and retention |

## Recommended implementation order

1. Create `TESTING.md`.
2. Define supported browsers and the workflow regression matrix.
3. Create the accessibility verification checklist.
4. Add documentation validation to sprint completion.
5. Normalize Sprint and Changelog maintenance rules.
6. Perform a beta documentation consistency audit.
7. Define v1.0 versioning and release gates.
8. Create Getting Started and user-facing workflow guidance.
9. Document data handling, limitations, and recovery.
10. Consolidate Product Vision, Architecture, Roadmap, and Systems overlap.
11. Publish v1.0 testing and accessibility evidence.
12. Retire the UI Language compatibility document.
13. Introduce ADRs with the first post-v1 architectural decision.
14. Split Learning Architecture only after v1 architecture stabilizes.
15. Add archive and contributor governance when real demand exists.
16. Create AI and privacy governance before future AI implementation.

## Risks of postponement

| Deferred work | Risk |
| --- | --- |
| Testing strategy and regression matrix | Regressions remain dependent on memory and ad hoc checks. |
| Accessibility verification | Accessibility defects may become structural and expensive to correct. |
| Browser support | Unsupported environments remain ambiguous. |
| Documentation validation | Broken links and stale canonical references can return silently. |
| Sprint and Changelog rules | Delivery history becomes difficult to reconstruct. |
| Release policy | Stable-release readiness remains subjective. |
| User and data-handling guides | Users may misunderstand workflows, persistence, and recovery limits. |
| Document consolidation | Principles, current state, architecture, and future direction may diverge. |
| ADRs | Architectural rationale is lost even when code survives. |
| Archive governance | Superseded documents may continue to appear authoritative. |
| AI and privacy governance | AI capabilities may precede explainability, approval, and privacy boundaries. |
| Multilingual governance | Additional translations may fork terminology and product voice. |
