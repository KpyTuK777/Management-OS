# Documentation Map

This document defines the architectural role, ownership, audience, maintenance
cadence, and authority of the Management OS documentation set.

## Authority by domain

When documents overlap, the canonical authority for the relevant domain prevails:

| Domain | Canonical document |
| --- | --- |
| Product purpose and principles | [Product Vision](PRODUCT_VISION.md) |
| End-to-end owner experience | [Owner Journey](OWNER_JOURNEY.md) |
| Owner Journey feature validation | [Owner Journey Validation Framework](OWNER_JOURNEY_VALIDATION.md) |
| Product maturity and release readiness | [Product Maturity Model](PRODUCT_MATURITY.md) |
| Ownership, direct and extended delivery lanes, APPROVE, APPLY, Implementation Planning, and Quality Lead responsibility | [Team Governance](TEAM.md) |
| Product-system responsibilities | [Systems](SYSTEMS.md) |
| Technical structure and boundaries | [Architecture](ARCHITECTURE.md) |
| AI Assistant product architecture | [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md) |
| Provider-independent Watson professional obligations, character, habits, anti-patterns, conflict resolution, and responsibility | [Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) |
| Cross-capability AI decision behavior | [AI Decision Policy](AI_DECISION_POLICY.md) |
| Intent Recognition capability architecture | [AI Capability 01 — Intent Recognition](AI_CAPABILITY_INTENT_RECOGNITION.md) |
| Context Collection capability architecture | [AI Capability 02 — Context Collection](AI_CAPABILITY_CONTEXT_COLLECTION.md) |
| Provider-independent AI runtime architecture | [AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md) |
| Protected AI runtime hosting platform | [Protected AI Runtime Platform](PROTECTED_AI_RUNTIME_PLATFORM.md) |
| Owner identity, authentication, session, and authorization | [Owner Identity Architecture](OWNER_IDENTITY_ARCHITECTURE.md) |
| V1 identity-provider and authentication specialization | [Owner Identity and Authentication](OWNER_AUTHENTICATION_ARCHITECTURE.md) |
| AI Assistant identity synthesis | [AI Assistant Identity](AI_ASSISTANT_IDENTITY.md) |
| Natural Capture product architecture | [Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md) |
| Natural Capture pre-interpretation interaction | [Natural Capture Interaction Foundation](NATURAL_CAPTURE_INTERACTION_FOUNDATION.md) |
| System and AI communication behavior | [AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md) |
| AI-first Home product architecture | [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md) |
| Operating Context and capability-preserving prioritization | [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md) |
| Durable approved personal operational context | [Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md) |
| Application of approved Workspace Emphasis | [Adaptive Workspace Architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md) |
| Investigation episodes, Investigation Context, navigation model, and Decision Laboratory placement | [Unified Operational Investigation Architecture](UNIFIED_OPERATIONAL_INVESTIGATION_ARCHITECTURE.md) |
| Operational Matter identity, eight-state behavioral model, canonical transitions, transition authority, lifecycle continuity, relationships, reopening, lineage, and capability write boundaries | [Operational Matter Architecture](OPERATIONAL_MATTER_ARCHITECTURE.md) |
| Organizational operating context, provenance, sensitivity, freshness, and Investigation-planning boundaries | [Operational Organization Model](OPERATIONAL_ORGANIZATION_MODEL.md) |
| Evidence Needs, Operational Actions, sequencing, acquisition profiles, scheduling handoff, and orchestration authority | [Investigation Orchestration Architecture](INVESTIGATION_ORCHESTRATION_ARCHITECTURE.md) |
| Operational Case intent, Operational Timeline and Inflection Points, learning-and-change cycle, outcome verification, lifecycle, membership, and domain relationships | [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md) |
| Shared Operational Investigation reasoning grammar and truth boundaries | [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md) |
| Operational Case Evidence classification, provenance, influence, Decision Evidence Summary, snapshots, and interpretation boundaries | [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md) |
| Decision Laboratory branch baseline, assumptions, modeled outputs, uncertainty, validation, and promotion boundaries | [Decision Laboratory and Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md) |
| End-to-end Operational Case entry, naming, investigation orientation, progressive disclosure, and navigation continuity | [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md) |
| Operational Memory, Experience Patterns, historical relevance, confidence, and cross-episode authority | [Operational Memory Architecture](OPERATIONAL_MEMORY_ARCHITECTURE.md) |
| Organizational Knowledge lifecycle, Knowledge Review Candidates, semantic versioning, challenge conditions, and evolution authority | [Knowledge Evolution Architecture](KNOWLEDGE_EVOLUTION_ARCHITECTURE.md) |
| Operational Inquiry, Inquiry Objectives, next-question selection, stopping conditions, and inquiry authority | [Operational Inquiry Architecture](OPERATIONAL_INQUIRY_ARCHITECTURE.md) |
| Desktop and Mobile responsibility allocation | [Platform Responsibility Model](PLATFORM_RESPONSIBILITY_MODEL.md) |
| Mobile product and interaction architecture | [Mobile Experience Architecture](MOBILE_EXPERIENCE_ARCHITECTURE.md) |
| AI capability evolution and dependencies | [AI Capability Roadmap](AI_CAPABILITY_ROADMAP.md) |
| Implemented AI behavior quality | [AI Quality Framework](AI_QUALITY_FRAMEWORK.md) |
| Data contracts | [Data Model](DATA_MODEL.md) |
| Engineering practice | [Development](DEVELOPMENT.md) |
| Visual conventions | [Design System](DESIGN_SYSTEM.md) |
| User-facing language | [Product Language](PRODUCT_LANGUAGE.md) |
| Future sequencing | [Roadmap](ROADMAP.md) |
| Sprint completion | [Sprint Tracker](SPRINTS.md) |
| Release history | [Changelog](CHANGELOG.md) |
| Decision rationale history | [Decision Log](DECISIONS.md) |
| Long-lived technical decision rationale | [Architecture Decision Records](adr/README.md) |

