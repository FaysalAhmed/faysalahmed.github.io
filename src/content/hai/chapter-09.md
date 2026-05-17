---
title: "Case Studies"
description: Real-world examples of human–AI interaction design across scheduling, customer support, content moderation, and personal finance.
slug: chapter-09
chapter: 9
draft: false
---

## Case Study 1: Meeting Scheduling Agent

**Context:** An AI agent that coordinates meeting times across participants' calendars, sends invitations, and handles rescheduling.

<p class="lead">This is the most common agent use case in enterprise settings. It illustrates nearly every design principle in this book — scope definition, progressive autonomy, graceful degradation, and feedback loops.</p>

### Design Decisions

- **Autonomy level:** Confirm-by-exception (Level 2). The agent proposes times; if all participants are free and the meeting is within policy, it books automatically. Conflicts or policy violations escalate to the user.
- **Scope:** Read free/busy for all participants. Create and modify events on the organiser's calendar only.
- **Failure mode handling:** If the agent cannot find a common time within the next two weeks, it escalates with a summary of attempted ranges and each participant's availability density.

### Observed Outcomes

| Metric | Pre-agent | With agent |
|--------|-----------|------------|
| Time to schedule | 4.2 minutes | 0.8 minutes |
| Rescheduling requests | 23% of meetings | 11% of meetings |
| User corrections | — | 7% of bookings |
| Escalation rate | — | 12% |

The 7% correction rate primarily involved location and agenda details, not timing. Users reported higher satisfaction when the agent handled timing and they focused on content.

### Lesson

Progressive autonomy worked well here. The agent started in suggestion mode for two weeks, then graduated to confirm-by-exception. Users who went through the onboarding phase had higher trust scores and lower correction rates.

## Case Study 2: Customer Support Triage Agent

**Context:** An AI agent that categorises incoming support tickets, suggests responses, and auto-replies to routine inquiries.

### Design Decisions

- **Autonomy level:** Full autonomy for Level 1 tickets (password resets, account status); confirm-by-exception for Level 2; suggestion only for Level 3 (billing disputes, cancellations).
- **Transparency:** Every auto-reply includes the tag "AI-generated" and a one-click path to speak with a human.
- **Failure mode:** If confidence is below 85%, the ticket is routed to human support with the agent's suggested category and draft response attached.

### Observed Outcomes

| Metric | Value |
|--------|-------|
| Tickets auto-resolved | 34% |
| Human escalation rate | 18% |
| User satisfaction (auto-resolved) | 4.2 / 5.0 |
| Average handle time reduction | 2.3 minutes per ticket |

### Lesson

The confidence threshold was critical. Initially set at 90%, it resolved only 22% of tickets. Lowering it to 85% increased auto-resolution to 34% with no measurable drop in satisfaction. The agent's draft responses also reduced human agent handle time even when escalation occurred.

## Case Study 3: Content Moderation Assistant

**Context:** An AI assistant that flags potentially harmful user-generated content for human moderators, with suggested action labels.

### Design Decisions

- **Autonomy level:** Suggestion only (Level 1). The assistant never takes action — it surfaces content with a severity score, violation category, and suggested action. Human moderators make the final decision.
- **Feedback loop:** Moderators can mark the assistant's suggestion as correct, incorrect, or uncertain. Correct labels reinforce; incorrect labels trigger a review by the ML team.
- **Fairness monitoring:** Accuracy metrics are tracked per demographic group. Disparities trigger an automated alert to the governance team.

### Observed Outcomes

| Metric | Without assistant | With assistant |
|--------|------------------|----------------|
| Content reviewed per hour | 45 items | 128 items |
| Moderator agreement rate | — | 89% |
| False positive rate | 4.1% | 3.4% |
| False negative rate | 6.7% | 4.2% |

### Lesson

The suggestion-only pattern preserved moderator autonomy while increasing throughput nearly 3×. The key design choice was making disagreement easy — a single click to override — which kept moderators engaged rather than fatigued.

## Case Study 4: Personal Finance Agent

**Context:** An agent that monitors spending, categorises transactions, alerts users to unusual activity, and initiates savings transfers.

### Design Decisions

- **Autonomy level:** Execute with oversight (Level 3) for routine savings transfers within limits; confirm-by-exception for unusual transaction alerts; suggestion only for budget advice.
- **Privacy:** All transaction data processed locally where possible. Aggregated patterns used for model improvement with explicit opt-in.
- **Safety net:** Daily spending limit of $500 for automated actions. Any transfer over that amount requires user confirmation.

### Observed Outcomes

| Metric | Value |
|--------|-------|
| Savings transfers initiated | 89% auto-approved |
| Fraud alerts caught | 94% |
| False fraud alerts | 12% (compared to 28% industry average) |
| User retention at 6 months | 71% |

### Lesson

The explicit spending limit and daily notification summary were the most-valued features in user surveys. Users wanted to know what the agent did without being interrupted for every action. The daily digest pattern — a single notification instead of 20 — was the highest-impact interaction design decision.

## Key Takeaways

- Match autonomy level to task complexity and risk — one agent may operate at multiple levels for different sub-tasks.
- Progressive onboarding (shadow → limited → full) builds trust and reduces correction rates.
- Confidence thresholds are powerful levers — tune them based on outcome data, not intuition.
- The suggestion-only pattern (no autonomous action) is effective for high-stakes decisions where human judgement is primary.
- Batch feedback (daily digests) reduces interruption while maintaining transparency.

---

> **Next:** [Chapter 10 — Future Directions](/hai/chapter-10/)
