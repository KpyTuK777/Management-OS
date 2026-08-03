# M9 Knight Capital Permitted Historical Claims

## Artifact State

```text
Claim-admissibility rules: PREPARED FOR CONSIDERATION
Substantive walkthrough claims: NONE
Historical claim ledger: NOT CREATED
Walkthrough execution: NOT AUTHORIZED
Replay execution: NOT AUTHORIZED
Authority effect: NONE
```

# 1. Purpose and Boundary

This artifact defines the classes and minimum record structure for historical
claims that could be used in a future separately authorized Knight Capital
Published Historical Walkthrough 01 under **Shape B — Bounded operational-control
walkthrough**.

It does not create, test, approve, or populate substantive walkthrough claims. A
claim's permitted class does not make the claim true, sufficient, complete, or
authorized for use without claim-level review.

# 2. Fixed Inputs

| Fixed input | Commit | Blob |
| --- | --- | --- |
| Walkthrough protocol | `0f6f56964b6294bc7dddd5685c3826b4ee5ec9de` | `4fd64e3090cdd0c70300945eeefef2e46c54fc85` |
| Source Manifest | `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5` | `18141a68af8763be19a1ed85cb55560dfecd1ba2` |
| Bounded Chronology Assessment | `8fe4758267eb33339fcfe084aee764532c64ff80` | `6809b99e9f6bbf4907a6b111da4f9737a82c4187` |
| Evidence-Gap Assessment | `25ea558fce177054a5513d8828db0215b00fc6c1` | `4171548e41e6c8bdaca4662279370e54b436336b` |

No new source, chronology correction, or Evidence repair is introduced.

# 3. General Admissibility Conditions

A future historical claim is eligible for consideration only when:

1. it fits exactly one primary permitted claim class;
2. its text states no more than its supporting material;
3. every material proposition has a fixed source or fixed chronology reference;
4. source owner and authority remain visible;
5. event time and publication time are not conflated;
6. later knowledge is not assigned to historical actors;
7. uncertainty and disagreement remain visible;
8. analyst synthesis is explicitly labelled and introduces no new fact;
9. missing Evidence is not filled by plausibility; and
10. Replay eligibility is recorded without authorizing Replay.

Failure of any condition makes the claim unresolved or excluded; it does not permit
silent rewriting.

# 4. Permitted Claim Classes

## A. Direct source claims

### Definition

A statement directly supported by fixed source material and presented with an
attributable citation.

### Admissibility requirements

- The wording must not exceed the source's stated certainty or scope.
- Source identity, owner, date, and locator must be recorded.
- Quotation and paraphrase must remain faithful.
- Company statements, regulatory findings, and secondary reporting must retain
  their distinct authority classes.

### Boundary

Direct support does not establish completeness, independent corroboration, actor
awareness, causality, or historical truth beyond the source's own claim.

## B. Bounded chronology claims

### Definition

A statement about sequence, date, time, or bounded period supported by the fixed
chronology assessment.

### Admissibility requirements

- The chronology entry or timing-conflict item must be identified.
- Exact time may be used only when the fixed material supplies it.
- Approximate, bounded, retrospective, disputed, and unknown placement must retain
  those qualifications.
- Publication time must remain separate from event time.

### Boundary

Temporal placement does not establish causal order, actor knowledge, Decision,
rationale, or complete sequencing.

## C. Attributed official findings

### Definition

A statement explicitly identified as the finding, position, disclosure, or statement
of a named regulator, court record, company, or other attributable fixed source.

### Admissibility requirements

- The attribution owner must appear in the claim text or immediately adjacent
  label.
- The source's procedural and authority class must be recorded.
- Settlement, company-authorship, retrospective timing, or other material limits
  must remain visible.
- The claim may not be restated as an unattributed fact of complete history.

### Boundary

An official finding is authoritative within its own role; it is not complete
historical truth or proof of every actor's information.

## D. Aggregate observable Outcome claims

### Definition

A statement about a documented immediate incident result at the aggregation and
measurement scope supplied by fixed material, without unsupported attribution of
human intent or knowledge.

### Admissibility requirements

- Outcome dimension, time boundary, units, aggregation, source date, and owner must
  be explicit.
- Differently scoped loss or activity measures must remain separate.
- Granular or multidimensional conclusions may not be inferred from one aggregate.
- Causal wording must not exceed the source.

### Boundary

Immediate aggregate Outcome is not complete Outcome, sole Outcome, Root Cause,
Learning, or counterfactual evidence.

## E. Explicit uncertainty claims

### Definition

A statement that a fact, rationale, ownership, recognition, information state,
Change status, causal link, or Learning claim cannot be established from the current
fixed sources.

### Admissibility requirements

