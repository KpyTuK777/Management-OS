# Living Organizational Model Interaction Architecture correction supplement

## Supplement state

- Corrected architecture: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_INTERACTION_ARCHITECTURE.md`
- Critical review: commit `84cf211facc7a326a8ab73fad8aea829611a1fd5`, blob `cf72e90a07440b0d1de1fb65c923cdfaca9b06c5`
- Scope: bounded correction of findings F1–F5
- Interaction adoption, Engineering, implementation, and Watson execution: none

This supplement supplies controlling interaction meaning where the reviewed architecture was incomplete. It does not rewrite the architecture or authorize downstream work.

## C1 — primary Map lens with material cross-lens support

The Organization Map retains one primary supporting lens at a time to prevent universal-graph overload. For the currently selected object or relationship, it must also preserve a small explicit set of material relationships from other lenses when omitting them would misrepresent the selected context.

Each supporting cross-lens relationship shows:

- its type;
- why it is visible for the current selection;
- source/known/disputed state where permitted;
- an action to inspect it;
- an action to temporarily suppress or reveal supporting relationships.

Supporting relationships remain visually subordinate to the primary lens and selection. They do not activate all layers, establish importance, imply completeness, or create causality. The interface never uses a hidden-edge count as reassurance that no other dependency exists. If more material relationships exist than can remain legible, the Map states **More related context** without claiming a complete count and routes to a filtered relationship list/Inspector.

Unknown, restricted, stale, or unavailable dependencies are handled according to the user’s authorization. No connector or gap may leak a relationship to an unauthorized viewer.

## C2 — privacy-filtered contextual entry

Investigation and Improvement entry previews are composed only from references the current viewer is already authorized to inspect and that are compatible with the declared entry purpose.

Rules:

- opening an entry action performs no broadened search or disclosure;
- inaccessible candidate context, restricted work, source identity, subject identity, and participation links do not appear as suggestions, counts, placeholders, or omission explanations;
- named-person, contribution, or participation context requires explicit user inclusion and a visible reason it is relevant;
- broad organizational context is preferred when named identity is unnecessary;
- the preview separates **Included context** from **Not transferred automatically** without enumerating hidden records;
- creating the link preserves the same or narrower access and protected-absence behavior in the destination and return path;
- if the origin itself becomes inaccessible before confirmation, creation stops honestly without exposing cached detail or silently substituting another origin.

Context still does not become Evidence, Working Set, Hypothesis, fact, failure, benefit, Decision, or execution authority.

## C3 — safe contribution-time capacity resolution

Person-as-Source may preselect contribution-time role and department only when:

1. communication time is sufficiently precise for the relevant history;
2. one authoritative effective interval unambiguously contains that time; and
3. the viewer is authorized to use the historical capacity.

If communication time is date-only, approximate, a range, unknown, outside known intervals, or overlaps conflicting role/department records:

- role and department display **Потрібно уточнити**;
- the user may choose an authorized historical record, record role/department as unknown, or correct the communication time;
- the uncertainty is preserved in the contribution;
- current role/department is never used as a silent fallback;
- any suggested historical option shows its effective interval and source status in human language;
- later correction previews the contribution-history effect and preserves prior attribution according to policy.

The primary confirmation remains concise. Detailed time/source/version metadata stays in Inspector.

## C4 — correction and dispute continuity on narrow screens

Tablet and 390 px mobile must retain, where the viewer is authorized:

- safe inspection of the person-related information class, purpose, source visibility state, current value or non-revealing summary, and status;
- initiation of factual correction, attribution correction, dispute, response, withdrawal, or protected review;
- review and editing of the user’s own request before submission;
- clear confirmation of what was submitted and what has not changed;
- durable handoff/resume status when full adjudication requires a wider screen or accountable reviewer.

Complex comparison, restricted evidence review, multi-party adjudication, or consequential resolution may be unavailable on narrow screens. In that case:

- the interface says **Розгляд продовжиться у повній робочій області** or equivalent consequence-led language;
- already entered content is preserved under the future approved state policy;
- the request receives an inspectable pending/not-submitted status;
- no forced immediate desktop switch, hidden deadline, silent discard, or false completion occurs;
- urgent safety/privacy escalation remains reachable through an authorized human route.

This is an Interaction obligation only; storage, synchronization, notification, and reviewer assignment require Engineering and policy authority.

## C5 — restricted versus non-revealing absence

Restricted information has two distinct interaction behaviors.

### Authorized to know a restriction exists

When policy permits the viewer to know that a record or relationship exists but not its full content, the surface may show a bounded label such as:

> **Доступ обмежено**

It may also show the permitted purpose, limitation, accountable review route, and review/expiry state. It must not expose protected source, subject, content, count, or reason beyond authorization.

### Not authorized to know existence

When the viewer is not authorized to know that a record or relationship exists:

- no placeholder, gap, connector, badge, count, heading, search result, autocomplete suggestion, history event, export row, Watson reference, or changed spacing indicates it;
- surrounding copy does not say “hidden,” “restricted item,” or explain an omission;
- aggregate and completeness language excludes the inaccessible item without implying that the visible set is globally complete;
- empty states describe only the authorized visible context, for example **Інформацію ще не додано у доступному контексті** when qualification is needed and non-revealing.

Search, Organization Map, Department/Role/Person Workbench, Process detail, Inspector, contextual entry, Working Set, Operational Memory, and Watson follow the same rule. Navigation to a formerly accessible item returns a neutral unavailable state without confirming whether it still exists.

## Hierarchy-mutation confirmation

Any direct manipulation that could change authoritative hierarchy or reporting semantics must enter an explicit semantic preview before mutation. The preview names the current and proposed relationship, effective time, known affected references, source owner, and what is not changing. Pure view arrangement remains clearly labeled personal/presentational and cannot share the same confirmation language.

## Corrected responsive and empty-state reading

Narrow-screen degradation may reduce arrangement and complex adjudication, but never basic orientation, safe inspection, accessible correction/dispute initiation, honest state, or return continuity. Empty states distinguish known absent, unknown, incomplete, disputed, stale, and not applicable for authorized viewers; restricted existence follows C5 rather than a universal “restricted” placeholder.

## Authority effect

This supplement corrects Interaction Architecture meaning only. It does not adopt the architecture, define Engineering mechanisms, broaden People & Privacy access, authorize persistence or synchronization, implement any UI, enable Watson, modify canonical/ROADMAP/BACKLOG/active implementation files, or create repository transition, integration, deployment, Replay, H3, Root Cause, or causal-proof authority.
