# M9 Knight Capital Published Historical Walkthrough 01 — Phase 2 Pre-Incident Operational Context

## Phase State

```text
Walkthrough: Knight Capital Published Historical Walkthrough 01
Phase: 2 — Pre-incident operational context
Phase status: COMPLETED
Selected inquiry shape: Shape B — Bounded operational-control walkthrough
Selected hypothesis: H3 — Experience Amplification
Historical branch: ACTIVE FOR PHASE 2 ONLY
Historical claim ledger: POPULATED FOR PHASE 2 ONLY
Analyst synthesis: NONE
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Root Cause: NOT ESTABLISHED
Causal proof: NOT ESTABLISHED
```

This phase records only the source-supported operational context needed for later
deployment, production-state, visibility, detection, response, and containment
reconstruction. It does not execute those later phases.

# 1. Fixed Walkthrough and Authority Identity

```text
Milestone: M9 — Empirical Product Value Learning
Stage: M9.1 — Empirical Learning Preparation
Published case: Knight Capital — 2012 software deployment and trading-loss incident
Inquiry shape: Shape B — Bounded operational-control walkthrough
Walkthrough authorization: AUTHORIZED
Walkthrough execution: AUTHORIZED UNDER THE FIXED SHAPE B PROTOCOL
Replay authorization: NONE
```

| Authority artifact | Commit | Blob |
| --- | --- | --- |
| Walkthrough Authorization Decision | `b37161ab15997ee13dc38a25a1da25b827bad7ee` | `edc7b9e50b0d73cd93edd8afd6b179307dccc2a9` |
| Walkthrough Execution Transition | `c76fcfe5ae621ff4bee3e9de9297f6f4e6cb711a` | `460bd7d72b68fa2ce368aa5a60ef5b5b424504d6` |
| Phase 1 — Source-bound orientation | `87aa56a887a0ccf5c2a22ba607fcd7582dacae69` | `34ebb4a9cadbaa746ed94e0ab8bebe542a8dc677` |

This phase consumes existing execution authority and creates no authority.

# 2. Fixed Method and Evidence Identities

| Fixed artifact | Commit | Blob |
| --- | --- | --- |
| Source Manifest | `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5` | `18141a68af8763be19a1ed85cb55560dfecd1ba2` |
| Bounded Chronology Assessment | `8fe4758267eb33339fcfe084aee764532c64ff80` | `6809b99e9f6bbf4907a6b111da4f9737a82c4187` |
| Evidence-Gap Assessment | `25ea558fce177054a5513d8828db0215b00fc6c1` | `4171548e41e6c8bdaca4662279370e54b436336b` |
| Walkthrough Protocol | `0f6f56964b6294bc7dddd5685c3826b4ee5ec9de` | `4fd64e3090cdd0c70300945eeefef2e46c54fc85` |
| Permitted Historical Claims | `6edab8b8dc2b297bb98dc532ed7e9a6d2354b98c` | `807090ce6ae8c42bebb057a1eff96a5b353eaff9` |
| Prohibited Historical Inferences | `32e59f9791cd402a373ea40b0c7870c504ec1b7c` | `a48b6dc3b67e74953768e78f90c0386ec0b067f9` |
| Source-Citation Requirements | `24cc03975c3820f1191a45b2eb0fc18e1a7f79ab` | `8f06ece7fe42482e8c9ee7a3057a528a4ac2092f` |
| Historical/Replay Branch Boundaries | `da955ae73ccb70a4d13ccf3d0a0ca804dbb99b1b` | `daf837748402893078c5d40a64776abe3d25a55e` |

# 3. Source Resolution Used in Phase 2

## P-R1 — later official source

- **Fixed manifest identity:** `P-R1`
- **Source:** *In the Matter of Knight Capital Americas LLC*, Exchange Act Release
  No. 70694, Administrative Proceeding File No. 3-15570
- **Owner:** U.S. Securities and Exchange Commission
- **Source class:** regulatory administrative order; settled enforcement record
- **Publication date:** 2013-10-16
- **Stable public locator:**
  `https://www.sec.gov/files/litigation/admin/2013/34-70694.pdf`
