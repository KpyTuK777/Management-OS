# Historical Walkthrough Reader Wave 1.5 Bounded Interaction and Content Correction Specification

## Specification state

```text
Artifact: BOUNDED CORRECTION SPECIFICATION
Execution: NOT AUTHORIZED BY THIS ARTIFACT
Full Wave 2: NOT STARTED
Canonical effect: NONE
Historical artifact effect: NONE
```

## 1. Correction objective

Correct the comprehension blockers identified by the first direct human review
without adding historical knowledge or changing fixed Product, Interaction
Architecture, Engineering Architecture, methodology, or authority meaning.

The implementation target is a safer projection of existing fixed material:

```text
understand first → inspect support second → verify exact record third
```

## 2. Fixed inputs

- Knight Capital Published Historical Walkthrough 01, Phases 01–11;
- 48 fixed historical claim blocks;
- fixed source manifest, citation discipline, permitted claims, prohibited
  inferences, Evidence-gap assessment, and historical/Replay boundary;
- Historical Walkthrough Reader Product Realization Foundation;
- Interaction Architecture Handoff;
- reviewed Implementation Contract;
- Wave 4 Reader implementation and human comprehension findings;
- Wave 1.5 Comprehension-Correction Assessment.

All fixed inputs remain read-only.

## 3. In-scope correction

Wave 1.5 may prepare and implement only:

1. the Level 1/2/3 presentation model;
2. source-faithful plain-language Ukrainian passages for the already fixed 48
   claim identities;
3. inspectable literal translations and exact original records;
4. human-readable phase labels with fixed protocol identities preserved;
5. five story-section navigation groups with direct access to all phases;
6. corrected left-panel hierarchy;
7. reduced first-scan dominance of IDs and methodological class codes;
8. browser verification for traceability, disclosure, uncertainty, navigation,
   responsive behavior, Working Set separation, and authority boundaries;
9. bounded implementation report, screenshot evidence, and critical review.

## 4. Out of scope

- new facts, claims, sources, chronology, observations, synthesis, or conclusions;
- modification of any fixed walkthrough or research artifact;
- merging, deleting, renumbering, or reordering protocol phases;
- changing claim class, support, confidence, hindsight, or Replay eligibility;
- full Wave 2 historical-content integration beyond the 48 fixed claim projection;
- new cases, live operations, Replay, counterfactuals, H3 validation, Root Cause,
  causal proof, reflection finalization, metrics, deployment, or other Management
  OS spaces;
- ROADMAP or BACKLOG changes.

## 5. Content object projection

Each fixed claim must project one bounded `Comprehension Passage` in the
implementation. This is an implementation representation, not a canonical object.

Required logical fields:

```text
fixedClaimId
plainLanguageExplanationUk
attributionSummaryUk
eventTime
publicationTime
timeRelationshipLabel
humanClaimClassLabelUk
uncertaintySummaryUk
hindsightSummaryUk
originalClaimText
verifiedSourceExcerpt
literalTranslationUk
sourceIdentity
citationLocator
fullMethodologicalMetadata
transformationReviewState
```

No new persisted schema, API, or canonical type is implied.

## 6. Three-level interaction contract

### Level 1 default

- show human phase label;
- show `Що ми знаємо на цьому етапі`;
- show plain-language passage title or first sentence and concise explanation;
- show a subtle state such as `Ще не переглянуто` or `Переглянуто`;
- keep Claim ID and class code out of primary visual emphasis;
- keep a direct action to inspect support.

### Level 2 deliberate inspection

Open from Level 1 through a control labelled in user language, for example:

> **На чому це ґрунтується**

Show attribution, source date, event/publication distinction, human-readable
claim class, uncertainty, and hindsight boundary. Do not require Git or repository
vocabulary.

### Level 3 exact inspection

Open from Level 2 through:

> **Перевірити оригінал і метод**

Show exact fixed claim text; a bounded verbatim source excerpt verified against
the fixed locator; literal translation; citation; Claim ID; locator; source
identity; commit/blob where applicable; and full methodological metadata. If a
source excerpt cannot be verified, retain the source identity and state the
access or verification limitation instead of manufacturing excerpt text.

Level 3 must be keyboard reachable, closable, and return focus to the invoking
control. Opening it cannot change claim status, Evidence weight, or Working Set.

## 7. Transformation workflow

For each of the 48 fixed claims:

1. resolve exact claim block and source identity;
2. resolve and verify a bounded source excerpt against the fixed locator, or
   record that verified excerpt access is unavailable;
3. identify factual clauses, attribution, event time, publication time, and every
   material qualification;
4. draft the plain-language explanation;
5. draft or confirm the literal translation separately;
6. map every Level 1 clause to fixed support;
7. compare Level 1 against prohibited inference rules;
8. verify no uncertainty or hindsight boundary was removed;
9. mark unavailable event or publication time explicitly rather than inferring it;
10. mark the passage `REVIEWED` only after clause-level comparison;
11. withhold any passage that cannot pass the contract.

Batch generation alone is insufficient acceptance evidence. Review must cover
all 48 passages; representative sampling is insufficient for the no-invention
obligation.

