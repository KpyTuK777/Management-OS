# AI Runtime Architecture

## Purpose and status

The AI runtime allows Management OS to execute approved AI capabilities through
different model providers without allowing a provider, model, or prompt to define
product behavior.

> The Management OS AI Assistant is the product. The underlying language model is
> an interchangeable implementation detail.

| Property | Decision |
| --- | --- |
| Status | Approved runtime architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Architectural role | Provider-independent AI capability execution |
| Scope | Runtime architecture only |

The [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md) remains canonical
for Assistant responsibilities, authority, confidence behavior, learning, memory,
and product interaction. This document defines how an approved capability may be
executed without transferring those decisions to a model provider.

The approved [Protected AI Runtime Platform](PROTECTED_AI_RUNTIME_PLATFORM.md)
defines the container and Cloud Run boundary that will host this architecture. It
selects no AI provider and does not alter the runtime contracts defined here.

The [Owner Identity Architecture](OWNER_IDENTITY_ARCHITECTURE.md) defines the
authenticated Account, Workspace Membership, and bounded Auth Context required
before a capability workflow may execute.

## Current implementation boundary

Management OS currently has no AI runtime, Model Gateway, provider adapter, model
integration, prompt execution, AI context pipeline, or AI result validator. This
architecture selects no provider, model, prompt, API, deployment environment, or
infrastructure and authorizes no implementation.

## Architectural principle

The Assistant's identity, responsibilities, communication, approval boundaries,
confidence behavior, and learning rules belong to Management OS. A model supplies
bounded reasoning or generation. It does not determine:

- what the Assistant may do;
- which organizational context it may access;
- when clarification is required;
- how confidence affects product behavior;
- what constitutes owner approval;
- whether a candidate result is valid;
- which module owns a mutation;
- what becomes permanent learning;
- how the Assistant communicates with the owner.

Changing providers must not silently change product behavior.

## Runtime architecture

```text
Product interaction
        |
AI capability contract
        |
Capability workflow
        |
Context preparation
        |
Task and prompt assembly
        |
Model Gateway
        |
Provider adapter
        |
External or local model
        |
Normalized candidate result
        |
Result validation
        |
Confidence and policy evaluation
        |
Product response
        |
Owner approval, when required
        |
Owning module validation and mutation
```

Each layer has one responsibility and remains replaceable without requiring a
change to unrelated product behavior.

### Product interaction

A contextual Assistant surface requests an approved capability. Sources may
include Natural Capture, Home, Global Search, an entity page, Recommendations
Center, future workspace optimization, or approved Review assistance.

The interaction identifies owner intent and product context. It does not construct
provider requests or select a model.

### AI capability

A capability represents stable product behavior, such as:

- classify a Natural Capture candidate;
- retrieve relevant organizational context;
- summarize an entity;
- prepare or explain a recommendation;
- produce one concise clarification question;
- draft an SOP candidate;
- assist with a Review.

Each capability declares its purpose, input, permitted context, output, evidence,
authority, confidence, validation, failure, and approval requirements. Its contract
remains stable when a prompt, model, or provider changes.

### Capability workflow

The workflow belongs to Management OS and coordinates execution. It validates the
request, identifies required context, gathers authorized evidence, invokes bounded
model tasks, validates results, evaluates confidence, and chooses whether to
accept, clarify, retry, fall back, degrade, or fail.

A provider cannot alter this business sequence.

### Context preparation

Context preparation creates a bounded, capability-specific evidence package. It
is responsible for:

- permission enforcement;
- source selection and provenance;
- relevance filtering and minimization;
- exclusion of unrelated sensitive information;
- freshness and completeness indicators;
- preservation of conflicting evidence;
- context-size management;
- separation of system rules from untrusted content.

The runtime distinguishes owner input, canonical organizational facts, temporary
session state, working context, Personal Operational Model context, retrieved
evidence, and system rules. User-authored or retrieved content is evidence, not a
runtime instruction.

### Task and prompt assembly

Task assembly translates the capability contract and prepared context into a
model-executable request. It may combine stable runtime instructions,
capability-specific instructions, structured input, an output schema, relevant
examples, validation constraints, and provider-specific formatting.

