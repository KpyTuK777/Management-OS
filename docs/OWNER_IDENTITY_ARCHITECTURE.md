# Owner Identity Architecture

## Purpose and status

The Owner Identity Architecture establishes one canonical identity,
authentication, session, and authorization model across Desktop, Mobile, the
Protected AI Runtime, future synchronization, and future multi-device use.

| Property | Decision |
| --- | --- |
| Status | Approved identity and security architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Authentication standard | OIDC Authorization Code flow with PKCE |
| Browser strategy | Server-managed Backend-for-Frontend session |
| V1 membership | One Account, one Workspace, one Owner membership |
| Scope | Identity, authentication, session, and authorization architecture |
| Excluded | Identity provider, SDK, session store, database, and implementation |

The [Protected AI Runtime Platform](PROTECTED_AI_RUNTIME_PLATFORM.md) remains
canonical for hosting and protecting the runtime. This document defines the owner
trust boundary required before that runtime may be exposed. The durable identity
and session decision is recorded in
[ADR-0002](adr/0002-owner-identity-and-session-boundary.md).

## Current implementation boundary

Management OS currently has no Account, Workspace identity, Membership, Device
Session, Identity and Session Gateway, OIDC integration, protected API session,
native token flow, synchronization identity, or multi-owner authorization.
Browser `localStorage` is domain persistence, not authentication or identity.

This architecture selects no identity provider, authentication SDK, session-store
technology, database, or implementation. Identity-provider selection remains a
separate deployment decision.

## Identity principles

Authentication answers:

> Who is making this request?

Authorization separately answers:

> May this identity perform this capability in this Workspace?

Management OS does not use email address, display name, device identifier, browser
storage, writing style, AI inference, or remembered conversational behavior as
canonical identity.

## Canonical identity model

```text
External Identity
  issuer + subject
        |
Management OS Account
        |
Workspace Membership
        |
Authorized organizational context
```

### Account

An Account represents one human identity known to Management OS. It has a stable
internal Account ID, lifecycle status, security timestamps, explicitly linked
External Identities, personal settings, and ownership of its Personal Operational
Model.

The Account ID remains stable when the owner changes email, authentication method,
or identity provider.

### External Identity

An External Identity maps an identity-provider subject to an Account. Its canonical
key is:

```text
issuer + subject
```

Email is profile information, not the identity key. An Account may later have
several explicitly linked External Identities. Linking and unlinking require recent
authentication, visible owner confirmation, and recovery-safe behavior.

### Workspace

A Workspace is the organizational boundary containing Management OS records. V1
uses one Account, one Workspace, and one Owner membership.

Introducing the Workspace boundary prevents future synchronization or multi-owner
support from treating every record as globally accessible.

### Membership

Membership connects an Account to a Workspace. It contains the Account and
Workspace references, status, authorization role or permission set, and creation
and revocation state.

V1 supports only the Owner membership. Future roles require separate product and
authorization design and are not implied here.

### Device Session

A Device Session represents authenticated continuity on one browser or native
installation. It may retain an opaque session identifier, Account and Workspace
references, client class, creation and activity timestamps, idle and absolute
expiry, revocation state, authentication strength, and a limited owner-approved
device label.

Management OS avoids invasive device fingerprinting. A session is not a permanent
identity.

### Service identity

Protected runtime components use service identities distinct from the owner.
Deployment, Cloud Run runtime, monitoring, and future synchronization identities
cannot become an Account, own a Personal Operational Model, or provide owner
approval.

## Ownership boundaries

| Information | Canonical owner |
| --- | --- |
| Credential verification | Selected identity provider |
| Stable Account | Management OS identity layer |
| Issuer and subject mapping | Management OS identity layer |
| Workspace membership | Management OS authorization layer |
| Browser session | Identity and Session Gateway |
| Native authorization grant | Identity provider and Management OS token boundary |
| Domain record | Owning domain module |
| Personal Operational Model | Account |
| Organizational Knowledge | Workspace |
| AI execution context | Temporary authenticated Account and Workspace context |
| Cloud credentials | Cloud identity and secret systems |

The AI Assistant never authenticates an owner.

## Authentication architecture

```text
Desktop Web or Mobile client
             |
Identity and Session Gateway
             |
             | OIDC and OAuth
             v
External Identity Provider
             |
Management OS Account mapping
             |
Workspace authorization
             |
Protected AI Runtime and future domain APIs
```

The Identity and Session Gateway is a logical security boundary. It may initially
run with the Protected AI Runtime container, but authentication, session data, AI
workflows, and provider adapters remain separate internal modules.

## Desktop web authentication

The browser uses a Backend-for-Frontend server session:

