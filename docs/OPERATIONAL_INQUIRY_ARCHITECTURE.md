# Operational Inquiry Architecture

## Purpose and status

This document defines how the AI Investigation Partner selects, explains, asks,
and evaluates the next most valuable question in an Operational Investigation.

| Attribute | Definition |
| --- | --- |
| Status | Approved future capability architecture; not implemented |
| Owner | Product Architect and AI Strategist |
| Primary audience | Product, architecture, design, AI, data, governance, and engineering |
| Canonical authority | Operational Inquiry, Inquiry Objective, next-question selection, stopping conditions, explainability, and inquiry authority |
| Lifecycle | Updated when approved investigative-question behavior or boundaries change |

Operational Inquiry is a provider-independent capability within the AI
Investigation Partner. It is not a module, workspace, conversation log, mandatory
Case stage, autonomous inquiry plan, or authority over Investigation strategy. This
architecture defines no current entity, persistence, runtime, interface, prompt,
model, provider, or implementation.

## Canonical definition

**Operational Inquiry** is the governed capability through which the AI
Investigation Partner selects and explains the next most valuable question for
advancing an Operational Investigation while preserving owner control,
uncertainty, competing explanations, and Evidence authority.

The default is one smallest justified inquiry that can materially improve
understanding, Evidence quality, uncertainty, hypothesis discrimination, risk
clarity, or Decision Readiness. More available information is not by itself a
reason to ask.

## Inquiry Proposal

An **Inquiry Proposal** is the capability's temporary prepared output. It contains:

- the proposed question and primary Inquiry Objective;
- the current Investigation state that triggered it;
- expected information or Evidence and reasoning contribution;
- related Hypotheses, assumptions, contradictions, or risks;
- why it is preferred now and what may change if answered;
- feasibility, information cost, limitations, and alternatives considered;
- owner options to answer, authorize, redirect, defer, reject, or inspect alternatives;
- expiry or invalidation conditions.

An Inquiry Proposal is not automatically a durable record. It enters Case history
only when it materially affects Evidence collection, Investigation scope,
Hypothesis testing, contradiction resolution, Decision Readiness, owner strategy,
postponement, or closure. Routine conversational clarification remains ephemeral.

## Inquiry Objectives

Every substantive investigative question has one primary, outcome-oriented
**Inquiry Objective**:

1. **Establish operational condition** — bound current or intended condition,
   scope, baseline, timeline, population, or possible Inflection Point.
2. **Acquire missing Evidence** — obtain a material source or observation.
3. **Validate Evidence** — test provenance, freshness, completeness,
   comparability, independence, measurement, or authorization.
4. **Discriminate explanations** — distinguish supporting and disconfirming
   conditions across competing Hypotheses.
5. **Resolve contradiction** — clarify conflicting Evidence, testimony,
   definitions, or timeline claims.
6. **Test an assumption** — expose and evaluate an implicit premise.
7. **Establish operational structure** — clarify roles, decision rights,
   handoffs, constraints, dependencies, formal structure, or actual coordination.
8. **Assess consequence and risk** — clarify guardrails, urgency, reversibility,
   affected parties, or cost of acting and not acting.
9. **Improve Decision Readiness** — resolve a material Known/Unknown boundary for
   owner judgment.
10. **Test historical relevance** — determine whether a historical Case or
    Experience Pattern is applicable.

Building a timeline, challenging an assumption, and searching Operational Memory
are methods or sources when used alone; the objective states the operational result
the question is intended to produce.

## Next-question selection

```text
Current Investigation state
  -> identify the most material unresolved reasoning need
  -> generate candidate inquiries
  -> remove redundant, inaccessible, biased, or low-value candidates
  -> compare remaining candidates qualitatively
  -> select and explain the smallest valuable next inquiry
  -> owner answers, redirects, defers, rejects, or supplies Evidence
  -> reassess Investigation state
```

Candidate comparison considers:

- materiality and possible effect on understanding or action;
- ability to discriminate competing explanations;
- expected Evidence contribution and uncertainty reduction;
- Decision Readiness, risk, and guardrail relevance;
- feasibility, authorization, privacy, delay, and information cost;
- novelty and whether authorized context already contains the answer;
- bias protection and preservation of alternative explanations;
- durability if nearby assumptions change.

These factors remain qualitative and inspectable. They do not form a universal
score or permit confidence to become authority. Safety or irreversible consequence
may justify a question that does not maximize general progress.