The [Development Methodology](METHODOLOGY.md) explains how these authorities work
together. It is a synthesis and does not replace them.

The repository README is an entry point and summary, not a source of authority for
product status or scope.

## Documentation catalog

| Document | Category | Purpose | Owner | Primary audience | Update frequency | Status | Related documents |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `README.md` | Entry point | Introduce the repository, setup, and documentation index. | Lead Software Engineer | New contributors and reviewers | When setup or documentation structure changes | Informational | All canonical documents |
| `docs/TEAM.md` | Governance | Define decision ownership, direct and extended delivery lanes, proportionate Implementation Planning, Quality Lead responsibility, APPROVE, APPLY, and AI collaboration rules. | Product Owner | Entire team and AI collaborators | When governance changes | Canonical | Development, Product Vision, Methodology |
| `docs/PRODUCT_VISION.md` | Product | Define purpose, principles, and long-term direction. | Product Owner | Product, architecture, design, engineering | When product direction changes | Canonical | Roadmap, Systems, Product Language |
| `docs/OWNER_JOURNEY.md` | Product experience | Define the canonical end-to-end operational experience from first launch through work, learning, improvement, and session closure. | Product Owner; maintained by Design Owner | Product, architecture, design, engineering, documentation, and AI collaborators | With approved end-to-end experience changes | Canonical product-experience journey; source architectures prevail for detailed boundaries | Product Vision, Systems, AI Assistant, Natural Capture, AI-first Home, Product Language, Design System, Team |
| `docs/OWNER_JOURNEY_VALIDATION.md` | Product experience governance | Define standard journey-impact evidence for future features and integrate it into existing Product and Design Reviews. | Product Owner; maintained by Design Owner | Product, architecture, design, engineering, documentation, and AI collaborators | With approved journey-validation changes | Canonical product-experience validation standard; creates no review stage | Owner Journey, Product Vision, Methodology, Team, Design System, Product Language, AI Quality Framework |
| `docs/PRODUCT_MATURITY.md` | Product governance | Define maturity stages, readiness gates, and entry and exit criteria. | Product Owner; maintained by Product Architect | Product and release decision owners | At maturity or release-gate changes | Canonical | Roadmap, Methodology, Documentation Backlog, Team |
| `docs/ROADMAP.md` | Product | Sequence future product horizons and milestones. | Product Owner | Product and delivery planning | At milestone changes | Canonical | Product Vision, Sprints, Systems |
| `docs/SYSTEMS.md` | Product architecture | Catalog systems, responsibilities, current state, and boundaries. | Product Architect | Product, architecture, engineering | After system-level changes | Canonical | Architecture, Roadmap, Data Model |
| `docs/ARCHITECTURE.md` | Engineering architecture | Define technical structure, layers, workflows, and boundaries. | Product Architect | Architects and engineers | With architectural changes | Canonical | Systems, Data Model, Development |
| `docs/WATSON_PROFESSIONAL_ETHOS.md` | Cross-capability AI policy | Define provider-independent professional obligations, character, observable habits, anti-patterns, conflict resolution, responsibility, and evaluation obligations. | Product Architect & AI Strategist | Product, architecture, design, engineering, AI governance, quality, and documentation collaborators | With approved Watson professional-standard changes | Canonical cross-capability AI policy; not implemented | Product Vision, AI Assistant Identity, AI Decision Policy, AI Runtime, AI Quality Framework |
| `docs/AI_ASSISTANT_ARCHITECTURE.md` | AI product architecture | Define Assistant responsibilities, interaction, confidence, approval, learning, memory, cognitive-load, and presence boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, and AI collaborators | With approved AI Assistant architecture changes | Canonical future architecture; not implemented | Product Vision, Watson Professional Ethos, Architecture, Team, Product Language, Recommendations Center direction |
| `docs/AI_DECISION_POLICY.md` | AI product policy | Define the product-owned decision hierarchy and behavioral choice among silence, clarification, assistance, observation, recommendation, approval, and deferral. | Product Architect & AI Strategist | Product, architecture, design, engineering, AI governance, and capability reviewers | With approved AI decision-policy changes | Canonical AI decision policy; not implemented | Product Vision, AI Assistant Architecture, AI Assistant Identity, AI Runtime Architecture, AI Communication Style Guide, AI Quality Framework |
| `docs/AI_CAPABILITY_INTENT_RECOGNITION.md` | AI capability architecture | Define the bounded Intent Recognition contract, primary-wording Evidence, supporting context, explainable candidates, confidence, clarification, failure, and authority limits. | Product Architect & AI Strategist | Product, architecture, design, engineering, AI governance, security, and capability reviewers | With approved Intent Recognition architecture changes | Canonical first production AI capability architecture; not implemented | Natural Capture Architecture, AI Runtime Architecture, AI Decision Policy, AI Quality Framework |
| `docs/AI_CAPABILITY_CONTEXT_COLLECTION.md` | AI capability architecture | Define conditional, declared-need context retrieval, zero-collection bypass, authorization, minimization, layered packages, provenance, freshness, conflict, and failure boundaries. | Product Architect & AI Strategist | Product, architecture, data, engineering, AI governance, security, privacy, and capability reviewers | With approved Context Collection architecture changes | Canonical second production AI capability architecture; not implemented | AI Runtime Architecture, Intent Recognition, AI Decision Policy, Owner Identity Architecture, AI Quality Framework |
| `docs/AI_RUNTIME_ARCHITECTURE.md` | AI runtime architecture | Define provider-independent capability execution, workflow, context preparation, prompts, Model Gateway, provider adapters, result validation, confidence, fallback, and multi-model boundaries. | Product Architect & AI Strategist | Product, architecture, engineering, AI governance, security, and implementation planning | With approved AI runtime architecture changes | Canonical future runtime architecture; not implemented | AI Assistant Architecture, AI Quality Framework, Architecture, Data Model, Team, AI Communication Style Guide |
| `docs/PROTECTED_AI_RUNTIME_PLATFORM.md` | Runtime platform architecture | Define the protected container and Cloud Run platform, security, secrets, ingress, scaling, operations, portability, and provider-selection boundary for the AI Runtime. | Product Architect & AI Strategist | Product, architecture, engineering, security, operations, AI governance, and implementation planning | With approved protected-runtime platform changes | Canonical future platform architecture; not implemented | AI Runtime Architecture, Architecture, AI Quality Framework, ADR-0001 |
| `docs/OWNER_IDENTITY_ARCHITECTURE.md` | Identity and security architecture | Define stable Accounts, external identity mapping, Workspace Membership, web and native authentication, sessions, tokens, runtime Auth Context, offline identity, and future multi-owner boundaries. | Product Architect & AI Strategist | Product, architecture, engineering, security, operations, Mobile, synchronization, and AI governance | With approved identity, authentication, session, or authorization changes | Canonical future identity architecture; not implemented | Protected AI Runtime Platform, AI Runtime Architecture, Platform Responsibility Model, ADR-0002 |
| `docs/OWNER_AUTHENTICATION_ARCHITECTURE.md` | Identity-provider architecture | Select Google Sign-In for v1 and define its adapter, enrollment, server flow, session, logout, multi-device, provider-independence, runtime-authentication, and future-provider boundaries. | Product Architect & AI Strategist | Product, architecture, engineering, security, operations, and implementation planning | With approved v1 provider or authentication-specialization changes | Canonical future v1 authentication architecture; not implemented | Owner Identity Architecture, Protected AI Runtime Platform, ADR-0003 |
| `docs/AI_ASSISTANT_IDENTITY.md` | AI identity synthesis | Consolidate the technology-independent Assistant identity, behavioral character, trust, authority, and owner relationship without redefining source authorities. | Product Architect & AI Strategist | Product, architecture, design, engineering, documentation, and AI collaborators | When approved source authorities materially change the Assistant identity | Canonical synthesis; source documents prevail; not an implementation claim | Product Vision, Owner Journey, AI Assistant Architecture, AI Communication Style Guide, AI Quality Framework, AI-first Workspace, Operational Memory, Knowledge Evolution, Product Language |
| `docs/NATURAL_CAPTURE_ARCHITECTURE.md` | AI product architecture | Define natural-input lifecycle, intent, context, confidence, clarification, approval, failure, and learning boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, and AI collaborators | With approved Natural Capture architecture changes | Canonical future architecture; not implemented | AI Assistant Architecture, Product Vision, Notes, domain modules |
| `docs/NATURAL_CAPTURE_INTERACTION_FOUNDATION.md` | Interaction architecture | Define Phase 2 text entry, temporary review, edit, discard, session-state, transparency, and validation boundaries before AI interpretation. | Product Architect & AI Strategist | Product, architecture, design, engineering, and AI collaborators | With approved pre-interpretation interaction changes | Canonical approved interaction architecture; not implemented | Natural Capture Architecture, AI-first Workspace, Owner Journey, Product Vision |
| `docs/AI_COMMUNICATION_STYLE_GUIDE.md` | Communication architecture | Define message roles, truthfulness, tone, capability and limitation claims, uncertainty, temporary state, recommendations, approval, confirmation, failure, learning, and interruption behavior. | Product Architect & AI Strategist; language maintained by Design Owner | Product, architecture, design, engineering, documentation, and AI collaborators | With approved system or AI communication behavior changes | Canonical communication architecture; not an implementation claim | Product Vision, Product Language, Owner Journey, AI Assistant, AI-first Home, Natural Capture, Design System |
| `docs/AI_FIRST_WORKSPACE_ARCHITECTURE.md` | AI product architecture | Define Home's intent-first interaction, information hierarchy, visibility, interruption, handoff, and degraded-operation boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, and AI collaborators | With approved AI-first Home architecture changes | Canonical future architecture; not implemented | AI Assistant Architecture, Natural Capture, Systems, Roadmap, Recommendations Center direction |
| `docs/ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md` | Product and information architecture | Define owner-controlled Operating Context, optional Operational Stage, approved Workspace Emphasis, capability-preserving prioritization, and degraded-operation boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, documentation, and AI collaborators | With approved Operating Context or workspace-emphasis changes | Canonical future architecture; not implemented | Product Vision, Owner Journey, AI Assistant Architecture, AI-first Workspace Architecture, AI Capability Roadmap, Personal Operational Model, Adaptive Workspace |
| `docs/PERSONAL_OPERATIONAL_MODEL.md` | Personalization architecture | Define ownership, eligible durable personal context, approval, inspection, correction, revocation, precedence, and degraded-access boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, privacy, security, documentation, and AI collaborators | With approved Personal Operational Model or personal-context changes | Canonical future architecture; not implemented | Adaptive Owner Context, AI Assistant Architecture, Owner Journey, AI Capability Roadmap, Adaptive Workspace |
| `docs/ADAPTIVE_WORKSPACE_ARCHITECTURE.md` | Product and information architecture | Define application of exact approved Workspace Emphasis with capability preservation, stable Home, neutral operation, direct access, rollback, and degraded-operation boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, documentation, and AI collaborators | With approved Adaptive Workspace or workspace-emphasis application changes | Canonical future architecture; not implemented | Adaptive Owner Context, Personal Operational Model, AI-first Workspace, Recommendations Center direction, AI Capability Roadmap |
| `docs/OPERATIONAL_MATTER_ARCHITECTURE.md` | Product architecture | Define the enduring Operational Matter identity, eight-state behavioral model, canonical transitions and authority, typed relationships, reopening, lineage, and capability write boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, AI, data, governance, and documentation collaborators | With approved Matter identity, state, lifecycle, relationship, or authority changes | Canonical future architecture; prototype presentation aligned | Unified Operational Investigation, Data Model, Operational Reasoning, Scenario Simulation, Operational Memory, Knowledge Evolution |
| `docs/UNIFIED_OPERATIONAL_INVESTIGATION_ARCHITECTURE.md` | Product architecture | Define repeatable Investigation episodes, Investigation Context behavior and defaults, investigation experience, and Decision Laboratory placement. | Product Architect & AI Strategist | Product, architecture, design, engineering, AI, and documentation collaborators | With approved Investigation capability changes | Canonical future architecture; prototype concept aligned | Operational Matter, Operational Case, Operational Reasoning Model, Operational Inquiry, Scenario Simulation, AI-first Workspace |
| `docs/OPERATIONAL_ORGANIZATION_MODEL.md` | Product and organizational-context architecture | Define governed organizational operating context, provenance, sensitivity, freshness, correction, and Investigation-use boundaries. | Product Architect & AI Strategist | Product, architecture, organization, privacy, security, design, engineering, AI, and documentation collaborators | With approved organizational operating-context changes | Canonical future architecture; not implemented | Unified Operational Investigation, Case Evidence, Personal Operational Model, Owner Identity |
| `docs/INVESTIGATION_ORCHESTRATION_ARCHITECTURE.md` | AI capability and Investigation architecture | Define Evidence Needs, Operational Actions, explainable sequencing, Evidence Acquisition Profiles, scheduling handoffs, and owner authority. | Product Architect & AI Strategist | Product, architecture, operations, design, engineering, AI, privacy, and documentation collaborators | With approved Investigation orchestration changes | Canonical future capability architecture; not implemented | Operational Inquiry, Case Evidence, Operational Organization Model, AI Assistant |
| `docs/OPERATIONAL_CASE_ARCHITECTURE.md` | Product and information architecture | Define Operational Case purpose, bounded centrality, intent, Operational Timeline and Inflection Points, iterative learning-and-change cycle, outcome verification, lifecycle, membership, epistemic distinctions, AI participation, knowledge promotion, and contextual relationships. | Product Architect & AI Strategist | Product, architecture, design, engineering, data, documentation, and AI collaborators | With approved Operational Case, Inflection Point, or case-centered information-architecture changes | Canonical future architecture; not implemented | Product Vision, Owner Journey, Systems, Architecture, AI Assistant Architecture, AI-first Workspace, Adaptive Owner Context, Natural Capture |
| `docs/OPERATIONAL_MEMORY_ARCHITECTURE.md` | Strategic product architecture | Define Operational Memory, Operational Episodes, Experience Patterns, pattern lifecycle, historical relevance, decomposed confidence, explainability, and authority boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, data, governance, documentation, and AI collaborators | With approved organizational-experience or cross-Case learning changes | Canonical future architecture; not implemented | Operational Case, Case Evidence, AI Assistant, Personal Operational Model, Product Vision, Systems |
| `docs/KNOWLEDGE_EVOLUTION_ARCHITECTURE.md` | Strategic product architecture | Define versioned Organizational Knowledge, Knowledge Review Candidates, challenge conditions, semantic history, review explainability, and evolution authority. | Product Architect & AI Strategist | Product, architecture, knowledge governance, design, engineering, data, documentation, and AI collaborators | With approved Knowledge lifecycle or evolution changes | Canonical future architecture; not implemented | Operational Memory, Operational Case, Case Evidence, AI Assistant, Product Vision, Systems |
| `docs/OPERATIONAL_INQUIRY_ARCHITECTURE.md` | AI capability and investigation architecture | Define Operational Inquiry, Inquiry Proposals and Objectives, qualitative next-question selection, state-sensitive strategy, stopping conditions, explainability, memory safeguards, and owner authority. | Product Architect & AI Strategist | Product, architecture, design, AI, data, governance, documentation, and engineering | With approved investigative-question behavior or boundaries | Canonical future capability architecture; not implemented | AI Assistant, Operational Case Experience, Operational Reasoning Model, Case Evidence, Operational Memory, AI Runtime |
| `docs/OPERATIONAL_REASONING_MODEL.md` | Strategic product architecture | Define the shared Investigation reasoning grammar, context and Laboratory truth separation, decision traceability, and learning-promotion boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, data, documentation, and AI collaborators | With approved reasoning or truth-boundary changes | Canonical future architecture; not implemented | Unified Operational Investigation, Operational Case, Case Evidence, Scenario Simulation, Personal Operational Model |
| `docs/CASE_EVIDENCE_ARCHITECTURE.md` | Product and information architecture | Define Case Evidence Sets, classification, provenance, qualitative Influence, Decision Evidence Summaries, decision-time snapshots, interpretation, and environment boundaries. | Product Architect & AI Strategist | Product, architecture, engineering, data, AI, governance, and documentation collaborators | With approved Case Evidence, influence, summary, or decision-traceability changes | Canonical future architecture; not implemented | Operational Reasoning Model, Operational Case, Architecture, AI Assistant |
| `docs/SCENARIO_SIMULATION_ARCHITECTURE.md` | Strategic product architecture | Define Scenario Branch baselines, assumptions, modeled outputs, uncertainty, validation, AI participation, and promotion boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, data, AI, risk, and documentation collaborators | With approved simulation scope, governance, or scenario semantics | Canonical future architecture; not implemented | Operational Reasoning Model, Operational Case, Case Evidence, AI Capability Roadmap |
| `docs/OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md` | Experience architecture | Define Case entry, progressive naming, investigation orientation, AI partnership, Evidence-family discovery, historical reasoning, progressive disclosure, Case-centered continuity, and cross-environment experiential consistency without redefining source architecture. | Product Architect & AI Strategist | Product, design, architecture, engineering, AI, research, and documentation collaborators | With approved end-to-end Operational Case experience changes | Canonical future experience architecture; not implemented | Owner Journey, Operational Case, Operational Reasoning Model, Case Evidence, Scenario Simulation, AI-first Workspace |
| `docs/PLATFORM_RESPONSIBILITY_MODEL.md` | Product experience architecture | Define complementary Desktop and Mobile roles, capability allocation, shared semantics, synchronization obligations, cross-platform AI behavior, handoff, and Product Review implications. | Product Architect & AI Strategist | Product, architecture, design, engineering, documentation, and AI collaborators | With approved platform-responsibility changes | Canonical future architecture; not implemented | Product Vision, Owner Journey, Mobile Experience Architecture, AI Assistant Architecture, Systems, Architecture |
| `docs/MOBILE_EXPERIENCE_ARCHITECTURE.md` | Product experience architecture | Define mobile's complementary role, intention-led navigation, Search, Capture, continuity, recommendation, notification, offline, handoff, and interaction boundaries. | Product Architect & AI Strategist | Product, architecture, design, engineering, documentation, and AI collaborators | With approved mobile product or interaction architecture changes | Canonical future architecture; not implemented | Product Vision, Owner Journey, AI-first Workspace, Natural Capture, AI Assistant, AI Communication Style Guide, Design System |
| `docs/AI_CAPABILITY_ROADMAP.md` | AI capability planning | Define AI capability hierarchy, dependencies, evolution stages, and recommended maturity placement. | Product Architect & AI Strategist | Product, architecture, delivery, and AI governance | At approved AI capability or sequencing changes | Canonical AI capability plan; does not authorize implementation | Product Vision, Product Maturity, Product Roadmap, AI architecture documents, Documentation Backlog |
| `docs/AI_QUALITY_FRAMEWORK.md` | AI quality governance | Define product-oriented quality dimensions, evidence, qualitative evaluation, and review guidance for implemented AI behavior. | Product Architect & AI Strategist | Product, architecture, engineering, design, AI governance, and capability reviewers | With approved AI quality or evaluation changes | Canonical AI quality standard; does not advance maturity or release | AI Capability Roadmap, future AI Capability Maturity Model, Product Vision, Product Maturity, Team, Product Language |
| `docs/DATA_MODEL.md` | Data | Define implemented entities, fields, relationships, and persistence semantics while identifying approved future contracts that remain unimplemented. | Product Architect | Engineers and reviewers | With model or persistence changes | Canonical | Architecture, Systems, Knowledge Evolution |
| `docs/DEVELOPMENT.md` | Development | Define setup, tooling, and engineering conventions. | Lead Software Engineer | Contributors and AI implementers | With tooling or practice changes | Canonical | Team, Architecture, Product Language |
| `docs/DESIGN_SYSTEM.md` | Design | Define visual tokens, shared components, interaction states, and accessibility conventions. | Design Owner | Designers and frontend engineers | With shared presentation changes | Canonical | Product Language, Architecture |
| `docs/PRODUCT_LANGUAGE.md` | Language | Define terminology, voice, naming, and AI communication. | Design Owner | Product, design, engineering, documentation, AI | With user-facing concepts or language rules | Canonical | Product Vision, Design System, Team |
| `docs/SPRINTS.md` | Delivery | Record approved sprint scope and completion. | Product Owner; maintained by Lead Software Engineer | Product and delivery team | At sprint opening and closure | Canonical | Roadmap, Changelog |
| `docs/CHANGELOG.md` | Delivery history | Record delivered changes by release. | Lead Software Engineer | Users, maintainers, reviewers | At release | Canonical history | Sprints, Git history |
| `docs/DOCUMENTATION_BACKLOG.md` | Governance planning | Stage documentation improvements by product maturity. | Product Architect | Document owners and delivery planning | At documentation milestones | Canonical plan | Documentation Map, Roadmap, Team |
| `docs/DOCUMENTATION_MAP.md` | Documentation governance | Define domain authority, document ownership, catalog status, maintenance rules, consolidation work, and Documentation Definition of Done. | Product Architect | All document owners, reviewers, and AI collaborators | With documentation authority, structure, or lifecycle changes | Canonical documentation authority | Team, Methodology, Documentation Backlog, README |
| `docs/METHODOLOGY.md` | Methodology | Explain how product, architecture, delivery, design, language, documentation, and AI governance operate together. | Product Architect | Entire team and AI collaborators | After material workflow or governance changes | Internal synthesis; source authorities prevail | Team, Development, Architecture, Documentation Map |
| `docs/PROJECT_HEALTH.md` | Governance status | Aggregate current release-readiness evidence and blockers for a named target. | Product Architect | Development team and release decision owners | At Sprint closure, release review, or material evidence change | Internal, non-authoritative snapshot | Product Maturity, Documentation Backlog, Methodology, Team |
| `docs/DECISIONS.md` | Decision history | Preserve approved consequential rationale below the ADR threshold. | Product Architect; entries approved by domain owner | Entire team and future maintainers | At decision time or when a decision is superseded | Canonical decision history; current domain documents prevail | Team, Methodology, Changelog, Architecture Decision Records |
| `docs/adr/README.md` | Architecture decision history | Index long-lived structural technical decisions and preserve their rationale, alternatives, consequences, and supersession history. | Product Architect; ADRs approved by applicable domain owner | Architecture, engineering, security, operations, and future maintainers | At qualifying architectural decisions or supersession | Canonical rationale history; current domain documents prevail | Architecture, Decision Log, Methodology, Documentation Map |
| `docs/adr/0001-protected-ai-runtime-platform.md` | Architecture decision record | Preserve the accepted rationale for a containerized Node.js runtime on Google Cloud Run. | Product Architect & AI Strategist | Architecture, engineering, security, operations, and future maintainers | When superseded or deprecated | Accepted ADR; Protected AI Runtime Platform remains current authority | Protected AI Runtime Platform, AI Runtime Architecture, ADR index |
| `docs/adr/0002-owner-identity-and-session-boundary.md` | Architecture decision record | Preserve the accepted rationale for stable internal Accounts, Workspace Membership, OIDC identity mapping, and server-managed browser sessions. | Product Architect & AI Strategist | Architecture, engineering, security, operations, and future maintainers | When superseded or deprecated | Accepted ADR; Owner Identity Architecture remains current authority | Owner Identity Architecture, Protected AI Runtime Platform, ADR index |
| `docs/adr/0003-google-sign-in-for-v1.md` | Architecture decision record | Preserve the accepted rationale for Google Sign-In behind the provider-neutral v1 identity boundary. | Product Architect & AI Strategist | Architecture, engineering, security, operations, and future maintainers | When superseded or deprecated | Accepted ADR; Owner Authentication Architecture remains current authority | Owner Authentication Architecture, Owner Identity Architecture, ADR index |
| `docs/UI_LANGUAGE.md` | Compatibility | Preserve the former language-document path. | Design Owner | Readers following old references | Temporary | Non-authoritative | Product Language |

