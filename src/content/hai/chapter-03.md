---
title: "Interaction Patterns for Agents"
description: Design patterns for human interaction with autonomous and semi-autonomous AI agents.
slug: chapter-03
chapter: 3
draft: false
---

## The Spectrum of Autonomy

AI agents exist on a spectrum from fully manual to fully autonomous. Each level implies a different interaction pattern and a different set of design requirements.

<p class="lead">The right level of autonomy depends on task risk, user expertise, and the cost of failure. High-risk tasks need more human involvement; low-risk, repetitive tasks benefit from delegation.</p>

<figure>
<table>
<thead>
<tr><th>Level</th><th>Pattern</th><th>Human role</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>Manual</td><td>Performs all actions</td><td>Standard form entry</td></tr>
<tr><td>1</td><td>Suggest</td><td>Chooses whether to accept</td><td>Autocomplete, spell check</td></tr>
<tr><td>2</td><td>Confirm-by-exception</td><td>Reviews only flagged items</td><td>Email filtering, fraud alerts</td></tr>
<tr><td>3</td><td>Execute with oversight</td><td>Monitors, can intervene</td><td>Meeting scheduling, code review bot</td></tr>
<tr><td>4</td><td>Full autonomy</td><td>Defines goal, reviews outcome</td><td>Automated report generation</td></tr>
</tbody>
</table>
<figcaption>Table 3.1 — Levels of autonomy in human–AI interaction.</figcaption>
</figure>

## Confirm-by-Exception

The most practical pattern for delegating routine tasks. The agent executes actions within a defined scope unless it encounters ambiguity, low confidence, or a boundary condition — at which point it escalates to the user.

```python
def process_invoice(invoice_data):
    if confidence(invoice_data) > 0.95 and amount < APPROVAL_LIMIT:
        auto_approve(invoice_data)
    else:
        escalate_to_user(invoice_data, reason="confidence_threshold")
```

<div class="callout callout-tip">
<strong>Design pattern</strong>
<p>Let the user set their own threshold. A power user might accept 90% confidence for speed; a compliance officer might require 99%.</p>
</div>

## Simulate-Then-Act

Before executing an action with lasting consequences, the agent shows the user what it intends to do and the expected outcome. The user can approve, modify, or reject.

This pattern is effective for:
- **Bulk operations** — "I will archive 47 emails. Here is a sample of 3."
- **Financial actions** — "I will transfer $500 to Savings. Estimated balance after: $2,430."
- **Content publishing** — "Here is the draft post. It will go live at 9 AM and reach approximately 2,000 followers."

## Progressive Autonomy

Trust is earned over time. Start the agent at a lower autonomy level and allow it to earn higher levels through demonstrated competence:

<figure>
<table>
<thead>
<tr><th>Phase</th><th>Pattern</th><th>Duration</th><th>Criteria to advance</th></tr>
</thead>
<tbody>
<tr><td>Observation</td><td>Shadow mode — agent suggests, user decides</td><td>1–2 weeks</td><td>User acceptance rate > 90%</td></tr>
<tr><td>Limited</td><td>Confirm-by-exception with narrow scope</td><td>2–4 weeks</td><td>Fewer than 5 escalations per week</td></tr>
<tr><td>Extended</td><td>Confirm-by-exception with wider scope</td><td>Ongoing</td><td>Error rate below threshold</td></tr>
<tr><td>Full</td><td>Execute with oversight; user sets goals only</td><td>Trust-based</td><td>Consistent performance over months</td></tr>
</tbody>
</table>
<figcaption>Table 3.2 — Progressive autonomy phases.</figcaption>
</figure>

## Delegation with Constraints

Users should be able to delegate tasks with explicit guardrails:

- **Scope constraints** — "Only touch emails from external senders."
- **Time constraints** — "Only act during business hours."
- **Value constraints** — "Do not approve expenses over $200."
- **Approval chains** — "If it involves legal review, escalate to compliance."

<div class="callout callout-warn">
<strong>Common mistake</strong>
<p>Implicit constraints are invisible to users. If the agent has a hard-coded rule ("never delete events with more than 10 attendees"), make that rule visible and editable.</p>
</div>

## Multi-Turn and Stateful Interaction

Unlike search or Q&A, agent interactions are stateful. The agent remembers context across turns. Design implications:

- **State visibility** — show the user what the agent remembers about them.
- **Context resets** — provide a clear way to start fresh.
- **Conversation branching** — allow the user to explore alternatives without losing the primary thread.
- **Interruptibility** — the user should be able to interrupt the agent mid-task with a correction.

## Key Takeaways

- Match autonomy level to task risk and user preference — default to lower autonomy for unfamiliar or high-stakes tasks.
- Confirm-by-exception is the most practical pattern for delegating routine work.
- Progressive autonomy builds trust gradually and gives users a sense of control.
- Make all constraints explicit, visible, and editable.
- Design for stateful, interruptible, multi-turn interaction — agents are not single-query tools.

---

> **Next:** [Chapter 4 — Feedback, Explanations, and Control](/hai/chapter-04/)