- **Fixed repository resolution:** Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`, section `P-R1`
- **Procedural boundary:** the SEC order records findings in a settled enforcement
  proceeding; Knight consented without admitting or denying the findings except as
  stated in the order. The order is not the complete investigative file or complete
  historical truth.
- **Historical-knowledge boundary:** publication in 2013 does not establish that
  the described information was available, perceived, or understood by any
  particular actor before or during the August 2012 incident.

## Evidence-gap assessment

- **Fixed repository identity:** commit
  `25ea558fce177054a5513d8828db0215b00fc6c1`, blob
  `4171548e41e6c8bdaca4662279370e54b436336b`
- **Locators used:** `KC-CC01 — Context claims`, `KC-CC02 — Technical-state
  claims`, and `KC-CC03 — Deployment claims`.

# 4. Phase 2 Historical Claim Ledger

Every entry below belongs only to protocol Phase 2. Class `C` means attributed
official finding; class `E` means explicit uncertainty. No claim is analyst
synthesis. Replay eligibility records a boundary only and creates no Replay
authority.

## KC-P2-C01

- **Claim text:** In its later 2013 settled administrative order, the SEC found
  that, to enable customer participation in the NYSE Retail Liquidity Program
  scheduled to commence on August 1, 2012, Knight made system and software-code
  changes related to order handling, including new code in SMARS; the order
  described SMARS as an automated high-speed algorithmic router that received
  parent orders and, as needed based on available liquidity, sent child orders to
  external venues.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 12, page 5 of the PDF
  (`Preparation for NYSE Retail Liquidity Program`)
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official description; event-time
  availability to particular actors is not established by publication.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the SEC order's
  procedural and descriptive scope; not independently verified here.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** This establishes only relevant system and program context. It
  does not traverse the staged deployment, production state, activation, or
  incident.

## KC-P2-C02

- **Claim text:** In its later 2013 order, the SEC found that the new RLP code was
  intended to replace unused Power Peg code in the relevant part of SMARS; the
  Power Peg functionality remained present and callable, and the RLP change reused
  a flag formerly used to activate Power Peg.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 13, page 5 of the PDF
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official description; which historical
  actors knew this technical state, and when, is not established here.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported at the level of the SEC's prose
  description; raw code and production-state Evidence are absent.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Intended replacement is not treated as prepared, deployed, or
  activated Change. Those states belong to later phases.

## KC-P2-C03

- **Claim text:** In its later 2013 order, the SEC found that Knight had controls
  before orders reached SMARS in its customer interface, internal order-management
  system, and system for internally executing customer orders, including controls
  concerning prevention of erroneous-order entry.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 20, page 7 of the PDF
  (`Controls and Supervisory Procedures — SMARS`)
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding about the operational
  arrangement; actor-specific awareness and use are not established.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the SEC order; complete
  configuration and effectiveness Evidence are not supplied.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** The claim records arrangement only; it does not evaluate the
  controls or reconstruct incident behavior.

## KC-P2-C04

- **Claim text:** In its later 2013 order, the SEC found that Knight did not have
  sufficient controls to monitor SMARS output, including a control comparing orders
  leaving SMARS with orders entering it, and did not have procedures to halt SMARS
  in response to its own aberrant activity.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 21, page 7 of the PDF
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding; no claim is made about
  what any historical actor knew or recognized.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the settled order; this
  is not a complete control inventory or independent control test.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** The claim establishes context for later visibility and
  containment phases but performs neither phase and makes no causal claim.

## KC-P2-C05

- **Claim text:** In its later 2013 order, the SEC found that Knight's position
  limits for some trading groups did not account for exposure from outstanding
  orders and that Knight did not have aggregate firm-level preset capital
  thresholds linked to automated controls that would prevent order entry when
  exceeded.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 22, page 7 of the PDF
  (`Capital Thresholds`)
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding about the pre-incident
  control arrangement; actor-specific knowledge is not established.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the SEC order; complete
  limit configuration and operational test Evidence are absent.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No incident Outcome or causal effect is asserted in this phase.

## KC-P2-C06

- **Claim text:** In its later 2013 order, the SEC described PMON as Knight's
  post-execution position-monitoring system and found that it relied entirely on
  human monitoring, did not generate automated alerts about firm financial
  exposure, and did not display account or trading-group limits.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 25, page 8 of the PDF
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding about monitoring design;
  viewing, recognition, interpretation, and ability to act remain separate and are
  not established by this claim.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the SEC order; complete
  monitoring configuration, user practice, and contemporaneous information states
  are absent.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC02`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** The claim records monitoring context only. Detection, awareness,
  and response are reserved for later phases.

## KC-P2-C07

- **Claim text:** In its later 2013 order, the SEC found that Knight did not have
  written code-development and deployment procedures for SMARS, did not require a
  second technician to review SMARS code deployment, and did not have a written
  protocol for accessing and retesting unused code on production servers.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 26, page 8 of the PDF
  (`Code Development and Deployment`)
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding about arrangements; no
  technician identity, conduct, rationale, or awareness is inferred.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the settled order; the
  fixed public record does not provide the complete release-governance record.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC03`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** This is pre-incident procedural context. The actual staged
  deployment is not reconstructed here and remains Phase 3 work.

## KC-P2-C08

- **Claim text:** In its later 2013 order, the SEC found that on August 1 Knight did
  not have supervisory procedures to guide relevant personnel when significant
  technological and compliance issues developed.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** `P-R1`; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`
- **Citation locator:** SEC Order Release No. 70694, paragraph 27, page 8 of the PDF
  (`Incident Response`), first two sentences only
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding about the procedural
  setting; no historical response action, Decision owner, rationale, or authority
  is reconstructed.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported within the settled order; not
  a complete account of all procedures, communications, roles, or practices.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed source assessments.
- **Evidence-gap reference:** Evidence-Gap Assessment `KC-CC01` and `KC-CC10`.
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Only the pre-existing procedural context is admitted. The
  paragraph's response actions are deliberately excluded as Phase 7 material.

## KC-P2-E01

