# M9 Knight Capital Historical and Future Replay Branch Boundaries

## Current State

```text
Historical branch preparation: PERMITTED
Historical walkthrough execution: NOT AUTHORIZED
Replay branch definition: PERMITTED
Replay execution: NOT AUTHORIZED
Validation authority: NONE
Authority effect: NONE
```

# 1. Purpose and Boundary

This artifact defines two strictly separate branches for Knight Capital Published
Historical Walkthrough 01: a source-bounded historical branch and a possible future
Replay branch. It prevents simulated material from modifying history and prevents
historical uncertainty from being silently filled for Replay convenience.

Branch definition is preparatory. No historical walkthrough or Replay is executed
or authorized here.

# 2. Fixed Inputs

| Fixed input | Commit | Blob |
| --- | --- | --- |
| Walkthrough protocol | `0f6f56964b6294bc7dddd5685c3826b4ee5ec9de` | `4fd64e3090cdd0c70300945eeefef2e46c54fc85` |
| Permitted claims rules | `6edab8b8dc2b297bb98dc532ed7e9a6d2354b98c` | `807090ce6ae8c42bebb057a1eff96a5b353eaff9` |
| Prohibited inferences | `32e59f9791cd402a373ea40b0c7870c504ec1b7c` | `a48b6dc3b67e74953768e78f90c0386ec0b067f9` |
| Citation requirements | `24cc03975c3820f1191a45b2eb0fc18e1a7f79ab` | `8f06ece7fe42482e8c9ee7a3057a528a4ac2092f` |
| Bounded Chronology Assessment | `8fe4758267eb33339fcfe084aee764532c64ff80` | `6809b99e9f6bbf4907a6b111da4f9737a82c4187` |
| Evidence-Gap Assessment | `25ea558fce177054a5513d8828db0215b00fc6c1` | `4171548e41e6c8bdaca4662279370e54b436336b` |

# 3. Historical Branch

## Historical branch may contain only

- fixed-source-supported historical material;
- bounded chronology;
- attributable official findings;
- explicitly marked analyst synthesis;
- visible uncertainty; and
- visible Evidence gaps.

Every substantive entry remains subject to permitted-claim and citation rules.

## Historical branch must not contain

- simulated actions;
- invented Decisions;
- imagined conversations;
- alternative Outcomes;
- future product behavior;
- Replay-generated interpretation presented as history;
- invented Decision owners or rationales;
- assumed actor knowledge, alert recognition, authority, or ability to act;
- causal certainty stronger than fixed sources; or
- reconstructed original organizational Learning unsupported by fixed material.

# 4. Historical Branch Material Types

| Type | Required treatment |
| --- | --- |
| Direct source material | `SOURCE-ATTRIBUTED` with fixed citation |
| Official finding | `OFFICIAL-FINDING` with named authority and later-knowledge status |
| Chronology | `CHRONOLOGY-SUPPORTED` with entry ID and timing boundary |
| Analyst synthesis | `ANALYST-SYNTHESIS` with every material source and reasoning limit |
| Uncertainty | `UNCERTAIN` or `CONTESTED`; not resolved by plausibility |
| Missing Evidence | `MISSING-EVIDENCE`; not treated as non-occurrence |
| Later observation | `HINDSIGHT-ONLY` where event-time availability is unsupported |

# 5. Historical Branch Completion Boundary

Historical reconstruction reaches `STOP` when:

- the fixed bounded episode has been traversed under the protocol;
- permitted claims have fixed citations and qualifications;
- Evidence gaps and unresolved claims remain visible;
- no prohibited inference is present; and
- the historical branch has not incorporated Replay assumptions or outputs.

`STOP` does not mean complete historical truth, source sufficiency, walkthrough
success, Learning, or H3 validation. It is the mandatory boundary before any future
Replay could be considered.

# 6. Future Replay Branch

## Future Replay branch may eventually contain

- a separately authorized simulation starting from a declared historical boundary;
- only information explicitly available at the selected Replay entry point;
- declared assumptions;
- declared role and authority;
- proposed actions;
- simulated operational consequences; and
- reflection on reasoning.

“May eventually contain” defines a possible branch schema. Replay is not currently
authorized.

