---
title: Mobile Product Launch & Operations
description: Launch playbook, phased rollouts, incident response, version fragmentation, and sunsetting old versions.
slug: chapter-10
chapter: 10
---

## The Mobile Launch Playbook

| Phase | Activities |
|-------|-----------|
| **T-Minus 4 weeks** | Freeze new features; focus on crash/stability fixes; prepare store listing assets |
| **T-Minus 2 weeks** | Submit to TestFlight / closed track; run through full test matrix |
| **T-Minus 1 week** | Submit for production review; prepare support FAQs and internal release notes |
| **Launch day** | Monitor crash rate, ratings, and support tickets hourly; stage rollout to 5% |
| **T+1 week** | Expand to 100% if metrics are healthy; post-mortem any launch-day incidents |

## Staged Rollouts

Always start at 5–10%. Google Play and App Store both support percentage-based rollouts. Monitor these metrics before expanding:

- Crash-free session rate (>99.5%)
- Rating trajectory (not declining)
- Key funnels (not regressing)
- Support ticket volume (not spiking)

## Incident Response on Mobile

Mobile incidents are harder to fix than web — no "deploy fix and refresh." Build a runbook:

1. **Detect** via crash reporting and rating alerts
2. **Mitigate** — disable the feature via remote config; roll back staged rollout
3. **Fix** — develop, test, submit, wait for review
4. **Communicate** — update store description, reply to reviews, notify affected users
5. **Post-mortem** — add regression tests, improve monitoring

## Version Fragmentation

Users don't all update. Six months after a release, 70–80% of users are on the latest version. Support the last two major versions. Use feature flags to gate features on minimum OS version or app version.

## Deprecating Features

Removing a feature from a mobile app is harder than adding one. Users who rely on it will leave angry reviews. Deprecation process:

1. Announce timeline in-app and via email/notification (3 months notice)
2. Replace or consolidate the feature where possible
3. Degrade gracefully — show read-only view, then remove
4. Monitor support tickets and rating impact during deprecation

## Ongoing Operations

- Weekly crash triage
- Monthly store listing optimisation (A/B test screenshots and descriptions)
- Quarterly app store Q&A review — respond to every review, especially negative ones
- Bi-annual platform guideline audit — both Apple and Google update guidelines yearly

---

> **Start:** [Table of Contents](/fmopm/)
