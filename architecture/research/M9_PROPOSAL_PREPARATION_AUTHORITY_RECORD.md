# M9 Proposal Preparation Authority Record Structure

## Status

**Artifact type:** Supporting governance structure

**Evidence status:** Research support

**Decision:** No decision

**Authority effect:** No authority effect

This document defines a reusable structure for a possible future attributable
human Decision record. It is not that record, does not make a Decision, and
does not authorize preparation or any subsequent action. Repository presence,
completeness, citation, or reuse cannot create an authority effect.

# 1. Decision Identity

The only Decision identity supported by this structure is:

> Should preparation of an M9 proposal be authorized?

The Decision concerns **only authorization of preparation of an M9 proposal**.
Under this identity, preparation means drafting possible milestone description,
possible scope, possible boundaries, possible Decision identities, and possible
non-effects for later human consideration.

This Decision does **not** concern:

- opening, creating, approving, or transitioning M9;
- approving or adopting an M9 proposal;
- selecting, ranking, prioritizing, or combining Product Value Hypotheses;
- selecting a validation scenario, candidate class, or validation subject;
- authorizing, designing, or conducting validation; or
- authorizing or defining implementation, Engineering Architecture, or
  delivery.

A materially broader or different question requires a separate Decision
identity, evidence basis, authority basis, and attributable record. It cannot be
included silently in a record using this structure.

# 2. Possible Dispositions

Exactly one of the following four dispositions may be recorded by an
accountable human authority:

## A — Authorized preparation

Preparation of one bounded M9 proposal is authorized within the Decision
identity in Section 1.

## B — Deferred

No present authorization or refusal is recorded; the same bounded question may
be reconsidered later.

## C — Additional evidence requested

No present authorization is recorded; specifically identified additional
evidence is requested for this bounded authority question.

## D — Declined

Preparation of an M9 proposal is not authorized under the current Decision
identity and evidence basis.

The four dispositions are unranked. Their lettering expresses no preference,
default, progression path, or recommendation. This structure selects none.

# 3. Required Authority Inputs

A valid attributable record using this structure must contain all of these
mandatory human-owned fields:

- **Accountable authority identity:** the named human accountable for the
  Decision.
- **Authority basis:** the legitimate source and bounded basis on which that
  human may decide this exact question.
- **Selected disposition:** exactly one of A, B, C, or D.
- **Human-owned rationale:** the deciding human's reasons, including material
  uncertainty retained.
- **Decision date:** the date on which the human made the Decision.
- **Human attestation:** an explicit statement that the Decision and rationale
  are attributable to the identified human authority.

AI must not infer, predict, select, populate, complete, simulate, or attest any
of these fields. AI may preserve human-supplied text and check structural
completeness, but fluency, context, prior conduct, repository metadata, or
apparent intent cannot substitute for direct attributable human input.

If any mandatory field is absent, the structure remains incomplete and no
Decision or authority effect may be reported from it.

# 4. Required Evidence

An attributable record should reference all four evidence inputs below by their
fixed commit and blob identities. A path, filename, branch, `HEAD`, or later
revision is not a substitute for the fixed identity.

| Evidence input | Commit | Blob |
| --- | --- | --- |
| M9 Proposal Preparation Authority Decision Package | `7e5156822ce526de99f87cbb622cf612490bd34a` | `e5846fff9e7d391b350bee9f75c6bc56329f8cd6` |
| Post-M8 Research Program Completion Synthesis | `cedf864b22d56f374b616fabdaa1c9de61d6e8d5` | `078c823112b193bda4362cd9e9800d2420656749` |
| Management OS Product Value Hypotheses | `c139af1a71c2ea26bfa0808a8d2b0d953d7f6ad8` | `c0a62f9166d47d20dd22cc64cb9ffdeb483d722b` |
| Management OS Product Value Hypotheses — Independent Critical Review | `150cbfa7939e1b1f9389e2eefbf278a90e21202a` | `69dfdd000128135bc1feb916b50d379e301a402f` |

