---
title: "Privacy and Data Considerations"
description: Privacy-by-design principles for AI agents — data minimisation, consent, retention, and user data rights.
slug: chapter-06
chapter: 6
draft: false
---

## The Data Asymmetry Problem

AI agents require data to function — calendar entries, email content, browsing history, payment records. This creates a fundamental asymmetry: the agent knows more about the user than any single human assistant ever did.

<p class="lead">Privacy in agentic systems is not just about security. It is about whether the user understands what data the agent holds, how it is used, and whether they feel in control of it.</p>

## Data Minimisation

Collect the minimum data needed for the task, and nothing more:

- **Scope-limited access** — a calendar-scheduling agent does not need access to email content. Request permissions at the granularity of specific resources.
- **Ephemeral processing** — process data in memory where possible; do not store what you do not need.
- **Aggregation by default** — prefer aggregated or anonymised data over raw personal information.

<figure>
<table>
<thead>
<tr><th>Principle</th><th>Question to ask</th><th>Practice</th></tr>
</thead>
<tbody>
<tr><td>Purpose limitation</td><td>Do we need this data for the stated function?</td><td>Explicitly define data use per feature</td></tr>
<tr><td>Data minimisation</td><td>Can we do this with less data?</td><td>Request minimum scope, use aggregation</td></tr>
<tr><td>Storage limitation</td><td>How long do we keep this?</td><td>Set TTLs, auto-purge, user-delete</td></tr>
<tr><td>Access control</td><td>Who else can see this?</td><td>Encrypt, log access, isolate tenants</td></tr>
</tbody>
</table>
<figcaption>Table 6.1 — Privacy-by-design principles applied to agent systems.</figcaption>
</figure>

## Consent and Permission Models

Agentic systems require a permission model that is more dynamic than traditional OAuth scopes:

- **Granular permissions** — "Read calendar" is too broad. Split into "read free/busy," "read event details," "create events," "modify events," "delete events."
- **Just-in-time permissions** — request access when the agent needs it, not at installation.
- **Revocable permissions** — one-click revocation with immediate effect.
- **Expiring permissions** — temporary grants that auto-expire ("Allow access to my inbox for the next 24 hours").

<div class="callout callout-info">
<strong>Pattern</strong>
<p>Use a permission dashboard where users can see every data source the agent has access to, when it last accessed it, and revoke access with one click. This dashboard is a trust artifact as much as a control surface.</p>
</div>

## Data Retention and Deletion

Agents accumulate data over time — preferences, history, learned patterns. Define clear retention policies:

- **Activity logs** — retain for a fixed window (30–90 days) unless the user opts for longer.
- **Learned preferences** — retain until explicitly deleted by the user.
- **Training data** — do not use user interaction data for model training without explicit opt-in.
- **Cross-session memory** — allow users to view, edit, and delete what the agent remembers across sessions.

<div class="callout callout-warn">
<strong>Anti-pattern</strong>
<p>Storing user data indefinitely "for a better experience" without transparency or deletion options. Users should be able to say "forget everything about project X" and have the agent comply fully.</p>
</div>

## Transparency About Model Usage

Users should know when their data is being used to train or fine-tune models:

- **Disclosure** — clearly state whether interactions are used for training.
- **Opt-out** — provide a simple, permanent opt-out from training data use.
- **Retroactive deletion** — allow users to request deletion of past data from training sets (even if full retraining is impractical, the request must exist).

## Third-Party Data and API Access

When agents act across services (calendar, email, CRM, Slack), each integration introduces privacy considerations:

- **Data leakage across services** — ensure data from one connected service is not exposed to another without explicit permission.
- **API token security** — store tokens with encryption at rest and in transit. Rotate tokens regularly.
- **Audit logging** — log every API call the agent makes on behalf of the user, with timestamp, endpoint, and data scope.

## Cross-User Interactions

Some agents coordinate between users — scheduling meetings, assigning tasks, sharing documents. This introduces additional privacy complexity:

- **Reveal minimisation** — when suggesting meeting times, reveal only free/busy, not event details.
- **Consent for shared actions** — if the agent sends a message on behalf of the user, the recipient should know it was agent-sent.
- **Data boundaries** — ensure User A's agent does not expose User A's data to User B's agent beyond the minimum needed for collaboration.

## Key Takeaways

- Collect the minimum data needed; request access just-in-time at the most granular level.
- Provide a transparent permission dashboard with one-click revocation.
- Define clear retention policies and honour deletion requests immediately.
- Disclose training data usage and provide opt-out.
- Prevent data leakage across third-party integrations and across users.
- Treat the permission model as a trust interface, not just a security measure.

---

> **Next:** [Chapter 7 — Organizational Workflows and Governance](/hai/chapter-07/)
