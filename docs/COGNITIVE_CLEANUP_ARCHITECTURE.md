# Cognitive Cleanup Architecture

## Purpose and status

This document defines the pre-v1.0 product phase for reducing interaction
explanation while preserving reasoning transparency, owner authority, and
inspectability.

| Property | Decision |
| --- | --- |
| Status | Approved canonical product-experience architecture |
| Delivery milestone | Sprint 12; required before significant new capability expansion |
| Canonical concept | Cognitive Cleanup |
| Authority | Explanation-versus-interaction criteria, risk-sensitive disclosure, cognitive-load review, and v1.0 cleanup gate |
| Related documents | Operational Situation Board Architecture, Product Vision, Owner Journey Validation, Design System, Product Language |

The objective is not a quieter-looking interface. It is to keep the owner's
cognitive effort on understanding the operational situation, evaluating Evidence,
and making Decisions.

Architecture remains rigorous and inspectable but becomes largely invisible during
ordinary work.

## Product phase decision

Management OS enters Cognitive Cleanup before adding significant new
capabilities. A proposed capability may proceed only when it addresses a material
v1.0 blocker or cannot reasonably wait; otherwise the product first removes
avoidable explanation, duplication, classification effort, and navigation burden
from the approved experience.

Cognitive Cleanup is not documentation restructuring, feature removal, or a
license to conceal uncertainty. It is a product-experience maturity phase.

## Explanation versus interaction

Every visible explanation is presumed temporary implementation debt unless it
meets one of these categories:

| Category | Treatment |
| --- | --- |
| Architectural explanation | Remove from ordinary product UI; retain in canonical documentation and specialist inspection where needed |
| Onboarding guidance | Show contextually, then let it recede after successful use; keep it retrievable |
| Permanent interaction content | Keep visible when it changes interpretation, risk, authority, consequence, or the next judgment |

An explanation remains in the primary view only when hiding it could cause a
material misunderstanding or unsafe action at that moment.

Prefer observable behavior:

- preserve wording instead of repeatedly promising preservation;
- show an editable proposal instead of describing classification mechanics;
- separate modeled content visually instead of repeating that it is modeled;
- request approval at the consequential boundary instead of continuously
  explaining approval;
- show uncertainty and source state where they affect judgment instead of
  teaching the entire authority model.

## Permanent and progressive information

Permanently visible when applicable:

- current situation and Matter state;
- current understanding and material uncertainty;
- contradictions, blockers, and current cognitive focus;
- meaningful recent reasoning change;
- required owner judgment or consequence-bearing action;
- material source freshness, provenance, authority, or failure warnings.

Available through contextual inspection:

- complete Evidence and reasoning lineage;
- Watson rationale and confidence basis;
- classification and relationship detail;
- Investigation episode boundaries;
- approval, Decision, and transition history;
- audit and architectural terminology.

Temporary and expected to recede:

- introductory instructions and examples;
- descriptions of Board regions;
- repeated capability summaries;
- repeated normal-operation authority reminders;
- prototype limitations already established by one persistent status treatment.

Disclosure responds to ambiguity, novelty, consequence, risk, and failure—not
merely owner expertise.

## Cognitive Cleanup principles

1. **Situation before system.** Operational meaning receives visual and linguistic
   priority.
2. **Behavior before instruction.** Product guarantees should be experienced in
   the interaction.
3. **Explain exceptions, not normal operation.** Explanation appears for
   ambiguity, material risk, failure, or consequential change.
4. **One concept once.** Do not repeat authority or capability descriptions across
   adjacent surfaces.
5. **Consequence determines visibility.** Permanent content must affect
   interpretation, safety, or action.
6. **Transparency remains inspectable.** Remove repetition, never lineage,
   uncertainty, rationale, or correction paths.
7. **Plain language over architecture.** Internal concepts appear only when needed
   for precision.
8. **Guidance earns its space.** A sentence must remove more cognitive work than
   it creates.
9. **Progressive confidence.** Guidance may recede after demonstrated use but
   remains retrievable.
10. **Owner effort is the measure.** Optimize orientation time, clarification
    needs, reversals, missed uncertainty, and decision confidence rather than word
    count.

## Cleanup review

Every primary-view element is reviewed with three questions:

1. Does it improve understanding of the situation?
2. Does it prevent a material misunderstanding or unsafe action?
3. Is it necessary at this moment?

If all answers are no, remove the element from the primary view or move it behind
contextual inspection.

A cleanup cannot pass by:

- hiding minority or conflicting Evidence;
- removing provenance needed to evaluate a claim;
- obscuring whether Watson proposed or the owner approved;
- collapsing current understanding into fact;
- making modeled Laboratory content resemble current truth;
- removing accessible direct or structured interaction;
- shifting explanation burden into unpredictable adaptation.

## Validation and exit criteria

Cognitive Cleanup is ready to exit when representative owner validation shows:

- rapid orientation to the current situation and next judgment;
- no material authority or uncertainty misunderstanding;
- lower need for product-mechanics clarification;
- no loss of Evidence, reasoning, Decision, or change-history inspectability;
- successful correction and reversal without architectural knowledge;
- contextual guidance appears only when risk or ambiguity justifies it;
- the same essential behavior remains understandable in degraded operation.

This architecture adds no AI runtime, durable personalization, inferred expertise,
production analytics, or hidden adaptation.
