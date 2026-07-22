# Natural Capture Interaction Foundation — Phase 2

## Purpose and status

Phase 2 defines the first interactive Natural Capture behavior after the AI-first
Home Phase 1 presentation foundation. It lets the owner enter, review, edit, and
discard natural text while making no claim that Management OS understands or has
permanently saved it.

| Property | Decision |
| --- | --- |
| Status | Approved interaction architecture; not implemented |
| Delivery milestone | Sprint 7 — Natural Capture Interaction Foundation, Phase 2 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Scope | Text interaction and temporary state only |
| Excluded | AI interpretation, classification, context gathering, routing, recommendations, domain mutation, permanent storage, and learning |

This foundation extends the approved
[Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md) and
[AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md) without
changing their future architecture. It implements only the pre-interpretation
boundary conceptually:

```text
Raw input → preserve original meaning → owner-controlled temporary review
```

Phase 2 is a temporary-draft architecture, not an early classification system, a
Notes workflow, or a new domain entity.

## Interaction flow

```text
Empty capture
  → Owner enters natural text
  → Local editing draft
  → Owner selects “Review capture”
  → Temporary capture preview
      ├── Continue editing
      ├── Cancel and discard
      └── Keep temporarily within the current session
```

### Empty capture

Home presents one plain-text input, concise guidance that ordinary language is
accepted, and an honest statement that Phase 2 does not interpret or organize the
input. The review action remains unavailable until meaningful text exists. The
owner is not asked to choose a module, content type, or destination.

### Editing

Text remains in volatile interaction state while the owner types. The interaction
supports multiline text, normal editing, paste, undo, and redo. Whitespace may be
normalized for empty-input validation, but the original text must not be silently
rewritten.

The system does not inspect the text for intent, entities, urgency, dates,
destinations, or other meaning.

### Review capture

The primary action is **Review capture**, describing its real consequence. It must
not be labelled Save, Create, Send, or Ask AI. Submission creates a temporary
review state containing the owner's unchanged text; it creates no domain record.

The review exposes:

- the original text;
- an explicit **Temporary capture** status;
- confirmation that the text has not been interpreted or permanently saved;
- edit and discard actions;
- the consequence of navigation or session closure.

It exposes no destination, confidence, inferred title, extracted field,
recommendation, or simulated AI response.

### Edit and cancel

Editing returns to the input without losing text. Phase 2 maintains no invisible
owner-facing version history.

Cancellation of an empty capture returns Home to rest. Cancellation that would
destroy meaningful text requires one concise confirmation: **Discard this
temporary capture?** Confirmed discard removes all temporary state.

## Temporary-state lifecycle

```text
EMPTY
  → type → EDITING
  → review → REVIEWING
  → edit → EDITING

EDITING or REVIEWING
  → explicit discard → DISCARDED → EMPTY
```

When the owner navigates elsewhere within the same Management OS session, an
active draft may enter `TEMPORARILY_HELD` and return to `REVIEWING` or `EDITING`
when Home is restored. This remains Working Memory, not organizational data.

### Temporary capture envelope

Temporary state may contain only:

- original and current text;
- interaction state;
- creation and last-edit timestamps;
- whether the current version has been reviewed;
- session identifier.

It contains no inferred intent, destination, extracted entity, confidence,
recommendation, domain relationship, or learned preference. This envelope is an
architectural state description, not a domain entity.

### Persistence boundary

| Scope | Phase 2 rule |
| --- | --- |
| Typing and movement within Home | Preserve in volatile interaction state |
| Navigation within the active Management OS session | Preserve where safely possible and disclose the behavior |
| Return to Home in the same session | Restore with Temporary capture status |
| Refresh or browser recovery | No recovery guarantee |
| Browser or session closure | Discard by default |
| Domain or permanent storage | Prohibited |
| Cross-device synchronization | Prohibited |
| Personal Operational Model or Organizational Knowledge | Prohibited |

Cross-refresh or cross-session recovery requires a separate proposal and explicit
owner action such as **Keep this draft temporarily on this device**. That future
action must disclose location, expiration, recovery, and immediate removal. Phase
2 authorizes no such persistence.

### Discard rules

Temporary input is discarded after explicit confirmed discard, after the owner
clears it and leaves it empty, or when the session ends. A later phase may discard
it after a successful explicitly approved domain handoff, but failed or incomplete
operations must never remove it.

Timeout while editing must not destroy text. Phase 2 supports one active capture;
starting another must restore the existing capture or request confirmation before
replacement. It does not introduce a draft inbox or capture queue.

## Transparency and trust

All temporary-state, limitation, review, discard, and future AI communication
follows the [AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md).

