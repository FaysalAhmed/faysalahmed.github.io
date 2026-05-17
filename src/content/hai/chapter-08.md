---
title: "Evaluation and Metrics"
description: How to measure the quality, safety, and user experience of AI agents in production.
slug: chapter-08
chapter: 8
draft: false
---

## What to Measure

Evaluation of AI agents is different from evaluation of traditional software. Features either work or they do not. Agent behaviour is probabilistic, context-dependent, and changes over time as models update and user patterns shift.

<p class="lead">A good evaluation framework captures three dimensions: task completion (did it work?), interaction quality (was the experience good?), and safety (did anything go wrong?).</p>

## Task Completion Metrics

The primary measure of an agent is whether it accomplishes the user's goal:

<figure>
<table>
<thead>
<tr><th>Metric</th><th>Definition</th><th>How to measure</th></tr>
</thead>
<tbody>
<tr><td>Task success rate</td><td>% of tasks completed without user intervention</td><td>Automated from action logs</td></tr>
<tr><td>First-attempt success</td><td>% of tasks completed on the first try</td><td>Track retry and escalation events</td></tr>
<tr><td>Time to completion</td><td>Time from request to finished action</td><td>Compare to manual baseline</td></tr>
<tr><td>User correction rate</td><td>% of tasks where user modified the result</td><td>Log override and undo events</td></tr>
<tr><td>Escalation rate</td><td>% of tasks escalated to human</td><td>Count escalation triggers</td></tr>
</tbody>
</table>
<figcaption>Table 8.1 — Core task completion metrics for agent evaluation.</figcaption>
</figure>

## Interaction Quality Metrics

Beyond task completion, measure how the interaction *feels*:

- **Feedback submission rate** — are users bothering to rate or correct the agent? Low submission may indicate poor feedback design, not satisfaction.
- **Feedback sentiment** — aggregate thumbs up/down or star ratings.
- **Intervention effort** — how many clicks or keystrokes does it take to correct an error? Lower is better.
- **Abandonment rate** — how often do users give up on the agent and do the task manually?
- **Adoption persistence** — does usage increase, decrease, or plateau over weeks and months?

<div class="callout callout-tip">
<strong>Design pattern</strong>
<p>Build instrumentation into the agent from day one. If you cannot tell whether the agent is getting better or worse over time, you cannot improve it systematically.</p>
</div>

## Safety and Harm Metrics

Safety metrics track negative outcomes:

- **Harm incidents** — number of events where the agent caused financial, reputational, or emotional harm.
- **Guardrail violations** — how often the agent attempted an action outside its defined scope.
- **Bias incidents** — systematically different treatment of user groups.
- **Recovery time** — time from incident detection to remediation.

These metrics should be reviewed at the organisational governance level, not just by the product team.

## User Satisfaction Surveys

Quantitative metrics miss what users *feel*. Supplement with qualitative instruments:

- **Trust survey** — "I trust this agent to act on my behalf" (1–5 scale).
- **Control survey** — "I feel in control of what this agent does" (1–5 scale).
- **Transparency survey** — "I understand why this agent makes the decisions it does" (1–5 scale).
- **Net Promoter Score** — "Would you recommend this agent to a colleague?"

<div class="callout callout-warn">
<strong>Anti-pattern</strong>
<p>Measuring only task success rate and ignoring user sentiment. An agent that completes 95% of tasks but makes users feel anxious or out of control will eventually be abandoned.</p>
</div>

## A/B Testing Agent Behaviour

Changes to agent behaviour should be tested like any product change:

- **Shadow comparison** — new agent version runs in parallel with the current version; compare outcomes without user impact.
- **User segment rollout** — roll out changes to a small user segment first, measure all metrics, then expand.
- **Holdout groups** — keep a control group on the old version to measure relative improvement.

Statistical significance matters. Agent improvements can be small per-interaction but compound across thousands of interactions.

## Continuous Evaluation Pipeline

Evaluation should not be a point-in-time activity. Build a continuous pipeline:

```
Production logs → feature extraction → metric computation → dashboard → alerting
```

- **Daily metrics** — task success, error rates, latency.
- **Weekly reviews** — trend analysis, incident review, feedback sentiment.
- **Monthly deep dives** — cohort analysis, bias checks, survey results.
- **Quarterly governance review** — overall performance against goals, decisions about scope changes.

## Key Takeaways

- Measure three dimensions: task completion, interaction quality, and safety.
- Instrument the agent from day one — you cannot improve what you do not measure.
- Supplement quantitative metrics with qualitative surveys about trust, control, and transparency.
- Test behaviour changes with shadow comparisons, user segments, and holdout groups.
- Build a continuous evaluation pipeline with daily, weekly, monthly, and quarterly rhythms.

---

> **Next:** [Chapter 9 — Case Studies](/hai/chapter-09/)
