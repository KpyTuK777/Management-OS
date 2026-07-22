# Mobile Experience Architecture

## Purpose and status

The Management OS mobile experience is an operational companion for immediate
retrieval, effortless thought capture, bounded active-work continuity, and small,
well-understood decisions. It is not a reduced desktop interface and does not
reproduce every module, form, or governance activity on a smaller screen.

| Property | Decision |
| --- | --- |
| Status | Approved product and interaction architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Architectural role | Mobile retrieval, capture, continuity, and bounded-decision surface |
| Scope | Product and interaction architecture only |

This document is canonical for the role, interaction model, navigation,
retrieval, capture, interruption, offline, and interaction boundaries of mobile.
It participates in the [Owner Journey](OWNER_JOURNEY.md) without redesigning
existing domain modules or changing their ownership.

The [Platform Responsibility Model](PLATFORM_RESPONSIBILITY_MODEL.md) is canonical
for the responsibility boundary between Desktop and Mobile. This document applies
that boundary specifically to the mobile experience.

The [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md),
[Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md), and
[AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md) remain authoritative
for their capabilities. The [AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md)
governs mobile system and Assistant messages.

## Current implementation boundary

Management OS is currently a static browser prototype using device-local browser
storage. Responsive presentation does not constitute the canonical mobile product
experience defined here.

No cross-device synchronization, mobile application shell, intelligent global
retrieval, voice capture, mobile notifications, managed offline cache, offline
mutation, contextual AI recommendation, or Assistant runtime behavior is implied
or authorized by this architecture.

## Mobile product philosophy

Mobile serves moments between focused work. It helps the owner retrieve what is
needed, preserve an emerging thought, resume a bounded activity, or resolve one
clear decision without reconstructing the organization of Management OS.

Desktop remains the construction and governance workspace for sustained attention,
comparison, detailed authoring, structural change, and consequential review.

| Mobile optimizes for | Desktop optimizes for |
| --- | --- |
| Immediate retrieval | Deep exploration and comparison |
| Natural Capture | Detailed authoring |
| Active-work continuity | Planning and restructuring |
| Bounded decisions | Complex reviews |
| Contextual recommendations | Evidence synthesis |
| Short interactions | Extended work sessions |

Both surfaces participate in one organizational system. Mobile creates no parallel
domain, alternate record, or weaker source of truth.

### Governing principles

1. **Intent before navigation.** Search, Capture, and continuation do not require
   module selection.
2. **One meaningful outcome per interaction.** Mobile avoids multi-step
   organizational administration.
3. **Complexity is hidden, not discarded.** Preparation may simplify a decision,
   but provenance and consequences remain inspectable.
4. **Consequential work uses the appropriate surface.** Mobile hands off work that
   requires sustained context or structural judgment.
5. **Quiet is the default.** Interruption requires material and timely owner value.
6. **Authority remains visible.** Silence, dismissal, navigation, and inactivity
   never constitute approval.
7. **Degraded behavior is honest.** The system distinguishes unavailable, stale,
   temporary, pending, and applied states.

## Mobile interaction model

The mobile experience supports five owner intentions.

| Mode | Owner intention | Mobile responsibility | Boundary |
| --- | --- | --- | --- |
| Retrieve | Find or understand something now | Return concise, sourced context | Read-oriented by default |
| Capture | Preserve a thought naturally | Preserve the original input and prepare its next safe state | No permanent outcome without approval |
| Continue | Resume current work | Restore the immediate context and bounded next action | Do not expose the entire workload unnecessarily |
| Decide | Resolve one clear recommendation or request | Explain evidence and consequence, then preserve explicit choice | Complex or structural judgment hands off |
| Handoff | Continue with deeper attention | Preserve object and interaction context for desktop | Never claim continuity before its dependencies exist |

The interaction modes are contextual surfaces over existing capabilities:

- Home provides orientation, Capture, and active continuity;
- Global Search provides cross-module retrieval;
- Natural Capture preserves input and, in its future approved form, prepares an
  organizational proposal;
