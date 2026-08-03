# M9 Knight Capital Walkthrough Source-Citation Requirements

## Artifact State

```text
Citation requirements: PREPARED FOR CONSIDERATION
Claim ledger schema: DEFINED
Claim ledger entries: NONE
Walkthrough execution: NOT AUTHORIZED
Replay execution: NOT AUTHORIZED
Authority effect: NONE
```

# 1. Purpose and Boundary

This artifact defines source-citation requirements and the minimum claim-ledger
schema for a possible future Knight Capital Published Historical Walkthrough 01.
It does not populate a claim ledger, create historical claims, accept new sources,
or authorize walkthrough or Replay execution.

# 2. Fixed Inputs

| Fixed input | Commit | Blob |
| --- | --- | --- |
| Source Manifest | `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5` | `18141a68af8763be19a1ed85cb55560dfecd1ba2` |
| Bounded Chronology Assessment | `8fe4758267eb33339fcfe084aee764532c64ff80` | `6809b99e9f6bbf4907a6b111da4f9737a82c4187` |
| Evidence-Gap Assessment | `25ea558fce177054a5513d8828db0215b00fc6c1` | `4171548e41e6c8bdaca4662279370e54b436336b` |
| Walkthrough protocol | `0f6f56964b6294bc7dddd5685c3826b4ee5ec9de` | `4fd64e3090cdd0c70300945eeefef2e46c54fc85` |
| Permitted claims rules | `6edab8b8dc2b297bb98dc532ed7e9a6d2354b98c` | `807090ce6ae8c42bebb057a1eff96a5b353eaff9` |
| Prohibited inferences | `32e59f9791cd402a373ea40b0c7870c504ec1b7c` | `a48b6dc3b67e74953768e78f90c0386ec0b067f9` |

# 3. Universal Citation Requirements

1. Every substantive historical claim requires a citation.
2. Every citation must resolve to a fixed source identity.
3. A source title alone is insufficient where a commit/blob or equivalent fixed
   identity exists.
4. Claims based on official findings must name the attributed authority.
5. Analyst synthesis must cite every source materially supporting it.
6. Chronology claims must identify the fixed chronology support.
7. Source disagreement must remain visible.
8. Absence of Evidence must not be cited as Evidence of absence unless the source
   supports that conclusion.
9. Later sources must be labelled as later knowledge.
10. Citation proximity must make the supported claim unambiguous.
11. One citation must not silently support several materially different claims.
12. Secondary sources must not silently replace stronger primary or official
    sources.
13. Quoted wording must remain faithful to the source.
14. Paraphrase must not strengthen source certainty.
15. Uncertainty in the source must be preserved.
16. Missing Evidence must remain explicitly missing.

# 4. Fixed Source Resolution

A citation resolves only when it includes or inherits from its ledger record:

- fixed artifact or public-source identity;
- source owner;
- source date;
- stable URL where applicable;
- manifest source ID where applicable;
- repository commit and blob for repository-fixed material; and
- precise locator sufficient to inspect the supporting passage.

For public external material, the fixed manifest identity and public locator travel
together. For repository assessments, commit, blob, artifact path, and entry or
section locator travel together.

Current path or title similarity does not replace a fixed blob.

# 5. Citation Locator Requirements

Use the narrowest practicable locator:

- regulatory order paragraph and page;
- filing section, note, item, or line location;
- press-release paragraph or line;
- transcript page and speaker where relevant;
- chronology entry ID;
- Evidence-gap claim-class or Decision-window ID;
- protocol phase or rule section; or
- exact repository heading where no narrower locator exists.

A document-level citation is insufficient when the material source contains
multiple materially different propositions.

# 6. Attribution Requirements

## Official findings

The claim must state or immediately display the named regulator, court, company, or
other authority. “The record shows” is insufficient when the proposition is the
finding of one source owner.

## Company-originated statements

EDGAR-hosted company statements remain company-owned. The citation must not imply
that SEC hosting turns the statement into an SEC finding.

## Secondary reporting

Secondary material must be labelled secondary and may not silently displace a
stronger primary or official source. Attributed statements within reporting retain
their named speaker or organization.

## Analyst synthesis

The analyst owns the synthesis, not the historical facts. Every materially
supporting source must be cited; disagreement, incomplete overlap, and reasoning
steps must remain visible.

# 7. Chronology Citation Requirements

A chronology claim must include:

- fixed chronology blob;
- relevant `KC-T`, `KC-CT`, or `KC-DW` identifier;
- temporal-placement label;
- supporting underlying source identity where substantive history is asserted;
- event time or bounded period;
- publication or disclosure date when different; and
- any unresolved sequencing or timing note.

