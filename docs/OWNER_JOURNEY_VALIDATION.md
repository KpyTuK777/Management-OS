# Owner Journey Validation Framework

## Purpose and authority

This framework ensures that every future feature strengthens or preserves the
canonical [Owner Journey](OWNER_JOURNEY.md). It turns the journey into continuous
product-quality evidence without creating a new approval process, review stage, or
decision owner.

| Property | Decision |
| --- | --- |
| Status | Canonical product-experience validation standard |
| Delivery milestone | Sprint 7 |
| Accountable owner | Product Owner |
| Responsible for maintenance | Design Owner |
| Consulted owner | Product Architect |
| Applies through | Existing Product Review and Design Review |

The framework does not grant approval, replace Product or Design Review, prescribe
UI, redefine architecture, or authorize implementation. UX evaluation remains a
lens within existing Product and Design Review collaboration, not another formal
gate.

## Validation model

```text
Identify affected journey stage
  → Describe the owner's intention
  → Describe the changed interaction
  → Identify cognitive work removed and added
  → Verify preserved human judgment
  → Evaluate interruption and continuity
  → Evaluate emotional effect
  → Collect supporting evidence
  → Supply findings to existing reviews
```

The framework applies to product features, AI capabilities, module and workflow
changes, cross-module handoffs, navigation, forms, notifications, recommendations,
personalization, degraded states, and documentation that changes intended behavior.
Internal engineering changes remain in scope when they affect reliability, data
integrity, recovery, continuity, or the owner-visible experience.

### Evaluation states

| State | Meaning |
| --- | --- |
| **Strengthens** | Clearly improves one or more journey stages without materially weakening another. |
| **Preserves** | Maintains the approved journey and introduces no material new burden. |
| **Weakens** | Introduces avoidable cognitive load, fragmentation, interruption, authority loss, or emotional deterioration. |
| **Not Assessed** | Evidence is insufficient to determine the impact. |
| **Not Applicable** | A dimension is genuinely unrelated to the feature. |

No composite score is permitted. One serious authority, continuity, or
cognitive-load weakness cannot be averaged away.

- **Strengthens** supplies positive journey evidence.
- **Preserves** is acceptable for infrastructure, maintenance, risk reduction, and
  changes whose value is not primarily experiential.
- **Weakens** requires correction or an explicit tradeoff decision through the
  existing Product and Design ownership model.
- **Not Assessed** cannot support completion of an applicable review.
- **Not Applicable** requires a short rationale when applicability is not obvious.

## Journey Impact Assessment

Every feature proposal should contain one compact assessment:

```markdown
### Owner Journey impact

- Primary stage:
- Secondary stages:
- Owner intention:
- Current experience:
- Proposed experience:
- Cognitive work removed:
- Cognitive work added:
- Human judgment preserved:
- New interruption:
- Handoff or continuity effect:
- Emotional outcome:
- Journey Principles affected:
- Degraded or direct-access effect:
- Supporting evidence:
- Overall finding: Strengthens / Preserves / Weakens / Not Assessed
```

Simple changes may use one sentence per applicable item. The assessment identifies
one primary stage where possible and records affected transitions or downstream
stages.

Use the canonical journey stages:

1. First launch;
2. Returning to work;
3. Capturing a thought;
4. Receiving AI assistance;
5. Reviewing active work;
6. Performing deeper work;
7. Completing work;
8. Learning from work;
9. Receiving recommendations;
10. Improving organizational knowledge;
11. Personalization over time;
12. Ending the work session.

## Validation dimensions

### Journey alignment

Ask:

- Which stage and owner intention are affected?
- Does the feature support that intention directly?
- Does it create a detour, parallel workflow, or competing source of truth?
- Are implemented and future behavior distinguished?

**Strengthens** when the stage becomes clearer without duplicating another system.
**Weakens** when a parallel path or unnecessary module choice fragments the journey.

### Cognitive-load impact

Ask:

- What must the owner understand before receiving value?
- Which classification, search, navigation, or context work is removed?
- What new decisions, configuration, or correction work is added?
- Does the feature ask for information Management OS already has?
- Is cognitive load reduced overall or moved elsewhere?
- Does the primary interaction keep attention on the operational situation rather
  than product mechanics?
- Is each permanently visible explanation necessary for current interpretation,
  risk, authority, consequence, or action?
- Can normal-operation guidance recede while remaining retrievable?

**Strengthens** when the system prepares before asking for judgment. **Weakens**
when the owner must understand internal architecture or perform avoidable setup.

### Human-judgment preservation

Ask:

- Which decisions are prepared and which remain with the owner?
- Are product, priority, knowledge, process, personal, or destructive decisions
  hidden?
- Is the exact consequence visible before approval?
- Can the owner edit, reject, cancel, or bypass?
- Does the owning module still validate and mutate?

**Strengthens** when organizational mechanics disappear but consequential judgment
remains visible. Authority loss is a material **Weakens** finding.

### Interruption impact

Ask:

- Does the feature add a prompt, notification, recommendation, badge, or modal?
- Why must it appear now?
- Would contextual visibility be sufficient?
- Can similar demands be combined?
- Does postponement remain distinct from consent?

Only time-sensitive, blocking, consequential, or explicitly requested information
should interrupt.

### Administrative-effort impact

Ask:

- Does the feature add mandatory fields, status changes, confirmation, or upkeep?
- Can existing records or system preparation supply the information?
- Can the step remain optional?
- Does completion create another mandatory workflow or cleanup burden?

The feature should not turn Management OS into a reporting obligation.

### Calm continuity

Ask:

