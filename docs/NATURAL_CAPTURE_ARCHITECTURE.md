# Natural Capture Architecture

## Purpose and status

Natural Capture is the primary future intake architecture between the owner and
Management OS. It accepts natural input, determines its likely operational meaning
and destination, gathers relevant context, and prepares an organizational outcome
without requiring the owner to understand the module structure.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 7 — AI Operational Layer, Feature 02 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Scope | Product architecture only |
| Excluded | LLMs, prompts, providers, APIs, speech recognition, embeddings, vector databases, and implementation |

Natural Capture extends the [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
without redesigning Dashboard, Notes, Knowledge Base, SOP, Executions, Reviews,
Insights, Hypotheses, or Improvement Proposals. It operationalizes the canonical
[Product Vision principle](PRODUCT_VISION.md#core-principles) that Management OS
should leave the owner only decisions requiring human judgment.

Its primary future presence is Home, whose intent-first role is defined in
[AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md).
Its place in the complete owner experience is described in the
[Owner Journey](OWNER_JOURNEY.md).

## Capture lifecycle

```text
Raw input
  → Preserve original meaning
  → Identify operational intent
  → Extract candidate details
  → Gather relevant context
  → Generate destination candidates
  → Evaluate confidence and conflicts
  → Prepare one organizational outcome
  → Clarify only when necessary
  → Show bounded preview
  → Owner approves, edits, redirects, or cancels
  → Owning module validates
  → Owning module performs mutation
  → Record the explicit outcome
```

Natural Capture accepts ordinary language without requiring module selection,
entity type, category, workflow selection, or structured formatting. The original
input remains available throughout interpretation and approval. The Assistant may
structure it, but must not remove material qualifiers, convert uncertainty into
certainty, invent facts, or turn an idea into an approved action.

The prepared preview is Working Memory, not a domain record. It identifies the
interpreted intent, proposed destination, prepared content, relevant fields,
confidence, material assumptions, and the exact mutation approval would authorize.

After approval, the owning module validates and performs the mutation. Natural
Capture confirms only a successful result; failed validation or persistence must
not be reported as completion.

## Intent model

Intent describes what the owner means. Destination identifies which existing
module should own the result. They must remain separate so that Notes does not
become the semantic category for every unstructured capture.

| Intent | Meaning | Likely destination or outcome |
| --- | --- | --- |
| Idea | A possibility, opportunity, or undeveloped improvement thought | Note, related project context, or future proposal candidate |
| Note | Information worth retaining without evidence that it is durable knowledge or action | Notes Inbox |
| Knowledge | Reusable understanding, reference material, method, or lesson | Knowledge Base |
| SOP improvement | Observation or proposed change concerning an existing procedure | Improvement Proposal path when prerequisites exist; otherwise contextual draft or Note |
| Execution observation | Something observed while performing an active SOP | Active Execution notes or later Review context |
| Review | Reflection on a completed Execution | Review Center |
| Reminder candidate | Time-related or follow-up action | Future Tasks or reminder capability; safe existing fallback while unavailable |
| Workload signal | Statement about capacity, overload, focus, or competing commitments | Dashboard or planning interpretation; safe fallback when unsupported |
| Unknown | Meaning or destination cannot be established safely | Clarification or Inbox Note fallback |

Intent recognition may consider action language, time expressions, reusable
framing, references to existing records, reflective or improvement language,
current operational context, and explicit approved corrections. These are
interpretation signals, not implementation rules.

One input may contain several distinct outcomes. Natural Capture separates them
only when their meanings or destinations are materially independent, shows the
split before approval, and allows the owner to approve only part of the bundle.

## Context model

Natural Capture may consult:

- current input, page, and entity;
- explicitly named and directly related records;
- existing Notes, Knowledge Entries, and categories;
- SOP definitions and provenance;
- active and completed Executions;
- Reviews, Insights, Hypotheses, and Improvement Proposals;
- existing projects;
- Dashboard workload and attention context;
- task or planning data when those domains exist;
- explicitly approved Personal Operational Model preferences.

Context is gathered progressively:

```text
Current input
  → Current entity or page
  → Explicitly named records
  → Direct relationships
  → Active operational state
  → Recent relevant records
  → Broader organizational patterns
  → Approved personal preferences
```

The Assistant consults the smallest amount of context needed for a reliable
outcome. Broader context is justified only when it prevents duplication, resolves
ambiguity, identifies an active relationship, detects a material conflict, or
avoids an unnecessary clarification question.

The owner must be able to inspect sources that materially affected routing.
Authoritative domain data prevails over Assistant inference, and current explicit
instruction prevails over personal preference. Conflicts lower confidence and are
shown rather than silently repaired.

## Confidence model

Natural Capture uses the Assistant's existing confidence dimensions: intent,
entity, destination, field, evidence, and action confidence. The weakest material
dimension governs behavior; confidence is not averaged in a way that conceals a
serious ambiguity.

### High confidence

When one intent and destination dominate, required information is present, no
material conflict exists, and the destination supports the action, Natural Capture
prepares one outcome and requests bounded approval without a classification
question.

### Low confidence

When two interpretations remain plausible and one missing distinction materially
changes the destination, Natural Capture asks one concise, meaning-based question,
then resumes the same capture without discarding the original input.

### Very low confidence fallback

Very low confidence is a capture fallback condition, not a replacement for the
Assistant's High, Medium, and Low vocabulary. It applies when intent remains
unknown, context is insufficient, clarification is unlikely to help efficiently,
or no supported destination exists.

Natural Capture then prepares a lossless Inbox Note, preserves the original
wording, explains why no stronger classification was made, and requires owner
approval before saving.

Destination availability is separate from confidence. The Assistant may be highly
confident that an input is a Task while Task creation is unavailable. It must state
the capability gap and prepare a safe existing fallback rather than lower the
classification confidence or simulate the missing module.

## Clarification strategy

Before asking, Natural Capture checks whether the answer exists in current input,
current context, or related records; whether a safe reversible draft can proceed;
whether correction is easier than interrogation; and whether guessing would
materially change meaning, destination, or consequence.

A clarification question:

- asks about meaning rather than module architecture;
- distinguishes the leading alternatives;
- contains one decision;
- uses ordinary product language;
- never requests information the system already has.

The default maximum is one question. A second is justified only when the first
answer reveals a new material ambiguity. If uncertainty remains, Natural Capture
offers the Inbox Note fallback instead of continuing to interrogate the owner.

## Approval boundaries

Natural Capture may interpret, gather read-only context, extract candidate fields,
compare destinations, prepare drafts, ask clarification, and explain confidence
without separate action approval.

It may not autonomously persist an entity, change a record or relationship, write
into an Execution or Review, create an Improvement Proposal, establish a permanent
preference, change Dashboard state, or archive, merge, overwrite, or delete data.

Approval identifies the action, destination, prepared content, fields, targets and
relationships, any multi-entity split, and expected consequence. A material change
requires renewed approval.

```text
Assistant prepares
  → Owner approves
  → Owning module validates
  → Owning module mutates
```

Natural Capture must never become a generic write path around domain validation.

## Failure strategy

| Failure condition | Required behavior |
| --- | --- |
| Multiple destinations are plausible | Present the leading interpretation and ask one meaning-based question |
| Context is insufficient | Ask one clarification; if unresolved, prepare an Inbox Note fallback |
| Evidence conflicts | Show the conflict, lower confidence, and avoid a consequential guess |
| No suitable destination exists | State the capability gap and prepare a safe existing fallback |
| Referenced record is missing | Ask for identity or retain input without inventing a relationship |
| Destination validation fails | Preserve the draft, report the problem, and do not claim success |
| A context source is unavailable | Continue only when it is non-material; otherwise clarify or defer |
| Input requests unsupported action | Preserve the request and explain that it cannot currently be applied |
| Part of a multi-outcome capture fails | Keep results distinct and never report full completion |

The Notes Inbox is the lossless fallback because it follows “Capture now. Organize
later.” Fallback preserves meaning, avoids invented structure, explains why a more
specific destination was not selected, and requires approval before saving.
Repeated fallback use is evidence that intent guidance, module capability, or
clarification quality may need review; it does not authorize automatic cleanup.

## Learning strategy

Capture quality may improve only from explicit owner actions such as an approved
destination, selected alternative, field edit, intent correction, rejection with a
reason, relationship correction, or explicit instruction to remember or revoke a
routing preference.

Clarification improves the current Session or Working Memory. Approved domain
records provide organizational context through their existing lifecycle. A durable
personal preference enters the Personal Operational Model only after explicit
approval.

One correction never establishes a permanent rule. Repeated behavior may cause the
Assistant to propose a preference, but only acceptance makes it durable. Silence,
abandoned previews, postponement, Assistant-generated text, failed mutations,
isolated events, and inferred motives are not permanent learning signals.

Corrections improve future guidance without rewriting historical capture outcomes.

## Architecture Review

The architecture is approved provided Natural Capture remains interpretation and
routing rather than domain ownership. It preserves read-only context gathering,
explicit approval, owning-module validation, the Assistant memory model, the
Learning Decision Pipeline, safe fallback, and honest disclosure of unavailable
capabilities.

Primary risks are growth into a generic workflow engine, excessive Inbox fallback,
over-classification, opaque context gathering, and approval fatigue. The controls
are bounded handoff, measurable and explained fallback, lossless preservation,
context minimization, and a concise single-preview confirmation.

## AI Review

Every outcome must be able to expose interpreted intent, destination, confidence
basis, material context sources, assumptions, limitations, and the exact action
awaiting approval. The architecture fails safely by preserving original input,
clarifying before consequential guesses, preferring a Note fallback over invented
structure, and never claiming failed or partial work as complete.

The conceptual architecture is approved. Implementation remains blocked until the
established AI governance, privacy, explainability, retention, correction,
revocation, and safety prerequisites are approved and verified.

## Product Review

Natural Capture transfers module selection, classification, context gathering, and
organizational preparation from the owner to the Assistant while preserving owner
authority over persistence, ambiguous meaning, consequential relationships,
process changes, multi-entity outcomes, permanent learning, and workspace change.

The approved Product Review criterion applies:

> Does this reduce the owner's cognitive noise while preserving every decision
> that genuinely requires human judgment?

The architecture is approved as the intended Natural Capture model. Initial
implementation, when separately proposed and authorized, must remain bounded to
text input, one capture at a time, existing-module context, intent and destination
preparation, concise clarification, lossless Inbox fallback, explicit preview,
owner approval, and owning-module mutation. Durable personal learning, autonomous
organizational change, and simulated unsupported modules remain excluded.
