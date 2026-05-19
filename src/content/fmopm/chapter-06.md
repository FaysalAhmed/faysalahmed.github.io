---
title: Mobile Product Metrics
description: Acquisition, activation, retention, referral, revenue (AARRR) adapted for mobile. Cohort analysis, crash rate, and session depth.
slug: chapter-06
chapter: 6
---

## Mobile AARRR Framework

| Stage | Mobile-Specific Metric |
|-------|----------------------|
| **Acquisition** | Installs, store listing conversion rate (impression → install) |
| **Activation** | First session completion, sign-up rate, permission grant rate |
| **Retention** | D1, D7, D30 retention; churn rate; re-engagement rate |
| **Referral** | Share rate, invite acceptance rate, deeplink conversion |
| **Revenue** | ARPU, ARPPU, LTV, subscription retention, IAP conversion |

## Session Metrics

- **Session length:** How long users spend per session. Short sessions signal utility; very short sessions suggest friction.
- **Session depth:** Screens or actions per session. Deeper sessions indicate engagement.
- **Session interval:** Time between sessions. Short interval signals habit; long interval signals low stickiness.

## Crash Rate

The most visible health metric. A crash rate above 1% of active users requires immediate triage. Use Firebase Crashlytics or Sentry to track by OS version, device model, and code path.

## Cohort Analysis

Group users by install week and track retention curves. A flattening retention curve means you've found a sticky user segment. A steep drop after D1 points to poor onboarding or unmet expectations.

## Store Ratings as a Signal

App store ratings directly affect conversion. Track rating trends per version — a drop from 4.5 to 4.0 after a release is a strong signal to roll back or hotfix. Prompt users for ratings at moments of delight, not after crashes.

## Leading vs Lagging Indicators

| Leading | Lagging |
|---------|---------|
| Crash-free session rate | 1-star rating count |
| Onboarding completion | D7 retention |
| Permission acceptance rate | Monthly active users |
| Time-to-first-value | LTV |

---

> **Next:** [Chapter 7 — Growth & Retention for Mobile Apps](/fmopm/chapter-07/)