The chronology assessment organizes source-supported time; it does not independently
prove causality or actor knowledge.

# 8. Later-Knowledge and Hindsight Requirements

A source published after the described event must record one of:

- `LATER-COMPANY-DISCLOSURE`;
- `LATER-OFFICIAL-FINDING`;
- `LATER-POLICY-CONTEXT`;
- `HINDSIGHT-ONLY`; or
- another explicit bounded status defined by the permitted-claims artifact.

The citation must not imply that the later information was available, perceived, or
understood by historical actors. If actor availability is unknown, it remains
unknown.

# 9. Disagreement and Contradiction Requirements

When fixed sources differ in date, quantity, scope, description, or authority:

1. each materially different claim receives its own ledger entry;
2. each source is cited separately;
3. the difference is described without preference unless a fixed authoritative
   source expressly resolves it;
4. aggregation boundaries remain visible;
5. no synthetic “final” figure or account is created silently; and
6. the contradictory-source field identifies the related claim or citation.

# 10. Quotation and Paraphrase Discipline

- Quoted text must be exact, short, attributable, and locatable.
- Ellipsis must not remove a material qualification.
- Brackets must not change the source's substantive meaning.
- Paraphrase must preserve modal language, approximation, scope, timing, and
  attribution.
- “May,” “approximately,” “reported,” “found,” and similar qualifiers must not be
  silently strengthened.
- A paraphrase of a settlement finding must retain its procedural boundary where
  material.

# 11. Citation Proximity and Claim Atomicity

A citation must appear in the claim ledger entry and next to the rendered claim or
its unambiguous claim ID. One ledger claim should contain one materially coherent
proposition.

Where a sentence contains distinct technical, temporal, human, causal, and Outcome
propositions, it must be split or each proposition must receive explicit support.
One citation at paragraph end does not silently support every proposition.

# 12. Minimum Claim Ledger Schema

| Field | Minimum requirement |
| --- | --- |
| Claim ID | Stable neutral identifier |
| Claim text | Exact atomic proposition |
| Claim class | Permitted A–F class |
| Walkthrough phase | Protocol phase 1–11 |
| Source identity | Fixed source or assessment identity |
| Citation locator | Precise page, paragraph, section, line, or entry ID |
| Attribution | Source owner or analyst where applicable |
| Source date | Publication, filing, or record date |
| Historical-knowledge status | What is and is not supported about event-time availability |
| Hindsight status | Contemporaneous, later, hindsight-only, unknown, or not applicable |
| Confidence boundary | Descriptive support and scope limit |
| Contradictory source | Related source/claim identity or `NONE IDENTIFIED` |
| Evidence-gap reference | Fixed gap identity or `NONE IDENTIFIED` |
| Replay eligibility | Historical-only, possible future input, excluded, unresolved, or not authorized |
| Reviewer note | Qualification, unresolved issue, or exclusion reason |

# 13. Empty Claim Ledger Template

```text
Claim ID:
Claim text:
Claim class:
Walkthrough phase:
Source identity:
Citation locator:
Attribution:
Source date:
Historical-knowledge status:
Hindsight status:
Confidence boundary:
Contradictory source:
Evidence-gap reference:
Replay eligibility:
Reviewer note:
```

The ledger is intentionally unpopulated. No actual walkthrough claim is created.

# 14. Citation Review Checks

Before a future claim could enter an authorized historical walkthrough, confirm:

1. claim text is atomic and bounded;
2. class is permitted;
3. every material proposition resolves to fixed support;
4. locator is inspectable and sufficiently narrow;
5. owner and authority are explicit;
6. source date and historical-knowledge status are distinct;
7. quotation or paraphrase is faithful;
8. disagreement and uncertainty remain visible;
9. Evidence gaps are referenced and not filled;
10. hindsight status is explicit;
11. Replay eligibility creates no Replay authority; and
12. prohibited inferences are absent.

# 15. Explicit Non-Effects

This artifact does not:

- populate a historical claim ledger;
- create or approve substantive walkthrough claims;
- authorize or execute a walkthrough or Replay;
- accept or modify sources;
- establish complete historical truth, Root Cause, or causal proof;
- infer actor knowledge, Decision owner, rationale, or Learning;
- validate H3;
- create architecture, canonical objects, Engineering Architecture, metrics, KPIs,
  experiments, or implementation authority; or
- alter ROADMAP or BACKLOG.

```text
Citation ≠ claim sufficiency
Fixed identity ≠ complete source record
Later citation ≠ historical actor knowledge
Source silence ≠ Evidence of absence
Claim ledger schema ≠ claim ledger execution
```
