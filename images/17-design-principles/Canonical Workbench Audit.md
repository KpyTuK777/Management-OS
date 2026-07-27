# Canonical Workbench Audit

## Purpose

This audit evaluates the current Management OS product against the Design Bible.

It does not propose a new interface, improve visual styling, or evaluate beauty. It asks one question of every existing element:

> Which Design Bible document justifies my existence?

If an element has no defensible answer, it should not remain.

## Audit basis

The audit examines the current implementation represented by:

- `index.html`;
- `js/natural-capture.js`;
- `js/sidebar.js`;
- the active Workbench rules in `css/pages.css`;
- desktop and mobile rendered states;
- the current deterministic prototype behavior.

The governing Design Bible includes all documents in `17-design-principles`, with particular weight given to:

- [Operational Dynamics](Operational%20Dynamics.md);
- [Thinking Table](Thinking%20Table.md);
- [Artifact First](Artifact%20First.md);
- [Shared Thinking Surface](Shared%20Thinking%20Surface.md);
- [Investigation Mindset](Investigation%20Mindset.md);
- [Spatial Logic](Spatial%20Logic.md);
- [Visual Gravity](Visual%20Gravity.md);
- [Visual Hierarchy](Visual%20Hierarchy.md);
- [Material Honesty](Material%20Honesty.md);
- [Watson Presence](Watson%20Presence.md);
- [Night Thinking](Night%20Thinking.md).

## Verdict language

- **Canonical** — the underlying decision is justified and should not be reconsidered without a serious reason.
- **Retain with constraints** — the decision is valid, but its current implementation is incomplete.
- **Rebuild** — the element has a justified role but its present model contradicts the Design Bible.
- **Remove** — the current element has no sufficient justification or creates false operational meaning.

## Compliance table

