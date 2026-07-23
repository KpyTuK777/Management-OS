# AI Quality Framework

The [Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) supplies the
cross-capability obligations, habits, and anti-patterns evaluated here. This
framework is an evaluation overlay across policy, capabilities, runtime paths, and
providers—not a final runtime execution stage.

## Purpose and authority

The Assistant whose implemented behavior this framework evaluates is synthesized
in [AI Assistant Identity](AI_ASSISTANT_IDENTITY.md). Identity consistency is not a
substitute for the quality Evidence and review requirements defined here.

This framework defines how Management OS evaluates the quality of implemented AI
behavior. It determines whether a capability behaves like a useful, understandable,
bounded, correctable, and trustworthy operational partner.

| Property | Decision |
| --- | --- |
| Status | Canonical AI quality standard |
| Delivery milestone | Sprint 7 — AI Operational Layer |
| Accountable owner | Product Architect & AI Strategist |
| Approval authority | Product Owner |
| Scope | Product behavior, evidence, and qualitative evaluation |
| Excluded | Provider benchmarks, model selection, implementation technology, maturity advancement, and release approval |

The [AI Capability Roadmap](AI_CAPABILITY_ROADMAP.md) owns capability evolution.
The future AI Capability Maturity Model will determine when evidence is sufficient
for a capability to advance. This framework defines quality dimensions and evidence
but does not authorize implementation, grant `APPLY`, advance maturity, or approve
release.

## Quality principles

AI behavior is high quality when it:

1. creates meaningful owner value;
2. removes more cognitive work than it creates;
3. preserves source meaning and authority;
4. explains material reasoning and uncertainty;
5. asks only necessary questions;
6. prepares bounded and useful outcomes;
7. preserves owner approval;
8. accepts correction without resistance;
9. fails visibly and safely;
10. supports essential work when AI is unavailable;
11. respects personal and organizational boundaries;
12. earns trust without encouraging blind reliance.

The approved Product Review criterion applies:

> Does this reduce the owner's cognitive noise while preserving every decision
> that genuinely requires human judgment?

## Evaluation model

Quality is assessed against a defined unit:

```text
Capability
  + Supported scenario
  + Context state
  + Expected owner outcome
  + Risk classification
  + Actual behavior
```

Output text alone is insufficient evidence. Evaluation must include the operational
scenario, available context, expected product behavior, consequence, and risk.

### Qualitative states

| State | Meaning |
| --- | --- |
| **Strong** | Behavior consistently supports the intended owner outcome and boundaries. |
| **Acceptable** | Behavior is useful and safe, with minor non-material limitations. |
| **Needs Attention** | Weakness creates avoidable effort, confusion, or reduced value without a critical violation. |
| **Blocking** | Behavior violates authority, privacy, source integrity, or another mandatory boundary, or is materially unsafe or misleading. |
| **Not Assessed** | Evidence is absent, insufficient, or stale. |
| **Not Applicable** | The dimension does not apply to the capability or scenario. |

No composite score is permitted. Strong value cannot offset Blocking authority or
privacy behavior. A mandatory Blocking finding prevents advancement or release;
mandatory Not Assessed evidence also prevents advancement. Every Needs Attention
or Blocking finding requires an owner, disposition, and review condition.

Truth, authorization, privacy, owner-authority, Evidence-integrity, and
history-rewriting Ethos violations are mandatory **Blocking** findings. Each
implemented capability maps supported scenarios to applicable obligations,
observable habits, and anti-pattern probes. Provider replacement requires renewed
behavioral Evidence, not only interface or benchmark compatibility.

### Evaluation sequence

```text
Define supported scenario
  → Establish expected product behavior
  → Exercise normal, ambiguous, adverse, and degraded cases
  → Collect observable evidence
  → Evaluate applicable quality dimensions
  → Record findings and limitations
  → Assign owners to weaknesses
  → Repeat after material correction
  → Supply evidence to readiness governance
```

## Quality dimensions

### Owner value

**Purpose:** Determine whether the capability solves a meaningful operational
problem rather than adding AI behavior for its own sake.

**Observable evidence:** Completed outcomes, reduced manual organization,
successful handoffs, structured owner feedback, voluntary reuse, abandonment, and
comparison with the non-AI path.

**Good behavior:** Natural Capture prepares a useful organizational outcome;
Contextual Retrieval finds the relevant SOP without repeated manual search.