## Future Replay branch must not

- modify the historical record;
- claim that simulated actions would certainly have succeeded;
- become Evidence of what historical actors knew;
- become proof of Root Cause;
- become causal proof;
- become proof or validation of H3;
- convert assumptions into facts;
- import later findings without declaring them unavailable at the entry point;
- erase missing historical Evidence; or
- be executed before separate Replay authorization.

# 7. Replay Entry-Point Requirements

A future Replay entry point would require all of the following to be explicitly
recorded under separate authority:

1. historical branch boundary and claim-ledger version;
2. exact entry date, time, or bounded operational moment;
3. information explicitly available at that point;
4. information explicitly missing or withheld;
5. later information excluded as hindsight;
6. declared role;
7. declared authority and constraints;
8. declared assumptions;
9. permissible action space;
10. Outcome modelling limitations;
11. separate Replay Decision identity; and
12. separate attributable Replay authorization.

Unknown historical information must remain missing unless declared as a synthetic
assumption in the Replay branch. A synthetic assumption never backfills history.

# 8. Required Branch Transition

```text
Historical reconstruction
STOP

Declared Replay entry point
Declared available information
Declared missing information
Declared role
Declared authority
Declared assumptions
Separate Replay authorization

ONLY THEN:
Future Replay
```

The transition cannot be inferred from walkthrough completion, insight, user
interest, protocol acceptance, or repository presence.

# 9. Information Transfer Rules

## Historical to Replay

Only claim-ledger material marked eligible for possible future Replay may be copied,
and only with its source, citation, historical-knowledge status, hindsight status,
confidence boundary, contradictions, and Evidence gaps intact.

## Replay to historical

No simulated action, reasoning, assumption, consequence, or reflection may be
copied into the historical branch as a historical claim.

## Reflection

Reflection may compare the bounded historical record with declared Replay reasoning
only after separate authorization. Reflection remains later human or analyst
material, not original organizational Learning.

# 10. Outcome Boundary

Historical Outcomes remain the attributable observed aggregates and qualified
dimensions supported by fixed sources. Replay Outcomes, if later authorized, would
be simulated consequences under declared assumptions.

```text
Historical Outcome ≠ simulated Outcome
Simulated Outcome ≠ likely historical Outcome
Alternative action ≠ guaranteed prevention
Reasoning comparison ≠ causal proof
```

No confident alternative historical Outcome is permitted.

# 11. Decision and Knowledge Boundary

The historical branch retains absent Decision owner, rationale, and actor-specific
knowledge where unsupported. A future Replay may declare a synthetic role,
authority, and information set, but those declarations do not identify the
historical Decision-maker or historical information state.

```text
Declared Replay role ≠ historical actor
Declared Replay authority ≠ historical authority
Replay information set ≠ historical shared knowledge
Alternative Decision ≠ historical Decision
```

# 12. Branch Integrity Checks

Before any future authorization consideration, confirm:

1. historical and Replay material have different branch identities;
2. historical entries use only permitted claim classes;
3. citations resolve to fixed source identities;
4. analyst synthesis is labelled;
5. uncertainty and Evidence gaps remain visible;
6. `HINDSIGHT-ONLY` material is not treated as event-time knowledge;
7. historical reconstruction ends with explicit `STOP`;
8. no Replay entry point is inferred;
9. all Replay entry-point fields would be required;
10. Replay requires separate attributable authorization;
11. Replay cannot modify history or prove causality, Root Cause, or H3; and
12. no branch creates architecture or implementation authority.

# 13. Explicit Non-Effects

This artifact does not:

- execute or authorize the historical walkthrough;
- execute or authorize Replay;
- select a Replay entry point, role, authority, information set, action, assumption,
  or Outcome model;
- create historical or Replay content;
- establish Root Cause, causal proof, organizational Learning, or H3 validation;
- create architecture, canonical objects, Engineering Architecture, metrics, KPIs,
  experiments, or implementation authority; or
- alter ROADMAP or BACKLOG.

```text
Historical branch preparation: PERMITTED
Historical walkthrough execution: NOT AUTHORIZED
Replay branch definition: PERMITTED
Replay execution: NOT AUTHORIZED
```