| Element | Supported Principles | Violated Principles | Missing Principles | Verdict |
|---|---|---|---|---|
| Home | Visual Gravity; Thinking Before Clicking; Investigation Mindset | Operational Dynamics: it opens a predetermined demo rather than restoring real operational context | State Visibility; Operational Memory; Context Preservation | **Retain with constraints** |
| Dock | Quiet Periphery; Visual Gravity; Thinking Table; Shared Thinking Surface | Some destinations and profile/mode remnants reflect application navigation rather than one operational space | Navigation contract; meaningful return to last context | **Canonical decision; simplify contents** |
| Matter Bar | Context Preservation; Visual Hierarchy | Placeholder search/notification controls and static update metadata imply unavailable behavior | Context Envelope; provenance of change; real Matter state | **Rebuild; remove placeholders now** |
| Workbench / Thinking Table | Thinking Table; Shared Thinking Surface; Night Thinking; Negative Space; Investigation Mindset | Literal desk treatment; fixed composition; unused area does not consistently act as working capacity | Scaling; fluid spatial growth; stable active neighborhood | **Rebuild behavior; retain central-surface decision** |
| Current Situation | Visual Gravity; One Investigation, One Center; Operational Dynamics | Static wording and weak relation to actual evidence changes | Versioning; change basis; residual uncertainty; approving authority | **Canonical role; rebuild completely** |
| Key Indicators | Artifact First; Visual Hierarchy, when sourced | Hard-coded values behave as decorative dashboard metrics without provenance | Artifact identity; verification; scope; source; lifecycle | **Remove current implementation** |
| Operational Artifacts / Evidence | Artifact First; Material Honesty; Investigation Mindset | Static buttons impersonate durable Artifacts; edits are not durable; files do not enrich real identity | Lifecycle; provenance model; lineage; orthogonal states; memory | **Rebuild completely** |
| Relationships | Spatial Logic; Artifact First | Hard-coded connectors are decorative, ungoverned, and causally ambiguous | Provenance; semantic type; lifecycle; accepted/rejected history | **Remove static connectors; rebuild completely** |
| Collections | Quiet Periphery; progressive presence; Shared Thinking Surface | Collection rail is visually unstable and backed by session-only arrays | Corpus/Working Set distinction; restoration; scale; Artifact identity | **Retain concept; rebuild behavior** |
| Contradictions | Visual Gravity; Investigation Mindset; Thinking Before Clicking | Contradictions are hard-coded summaries without provenance, lifecycle, or affected understanding | Severity basis; resolution history; relation to Current Situation | **Retain role; rebuild completely** |
| Operational Inbox | Thinking Table; Thinking Leaves Traces; Artifact First; Watson Presence | Literal notebook treatment risks skeuomorphism; contribution does not create a durable Artifact model | Persistent capture; provenance; lineage; Working Set admission | **Canonical placement and autonomy; rebuild substrate** |
| Watson and Semantic Review | Watson Presence; Owner-driven, Watson-assisted; Thinking First | Duplicate conversational and semantic-review paths; proposals can look operational without durable governance | Waiting/withdrawal model; correction memory; risk threshold; proposal lineage | **Retain role; rebuild behavior** |
| Inspection | Artifact First; Detail Never Destroys Context in intent | Overlay retains some background but does not preserve a complete Context Envelope; actions are mostly announcements | Origin, return, affected neighborhood, durable change, history | **Rebuild completely** |
| Navigation inside Workbench | Spatial Logic; Shared Thinking Surface in intent | Hash/page navigation and fixed stages substitute for movement through one operational space | Origin/destination/reason/return contract; neighborhoods; history navigation | **Rebuild completely** |
| State Visibility | Small labels distinguish some proposed or unconfirmed material | State is collapsed into text fragments and color; reviewed, verified, confirmed, rejected, active, and archived are not modeled independently | Entire orthogonal state model from Operational Dynamics | **Absent; build from model** |
| Operational Memory | Thinking Leaves Traces is suggested by copy | Session storage remembers isolated UI choices, not consequential reasoning | Artifact lineage; relationship history; Current Situation versions; rejected alternatives | **Absent; build from model** |
| Responsive / Mobile Workbench | Preserves Current Situation and the same broad roles | Spatial context becomes clipped; artifacts become partially unreadable; navigation covers working content | Mobile context preservation; focused neighborhoods; usable inspection and return | **Rebuild completely** |
| Legacy Board Inspection and Stage Navigation | Some old flows reference evidence, decision, and outcome architecture | Hidden dashboard-era regions remain in the product without serving the current Workbench | No current Design Bible justification for their duplicate presentation | **Remove** |
| Decorative material layer | Night Thinking; Operational Atmosphere; Material Honesty in intention | Wood, tape, paper, ruling, and notebook treatment become literal desk skeuomorphism in places | Clear role-based material semantics | **Reduce to justified material roles** |
| Placeholder utilities and simulated actions | None beyond superficial discoverability | They make technology visible without producing operational change | Event model; authority; state transition; memory | **Remove until real** |

---

# Element analyses

## Home

Home correctly asks what deserves attention and avoids a feature catalogue. Its sparse hierarchy supports Visual Gravity and Thinking Before Clicking. Enter-to-open keeps initial friction low. However, it opens a deterministic prototype rather than a remembered Matter with a Context Envelope. It does not communicate new risk, changed understanding, unresolved judgment, or the last meaningful working context. Therefore Home is justified, but its current operational content is not yet canonical. Retain the role and remove any remaining content that cannot be traced to real Matter state. Rebuild its behavior around Operational Memory before final implementation.

## Dock

The narrow Dock is one of the strongest current decisions. It returns space to the Workbench and behaves as Quiet Periphery. The temporary OS mark and consistent icon family do not compete with Current Situation. This orientation role is justified by Thinking Table, Visual Gravity, and Shared Thinking Surface. The weakness is conceptual scope: agenda, learning mode, profile remnants, and page hashes still reflect application navigation. The Dock should not become the model for movement inside a Matter. Its compact, subordinate existence can be considered canonical. Its destinations must still be audited and reduced to those with durable operational justification.

## Matter Bar

The Matter selector and visible working state support context and orientation. They help preserve the identity of the active investigation. The current update text, search button, and notification button are static or non-functional. These controls imply events and capabilities that Operational Dynamics does not actually provide. A quiet frame is justified; placeholder utilities are not. Remove the simulated controls rather than styling them. Rebuild the bar only after Matter state, last consequential change, and return behavior are real.