## Responsibility matrix

| Area | Accountable | Responsible for maintenance | Consulted |
| --- | --- | --- | --- |
| Repository entry point | Lead Software Engineer | Lead Software Engineer | Product Architect, Design Owner |
| Product Vision and Roadmap | Product Owner | Product Owner | Product Architect, Design Owner, Lead Software Engineer |
| Systems, Architecture, and Data Model | Product Architect | Product Architect and Lead Software Engineer | Product Owner, Design Owner |
| Development guide and Changelog | Lead Software Engineer | Lead Software Engineer | Product Architect |
| Design System and Product Language | Design Owner | Design Owner and Lead Software Engineer | Product Owner, Product Architect |
| Team Governance | Product Owner | Product Owner | All decision owners |
| Quality validation evidence | Product Owner | Assigned Quality Lead | Product Architect, Design Owner, Lead Software Engineer, document owners |
| Sprint Tracker | Product Owner | Lead Software Engineer | Product Architect, Design Owner |
| Documentation Map | Product Architect | Product Architect | All decision owners |

## Documentation lifecycle

```text
Proposed
  → Owner review
  → Approved
  → Canonical
  → Maintained
  → Superseded
  → Compatibility period, when required
  → Archived or removed
```

- Documentation changes follow the approval workflow in Team Governance.
- A feature is incomplete when its affected canonical documentation is stale.
- Compatibility documents must identify their canonical successor.
- Historical Sprint and Changelog records are preserved rather than rewritten.
- Archived documents must state why and when they were superseded.

