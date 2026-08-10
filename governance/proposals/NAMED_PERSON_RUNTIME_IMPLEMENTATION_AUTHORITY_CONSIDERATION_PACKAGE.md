# Named-person runtime implementation authority consideration package

## Purpose

This neutral package presents a separately bounded single-custodian browser-local named-person runtime for human Decision. It does not activate runtime, select a retention period, or authorize InformationContribution.

## Fixed consideration set

| Artifact | Commit | Blob |
| --- | --- | --- |
| `governance/proposals/ROLE_POSITION_CAPACITY_AUTHORITY_DECISION.md` | `d1ad48beb5ea7e5aea28d9f9fa79594205bc26e3` | `fc89027d287914459f5e4dc0183a3e33de9c4be1` |
| `governance/proposals/NAMED_PERSON_RUNTIME_READINESS.md` | `38c53f68afcf4e3cdf39ed548b7993badd1e7b14` | `fe9368e31d349d0059d720d89b732a740e0caceb` |
| `governance/reviews/ROLE_CAPACITY_AND_NAMED_PERSON_PREPARATION_CRITICAL_REVIEW.md` | `eda718396b208571bc394b9027c306a1febae0f0` | `ed3a72d8b00a75ebeec96911a645355176f974b2` |
| `governance/reviews/ROLE_CAPACITY_AND_NAMED_PERSON_AUTHORITY_PACKAGES_CRITICAL_REVIEW.md` | `1ec4632d24c17f4d4dc1cadd149b82d9abce6baa` | `e3ded9ed78894ee8fc23c2e00055056dc73b4e26` |
| `governance/proposals/PEOPLE_PRIVACY_PRODUCT_AUTHORITY_DECISION.md` | `dcc334e320a3d9f6d41700664dc3182187027085` | `807ae396f1b47d692d357f6537762474c619b584` |
| `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_CANONICAL_CLARIFICATION_AUTHORITY_DECISION.md` | `8a10c18247a5d825381f094581fdba7c940f7bdd` | `579e08b2dddb50214e49e91ba550259650f9d412` |
| `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_INTERACTION_ARCHITECTURE_AUTHORITY_DECISION.md` | `d3b9b1ecfe8d5ba9b88d06648d9bd71bf62e1586` | `2e76c66a4a25ebbc4c2bb52a91bf71d92a342d87` |
| `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE_AUTHORITY_DECISION.md` | `729163ece6d58789fbdde826768e3e38c77f6fec` | `a4550cc676bcf7bda1fdf7876d11042f7c5133b3` |

The immutably bound adopted People & Privacy, canonical, Interaction, and Engineering Decisions remain controlling. The readiness artifact narrows the candidate further. If a narrower readiness clause conflicts with a controlling prohibition, the prohibition wins; the package cannot expand adopted meaning.

## Proposed activation

If authorized, one bounded cycle may implement only:

- minimal Workspace-bounded Person identity with display name, qualification/lifecycle, source/owner, timestamps, purpose/visibility, `reviewAt`, and correction/redaction/deletion lineage;
- direct temporal Person → Role occupancy;
- separate temporal Person → Department membership where applicable;
- Department team composition projection;
- the fixed minimal Person Workbench;
- purpose/surface-limited Person search;
- correction, end/supersession, dispute, redaction, deletion, retention suspension, and reviewed re-attestation;
- erasure-aware local persistence and non-resurrection recovery;
- migration, policy, privacy, responsive, accessibility, and regression verification;
- evidence, independent implementation review, corrections, repeat review, and clean commit.

## Required retention sub-decision

Authorization must state one accountable `reviewAt` period for active Person purpose re-attestation:

- **R90 — 90 days**;
- **R180 — 180 days**;
- **R365 — 365 days**; or
- **RC — another explicit number of days with rationale**.

No period is selected by this package. Without a selected period, activation is deferred. Expiry causes non-revealing suspension before ordinary projection/search/navigation/counts until re-attestation or disposal.

## Policy matrix

| Purpose / surface | Permitted fields/actions | Denied by default |
| --- | --- | --- |
| Department composition | permitted display name, current qualified Role occupancy/Department membership, open bounded Person context | history details not needed for orientation; restricted/suspended existence; counts from hidden records |
| Occupancy/member selection dialog | search permitted Person display names in current Workspace; create/link only under local-owner purpose | global/general search, cross-Workspace results, restricted/suspended/deleted hints |
| Person Workbench | permitted identity, current authorized Role/Department, bounded authorized intervals, correction/dispute/redaction status/actions | contributions, investigations, subjective notes, performance, workload, skills, ratings, activity/dossier aggregation |
| Retention review | minimum identity/context needed to re-attest, correct, redact, or delete | ordinary navigation, unrelated work, unrestricted history |
| Persistence/recovery | policy-valid state, deletion ledger, sanitized history endpoint | deleted identity resurrection, raw-name indexes/caches, export/import |