## Workbench / Thinking Table

The product correctly treats the Workbench as the primary surface rather than a conventional page. Current Situation, artifacts, contradictions, Collections, and Inbox occupy one broad operational environment. This implements Thinking Table, Shared Thinking Surface, Night Thinking, and Investigation Mindset at a compositional level. The surface is nevertheless a fixed scene: artifacts do not genuinely emerge, move by meaning, form neighborhoods, or scale. A large unused region sometimes reads as accidental emptiness rather than reserved working capacity. Literal wood and notebook cues occasionally make the physical metaphor more visible than the investigation. The central-surface decision is canonical. The behavioral and material realization must be rebuilt around Working Set, quiet memory, and role-based material hierarchy.

## Current Situation

One Current Situation is the correct operational center and is strongly justified by Visual Gravity, Visual Hierarchy, and Operational Dynamics. Its current placement makes the intended hierarchy understandable. Its wording, however, is static and only loosely affected by prototype actions. It has no explicit version lineage, approving authority, change basis, or residual uncertainty model. It therefore looks authoritative without implementing the dynamics of an authoritative working synthesis. The role and one-center rule are canonical. The current implementation must be replaced by a traceable synthesis that changes only through consequential evidence and owner-governed judgment.

## Key Indicators

Indicators can be valid operational Artifacts when they are materially relevant, scoped, sourced, and verified. The current values are hard-coded into the composition. They do not expose source identity, comparison basis, verification state, or relationship to Current Situation. As a result, they function like dashboard decoration and violate Artifact First. Their directional color does not repair the missing operational model. The current indicator group should be removed. Indicators should return only when they are real Artifacts justified by the active Matter.

## Operational Artifacts and Evidence

Visible type marks, artifact-centered positioning, and clickable material support Artifact First and Investigation Mindset. The current objects are still static buttons with fixed content. Editing changes temporary text but does not create durable identity, lineage, provenance, or history. Attachment actions open a file input without enriching the inspected Artifact. Type changes do not participate in an orthogonal state model. The implementation therefore simulates living objects without providing Operational Dynamics. Rebuild Artifacts from the canonical anatomy and lifecycle before relying on their visual representation.

## Relationships

Relationships are necessary for spatial reasoning and are justified by Spatial Logic. The present SVG paths are hard-coded and have no explicit source, target governance, semantic provenance, or owner acceptance. Their visual form can imply support or causality even when no relationship event occurred. This matches the rejection pattern of decorative connector networks. Remove the current connectors entirely. Reintroduce relationships only as governed operational interpretations with proposed, accepted, challenged, rejected, and archived states.

## Collections

Collections correctly allow material to recede from the active surface and empty categories can remain hidden. This supports Quiet Periphery and progressive presence. The concept is necessary for scaling. The current implementation uses temporary in-memory arrays and does not preserve Artifact identity or map context robustly. The rendered rail is also unstable under constrained width. Collections should remain as a canonical supporting role, but not as the current implementation. Rebuild them as views over the case corpus and Working Set rather than independent stores.

## Contradictions

Giving contradictions distinct gravity is justified because they can materially change understanding. Their separate compact area supports Investigation Mindset and Thinking Before Clicking. The current contradictions are static sentences without provenance, affected claims, severity basis, or resolution history. They therefore behave as warnings rather than contradiction Artifacts. The role should remain. The implementation must be rebuilt so each contradiction connects exact material, preserves original wording, and evolves through resolution or residual uncertainty.

## Operational Inbox

Inbox belongs on the shared surface and remains available independently of Watson. This is a canonical decision supported by Thinking Table, Thinking Leaves Traces, Artifact First, and Watson Presence. Natural contribution does not require manual classification, which is also correct. The current notebook styling is sometimes too literal and risks violating Material Honesty. More importantly, submissions do not enter a durable Artifact lifecycle with preserved provenance and lineage. Keep the placement, autonomy, and natural-capture principle. Rebuild the persistence and admission model, and reduce material treatment to what communicates authorship and working continuity.