- **Claim text:** The fixed public-source record does not establish Knight's
  complete internal architecture, operating model, staffing, release governance,
  workload, contemporaneous priorities, role definitions, or complete pre-release
  environment.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** Evidence-Gap Assessment commit
  `25ea558fce177054a5513d8828db0215b00fc6c1`, blob
  `4171548e41e6c8bdaca4662279370e54b436336b`
- **Citation locator:** `KC-CC01 — Context claims`, subsection `Missing Evidence`
- **Attribution:** Management OS fixed Evidence-Gap Assessment
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** These dimensions remain missing from the fixed
  public record; non-occurrence is not asserted.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` from the bounded fixed record, not
  proven absent from history.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed assessment.
- **Evidence-gap reference:** `KC-CC01`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Schedule pressure, management intent, culture, and universal
  actor knowledge must not be inferred through this gap.

## KC-P2-E02

- **Claim text:** The fixed public-source record does not provide raw source code,
  binaries, hashes, configuration snapshots, dependency state, runtime traces,
  complete logs, database state, or an independent forensic report sufficient to
  establish a complete pre-incident technical state.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** Evidence-Gap Assessment commit
  `25ea558fce177054a5513d8828db0215b00fc6c1`, blob
  `4171548e41e6c8bdaca4662279370e54b436336b`
- **Citation locator:** `KC-CC02 — Technical-state claims`, subsection `Missing Evidence`
- **Attribution:** Management OS fixed Evidence-Gap Assessment
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Technical Evidence remains missing from the
  fixed public record; absence from that record is not evidence of non-occurrence.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` from the bounded fixed record; the
  later SEC prose is not a verified production reproduction.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed assessment.
- **Evidence-gap reference:** `KC-CC02`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No complete mechanism, exhaustive failure mode, or Root Cause
  may be inferred.

## KC-P2-E03

- **Claim text:** The fixed public-source record does not provide the change ticket,
  release plan, deployment script, console output, checklist, peer review,
  approval, rollback plan, test record, or configuration-verification Evidence for
  the RLP release.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `2 — Pre-incident operational context`
- **Source identity:** Evidence-Gap Assessment commit
  `25ea558fce177054a5513d8828db0215b00fc6c1`, blob
  `4171548e41e6c8bdaca4662279370e54b436336b`
- **Citation locator:** `KC-CC03 — Deployment claims`, subsection `Missing Evidence`
- **Attribution:** Management OS fixed Evidence-Gap Assessment
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Deployment Evidence remains missing from the
  fixed public record; the actual deployment sequence is not traversed in Phase 2.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` from the bounded fixed record, not
  proven absent from history.
- **Contradictory source:** `NONE IDENTIFIED` in the fixed assessment.
- **Evidence-gap reference:** `KC-CC03`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No technician, negligence, intent, complete check state, or
  acceptance rationale is inferred.

# 5. Bounded Phase 2 Context Record

The admitted Phase 2 record consists only of claim-ledger entries `KC-P2-C01`
through `KC-P2-C08` and `KC-P2-E01` through `KC-P2-E03`. They establish later
officially described system, software, monitoring, risk-control, deployment-
procedure, and incident-response-procedure context together with explicit limits
of the fixed public record.

```text
Attributed later official finding ≠ complete historical truth
Pre-incident arrangement ≠ actor-specific knowledge
Intended Change ≠ prepared Change ≠ deployed Change ≠ activated behavior
Control description ≠ control-effectiveness proof
Missing Evidence ≠ Evidence of absence
Temporal sequence ≠ causal proof
```

No bounded analyst synthesis is added. The paragraph above indexes admitted claims;
it does not add a historical proposition.

# 6. Phase Exclusions and Preserved Unknowns

Phase 2 does not:

- reconstruct the staged deployment or its sequence;
- reconstruct production configuration or activated behavior;
- traverse incident emergence, alerts, detection, response, containment, or
  immediate Outcome;
- identify a Decision owner or rationale;
- assign knowledge, awareness, recognition, interpretation, authority, or ability
  to act to a historical actor;
- infer negligence, competence, intent, motivation, or organizational culture;
- establish Root Cause, causal proof, or a counterfactual Outcome;
- treat the SEC order as complete historical truth;
- create analyst synthesis, Replay material, organizational Learning, or H3
  validation; or
- modify the frozen methodology, authority, control surfaces, architecture, or
  implementation state.

The complete internal operating context, raw technical record, actor-specific
information, release records, and rationale remain missing. Phase structure does
not repair those gaps.

# 7. Phase Completion Boundary

```text
Phase 2 — Pre-incident operational context: COMPLETED
Historical claims: 11
Class C — Attributed official findings: 8
Class E — Explicit uncertainty claims: 3
Other claim classes: 0
Historical claim-ledger entries: 11
Analyst synthesis: NONE
Phase 3 — Deployment reconstruction: NOT STARTED
Replay material: NONE
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Root Cause: NOT ESTABLISHED
Causal proof: NOT ESTABLISHED
Authority: UNCHANGED
Frozen methodology: UNCHANGED
```

The exact next protocol phase is:

```text
PHASE 3
DEPLOYMENT RECONSTRUCTION
```

Phase 3 has not begun and is not executed by this artifact.
