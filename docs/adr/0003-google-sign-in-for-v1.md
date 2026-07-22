# ADR-0003: Google Sign-In for V1

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Architecture owner: Product Architect & AI Strategist
- Supersedes: None
- Superseded by: None

## Context

ADR-0002 established a provider-neutral OIDC identity and server-managed session
boundary but intentionally deferred the first provider. V1 now requires one
production identity verifier before the Protected AI Runtime and Intent Recognition
can be exposed safely.

The provider must offer a familiar sign-in experience while leaving Account,
Workspace, Membership, session, authorization, and domain ownership inside
Management OS.

## Decision

Google Sign-In through Google Identity Services and OIDC is the v1 identity
provider. Google identities are isolated behind a provider adapter and mapped by
issuer and subject to a stable internal Management OS Account.

The browser receives only a persistent Management OS session cookie. Core sign-in
requests identity scopes only and does not authorize Google API access. Future
providers may verify the same Account through conforming adapters and explicit
identity linking.

No authentication SDK, session store, database, or Google API integration is
selected by this decision.

## Rationale

Google Sign-In offers a familiar authentication ceremony, mature OIDC server
validation, account security and recovery outside Management OS, and operational
alignment with the already selected Google Cloud runtime.

The adapter and internal Account boundary prevent Google from becoming the product
identity, preserve migration and future-provider options, and keep provider tokens
outside browser storage and the AI Runtime.

## Alternatives considered

- **Continue without selecting a provider:** rejected because production runtime
  authentication cannot proceed without an eligible verifier.
- **Implement Management OS passwords:** rejected because credential storage,
  recovery, MFA, abuse defense, and authentication operations are not v1 product
  responsibilities.
- **Expose Google ID tokens directly to every API:** rejected because the Session
  Gateway must normalize identity and authorize current Account and Workspace state.
- **Use Google email as the Account key:** rejected because email can change and is
  not a stable authorization key.
- **Request Google API access during sign-in:** rejected because authentication and
  integration consent are separate product purposes.
- **Select multiple v1 providers:** deferred to minimize initial security,
  enrollment, linking, recovery, and validation scope.

## Consequences

- A Google OAuth project, consent configuration, and environment-specific clients
  are required.
- Google becomes a v1 availability dependency for new sign-in and reauthentication,
  while existing Management OS sessions remain independently bounded.
- Google-specific code remains confined to one adapter.
- Initial owner enrollment must be closed and controlled.
- Session storage and authentication SDK decisions remain prerequisites.
- Future providers require adapter conformance and explicit Account linking.
- Google API permissions require separate architecture and consent.

## References

- [Owner Identity and Authentication](../OWNER_AUTHENTICATION_ARCHITECTURE.md)
- [Owner Identity Architecture](../OWNER_IDENTITY_ARCHITECTURE.md)
- [Protected AI Runtime Platform](../PROTECTED_AI_RUNTIME_PLATFORM.md)
- [ADR-0002](0002-owner-identity-and-session-boundary.md)
