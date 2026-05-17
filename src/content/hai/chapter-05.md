---
title: "Safety, Robustness, and Failure Modes"
description: Designing AI agents that fail gracefully, handle edge cases safely, and maintain user protection under uncertainty.
slug: chapter-05
chapter: 5
draft: false
---

## Why Safety Is a UX Concern

Safety in AI systems is often framed as a model-level problem — alignment, guardrails, red-teaming. But from the user's perspective, safety is an interaction problem. The user needs to know: can I trust this system not to harm me when something goes wrong?

<p class="lead">A safe AI agent is not one that never fails — it is one that fails in predictable, recoverable, and transparent ways.</p>

## The Failure Taxonomy

Not all failures are alike. Different failure modes require different mitigation strategies:

<figure>
<table>
<thead>
<tr><th>Failure mode</th><th>Description</th><th>Example</th><th>Severity</th></tr>
</thead>
<tbody>
<tr><td>Hallucination</td><td>Model generates false information confidently</td><td>Agent states a meeting was confirmed when it was not</td><td>High</td></tr>
<tr><td>Misinterpretation</td><td>Model misunderstands user intent</td><td>User says "delete the old version" — agent deletes the current one</td><td>High</td></tr>
<tr><td>Ambiguity</td><td>Multiple valid interpretations</td><td>"Schedule it next week" — Monday or Friday?</td><td>Medium</td></tr>
<tr><td>Context drift</td><td>Model loses track of earlier context</td><td>Forgets a constraint set earlier in the conversation</td><td>Medium</td></tr>
<tr><td>Bias</td><td>Model produces systematically skewed output</td><td>Prioritises certain senders over others without justification</td><td>Medium</td></tr>
<tr><td>Timeout / resource limit</td><td>Task takes too long or exceeds capacity</td><td>Agent stalls while processing a large email thread</td><td>Low</td></tr>
</tbody>
</table>
<figcaption>Table 5.1 — Common failure modes in agentic systems.</figcaption>
</figure>

## Designing for Graceful Degradation

When an agent cannot complete a task, it should degrade along a predictable path:

1. **Attempt** — try the primary path.
2. **Fall back** — try a simpler approach or reduced scope.
3. **Escalate** — ask the user for guidance.
4. **Abort** — stop and clearly communicate what was not done.

```python
def schedule_meeting(request):
    if confidence > 0.9:
        auto_schedule(request)
    elif confidence > 0.6:
        propose_times(request)  # fall back to suggestion
    else:
        escalate(request, reason="cannot determine availability")
```

<div class="callout callout-tip">
<strong>Design pattern</strong>
<p>Always communicate which degradation level the system is operating at. A user who sees "I could not resolve this automatically — here are three options" trusts the system more than one who receives a silent partial completion.</p>
</div>

## Guardrails and Constraints

Guardrails prevent the agent from operating outside safe bounds:

- **Scope guardrails** — limit which systems, data, or actions the agent can access.
- **Value guardrails** — enforce business rules ("never approve invoices over $1,000 without manager approval").
- **Temporal guardrails** — prevent actions outside allowed time windows.
- **Rate guardrails** — cap the number or frequency of actions.

Guardrails should be transparent and user-configurable. A hard-coded guardrail that surprises the user is a trust erosion event.

## The Confirmation Boundary

Not every action needs confirmation, but some do. Define a confirmation boundary based on:

- **Irreversibility** — can the action be undone? If not, require confirmation.
- **Impact** — does the action affect other people or systems? If yes, confirm.
- **Cost** — does the action have financial or reputational cost? If yes, confirm.
- **Novelty** — has the agent performed this action before? If not, confirm.

<div class="callout callout-warn">
<strong>Anti-pattern</strong>
<p>Asking for confirmation on every action defeats the purpose of an agent. Users will develop confirmation fatigue and blindly approve. Reserve confirmations for genuinely high-stakes decisions.</p>
</div>

## Safety Nets

Beyond guardrails, design safety nets that catch failures after they occur:

- **Activity journal** — immutable log of every action the agent takes, with before/after state where possible.
- **Time-travel undo** — ability to roll back to a previous state (e.g., restore calendar to yesterday's state).
- **Kill switch** — immediate suspension of all agent activity with a single action.
- **Human escalation path** — clear way to involve a human operator when the agent cannot resolve an issue.

## Testing for Safety

Test agent interactions against these scenarios:

- Adversarial input — does the user's phrasing cause the agent to bypass guardrails?
- Out-of-distribution requests — what happens when asked to do something clearly outside scope?
- Cascade failures — if one dependent service fails, does the agent handle it gracefully or compound the error?
- Long-running tasks — does the agent maintain context and safety constraints over hours or days?

## Key Takeaways

- Safe agents fail predictably and transparently, not perfectly.
- Design degradation paths: attempt → fall back → escalate → abort.
- Define clear confirmation boundaries based on irreversibility, impact, cost, and novelty.
- Provide safety nets: journal, undo, kill switch, escalation path.
- Test adversarial, out-of-distribution, cascade, and long-running scenarios explicitly.

---

> **Next:** [Chapter 6 — Privacy and Data Considerations](/hai/chapter-06/)