Prompts are implementation assets, not product authorities. A prompt change may
not independently change Assistant authority, approval, learning, capability
scope, communication principles, or product terminology.

### Model Gateway

The Model Gateway is the only internal boundary through which capability workflows
request model execution. It owns:

- capability-to-runtime-profile routing;
- compatible provider-adapter selection;
- supported-feature negotiation;
- timeout and cancellation policy;
- bounded retry and fallback coordination;
- provider-health awareness;
- usage and operational metadata;
- normalized runtime errors.

Product modules must not call providers directly.

### Provider adapter

An adapter converts a provider-independent request into provider-specific format
and converts the response back into the canonical result contract. It may handle
authentication, message conversion, structured-output mechanisms, provider
parameters, streaming, limits, errors, and provider usage metadata.

An adapter may not introduce product decisions, expand context access, or
reinterpret authority.

### Result validation

Every model response is an untrusted candidate. Validation evaluates schema,
required fields, entity references, source attribution, evidence support,
completeness, contradictions, permitted actions, authority, and communication
roles. Syntactic validity does not establish product validity.

### Confidence and policy evaluation

Management OS determines whether a validated result is suitable for presentation,
clarification, fallback, or rejection. Provider or model self-reported confidence
may contribute evidence but is never authoritative.

### Product response

An accepted candidate becomes a Management OS fact presentation,
interpretation, clarification, recommendation, approval request, limitation,
degraded response, or failure message. It follows the
[AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md) and keeps prepared
work distinct from applied work.

## Authority boundary

The runtime has preparation authority, not mutation authority.

```text
Runtime candidate
    -> Validated proposal
    -> Owner approval, when required
    -> Owning module validation
    -> Owning module mutation
```

No provider, model, prompt, workflow, confidence threshold, or provider-native tool
may bypass this sequence.

## Capability pipeline

The canonical execution lifecycle is:

1. Receive the capability request.
2. Validate the caller and its authority.
3. Load the capability contract.
4. Determine required context.
5. Gather permitted sources.
6. Prepare and minimize context.
7. Select an eligible runtime profile.
8. Assemble the task and prompt.
9. Select a compatible provider adapter.
10. Execute the bounded model task.
11. Normalize the candidate result.
12. Validate structure, evidence, product rules, and authority.
13. Evaluate confidence and policy.
14. Retry, clarify, fall back, degrade, reject, or accept.
15. Construct the product-level response.
16. Request owner approval when required.
17. Delegate an approved mutation to the owning module.
18. Record bounded operational evidence under approved retention rules.

### Capability contract

Every runtime capability has a provider-independent contract.

| Contract area | Definition |
| --- | --- |
| Identity | Stable capability name and version |
| Product purpose | Owner value supplied by the capability |
| Authorized callers | Surfaces and workflows permitted to request it |
| Input | Required and optional structured input |
| Context policy | Required, permitted, and prohibited context |
| Output | Canonical structured candidate result |
| Evidence | Provenance required to support the result |
| Confidence | Capability-specific behavior at each confidence outcome |
| Approval | Required owner decision before any consequence |
| Mutation | Owning module for an approved downstream action |
| Validation | Structural, referential, evidence, product, and authority rules |
| Failure | Retry, fallback, clarification, degraded, and terminal behavior |
| Privacy | Data classification and provider eligibility restrictions |
| Quality evidence | Evidence required by the AI Quality Framework |

Capability contracts are versioned independently from prompts, providers, and
model releases.

### Natural Capture example

```text
Owner input
    -> Natural Capture capability contract
    -> Authorized context preparation
    -> Provider-independent classification request
    -> Model execution
    -> Candidate intent and destinations
    -> Schema, evidence, and confidence validation
    -> Prepare outcome, clarify, or preserve safely
    -> Owner approval
    -> Owning module mutation
```

The model prepares candidate reasoning. Management OS determines its product
effect.

## Confidence handling

Confidence is a product decision informed by multiple signals, including:

- clarity of owner input;
- agreement between intent and available context;
- strength and freshness of evidence;
- distance between leading alternatives;
- conflicting organizational evidence;
- output completeness and validation findings;
- agreement between independent evaluation steps, when used;
- historical capability quality in comparable conditions;
- provider or runtime degradation.

