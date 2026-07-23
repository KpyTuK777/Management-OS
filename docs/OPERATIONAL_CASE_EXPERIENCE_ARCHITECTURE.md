# Operational Case Experience Architecture

## Purpose and status

This document defines the end-to-end owner experience of using Management OS to
turn an uncertain operational symptom into justified action, verified outcome,
and reusable learning.

| Property | Decision |
| --- | --- |
| Status | Approved experience architecture; not implemented |
| Delivery milestone | Sprint 8 architecture; post-v1 capability direction |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical experience | Operational investigation |
| Authority | Case entry, progressive naming, investigation orientation, progressive disclosure, Case-centered continuity, and cross-environment experiential consistency |
| Primary audience | Product, design, architecture, engineering, AI, research, and documentation collaborators |
| Lifecycle | Updated when the approved end-to-end Operational Case experience changes |
| Related documents | Owner Journey, Operational Case Architecture, Operational Reasoning Model, Case Evidence Architecture, Scenario Simulation Architecture, AI-first Workspace Architecture |

The source architecture documents remain authoritative for lifecycle, domain
ownership, Evidence semantics, reasoning, Simulation, approval, and persistence.
This document defines no runtime, interface implementation, entity, storage,
migration, or navigation change.

## Experience promise

Management OS should feel like a calm operational investigation workspace. The
owner is solving one operational situation, not administering management
artifacts. The experience continuously helps the owner understand:

- what is currently known;
- what remains unknown or disputed;
- what is assumed but unverified;
- what judgment, Evidence, action, or observation is useful next.

After action, it also identifies the outcome still waiting to be observed.

## First entry from Home

The owner may begin with uncertain natural wording:

> I think our sales are declining.

Home treats this as a reported concern and possible Symptom, not as a Fact, Cause,
Case title, diagnosis, or navigation choice. The Assistant may explain the
interpretation and prepare a Case draft. Persisting the Case requires the approved
owner confirmation.

The initial presentation is deliberately small:

```text
Case #0247
New investigation

Entry signal: Reported symptom
“I think our sales are declining.”

Known
- The owner suspects a sales decline.

Still needed
- Relevant period
- Sales definition
- Comparison baseline
```

The next interaction asks for the smallest missing input that materially improves
investigation readiness. It does not begin with a comprehensive Case form.

## Progressive naming

A Case begins without an owner-authored title. Three concepts remain distinct:

| Concept | Experience role |
| --- | --- |
| Case identifier | Stable system-assigned reference, such as `Case #0247` |
| Reported concern | Immutable preservation of the owner's original wording and provenance |
| Working title | Neutral, concise, revisable orientation label for Home, Search, links, and notifications |

The working title may emerge after initial framing; it does not require verified
causal understanding. It must not turn a Symptom or early Hypothesis into a
diagnosis. AI may propose a title, but material renaming remains visible and
owner-controlled.

The owner can edit the working title at any time. Editing never changes the Case
identifier, reported concern, Evidence, Hypotheses, or verified conclusion. The
interface continuously identifies it as a working title and warns against causal
language that the Evidence does not support.

```text
Case #0247 — New investigation
“I think our sales are declining.”

  -> Investigating Q2 sales decline
  -> Declining repeat sales in the enterprise segment
  -> Enterprise renewals declined after response-time deterioration
```

The final form is appropriate only when Evidence supports it. Unresolved,
inconclusive, abandoned, and no-action Cases remain valid without a causal title.
The reported concern is never overwritten, and recognition must not depend on a
volatile AI-generated label.

## Operational investigation experience

The owner-facing investigation follows the approved non-linear reasoning grammar:

```text
Reported symptom
  -> Case established and framed
  -> Evidence requested and collected
  -> Current operational understanding
  -> Hypotheses and causal understanding
  -> Alternatives and decision
  -> Execution or observation
  -> Observed outcome
  -> Review and learning
  -> Knowledge or practice promotion
```

These are adaptive perspectives, not mandatory record-completion steps. New
Evidence may return the owner to an earlier perspective. A single Root Cause is
never required: sufficient understanding may include multiple interacting Causes,
bounded uncertainty, an external condition, or enough Evidence to justify action
without complete causal proof.

The default Case orientation summarizes:

- current condition and intended outcome;
- strongest supporting and conflicting Evidence;
- material Evidence gaps and assumptions;
- current explanations and their status;
- the next meaningful owner judgment;
- active action and the outcome or guardrail being monitored.

The Operational Timeline visually distinguishes ordinary events from accepted or
candidate Operational Inflection Points. Inflection Points emphasize where
observable behavior demonstrably changed, while the interface keeps “changed
after” separate from “changed because of.” Opening a point reveals its before/after
condition, Evidence, Hypotheses, confidence, uncertainty, and nearby events.

