# M9 Canonical Product Materialization Inventory

## Inventory identity

- Direction record: `governance/proposals/M9_INVESTIGATION_FIRST_MVP_PRODUCT_DIRECTION_RECORD.md`
- Fixed starting HEAD: `4cd7aab430d745048611ac05d3e311caf93adc65`
- Assessment date: 2026-08-04
- Scope: repository-grounded readiness inventory for an Investigation-first runnable product
- Investigation implementation: NOT AUTHORIZED
- Inventory state: COMPLETE

## Assessment rule

A roadmap name, existing screen, or convenient technical abstraction is not sufficient evidence of materialization readiness. `READY TO MATERIALIZE` requires repository support for user purpose, semantic ownership, interaction behavior, and logical implementation responsibility. Existing implementation is evidence of feasibility only; it is not authority and may be non-conforming.

The inventory uses only the required readiness values. “Shared” means shared Product meaning is demonstrated; it never means merely reusable code.

## Evidence register

| Code | Repository evidence |
| --- | --- |
| CMM | `images/17-design-principles/Canonical Management Model Integrated.md`; `architecture/M8.1_ARCHITECTURAL_IDENTITY_AND_BASELINE_MAPPING.md` |
| CDM | `images/17-design-principles/Workbench Canonical Domain Model.md` |
| CPM | `images/17-design-principles/Canonical Product Operating Model.md`; `images/17-design-principles/Canonical Matter Experience.md` |
| EVI | `docs/CASE_EVIDENCE_ARCHITECTURE.md`; `docs/OPERATIONAL_REASONING_MODEL.md` |
| INV | `docs/UNIFIED_OPERATIONAL_INVESTIGATION_ARCHITECTURE.md`; `docs/HUMAN_FIRST_INVESTIGATION_EXPERIENCE.md` |
| WKB | `docs/OPERATIONAL_WORKBENCH.md`; `docs/PROGRESSIVE_UNDERSTANDING_ARCHITECTURE.md`; `docs/GUIDED_INVESTIGATION_INTERACTION.md` |
| NAV | `images/17-design-principles/Canonical Operational Navigation.md`; `images/17-design-principles/Canonical Operational Interaction Language.md` |
| VIS | `images/17-design-principles/Canonical Visual Semantics.md`; `docs/DESIGN_SYSTEM.md` |
| M8 | `architecture/M8.2_CAPABILITY_AND_OWNERSHIP_COHERENCE.md`; `architecture/M8.3_INFORMATION_EVIDENCE_AND_HANDOFF_ARCHITECTURE.md` |
| IA | `architecture/research/M9_INTERACTION_ARCHITECTURE_LAYER_ASSESSMENT.md`; `governance/proposals/M9_HISTORICAL_WALKTHROUGH_READER_INTERACTION_ARCHITECTURE_HANDOFF.md` |
| EA | `governance/proposals/M9_HISTORICAL_WALKTHROUGH_READER_ENGINEERING_ARCHITECTURE_PREPARATION.md`; `governance/proposals/M9_HISTORICAL_WALKTHROUGH_READER_IMPLEMENTATION_CONTRACT.md` |
| W15 | `architecture/research/M9_HISTORICAL_WALKTHROUGH_READER_WAVE_1_5_COMPREHENSION_CORRECTION_ASSESSMENT.md`; `governance/proposals/M9_HISTORICAL_WALKTHROUGH_READER_WAVE_1_5_INTERACTION_CONTENT_CORRECTION_SPECIFICATION.md` |
| APP | `index.html`; `js/natural-capture.js`; `js/artifact-model.js`; `js/relationship-model.js`; `js/operational-memory-model.js`; `css/pages.css`; browser and model tests under `tests/` |
| READER | `historical-reader.html`; `js/historical-reader.js`; `js/historical-reader-uk.js`; `css/historical-reader.css`; `tests/historical-reader-structural.browser.html` |

## Traceable readiness matrix