| Runtime finding | Product behavior |
| --- | --- |
| Sufficient confidence and valid result | Prepare an answer or recommendation |
| Valid result with material ambiguity | Present the leading outcome and relevant alternative |
| Insufficient confidence with bounded ambiguity | Ask one concise clarification question |
| Very low confidence or insufficient context | Preserve safely or state the limitation |
| Invalid, unsupported, or authority-violating result | Reject and use fallback or failure behavior |

Thresholds are capability-specific. A search suggestion does not require the same
confidence as a structural recommendation.

## Result-validation model

Validation occurs at several levels:

- **Structural:** the candidate satisfies the output schema.
- **Referential:** referenced entities and relationships exist and are accessible.
- **Evidence:** factual claims and recommendations are supported by supplied
  sources.
- **Product:** the result is an allowed outcome with the correct message role.
- **Authority:** proposed work is not represented as approved or applied.
- **Communication:** uncertainty, limitation, and consequence follow canonical
  language rules.
- **Domain:** the owning module independently validates current state before
  mutation.

## Runtime evidence

Subject to privacy and retention rules, the runtime may record evidence needed for
quality, diagnosis, and governance:

- capability and contract version;
- workflow and task-assembly version;
- provider adapter and model profile;
- context-source identifiers and freshness metadata;
- validation and confidence outcomes;
- retry, fallback, and degraded paths;
- owner approval, correction, rejection, or abandonment;
- latency and normalized failure category.

Operational evidence does not automatically become Personal Operational Model
learning or Organizational Knowledge.

## Provider abstraction

### Provider-independent request

The Model Gateway accepts a canonical request containing the capability identity,
structured task input, prepared context package, required output schema, response
mode, privacy classification, runtime limits, required model features, fallback
eligibility, and trace or cancellation identifiers.

The request describes required behavior rather than a provider.

### Provider-independent result

Every adapter returns a normalized result containing the structured candidate,
completion state, normalized errors, adapter and model metadata, usage metadata
when available, truncation indicators, provider refusal state, and execution
timing. Provider-native responses do not reach product behavior without
normalization and validation.

### Adapter eligibility

Every adapter must demonstrate request and result compatibility, authentication
separation, supported capability profiles, documented limits, structured-output
behavior, timeout and cancellation behavior, normalized failure mapping, privacy
compatibility, observability, and validation conformance.

Being technically callable does not make an adapter eligible for every capability.

### Runtime profiles

Routing uses capability-oriented profiles rather than hard-coded provider names. A
profile may require short structured classification, evidence-grounded synthesis,
longer draft preparation, low-latency clarification, private local processing, or
independent result evaluation.

Configuration maps each profile to an eligible adapter and model. Product workflows
remain unchanged when that mapping changes.

### Provider selection

Selection may consider capability support, privacy classification, context
capacity, structured-output reliability, validated quality, availability, latency,
and operating cost. Quality, privacy, and authority take precedence over speed or
cost.

The owner should not select providers during ordinary product work. Provider
controls may exist for governance, privacy, deployment, or advanced configuration
without transferring runtime orchestration to the owner.

## Fallback behavior

Fallback is controlled policy, not unconditional retry.

```text
Primary execution fails
    -> Classify the failure
    -> Safe bounded retry available?
         |-- Yes -> Retry
         `-- No  -> Approved compatible fallback available?
                      |-- Yes -> Rebuild and execute through fallback adapter
                      `-- No  -> Degraded product response
```

Fallback must:

- never retry indefinitely;
- never weaken privacy or data-residency requirements;
- use only providers eligible for the same data classification;
- preserve the capability, output, authority, and validation contracts;
- validate fallback results normally;
- avoid duplicate downstream effects;
- disclose provider unavailability when it materially affects the owner;
- preserve original input and safe non-AI paths where possible.

When no safe runtime path exists, Management OS preserves authorized temporary
input, offers deterministic behavior or direct modules when available, states the
limitation calmly, and never pretends interpretation occurred.

## Provider and prompt independence