- the Assistant clarifies, explains, and prepares recommendations;
- Executions own active-work state;
- Recommendations Center owns recommendation review and disposition;
- domain modules validate and perform approved mutations;
- the Personal Operational Model may provide future context only within its
  approved explicit-learning boundaries.

Mobile coordinates these capabilities but owns no domain records.

## Mobile-first owner journeys

### Quick retrieval

```text
Open
  -> Search or ask
  -> View a concise result
  -> Inspect source when needed
  -> Close or continue on desktop
```

### Thought capture

```text
Open Capture
  -> Enter naturally
  -> Review the preserved original
  -> Edit, discard, or continue
  -> Future: review an Assistant proposal
  -> Explicitly approve or leave temporary
```

Future voice input enters the same lifecycle. It is an input method, not a separate
organizational workflow.

### Continue active work

```text
Open
  -> See current active work
  -> Resume the immediate step
  -> Record a bounded result
  -> Receive truthful continuity confirmation
```

### Review a recommendation

```text
Recommendation becomes available quietly
  -> Owner opens it
  -> Evidence and consequence are explained
  -> Accept, reject, defer, or inspect further
  -> Owning module applies only an approved action
```

A recommendation that requires structural comparison, extensive editing, or a
hard-to-reverse choice may be viewed on mobile but completes on desktop.

### End a mobile interaction

The owner should be able to leave after retrieval, capture, continuation, or a
decision without a manufactured completion ritual. Unresolved temporary or pending
state is disclosed concisely; the system does not create guilt, streak pressure, or
artificial urgency.

## Mobile navigation

Mobile navigation represents owner intentions rather than copying the desktop
sidebar.

| Primary destination | Purpose |
| --- | --- |
| Home | Current orientation, continuity, and selective attention |
| Search | Immediate retrieval across Management OS |
| Capture | Globally available natural input |
| Active | Resume bounded current work |
| More | Direct module access, settings, and less frequent destinations |

These are semantic destinations, not a prescribed visual component. Search and
Capture remain reachable from ordinary mobile contexts and should support
comfortable one-handed operation.

Navigation must:

- avoid placing every desktop module in the primary hierarchy;
- preserve direct module access through secondary navigation;
- return the owner to prior context after a lightweight action;
- protect unfinished temporary capture according to its disclosed lifecycle;
- make desktop handoff explicit when a safe mobile boundary is reached;
- keep recommendations contextual or available through Recommendations Center
  rather than granting them a primary destination by default;
- preserve accessible alternatives to gesture-only interaction.

## Search-first experience

Global Search is a primary mobile interaction. Subject to permissions and approved
retrieval capabilities, it may retrieve from Notes, Knowledge Base, SOPs,
Executions, Reviews, Insights, Hypotheses, Improvement Proposals, and other
canonical organizational records.

Results prioritize likely relevance to the immediate intent while preserving
organizational provenance. A result communicates, when applicable:

- identifying content;
- entity type and source module;
- relevant status;
- why it is relevant when interpretation contributed;
- whether its context is partial, cached, or potentially stale.

The owner should not need to understand module structure to find information, but
must be able to see where the information belongs.

### Search rules

- Search is read-oriented by default.
- The immediate answer precedes deeper navigation and advanced controls.
- Grouping reflects intent and relevance, not only module boundaries.
- Filters remain progressively disclosed.
- Partial retrieval is never presented as complete retrieval.
- No result is presented as authoritative when supporting context is insufficient.
- Search history does not become permanent behavioral memory without an explicit
  retention rule and owner control.
- Empty, partial, unavailable, cached, and offline states remain distinct.

Search never silently modifies records, hides disagreement between sources,
manufactures certainty, or converts retrieval into a recommendation without
identifying that transition.

## Capture-first experience

Natural Capture is globally available and optimized for short, one-handed
interaction. It accepts natural text without first asking for a destination,
preserves the owner's original wording, and distinguishes temporary input from
permanent organizational knowledge.

