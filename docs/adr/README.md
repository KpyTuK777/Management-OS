# Architecture Decision Records

This directory preserves approved, long-lived technical decisions whose structural
impact or reversal cost exceeds the Decision Log threshold.

Current product and architecture rules remain in the canonical documents listed in
the [Documentation Map](../DOCUMENTATION_MAP.md). ADRs preserve why a decision was
made, the alternatives considered, and its consequences.

## Index

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-0001](0001-protected-ai-runtime-platform.md) | Accepted | Use a containerized Node.js runtime on Google Cloud Run for the protected AI runtime platform |
| [ADR-0002](0002-owner-identity-and-session-boundary.md) | Accepted | Use OIDC, stable internal Accounts, Workspace Membership, and server-managed browser sessions |
| [ADR-0003](0003-google-sign-in-for-v1.md) | Accepted | Use Google Sign-In behind the provider-neutral identity boundary for v1 |

## Lifecycle

ADRs use **Proposed**, **Accepted**, **Superseded**, or **Deprecated** status. An
accepted ADR is never deleted. A later decision marks it Superseded and links the
replacement while preserving history.