## Maintenance rules

- Product decisions update Product Vision only when principles or scope change.
- Architecture and data changes update Architecture and Data Model together where
  applicable.
- System-level capability changes update Systems.
- Shared presentation changes update Design System.
- New user-facing concepts update Product Language before or with first use.
- Sprint scope and completion update Sprint Tracker.
- Released changes update Changelog.
- README summarizes and links; it does not duplicate detailed status.

## Documentation Definition of Done

The Documentation Definition of Done applies whenever a feature creates or
modifies canonical documentation. Documentation is complete only when every
applicable criterion below is satisfied.

### Scope and authority

- All affected canonical documents have been identified through this map.
- Each change is made in the document authoritative for that subject.
- Summary documents link to canonical sources rather than duplicating authority.
- The accountable document owner has reviewed material changes in their domain.
- Documentation maintenance introduces no unapproved product, architecture,
  design, language, or governance decision.

### Content completeness

- Documentation accurately describes the approved and implemented outcome.
- Current functionality, future direction, and historical records remain distinct.
- Relevant boundaries, limitations, and unsupported behavior are explicit.
- Examples and status descriptions reflect the actual product.
- Obsolete statements are corrected, superseded, or identified as historical.
- No unintended placeholder language remains.

### Product consistency

- Terminology and user-facing language follow
  [Product Language](PRODUCT_LANGUAGE.md).