- The affected proposition must be named precisely.
- The applicable Evidence-gap or chronology limitation must be referenced.
- “Unknown” must not be restated as “did not occur.”
- The uncertainty may be bounded by actor, time, source, state, or claim dimension.

### Boundary

Missing Evidence is not Evidence of absence unless a fixed source expressly
supports that conclusion.

## F. Bounded analyst synthesis

### Definition

A careful comparison of multiple fixed sources that remains explicitly labelled as
analyst synthesis.

### Admissibility requirements

The synthesis must:

- not contradict its supporting sources;
- not add unknown facts;
- cite every source materially supporting it;
- preserve differences in ownership, date, scope, and certainty;
- remain open to revision;
- state its reasoning boundary; and
- not become causal proof, actor knowledge, Decision rationale, or historical fact.

### Boundary

Synthesis may organize supported relationships. It may not fill gaps, reconcile
conflicts by preference, or manufacture a seamless narrative.

# 5. Required Claim Record

Every future candidate claim must contain:

| Field | Requirement |
| --- | --- |
| Claim text | Exact bounded proposition under review |
| Claim class | One primary A–F class; secondary labels may be recorded separately |
| Source identity | Fixed source or fixed assessment identity |
| Citation location | Page, paragraph, section, line, entry ID, or equivalent locator |
| Attribution owner where applicable | Named regulator, company, court record, publisher, or analyst |
| Confidence boundary | Descriptive support and scope limit; no numeric score |
| Uncertainty note where applicable | Exact unknown, conflict, or missing Evidence |
| Hindsight status | Contemporaneous, later disclosed, later finding, or hindsight-only |
| Replay eligibility status | Historical-only, possible future Replay input, excluded, or unresolved |

An empty mandatory field prevents admission until resolved. It does not authorize
inference.

# 6. Confidence Boundary Vocabulary

Permitted descriptive boundaries include:

- `materially supported`;
- `supported with qualification`;
- `partially supported`;
- `fragmented`;
- `retrospectively supported`;
- `disputed`;
- `materially absent`; and
- `unknowable from current public record`.

These are evidence descriptions, not scores, probabilities, grades, or validation
results.

# 7. Hindsight Status

Every claim must use one applicable status:

- `CONTEMPORANEOUSLY-PUBLISHED`;
- `CONTEMPORANEOUSLY-RECORDED-BUT-LATER-PUBLISHED`;
- `LATER-COMPANY-DISCLOSURE`;
- `LATER-OFFICIAL-FINDING`;
- `LATER-POLICY-CONTEXT`;
- `HINDSIGHT-ONLY`;
- `UNKNOWN`; or
- `NOT-APPLICABLE`.

This vocabulary is a research-record convention, not a canonical object or UI
state.

# 8. Replay Eligibility Status

Permitted values are:

- `HISTORICAL-BRANCH-ONLY`;
- `POSSIBLE-FUTURE-REPLAY-INPUT`;
- `EXCLUDED-FROM-REPLAY`;
- `UNRESOLVED`; or
- `REPLAY-NOT-AUTHORIZED`.

Eligibility describes possible later treatment only. It neither moves material to
a Replay branch nor authorizes Replay.

# 9. Claim Review Outcomes

A future claim-level review may return only:

- `ELIGIBLE-AS-WRITTEN`;
- `ELIGIBLE-WITH-RECORDED-QUALIFICATION`;
- `REQUIRES-BOUNDING`;
- `REMAINS-UNCERTAIN`;
- `CONTESTED-PRESENT-SEPARATELY`; or
- `EXCLUDED`.

No review outcome may upgrade source authority or Evidence sufficiency.

# 10. Empty Claim Template

```text
Claim ID:
Claim text:
Claim class:
Source identity:
Citation location:
Attribution owner where applicable:
Confidence boundary:
Uncertainty note where applicable:
Hindsight status:
Replay eligibility status:
Review outcome:
Reviewer note:
```

This template is intentionally empty. No substantive walkthrough claim or claim
ledger is created by this artifact.

# 11. Explicit Non-Effects

This artifact does not:

- authorize or execute a walkthrough;
- create substantive historical claims;
- create a historical claim ledger;
- authorize or execute Replay;
- infer Decision owner, rationale, actor knowledge, or alert recognition;
- establish Root Cause or causal proof;
- validate H3;
- claim organizational Learning;
- create architecture, canonical objects, Engineering Architecture, metrics, KPIs,
  experiments, or implementation authority; or
- alter ROADMAP or BACKLOG.

```text
Permitted claim class ≠ accepted claim
Attributable claim ≠ complete historical truth
Chronology claim ≠ causal proof
Explicit uncertainty ≠ permission to fill uncertainty
Replay eligibility ≠ Replay authorization
```