Policy evaluation occurs before persistence projection, indexing, search, count, navigation, aggregation, history rendering, and mutation. Non-permitted existence is non-revealing.

## Local custody disclosure

- single local Operating Model custodian only;
- no authentication, Account link, user roles, multi-user enforcement, sharing, synchronization, or server security claim;
- browser-profile/device-local storage only;
- shared-device and collaborative use prohibited;
- people export/import disabled;
- UI disclosure required before first Person creation.

If authenticated multi-user access or real organizational deployment is required, execution stops for separate identity/access/backend/privacy authority.

## Erasure and recovery gate

Implementation is not complete unless it proves the fixed deletion-ledger, generation rejection/sanitization, physical purge/replacement, cache/index rebuild, non-reconstructive historical endpoints, and crash-point non-resurrection contract from `NAMED_PERSON_RUNTIME_READINESS.md`.

If the browser-local adapter cannot guarantee that a deleted/redacted name is neither reconstructable through retained generations nor reactivated by recovery, the cycle stops without named-person activation. No weaker deletion claim is permitted.

## Permitted files and technology

Existing HTML/CSS/plain JavaScript/browser APIs only. Purpose-bounded writes are limited to:

- `index.html`;
- `css/organization-workspace.css`;
- `js/operating-model-repository.js`;
- `js/authority-policy.js`;
- `js/organization-workspace.js`;
- optional new bounded module `js/person-runtime.js`;
- `tests/operating-model-repository.browser.html`;
- `tests/living-organizational-model.browser.html`;
- `tests/organization-lifecycle.browser.html`;
- `tests/interaction-feedback.browser.html`;
- new `tests/named-person-runtime.browser.html`;
- new files only under `governance/evidence/NAMED_PERSON_RUNTIME/`;
- `governance/reviews/NAMED_PERSON_RUNTIME_IMPLEMENTATION_CRITICAL_REVIEW.md`;
- `governance/reviews/NAMED_PERSON_RUNTIME_IMPLEMENTATION_REPEAT_REVIEW.md`;
- `governance/proposals/NAMED_PERSON_RUNTIME_IMPLEMENTATION_CORRECTION_SUPPLEMENT.md` only if independent review requires bounded correction.

Every other file is protected. No framework, dependency, backend, database, identity provider, integration, deployment, telemetry, or people export/import is authorized. ROADMAP/BACKLOG and unrelated canonical sources remain protected.

## Required verification

- no synthetic Person created by migration;
- minimal-field validation and no Person name inside Role;
- effective-time occupancy/membership with correction and supersession history;
- current changes do not rewrite prior intervals;
- policy denial before every surface/index/search/count/action;
- protected absence and suspended `reviewAt` state leak no identity or counts;
- re-attestation/correction/redaction/deletion rights remain keyboard and screen-reader accessible at desktop/laptop/390px;
- interrupted deletion at every persistence step cannot resurrect identity;
- recovery cannot select a generation containing a deleted identity;
- deleted endpoints render non-reconstructively;
- no export/import, production Person fixtures, dossier fields, scoring, or general Person search;
- no InformationContribution, Person-as-Source, subject, Evidence, or Investigation person-attribution record/control;
- existing Organization, Role, Investigation, Improvement, Historical Reader, persistence, and recovery journeys remain intact.

## Decision options

### A — authorize bounded local runtime

Authorize exactly the fixed single-custodian candidate and select R90, R180, R365, or RC with an explicit period/rationale.

### B — revise

Return the purpose, fields, policy matrix, retention, erasure/recovery, search, Workbench, or verification boundary for specified correction. Runtime remains unavailable.

### C — defer

Keep named-person runtime, Person search/data, occupancy UI, and Person Workbench data unavailable.

## Exact indispensable human Decision

> Should Management OS authorize the fixed reviewed single-custodian browser-local named-person runtime for team composition, with which explicit `reviewAt` period, while preserving all privacy, erasure, search, Workbench, local-custody, and InformationContribution non-activation boundaries?

The accountable human must select A with a period, B, or C and provide attributable rationale.

## Explicit non-effects and stops

This package never authorizes InformationContribution or Person-as-Source activation, contribution capture/history, subject relationships, Evidence use, unrestricted Person search, HR dossier data, sensitive/subjective people information, surveillance, scoring, employment judgment, Watson, backend, database, integration, identity/account linking, deployment, or ROADMAP/BACKLOG change.

The named-person Decision is independent of the capacity implementation Decision. Neither package implies the other.