The evidence inputs support consideration only. They do not determine the
disposition, supply human rationale, prove product value, or create authority.
Any additional evidence cited by a future human must also have a fixed identity
and a stated role in this exact Decision.

# 5. Minimum Record Content

Every attributable record must first include the exact Decision identity, all
mandatory authority inputs from Section 3, all required fixed evidence
identities from Section 4, and the explicit non-effects from Section 6. It must
then include the disposition-specific minimum content below.

## A — Authorized preparation

The record must state:

- that authorization is limited to preparing one M9 proposal;
- that permitted proposal content is exhaustively limited to a possible
  milestone description, possible scope, possible boundaries, possible
  Decision identities, and possible non-effects;
- who may perform the preparation, if the deciding human chooses to identify a
  preparer;
- any human-defined preparation boundary or stopping condition; and
- that proposal preparation is not M9 creation, M9 opening, proposal approval,
  validation, implementation, roadmap, backlog, or Engineering Architecture.

## B — Deferred

The record must state:

- that no authorization or refusal is presently issued;
- the human-owned reason for deferral;
- any human-defined condition for reconsideration, or an explicit statement
  that none is set; and
- that time, repository change, or condition occurrence cannot automatically
  convert deferral into authorization.

## C — Additional evidence requested

The record must state:

- the exact evidence requested and why it is material to this Decision;
- the acceptable source, fixed-identity expectation, and relevant boundary of
  that evidence;
- whether obtaining the evidence requires separate authorization;
- that the request itself authorizes no evidence collection, validation,
  experiment, metric, implementation, or external action; and
- that receipt of evidence cannot automatically select another disposition.

## D — Declined

The record must state:

- that preparation is not authorized under the current identity and evidence
  basis;
- the human-owned reason for declining;
- whether the decline is limited to the current evidence basis or includes a
  human-defined reconsideration boundary; and
- that decline does not erase research history or decide any materially
  distinct future question.

No disposition may borrow the effect or minimum content of another disposition.
Mixed, conditional, or unstated selection is not one of the four supported
dispositions and requires clarification by the accountable human.

# 6. Explicit Non-Effects

This supporting structure, and the mere creation of a future record from it,
does not by itself:

- create, define, authorize, open, approve, or transition M9;
- create, prepare, approve, or adopt an M9 proposal;
- create or approve a milestone, stage, order, or lifecycle;
- authorize, design, or conduct validation;
- authorize or define implementation or delivery;
- create or amend a roadmap;
- create or amend a backlog, task, or work instruction;
- create or define Engineering Architecture; or
- select Product Value Hypotheses or validation scenarios.

Only an attributable human record selecting disposition A could authorize the
bounded act of proposal preparation, and only within its explicit scope. Even
that disposition would create none of the other effects listed above.

# 7. Current Repository State

```text
Disposition: NONE
Authority effect: NONE
```

No human-owned authority inputs have been supplied and no disposition has been
selected through this structure. M9 is not created or opened, and no M9
proposal is created or prepared by this document.

# 8. Preservation Boundaries

This supporting structure:

- modifies no canonical artifact or canonical meaning;
- modifies no existing research artifact or evidence identity;
- leaves Product Vision, Systems, canonical M7, canonical M8, and source-owned
  architectures within their existing authority scopes;
- introduces no governance, gate, process, role, lifecycle, precedent, or
  authority beyond describing the record structure for the bounded Decision
  identity in Section 1;
- creates no attributable Decision or authority Decision;
- creates no M9 proposal, milestone, validation, implementation, roadmap, or
  backlog; and
- cannot gain authority through repetition, adoption by habit, tooling,
  repository location, citation, or AI use.

Any future attributable record is a separate artifact and must receive direct
human-owned inputs. This structure cannot act as that record or predetermine its
disposition.