## Watson and Semantic Review

Watson is located inside Inbox rather than occupying a permanent Workbench column. It can be ignored and does not prevent unrelated contribution. These decisions implement Watson Presence and are canonical. The product currently has overlapping semantic review, contribution confirmation, guided investigation, and explicit Watson request paths. Their proposals are not consistently connected to durable Artifact or Relationship history. Waiting, withdrawal, risk interruption, and correction memory are incomplete. Keep Watson subordinate and optional. Rebuild its behavior as the modes defined in Operational Dynamics rather than as several adjacent conversation flows.

## Inspection

Opening an artifact leaves part of the map visible, which shows the correct intention. Escape and close can return focus to the trigger. However, the inspection overlay does not carry a complete Context Envelope. It does not persist the original neighborhood, explain downstream change, or distinguish viewing from operational judgment robustly. Attachment and relationship actions are simulated rather than consequential. The current Inspection therefore violates Detail Never Destroys Context behaviorally even when the background remains visible visually. Rebuild it as reversible deepening with origin, reason, neighborhood, history, change, and return.

## Navigation inside Workbench

True Workbench navigation should move attention among artifacts, sources, contradictions, history, and operational neighborhoods. The current product still relies on page hashes, hidden stage navigation, collection overlays, and a fixed map. It does not implement an origin-destination-reason-return contract. Spatial anchors are not restored through a durable model. Navigation therefore exists mainly as application routing, not operational movement. The Dock must remain separate from movement inside a Matter. Rebuild internal navigation from Context Preservation and Operational Dynamics.

## State Visibility

The interface contains fragments such as “proposed,” “unconfirmed,” and attachment counts. These labels are useful but do not form a state system. New, reviewed, attributed, verified, supported, challenged, confirmed, rejected, active, settled, and archived states are not independent dimensions. Source verification can therefore be confused with claim truth. State changes do not consistently affect available judgments, relationships, history, or Current Situation. This part of Operational Dynamics is absent rather than partial. It must be modeled before final representation is designed.

## Operational Memory

Session storage remembers selected modes, a relationship response, or an open view. That is UI memory, not Operational Memory. The product does not preserve consequential Artifact lineage, previous Current Situation versions, relationship history, rejected explanations, or the reasons behind judgments. “Thinking Leaves Traces” is expressed through atmosphere and copy but not through behavior. Refresh cannot reconstruct the investigation as a history of reasoning. Operational Memory is completely absent. It must become the substrate for Context Preservation, not an optional history screen.

## Responsive and Mobile Workbench

Mobile retains Current Situation, indicators, artifacts, Collections, Inbox, and compact navigation. Preserving roles instead of creating a generic card feed is the right intention. In the current render, text and artifacts are clipped, the map exceeds the readable viewport, and navigation covers working content. The owner cannot reliably inspect spatial relationships or understand the complete context. This violates Space Communicates, Context Preservation, and accessible State Visibility. The mobile behavior is not a smaller version of the Workbench yet. Rebuild it around focused operational neighborhoods and explicit return while preserving one investigation center.

## Legacy Board Inspection and Stage Navigation

Large legacy sections for timeline, evidence board, decisions, outcomes, and stage navigation remain in the document but are hidden by current styling. They belong to the previous page-and-dashboard philosophy. Their duplicate model competes conceptually with the new Workbench even when not visible. No Design Bible principle justifies maintaining two simultaneous representations of investigation. Hidden legacy UI also makes future behavior ambiguous and increases the risk of regression. Remove these sections rather than continue concealing them.

## Decorative material layer

Warm darkness and restrained paper roles support Night Thinking, Operational Atmosphere, and Material Honesty. The product sometimes crosses from interpretive material into literal wood, tape, ruled notebook, and tabletop simulation. When the metaphor itself becomes noticeable, the interface no longer disappears. Paper should communicate authored or provisional material, not make every element look physically staged. Wood should not substitute for spatial hierarchy. Retain material roles; remove literal desk effects that do not explain operational meaning.

## Placeholder utilities and simulated actions