The owner must be able to determine immediately:

| Question | Phase 2 answer |
| --- | --- |
| Is the text being interpreted? | No |
| Is it permanently saved? | No |
| Where is it? | In the current temporary capture session |
| What happens on confirmed cancel? | It is discarded |
| What happens when the session closes? | It is discarded |

Recommended language includes **Review capture**, **Temporary capture**,
**Continue editing**, **Discard**, **Not interpreted**, and **Not permanently
saved**. Language that implies processing, understanding, creation, submission, or
successful saving is prohibited.

## UX Review

The information hierarchy is the owner's text, its temporary status, the next
truthful action, and its retention consequence. Future capability language appears
only when it clarifies expectations; the Assistant-response region must not show
artificial processing.

Phase 2 removes module selection, fear of immediate organizational mutation,
uncertainty about submission, and ordinary in-session text loss. It adds one
bounded review decision, justified by the absence of an interpreted or durable
outcome.

The intended emotional progression is:

```text
Safe → Expressed → Reassured → In control
```

Accessibility requires a persistent visible label, programmatic status
announcements, keyboard-complete operation, focus transfer to review and back to
editing, no color-only status, destructive-confirmation focus management, and
usable reflow for long text, zoom, and narrow viewports.

## Architecture Review

```text
Home
  → presents Natural Capture interaction

Natural Capture interaction controller
  → owns temporary session state

Working Memory
  → temporarily preserves owner-authored text

Domain modules
  → receive nothing in Phase 2
```

Home remains a presentation and coordination surface. Temporary text begins in
Session Memory and may enter session-scoped Working Memory only. It never enters
the Personal Operational Model, Organizational Knowledge, Notes, analytics, or
learning evidence. Cancellation and abandonment are not learning signals.

Phase 2 may accept text, test for meaningful content, preserve it temporarily,
show it unchanged, permit editing, permit explicit discard, and explain its state.
It may not classify, summarize, title, interpret, extract fields, gather context,
recommend, route, mutate a domain, or establish a preference.

Failures preserve text and report the actual limitation. A failed review
transition leaves editing intact; unavailable restoration is never claimed;
discard is not reported until complete; long input is never silently truncated;
and multiple tabs must not silently overwrite one another. A failure never creates
a Note as fallback.

The architecture is approved because it preserves the future Natural Capture
boundary while stopping before intent recognition and domain ownership.

## Product Review

### Owner Journey impact

- **Primary stage:** Capturing a thought.
- **Secondary stages:** Returning to work and ending the work session.
- **Owner intention:** Express something without organizing it first.
- **Cognitive work removed:** Module and content-type selection.
- **Cognitive work added:** One bounded review decision.
- **Human judgment preserved:** Whether to retain, edit, or discard the text.
- **Interruption:** Destructive-discard confirmation only.
- **Emotional outcome:** Safe, reassured, and in control.
- **Overall finding:** **Strengthens**.

The canonical Product Review criterion is satisfied: this phase reduces cognitive
noise while preserving every decision that genuinely requires human judgment. It
performs no false organizational work and claims no unsupported understanding.

## Validation plan

Validation uses existing Product, Architecture, Design, UX, accessibility, and
technical reviews; it creates no approval process.

### Interaction evidence

- Blank input cannot enter review.
- Multiline and multilingual text remains unchanged.
- Review produces only a temporary preview.
- Edit restores complete text.
- Destructive cancellation requires confirmation.
- Confirmed discard removes all temporary state.
- Navigation follows the disclosed session-retention behavior.
- Failed transitions do not lose text.
- Only one active capture exists.

### Boundary evidence

- No domain record, storage call, inference, extracted metadata, context lookup,
  recommendation, routing action, or learning signal occurs.
- No background persistence occurs.
- Temporary state is not presented as organizational knowledge.

### Experience evidence

- Keyboard-only and screen-reader flows communicate every state and consequence.
- Focus remains predictable after review, edit, restoration, and cancel.
- Long input, paste, undo, whitespace-only input, zoom, reflow, narrow viewports,
  interruption, and restoration are covered.
- No language implies understanding, saving, recovery, or mutation that did not
  occur.

Any false claim about interpretation, persistence, recovery, or organizational
change blocks readiness.

## Recommendation

Implement Phase 2 later as the bounded sequence:

```text
Type → Review unchanged text → Edit or explicitly discard
```

Session-scoped navigation continuity is permitted. Cross-refresh, cross-session,
device persistence, AI behavior, and domain handoff remain excluded until
separately proposed and approved.

The governing contract is: Management OS preserves the owner's expression
honestly, claims no understanding it does not have, and makes no permanent
organizational change without explicit approval.