`New investigation` is the broad experience state. `Reported symptom` describes
the initial entry signal; it does not assert that a measured deviation or verified
Fact exists. This presentation remains compatible with the canonical Captured and
Framed lifecycle states and does not introduce a new persisted lifecycle.

## Evidence experience

The owner gathers Evidence for the investigation rather than uploading files into
an information system. The dedicated Case Evidence experience includes collected,
requested, unavailable, conflicting, stale, and decision-used Evidence.

Reports, statements, KPI snapshots, exports, notes, emails, files, contracts,
photos, authorized external references, observations, derived calculations, and AI
summaries may participate. Their owner-facing status remains clear:

| Label | Meaning |
| --- | --- |
| Source | Original authorized material |
| Derived | Reproducible calculation or transformation |
| Summary | Interpretation linked to its supporting sources |
| Assumption | Unverified input, never Evidence |
| Modeled | Conditional Scenario output, never observation |
| Training | Gym-only material, never organizational Evidence |

The default view reveals relevance, conflicts, gaps, and freshness. Provenance,
lineage, authorization, retention, and transformation detail remain available on
demand. AI may prepare classification and relationships; the owner retains
consequential interpretation and decision authority.

Every material decision keeps a visible path to the Evidence snapshot, assumptions,
alternatives, uncertainty, rationale, guardrails, approval, and later observed
outcome that belong to it.

Each Evidence item may explain its qualitative **Influence**: whether it established
the Symptom, confirmed or rejected a Hypothesis, revealed a contradiction, opened
a new investigation path, supported the final decision, or provided background
context. Influence explains contribution rather than ranking documents or assigning
percentages.

At Investigation completion, the experience presents an owner-reviewed Decision
Evidence Summary organized as Primary Evidence, Major Supporting Evidence,
Supporting Evidence, and Background Context. It preserves missing Evidence,
contradictions, limitations, and links to the decision-time snapshot. The
[Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md) remains authoritative.

The completion summary also presents accepted Operational Inflection Points with
their observed change, Primary and Supporting Evidence, rejected material,
supporting Hypotheses, confidence basis, and unresolved uncertainty. Knowledge
capture preserves these points as scoped learning about where the operational
system changed, not as universal causal rules.

### Evidence families

The owner may explore Evidence through non-exclusive investigative facets:

| Family | Examples | Investigative role |
| --- | --- | --- |
| Financial | P&L, Cash Flow, Balance Sheet | Financial condition, trend, constraint, and outcome |
| Operational | KPIs, SOPs, process maps, SLAs | Expected and actual operating conditions |
| Human | Interviews, meeting notes, witness statements | Experience, intent, explanation, and local context |
| Structural | Organization charts, reporting lines, RACI, responsibility matrices, interaction diagrams | Authority, coordination, ownership, escalation, and handoff conditions |
| Historical | Previous Cases, decisions, experiments, and related investigations | Precedent, recurrence, comparison, and prior outcomes |
| System | CRM or ERP exports, helpdesk data, and logs | System-recorded activity and operational history |

These families aid discovery; they do not replace epistemic classification or
determine evidentiary weight. One item may have several facets. Relevance,
provenance, scope, freshness, independence, conflict, and limitations determine
how it supports the current conclusion.

Structural Evidence is first-class because formal and actual authority,
coordination, reporting, incentives, and handoffs may contribute to operational
conditions. Formal artifacts describe intended structure and do not prove actual
behavior; they should be compared with observations, Executions, communications,
interviews, delays, and escalations.

### Historical reasoning experience

The Assistant may proactively surface a materially similar historical Case when
its expected decision value exceeds the interruption cost. Every suggestion states:

- why the previous Case appears similar;
- where scope, context, Evidence, or timing differs;
- which prior Evidence request, decision, or verified outcome may be useful;
- what uncertainty and transfer limits remain.

Similarity supports retrieval, never an identical Cause or reusable Solution.
Previous Case conclusions remain scoped to their original conditions.

Inflection Point similarity uses behavioral-change shape, Operating Context, and
Evidence patterns. Keywords may assist retrieval but can never be the sole
similarity basis. Every match explains the matched pattern and material contextual
differences before presenting previous reasoning.

Accepted Experience Patterns may also be surfaced from Operational Memory. The
experience explains the current trigger, matched behavior and context, supporting
and contradicting episodes, material differences, uncertainty, and Evidence that
could validate relevance now. Historical experience supports investigation; it is
never presented as current Evidence, a transferred Cause, or a ready Solution. See
the [Operational Memory Architecture](OPERATIONAL_MEMORY_ARCHITECTURE.md).

## AI investigation partnership

