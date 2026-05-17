---
title: "Feedback, Explanations, and Control"
description: Designing feedback loops, explanation interfaces, and human-in-the-loop controls for AI systems.
slug: chapter-04
chapter: 4
draft: false
---

## The Feedback Triad

Effective human–AI interaction rests on three connected mechanisms: feedback from the system to the user, explanations of system behaviour, and controls that let the user intervene.

<p class="lead">Without feedback, the user is blind. Without explanations, the user cannot calibrate trust. Without controls, the user is helpless. These three elements must be designed together.</p>

## Feedback: What Happened

Feedback confirms that an action was taken and communicates the outcome. For agentic systems, feedback must be:

- **Timely** — delivered within the user's attention window. Batch summaries work for low-urgency actions; real-time notification is needed for impactful changes.
- **Specific** — "I archived 3 emails" is better than "I cleaned your inbox." Include which emails.
- **Actionable** — link to the outcome so the user can review, undo, or modify.

<figure>
<table>
<thead>
<tr><th>Feedback type</th><th>When to use</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Toast notification</td><td>Quick, low-importance actions</td><td>"Meeting moved to 3 PM"</td></tr>
<tr><td>Activity log</td><td>All actions, available on demand</td><td>Timestamped list with before/after</td></tr>
<tr><td>Digest</td><td>Batch of low-urgency actions</td><td>"Here is what I did this morning"</td></tr>
<tr><td>Exception alert</td><td>Action outside normal bounds</td><td>"I declined an invite on your behalf"</td></tr>
</tbody>
</table>
<figcaption>Table 4.1 — Feedback types for agentic actions.</figcaption>
</figure>

## Explanations: Why It Happened

Explanations serve two purposes: building trust and enabling correction. A good explanation answers:

- **What** the system did.
- **Why** it made that choice (which inputs drove the decision).
- **What if** — counterfactuals that help the user understand boundaries ("If the amount were over $500, I would have asked first").

### Explanation Fidelity

Not every decision needs a full explanation. Match explanation depth to impact:

<div class="callout callout-info">
<strong>Guideline</strong>
<p>Low-impact actions get minimal explanations ("Archived because sender is marketing"). High-impact actions get full reasoning with evidence and alternatives ("Flagged transaction #1023 because amount exceeds daily average by 4× — review recommended").</p>
</div>

## Control: Intervention Mechanisms

Users need multiple ways to intervene:

<figure>
<table>
<thead>
<tr><th>Control</th><th>Scope</th><th>Granularity</th></tr>
</thead>
<tbody>
<tr><td>Undo</td><td>Single action</td><td>Reverses the last operation</td></tr>
<tr><td>Pause</td><td>Agent-wide</td><td>Suspends all autonomous actions until resumed</td></tr>
<tr><td>Override</td><td>Single decision</td><td>User changes the agent's choice mid-task</td></tr>
<tr><td>Recategorise</td><td>Pattern-based</td><td>"This is not spam" — retrains future behaviour</td></tr>
<tr><td>Revoke permission</td><td>Capability-wide</td><td>"Stop accessing my calendar"</td></tr>
</tbody>
</table>
<figcaption>Table 4.2 — Control mechanisms for agentic systems.</figcaption>
</figure>

### The Undo Problem

Undo in an agentic system is harder than in traditional software because actions may have irreversible side effects (a deleted account, a sent message). Design for:

- **Soft actions first** — prefer tentative operations where possible (draft mode, hold before send).
- **Compensating actions** — if undo is impossible, offer a compensating action ("Re-send invitation to the person you removed").
- **Confirmation for irreversible actions** — require explicit user confirmation before any irreversible operation.

## Feedback Loops in Learning Systems

When agents learn from user feedback, every correction trains the model. This creates a feedback loop that can amplify biases or drift over time.

<div class="callout callout-warn">
<strong>Risk</strong>
<p>If a user silently corrects the agent's mistakes by redoing tasks, the agent never learns from those corrections. Design explicit feedback channels — "Was this correct?" prompts, thumbs up/down, or correction forms.</p>
</div>

## Designing the Critique Interface

Users should be able to tell the agent not just *what* went wrong but *why*:

- **One-click corrections** — "Wrong category" with a dropdown of alternatives.
- **Free-text critique** — "Next time, prioritise the CEO's calendar over internal meetings."
- **Preference teaching** — "I prefer Thursday for recurring meetings."

Store preferences explicitly so users can review and edit them later, rather than encoding them as opaque model weights.

## Key Takeaways

- Feedback, explanations, and control form a triad — all three must be present.
- Match explanation depth to action impact.
- Provide layered controls: undo, pause, override, and permission revocation.
- Design compensating actions for irreversible operations.
- Make user feedback visible, editable, and disconnected from model internals when possible.

---

> **Next:** [Chapter 5 — Safety, Robustness, and Failure Modes](/hai/chapter-05/)
