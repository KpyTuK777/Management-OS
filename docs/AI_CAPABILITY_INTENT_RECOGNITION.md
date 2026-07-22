# AI Capability 01 — Intent Recognition

## Purpose and status

Intent Recognition is the first interpretive boundary between the owner's natural
expression and Management OS. It prepares one or more explainable interpretations
before any destination selection, routing, entity creation, recommendation, or
workflow execution.

| Property | Decision |
| --- | --- |
| Status | Approved AI capability architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Capability role | Interpret Natural Capture input |
| Authority | Preparation only |

[Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md) owns the broader
Capture lifecycle. [AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md) owns
provider-independent execution, and [AI Decision Policy](AI_DECISION_POLICY.md)
owns the behavioral choice after validation. This document specializes only the
first interpretive capability and authorizes no implementation.

## Capability philosophy

Intent Recognition answers: **What might the owner mean?** It does not answer
where information belongs, what entity should exist, what the system should
recommend, or what action should occur. Interpretations remain candidates rather
than facts, decisions, routing instructions, or approval.

### Governing principles

- **Interpret intent, not wording alone.** Use the owner's words as primary
  evidence, together with authorized context, to identify likely operational
  meaning. Never override explicit language, invent unstated motives, or remove
  material ambiguity.
- **Preserve meaning before organizing it.** Retain material wording, qualifiers,
  uncertainty, timing, conditions, and negation.
- **Interpret without acting.** Understanding intent grants no mutation, routing,
  recommendation, or workflow authority.
- **Prefer useful ambiguity over false certainty.** Preserve plausible alternatives
  when Evidence does not support one dominant interpretation.
- **Use context before asking.** Consult relevant authorized context before asking
  the owner to perform organizational work.
- **Make correction easy.** Use recognizable language rather than requiring the
  owner to understand internal taxonomies.
- **Truth before fluency.** Never let polished language conceal weak, conflicting,
  missing, or inferential Evidence.

The capability has preparation authority only. Its responsibility ends when it
returns validated interpretation candidates or an explicit inability to interpret
reliably.

## Capability contract

### Responsibility

Intent Recognition receives preserved Natural Capture input, interprets possible
operational meaning, uses a bounded context package where justified, identifies
one or more candidate intents, preserves material ambiguity and qualifiers,
describes confidence and its basis, identifies conflicts or missing context, and
returns a provider-independent candidate result.

It does not choose the final owner-facing behavior. Natural Capture and the AI
Decision Policy determine whether to prepare assistance, ask clarification, or
defer.

### Inputs

The owner's current wording is the primary Evidence for interpretation. Context is
supporting Evidence only: it may resolve references or distinguish meanings, but it
cannot replace, contradict, or override an explicit current statement.

| Input | Purpose | Boundary |
| --- | --- | --- |
| Original capture text | Primary Evidence of what the owner expressed | Remains unchanged and available for comparison |
| Capture identifier | Correlate the temporary interaction | Does not imply permanent storage |
| Interaction context | Identify the current surface or active workflow | Supporting Evidence, not authority |
| Authorized context package | Supply minimized relevant records | Read-only, purpose-limited, and source-attributed |
| Session context | Resolve references within the immediate interaction | Ephemeral and non-authoritative |
| Approved Personal Operational Model context | Apply an explicitly approved interpretation preference | Supporting only; cannot override current wording or organizational truth |
| Capability contract version | Establish taxonomy, output, validation, and failure behavior | Product-owned and provider-independent |
| Language and locale context | Preserve meaning affected by language | Cannot manufacture semantic certainty |

Intent Recognition does not independently search organizational data. It first
evaluates whether the preserved wording is sufficient. Only a declared evidence
gap invokes [Context Collection](AI_CAPABILITY_CONTEXT_COLLECTION.md), which
supplies authorized and relevant material.

### Intent taxonomy

The initial taxonomy follows Natural Capture: Idea, Note, Knowledge, SOP
improvement, Execution observation, Review, Reminder candidate, Workload signal,
and Unknown. Labels describe possible meaning, not destination or module ownership.
A Reminder candidate does not authorize creation or scheduling. The taxonomy is
versioned; provider-native labels never enter the product contract.

### Intent Interpretation Result

The provider-independent result contains:

