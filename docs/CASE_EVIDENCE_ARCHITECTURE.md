# Case Evidence Architecture

## Purpose and status

This document defines how an Operational Case assembles, preserves, and uses
Evidence without becoming a competing source of truth.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 architecture; post-v1 capability direction |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Case Evidence Set |
| Authority | Case Evidence classification, provenance, snapshots, interpretation boundaries, and promotion rules |
| Primary audience | Product, architecture, engineering, data, AI, governance, and documentation collaborators |
| Lifecycle | Updated when Case Evidence or decision-traceability rules change |
| Related documents | Operational Reasoning Model, Operational Case Architecture, Architecture, AI Assistant Architecture |

This is product architecture only. It does not define a current data model,
storage layer, connector, or runtime implementation.

## Definition

A **Case Evidence Set** is the governed collection of authorized Evidence items
used to understand and decide within one real Operational Case. The Case owns the
set, selection rationale, relationships, and decision-time snapshots. It does not
own or rewrite the authoritative sources.

```text
Source Artifact
  -> Authorized Source Reference
  -> Case Evidence Item
  -> Decision-time Evidence Snapshot
  -> Interpretation or Conclusion
```

Evidence preserves support and source material. Knowledge preserves approved,
reusable understanding. Neither substitutes for the other.

From the owner's perspective, this is an investigation collection rather than a
generic upload area. It exposes Evidence that is collected, requested, unavailable,
conflicting, stale, or used in a material decision. Reports, statements, KPI
snapshots, exports, notes, emails, files, contracts, photos, and authorized external
references may participate without losing their source authority.

## Classification

| Material | Classification | Rule |
| --- | --- | --- |
| Source record, observation, measurement, document, or testimony | Source Evidence | Preserve provenance, authorization, scope, observation time, and freshness |
| Reproducible calculation or governed transformation | Derived Evidence | Preserve inputs, method, version, and reproducibility |
| AI summary or synthesis | Derived interpretation | Never present as source Evidence; link to inputs and disclose limitations |
| Hypothesis, explanation, or Cause | Interpretation or conclusion | Preserve supporting and conflicting Evidence; never rewrite as a Fact |
| Assumption | Assumption | Explicitly labeled; never counted as Evidence |
| Scenario parameter | Model input | Belongs to a Scenario Branch; never observed Evidence |
| Simulated result | Modeled output | Conditional result; never observed Evidence |
| Gym material | Training material | Isolated from organizational Evidence and operational analytics |

The default experience uses the concise labels **Source**, **Derived**, **Summary**,
**Assumption**, **Modeled**, and **Training**. Detailed provenance, lineage,
authorization, retention, and transformation information remains progressively
available rather than hidden or required before initial investigation.

Financial, Operational, Human, Structural, Historical, and System are approved
non-exclusive discovery facets over this epistemic model. They do not determine
authority or evidentiary weight. Structural Evidence is first-class investigative
material because decision rights, reporting lines, responsibility, incentives,
coordination, and handoffs may contribute to an operational condition. Formal
structure remains evidence of intended organization, not proof of actual behavior.
Historical Cases remain scoped context: similarity never establishes the same
Cause, applicability, or outcome.

Testimonial material may be Evidence when its origin, wording, context, and limits
are preserved. Agreement among sources does not alone establish independence or
increase confidence.

## Evidence item requirements

Each Case Evidence Item preserves, where applicable:

- source identity, authority, authorization, and stable reference;
- collection or observation time, freshness, scope, and applicable context;
- whether it is source or derived Evidence;
- transformation method and input lineage;
- material conflicts, gaps, limitations, and uncertainty;
- relevance to the Case and inclusion rationale;
- retention, revocation, and access constraints.

The minimum necessary Evidence is retrieved. Unauthorized, revoked, stale, or
unavailable sources remain visibly excluded or degraded.

## Decision-time Evidence snapshot

Every material decision freezes a reproducible view of the Evidence actually
available and used at decision time. The snapshot records source versions or
stable references, relevant extracts or derived values, conflicts, exclusions,
freshness, and known uncertainty. Later source changes do not silently rewrite the
historical basis of the decision.

A snapshot supports audit and comparison; it does not duplicate authority or make
an outdated value current truth.

## AI boundary

AI may retrieve authorized Evidence, identify gaps and conflicts, deduplicate
apparent support, prepare derived summaries, compare decision-time snapshots, and
explain how Evidence supports or weakens an interpretation.

AI must not invent a source, convert an assumption into Evidence, treat its own
summary as source material, conceal conflicting Evidence, increase confidence from
duplicated sources, or promote a Case conclusion into Knowledge. Owner approval
and owning-domain validation remain required for consequential decisions and
durable promotion.

## Environment boundary

Real Evidence may seed a frozen Scenario baseline when authorized. Scenario
assumptions and outputs remain attached to the Scenario Branch and cannot flow
back as observed Evidence. Gym material cannot be linked as organizational
Evidence. A lesson from either environment must be independently reviewed and
promoted through the appropriate owning workflow.

## Degraded operation

When AI or a source is unavailable, existing Evidence items, provenance,
snapshots, conflicts, and manual attachments remain inspectable. Unavailable live
references are marked stale or unavailable. The product does not fabricate a
replacement summary or silently use a modeled value.

Implementation requires a separate data architecture, retention and authorization
review, migration plan, approval, and explicit APPLY.
