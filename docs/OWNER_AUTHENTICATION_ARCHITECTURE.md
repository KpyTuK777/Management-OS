# Owner Identity and Authentication

## Purpose and status

This architecture specializes the provider-neutral
[Owner Identity Architecture](OWNER_IDENTITY_ARCHITECTURE.md) for Management OS
v1. It selects Google Sign-In to verify the owner while preserving Management OS
ownership of the internal Account, Workspace Membership, sessions, authorization,
and product data.

> Management OS owns the owner identity. Identity providers verify that identity.

| Property | Decision |
| --- | --- |
| Status | Approved v1 authentication architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| V1 identity provider | Google Sign-In through Google Identity Services and OIDC |
| Authentication boundary | Provider adapter and normalized External Identity |
| Session strategy | Persistent server-managed Management OS Device Session |
| Scope | V1 identity-provider and authentication specialization |
| Excluded | Authentication SDK, session store, database, Google API access, and implementation |

The provider-neutral Account, Membership, token, native-client, offline, and
multi-owner boundaries remain authoritative in the Owner Identity Architecture.
The durable provider-selection rationale is recorded in
[ADR-0003](adr/0003-google-sign-in-for-v1.md).

## Current implementation boundary

Google Sign-In is approved but not implemented. No Google OAuth project, OAuth
client, consent configuration, redirect endpoint, provider adapter, Account,
Workspace, Device Session, session store, protected API session, or runtime Auth
Context exists in the current static prototype.

This architecture selects no authentication SDK, session-store technology,
database, Google API integration, or implementation.

## Identity philosophy

```text
Google Sign-In
    -> verified Google identity
    -> Google Identity Adapter
    -> Management OS Account
    -> Workspace Membership
    -> authorized product capabilities
```

Google verifies control of a Google account. Management OS decides which internal
Account it represents, which Workspace that Account may access, which capabilities
are authorized, which sessions remain valid, and whether another provider may
later be linked.

No domain record depends directly on a Google identifier.

### Canonical identity key

The Google adapter maps:

```text
Google issuer + Google subject
    -> External Identity
    -> stable Management OS Account ID
```

Google recommends using the ID token's `sub` claim as the unique identifier rather
than email. See
[Google server-side ID-token verification](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token).

Email, name, and profile image are optional profile attributes. They are not
foreign keys, ownership identifiers, authorization evidence, or reasons to merge
Accounts.

### Authentication is not product ownership

Changing or removing Google later must not require rewriting domain records,
changing Account IDs, changing Workspace ownership, losing approval history, or
creating a new Personal Operational Model.

### Closed v1 enrollment

Authentication and registration remain separate. An arbitrary Google account must
not be able to claim an uninitialized Management OS deployment.

Initial enrollment requires an explicit controlled bootstrap or invitation. After
successful enrollment, issuer and subject become the permanent External Identity
key. Any bootstrap email is temporary enrollment evidence only. The bootstrap
mechanism belongs to Implementation Planning.

### Minimal provider dependence

V1 Google Sign-In requests only the minimum identity scopes:

```text
openid
email
profile
```

Sign-in does not request Drive, Calendar, Gmail, Contacts, or other Google API
access. Additional Google permissions require separate product capability,
incremental consent, privacy review, architecture approval, and revocation.

