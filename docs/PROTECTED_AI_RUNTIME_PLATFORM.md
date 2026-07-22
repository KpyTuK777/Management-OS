# Protected AI Runtime Platform

## Purpose and status

The Protected AI Runtime Platform hosts the provider-independent Management OS AI
Runtime behind a secure server boundary. It protects credentials and organizational
context while preserving the AI Runtime Architecture's capability, workflow,
adapter, validation, confidence, and authority boundaries.

| Property | Decision |
| --- | --- |
| Status | Approved platform architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical v1 platform | Containerized Node.js service on Google Cloud Run |
| Scope | Deployment and runtime-platform architecture only |
| Excluded | AI provider, model, API, identity provider, database, and implementation |

The [AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md) remains canonical for
provider-independent AI execution. This document is canonical for the production
platform that protects and hosts that runtime. The durable selection rationale is
recorded in [ADR-0001](adr/0001-protected-ai-runtime-platform.md).

## Current implementation boundary

Management OS remains a static browser application with device-local browser
storage. No Cloud Run service, runtime container, service identity, Secret Manager
configuration, authenticated capability API, provider adapter, build pipeline, or
production AI behavior is implemented.

This decision must be followed by approved owner identity and authentication
architecture, runtime security and retention configuration, and AI provider
selection before production Intent Recognition can operate.

The approved [Owner Identity Architecture](OWNER_IDENTITY_ARCHITECTURE.md) defines
the Account, Workspace Membership, Session Gateway, token, and runtime Auth Context
boundary. An identity provider and session-store technology remain unselected.

## Architectural decision

Management OS v1 uses:

- a portable OCI-compatible container as the runtime artifact;
- a supported Node.js LTS runtime inside that container;
- Google Cloud Run as the managed production host;
- Google Secret Manager for sensitive runtime configuration;
- a least-privilege service account for runtime identity;
- Artifact Registry for immutable container images;
- Cloud Logging and Monitoring for redacted operational telemetry;
- an approved CI path for build, validation, scanning, and revision deployment.

Container packaging and Cloud Run hosting are separate decisions. The container
preserves local-to-production consistency and a credible migration path. Cloud Run
supplies managed HTTPS, identity integration, secrets, revisions, scaling, and
production operations.

No AI provider or model is selected by this architecture.

## Platform comparison

The comparison assumes initially intermittent synchronous AI requests, a small
operating team, external-provider latency, and future capability and multi-model
growth.

| Option | Security and secrets | Deployment and operations | Low-use cost | Runtime portability | Multi-model growth | v1 assessment |
| --- | --- | --- | --- | --- | --- | --- |
| Cloudflare Workers | Strong managed boundary and secret bindings | Very simple edge deployment | Strong | Edge-runtime constraints | Suitable for a thin gateway; moderate orchestration headroom | Strong alternative |
| Google Cloud Run | Strong IAM, service identity, and Secret Manager | Managed container revisions, HTTPS, scaling, and monitoring | Strong with request billing and scale to zero | Strong | Strong | **Recommended** |
| Azure Functions | Strong managed identity and Key Vault ecosystem | Mature but function- and storage-oriented | Strong | Moderate | Acceptable | Strong within an Azure commitment |
| AWS Lambda | Strong IAM and Secrets Manager ecosystem | Mature but normally adds ingress and function-specific operations | Strong | Moderate | Acceptable | Strong within an AWS commitment |
| Dedicated Node.js server | Depends on self-managed controls | Team owns patching, TLS, availability, scaling, and recovery | Weak initially | Strong | Strong | Not justified for v1 |
| Containerized runtime alone | Depends on its host | Portable artifact but not a production platform | Depends on host | Strong | Strong | Required packaging, incomplete hosting |

### Cloudflare Workers

Workers provides simple global deployment, secret bindings, scale-to-zero
economics, and low gateway latency. It is well suited to a deliberately thin
authenticated proxy.