**Poor behavior:** Polished output does not help complete work, duplicates an
easier existing workflow, or produces observations without meaningful action.

**Guidance:** Evaluate whether the owner reaches a meaningful outcome more
effectively. Novelty, verbosity, and apparent sophistication are not value.

### Cognitive-load reduction

**Purpose:** Determine whether the capability removes organizational effort,
interruption, and unnecessary decisions.

**Observable evidence:** Clarification relevance, navigation and classification
steps, corrections before approval, repeated context requests, interaction effort,
owner confusion, and interruption frequency.

**Good behavior:** The Assistant chooses the likely destination, gathers available
context, and presents one bounded preview.

**Poor behavior:** The owner explains module structure, answers questions existing
records could resolve, or reviews a noisy recommendation feed.

**Guidance:** Evaluate the complete interaction. A correct output reached through
excessive interrogation may still be poor quality.

### Outcome and recommendation usefulness

**Purpose:** Determine whether a prepared outcome or recommendation is relevant,
actionable, bounded, and worth attention.

**Observable evidence:** Approval, rejection, edits, postponement, abandonment,
rejection reasons, completion after acceptance, and repeated irrelevant proposals.

**Good behavior:** A recommendation cites repeated skipped SOP steps and proposes
reviewing one specific step.

**Poor behavior:** The proposed action is vague, disproportionate to Evidence, or
repeated after rejection without new information.

**Guidance:** Acceptance is evidence, not proof. Rejection can demonstrate healthy
owner judgment and must not automatically count as failure.

### Approval quality

**Purpose:** Determine whether the owner understands and controls the exact action
being authorized.

**Observable evidence:** Preview completeness; target, destination, and consequence
visibility; accept, edit, reject, and cancel behavior; post-approval correction;
and surprising or unauthorized change.

**Good behavior:** A multi-entity capture supports partial approval, and a material
change to the action requires renewed approval.

**Poor behavior:** Approval silently authorizes broader changes, a new target reuses
old approval, or postponement is treated as consent.

**Guidance:** Acceptance rate is diagnostic, not a universal KPI. Very low
acceptance may mean poor relevance; very high acceptance may mean usefulness or
insufficient scrutiny. Any unauthorized mutation is Blocking.

### Correction burden

**Purpose:** Determine how often and how severely the owner must repair AI
interpretation or output.

**Observable evidence:** Destination, intent, field, relationship, and factual
corrections; recurrence; correction effort; and post-action repair.

**Good behavior:** Minor edits are occasional, easy, and respected throughout the
active workflow.

**Poor behavior:** The owner repeatedly corrects the same classification, must
restart after correction, or repairs broad consequences from a small error.

**Guidance:** Interpret frequency with severity and scenario complexity. One
authority-threatening correction outweighs several stylistic edits; few corrections
may reflect abandonment rather than correctness.

### Explainability

**Purpose:** Determine whether the owner can understand why a material
classification, interpretation, or recommendation was produced.

**Observable evidence:** Cited records, confidence basis, limitations, separation
of fact from interpretation, and access to supporting Evidence.

**Good behavior:** An SOP recommendation identifies the Executions and Reviews that
support it and exposes missing coverage.

**Poor behavior:** The explanation restates the conclusion, cites no source, or
hides limitations behind technical detail.

**Guidance:** Explanation is proportional. Routine capture may need one sentence;
consequential recommendations need Evidence, limitations, and exact consequences.

### Confidence calibration

**Purpose:** Determine whether expressed confidence reflects Evidence, ambiguity,
and known limitations.

**Observable evidence:** Confidence across clear, ambiguous, conflicting, and
missing-context scenarios; correction patterns; clarification; and fallback use.

**Good behavior:** Confidence falls when records conflict, and unresolved capture
uses a safe fallback.

**Poor behavior:** High confidence appears despite contradictory Evidence, or
destination unavailability is mistaken for classification uncertainty.

**Guidance:** Evaluate by confidence band and scenario type. Numerical calibration
is required only when a capability has an approved and meaningful basis for it.

### Context relevance

**Purpose:** Determine whether the capability uses the smallest relevant context
without missing decisive information.

**Observable evidence:** Materially used records, irrelevant access, missed direct
relationships, stale information, conflicts, and current-page influence.