- Product principles remain consistent with
  [Product Vision](PRODUCT_VISION.md).
- System responsibilities remain consistent with [Systems](SYSTEMS.md).
- Future work is not described as implemented.
- A new user-facing concept is added to Product Language when required.

### Architecture and data consistency

When applicable:

- architectural boundaries remain consistent with
  [Architecture](ARCHITECTURE.md);
- entities, relationships, derived values, and persistence rules remain consistent
  with [Data Model](DATA_MODEL.md);
- system responsibility and implementation structure are not conflated;
- architectural rationale is recorded at the appropriate level.

### Design and accessibility consistency

When applicable:

- shared visual conventions remain consistent with
  [Design System](DESIGN_SYSTEM.md);
- changed tokens, components, responsive behavior, interaction states, and
  accessibility rules are documented;
- Design System and Product Language guidance do not conflict;
- presentation documentation reflects effective current styles.

### Governance consistency

- Ownership and approval language remains consistent with
  [Team Governance](TEAM.md).
- Documentation does not silently transfer decision authority.
- New documents declare purpose, owner, audience, authority, lifecycle, and
  related documents.
- Superseded documents follow the compatibility or archive process.
- This map is updated when documentation structure or authority changes.

### Planning and delivery records

- [Sprint Tracker](SPRINTS.md) records documentation impact and completion.
- The relevant [Documentation Backlog](DOCUMENTATION_BACKLOG.md) item is updated
  when authorized backlog work is completed.