| Field | Meaning |
| --- | --- |
| Original-input reference | Traceability to unchanged owner wording |
| Result state | Interpreted, ambiguous, insufficient, conflicting, invalid, or unavailable |
| Interpretation candidates | One or more plausible meanings |
| Candidate intent | Approved intent label or Unknown |
| Plain-language paraphrase | Concise explanation of the possible meaning |
| Candidate rank | Relative ordering, not an assertion of truth |
| Confidence band and basis | Product-owned strength and supporting or weakening Evidence |
| Material qualifiers | Timing, negation, uncertainty, conditions, and scope |
| Referenced-subject candidates | Possible subjects without entity creation |
| Context references | Material sources and freshness used |
| Alternatives and conflicts | Other plausible meanings and contradictory Evidence |
| Missing-information indicators | Information required for reliable interpretation |
| Clarification discriminator | The single distinction that would most improve interpretation |
| Limitations | Capability, context, Evidence, or language limitations |

### Candidate Interpretation Contract

Each candidate must:

- preserve the original wording for direct comparison;
- explicitly identify what comes directly from the owner's wording;
- explicitly identify what is inferred from authorized context;
- never present contextual inference as something the owner said;
- preserve material qualifiers and uncertainty;
- identify supporting and conflicting Evidence;
- expose material assumptions and alternatives;
- carry independently evaluated confidence;
- remain correctable without altering the original input;
- avoid destination, routing, recommendation, approval, and action language.

Candidates must be meaningfully distinct rather than superficial paraphrases.

### Prohibited behavior

Intent Recognition must not create, edit, delete, merge, route, or persist
entities; modify domain data; select a destination; execute or schedule workflows;
create reminders, Notes, Tasks, Knowledge Entries, Reviews, or proposals; prepare
an Observation or Recommendation; prepare or request approval for a mutation;
establish organizational truth or durable owner preferences; learn permanently;
contact external systems; broaden context access; use model-reported confidence as
product confidence; conceal ambiguity; infer private motives; or expose private
chain-of-thought.

## Runtime interactions

```text
Natural Capture
  → Preserve original temporary input
  → Validate owner session and capability authority
  → Evaluate evidence sufficiency
      ├── Sufficient → Bypass Context Collection
      └── Evidence gap → Context Collection → Minimized context package
  → Execute Intent Recognition through the Model Gateway
  → Normalize and validate candidate response
  → Evaluate product-owned confidence
  → Intent Interpretation Result
  → AI Decision Policy
      ├── Prepare assistance
      ├── Ask clarification
      └── Defer
  → Natural Capture review interaction
```

Intent Recognition stops at the validated result. A later capability requires its
own contract, context, validation, and policy evaluation.

### Relationship to Natural Capture

Natural Capture owns original-input preservation, temporary state, submission,
review, editing, cancellation, discard, owner-facing clarification, and later
orchestration. Intent Recognition supplies possible meaning only.

Editing the original input creates a new recognition request and makes prior
interpretations stale. Selecting or correcting a candidate applies only to the
current interaction unless a separately approved learning process receives
explicit permission for durable learning.

### Interaction with Context Collection

Context Collection is a conditional runtime capability, not part of Intent
Recognition. Intent Recognition proceeds directly from preserved wording when that
Evidence is sufficient. When it declares a material evidence gap and eligible
categories, Context Collection returns a minimized, authorized, source-attributed
package.

Context may include the current surface, active Execution or entity, relevant
Notes, Knowledge, SOPs or Reviews, immediate Session or Working Memory, and
explicitly approved Personal Operational Model preferences.

Context Collection must begin with the current wording, retrieve the smallest
sufficient context, treat context as supporting rather than primary Evidence,
preserve provenance and conflicts, and never claim unavailable context was checked.
Historical behavior and Personal Operational Model context may never override a
current explicit statement.

Missing non-material context may lower confidence without blocking recognition.
Missing material context triggers clarification or deferral.

### Interaction with AI Decision Policy

Intent Recognition produces Evidence for policy evaluation; it does not select a
behavior autonomously.

| Policy outcome | Eligibility for this capability |
| --- | --- |
| Remain silent | Only cancellation or supersession may end processing quietly |
| Ask clarification | Eligible when one material distinction can improve interpretation |
| Prepare assistance | Eligible for presenting interpretation candidates |
| Prepare observation | Prohibited; interpreting owner input is not observational analysis |
| Prepare recommendation | Prohibited |
| Request approval | Prohibited because no consequential action is prepared |
| Defer | Required for unreliable, invalid, unauthorized, or unsupported interpretation |

## Confidence handling

Confidence is product-owned and assessed across semantic clarity, intent-label fit,
qualifier preservation, reference resolution, context relevance and freshness,
input-context consistency, candidate separation, completeness, and validation.
Each candidate has independent confidence; rank is not certainty.

Confidence decreases whenever an interpretation extends materially beyond the
owner's wording. Contextual support can improve confidence only when it is relevant,
authorized, current, and consistent with the explicit statement. Repeated behavior
or a Personal Operational Model preference cannot compensate for contradictory
current wording.