**Good behavior:** “This step feels outdated” consults the active SOP and its
directly related evidence.

**Poor behavior:** Unrelated recent records influence the result, stale Notes
outweigh current domain records, or broad personal context is consulted without
need.

**Guidance:** More context is not inherently better. Relevance, permission, source
authority, and minimization all matter.

### Source fidelity and integrity

**Purpose:** Determine whether original meaning, uncertainty, provenance, and
authoritative records remain intact.

**Observable evidence:** Source-to-draft comparison, retained qualifiers,
provenance, invented details, source changes, and missing-record behavior.

**Good behavior:** A draft preserves “probably,” and a recommendation remains
linked to Evidence and Hypothesis.

**Poor behavior:** An idea becomes a commitment, limitations disappear, generated
text becomes source Evidence, or historical Execution data is rewritten.

**Guidance:** Material invention, provenance loss, or unauthorized source rewriting
is Blocking.

### Authority preservation

**Purpose:** Determine whether owner authority and module ownership remain intact.

**Observable evidence:** Mutation paths, approval records, owning-module
validation, rejection behavior, workspace adaptation, preference learning, and
Workflow Layer conformance.

**Good behavior:** The Assistant prepares, the owner approves, and the owning
module validates and mutates.

**Poor behavior:** A recommendation edits an SOP directly, confidence triggers
automatic persistence, or repeated behavior creates a permanent preference.

**Guidance:** Authority preservation is mandatory. A material violation is Blocking
regardless of value or correctness.

### Privacy and data-boundary compliance

**Purpose:** Determine whether personal and organizational context is used only
within approved boundaries.

**Observable evidence:** Context access, data categories, retention and deletion,
inspection and revocation, Personal Operational Model changes, and inappropriate
cross-context disclosure.

**Good behavior:** Only relevant context is used, Session Memory expires, and the
owner can inspect and remove a personal preference.

**Poor behavior:** Conversation silently becomes a profile, deleted preferences
continue to influence behavior, or personal inference becomes organizational truth.

**Guidance:** Unapproved personal learning or material boundary violation is
Blocking.

### Failure transparency and recovery

**Purpose:** Determine whether errors, missing capability, uncertainty, and partial
failure are visible and recoverable.

**Observable evidence:** Error communication, preserved drafts, partial outcomes,
false success, unavailable sources, and recovery effort.

**Good behavior:** A failed mutation preserves the draft and clearly states that
nothing was saved.

**Poor behavior:** The Assistant claims success before confirmation, loses original
input, or silently guesses missing context.

**Guidance:** False success is more serious than explicit failure. Recovery should
preserve owner work and a clear next step.

### Degraded-operation quality

**Purpose:** Determine whether essential work remains available when AI is
unavailable, limited, or disabled.

**Observable evidence:** Direct navigation, non-AI capture, active-work access,
unavailable-state communication, data integrity, and recovery.

**Good behavior:** Home discloses unavailable interpretation while preserving
modules, manual Notes, search, and active Executions.

**Poor behavior:** AI failure blocks capture, hides records, removes navigation, or
presents stale output as current.

**Guidance:** Degraded operation is ordinary product quality, not only incident
handling.

### Long-term owner trust

**Purpose:** Determine whether the capability earns durable reliance without
encouraging blind acceptance.

**Observable evidence:** Continued voluntary use, informed rejection and override,
correction behavior, trust after failure, revocation, surprise reports, and
cross-release consistency.

**Good behavior:** The owner uses the capability regularly, rejects weak proposals,
and can understand and correct changes over time.

**Poor behavior:** The owner accepts because consequences are unclear, avoids the
capability after unexplained behavior, or sees revoked beliefs return.

**Guidance:** Trust is not acceptance rate, usage volume, or absence of complaints.
Healthy trust includes inspection, correction, rejection, and direct control.

## Evidence sources

| Source | Evidence supplied |
| --- | --- |
| Scenario evaluation | Correctness, confidence, failure, and boundary behavior |
| Action previews | Approval clarity and consequence visibility |
| Accept, edit, reject, cancel, and postpone outcomes | Usefulness and decision quality |
| Correction records | Misclassification, factual error, and correction burden |
| Owning-module validation | Integration and mutation integrity |
| Source and provenance traces | Explainability, context relevance, and fidelity |
| Failure and recovery records | Transparency, preservation, and degraded quality |
| Structured owner feedback | Value, cognitive load, usefulness, and trust |
| Product and usability review | Workflow clarity and decision burden |
| Architecture and AI reviews | Boundary, confidence, learning, and failure quality |
| Privacy review | Context, retention, deletion, and personal-data compliance |
| Accessibility and Product Language review | Understandability and control |
| Longitudinal review | Durable value, trust, correction patterns, and drift |