The edge runtime, memory and bundle limits, and provider-SDK compatibility create
more constraints for capability workflows, validation dependencies, and future
multi-model orchestration than a conventional container. Cloudflare documents the
current [Workers limits](https://developers.cloudflare.com/workers/platform/limits/)
and [usage-based pricing](https://developers.cloudflare.com/workers/platform/pricing/).

Workers is the preferred alternative if Management OS intentionally limits the
runtime to a thin gateway.

### Google Cloud Run

Cloud Run executes a standard container, provides managed HTTPS, service identity,
Secret Manager integration, concurrency controls, revisions, automatic scaling,
and scale to zero. It supports ordinary Node.js dependencies and provider SDKs and
closely matches local container execution.

Cloud Run supports configurable minimum and maximum instances. Minimum instances
may reduce cold-start latency; maximum instances bound cost and downstream load.
Its request-based billing is appropriate for intermittent early usage. See the
official [Cloud Run overview](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run),
[service configuration](https://docs.cloud.google.com/run/docs/configuring), and
[pricing](https://cloud.google.com/run/pricing).

Cloud Run recommends Secret Manager for credentials and checks service-account
access to configured secrets. See
[Cloud Run secret configuration](https://docs.cloud.google.com/run/docs/configuring/services/secrets).

The platform permits request timeouts longer than interactive AI work should need,
so application deadlines rather than host limits define v1 behavior. See
[Cloud Run request timeouts](https://docs.cloud.google.com/run/docs/configuring/request-timeout).

Cloud Run provides the best balance of runtime freedom, portability, managed
operations, security, cost, and future growth for Management OS v1.

### Azure Functions

Azure Functions supplies mature managed identity, Key Vault, monitoring, virtual
networking, consumption-oriented operation, and automatic scaling. Microsoft
recommends Flex Consumption for new dynamic-scale workloads. See
[Azure Functions hosting options](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)
and [consumption cost guidance](https://learn.microsoft.com/en-us/azure/azure-functions/functions-consumption-costs).

Its Function App, trigger, storage, and platform conventions offer less direct
portability than a standard web-service container. It becomes more attractive if
Management OS adopts a broader Microsoft infrastructure and identity commitment.

### AWS Lambda

Lambda offers mature IAM, Secrets Manager, versioning, monitoring, automatic
scaling, and low intermittent-use cost. AWS documents function concurrency
controls, execution timeouts, and cached secret-access options. See
[Lambda scaling](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html),
[Lambda timeouts](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html),
and [Secrets Manager with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/with-secrets-manager.html).

A browser-facing service normally adds an ingress choice, and the Lambda execution
model creates more platform-specific structure than a cohesive concurrent web
service. It is a strong alternative within an existing AWS estate.

### Dedicated Node.js server

A dedicated server offers full control, predictable warm latency, and provider
neutrality. It also makes Management OS responsible for operating-system and
runtime patching, TLS, ingress, secret infrastructure, supervision, scaling, high
availability, log management, and incident recovery. That cost is not justified
for v1.

### Containerized runtime

A container is the required packaging standard, not a complete platform. It gives
Management OS a conventional runtime, provider-SDK compatibility, local parity,
and host portability. Cloud Run supplies the missing security, ingress, scaling,
secrets, and operational control.

## Recommended platform architecture

```text
Desktop or Mobile client
        |
        | HTTPS and authenticated owner session
        v
Protected AI Runtime on Cloud Run
        |
        |-- authentication and authorization
        |-- request limits and rate controls
        |-- capability registry and workflows
        |-- context preparation
        |-- task and prompt assembly
        |-- Model Gateway
        |-- result validation
        |-- confidence and policy evaluation
        |-- privacy-safe operational evidence
        |
        v
Provider Adapter boundary
        |
        | outbound HTTPS
        v
Future approved AI provider or providers
```

Supporting platform services:

```text
Secret Manager
  -> provider credentials and sensitive configuration

Service Account and IAM
  -> runtime identity and least-privilege access

Artifact Registry
  -> immutable container images

Cloud Logging and Monitoring
  -> redacted telemetry and alerts

Approved CI
  -> build, test, scan, and revision deployment
```

No database is required merely to execute Intent Recognition. Persistence is
introduced only when an approved capability has an explicit data requirement.

## Runtime shape

The initial runtime is one stateless modular Node.js service. Internal modules
preserve the approved boundaries for HTTP ingress, authentication, capability
contracts, workflows, context preparation, task assembly, Model Gateway, provider
adapters, result validation, confidence, normalized failures, and operational
evidence.

Capabilities remain internal modules until scaling, isolation, security, or
operational evidence justifies independent services. The v1 runtime is not a
premature collection of deployed functions.

## Container standard

The runtime container must:

- use a supported Node.js LTS release;
- run as a non-root user;
- expose one application port;
- contain no production secrets;
- use immutable, locked dependencies;
- provide liveness and readiness behavior;
- handle termination signals;
- emit structured redacted logs to standard output;
- remain stateless between requests;
- enforce application-level deadlines;
- support equivalent local container execution.

The image should remain deployable to another compatible container host without
changing capability contracts or provider adapters.

## Environment model

```text
Local -> Development -> Staging -> Production
```

Each environment has separate secrets, runtime identity, provider configuration,
logs, retention, revisions, and capability enablement. Production data and
credentials are never copied into local or development environments.

## Ingress model

The runtime exposes a narrow, versioned, provider-independent capability API, such
as conceptually:

```text
POST /v1/capabilities/intent-recognition
```

Ingress requires HTTPS, authenticated owner context, capability authorization,
strict request schema, bounded body size, content-type enforcement, correlation
identifiers, rate and concurrency limits, timeout and cancellation propagation,
and generic external errors.

CORS is a browser control, not authentication. The runtime never exposes a general
provider proxy.

## Scaling, latency, and region

Initial v1 operation uses request-based billing, permits scale to zero, configures
a conservative maximum instance count, validates per-instance concurrency, and
applies provider deadlines shorter than the platform timeout.

A minimum warm instance is introduced only if measured cold starts materially harm
the owner experience. End-to-end latency is expected to be dominated by the future
provider, so optimization begins with minimized context and avoided calls rather
than infrastructure expansion.

Deploy initially to one approved region selected for owner proximity, data
residency, secret and logging support, future provider endpoint location, and
measured latency. Multi-region operation is deferred until availability or usage
evidence justifies its consistency and routing cost.

## Security review

### Trust boundaries

```text
Untrusted browser input
        -> Authenticated runtime ingress
        -> Capability and context policy
        -> Untrusted model execution
        -> Result validation
        -> Bounded product response
```

Owner input and model output are both untrusted at their respective boundaries.

### Authentication and authorization

Cloud Run must not rely on a hidden URL or CORS. Before production activation,
Management OS requires an approved owner identity and session mechanism. The
runtime verifies authenticity, audience, expiry, owner or organization identity,
capability permission, and applicable replay protection.

Deployment identity, runtime service identity, and human administration remain
separate and least-privileged. Identity-provider selection remains outside this
decision. Absence of authenticated owner sessions is a production blocker.

### Secret management

- Provider credentials exist only in Secret Manager.
- Secrets are not committed, embedded in images, returned to clients, or logged.
- Runtime identity receives access only to required secret versions.
- Production and non-production secrets remain separate.
- Rotation and access are controlled and auditable.
- Missing required secrets cause safe startup or request failure.

### Input and output protection

The runtime enforces request size, capture length, encoding, content type, schema,
rate, capability allowlist, timeout, and cancellation. Captured content is never
treated as runtime instruction.

Every provider candidate passes schema, allowed-value, evidence, confidence,
prohibited-action, authority, encoding, and result-size validation. Provider-native
tool execution remains disabled unless separately approved.

### Logging and privacy

Default logs may contain correlation identifiers, capability and version, runtime
profile, duration, normalized status, confidence band, validation result, fallback
state, and error category.

Default logs must not contain raw captures, full prompts, model responses,
credentials, tokens, Personal Operational Model content, or unrelated records.
Diagnostic content capture requires explicit authorization, restricted access,
time-bounded retention, and deletion behavior.

### Network and supply chain

Outbound traffic is limited to approved adapter destinations where practical. The
runtime denies arbitrary user-supplied URLs and applies connection, response-size,
and provider deadlines.

Dependencies are locked; images are minimal, supported, scanned, immutable, and
versioned; CI runs contract and security validation; deployment permissions are
limited; and rollback uses a known prior revision.

## Operational review

### Delivery flow

```text
Source change
  -> automated tests
  -> contract and scenario validation
  -> dependency and image scan
  -> immutable image build
  -> staging revision
  -> Quality Lead evidence
  -> production revision
  -> controlled cutover
  -> monitoring and rollback readiness
```

### Local development

Local execution uses the same container with non-secret configuration, a
deterministic fixture adapter, contract tests, scenario evaluation, and normalized
failure simulation. Explicit remote-provider development may be configured later,
but production credentials and data never enter the local environment.

A fixture adapter is validation infrastructure. It is never presented as AI or
enabled in production.

### Observability

Monitor request and failure counts, latency by pipeline stage, provider duration,
timeouts, cancellation, schema rejection, confidence distribution, degraded paths,
instances, concurrency, authentication rejection, rate limiting, and estimated
provider usage.

Infrastructure telemetry does not establish product quality. Behavior remains
subject to the [AI Quality Framework](AI_QUALITY_FRAMEWORK.md).

### Cost controls

The runtime uses maximum instances, bounded concurrency, owner and capability rate
limits, provider deadlines, input limits, usage alerts, budget alerts, and no
automatic retry for uncertain billable calls. Model-provider usage is expected to
dominate early runtime compute cost.

### Reliability

V1 uses one regional service, preserves temporary input in the client, degrades to
non-AI Capture, uses correlation or idempotency identifiers where applicable,
keeps provider timeouts below platform timeouts, bounds retries, protects downstream
systems with scaling limits, and retains a known rollback revision.

Multi-region and asynchronous workflow infrastructure are deferred until an
approved capability requires them.

### Multi-model readiness

One service may host multiple internal adapters while activating only approved
configurations. Capability routing, health evaluation, parallel candidates,
privacy-specific routing, asynchronous work, and cost arbitration are future
extensions. Separate deployed services or queues require evidence of isolation or
workload need.

## Product impact

The protected platform should remain invisible during ordinary work. The owner
experiences one Assistant, stable capability behavior, preserved temporary input,
calm failure, no routine provider selection, and no infrastructure-specific error
handling.

The runtime retains preparation authority only. It cannot create domain entities,
mutate records, route captures automatically, convert confidence into approval,
create permanent memory, or invoke unrestricted tools.

Cloud Run hosts the provider-independent architecture without defining the future
provider. Provider behavior remains confined to adapters; capability contracts,
validation, confidence, and product responses remain portable.

## Product Review

The canonical question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

The architecture hides infrastructure and provider mechanics, protects secrets
and context, preserves one Assistant identity, supports truthful degraded
operation, and introduces no autonomous authority.

Production Review is blocked if browser credentials are exposed, owner
authentication is absent, raw context is retained without approval, provider
changes can bypass validation, or runtime failure blocks non-AI Capture.

## Recommendation and decision sequence

Adopt this canonical v1 platform:

```text
Protected AI Runtime
  = containerized Node.js service
  + Google Cloud Run
  + Secret Manager
  + least-privilege service identity
  + authenticated capability API
  + bounded scaling
  + redacted monitoring
```

Proceed in this order:

```text
Protected AI Runtime Platform
  -> Owner identity and authentication architecture (approved)
  -> Identity-provider and session-store decisions
  -> Runtime security and retention configuration
  -> AI provider evaluation and selection
  -> Intent Recognition implementation
  -> Quality and production validation
```

Intent Recognition remains paused until the owner identity boundary and first AI
provider decision are approved. This architecture selects no AI provider, model,
API, database, or authentication provider and authorizes no implementation.
