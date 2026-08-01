# Operational Diagnosis vs Root Cause

## Architectural Research

## Research Status

```text
Non-authoritative architectural research
Observations and opportunities only
No architecture decision or repository transition
```

## 1. Purpose and Boundary

This paper evaluates whether the idea traditionally called **Root Cause** is
better understood in Management OS as **Operational System Diagnosis** or
**Operational Diagnosis**: a bounded, evidence-backed characterization of an
operational system across multiple interacting conditions.

The study is descriptive and exploratory. It does not rename a canonical
concept, redefine a capability, assign semantic ownership, modify M8, adopt a
term, create a migration, propose repository edits, or authorize product,
engineering, implementation, governance, or delivery work.

Terms used here as research labels carry no canonical authority. In particular,
`Operational Diagnosis`, `Operational System Diagnosis`, and the illustrative
diagnostic hierarchy are not new architectural objects.

## 2. Method and Evidence Scope

The study inspected:

- canonical M8.1–M8.7 architecture;
- the approved M8 Architecture Vision;
- canonical or approved product-architecture sources cited by M8, especially
  Operational Case, Operational Reasoning, Operational Inquiry, Case Evidence,
  Operational System, Operational Transition, Scenario Simulation, and Systems;
- the canonical decision-history log for rejected alternatives and rationale;
  and
- canonical design sources where `Diagnosis` or `System condition` has a
  separate presentation meaning.

The evidence was interpreted under its recorded authority. Decision history
explains why an alternative was rejected but does not replace current
authoritative architecture. Term occurrence alone does not establish semantic
ownership or justify a rename.

## 3. Executive Observations

1. **Management OS does not optimize for discovering one Root Cause.** The
   repository explicitly rejects mandatory single-root-cause and linear-stage
   models because operational causality may be plural, interacting, uncertain,
   external, bounded, or unresolved.
2. **The architecture already behaves more like operational diagnosis than
   single-cause analysis.** It begins with a current or intended condition,
   bounds an Operational System, gathers and validates Evidence, discriminates
   competing explanations, preserves interacting factors and uncertainty,
   supports human judgment, observes outcomes, and learns.
3. **`Root Cause` is not a canonical M8 object.** The exact phrase does not
   occur in canonical M8.1–M8.7. Where it appears in approved experience or
   inquiry sources, it is rejected or used as a premature-inference guardrail.
4. **Canonical `Cause` is narrower than Root Cause.** Operational Case defines a
   Cause as an owner-accepted, Case-scoped conclusion after evaluated Evidence;
   it is normally bounded and never becomes a universal Fact.
5. **`Diagnosis` is not yet a positively defined canonical product object.** It
   appears mainly as something the product must avoid asserting prematurely.
   Consequently, replacing `Cause` with `Diagnosis` would not be a neutral
   wording substitution.
6. **Outcome is closer to the governing terminal test than Cause elimination.**
   The architecture evaluates intended versus observed operational effect and
   permits inconclusive, failed, unknown, no-action, and another-cycle outcomes.
   Outcome is not absolutely terminal, however: review, learning,
   standardization judgment, Memory, and possible Knowledge evolution may follow.
7. **Hierarchical diagnosis is structurally compatible with the architecture.**
   Operational System boundaries, typed processes and dependencies, condition
   assessments, Evidence facets, competing Hypotheses, plural Causes, and
   uncertainty can support a multi-characteristic diagnostic view. The exact
   hierarchy and its owner are not currently canonical.

## 4. Research Question Findings

### 4.1 Does Management OS optimize for a single root cause?

**Observation:** No.

**Evidence:**

- Canonical decision history rejects requiring one Root Cause because
  operational causality can be plural, uncertain, interacting, or outside the
  owner's control (`docs/DECISIONS.md`, lines 689–691).
- The same history rejects mandatory Root Cause because plural, bounded,
  external, or unresolved Causes can coexist with a justified Decision
  (`docs/DECISIONS.md`, lines 828–829).