Evidence is interpreted in context. Acceptance, rejection, correction, abandonment,
silence, and inactivity have multiple possible explanations and are never automatic
proof of value, failure, consent, trust, or correctness.

## Evaluation profiles

| Capability class | Mandatory emphasis |
| --- | --- |
| Read-only retrieval | Context relevance, source fidelity, explainability, privacy, degraded operation |
| Preparatory drafting | Owner value, fidelity, correction burden, approval, module validation |
| Recommendation | Usefulness, Evidence traceability, confidence, approval, rejection behavior |
| Personalization | Privacy, explicit learning, correction, revocation, long-term trust |
| Adaptive workspace | Authority, preview, approval, rollback, direct access, degraded operation |
| Predictive | Evidence coverage, confidence, limitations, non-factual communication |
| Coaching | Value, context balance, non-authoritarian language, authority, trust |

A capability inherits every mandatory dimension associated with its behavior.

## Evaluation cadence

### Capability Prototype

Establish supported scenarios, expected behavior, initial quality evidence, obvious
failure modes, and authority and source-integrity checks. Prototype evidence cannot
support release claims.

### Internal Validation

Evaluate normal, ambiguous, conflicting, missing-context, unsupported, failure,
degraded, authority, and privacy scenarios. Every applicable dimension receives
evidence and a qualitative state.

### Beta Ready

Require repeatable realistic evaluation, known limitations, correction and
rejection evidence, privacy and degraded-operation verification, no mandatory
Blocking dimension, and no mandatory Not Assessed dimension.

### Production Ready

Require stable regression and controlled-use evidence, support and recovery,
durable approval and authority behavior, complete limitations and privacy
documentation, and no release-blocking quality finding.

### Mature

Review sustained owner value, correction patterns, trust recovery, evolving
organizational context, authority stability, privacy effectiveness, and compatibility
across multiple release cycles.

## Relationship with AI Capability Maturity

```text
AI Quality Framework
Defines dimensions, evidence, and evaluation guidance
  → Capability evaluation
  → Qualitative findings
  → AI Capability Maturity Model
Determines whether applicable stage exit conditions pass
```

The Quality Framework defines quality and produces findings. The Maturity Model
will determine mandatory dimensions for each stage and whether exit conditions are
satisfied. Quality does not advance maturity or replace Product Review, Product
Maturity, or release authority.

The AI Capability Maturity Model remains a separately proposed document and is not
canonicalized by this approval. Formal maturity-stage integration therefore remains
pending its own `APPROVE` and `APPLY`.

## Product Review

The framework evaluates AI in owner terms: useful outcome, reduced organizational
work, clear decision, correction, authority, honest failure, continued non-AI work,
and durable trust. It prevents polished language or technical sophistication from
being mistaken for product quality.

The framework is approved as the product-quality standard for implemented AI
behavior.

## Architecture Review

The framework evaluates behavior without redesigning capabilities, remains
provider-independent, preserves domain ownership, separates evidence from maturity
authority, avoids composite scores, and supports risk-specific evaluation profiles.

It must not become a universal checklist: applicability is determined by capability
behavior and risk. Quality evidence does not itself authorize maturity advancement
or release.

## AI Review

Trustworthy behavior requires more than correct output. Appropriate uncertainty,
relevant context, source fidelity, bounded authority, visible failure, privacy,
correction, revocation, degraded operation, and durable owner trust remain mandatory
where applicable.

The framework is approved as a risk-aware, product-oriented evaluation standard.

## Canonical boundary

- **Owner:** Product Architect & AI Strategist
- **Approval authority:** Product Owner
- **Applies to:** Implemented AI capability behavior from Capability Prototype onward
- **Does not:** authorize implementation, grant `APPLY`, advance maturity, approve release, redefine Product Maturity, or define provider-specific metrics

Future AI capability architecture must identify its applicable quality dimensions.
Numerical thresholds belong only in capability-specific validation plans when the
measure is meaningful and justified.