| Condition | Required result |
| --- | --- |
| High confidence | Return the dominant interpretation while preserving material assumptions |
| Sufficient but qualified | Return the leading candidate and material alternative; prefer easy correction over interrogation |
| Low with bounded ambiguity | Return candidates and one clarification discriminator |
| Very low, conflicted, or incomplete | Return insufficient or conflicting state; do not guess |

### Multiple interpretations and clarification

Return multiple candidates when materially different meanings remain plausible.
Rank them using product-owned Evidence, state the distinction, and keep the set
small enough for calm review. Candidates must not differ only by destination.

Flag clarification only when ambiguity is material, authorized context cannot
resolve it, it concerns owner meaning rather than system organization, and one
concise discriminator can substantially improve the result. Imperfect confidence,
missing fields for a future entity, informal language, or multiple destinations do
not independently justify a question.

If reliable interpretation would require speculation about the owner's motives,
the capability must return plausible alternatives, flag clarification, or defer.
It must never manufacture a motive to produce a cleaner classification.

## Explainability

Every presented interpretation must clearly distinguish:

- words, qualifiers, and meaning taken directly from the owner's statement;
- relationships or meaning inferred from authorized context;
- supporting, conflicting, missing, or stale Evidence;
- material alternatives and assumptions;
- why clarification is needed, when applicable;
- that nothing has been routed, saved, recommended, or executed.

Explainability provides concise Evidence, not private chain-of-thought, internal
prompts, or provider-native reasoning.

## Failure and uncertainty behavior

| Condition | Required behavior |
| --- | --- |
| Empty or non-meaningful input | Return invalid input without interpretation |
| Unsupported language or capability | State the limitation and defer |
| Non-material context unavailable | Continue with lower confidence and disclose the limitation |
| Material context unavailable | Return insufficient context; clarify or defer |
| Input conflicts with historical or Personal Operational Model context | Treat current explicit wording as primary, expose the conflict, and reduce confidence |
| Interpretation requires speculation about motives | Return alternatives, request clarification through policy, or defer |
| Candidates remain similarly plausible | Return bounded alternatives and a clarification discriminator |
| Provider unavailable | Use an approved equivalent fallback or return unavailable |
| Schema, fidelity, or Evidence validation fails | Reject before presentation; retry safely or defer |
| Output includes routing, recommendation, or mutation | Reject as an authority violation |
| Owner edits, cancels, or supersedes input | Invalidate or discard the stale result without learning or downstream action |

Failure never creates a Note, Inbox item, or other permanent fallback silently.

## Validation requirements

Production eligibility requires scenario validation covering:

- clear single intent and multiple genuine interpretations;
- literal wording versus intended operational meaning;
- idioms and culturally or contextually dependent phrasing;
- shorthand and incomplete but interpretable expressions;
- indirect requests;
- contradiction within the statement or between statement and context;
- negation, changed intent, conditions, timing, and uncertainty;
- context conflicting with explicit wording;
- historical behavior or Personal Operational Model conflict;
- missing, stale, unauthorized, and unavailable context;
- unsupported input and adversarial instructions inside captured text;
- hallucinated Evidence, invented motives, and lost qualifiers;
- attempted routing, recommendation, approval, or mutation;
- cancellation, editing, stale responses, provider failure, and degraded operation;
- accessibility, understandable alternatives, and plain-language correction.

Validation must confirm that contextual inference is visibly separated from owner
wording in every applicable case. Authority, source-fidelity, invented-motive, or
explicit-wording override violations are Blocking under the
[AI Quality Framework](AI_QUALITY_FRAMEWORK.md).

## Product and architecture impact

Intent Recognition lets the owner write naturally without selecting a module and
makes ambiguity visible before organization. The refined Evidence boundary allows
understanding of idiom, shorthand, and indirect intent while preventing historical
context or fluent speculation from overruling what the owner actually said.

This capability adds no domain module, entity, storage model, mutation, provider,
or workflow authority. It establishes the first production capability contract
inside the approved AI Runtime and keeps entity resolution, destination
classification, routing, recommendation, action preview, approval, and domain
mutation as later separate capabilities.

Production implementation depends on the Protected AI Runtime, owner identity and
runtime authorization, context-access and privacy rules, Model Gateway, result
validation, Natural Capture temporary-state integration, and AI Quality Framework
validation. Provider selection remains separate.

## Recommendation

Use this architecture as the canonical contract for AI Capability 01. Every
implementation proposal must preserve primary-wording Evidence, supporting-only
context, visible inference, bounded alternatives, product-owned confidence, strict
authority limits, and truthful failure. This document authorizes no implementation.