- Is active context preserved across handoff?
- Are completed, active, failed, and deferred states distinct?
- Can the owner return without reconstructing state?
- Are unresolved items discoverable without manufactured urgency?
- Can work continue when AI is unavailable?
- Does session closure remain calm and truthful?

### Journey Principles alignment

Verify applicable principles:

- intent before structure;
- continuity before summary;
- preparation before decision;
- judgment before interruption;
- progressive disclosure;
- explainability without noise;
- explicit learning;
- calm closure.

A contradiction requires correction or an explicit existing-owner tradeoff decision.

### Emotional progression

Evaluate the canonical progression:

```text
Safe → Oriented → Understood → Focused → Supported
  → Accomplished → Reflective → Informed → In control → Calm
```

Ask whether the interaction leaves the owner clearer and more in control or creates
pressure, guilt, surveillance, uncertainty, or inability to disengage. Emotional
findings must be grounded in observable experience rather than assumed personality.

### Progressive disclosure

Ask:

- What is the primary decision?
- Which information is required before it?
- Which Evidence or history may remain on demand?
- Is any material consequence hidden?
- Is internal complexity exposed without owner value?

The decision and consequence appear first; deeper Evidence remains accessible.

### Correction and bypass

Ask whether the owner can edit the result, change destination, bypass the Assistant,
use direct modules, preserve correction through the workflow, inspect and revoke
personal learning, and avoid repeated rejected behavior.

Correction should be obvious, bounded, and easier than restarting.

### Accessibility and Product Language

Ask whether action, status, confidence, failure, approval, and degraded paths are
accessible and whether language distinguishes fact, interpretation,
recommendation, uncertainty, and applied change consistently across handoffs.

## Product Review integration

The Journey Impact Assessment becomes standard evidence for Product Review. It
extends the existing questions:

> Does the change deliver the approved product outcome?

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

Product Review determines whether the feature supports owner intention, provides
meaningful value, strengthens or preserves the journey, justifies added effort,
preserves judgment, and avoids weakening downstream stages.

An applicable feature cannot pass Product Review while its journey impact is Not
Assessed, a material Weakens finding is unresolved, consequential judgment is
hidden, a Journey Principle is contradicted without approved rationale, or added
burden exceeds owner value. This is an existing Product Review completion
condition, not a new gate.

## UX Review integration

UX evaluation asks whether the owner can begin from intent, understand the next
meaningful action, correct or bypass assistance, inspect deeper Evidence without
overload, preserve context across handoff, understand completion and failure,
continue without AI, and experience the intended emotional progression.

Team Governance assigns UX/UI ownership to the Design Owner and Methodology
formalizes Design Review. UX Review here is therefore an evaluation lens inside
existing Design and Product Reviews, not a separate approval stage.

## Design Review integration

Design Review uses journey evidence to assess information hierarchy, primary-action
clarity, immediate versus on-demand visibility, interruption strength, progressive
disclosure, handoff continuity, completion and failure states, correction,
cancellation, accessibility, responsive behavior, Product Language, and emotional
tone.

The framework prescribes no component, layout, or styling. Design Review determines
how the approved journey is expressed through the Design System.

## Architecture Review relationship

Journey findings return to existing Architecture Review when a feature bypasses
owning-module validation, makes Home a domain owner, loses provenance, adapts the
workspace without approval, learns personal preferences implicitly, removes direct
module access, or prevents degraded operation. The framework identifies the impact
but does not decide the architectural resolution.

## Examples

| Feature | Primary journey effect | Finding | Reason |
| --- | --- | --- | --- |
| Prepare Knowledge destination from reusable capture | Removes module selection and preserves save approval | **Strengthens** | Intent before structure and preparation before decision |
| Require module selection before typing | Adds classification before expression | **Weakens** | Transfers organizational work to the owner |
| Add passive completed-project count to immediate Home | Competes with current decisions | **Weakens** unless materially actionable | Availability does not justify visibility |
| Show an unfinished active Execution on Home | Restores resumable context | **Strengthens** | Continuity before summary |
| Require Review before every Execution can finish | Adds mandatory reporting to closure | **Weakens** | Reflection should remain valuable and optional |
| Show one bounded SOP recommendation with Evidence | Removes manual comparison and preserves decision | **Strengthens** | Explainable preparation with explicit approval |
| Hide unused Home sections automatically | Removes workspace judgment and changes familiar structure | **Weakens** and authority-blocking | Requires recommendation, approval, then Adaptive Workspace |
| Improve storage failure handling | Preserves work and reduces false completion | **Preserves** or **Strengthens** | Reliability can improve the journey without visible novelty |
| Provide a calm session-close summary | Reduces mental residue when limited to meaningful state | **Strengthens** | Calm closure without performance reporting |

## Relationship with AI Quality

The [AI Quality Framework](AI_QUALITY_FRAMEWORK.md) evaluates implemented AI
behavior in depth. This framework evaluates a feature's effect on the end-to-end
Owner Journey. AI features use both; non-AI features use this framework without
requiring AI-specific evidence.

## Canonical boundary

Every feature must strengthen the Owner Journey or preserve it while delivering
necessary value. No feature should pass review by moving cognitive load,
administrative effort, interruption, or loss of control somewhere less visible.

This standard changes no ownership, approval, Sprint, architecture, or
implementation authority.

The pre-v1.0 [Cognitive Cleanup Architecture](COGNITIVE_CLEANUP_ARCHITECTURE.md)
adds an explicit gate: representative owners must orient rapidly, correct the
system without architectural knowledge, retain access to reasoning transparency,
and avoid material authority or uncertainty misunderstanding.
