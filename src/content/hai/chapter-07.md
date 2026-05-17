---
title: "Organizational Workflows and Governance"
description: Policies, review boards, and operational workflows for deploying and maintaining AI agents in organisations.
slug: chapter-07
chapter: 7
draft: false
---

## From Individual to Organisational

Personal AI agents are a productivity tool. Organisational AI agents — deployed across teams, handling shared workflows, and affecting customers — require governance structures that individual tools do not.

<p class="lead">The organisation that deploys an agent without an owner, a review process, and a rollback plan has not deployed a system — it has started an experiment.</p>

## The AI Agent Lifecycle

Organisational agents should follow a structured lifecycle:

<figure>
<table>
<thead>
<tr><th>Phase</th><th>Activities</th><th>Gate</th></tr>
</thead>
<tbody>
<tr><td>Request</td><td>Team identifies a use case, defines scope and success criteria</td><td>Scope review</td></tr>
<tr><td>Design</td><td>Interaction patterns, guardrails, data access, escalation paths</td><td>Design review</td></tr>
<tr><td>Build & test</td><td>Implementation, safety testing, red-teaming, user testing</td><td>QA sign-off</td></tr>
<tr><td>Staging</td><td>Shadow mode with real users, performance monitoring</td><td>Operational readiness review</td></tr>
<tr><td>Production</td><td>Controlled rollout, monitoring, incident response</td><td>Go-live approval</td></tr>
<tr><td>Review</td><td>Periodic audit of outcomes, errors, user feedback</td><td>Continue / pause / retire</td></tr>
</tbody>
</table>
<figcaption>Table 7.1 — The AI agent lifecycle in an organisational context.</figcaption>
</figure>

Each phase gate requires sign-off from a designated owner. The owner may be a product manager, an engineering lead, or a dedicated AI governance body depending on the agent's risk level.

## Governance Bodies

Effective governance distributes responsibility across three tiers:

- **Tier 1: Team-level** — day-to-day decisions about agent scope, behaviour, and incident response. Owned by the product team that builds and operates the agent.
- **Tier 2: Centre of excellence** — cross-functional group that sets standards, reviews designs, and maintains policies. Includes legal, security, compliance, and UX representation.
- **Tier 3: Executive review** — escalation for high-risk agents or incidents with significant business, legal, or reputational impact.

<div class="callout callout-tip">
<strong>Guideline</strong>
<p>Not every agent needs Tier 3 review. Classify agents by risk: a low-risk agent (internal Q&A bot) needs only Tier 1; a high-risk agent (customer-facing with autonomous financial actions) needs all three tiers.</p>
</div>

## Policy Components

Organisational AI policy should cover:

- **Scope definition** — what tasks the agent may perform, what data it may access, what decisions it may make autonomously.
- **Human oversight** — which actions require human approval, and who is authorised to approve.
- **Incident response** — defined severity levels, escalation paths, communication templates, and post-mortem requirements.
- **Audit and logging** — minimum log retention, access controls on logs, and periodic audit requirements.
- **Vendor management** — if the agent uses third-party models or services, what data is shared and under what terms.

<div class="callout callout-warn">
<strong>Anti-pattern</strong>
<p>Writing policy in isolation from the teams that build and use agents. Policy that does not reflect operational reality will be ignored or circumvented.</p>
</div>

## Onboarding Teams to Agent Platforms

When an organisation provides a shared agent platform (e.g., an internal agent marketplace), onboarding teams should follow a standard process:

1. **Use case registration** — the team describes what the agent will do, who it affects, and what data it needs.
2. **Template selection** — choose from approved agent patterns (confirm-by-exception, shadow mode, etc.).
3. **Guardrail configuration** — define boundaries within platform capabilities.
4. **Testing checklist** — mandatory tests before staging: safety, privacy, performance, bias.
5. **User communication** — notify affected users about the agent's deployment, capabilities, and how to give feedback.

## Monitoring and Observability

Production agents require the same observability as any critical service:

- **Action rate** — how many actions per hour/day, broken down by action type.
- **Error rate** — actions that failed or required escalation.
- **User intervention rate** — how often users override, correct, or pause the agent.
- **Latency** — time from user request to agent action.
- **Feedback sentiment** — aggregate of user ratings and correction patterns.

Dashboards should be visible to the team and reviewed in regular operations meetings.

## Incident Response

When an agent causes harm — misdirects a customer, deletes important data, or makes an inappropriate statement — the organisation needs a pre-defined response:

1. **Detect** — monitoring alert or user report triggers the incident.
2. **Contain** — pause or disable the agent. If the action has already propagated, initiate compensating actions.
3. **Assess** — determine scope: how many users affected, what data involved, what the impact is.
4. **Communicate** — notify affected users with a clear description of what happened and what is being done.
5. **Remediate** — undo actions where possible, compensate where not.
6. **Review** — root cause analysis, update guardrails, improve testing.

## Key Takeaways

- Organisational agents need a structured lifecycle with phase gates and designated owners.
- Distribute governance across three tiers: team, centre of excellence, executive.
- Policy must be practical and co-created with the teams it governs.
- Treat agents as production services — they need monitoring, incident response, and operational reviews.
- Pre-define incident response steps: detect, contain, assess, communicate, remediate, review.

---

> **Next:** [Chapter 8 — Evaluation and Metrics](/hai/chapter-08/)