AI actively advances **investigation readiness**, not autonomous Case authority.
It may identify Evidence gaps, request appropriate authorized material, organize
Evidence, distinguish Facts from assumptions, expose contradictions, ask concise
material questions, retrieve related Cases, compare Hypotheses, highlight
uncertainty, and prepare the next investigative step.

The owner advances consequential interpretation, lifecycle, decision, execution,
verification, closure, and promotion boundaries. AI must not conclude without
Evidence, suppress conflicting material, transform similarity into Cause, invent
certainty, or make forward lifecycle movement appear equivalent to progress.

AI continuously safeguards investigation discipline by checking Evidence
completeness, Hypothesis quality, unresolved uncertainty, contradictions, missing
information, forgotten Evidence, and whether apparent progress is supported. It
counters premature conclusions, confirmation bias, and unsupported assumptions
without turning those checks into mandatory artifact completion.

## Simulation experience

Simulation opens an alternative investigation branch from a visible frozen Case
baseline. It does not duplicate the Case or become a disconnected simulation
library.

```text
Reality Case #0247
Decision-time baseline
  -> Scenario A: maintain current capacity
  -> Scenario B: add account managers
  -> Scenario C: change renewal prioritization
```

The transition preserves the originating Case, baseline time, assumptions changed
from Reality, variables, limits, uncertainty, operational risks, unintended
consequences, second-order effects, and modeled status. Returning from Simulation
returns to the same real Case decision.

Language remains conditional: **under these assumptions**, **plausible**, and
**modeled output**. Simulation never presents a branch as a prediction, observed
outcome, or correct decision.

## Operational Gym experience

Operational Gym feels structurally familiar because it uses the same investigation
grammar. Persistent environment identity makes its fictional, historical, or
curated source and consequence model unmistakable.

Gym feedback evaluates framing, Evidence selection, assumption discipline,
alternative consideration, causal caution, guardrails, and outcome interpretation.
It does not primarily reward record completion, convergence on one predetermined
answer, or the number of artifacts produced. Retry, compressed time, coaching,
hints, failed action, inconclusive Evidence, and justified no action are valid
training mechanics or outcomes.

## Progressive disclosure

The experience reveals complexity in three levels:

1. **Orientation** — situation, Case state, next meaningful action, major gap, and pending decision.
2. **Investigation** — Evidence, explanations, alternatives, decision, execution, measures, and outcome.
3. **Audit and specialist detail** — provenance, lineage, confidence basis, conflicts, model validation, snapshots, retention, and authorization.

The product must not reproduce module overload as a permanent wall of Case stages.
It surfaces the next meaningful reasoning need while keeping the complete history
and all participating domains accessible.

## Navigation and continuity

The owner normally remains within the Case throughout a bounded investigation.
Opening a Report, SOP, Execution, Recommendation, source record, or Scenario Branch
preserves the originating Case, explains why the record matters, and provides a
clear return path.

This continuity does not transfer domain ownership. Independent destinations remain
available for reusable libraries, cross-Case analysis, audit, maintenance, Search,
direct access, accessibility, and degraded operation.

Home remains the stable primary workspace. It may surface a Symptom awaiting Case
confirmation, Evidence need, pending decision, active intervention, outcome awaiting
verification, or Case ready for learning. It does not reproduce the complete Case
workspace or become a universal Case dashboard.

## Learning through use

Repeated use should teach the Operational Reasoning Model implicitly. The product
reinforces source awareness, Evidence gathering, separation of observation from
interpretation, causal caution, explicit decisions, safe exploration, outcome
verification, and deliberate learning without requiring the owner to study a
framework.

AI must not optimize for Case completion, naming certainty, artifact count, or a
premature sense of progress. Silence, an unresolved state, further monitoring,
another cycle, and justified no action remain valid.

## Experience risks and guardrails

| Risk | Guardrail |
| --- | --- |
| Premature diagnosis through naming | Neutral working title; preserved concern; verified conclusion remains separate |
| Volatile AI renaming | Rename only after material reframing; owner-controlled change |
| Case-stage overload | Progressive disclosure and next-judgment orientation |
| False linearity or one-Root-Cause bias | Non-linear navigation, plural Causes, uncertainty, and inconclusive outcomes |
| Evidence theater | Emphasize relevance, independence, freshness, conflict, and decision use rather than volume |
| AI anchoring | Preserve source wording, alternatives, conflicts, and interpretation labels |
| Simulation or Gym contamination | Persistent environment identity and strict Evidence boundaries |
| Case tunnel vision | Related-Case and cross-Case Insight access without losing active Case context |
| Premature closure | Monitoring, deferred verification, unknown outcome, another-cycle, and no-action states |

Implementation requires separate proportionate planning and explicit APPLY
authorization.
