---
title: Requirements & Prioritization
description: Writing effective specs and using prioritization frameworks to decide what to build.
slug: chapter-05
chapter: 5
---

## Writing Good Requirements

A well-written requirement answers:
- **Who** is this for?
- **What** problem does it solve?
- **What** does success look like?
- **What** are the edge cases and constraints?

### User Stories

> As a **[user type]**, I want to **[action]** so that **[benefit]**.

User stories are a *placeholder for conversation*, not a detailed spec. Pair them with acceptance criteria.

### Acceptance Criteria

Use the **Given / When / Then** format:

```
Given a user is on the checkout page
When they enter an invalid coupon code
Then they see an inline error message
And the total is unchanged
```

## Prioritization Frameworks

### RICE

| Factor | Question |
|--------|----------|
| **Reach** | How many users will this impact per time period? |
| **Impact** | How much will this move the needle? (scale: 0.25–3) |
| **Confidence** | How sure are we about the estimates? (scale: 0–100%) |
| **Effort** | How many person-days will this take? |

**RICE Score = (Reach × Impact × Confidence) / Effort**

### MoSCoW

| Category | Meaning |
|----------|---------|
| **Must have** | Critical for launch / viability |
| **Should have** | Important but not critical |
| **Could have** | Nice to have |
| **Won't have** | Explicitly out of scope |

### Opportunity Scoring

Ask users: How important is X? How satisfied are you with X?

**Opportunity = Importance − Satisfaction**

Bigger gap = bigger opportunity.

## Avoiding Sunk Cost

- Prioritise based on **expected value**, not how much work has been done
- Kill features that don't show impact — even if you've invested heavily
- Celebrate learning (pivots, kill decisions) as much as shipping

---

> **Next:** [Chapter 6 — Product Development Process](/fopm/chapter-06/)
