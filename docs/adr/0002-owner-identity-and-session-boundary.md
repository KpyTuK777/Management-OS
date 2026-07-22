# ADR-0002: Owner Identity and Session Boundary

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Architecture owner: Product Architect & AI Strategist
- Supersedes: None
- Superseded by: None

## Context

Desktop, Mobile, the Protected AI Runtime, future synchronization, and future
multi-device use require one durable identity and authorization boundary. The
current static browser prototype has no authenticated Account or protected server
session. Browser-held provider tokens would expand exposure, while using email as
identity would make Account continuity unsafe.

The architecture must remain identity-provider neutral and must support future
native clients and multi-owner Workspaces without introducing those capabilities
in v1.

## Decision

Management OS will map external OIDC identities by issuer and subject to a stable
internal Account. Authorization will be mediated through Workspace Membership.

Browser Desktop will use Authorization Code with PKCE and a server-managed
Backend-for-Frontend session represented to the browser only by an opaque Secure,
HttpOnly, SameSite cookie. Provider tokens remain server-side.

Future native Mobile and Desktop clients will use an external system browser,
Authorization Code with PKCE, short-lived audience-specific access tokens, and
rotated refresh tokens stored using operating-system secure storage.

The protected runtime will receive a server-validated, bounded Auth Context rather
than client-supplied Account or Workspace identity. V1 supports one Account, one
Workspace, and one Owner Membership.

No identity provider, SDK, session-store technology, or database is selected by
this decision.

## Rationale

The model separates external credential verification from durable Management OS
identity, authentication from authorization, personal identity from organizational
scope, and owner identity from cloud and AI-provider credentials.

Server-managed browser sessions keep reusable provider credentials outside
browser JavaScript. OIDC and PKCE preserve provider portability and provide a
standards-based path for native clients. Account, Workspace, and Membership
boundaries prepare synchronization and multi-owner operation without making them
current features.

## Alternatives considered

- **Store provider tokens in browser storage:** rejected because JavaScript and XSS
  exposure would compromise reusable credentials.
- **Use provider email as Account identity:** rejected because email can change,
  alias, or be reassigned.
- **Let every client call the AI Runtime with its own identity claims:** rejected
  because the server must derive and authorize Account and Workspace context.
- **Implement passwords directly in Management OS:** rejected because credential
  verification, recovery, MFA, and abuse defense should remain with a qualified
  identity provider.
- **Use one token type for login, API, internal services, and AI providers:**
  rejected because distinct audiences and trust boundaries prevent substitution.

## Consequences

- A managed OIDC provider must be evaluated and selected separately.
- A protected server-side session store and identity data model are required.
- The static browser application must gain a secure Session Gateway before AI
  production use.
- Account and Workspace context becomes mandatory for protected requests.
- Native applications require a separate public-client flow and secure OS storage.
- Offline access cannot prove current server authorization.
- Future multi-owner behavior can extend Membership without changing Account
  identity.
- Session inspection, revocation, recovery, and security evidence become product
  and operational responsibilities.

## References

- [Owner Identity Architecture](../OWNER_IDENTITY_ARCHITECTURE.md)
- [Protected AI Runtime Platform](../PROTECTED_AI_RUNTIME_PLATFORM.md)
- [AI Runtime Architecture](../AI_RUNTIME_ARCHITECTURE.md)
- [Platform Responsibility Model](../PLATFORM_RESPONSIBILITY_MODEL.md)