One question is the default. A small grouped request is permitted when items share
one objective and source, add little burden, and avoid artificial repeated
interruption. A backlog of possible inquiries remains on demand rather than
transferring prioritization work to the owner.

## Explainability

Every nontrivial inquiry provides or exposes:

- why the question matters now;
- its Inquiry Objective;
- the Evidence or information sought;
- the uncertainty, Hypothesis, contradiction, risk, or judgment affected;
- what an answer may change and what will remain unresolved;
- material limitations and historical influence.

A concise pattern is:

> I am asking for [information or Evidence] because it may [Inquiry Objective].
> It could distinguish [possibilities] before [next judgment].

The Assistant must not claim that a source is strongest, decisive, or sufficient
unless the comparison supporting that claim is inspectable.

## State-sensitive strategy and progress

Investigation state influences, but never dictates, inquiry strategy:

- **Orientation-dominant:** establish condition, scope, baseline, timeline, and
  affected process without premature Cause language.
- **Evidence-building:** obtain and validate material Evidence, definitions,
  provenance, structure, and contradictions.
- **Explanation-testing:** compare Hypotheses, seek disconfirmation, test causal
  mechanisms, and distinguish sequence from Cause.
- **Decision-preparation:** expose Known, Unknown, uncertainty, guardrails,
  rejected Hypotheses, and questions that could materially change the judgment.
- **Outcome-learning:** verify predicted effect, guardrails, new Evidence, and
  whether Knowledge or Experience Patterns deserve review.

These are dominant conditions, not lifecycle states or gates. New Evidence may
return a late Investigation to broad exploration.

Progress means improved condition, scope, timeline, Evidence, contradiction,
Hypothesis, Inflection Point, causal, risk, Decision Readiness, or next-action
clarity. Artifact count, answered-question count, stage completion, and AI activity
are not progress measures.

## Stopping and next-step conditions

The Assistant stops asking when no inquiry has sufficient expected value;
remaining uncertainty is visible and acceptable to the owner; Evidence is
unavailable or disproportionately costly; the next useful step is action,
monitoring, Simulation, waiting, or an external event; the owner redirects,
postpones, proceeds, or closes; or further questions would create documentation
without improving judgment.

Operational Inquiry may recommend one next inquiry, specified Evidence, another
Hypothesis test, Decision Readiness review, a Scenario Simulation branch,
monitoring, postponement, bounded action, or closure with uncertainty preserved.
It does not declare the Investigation complete or make the decision.

## Operational Memory and bias protection

[Operational Memory](OPERATIONAL_MEMORY_ARCHITECTURE.md) may help identify prior
decisive Evidence, repeated missing information, Inflection Point structures,
decision traps, contextual differences, and interventions whose applicability
needs testing.

Every memory-informed inquiry exposes the Experience Pattern or Cases that
influenced it, matched behavior and context, material differences, alternative
explanations, and why the pattern may not apply. Historical similarity should
produce both a way to test relevance and a disconfirming condition. It never
suppresses alternatives or establishes the answer.

## Authority and environment boundaries

The owner may answer, redirect, defer, reject, ask for alternatives, change
Investigation strategy, or proceed with visible uncertainty. Operational Inquiry
must never force direction, assume root Cause, conceal contradictory Evidence,
contact people or systems without separate authority, broaden data access, convert
an answer into verified Evidence without validation, or replace owner judgment.

The capability follows each reasoning environment:

- Reality seeks authorized operational Evidence with real consequences.
- Operational Learning asks questions for learning without creating organizational
  Evidence or owner-performance truth.
- Scenario Simulation clarifies assumptions, variables, sensitivity, and limits,
  not observed reality.

## Degraded operation and scalability

Without AI, the owner may inspect Evidence, ask questions, and advance or close an
Investigation directly. Inquiry failure never blocks Case access or Decision
Readiness review.

Future implementations may evaluate question objective, answerability, novelty,
timing, burden, bias, owner disposition, and material reasoning effect. Owner
rejection is quality Evidence, not a durable personal preference. Multiple models
may propose candidates, but agreement is not proof; product policy selects and
validates the presented inquiry.

Persist only questions with material investigative effect. Durable history must
preserve objective, explanation, Investigation state, owner disposition, reasoning
effect, expiry, and memory provenance without turning every conversation into
Operational Memory.