- Operational Case Experience states that a single Root Cause is never required
  and permits multiple interacting Causes, bounded uncertainty, an external
  condition, or sufficient Evidence for action without complete causal proof
  (`docs/OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, lines 158–162).
- Operational Inquiry may not assume a root Cause and must preserve contrary
  Evidence (`docs/OPERATIONAL_INQUIRY_ARCHITECTURE.md`, line 221).

**Implication:** Root Cause is neither the mandatory objective nor the required
completion criterion of operational investigation.

### 4.2 Does the architecture describe multi-characteristic operational-system diagnosis?

**Observation:** Functionally, yes; terminologically, not yet as one canonical
object.

**Evidence:**

- Operational System is a bounded network of processes, capabilities, people,
  decision rights, information and material flows, systems, controls,
  dependencies, constraints, and feedback loops. Investigation selects the
  smallest useful boundary containing the condition, outcomes, relationships,
  and plausible influences (`docs/OPERATIONAL_SYSTEM_ARCHITECTURE.md`, lines
  18–30).
- Investigation follows system behavior and relationships without presuming
  departmental fault. Authority, people, skills, incentives, informal
  coordination, technology, suppliers, demand, resources, regulation, controls,
  and external conditions are all eligible when Evidence makes them material
  (lines 60–75).
- Operational Inquiry begins by establishing operational condition, scope,
  baseline, timeline, population, or possible Inflection Point and then obtains
  Evidence, validates it, discriminates explanations, and resolves
  contradictions (`docs/OPERATIONAL_INQUIRY_ARCHITECTURE.md`, lines 79–90).
- Case Evidence treats Financial, Operational, Human, Structural, Historical,
  and System as non-exclusive discovery facets. They organize discovery but do
  not determine authority or evidentiary weight
  (`docs/CASE_EVIDENCE_ARCHITECTURE.md`, lines 65–72).

**Implication:** The architecture supports a composite diagnosis-like act made
from multiple evidence-backed characteristics, but current ownership remains
distributed across Investigation, Evidence, Reasoning, Operational System,
condition assessment, and human Decision responsibilities.

### 4.3 Does current M8 implicitly support this model?

**Observation:** Yes, as an integration of existing responsibilities rather than
as a named capability.

| M8 artifact | Existing support | Boundary retained |
| --- | --- | --- |
| M8.1 | One Management OS product understands a real Operational System through context, Evidence, interpretation, human Decision, bounded action, verified Outcome, and learning | Product representation is not operational reality; Product Purpose and System Identity remain framing concerns |
| M8.2 | C5 Operational System understanding, C6 governed topology, C7 Investigation, C9 Evidence, C12 Reasoning, C13 scenarios, C14 Decision, and C16 Outcome continuity compose without ownership transfer | No single capability currently owns an object named Diagnosis |
| M8.3 | Information, Evidence, interpretation, Hypothesis, Recommendation, Decision, execution intent, execution outcome, learning, and Knowledge remain distinct | Cause and Diagnosis are not promoted semantic kinds in the product-wide vocabulary |
| M8.4 | Gaps, Risks, evidence limitations, source conflicts, uncertainty, and maturity remain visible | Assessment does not resolve conditions or authorize a diagnostic model |
| M8.5 | Future clarification, refinement, composition, or capability emergence can be evaluated while preserving ownership and alternatives | No evolution route or option is selected by this research |
| M8.6 | Claim-specific Evidence, criteria, methods, limitations, blockers, residual risk, and deterministic readiness classes can assess a future diagnostic proposition | Readiness cannot grant semantic ownership or governance authority |
| M8.7 | The integrated trace already runs from Operational Reality through Evidence, Reasoning, human judgment, Decision, source-owned action, observed Outcome, and Learning | Integrated coherence is not authority to redefine an upstream concept |

**Implication:** A diagnosis interpretation is compatible with M8, but saying
that M8 supports it is not the same as saying M8 has already defined or approved
it.

## 5. Canonical Terminology Inventory

### 5.1 Canonical M8 corpus

The following inventory concerns semantic use, not raw word count alone.

| Term | Canonical M8 use | Observation |
| --- | --- | --- |
| Root Cause | Absent from M8.1–M8.7 | Not a canonical M8 object or milestone objective |
| Cause | M8.2 mentions `Cause` only as something a Hypothesis is not; M8.3 uses cause/causality in non-promotion and outcome-verification boundaries | Causal caution is present, but M8 does not establish a Cause capability or universal terminal object |
| Causal language | Concentrated in M8.2 and M8.3 boundaries: temporal order, similarity, modeled output, execution report, or observation cannot prove causality | Used mainly to prevent epistemic promotion |
| Diagnosis | Absent from M8.1–M8.7 | No canonical M8 definition or owner |
| Operational condition | Not used as an exact canonical M8.1–M8.7 label; the approved M8 Vision describes an observed operational condition | The meaning enters M8 through authoritative sources rather than a new M8 object |
| System condition | Absent as an operational-domain object in M8.1–M8.7 | Elsewhere, canonical visual semantics uses `System condition` for loading, synchronization, stale/unavailable sources, conflicts, or execution uncertainty—a different concern |
| Outcome | Used throughout M8.1–M8.7 for capability outcome, execution outcome, observed operational consequence, validation result, assessment conclusion, and planning outcome | The word is overloaded but qualified by owning context; observed Outcome remains distinct from activity, completion, effect, and learning |

### 5.2 Canonical and approved source documents

| Document | Relevant language | Authority-sensitive observation |
| --- | --- | --- |
| `docs/OPERATIONAL_CASE_ARCHITECTURE.md` | Cause, causal understanding, current/intended condition, Outcome verification | Canonical Cause is owner-accepted, Evidence-backed, Case-scoped, limited, and non-universal; Outcome verification governs whether a response became a verified Solution |
| `docs/OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md` | Root Cause, plural Causes, diagnosis, current condition, observed outcome | Explicitly rejects one-Root-Cause bias and premature diagnosis; supports non-linear, uncertain, and inconclusive investigation |
| `docs/OPERATIONAL_REASONING_MODEL.md` | Cause, causal reasoning, current/intended condition, simulated and observed outcomes | Preserves competing explanations; simulated outcome is never observed Outcome |
| `docs/OPERATIONAL_INQUIRY_ARCHITECTURE.md` | root Cause, Cause, causal mechanism, operational condition, outcome-oriented inquiry | Inquiry establishes condition and discriminates explanations but cannot assume Cause or direct judgment |
| `docs/CASE_EVIDENCE_ARCHITECTURE.md` | Cause, operational condition, Outcome | Cause remains interpretation/conclusion rather than Fact; Evidence facets can expose multiple structural and operational contributors |
| `docs/OPERATIONAL_SYSTEM_ARCHITECTURE.md` | Operational System, current/intended/observed operating condition, Process Condition Assessment, Outcome | Strongest positive basis for multi-characteristic system assessment; does not define Diagnosis |
| `docs/OPERATIONAL_TRANSITION_ARCHITECTURE.md` | current/intended operating condition, observed Outcome, stabilization | Tests operational consequence after Decision; execution completion is not Outcome success |
| `docs/SCENARIO_SIMULATION_ARCHITECTURE.md` | causal/model logic and conditional outcomes | Modeled consequences remain conditional, non-evidentiary, and non-authorizing |
| `docs/SYSTEMS.md` | Cause, causal proof, modeled and observed outcomes | Cross-system boundaries reject Cause by recurrence and keep modeled output outside Evidence and observed Outcome |
| `docs/DECISIONS.md` | Root Cause, Causes, causal language, diagnosis, operational condition, Outcome | Canonical decision history documents rejection of mandatory Root Cause; it explains rationale but current rules remain in owning architecture documents |
| `images/17-design-principles/Canonical Visual Semantics.md` | System condition | Refers to technical/product state such as loading, synchronization, stale source, or conflict; using `System Diagnosis` without qualification could collide with this established meaning |

### 5.3 Diagnosis language

Positive domain use of `Operational Diagnosis` or `Operational System Diagnosis`
was not found in the inspected canonical corpus. `Diagnosis` appears primarily in
guardrails:

- reported concern is not automatically diagnosis;
- naming must not create premature diagnosis;
- AI summary must not become diagnosis; and
- experience should preserve a verified conclusion separately from a working
  title or symptom.

**Implication:** Diagnosis has intuitive explanatory value but currently lacks
canonical definition, scope, evidence threshold, owner, handoff semantics, and
relationship to Cause, Process Condition Assessment, and human Decision.

## 6. Root Cause, Cause, and Diagnosis Are Not Equivalent

| Concept | Meaning supported by current evidence | Principal risk if conflated |
| --- | --- | --- |
| Root Cause | A single privileged causal explanation traditionally treated as the problem's decisive origin | False linearity, premature closure, ignored interaction, external-condition blindness, and pressure to claim certainty |
| Cause | An owner-accepted, Case-scoped conclusion after evaluated Evidence, alternatives, confidence, limitations, validation method, and scope | Treating a bounded conclusion as universal Fact or as the only material contributor |
| Process Condition Assessment | An Investigation- or Outcome-owned projection of observed condition for a defined process scope | Mistaking a projection for Evidence, durable process truth, causal explanation, or universal performance score |
| Operational Diagnosis | Research label for a bounded synthesis of Evidence, conditions, interacting factors, uncertainty, strengths, constraints, and plausible mechanisms across an Operational System | Creating an unowned umbrella object, laundering interpretation into Fact, or absorbing Cause, condition assessment, Evidence, and Decision ownership |

**Observation:** Replacing `Root Cause` with `Operational Diagnosis` would align
language with architecture already rejecting single-cause certainty. Replacing
canonical `Cause` with `Diagnosis`, however, could erase a useful distinction
between a scoped causal conclusion and a broader multi-characteristic system
assessment.

**Implication:** The research supports examining a relationship among these
concepts, not a direct global substitution.

## 7. Hierarchical Diagnosis

### 7.1 Structural compatibility

The architecture naturally permits a hierarchical analytical view because:

- Operational System is a network rather than a linear process;
- its boundary is Matter-relative, revisable, and allowed to cross departments;
- processes, roles, decision rights, flows, controls, constraints, dependencies,
  feedback loops, external actors, and conditions are typed and referenceable;
- Evidence has multiple non-exclusive discovery facets;
- Hypotheses may compete, Causes may be plural and bounded, and uncertainty must
  remain visible; and
- observed Outcome tests Decision-relative effect without proving universal
  causality.

### 7.2 Non-normative illustration

The following is an illustration of a possible diagnostic view, not a canonical
taxonomy or proposed architecture:

```text
Operational Diagnosis (research label only)
├── Delegation maturity
├── Standardization maturity
├── Information fragmentation
├── Decision latency
├── Operational overload
└── Organizational scalability
```

These labels could describe characteristics, explanatory factors, risks,
strengths, or maturity observations depending on Evidence and scope. The current
architecture does not establish them as universal dimensions, scores,
diagnoses, Causes, or capability-owned records.

### 7.3 Architectural caution

A hierarchy would preserve coherence only if every node retained:

- defined subject and system boundary;
- Evidence and contrary Evidence;
- provenance, observation time, freshness, and source authority;
- distinction among observation, condition assessment, interpretation,
  Hypothesis, Cause, and Recommendation;
- uncertainty, limitations, and confidence basis;
- semantic owner and explicit non-owner; and
- relationship to Decision and later observed Outcome without claiming causal
  proof by structure, score, recurrence, or presentation.

## 8. Is Outcome the True Terminal Architectural Object?

**Observation:** Outcome is the governing consequence test, but not an absolute
terminal object.

**Evidence:**

- Decision history rejects records, Knowledge, SOP creation, and activity as the
  governing terminal result; verified operational effect and standardization
  judgment determine whether durable change is justified.
- Operational Case distinguishes Countermeasure from verified Solution,
  activity from Outcome, and closure from success. A Cause may remain unresolved
  while a justified Decision or no-action outcome is still possible.
- Operational Transition states that execution completion is not Outcome
  success. Outcome compares observed operation with Decision intent and retains
  unknown, inconclusive, further-action, and stabilization conditions.
- M8.3 separates execution observation, Outcome relationship, verification,
  Learning, Memory, and Knowledge.

**Implication:** Management OS is outcome-oriented rather than cause-elimination-
oriented. Yet Outcome leads into review and learning; it does not terminate
semantic continuity. A more accurate chain is:

```text
Current condition
  → Evidence and competing explanations
  → human Decision or justified no-action
  → source-owned action or observation
  → observed Outcome and verification
  → Learning
  → possible Memory / Knowledge / practice evolution
```

Root Cause elimination is not required anywhere in this chain.

## 9. Potential Effects on M8

No M8 change is made or recommended here. The following are implications that a
future separately authorized study would need to examine if it considered a
formal diagnosis concept.

| M8 area | Potential implication | Open question, not decision |
| --- | --- | --- |
| M8.1 Identity | Operational Diagnosis could reinforce Management OS as a system-understanding product rather than a record system or causal oracle | Would Diagnosis be a framing description, responsibility, or architectural object? |
| M8.2 Ownership | The concept crosses C5, C6, C7, C9, C12, C13, C14, and possibly C8/C16 | Which existing capability owns synthesis, and which retain Evidence, condition, Cause, Decision, and Outcome meaning? |
| M8.3 Evidence and handoffs | A diagnosis would require explicit separation from Evidence, Fact, Hypothesis, modeled output, Recommendation, and Decision | Is Diagnosis a new semantic kind, a structured Interpretation/Conclusion, or a view over existing kinds? |
| M8.4 Gap assessment | Existing evidence, validation, correction, context, handoff, and maturity Gaps would bound any completeness claim | Would a diagnosis concept expose a genuinely new Gap, or only make existing ones easier to see? |
| M8.5 Evolution | Clarification, refinement, composition, or future capability emergence are all conceivable research paths | Which path preserves the smallest coherent delta and alternatives? |
| M8.6 Validation | Evidence sufficiency, limitation visibility, traceability, ownership, and authority-boundary criteria could test a future concept | What criterion distinguishes a useful bounded diagnosis from premature or unsupported synthesis? |
| M8.7 Integrated review | The integrated architecture already supports a system-level, evidence-to-outcome reasoning chain | Would a diagnosis label clarify that chain or create a competing semantic authority? |

## 10. Implications

### 10.1 Semantic coherence

Using `Operational Diagnosis` as a research framing may improve coherence by:

- avoiding the false promise of one discoverable Root Cause;
- centering a bounded Operational System rather than an isolated defect;
- accommodating interacting conditions, strengths, constraints, and uncertainty;
- supporting proportionate action before complete causal proof; and
- keeping Outcome verification more important than rhetorical causal closure.

It may reduce coherence if it:

- replaces the narrower Case-scoped `Cause` conclusion indiscriminately;
- overlaps Process Condition Assessment or Operational System ownership;
- becomes an AI-generated label presented as Fact;
- implies medical certainty, universal scoring, or a durable system property;
- collapses Evidence, interpretation, Hypothesis, Cause, Recommendation, and
  Decision; or
- treats diagnosis completion as approval to act.

### 10.2 Language choice

`Operational Diagnosis` is potentially less ambiguous than `System Diagnosis`
because the latter can be read as technical system diagnostics. Canonical Visual
Semantics already uses `System condition` for synchronization, source
availability, loading, conflicts, and execution uncertainty. This is a language
collision risk, not a decision for or against either term.

### 10.3 Human authority

Any diagnosis-like synthesis would remain bounded interpretation or conclusion
unless separately defined. It could inform human judgment but could not accept a
Cause, adopt a Recommendation, make a Decision, authorize source mutation, or
declare Outcome. Confidence, presentation quality, automation, recurrence, and
similarity would add no authority.

## 11. Possible Future Architectural Opportunities

These are research opportunities only. None is selected, recommended, or
authorized.

1. **Terminology study:** compare `Operational Diagnosis`, `Operational System
   Diagnosis`, `System Understanding`, `Condition Synthesis`, and the current
   Cause/condition vocabulary against user comprehension and existing canonical
   language.
2. **Semantic-boundary study:** determine whether a diagnosis is merely a view
   or synthesis over current objects, a subtype of Interpretation/Conclusion,
   or a genuinely missing architectural object.
3. **Ownership analysis:** map candidate responsibilities against C5, C6, C7,
   C8, C9, C12, C13, C14, and C16, including explicit non-ownership and human
   authority.
4. **Evidence-contract research:** identify the minimum provenance, contrary
   Evidence, uncertainty, coverage, and reviewability needed for a bounded
   multi-characteristic diagnosis claim.
5. **Hierarchy research:** test whether diagnostic dimensions should be
   source-derived and Matter-relative rather than universal, scored, or fixed.
6. **Outcome relationship study:** examine how a pre-Decision diagnosis-like
   synthesis relates to intended condition, selected intervention, observed
   Outcome, causal learning, and later revision without retroactive rewriting.
7. **Language-collision study:** distinguish operational-domain diagnosis from
   technical `System condition`, runtime diagnostics, health indicators, and
   Process Condition Assessment.
8. **Validation thought experiment:** apply M8.6 criteria to a hypothetical
   diagnosis claim without creating the concept, to reveal missing evidence or
   ownership boundaries.

## 12. Research Conclusion

The evidence supports three bounded conclusions:

1. **Single Root Cause is not the Management OS optimization target.** It is
   explicitly rejected as mandatory and is absent as a canonical M8 object.
2. **The current architecture already supports multi-factor, hierarchical,
   evidence-backed understanding of an Operational System.** That behavior is
   distributed across condition framing, Investigation, Evidence, Reasoning,
   scoped Cause, human Decision, Outcome verification, and Learning.
3. **Operational Diagnosis is a plausible research framing, not an approved
   replacement.** It may better communicate the integrated behavior than Root
   Cause, but it is not currently defined, owned, or positioned relative to
   Cause and Process Condition Assessment. A direct global replacement could
   improve some language while damaging existing semantic distinctions.

Outcome is the architecture's governing verification object rather than Root
Cause elimination, but it is followed by review and learning rather than serving
as an absolute endpoint.

No architectural decision follows from this study. M8, canonical authority,
capability ownership, vocabulary, source meaning, governance, and repository
status remain unchanged.