```text
Natural input
  -> Temporary preservation
  -> Owner review
  -> Future Assistant interpretation and context gathering
  -> Proposal or concise clarification
  -> Owner approval
  -> Owning module performs the approved mutation
```

The currently approved pre-interpretation foundation stops at temporary
preservation, review, editing, and discard. Interpretation, routing, permanent
storage, synchronization, and learning require their separately approved
capabilities.

When AI-supported Natural Capture becomes available:

- high confidence prepares one proposed outcome for approval;
- moderate confidence presents the leading outcome and a material alternative;
- low confidence asks one bounded clarification question;
- very low confidence preserves the input safely or offers an explicitly approved
  Inbox outcome.

Confidence never grants authority. Mobile should not replace concise clarification
with a classification form. When clarification becomes complex, the input remains
preserved for later continuation.

## Active-work continuity

Mobile exposes only enough active-work context to resume safely:

- the active entity and immediate position;
- the next meaningful step;
- material blockers or due context;
- a bounded progress action when its consequence is clear;
- direct access to the owning module or desktop handoff.

Active work remains owned by its domain module. Mobile does not create a competing
task model or reinterpret completion. A cross-device handoff must preserve entity,
position, and unresolved temporary context, but may claim this continuity only
after approved identity and synchronization architecture exists.

## AI recommendations on mobile

Mobile recommendations are selective, concise, evidence-backed, and quiet by
default. Suitable mobile recommendations include a bounded next action, an
owner-requested reminder, a clearly explained operational exception, or a proposal
with a simple and reversible consequence.

Desktop continuation is preferred for SOP restructuring, workspace reorganization,
multi-record changes, extensive evidence comparison, policy decisions, and other
structural outcomes.

Every mobile recommendation preserves:

- the distinction between evidence and interpretation;
- the reason it is relevant now;
- the consequence of approval;
- Accept, Reject, Defer, and inspect-further behavior where applicable;
- owning-module validation and mutation.

Recommendations are not notifications by default.

## Notification philosophy

A notification is justified only when delayed awareness would create meaningful
operational cost or when the owner explicitly requested the interruption.

Appropriate candidates include an approaching owner-selected commitment, blocked
active work requiring judgment, failure of an approved operation, or a material
time-sensitive exception. Passive Insights, ordinary recommendations, product
engagement prompts, and usage encouragement normally remain inside Management OS.

Every notification explains what happened, why the owner is being interrupted,
and what decision is required, if any. Dismissal is not rejection, postponement is
not approval, and silence is not consent. Lock-screen detail respects configurable
privacy boundaries.

## Offline and degraded operation

Offline behavior is an explicit trust state, not a hidden technical condition.
The mobile experience distinguishes:

- available and current;
- cached and potentially stale;
- temporarily preserved on this device;
- pending synchronization;
- unavailable offline.

Initial offline behavior should be conservative:

- allow disclosed temporary local capture only when it can be preserved safely;
- provide read-only access only to intentionally cached information;
- show last-known freshness;
- avoid consequential offline mutations;
- never report a pending action as applied;
- never silently merge or overwrite conflicting records.

Cross-device continuation and offline mutation require approved identity,
synchronization, conflict, privacy, encryption, retention, expiry, and revocation
architecture. This document does not define or authorize those systems.

## Interaction limits

The interaction boundary follows cognitive complexity and consequence rather than
screen size alone.

| Appropriate on mobile | Desktop-oriented |
| --- | --- |
| Search and concise reading | Large-scale comparison |
| Natural Capture | Detailed Knowledge authoring |
| Review, edit, or discard temporary input | SOP authoring and restructuring |
| Resume bounded active work | Complex Execution design |
| Simple progress recording | Full operational Reviews |
| Recommendation triage | Multi-record or structural changes |
| Short clarification | Architecture and workspace governance |
| Concise supporting evidence | Bulk, destructive, or administrative actions |
| Explicit desktop handoff | Sustained analysis and evidence synthesis |

