# People & Privacy Product review-correction supplement

## Supplement state

- Corrected proposal: `governance/proposals/PEOPLE_PRIVACY_PRODUCT_BOUNDARY_AND_POLICY_PROPOSAL.md`
- Critical review: commit `b109a2efd11440f400b537760d1d529ff555afda`, blob `adeb10cbe8c725937c12cb2fe78dd2940e9d9ff9`
- Scope: bounded proposal-stage correction of findings F1–F4 and associated qualifications
- Adoption, canonical effect, implementation, and Watson execution: none

This supplement supplies controlling proposal meaning where the reviewed proposal was incomplete. It does not rewrite the historical proposal or authorize downstream work.

## C1 — explicit subject-of-information relationship

An InformationContribution has zero, one, or multiple explicitly typed subjects in addition to its source, recorder, content/material, organizational-capacity snapshot, and supported work context.

The Product must preserve these independent roles:

```text
source person -- supplied --> information/material
recorder person -- recorded --> contribution record
subject person(s) -- is described by --> bounded content, if explicitly established
author person/entity -- authored --> source artifact, if applicable
owner person/role/capability -- owns --> source record or operational responsibility
approver/Decision maker -- approved/decided --> separately governed object
```

Rules:

- no subject is inferred merely because a person supplied, recorded, authored, owned, approved, or appears in free text;
- each named subject requires a declared operational necessity, sensitivity classification, authorization, visibility, retention, and correction/dispute path;
- a contribution may concern a process, system, SOP, interaction, department, or other non-person object and have no person subject;
- selecting a subject does not make the content a Person Workbench fact, grant Evidence status, or establish responsibility;
- subject access to information about them follows the inspection/conflict rule below and does not automatically reveal a protected source, unrelated third parties, or restricted work-context content;
- broad views suppress named subjects when a role, aggregate, redaction, or no subject reference is sufficient.

## C2 — hard anti-surveillance boundary

The People & Privacy scope proposed here prohibits collection, retention, derivation, projection, or Watson use of:

- keystroke, mouse, screen, webcam, microphone, or continuous device-activity monitoring;
- continuous or precise location tracking for person evaluation;
- private-message or communication-content mining for engagement, sentiment, loyalty, performance, or behavior assessment;
- application-activity, presence, response-time, calendar, badge, or communication-network telemetry used to infer productivity, effort, influence, engagement, workload, trust, competence, performance, or employee value;
- covert monitoring or data collected without a visible declared purpose and accountable owner;
- cross-context behavioral profiles assembled from otherwise separate operational records.

Ordinary source-system facts may be referenced only when necessary to the supported operational work and cannot be repurposed into individual monitoring. Security investigation, regulated safety, or another fundamentally different workforce-monitoring purpose is outside this proposal and would require a new explicit Product, privacy, legal/governance, Interaction, Engineering, and implementation authority path. It cannot be enabled as a field exception under People & Privacy adoption.

Consent alone does not justify unnecessary or disproportionate monitoring.

## C3 — protected-source inspection and dispute conflict rule

People should be able to inspect and challenge person-related information to the maximum safe and authorized extent. When revealing exact content, context, or source identity would create a documented safety, confidentiality, Investigation-integrity, protected-reporting, third-party privacy, or retaliation risk, the Product must provide a controlled restricted-review path.

At minimum, the affected person receives, unless even a specific element would itself create the documented risk:

- the information class and declared purpose;
- the fact that person-related information exists and whether it materially affects current operational representation or judgment;
- a non-revealing summary of the subject and limitation;
- applicable retention/review status;
- a correction, dispute, or response route;
- identity of the accountable human reviewer or governed review function.

Restriction requires an attributable human record of reason, exact fields withheld, scope, authority basis, start time, review/expiry condition, and who can reassess it. Restriction is not permanent by default and cannot be inferred by Watson.

Restricted information must not:

- be presented as an undisputed fact;
- drive secret automated scoring, recommendation, access restriction, assignment, promotion, termination, discipline, or other irreversible adverse judgment;
- be exposed indirectly through counts, search, summaries, Department/Person projections, Memory, exports, logs, or Watson;
- prevent the affected person from submitting a response or correction for human review.

An accountable human—not the record author, Watson, or the affected profile—resolves or preserves the dispute under a future approved policy. Product adoption establishes this minimum safeguard; exact reviewer roles, escalation, appeal, and legally required exceptions remain a separate human policy Decision before implementation readiness.

## C4 — minimal participation semantics and existence protection

Investigation, Improvement, Decision, implementation, Monitoring, and Stabilization participation must use narrow, independent, source-supported relationship roles only when necessary:

- information contributor/source;
- subject of information;
- consulted participant;
- accountable Decision maker;
- recorder;
- source-owned implementer or responsible role;
- observer/monitoring contributor.

One role never implies another. “Participated,” “involved,” or “associated” is insufficient when it could imply approval, accountability, culpability, authorship, Evidence status, successful implementation, or Outcome ownership.

Rules:

- participation is linked to the exact bounded context and effective interval;
- the source work record retains authority and access;
- if revealing the relationship would expose a restricted Matter, Investigation, Improvement, Decision, source identity, or sensitive subject, the whole relationship—including its existence—is suppressed from unauthorized views;
- Person and Department Workbenches show a participation link only when the viewing purpose requires it and the source context permits it;
- participation counts, frequencies, success/failure ratios, contradiction ratios, outcome attribution, rankings, and derived influence/centrality are prohibited;
- absence of a participation record means unknown/not represented, not non-participation or lack of contribution.

## Manager-observation and employment-decision clarification

Within this proposed Living Organizational Model scope, manager observations cannot be used as a general personnel file or as the sole or automated basis for compensation, promotion, termination, discipline, performance rating, access restriction, or employee-value judgment.

When a manager observation is exceptionally necessary for a bounded operational matter, it remains context-bound, attributable, time-limited, restricted, reviewable, and correctable/disputable. It does not roll into a durable profile trait. Any HR/performance-management purpose is outside this proposal and requires a separate explicit Product authority path; it cannot be inferred from People & Privacy adoption.

## Consent and necessity clarification

Where consent is the approved basis for an optional people-data use, it must be specific, informed, freely given within the real power context, purpose-bound, inspectable, and withdrawable without misleading consequences. Consent cannot legitimize unnecessary collection, prohibited inference, surveillance, or indefinite retention.

Consent is not assumed to be the only or correct basis for organizational facts or accountable operational history. Every permitted basis still requires necessity, proportionality, visibility, correction/dispute rights, retention limits, secondary-use prohibition, and accountable human policy/legal review. This proposal does not select a jurisdictional lawful basis.

## Corrected authority reading

With this supplement:

- Person-as-Source remains distinct from subject, recorder, author, owner, approver, responsibility, and Evidence;
- sensitive-content existence and source identity follow a bounded, reviewed disclosure conflict rule;
- surveillance-grade collection and behavioral inference are prohibited, not merely hidden behind future configuration;
- work participation is role-typed and cannot imply judgment or leak restricted context;
- manager observations cannot become a shadow employment-decision record;
- consent cannot defeat minimization or dignity.

## Authority effect

This supplement corrects Product-policy meaning only. It does not adopt People & Privacy, establish technical access, authorize collection, create a canonical concept, implement Person-as-Source or workbenches, authorize Watson or employment decisions, modify canonical/ROADMAP/BACKLOG/active implementation files, or create integration, deployment, Replay, H3, Root Cause, or causal-proof authority.
