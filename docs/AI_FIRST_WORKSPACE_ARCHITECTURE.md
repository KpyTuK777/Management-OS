# AI-first Workspace Architecture

## Purpose and status

Home is the future AI-first operational workspace of Management OS. The owner
begins by expressing intent rather than selecting a module. The Assistant organizes
that intent, presents only operationally relevant decisions and context, and routes
deeper work into the existing specialized workspace that owns it.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; Phase 1 presentation foundation implemented |
| Delivery milestone | Sprint 7 — UX Evolution |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Stable system name | Home |
| Architectural role | AI-first operational workspace |
| Scope | Product and interaction architecture only |

This architecture extends [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
and [Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md). It does not
create an AI Workspace module, redesign existing domain modules, prescribe a UI,
or implement runtime behavior.

Home's role across the complete operational experience is described in the
[Owner Journey](OWNER_JOURNEY.md).
The consistent Assistant presence within Home is synthesized in
[AI Assistant Identity](AI_ASSISTANT_IDENTITY.md); this document remains
authoritative for workspace architecture and hierarchy.

## Current implementation boundary

Phase 1 establishes the intent-first Home hierarchy, read-only continuity for
active SOP Executions, responsive behavior, and preserved direct sidebar access.
Phase 2 activates an honest page-memory-only Natural Capture interaction for text
entry, unchanged review, continued editing, and explicit discard.

AI interpretation, classification, recommendations, domain approval workflows,
contextual handoff, permanent storage and learning, and Adaptive Workspace behavior
remain unimplemented.

The approved
[Natural Capture Interaction Foundation — Phase 2](NATURAL_CAPTURE_INTERACTION_FOUNDATION.md)
defines the implemented page-memory text, review, edit, and discard interaction.
It authorizes no AI interpretation, domain routing, or permanent storage.

## Architecture assessment

The current Dashboard follows a traditional aggregation model: attention items,
focus tasks, portfolio statistics, daily KPIs, timeline, activity, prototypes, and
module-oriented quick actions compete on one screen. This makes system structure
and available information more prominent than the owner's current intent.

The future Home should answer three questions:

1. What do you want to accomplish?
2. What genuinely requires your judgment now?
3. What active work should you resume?

It should not summarize every system merely because the information is available.
Home coordinates presentation, capture, and routing but owns no domain records.

```text
Home / AI-first operational workspace
  ├── Natural Capture
  ├── Immediate human decisions
  ├── Active operational continuity
  ├── Contextual recommendations
  └── Specialized-workspace routing
```

Existing modules remain directly accessible. Intent-first is the default journey,
not a mandatory intermediary. Direct navigation supports deliberate browsing,
deep editing, audit, correction, accessibility, and degraded operation when AI is
unavailable.

## Workspace interaction model

Home communication follows the
[AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md). Message roles and
temporary, unavailable, uncertain, recommended, awaiting-approval, completed, and
failed states must remain linguistically distinct.

The primary interaction is one natural input area. Text is the initial channel;
future voice must enter the same Natural Capture lifecycle rather than create a
separate organizational path.

```text
Natural input
  → Intent recognition
  → Relevant context gathering
  → Destination and action preparation
  → Confidence assessment
  → Clarification when necessary
  → Bounded preview
  → Owner approval
  → Owning module
```

Home contains no module-specific creation forms. It may complete lightweight
interpretation and approval in place, then open a specialized workspace only for
deeper editing, evidence inspection, or structured review.

### Resting state

When no input is active, Home presents the primary input, the most important
current decision if one exists, resumable active work, and the minimum relevant
context. Empty space must not be filled with low-value metrics.

### Prepared outcome

Home presents the interpreted intent, likely destination, prepared result,
confidence or material uncertainty, and exact action awaiting approval.

### Clarification

Home asks one concise, meaning-based question only when Natural Capture cannot
resolve a material ambiguity from existing context.

### Handoff and return

After approval, the owning module validates and mutates. When deeper work is
required, Home passes the approved context to that workspace. Completion returns
the owner to the current operational picture without requiring context
reconstruction.

## Information hierarchy

### Level 1 — Primary intent

Natural Capture is the dominant Home capability. It communicates that the owner
may express a need without selecting a module and that nothing persistent changes
without approval.

### Level 2 — Immediate human judgment

Immediate visibility is reserved for a bounded action awaiting approval, blocking
ambiguity, urgent operational risk, time-sensitive decision, failed workflow that
requires intervention, consequential record conflict, or active Execution decision.

### Level 3 — Active operational continuity

Home exposes the smallest set needed to resume meaningful work: an active
Execution, unfinished capture, accepted action awaiting deeper editing, current
primary focus, time-sensitive commitment, active Operational Case, or directly
relevant pending Review.

### Level 4 — Contextual recommendations

Home shows only a small number of evidence-backed, relevant, non-duplicative, and
bounded recommendations. The Recommendations Center remains the complete workspace
for evidence, history, review, and decision management.

### Level 5 — On-demand context

Portfolio statistics, completed counts, average progress, KPI history, full
timeline, activity history, lower-priority recommendations, Knowledge previews,
system history, detailed evidence, search, and module navigation remain available
on demand without competing for immediate attention.

## Current Dashboard disposition

| Current element | Future treatment |
| --- | --- |
| Operational risks | Retain only when timely judgment or intervention is required |
| Current focus | Retain in compact form for operational continuity |
| Natural Capture | Promote to the dominant interaction |
| Active Execution | Surface when applicable |
| Pending approval or clarification | Surface because it requires human judgment |
| Contextual recommendations | Show selectively; keep full lifecycle in Recommendations Center |
| Portfolio totals and progress statistics | Move to Portfolio or Analytics |
| Daily KPI grid | Move to Analytics or show on demand |
| Full daily timeline | Move to Calendar or planning workspace |
| Recent activity | Make available on demand |
| Module quick actions | Remove from the primary hierarchy |
| Global search | Retain as secondary deliberate retrieval |
| Inbox preview | Replace with Natural Capture state |
| Knowledge preview | Move to Knowledge or contextual retrieval |
| Prototype panels | Retire from future primary architecture |
| Working-memory prototype | Replace with governed active-work context |
| System-status banner | Show only for material failure or degraded capability |
| Additional Context catch-all | Replace with purposeful on-demand context |

## Visibility and interruption rules

Information deserves immediate visibility only when the owner must decide, delay
creates material risk, work is active and resumable, an approved action requires
completion, a conflict blocks safe progress, or the owner explicitly requested or
pinned it.

Recency, measurability, availability, incompleteness, module membership, or AI
generation do not make information immediately important.

An interruption requires a stronger condition: safety or data-integrity risk,
imminent consequence, blocked active workflow, expiring explicit approval, or a
conflict preventing an authorized action. Ordinary recommendations, metrics,
activity, and non-urgent Reviews remain non-interruptive.

## Relationship with existing architecture

- **Natural Capture** owns input interpretation, context, confidence,
  clarification, preview, approval, and handoff rules.
- **AI Assistant** organizes, explains, and prepares without owning Home or domain
  data.
- **Recommendations Center** owns evidence-based improvement opportunities and
  their decision lifecycle; Home presents only a relevant subset.
- **Adaptive Workspace** applies only an exact approved Workspace Emphasis under
  its [canonical architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md); Home must not
  adapt layout, visibility, priority, or navigation autonomously.
- **Specialized modules** retain all domain CRUD, validation, evidence, and deeper
  editing responsibilities.
- **Operational Case** provides the bounded aggregate for non-routine operational
  reasoning; Home may surface relevant Case state but owns neither the Case nor its
  linked records. Case authority remains defined by the
  [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md).
- **Shared navigation and search** remain available but secondary to intent-first
  interaction.

The approved [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md)
may influence Home and navigation emphasis after bounded owner approval. Operating
Context remains subordinate to current intent, timely human judgment, operational
risk, and active-work continuity, and it never removes capability access.
Multiple contexts may remain available, at most one may be the durable primary
context, and absent or invalid emphasis uses the neutral workspace.

AI-first must not mean AI-dependent. A non-AI degraded state preserves direct
module navigation, deliberate search, active-work access, and truthful disclosure
that interpretation or recommendations are unavailable.

## Cognitive-load analysis

The architecture removes module selection before expression, manual classification,
repeated context search, passive metric scanning, equal treatment of notifications,
unnecessary form navigation, and context reconstruction after handoff.

It intentionally preserves judgment over ambiguous meaning, competing priorities,
consequential tradeoffs, recommendation acceptance, process change, permanent
knowledge, personal preference, and destructive or structural action.

Primary risks and controls are:

| Risk | Control |
| --- | --- |
| Empty-input uncertainty | Concise contextual capability cues, not a large prompt catalog |
| Recommendation overload | Small material subset on Home; full set in Recommendations Center |
| Hidden-state anxiety | Predictable on-demand access and no suppression of urgent information |
| Assistant opacity | Concise reasoning, sources, confidence, and approval consequence |
| AI dependency | Direct module access and explicit degraded behavior |
| Premature context switching | Complete lightweight review on Home; hand off only for deeper work |

## Product Review

The approved Product Review criterion applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

The architecture reduces module selection, passive scanning, manual classification,
and unnecessary navigation. It preserves authority through bounded approval,
explainable prioritization, direct module access, non-autonomous recommendations,
and explicit Adaptive Workspace approval.

The architecture is approved conditionally as future product direction. Home
remains the stable system name and “AI-first operational workspace” describes its
role. This preserves the Product Vision principle **Home is for today** while
changing today from a collection of panels into an intent-first operational
relationship.

## Recommendation and sequencing

Evolve Home according to this hierarchy:

```text
1. Express intent
2. Resolve decisions requiring judgment
3. Resume active work
4. Consider relevant recommendations
5. Request supporting context
6. Enter specialized workspaces for deeper work
```

Implementation requires separate approved proposals for Home information
architecture, attention and interruption policy, contextual recommendation
selection, degraded non-AI behavior, handoff and return, direct-navigation
preservation, privacy and AI governance, and measurable cognitive-load review.
