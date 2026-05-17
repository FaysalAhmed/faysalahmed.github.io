---
title: "Mental Models and Trust"
description: How people form mental models of AI systems and what builds or erodes trust in autonomous agents.
slug: chapter-02
chapter: 2
draft: false
---

## The Mental Model Gap

When a user opens a familiar application, they already know roughly what to expect: buttons respond to clicks, forms save data, and undo reverses the last action. AI agents break this expectation because their behaviour is probabilistic, context-dependent, and sometimes non-deterministic.

<p class="lead">Users build mental models from every interaction. When an agent behaves unexpectedly, the mental model fractures — and trust erodes faster than it was built.</p>

A mental model is the user's internal understanding of how a system works, what it can do, and how it will behave in different situations. For traditional software, mental models transfer well between applications. For AI agents, every new capability requires updating the model.

<div class="callout callout-info">
<strong>Key insight</strong>
<p>Users do not need to understand how an AI works internally. They need an accurate behavioural model — what the system will do, when it will ask for help, and how to correct it when it is wrong.</p>
</div>

## Dimensions of Trust

Trust in AI systems is multi-dimensional. Users calibrate trust across several axes simultaneously:

<figure>
<table>
<thead>
<tr><th>Dimension</th><th>Question the user asks</th><th>Erosion trigger</th></tr>
</thead>
<tbody>
<tr><td><strong>Competence</strong></td><td>Can it do the task correctly?</td><td>Obvious errors, low confidence on easy tasks</td></tr>
<tr><td><strong>Reliability</strong></td><td>Does it work consistently?</td><td>Non-determinism, intermittent failures</td></tr>
<tr><td><strong>Transparency</strong></td><td>Can I see what it is doing?</td><td>Opaque actions, missing rationale</td></tr>
<tr><td><strong>Accountability</strong></td><td>Who is responsible when it fails?</td><td>No undo, no audit trail, no escalation path</td></tr>
<tr><td><strong>Benevolence</strong></td><td>Does it have my interests in mind?</td><td>Misaligned goals, unexpected side effects</td></tr>
</tbody>
</table>
<figcaption>Table 2.1 — The five dimensions of trust in human–AI interaction.</figcaption>
</figure>

## Calibrated Trust

The goal is not maximum trust — it is *calibrated* trust: the user's trust level matches the system's actual capability.

Over-trust is dangerous because users stop verifying agent outputs. Under-trust leads to constant overriding, negating the productivity benefits of delegation.

<div class="callout callout-tip">
<strong>Design guideline</strong>
<p>Communicate confidence along with every output. A system that says "I am 95% confident this is correct" helps the user calibrate trust. One that always projects certainty invites over-trust or abrupt loss of confidence when it errs.</p>
</div>

## Building Mental Models Through Onboarding

First interactions shape the mental model disproportionately. Onboarding should establish:

- **Scope** — what the agent can and cannot do. Explicit "out of scope" examples prevent false expectations.
- **Failure modes** — show what happens when the agent is uncertain or when it makes a mistake.
- **Recovery paths** — demonstrate undo, correction, and escalation before the user needs them.

<figure>
<table>
<thead>
<tr><th>Onboarding pattern</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Guided walkthrough</td><td>Step-by-step introduction with safe defaults</td><td>"Let me show you how I handle meeting scheduling"</td></tr>
<tr><td>Shadow mode</td><td>Agent acts but does not execute; user reviews</td><td>"Here is what I would have done — approve or modify?"</td></tr>
<tr><td>Progressive disclosure</td><td>Capabilities unlock as trust is demonstrated</td><td>Start with read-only, add write access later</td></tr>
<tr><td>Exception demonstration</td><td>Deliberately show failure and recovery</td><td>"Watch what happens when I cannot resolve a conflict"</td></tr>
</tbody>
</table>
<figcaption>Table 2.2 — Onboarding patterns for building accurate mental models.</figcaption>
</figure>

## Trust Recovery

Even well-designed agents make mistakes. Trust recovery follows a predictable pattern:

1. **Acknowledge** — explicitly name the error without deflection.
2. **Explain** — provide the context that led to the mistake.
3. **Remediate** — undo the action or offer compensation.
4. **Prevent recurrence** — describe what will change to avoid the same error.

<div class="callout callout-warn">
<strong>Anti-pattern</strong>
<p>Silently correcting an error without informing the user destroys trust faster than the original mistake. Users interpret silence as hiding failures.</p>
</div>

## Key Takeaways

- Users build mental models from behaviour, not architecture — design for predictable, observable actions.
- Trust is multi-dimensional: competence, reliability, transparency, accountability, and benevolence all matter.
- Aim for calibrated trust, not maximum trust. Over-trust causes unchecked failures; under-trust defeats automation.
- First-run onboarding is the highest-leverage trust-building moment.
- Trust recovery requires explicit acknowledgment, explanation, remediation, and prevention.

---

> **Next:** [Chapter 3 — Interaction Patterns for Agents](/hai/chapter-03/)
