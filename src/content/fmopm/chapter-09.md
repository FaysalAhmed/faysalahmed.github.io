---
title: Mobile Analytics & Experimentation
description: Instrumenting events, A/B testing on mobile, feature flags, and analytics tooling.
slug: chapter-09
chapter: 9
---

## Instrumenting Mobile Events

Every screen view, tap, swipe, and transaction should be logged. Define a tracking plan before writing code:

```json
{
  "event": "purchase_completed",
  "properties": {
    "product_id": "premium_monthly",
    "price": 9.99,
    "currency": "USD",
    "payment_method": "apple_pay"
  }
}
```

Use a schema registry so iOS, Android, and backend teams log the same event with consistent property names and types.

## Analytics SDKs

| Tool | Strengths |
|------|-----------|
| **Firebase Analytics** | Free, integrates with Crashlytics and Google Ads |
| **Mixpanel** | Powerful cohorts, retention analysis, and user profiles |
| **Amplitude** | Behavioural analytics, funnel analysis, and predictive models |
| **Segment** | Middleware — pipe events to multiple destinations without SDK changes |

Choose one primary tool and avoid logging the same event into five SDKs (performance cost).

## A/B Testing on Mobile

Mobile A/B testing is harder than web because:
- App store review delays experiment deployment.
- Client-side experiments require feature flags and kill switches.
- Statistical significance takes longer with smaller mobile conversion rates.

**Platforms:** Firebase Remote Config, LaunchDarkly, Optimizely.

## Feature Flags

Feature flags decouple deploy from release. On mobile, this is critical for:
- Canary launching new features
- Turning off broken features without a hotfix
- Running A/B experiments
- Gradually rolling out to user segments

## Metrics to Watch During Experiments

- **Primary:** The metric the experiment targets (conversion, retention, revenue)
- **Guardrail:** Crash rate, ANR rate, session length (must not degrade)
- **Secondary:** Downstream effects on other parts of the product

---

> **Next:** [Chapter 10 — Mobile Product Launch & Operations](/fmopm/chapter-10/)