Search, notifications, attachment enrichment, relationship connection, and several inspection actions are represented without complete operational effects. They make the product appear more capable while producing little or no state transition. No Design Bible principle justifies controls that do not change evidence, interpretation, attention, or memory. They violate Thinking Before Clicking and Technology Supports Investigation. Remove them until their events, authority, state effects, and history are real. The final Workbench should contain fewer honest actions rather than more simulated ones.

---

# Required removals

The following existing decisions should be removed, not polished:

1. Hard-coded decorative relationship connectors.
2. Hard-coded Key Indicators without source, scope, and verification.
3. Hidden legacy Board Inspection, stage navigation, and duplicate dashboard-era case views.
4. Placeholder search and notification controls.
5. Simulated artifact actions that only announce an intention.
6. Literal material effects that do not communicate operational role.
7. Duplicate Watson flows that are not attached to one proposal lifecycle.
8. Any static metadata that implies state or provenance the system does not possess.

# Required complete rebuilds

The following areas have a justified role but cannot be repaired through visual polish:

1. Artifact identity, lifecycle, provenance, lineage, and orthogonal states.
2. Relationship lifecycle and owner governance.
3. Current Situation versioning and evidence-based change.
4. Context-preserving Inspection.
5. Operational navigation through neighborhoods, sources, and history.
6. Operational Memory.
7. Scaling from Working Set to large case corpus.
8. Responsive behavior as preserved operational context.
9. Watson behavior as observe, organize, propose, wait, interrupt, and withdraw.

# Canonical decisions

These underlying decisions already satisfy the Design Bible and should not be reopened without strong evidence:

1. **One Current Situation as the operational center.**
2. **A compact Dock as quiet, subordinate orientation.**
3. **Operational Inbox integrated with the shared surface and available independently of Watson.**

Their current visual or behavioral implementation may change. The decisions themselves are canonical.

---

# Global Assessment

## Current compliance

**46%**

The product strongly reflects the visual philosophy of the Design Bible but weakly implements its operational behavior.

At the compositional level, the Workbench has one center, a quiet Dock, spatial artifacts, integrated Inbox, optional Watson, warm atmosphere, and meaningful negative space. At the behavioral level, most Artifacts, relationships, indicators, contradictions, state transitions, and history are static or simulated.

The product therefore resembles the Design Bible more than it behaves like it.

## Three largest remaining problems

### 1. No canonical Artifact and State substrate

The product cannot yet distinguish identity, provenance, epistemic state, operational participation, attention, and lifecycle. Without this substrate, evidence, contradictions, Hypotheses, Current Situation, Collections, and Watson proposals cannot behave canonically.

### 2. Detail and navigation do not preserve full context

Inspection leaves some background visible but does not carry or restore a complete Context Envelope. Internal movement is still a mixture of overlays, hashes, hidden stages, and fixed composition rather than navigation through one operational space.

### 3. No Operational Memory or scaling model in the product

Reasoning history, rejected alternatives, previous relationships, Current Situation versions, and consequential change are not durable. The current scene also has no credible path from a few Artifacts to hundreds without becoming crowded or fragmented.

## Three canonical decisions

### 1. One Current Situation

The investigation has one accepted working synthesis and one visual center.

### 2. Compact Dock

Application orientation remains peripheral and returns maximum space to the Workbench.

### 3. Integrated Inbox with subordinate Watson

The owner can always contribute naturally; Watson lives inside that flow and does not control it.

## Readiness for final design

**No.**

The project should not collect more atmosphere references or invent more Design Principles. That research phase is complete.

Before final design begins, one remediation specification must be approved. It must translate Operational Dynamics into:

1. the Artifact and orthogonal State model;
2. the event and Operational Memory model;
3. the Context Envelope for Focus, Inspection, Navigation, and return;
4. the Relationship and Hypothesis lifecycles;
5. the Working Set and scaling rules;
6. the deletion of legacy and simulated behavior listed in this audit.

This is not another design exploration. It is the behavioral contract required to make the existing canonical decisions real.

After that contract is approved, the project can proceed directly to final implementation without further broad reference collection.