Google documents additional verification obligations for sensitive or restricted
API scopes. See
[Google OAuth verification guidance](https://support.google.com/cloud/answer/13463073).

## Authentication architecture

```text
Desktop browser
      |
      | Continue with Google
      v
Management OS Identity and Session Gateway
      |
      | OIDC Authorization Code with PKCE
      v
Google Identity Services
      |
      | verified authentication result
      v
Google Identity Adapter
      |
      | normalized External Identity
      v
Management OS Account Resolver
      |
Workspace authorization
      |
Persistent Device Session
      |
Protected AI Runtime and future synchronized APIs
```

The Identity and Session Gateway belongs to the protected server boundary. It may
initially share the Cloud Run deployment with the AI Runtime, but authentication,
session, Account resolution, AI workflow, and provider-adapter modules remain
logically separate.

## Provider abstraction

Product code depends on a Management OS Identity Provider contract rather than
Google claims or SDK types.

Conceptually, an adapter provides:

```text
createAuthorizationRequest()
exchangeAuthorizationCode()
validateAuthenticationResult()
normalizeExternalIdentity()
handleProviderRevocation()
describeAuthenticationFailure()
```

Its normalized result contains only approved fields:

```text
VerifiedExternalIdentity
- providerKey
- issuer
- subject
- email, when supplied
- emailVerified, when supplied
- displayName, optional
- profileImage, optional
- authenticatedAt
- authenticationContext, when meaningful
```

The Account Resolver never consumes a Google SDK response directly.

### Provider registry

```text
Identity Provider Registry
  |-- google          v1
  |-- microsoft       future
  |-- apple           future
  |-- github          future
  `-- enterprise OIDC future
```

Future adapters must demonstrate standards-compatible authentication, stable
issuer and subject behavior, server validation, PKCE where applicable, secure
redirects, revocation, normalized claims, privacy suitability, and production
support.

Adding a provider expands authentication options. It does not create a parallel
Management OS identity.

## Google web flow

1. The owner selects **Continue with Google**.
2. The browser calls the Management OS login endpoint.
3. The Gateway creates state, nonce, PKCE, and a pending transaction.
4. The browser is redirected to Google.
5. The owner selects and authenticates a Google account.
6. Google returns an authorization code to the registered callback.
7. The Gateway verifies state and exchanges the code.
8. The Gateway validates the identity response.
9. The adapter normalizes issuer and subject.
10. The Account Resolver finds or enrolls the internal Account.
11. Authorization verifies active Workspace Membership.
12. The session service creates a persistent Device Session.
13. The browser receives an opaque Management OS session cookie.
14. The owner returns to the intended product context.

Google documents a server flow in which a backend verifies identity returned from
a browser or mobile interaction. See
[Google OpenID Connect guidance](https://developers.google.com/identity/openid-connect/openid-connect).

The callback validates state, PKCE verifier, nonce, exact redirect URI, signature,
accepted algorithm, issuer, audience, expiration, subject, and pending transaction.
Google's server-side guidance specifically requires signature, audience, issuer,
and expiration validation. See
[Google server-side ID-token verification](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token).

## Google configuration boundary

Google-specific configuration is isolated to the Google adapter and authentication
endpoints:

- OAuth client ID;
- protected client secret where required;
- authorized origins;
- exact redirect URIs;
- Google issuer metadata;
- accepted audiences;
- consent-screen and brand configuration;
- separate environment registrations.

The client secret remains in Secret Manager and never enters browser JavaScript,
source control, the container image, logs, or AI prompts. Google recommends keeping
web-server credentials outside public locations and source trees. See
[Google OAuth web-server guidance](https://developers.google.com/identity/protocols/oauth2/web-server).

Local, development, staging, and production use distinct Google OAuth clients,
redirect URIs, secrets, sessions, and consent configuration. Production callbacks
do not accept development redirects.

## Google API authorization boundary

Google Sign-In authenticates the owner; it does not authorize access to Google
APIs.

A future Calendar, Drive, Gmail, or other integration must request permission
separately, explain the scope, use incremental authorization, store the grant apart
from owner authentication, and support independent revocation. Google API access
must not become a condition of Management OS sign-in.

## Authenticated AI Runtime access

```text
Browser
  -> opaque Management OS session cookie
  -> Identity and Session Gateway
  -> Device Session validation
  -> Account and Workspace authorization
  -> bounded Auth Context
  -> Intent Recognition capability
```

The browser does not send a Google ID token to the AI Runtime for each request. The
AI Runtime does not authenticate Google identities directly. It accepts only the
Gateway's validated Auth Context or a future audience-specific internal assertion.

Auth Context contains the internal Account ID, Workspace ID, session or request
reference, authorized capability, permission result, relevant authentication
strength, and privacy or audit constraints.

It contains no Google password, passkey, Google browser session, authorization
code, refresh token, raw ID token, client secret, or unrelated profile data.

Before Intent Recognition, the Gateway validates the session, Account, Membership,
capability, Workspace, rate, and input boundaries. Google authentication never
bypasses AI validation, confidence, approval, or domain ownership.

## Session model

Persistent owner continuity belongs to Management OS:

```text
Google authentication event
    -> Management OS Device Session
    -> persistent bounded owner continuity
```

The browser holds only an opaque high-entropy Secure, HttpOnly, explicitly SameSite
cookie with narrow scope. It is rotated after login and material security changes
and excluded from URLs and logs. No Google or Management OS access token is stored
in `localStorage` or `sessionStorage`.

The server-side session retains only Account, Workspace, expiry, revocation,
authentication strength, and necessary security evidence.

### Persistence

Persistent means bounded continuity, not permanent authentication. Sessions have
bounded idle and absolute expiry, controlled renewal, recent-authentication
requirements for sensitive actions, security-event revocation, and visible
remembered-device behavior. Concrete durations belong to implementation security
policy.

### Google refresh-token policy

Management OS does not require a long-lived Google refresh token merely to keep an
owner signed into Management OS. V1 uses Google to establish identity, creates a
Management OS session, and returns to Google only for reauthentication.

If a future Google API integration needs offline access, its refresh token belongs
to that integration grant rather than the core owner session. Google documents
refresh tokens as credentials for ongoing Google API access that require secure
server-side storage. See
[Google OAuth web-server guidance](https://developers.google.com/identity/protocols/oauth2/web-server).

### Session lifecycle

```text
Unauthenticated
  -> Authenticating with Google
  -> Active
  -> Idle
  -> Reauthentication required
  -> Active

Active or Idle
  -> Logged out / Expired / Revoked / Account suspended
```

### Secure logout

Normal logout revokes the Management OS Device Session, clears the cookie,
invalidates server-side state, prevents reuse, preserves domain data, and returns a
truthful signed-out state without silently losing temporary Capture.

It does not sign the owner out of their entire Google browser session.

The product distinguishes:

- **Sign out of Management OS:** revoke the current Device Session.
- **Sign out all devices:** revoke all Management OS sessions.
- **Disconnect Google identity:** a security-sensitive identity-link operation.
- **Revoke Google API access:** relevant only to separate integration grants.

### Multi-device support

Each browser or future native installation has an independent Device Session. The
owner should be able to inspect its label or type, creation and recent use, current
status, and revoke action.

Revoking one session does not revoke others unless the owner selects global logout
or a security event requires it. Synchronization keys identity by Account and
Workspace, not Google email.

### Provider outage

During a Google outage, existing valid Management OS sessions may continue under
normal policy. New authentication and expired-session reauthentication may be
unavailable. Management OS creates no bypass, preserves authorized temporary input,
and reports sign-in unavailability rather than AI failure.

## Future providers and account linking

```text
Google issuer + subject ----\
Microsoft issuer + subject --+--> Management OS Account
Apple issuer + subject ------+
GitHub issuer + subject -----/
```

Linking requires an authenticated Account, recent strong authentication, explicit
confirmation, uniqueness validation, visible recovery consequences, and durable
security evidence. Matching email addresses never merge identities automatically.

Removing an identity requires another valid authentication path, recent
authentication, session and recovery review, and explicit lockout warning. Google
cannot be removed as the only identity until another approved identity exists.

## Future multi-owner readiness

Future Accounts may share a Workspace through distinct Memberships regardless of
provider. Provider choice never determines Workspace role or authority.

One member's Google identity, Device Sessions, Personal Operational Model,
corrections, or preferences never become another member's identity or personal
context.

## Security review

| Threat | Required control |
| --- | --- |
| Authorization-code interception | PKCE and exact redirect validation |
| Login CSRF | State, nonce, CSRF control, and transaction binding |
| Token substitution | Issuer, audience, signature, type, expiry, and subject validation |
| Session fixation | Rotate after authentication and security change |
| Browser credential theft | Opaque HttpOnly cookie; no tokens in web storage |
| Client-secret disclosure | Secret Manager and server-only adapter |
| Email reassignment | Issuer and subject identity key |
| Linking takeover | Recent authentication and explicit confirmation |
| Cross-Workspace access | Server-derived Account and Membership authorization |
| Session replay | High entropy, bounded expiry, and revocation |
| Incomplete logout | Server-side invalidation, not UI-only state |
| Excessive Google access | Identity-only scopes and separate incremental authorization |
| Open-registration takeover | Explicit v1 enrollment policy |
| Provider outage bypass | Existing bounded sessions only; no new trust bypass |
| AI credential confusion | Separate owner, cloud-service, and AI-provider chains |

Production is blocked if Google secrets reach the browser, Google tokens are stored
in web storage, email is the Account key, the browser authorizes itself, identity
validation is incomplete, redirects are not exact, sessions cannot be revoked,
logout is cosmetic, unrelated Google scopes are requested, Accounts merge by
email, provider failure creates a bypass, or Google claims enter domain ownership.

V1 retains only issuer, subject, provider key, email and verification status when
useful, optional display name or image, and required security timestamps. Provider
profile data does not become Organizational Knowledge or Personal Operational Model
input merely because it is available.

Google consent and branding should clearly identify Management OS and request only
identity scopes. Google may require brand verification, while sensitive scopes can
require stronger verification. See
[Google OAuth verification guidance](https://support.google.com/cloud/answer/13463073).

## Product impact

First use should feel like:

```text
Open Management OS
  -> Continue with Google
  -> select or authenticate an account
  -> confirm initial Management OS enrollment
  -> enter Home
```

A returning owner with a valid Management OS session enters their operational
context directly. Google reappears only when no valid session exists,
reauthentication is required, an identity changes, or a security event invalidates
the session.

Management OS communicates product state rather than protocol mechanics: Continue
with Google, signed-in Account context when relevant, session expiry, and confirmed
Management OS logout.

Google Sign-In reduces password and recovery administration and aligns
operationally with the selected Google Cloud runtime. The adapter boundary
preserves the internal Account if Google is supplemented or replaced.

## Product Review

The canonical question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

The architecture reduces credential administration and repeated authentication
while preserving enrollment, remembered-session, logout, revocation, linking, and
future Membership decisions.

It fails Product Review if Google branding overwhelms Management OS identity,
sign-in requests unrelated access, logout is ambiguous, provider terminology enters
ordinary work, or the owner cannot migrate to another provider.

## Recommendation and sequencing

Adopt the v1 boundary:

```text
Google Identity Services
  -> verifies through Google Identity Adapter
  -> resolves Management OS Account
  -> authorizes Workspace Membership
  -> creates Management OS Device Session
  -> protects AI Runtime and synchronized capabilities
```

Canonical decisions are:

- Google Sign-In is the v1 identity provider.
- Management OS owns the internal Account and sessions.
- External identity uses Google issuer and subject, never email alone.
- The browser uses a persistent server-managed session.
- Google secrets and tokens remain outside browser storage.
- Core sign-in requests identity scopes only.
- Google API access is a separate future authorization.
- The AI Runtime trusts bounded Management OS Auth Context.
- Future providers connect through conforming adapters.
- Account linking is explicit and never based only on email.
- V1 remains one Account, one Workspace, and one Owner Membership.
- Multi-device sessions are independent and revocable.
- Future multi-owner authority remains Membership-based.

Proceed in this order:

```text
Owner authentication architecture
  -> Google OAuth project and consent configuration plan
  -> session-store technology decision
  -> Authentication Implementation Plan
  -> Google adapter and Account enrollment
  -> Protected Runtime authorization
  -> Intent Recognition implementation
  -> multi-device validation
```

This architecture selects Google Sign-In for v1. It selects no authentication SDK,
session store, database, Google API integration, or implementation.