| # | Capability identity | User purpose | Canonical support | Product support | Interaction support | Engineering support | Existing implementation | Readiness / ambiguity | Implementation eligibility | Shared status | Required authority | Blocking gaps / reviewer note |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Application shell | Enter one coherent Management OS environment | CMM, CPM | CPM product zones | NAV, VIS | EA shell responsibility is Reader-scoped; APP demonstrates feasibility | APP, READER | READY TO MATERIALIZE | Eligible in a new bounded envelope | Shared | Investigation-first implementation authority | Must consolidate without treating legacy page collection as canon. |
| 2 | Global navigation | Know product location and move without repository knowledge | CPM | CPM global layer | NAV L1 and continuity rules | APP provides static routing mechanics | APP sidebar | READY TO MATERIALIZE | Eligible | Shared | Same | Preserve capability visibility and avoid feature parity claims. |
| 3 | Investigation-local navigation | Retain Matter, Investigation, and current-focus context | CMM, INV | CPM matter/workbench layers | NAV L2–L3, WKB | APP hash/context skeleton | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | One-Investigation local context only | Investigation-specific with shared navigation grammar | Same | Multi-Investigation recovery and full navigation projection are not proven. |
| 4 | Open one Investigation | Enter a bounded inquiry concerning one Matter | INV, CMM | Human-first entry purpose | WKB guided entry | APP static/local mechanics | APP | READY TO MATERIALIZE | Eligible with local sample data | Investigation-specific | Same | “Create” must mean local prototype creation, not organizational record authority. |
| 5 | Investigation identity and status | Know what inquiry is open and its bounded state | INV, CDM | CPM lifecycle/context | NAV state projection | APP identifiers/state objects | APP | READY TO MATERIALIZE | Eligible for fixed bounded states | Investigation-specific | Same | Do not invent a new lifecycle; use fixed identities and states. |
| 6 | Investigation boundary and purpose | Understand what is and is not being investigated | INV | Human-first Investigation Experience | WKB dominant interaction | No Investigation-specific reviewed implementation contract | Partial APP copy | PARTIALLY READY — BOUNDED SUBSET ONLY | Read-only/locally editable purpose statement | Investigation-specific | Same | Exact mutation/history rules require a bounded implementation contract. |
| 7 | Current Situation summary | Understand the present operational situation before analysis | CDM, CMM | CPM pre-synthesis Current Situation | WKB progressive understanding | APP current-situation projection | APP | READY TO MATERIALIZE | Eligible | Investigation-specific, presentation grammar shared | Same | Must remain a versioned representation, not complete truth. |
| 8 | Symptoms and operational context | See reported manifestations and relevant context separately | CDM, INV | WKB Current Situation | WKB, VIS distinctions | APP artifact types | APP | READY TO MATERIALIZE | Eligible with representative data | Investigation-specific | Same | Presentation must not convert symptom into cause. |
| 9 | Known facts and visible uncertainty | Separate supported material from uncertainty | EVI, CMM | CPM epistemic integrity | VIS, W15 comprehension sequence | APP artifact states | APP | READY TO MATERIALIZE | Eligible | Shared evidence/uncertainty primitive | Same | Fixed language and semantic state mapping required. |
| 10 | Missing Evidence | Make evidentiary gaps visible | EVI | WKB progressive understanding | VIS uncertainty and unavailable states | APP request/evidence states | APP | READY TO MATERIALIZE | Eligible as explicit gap records | Shared | Same | No external acquisition implied. |
| 11 | Current Situation revision history | Revise without silent history loss | CDM, M8 | CPM continuity | NAV persistence and interaction cancellation/recovery | APP content revisions are partial | APP artifact revision | PARTIALLY READY — BOUNDED SUBSET ONLY | Local append-only revision demonstration | Shared versioning principle | Same | Full Matter-version semantics and recovery are not fully contracted for this slice. |
| 12 | Material intake | Represent documents, reports, notes, observations, images, references | CDM, EVI | WKB capture purpose | Canonical interaction vocabulary | APP supports typed local artifacts | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | Bounded local/manual sample material only | Shared Artifact intake | Same | File ingestion, image handling, security, and external connectors are outside current support. |
| 13 | Provenance and attribution | Know who introduced material, its origin, and status | EVI, M8 | CPM trust | VIS; W15 inspect/verify pattern | APP provenance model | APP | READY TO MATERIALIZE | Eligible | Shared | Same | Must expose source limitations and never imply verification by storage. |
| 14 | Evidence classification and status | Distinguish material, accepted Evidence, and proof | EVI, CDM | CPM epistemic integrity | VIS prohibited conflations | APP artifact/evidence states | APP | READY TO MATERIALIZE | Eligible for fixed classifications | Shared | Same | Human-readable primary layer; canonical identity inspectable. |
| 15 | Evidence inspection | Inspect focused material and full metadata | EVI | WKB object inspection | IA progressive disclosure; W15 three levels | APP item inspector | APP | READY TO MATERIALIZE | Eligible | Shared Inspector + Evidence projection | Same | Reader three-level content model is reusable as interaction discipline, not as historical semantics. |
| 16 | External Evidence acquisition | Retrieve actual external records or contact sources | EVI | Investigation orchestration defines bounded preparation only | Interaction authority requires approval | No connector/runtime contract | Demo-only APP button | NOT AUTHORIZED | Disabled and labeled unavailable | Not a shared implemented primitive | Separate integration and mutation authority | Existing demo must not pretend to retrieve real Evidence. |
| 17 | Working Set add/remove | Hold temporarily relevant material without accepting it as truth | CDM | WKB progressive collections | Canonical interaction vocabulary; Reader behavior | APP and READER | APP, READER | READY TO MATERIALIZE | Eligible | Shared | Same | Selection must not alter Evidence status. |
| 18 | Working Set context persistence | Return to the same bounded focus and contents | CDM, M8 | CPM context continuity | NAV single-envelope rule | Browser-local state exists but no reviewed Investigation contract | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | Session/local persistence only | Shared principle | Same | Cross-device, identity-bound, and durable recovery remain unsupported. |
| 19 | Explicit unknowns | Preserve unanswered questions as first-class unresolved conditions | EVI, CDM | WKB progressive understanding | VIS uncertainty | Generic artifact support | APP partial | PARTIALLY READY — BOUNDED SUBSET ONLY | Represent and inspect; no lifecycle automation | Investigation-specific | Same | Dedicated question/unknown lifecycle is not completely specified. |
| 20 | Contradictions | Show conflicting material without forced resolution | CDM, EVI | CPM epistemic integrity | VIS contradiction distinctions | APP relationship/artifact models | APP | READY TO MATERIALIZE | Eligible | Shared Relationship/semantic-state primitive | Same | Human resolution boundary must stay explicit. |
| 21 | Competing interpretations | Compare alternatives without selecting truth | EVI | Investigation/Decision Laboratory | Canonical interaction chains | Partial hypothesis UI | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | Read/create bounded alternatives | Investigation-specific | Same | Comparison interaction and disposition history need slice-specific contract. |
| 22 | Bounded hypotheses | Represent provisional explanations | CDM, EVI | WKB reasoning purpose | VIS hypothesis/fact separation | Existing generated-hypothesis code | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | Human-created/local hypotheses only | Investigation-specific, uses shared Artifact/Relationship | Same | Existing automatic generation must not be treated as authorized truth-producing behavior. |
| 23 | Supporting/contradicting Evidence links | Trace why a hypothesis remains provisional | EVI, M8 | Investigation reasoning | Canonical Relationship and inspection rules | Relationship model supports evidence references | APP | READY TO MATERIALIZE | Eligible | Shared Relationship model, Investigation-specific semantics | Same | Acceptance must remain human-owned. |
| 24 | Relationship exploration | Inspect relations among artifacts, people, events, systems, decisions, Evidence | CDM, M8 | WKB operational map | VIS relationship/proximity distinction | Relationship model and browser tests | APP | PARTIALLY READY — BOUNDED SUBSET ONLY | Fixed supported relation types only | Shared Relationship primitive | Same | Repository does not support an unrestricted graph ontology; no detective-board metaphor. |
| 25 | Timeline | Order events, retain uncertain time, link sources, separate event/record time | EVI, M8 | Matter/Investigation continuity | W15 temporal distinction; NAV inspection | No complete Investigation timeline contract | Fragmentary APP data | NOT READY — INTERACTION CONTRACT INCOMPLETE | Not eligible beyond labeled static illustration | Investigation-specific using shared time semantics | Future Interaction preparation and authority | Ordering, uncertain-time editing, and dual-time inspection behavior are incomplete. |
| 26 | Focused-item Inspector | Inspect one subject without losing Investigation context | CDM, CPM | WKB object inspection | IA, W15 progressive disclosure | APP inspector | APP | READY TO MATERIALIZE | Eligible | Shared | Same | Must preserve focus versus Primary Focus distinction. |
| 27 | Human judgment boundary | Distinguish analysis, proposal, acceptance, and attributable Decision | CMM, EVI | CPM operational confidence | Canonical interaction/authority grammar | APP authority-policy skeleton | APP | READY TO MATERIALIZE | Eligible as explicit boundary and disabled transitions | Shared | Same | Recording an authoritative Decision is outside this MVP unless separately authorized. |
| 28 | AI inquiry assistance | Ask, explain, challenge, and recommend without deciding | CMM P6; AI sources | Guided Investigation | AI/conversational adapter boundaries | Demo scripted behavior only | APP | NOT AUTHORIZED | Placeholder or disabled explanation only | Shared assistance boundary, not shared runtime | Separate AI execution/data authority | No ungrounded AI behavior may be simulated as working. |
| 29 | Responsive workspace | Preserve hierarchy and access on narrow viewports | Canonical presentation sources | CPM coherent experience | VIS, W15 responsive requirements | Existing CSS and Reader tests | APP, READER | PARTIALLY READY — BOUNDED SUBSET ONLY | Eligible for defined journeys | Shared | Same | Requires full Investigation browser journey and content-stress verification. |
| 30 | Accessibility baseline | Keyboard access, labels, focus, status comprehension | Canonical interaction patterns | Product experience principles | Interaction accessibility requirements | Native controls/partial tests | APP, READER | PARTIALLY READY — BOUNDED SUBSET ONLY | WCAG-oriented baseline, not certification | Shared | Same | Focus order, announcements, contrast, and responsive inspection require dedicated verification. |
| 31 | Empty/loading/degraded/unavailable/error states | Understand incomplete or failed conditions honestly | M8 trust plane | CPM operational confidence | VIS failure distinctions; W15 withhold rule | Reader has bounded states; APP inconsistent | APP, READER | PARTIALLY READY — BOUNDED SUBSET ONLY | Defined local states | Shared | Same | Loading cannot be conflated with uncertainty; legacy demo states need audit. |
| 32 | Monitoring, stabilization, closure, reopening | Continue the Matter after judgment and change | CPM, CMM P4/P5 | Canonical lifecycle is defined | NAV journeys exist | No bounded MVP interaction/engineering slice | Legacy pages are not proof | NOT READY — PRODUCT MEANING INCOMPLETE | Excluded from Investigation-first MVP execution | Future shared lifecycle capability | Separate Product Realization is required to choose the materialized subset and handoffs. |

## Readiness counts

| Classification | Count |
| --- | ---: |
| READY TO MATERIALIZE | 16 |
| PARTIALLY READY — BOUNDED SUBSET ONLY | 12 |
| NOT READY — PRODUCT MEANING INCOMPLETE | 1 |
| NOT READY — INTERACTION CONTRACT INCOMPLETE | 1 |
| NOT READY — ENGINEERING RESPONSIBILITY INCOMPLETE | 0 |
| NOT AUTHORIZED | 2 |
| INSUFFICIENT REPOSITORY EVIDENCE | 0 |
| **Total** | **32** |

## Eligibility conclusion

The repository supports a broad but bounded one-Investigation prototype. It does not support claiming a complete Management OS lifecycle, real external Evidence acquisition, autonomous AI inquiry, a complete timeline interaction, or production-grade persistence.

The existing static HTML/CSS/JavaScript implementation is substantial feasibility evidence. It must be assessed and selectively reconciled against the fixed model rather than accepted wholesale. No framework migration is required to demonstrate the eligible bounded scope.

## Authority conclusion

All eligible Investigation materialization still requires new attributable implementation authority. Existing Historical Walkthrough Reader authority cannot be reused or broadened. This inventory creates no implementation authority and changes no repository control surface.
