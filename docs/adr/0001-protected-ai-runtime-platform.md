# ADR-0001: Protected AI Runtime Platform

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Architecture owner: Product Architect & AI Strategist
- Supersedes: None
- Superseded by: None

## Context

Management OS is currently a static browser application. Production AI execution
requires a protected server boundary for authentication, credentials, context
policy, provider adapters, validation, confidence, and redacted operational
evidence. The runtime platform must remain provider-neutral, inexpensive at low
usage, locally testable, scalable, and suitable for future multi-model workflows.

Cloudflare Workers, Google Cloud Run, Azure Functions, AWS Lambda, a dedicated
Node.js server, and containerized deployment were evaluated. Containerization is a
packaging decision rather than a complete host.

## Decision

Management OS v1 will package the protected AI runtime as a stateless
OCI-compatible Node.js container and deploy it to Google Cloud Run.

Google Secret Manager will hold sensitive runtime configuration. A least-privilege
service account will identify the runtime. Artifact Registry will hold immutable
images, and Cloud Logging and Monitoring will receive redacted operational
telemetry.

The decision selects no AI provider, model, API, identity provider, or database.

## Rationale

Cloud Run provides the best balance of standard-runtime compatibility, container
portability, managed HTTPS, service identity, secret integration, revisions,
scale-to-zero economics, concurrency controls, local-development parity, and
headroom for capability and multi-model orchestration.

It avoids the operating burden of a dedicated server, the edge-runtime constraints
of Workers, and the stronger function-specific conventions of Azure Functions and
AWS Lambda.

## Alternatives considered

- **Cloudflare Workers:** preferred for a thin global gateway, but not selected
  because the approved runtime includes growing workflow, validation, and
  orchestration responsibilities.
- **Azure Functions:** production-ready and secure, but more attractive only with
  a broader Azure identity and infrastructure commitment.
- **AWS Lambda:** production-ready and mature, but adds a more function-specific
  execution and ingress model for a cohesive v1 runtime service.
- **Dedicated Node.js server:** maximizes control but transfers patching,
  availability, scaling, TLS, and incident operation to the Management OS team.
- **Container alone:** adopted as packaging but insufficient as a production host.

## Consequences

- Runtime implementation will require container and Cloud Run deployment
  conventions.
- Owner identity and authentication remain required before production exposure.
- Provider credentials must remain server-side in Secret Manager.
- Scale-to-zero may add cold-start latency; a warm instance requires measured
  product justification.
- Google Cloud operational knowledge and billing become required for v1.
- The container provides a migration path to another compatible host if future
  requirements outweigh switching cost.
- AI provider selection remains a separate architectural decision.

## References

- [Protected AI Runtime Platform](../PROTECTED_AI_RUNTIME_PLATFORM.md)
- [AI Runtime Architecture](../AI_RUNTIME_ARCHITECTURE.md)
- [AI Quality Framework](../AI_QUALITY_FRAMEWORK.md)
- [Technical Architecture](../ARCHITECTURE.md)