Mobile must not simplify an approval until its consequence becomes unclear. When
the owner cannot evaluate the relevant evidence comfortably or the result is hard
to reverse, mobile prepares continuity rather than forcing completion.

## Cognitive-load and trust controls

The experience should expose one dominant purpose per state, minimize typing beyond
natural input, preserve context through ordinary interruption, and show only
information that changes the owner's immediate understanding or action.

Silence and visual restraint are valid states. Empty operational panels, generic
prompts, badges, and summaries are not added merely to fill space.

Trust requires:

- clear source and freshness;
- explicit temporary and permanent boundaries;
- inspectable recommendation evidence;
- visible approval consequence;
- correction, cancellation, and direct access;
- truthful failure and degraded-operation messages;
- no hidden learning from routine mobile behavior.

## Accessibility and one-handed operation

Common retrieval, Capture, continuation, cancellation, and confirmation actions
should remain within comfortable reach without making gesture use mandatory.
Implementation proposals must validate accessible names, touch-target clarity,
screen-reader sequence, text scaling, contrast, reduced motion, focus behavior,
orientation changes, error recovery, and non-visual status communication.

Accessibility cannot depend on the Assistant. Direct navigation, correction,
approval, and degraded operation remain usable without AI interpretation.

## Product Review

The canonical Product Review question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

This architecture removes module selection from common mobile journeys, makes
retrieval and Capture immediate, and limits visible work to current context. It
preserves human judgment through explicit approval, visible consequence, module
ownership, direct access, correction, and desktop handoff.

The architecture weakens the product if implementation turns mobile into an
attention-demanding inbox, copies desktop forms and navigation, overstates
synchronization, obscures consequences to shorten approval, or creates separate
mobile and desktop organizational truth.

## UX Review

The intended Owner Journey progression is:

```text
Oriented -> Understood -> Focused -> Informed -> In control -> Calm
```

UX Review must verify:

- one dominant intention and next action in each state;
- fast Search and Capture without prior module choice;
- concise and honest temporary, stale, pending, offline, and failure states;
- preserved context through interruption and handoff;
- progressive disclosure without hidden material consequence;
- easy correction, cancellation, dismissal, and direct module access;
- interruption only when timely owner value justifies it;
- calm session closure without performance pressure;
- accessibility and one-handed operation across supported mobile contexts.

## Architecture Review

Mobile remains a presentation and interaction surface. Domain modules remain the
systems of record and perform their own validation and mutation. The Assistant may
prepare, explain, and recommend but does not gain organizational authority.

Implementation planning must identify dependencies for global retrieval, identity,
synchronization, privacy, conflict handling, device-local retention, notification
delivery, and desktop handoff before claiming those behaviors. No mobile-specific
shortcut may bypass canonical data, approval, learning, or quality boundaries.

## Recommendation and sequencing

Adopt this canonical role:

> Mobile is Management OS's retrieval, capture, continuity, and bounded-decision
> surface. Desktop remains its deep-work, authoring, review, and governance
> surface.

Sequence future capability planning as follows:

1. **Retrieval and Capture foundation:** mobile Home, Search entry, temporary
   Natural Capture, direct module access, and honest capability states.
2. **Operational continuity:** active-work resumption and safe, bounded progress
   interactions.
3. **Assisted interaction:** AI-supported Capture proposals, concise clarification,
   and contextual recommendations under existing approval boundaries.
4. **Resilient continuity:** cross-device handoff, notifications, and offline
   behavior only after synchronization, privacy, conflict, retention, and trust
   dependencies are approved.

Each stage requires proportionate Implementation Planning, explicit APPROVE, and
APPLY under [Team Governance](TEAM.md#implementation-planning-standard). A
separate Implementation Plan and Plan APPROVE are required only when the stage
changes a canonical or ADR-level boundary. This architecture does not authorize
implementation or alter approved module architecture.