Provider independence does not mean every model produces identical prose or
reasoning. Behavioral consistency comes from stable capability contracts,
canonical context preparation, versioned task assembly, normalized output, result
validation, product-owned confidence, canonical communication, approval, and
capability-level quality evaluation.

A provider or model replacement must pass capability-level validation before
production eligibility.

Prompts are replaceable, versioned, testable implementation assets isolated from
product modules. Provider-specific variants are permitted only when they preserve
the same capability contract and product semantics.

## Future multi-model support

The architecture permits, but does not require, multi-model execution.

Future patterns may include:

- **Capability routing:** different eligible models serve different capabilities.
- **Privacy routing:** sensitive work uses an eligible private or local runtime.
- **Escalation routing:** a bounded model escalates unresolved cases.
- **Independent validation:** a second model evaluates evidence or ambiguity for a
  higher-risk capability.
- **Candidate comparison:** Management OS compares multiple prepared candidates.
- **Specialized composition:** separate models structure context and prepare an
  output.

More models do not automatically create greater confidence. Agreement is evidence,
not proof; disagreement remains visible to confidence policy. Multi-model use must
justify its latency, cost, privacy exposure, and complexity. A model must not be
the sole quality judge of its own consequential output.

## Product impact

### Stable Assistant identity

The owner interacts with Management OS capabilities, language, approval, and trust
boundaries rather than a branded model wrapper. Changing providers should not
require relearning Capture, clarification, recommendations, approval, module
ownership, uncertainty, or memory behavior.

### Cognitive-load reduction

The runtime removes provider selection and troubleshooting from ordinary owner
work. It strengthens the Product Principle when it selects an eligible runtime,
gathers authorized context, rejects invalid candidates, degrades gracefully, and
preserves familiar behavior across provider changes.

It weakens the product if the owner must understand model names, context windows,
prompt formats, or provider errors to use a capability.

### Authority and trust

Provider-native tool use, autonomy, or memory may not bypass Management OS
governance. Trust is preserved through explicit contracts, minimized context,
untrusted-result validation, product-owned confidence, safe fallback, provider
eligibility, approval, honest degraded operation, and separation of operational
evidence from permanent learning.

### Privacy

Provider interchangeability must not create uncontrolled data movement. Every
execution applies context minimization, data classification, provider eligibility,
retention, logging restrictions, and fallback restrictions. A provider change is
also a data-handling change and requires validation even when product behavior is
intended to remain stable.

## Product Review

The canonical question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

Runtime proposals must demonstrate that provider mechanics remain outside ordinary
owner work; capability behavior belongs to Management OS; confidence and
validation remain product-owned; fallback preserves privacy and authority;
degraded operation remains useful and truthful; provider changes cannot silently
create behavior; learning remains explicit; and Assistant identity remains stable.

## Architecture Review

Architecture Review must reject a design when product modules call providers
directly, prompts become the only behavior definition, provider-native responses
reach the interface without validation, model confidence directly determines an
action, provider tool use bypasses owning modules, fallback weakens privacy,
provider identifiers become domain data, model memory replaces approved memory
layers, telemetry becomes permanent learning, or a model change can alter
authority without review.

## AI Review

AI Review evaluates capability suitability, context sufficiency and minimization,
result schema and validation, confidence calibration, unsupported claims,
clarification quality, provider eligibility, fallback equivalence, correction,
degraded behavior, and long-term owner trust. A provider may be eligible for one
capability and ineligible for another.

## Recommendation

Adopt these canonical separations:

```text
Product capability
    != capability workflow
    != context preparation
    != task or prompt
    != Model Gateway
    != provider adapter
    != model
    != result validation
```

The runtime should use stable capability contracts and one Model Gateway. Providers
connect only through conforming adapters. Every candidate is normalized,
validated, and evaluated by product-owned confidence and authority policies before
becoming Assistant behavior.

Future implementation planning should sequence capability contracts,
provider-independent request and result contracts, context and privacy boundaries,
validation and confidence policy, Gateway and adapter conformance, one validated
provider path, degraded operation, then optional fallback and multi-model routing.

No provider, model, prompt, API, infrastructure, or runtime implementation is
selected or authorized by this architecture.