## 8. Phase-label contract

Use the assessed human labels as primary presentation and preserve these as
secondary fixed identities:

| Phase | Primary human label | Secondary fixed identity |
| --- | --- | --- |
| 01 | Як читати цей кейс | Source-Bound Orientation |
| 02 | Що було до інциденту | Pre-Incident Operational Context |
| 03 | Як оновлювали систему | Deployment Reconstruction |
| 04 | У якому стані працювала система | Production-State Reconstruction |
| 05 | Як проявилася проблема | Incident Emergence |
| 06 | Які сигнали були видимі | Detection and Visibility |
| 07 | Як реагували і що відомо про зупинку | Response and Containment |
| 08 | До чого це призвело | Immediate Outcome |
| 09 | Що пізніше встановила SEC | Later Official Findings |
| 10 | Чого ми досі не знаємо | Evidence-Gap Review |
| 11 | Що варто осмислити | Experience Amplification Reflection Preparation |

The human label is navigational copy, not a phase rename in repository history.

## 9. Navigation contract

Primary navigation shows five story sections:

| Story section | Phases |
| --- | --- |
| Рамка і передумови | 01–02 |
| Від зміни до сигналів | 03–06 |
| Реакція і наслідки | 07–08 |
| Пізніші висновки і межі знання | 09–10 |
| Осмислення | 11 |

Required behavior:

- current section and phase are always explicit in text;
- previous/next phase controls remain;
- expanding a section reveals direct phase access;
- visited state is non-color-only and session-local;
- narrow layouts use stacked disclosure or a phase index, never overlapping
  labels or mandatory eleven-item horizontal scrolling;
- keyboard order follows story section, contained phases, then current content;
- navigation never implies completion, acceptance, causation, or chronology
  beyond fixed phase order.

## 10. Left-panel contract

The panel must render in this order:

1. eyebrow: `Матеріали поточної фази`;
2. heading: `Що ми знаємо на цьому етапі`;
3. count with accessible label: `{N} зафіксованих матеріалів`;
4. short explanation separated from the material list;
5. material cards led by plain-language meaning;
6. subtle inspection state;
7. no visually dominant Claim ID or A–E class code.

Claim ID and class remain available at Levels 2 and 3. The panel may expose a
quiet short reference only when necessary for support or accessibility, but it
cannot be the card title.

## 11. Verification obligations

Authorized execution must demonstrate:

- exactly 48 fixed claim identities and exactly 48 Level 1 passages;
- exact fixed claim text remains byte-derived from the fixed artifacts;
- each displayed source excerpt is verbatim and verified against the fixed
  locator, or its unavailability is explicit;
- every Level 1 factual clause maps to fixed support;
- every material uncertainty and hindsight boundary remains visible;
- Level 2 contains attribution and time distinction for every passage;
- Level 3 contains exact identity, citation, literal translation, and metadata;
- no unsupported actor knowledge, motive, causation, certainty, or counterfactual;
- 11 phases retain identity, order, and direct access;
- five navigation groups work at 1920×1080, 1440×900, and narrow widths;
- left-panel hierarchy is visually distinct;
- Working Set remains attention, not Evidence promotion;
- Replay and Reflection boundaries remain enforced;
- fixed historical artifacts and control surfaces remain unchanged;
- complete browser journey and independent content review pass without blocking
  findings.

## 12. Stop conditions

Stop execution and return to human authority if:

- a plain-language passage requires a fact not present in fixed support;
- a material qualification cannot be retained without making Level 1
  incomprehensible;
- claims conflict in a way requiring new synthesis;
- the correct human label would change fixed phase purpose;
- a navigation grouping changes phase order or methodology;
- implementation requires modification of historical artifacts, Product,
  Interaction Architecture, Engineering Architecture, governance authority,
  ROADMAP, or BACKLOG;
- work requires Replay, H3 validation, Root Cause, causal proof, or deployment.

## 13. Completion conditions

Wave 1.5 is complete only when all 48 passages pass the transformation contract,
the complete three-level interaction and navigation pass browser verification,
human-facing screenshots are reviewed at target widths, independent critical
review has zero blocking findings, and the worktree is clean after bounded
commits.

Completion does not authorize full Wave 2, Replay, validation, reflection
finalization, deployment, or broader product materialization.

## 14. Repository-change boundary if authorized

Permitted implementation scope should be limited to Reader-specific UI, content
projection, styles, tests, and bounded evidence/review artifacts. Fixed
walkthrough, source, research, canonical, governance-decision, ROADMAP, and
BACKLOG artifacts remain read-only.

No new repository transition is conceptually required solely to begin Wave 1.5
because the active repository work remains the already authorized Historical
Walkthrough Reader implementation execution. A transition would become necessary
only if accountable authority decides to change a control surface or active item.

## 15. Non-effects

This specification does not authorize execution, create translations or
plain-language passages, rewrite phases, begin full Wave 2, modify methodology,
validate H3, authorize Replay, establish Root Cause or causal proof, deploy, or
change repository control surfaces.
