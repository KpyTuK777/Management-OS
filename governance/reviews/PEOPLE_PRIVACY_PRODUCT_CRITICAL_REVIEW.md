# People & Privacy Product critical review

## Review identity

- Product/policy proposal: commit `533bfe177d532cade7923fb2db385f3d1d95c4d5`, blob `7f7cb42193ab9b83771edcf4d2affbc1811686e5`
- People-free path: commit `b3049cde76db8dd1e800d00df96adb9e41eb2654`, blob `90f2191e78fb6fad47bf0bc4a1053c0ce8e740aa`
- Readiness assessment: commit `037f1b5950a3bfbb5f06aba5942f321906ed0c5e`, blob `4de041ffddda92f9c8db033305338d9a8c44622b`
- Method: independent repository-grounded Product, privacy, epistemic, historical-integrity, access, and anti-profiling review
- Initial disposition: **FAIL — four bounded policy blockers; direction is correctable**
- Canonical and implementation effect: none

## Blocking findings

### F1 — InformationContribution does not require an explicit subject relationship

The proposal correctly distinguishes source from subject, but its required relationship parties omit a typed subject-of-information reference. Without an explicit optional subject set, an implementation could infer that the contributor is the subject, bury named third parties in content, or project information into the wrong Person Workbench.

Required correction: define zero, one, or multiple explicit subjects; prohibit subject inference from source identity or free text; require separate authorization/minimization for each named subject; and prevent subject linkage from granting the subject access to protected source identity or unrelated content automatically.

### F2 — system-derived records remain open to surveillance by exception

Activity telemetry is “excluded by default” but may be allowed after future policy. The proposal does not establish a hard Product boundary against continuous individual activity monitoring, keystroke/screen capture, location tracking, message-content mining, or behavioral productivity inference. That gap could turn an operational-purpose exception into a surveillance channel.

Required correction: prohibit those collection/inference classes within the adopted Living Model people scope. Any future fundamentally different workforce-monitoring purpose must require a new explicit Product authority path outside this policy, not merely a field-level exception.

### F3 — protected-source accountability and person inspection are not reconciled

The proposal says people can inspect information about them subject to protected-source exceptions, but it does not define the minimum Product behavior when revealing source identity or exact content would create a legitimate safety, confidentiality, Investigation-integrity, or retaliation risk. Neither universal disclosure nor opaque permanent secrecy is acceptable.

Required correction: establish a controlled conflict rule: disclose the class, purpose, existence, material effect, correction/dispute route, and accountable human reviewer to the maximum safe extent; restrict source/content only for a recorded reason, scope, and review/expiry condition; prohibit secret automated use and irreversible adverse judgment; require human review of contested restricted information.

### F4 — participation history can imply authority, culpability, or performance

Role-typed Investigation, Improvement, and Decision participation is permitted, but the proposal does not enumerate sufficiently narrow participation roles or prevent broad labels such as “involved in Decision” from implying approval or accountability. Broad projection may also reveal a restricted Matter’s existence.

Required correction: adopt minimal participation semantics—contributor/source, subject, consulted participant, accountable Decision maker, recorder, implementer, observer—only when source-supported and necessary; keep them independent; suppress the whole relationship when even its existence is restricted; and prohibit participation counts or outcome attribution.

## Required-review disposition

| # | Review question | Initial disposition |
| --- | --- | --- |
| 1 | Legitimate operational purpose | PASS — core fields and relationships are tied to declared operating needs. |
| 2 | Subjective observations remain attributable | PASS — attribution, purpose, time, basis, limits, status, and restriction are required. |
| 3 | Person-as-Source distinct from Evidence | PASS WITH F1 — Evidence separation passes; subject modeling needs correction. |
| 4 | Historical role context preserved | PASS — effective-time snapshots and non-destructive correction are explicit. |
| 5 | Corrections and disputes supported | PASS WITH F3 — semantics exist, but restricted-source disputes need a safe resolution contract. |
| 6 | Sensitive information minimized | FAIL PENDING F2 — default exclusion is insufficient for surveillance-grade sources. |
| 7 | Access boundaries Product-explicit | FAIL PENDING F3/F4 — protected-source and relationship-existence leakage need correction. |
| 8 | Person Workbench avoids dossier | PASS WITH F4 — purpose-filtering is strong; participation projection needs narrowing. |
| 9 | Department Workbench avoids leakage | PASS WITH F4 — roll-up prohibition exists; restricted relationship existence still needs suppression. |
| 10 | Contribution history avoids scoring | PASS — explicit and proxy scores, ratios, rankings, and visual/AI scoring are prohibited. |
| 11 | Watson non-judgmental and traceable | PASS — relationship surfacing is source-bound and human judgments are prohibited. |
| 12 | People-free implementation can proceed independently | PASS — useful non-person scope and latent-identity exclusions are explicit. |
| 13 | New canonical concepts actually necessary | PASS AS UNRESOLVED — canonical review must prefer an existing typed relationship before naming a new type. |
| 14 | Implementation remains unauthorized | PASS — only proposal/review records changed. |

## Subjective-information review

- Satisfaction: correct to exclude pending separate purpose and policy.
- Engagement: correct to exclude and prohibit telemetry inference.
- Strengths: safe only as attributable, purpose-bound, time-bound input; not core.
- Development areas: correct to exclude from the Living Model core.
- Workload/capacity: role/process-level facts are preferable; named-person scope remains exceptional and restricted.
- Manager observations: the proposed constraints are necessary, but such observations must never become a backdoor employment-decision file under this authority.

The correction should make explicit that consent, where used, must be specific and withdrawable, but consent alone cannot legitimize unnecessary collection or erase power imbalance. Other permitted bases require the same declared purpose, necessity, rights, and accountability. Exact lawful basis remains outside this Product artifact and requires accountable policy/legal review.

## Authority and architecture review

- Operational Operating Model remains sole organizational representation: PASS.
- Case Evidence Set retains Evidence status and influence: PASS.
- Operational Memory remains permission-aware and non-profiling: PASS.
- No seventh P1–P6 view: PASS.
- Interaction obligations are identified without designing controls: PASS.
- Engineering dependencies are identified without selecting technology: PASS.
- No current implementation behavior is claimed: PASS.

## Required correction and repeat review

One bounded supplement may resolve F1–F4 and the consent/manager-observation qualifications without rewriting historical artifacts. A separate repeat review must then evaluate all fourteen required questions and confirm that the correction does not create new canonical, Interaction, Engineering, or implementation authority.

## Authority effect

NONE. This review blocks authority-package preparation until the four findings are corrected and independently re-reviewed. It does not reject the legitimate operational need for a people model, adopt policy, approve sensitive data, authorize implementation, or modify any canonical owner.