1. The owner selects Sign in.
2. The browser opens the Session Gateway login endpoint.
3. The Gateway creates state, nonce, and PKCE values.
4. The browser is redirected to the identity provider.
5. The owner authenticates with the provider.
6. The provider returns an authorization code to the Gateway.
7. The Gateway validates state and exchanges the code.
8. The Gateway validates issuer, audience, signature, nonce, and time claims.
9. The Gateway maps issuer and subject to an Account.
10. The Gateway verifies active Workspace membership.
11. The Gateway creates a server-side Device Session.
12. The browser receives only an opaque secure session cookie.
13. Later requests resolve to an authenticated authorization context.

OAuth Security Best Current Practice recommends Authorization Code protections,
including PKCE, and replay controls for refresh tokens. See
[IETF RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html).

### Browser credential boundary

The browser never receives or persists provider client secrets, provider refresh
tokens, or service credentials. Its session cookie is opaque, unpredictable,
Secure, HttpOnly, explicitly SameSite, narrowly scoped, rotated after
authentication or privilege change, and excluded from URLs and logs.

Authentication tokens and session identifiers are not stored in `localStorage` or
`sessionStorage`. OWASP recommends secure HTTP-only cookies or a
Backend-for-Frontend boundary because browser storage is accessible to JavaScript
running in the origin. See
[OWASP Session Management guidance](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html).

Cookie authentication requires CSRF protection for consequential requests.
SameSite is defense in depth, not the sole control.

## Future native authentication

Native Mobile and packaged Desktop clients use the system browser or platform
authentication session, Authorization Code flow, PKCE, an approved app redirect,
short-lived access tokens, refresh-token rotation when issued, and operating-system
secure credential storage.

