# Named-person runtime readiness

## Status

- State: PREPARED / NOT RUNTIME AUTHORITY
- Scope: minimum safe local-prototype path for Person identity, direct Role occupancy, Department membership, bounded Person Workbench, and purpose-limited Person search
- Explicit exclusion: InformationContribution and Person-as-Source activation

## Existing authority

Canonical, People & Privacy Product, Interaction, and Engineering authority already define:

- Person as distinct from Role and Account/Membership;
- direct Person → Role occupancy for an effective interval;
- separate Person → Department membership where applicable;
- privacy-filtered Person and Department Workbench boundaries;
- deny-by-default search/projection/navigation/count/export/mutation;
- correction, dispute, supersession, withdrawal, redaction, deletion, and historical integrity;
- InformationContribution meaning and contribution-time Role/Department snapshots.

Broad implementation authority intentionally kept actual named-person runtime unavailable until concrete purpose, visibility, retention, correction, and accountable privacy controls were configured.

## Proposed bounded activation purpose

The neutral candidate purpose is: **authorized organizational team composition and current/historical Role occupancy within one local Operating Model Workspace**.

It allows an accountable local Operating Model owner to represent who currently or historically occupies a Role and belongs to a Department so authorized users can understand Department composition.

It does not authorize HR administration, performance management, communication monitoring, attendance, payroll, compensation, health, demographics, subjective observations, sensitive data, or InformationContribution capture.

## Minimum Person identity

A proposed Person reference contains only:

- stable Workspace-bounded identifier;
- display name necessary for organizational identification;
- lifecycle and qualification state;
- source/ownership mode and accountable recorder/update owner;
- created/recorded/updated timestamps;
- visibility/purpose classification;
- correction/redaction/deletion lineage.

No email, phone, address, photo, birth data, demographic attribute, credentials, Account link, biography, rating, notes, skills, performance, or inferred attribute is included in this first runtime.

Person name must never be stored inside Role.

## Relationship scope

- Role occupancy directly links Person to Role for an effective interval.
- Department membership separately links Person to Department where applicable.
- Neither implies reporting, responsibility, Account access, employment status, performance, approval, or contribution.
- Current changes preserve historical intervals.
- Role placement compatibility rows using `containment` are not silently converted during this activation.

## Person Workbench boundary

The proposed first Person Workbench may show only:

- display name and qualified current-state label;
- current authorized Role occupancy and Department membership;
- bounded historical Role/Department intervals where authorized;
- correction/dispute/redaction initiation and status;
- explicit local-prototype/privacy notice.

It excludes contributions, investigation participation, subjective observations, performance, workload, ratings, skills, communication, documents, activity history, hidden counts, and dossier-style aggregation.

## Search boundary

Person search is proposed only inside:

- the current Workspace’s Department composition;
- an authorized Role-occupancy/member selection dialog;
- the bounded Person surface.

It is purpose-filtered before indexing/querying, excludes restricted existence, does not enter the general organization search by default, and returns no counts or hints for unauthorized records.

## Local-prototype policy and limitation

The current browser-local Product has no authenticated multi-user actor or server enforcement. A first activation could therefore operate only as an explicitly single-custodian local prototype:

- the local Operating Model owner is the only represented mutation authority;
- data remains in that browser profile and is not shared or synchronized;
- people export/import is disabled;
- access controls are Product-purpose/surface gates, not a claim of multi-user security;
- the UI must disclose the local-device privacy limitation before first Person creation;
- shared-device or multi-user use is outside authority;
- backend, identity provider, Account linking, collaboration, and deployment remain blocked.

If real multi-user visibility enforcement is required, this local candidate must be declined or deferred pending separate identity/access/backend authority.

## Retention and lifecycle proposal

The first creation flow must require an explicit continuing organizational purpose, a mandatory `reviewAt` date under an accountable policy period, and disclosure of the local retention limitation. The implementation authority Decision must supply that review period; runtime activation is blocked if no accountable period is selected.

At `reviewAt`, the Person reference and its named relationships enter a non-revealing suspended state until the local owner re-attests the purpose and sets a new review date or performs correction/redaction/deletion. Suspended identity is excluded before search, ordinary Workbench projection, navigation, counts, and suggestions. Only a purpose-authorized review surface may disclose enough context to re-attest or dispose of it.

The local owner can correct, end occupancy/membership, redact display identity where justified, or delete where no purpose/retention basis remains.

### Deletion versus retained recovery generations

The current repository retains immutable generations containing full state. Named-person activation is blocked unless the implementation authority adopts and verifies an erasure-aware persistence protocol that covers every retained generation, recovery candidate, index, cache, and snapshot.

The minimum proposed protocol is:

1. write a non-sensitive deletion ledger entry identifying the deleted opaque Person ID and deletion operation, without retaining the display name;
2. make recovery validation reject or sanitize every candidate generation containing that deleted ID before it can become active;
3. physically purge or replace all retained generations containing reconstructive Person identity and rebuild a valid recovery chain from sanitized state;
4. rebuild/discard every derived search index and cache;
5. render retained historical relationship endpoints as a policy-qualified non-reconstructive label such as “Особа видалена”, without the former name;
6. verify interrupted deletion at every step cannot reactivate or re-project the identity;
7. retain only the minimum policy-authorized opaque integrity marker and deletion metadata.

If localStorage atomicity cannot meet this non-resurrection contract while preserving safe recovery, named-person activation must stop for a separate privacy/Engineering Architecture Decision. Recovery convenience never overrides deletion.

This package does not invent a legal retention period. The neutral authority package must ask the accountable human to select a bounded local review period or defer activation.

## Future InformationContribution compatibility

Stable Person, Role occupancy, and Department membership identities/intervals may later support contribution-time snapshots. This runtime must not create InformationContribution records, source selectors, contribution histories, subject relationships, Evidence links, or Investigation person attribution.

Future InformationContribution activation remains a separate Decision and must reference contribution-time Role and Department context, including the applicable occupancy/membership assertion versions where authorized, rather than current organizational state. It must not treat planned Role capacity as the Person’s contribution-time capacity.

## Engineering implications

A separately authorized implementation would require:

- schema-versioned Person references and temporal occupancy/membership assertion families;
- deny-by-default policy API taking Workspace, represented actor/custodian, purpose, surface, requested fields, and action;
- policy filtering before persistence projection, index, search, count, navigation, history, and export;
- immutable revisions and correction/dispute/redaction/deletion lineage;
- copy-on-write/restartable migration with no synthetic Persons;
- deletion ledger, generation sanitization/purge, non-resurrection recovery filtering, and crash-point verification;
- bounded local search index containing only permitted display names;
- no person fixtures in production initialization or screenshots presented as user state;
- exhaustive policy, temporal, privacy, migration, recovery, responsive, keyboard, and accessibility tests.

## Readiness disposition

The semantics are already adopted, but runtime is **PARTIAL / REQUIRES A NEW HUMAN IMPLEMENTATION DECISION**.

The local single-custodian candidate is technically bounded, but the human Decision must explicitly accept or reject:

1. the team-composition purpose;
2. minimal display-name identity;
3. local-browser custody and shared-device limitation;
4. no authenticated multi-user enforcement;
5. purpose/surface-limited search;
6. the proposed Workbench field ceiling;
7. a concrete bounded `reviewAt` period selected by the accountable human;
8. complete exclusion of InformationContribution activation.

Deferral is required if no accountable review period can be selected.