- [Roadmap](ROADMAP.md) changes only when sequencing or readiness gates change.
- [Changelog](CHANGELOG.md) is updated when documentation accompanies a
  user-visible change, changes an official standard or governance expectation, or
  forms part of a release.
- Historical records are preserved rather than rewritten as current planning.

### Links and structure

- New and changed inbound and outbound links resolve.
- Renamed documents have all repository references updated.
- Relative paths and filename capitalization work in case-sensitive environments.
- Heading hierarchy, tables, and lists render coherently.
- Compatibility documents point to their canonical successor.
- No stale reference to a replaced filename remains.

### Technical validation

- `git diff --check` passes.
- The changed-file list contains only authorized paths.
- Filenames, identifiers, commands, and examples have been verified.
- Temporary review artifacts are excluded.
- Available Markdown and link checks pass.

### Final consistency review

- The diff has been reviewed as one coherent documentation change.
- Duplicate responsibility has not been introduced.
- Canonical documents agree on status, terminology, boundaries, and planning.
- The result is understandable without conversation history or an external
  proposal.
- Intentionally deferred work is recorded rather than silently omitted.

Documentation is considered done only after this sequence completes:

```text
Content updated
  → Authority verified
  → Product and architecture consistency reviewed
  → Links and structure validated
  → Sprint and release records updated
  → Owner review complete
  → git diff --check passed
```

“Documentation written” is not equivalent to “documentation complete.”

## Known consolidation work

- Reduce duplicated delivery-workflow detail in Development; Team remains canonical.
- Keep current status in Systems rather than Roadmap or README.
- Keep product principles in Product Vision, architectural boundaries in
  Architecture, and delivery sequencing in Roadmap.
- Retire `UI_LANGUAGE.md` after archive and redirect-retention rules are approved.
  The consistency review found no active dependent reference; it remains only as a
  recoverable compatibility pointer.
- Do not create one umbrella Learning Architecture from the current material.
  Operational Memory and Knowledge Evolution now own distinct future domains;
  Architecture owns implemented Learning Layer mechanics. Reconsider consolidation
  only if a material responsibility remains unowned after those boundaries stabilize.
- Retain AI Assistant Identity as a synthesis because it explicitly defers to
  source authorities. Retain Owner Journey and Operational Case Experience as
  separate documents: the former owns the whole-product journey, while the latter
  owns Investigation-specific presentation and continuity.