Native clients do not use embedded WebViews for authentication and cannot keep a
shared static client secret. The IETF native-app guidance requires an external user
agent and PKCE for public native clients. See
[IETF RFC 8252](https://www.rfc-editor.org/info/rfc8252/).

The current browser-based Desktop follows the web flow.

## Authentication methods

Credential verification remains delegated to the selected identity provider. The
provider should support strong authentication such as passkeys,
phishing-resistant multifactor authentication, secure recovery, suspicious-login
protection, and revocation.

WebAuthn defines public-key credentials scoped to a relying party, including
discoverable credentials commonly called passkeys. See
[W3C WebAuthn](https://www.w3.org/TR/webauthn-3/).

Management OS receives only the authenticated result and required claims; it does
not store passwords, passkey private keys, or biometric information.

## Runtime authentication

### Browser request

```text
Browser session cookie
  -> Session Gateway validation
  -> Account and Workspace authorization
  -> trusted Auth Context
  -> protected capability workflow
```

The server never trusts a client-supplied Account ID, Workspace ID, role, or
permission without resolving it from authenticated state.

### Native request

```text
Short-lived access token
  -> Identity and Session Gateway
  -> signature, issuer, audience, expiry, and grant validation
  -> Account and Workspace authorization
  -> trusted Auth Context
  -> protected capability workflow
```

### Internal runtime request

If identity and AI services later separate, the Gateway uses a short-lived
audience-specific internal assertion or an authenticated service call with a
bounded Auth Context. The AI Runtime does not accept an external identity-provider
ID token as a general API credential.

Auth Context contains only required Account, Workspace, session or request,
capability, authorization, and authentication-strength information. Authentication
material is never placed in prompts or sent to an AI provider.

### Separate trust chains

```text
Owner session
  -> authorizes a Management OS capability

Runtime service identity
  -> authorizes cloud-resource access

AI-provider credential
  -> authorizes an approved provider adapter
```

The owner never receives the AI-provider credential. The AI provider never receives
the Management OS session token.

## Session lifecycle

```text
Unauthenticated
  -> Authenticating
  -> Active
  -> Idle
  -> Reauthentication required
  -> Active

Active or Idle
  -> Logged out / Expired / Revoked / Suspended
```

### Creation and duration

A session is created only after provider authentication, response validation,
Account mapping, Account-status validation, and Membership validation. Its
identifier rotates after authentication or material authorization change.

Concrete durations belong to implementation security policy. The architecture
requires short-lived access tokens, bounded idle and absolute expiry, explicit
reauthentication for sensitive operations, refresh-token inactivity expiry,
revocation, and no unlimited remembered session.

### Renewal

A browser session may renew server-side while its grant remains valid. Native
clients may use rotated refresh tokens. Current OAuth guidance requires public
clients to use sender-constrained refresh tokens or rotation capable of detecting
replay. See [IETF RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html).

Renewal never expands permissions, changes Workspace silently, survives Account
suspension, restores a revoked device, or creates unlimited access.

### Reauthentication

Recent or stronger authentication may be required to link identities, inspect or
revoke sessions, change security settings, export sensitive data, delete an
Account or Workspace, change future memberships, inspect sensitive personal
learning, or recover from a security event.

Routine Intent Recognition should not repeatedly interrupt the owner while a valid
session exists.

### Logout and revocation

Logout revokes the Device Session, clears browser or native credentials, revokes
the underlying refresh grant where appropriate, prevents reuse, preserves domain
data, and returns a truthful signed-out state.

OAuth defines token revocation for invalidating refresh tokens and, where
supported, related access grants. See
[IETF RFC 7009](https://www.rfc-editor.org/info/rfc7009/).

The owner should be able to inspect and revoke individual sessions without global
logout unless a security event requires it.

### Account recovery

Recovery remains owned by the selected identity provider. Management OS does not
create a support bypass based on email, silently merge Accounts, replace issuer and
subject without proof, or expose a Workspace to a claimed owner. Material recovery
may revoke existing sessions and require fresh authentication.

## Token strategy

| Credential | Purpose | Client visibility |
| --- | --- | --- |
| ID token | Establish identity during login | Validated by the Gateway; not an API credential |
| Browser session cookie | Identify a server-side web session | Browser-managed and inaccessible to JavaScript |
| Native access token | Authorize a bounded API audience | Memory or approved secure storage |
| Native refresh token | Renew a native grant | Operating-system secure storage only |
| Internal assertion | Carry bounded authorization between trusted services | Server-side only |
| Cloud service identity | Access cloud resources | Workload identity only |
| AI-provider credential | Invoke an approved adapter | Secret Manager and runtime only |

OpenID Connect defines the ID token as identity information produced by
authentication; API authorization is a separate access-token concern. See
[OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0-35.html).

### Access tokens

Access tokens are short-lived, audience-specific, capability-bounded,
issuer-validated, signature-validated, time-validated, unusable as ID tokens, and
excluded from URLs and ordinary logs.

If JWT access tokens are used, validation fixes accepted algorithms and verifies
issuer, subject, audience, signature, and token type. See
[IETF JWT Best Current Practices](https://www.rfc-editor.org/info/rfc8725/).

Current Account, Membership, and Workspace state remains server-authoritative
rather than relying solely on long-lived token claims.

### Browser session store

The browser uses an opaque identifier rather than carrying authorization claims or
provider tokens in JavaScript. Server-side state contains only Account and
Workspace resolution, expiry, revocation, grant handling, authentication strength,
and required security evidence.

This architecture requires a protected session store. Its concrete managed storage
technology requires a separate implementation decision.

### Token separation

ID tokens, browser sessions, access tokens, internal assertions, service identity,
and provider credentials use mutually exclusive audiences, types, validation
rules, and trust boundaries. They are never interchangeable.

## Authorization boundaries

Every protected request verifies:

1. authenticated Account;
2. active Account status;
3. active session or grant;
4. active Workspace membership;
5. requested Workspace matches authenticated context;
6. requested capability is permitted;
7. referenced records belong to that Workspace;
8. stronger authentication when required;
9. domain-specific authorization before mutation.

Authorization names product capabilities, such as Intent Recognition, synchronized
Knowledge access, domain mutation, Membership administration, or session
revocation. There is no generic permission to call any AI model.

Authentication does not change the mutation sequence:

```text
Authenticated owner
  -> authorized capability
  -> Assistant preparation
  -> explicit approval
  -> owning module validation
  -> owning module mutation
```

An authenticated request is not approval for every downstream action.

### Workspace isolation

Every record and AI context package is scoped to one Workspace unless a separately
approved cross-workspace capability exists. The runtime rejects missing Workspace
context, records from another Workspace, client identity overrides, mixed Personal
Operational Models, cross-owner leakage, and attempts to use provider credentials
as owner authority.

## Future multi-owner support

```text
Account A --\
Account B ----> Memberships -> Workspace
Account C --/
```

Future work may add roles, permissions, invitations, suspension, removal,
ownership transfer, shared and private context, audit attribution, and delegation.
These are not v1 capabilities.

Personal preferences remain Account-owned; organizational knowledge remains
Workspace-owned. One member's correction never silently becomes another member's
preference. Future ownership transfer requires recent strong authentication,
recipient acceptance, visible consequences, revocation handling, and durable audit
evidence.

## Offline considerations

Offline continuity does not prove current server authorization:

```text
Local device access
  != current server authentication
  != authorization to synchronize
  != authorization to invoke AI
```

The web client stores no credential in browser storage. Approved cached or
temporary content remains explicitly stale or local. The Protected AI Runtime is
unavailable offline, and synchronization revalidates authorization.

A future native client may use platform security to unlock encrypted local data.
On reconnection it validates or renews the grant, confirms Account and Membership,
reconciles pending work, exposes conflicts, and rejects synchronization after
revocation.

Remote revocation cannot guarantee deletion from a device that never reconnects.
Future native offline architecture therefore requires local encryption, secure
storage, minimization, retention limits, and visible device management.

## Security review

| Threat | Required control |
| --- | --- |
| Browser token theft through XSS | Opaque HttpOnly session cookie; no tokens in web storage |
| CSRF | SameSite, anti-CSRF control, and origin validation |
| Authorization-code interception | Authorization Code flow with PKCE |
| Login response injection | State, nonce, exact redirect validation, and PKCE |
| Session fixation | Rotate after authentication and privilege change |
| Refresh-token replay | Rotation or sender constraint and grant revocation |
| JWT substitution | Fixed algorithms and strict issuer, audience, type, and signature validation |
| Workspace leakage | Server-derived Account and Workspace context |
| Client privilege escalation | Server-authoritative Membership and capability policy |
| Stolen device | Short lifetimes, secure storage, inspection, and revocation |
| Email reassignment | Identity keyed by issuer and subject |
| Account-linking takeover | Recent strong authentication and explicit confirmation |
| Credential leakage | Provider and runtime secrets remain server-side |
| AI cross-owner leakage | Workspace context and Account-scoped personal memory |
| Log disclosure | Exclude credentials, tokens, and raw authentication responses |
| Service impersonation | Workload identity and audience-restricted internal calls |
| Offline authorization drift | Revalidate before synchronization or protected execution |

Production is blocked if the browser stores access or refresh tokens in
`localStorage`, an AI-provider key reaches a client, email is the sole Account key,
the runtime trusts client identity claims, an ID token acts as a general API token,
sessions cannot be revoked, Mobile embeds credential entry, Personal Operational
Models cross Account boundaries, unauthenticated clients invoke AI, or logs contain
credentials.

Identity collection remains minimal. Management OS avoids unnecessary profile
claims, invasive fingerprinting, unrelated authentication telemetry, provider
credentials, and biometric information.

## Relationship to the AI Runtime

```text
Authenticated Account
  -> active Workspace Membership
  -> capability authorization
  -> bounded Auth Context
  -> AI Runtime request
  -> minimized Workspace context
  -> provider-independent execution
  -> validated result
```

The AI Runtime receives no password, passkey, identity-provider session cookie, or
refresh token. Auth Context supplies only scope, attribution, capability, and
privacy-safe operational evidence requirements. It is never included in model
prompts beyond the minimum approved contextual identifiers.

## Product impact

The owner should experience a recognizable sign-in boundary, infrequent
authentication during a valid session, calm reauthentication, visible device and
session control, consistent identity across platforms, and no provider or token
terminology during ordinary work.

The architecture removes credential storage, token copying, provider-specific
runtime sign-in, manual synchronization identity, and AI credential management
from the owner. It preserves human judgment for identity linking, remembered
devices, session revocation, recovery, future membership, and security-sensitive
changes.

Authentication failure is not AI misunderstanding. Session expiry preserves
authorized temporary input, explains that sign-in is required, returns safely to
the intended action after authentication, and never reports pending work as
synchronized or applied.

## Product Review

The canonical question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

The architecture supplies one stable owner identity, keeps secrets out of clients,
avoids repeated infrastructure decisions, preserves explicit security choices, and
prevents AI or device behavior from becoming authority.

Implementation fails Product Review if it creates unnecessary reauthentication,
loses temporary work, exposes token mechanics, silently links Accounts, hides
session consequences, or prevents useful degraded operation.

## Recommendation and sequencing

Adopt this canonical model:

```text
Managed standards-compatible identity provider
  -> OIDC Authorization Code with PKCE
  -> Management OS Identity and Session Gateway
  -> stable internal Account
  -> Workspace Membership
  -> authorized Desktop, Mobile, synchronization, and AI capabilities
```

For browser v1, use a managed OIDC-compatible provider selected separately, a
server-side Backend-for-Frontend session, an opaque Secure and HttpOnly cookie,
revocable Device Sessions, server-authoritative Account and Workspace checks, and
bounded Auth Context for the AI Runtime. V1 supports one Account, one Workspace,
and one Owner Membership.

Future native clients use the external system browser, Authorization Code with
PKCE, short-lived audience-restricted access tokens, rotated refresh tokens in OS
secure storage, and the same Account and Workspace authorization model.

Proceed in this order:

```text
Owner Identity Architecture
  -> Identity-provider evaluation and selection
  -> Session-store and identity-data architecture
  -> Web authentication Implementation Plan
  -> Protected Runtime authentication
  -> Intent Recognition implementation
  -> Mobile and synchronization authentication
  -> Future multi-owner authorization
```

Provider selection should evaluate OIDC conformance, PKCE, passkeys or
phishing-resistant MFA, recovery, revocation, auditability, regional availability,
exportability, cost, and subject stability.

This architecture selects no identity provider, SDK, session store, database, or
implementation.
