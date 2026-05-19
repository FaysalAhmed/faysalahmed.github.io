---
title: App Store Strategy & Submission
description: App Store and Play Store guidelines, review processes, beta testing, and staged rollouts.
slug: chapter-03
chapter: 3
---

## App Store as a Product Surface

Your app store listing is often the first interaction a user has with your product. Screenshots, description, ratings, and the icon all affect conversion from impression to install.

## Apple App Store

- **Guidelines:** Strict — rejection is common for first-time submitters. Common rejection reasons: incomplete metadata, placeholder UI, broken deep links, and insufficient privacy disclosures.
- **Review time:** Typically 24–48 hours. Expedited reviews available for critical bugs.
- **TestFlight:** Up to 10,000 external testers without review for beta builds. Use it for every significant release before going to production.
- **Phased release:** Roll out over 7 days to catch issues early.

## Google Play Store

- **Guidelines:** More permissive but getting stricter (especially around privacy and deceptive behaviour).
- **Review time:** A few hours to a day. Less predictable for policy-related reviews.
- **Internal / closed / open testing:** Three tiers. Open testing requires at least 20 testers for 14 days before production access.
- **Staged rollouts:** Release to 5%, 10%, 25%, 50%, 100% of users. Monitor crash rate and 1-star reviews before expanding.

## Submission Checklist

- Privacy policy URL linked in the store listing
- All required permissions have a rationale
- No placeholder or Lorem Ipsum content
- Screenshots sized correctly for each device class
- App rating set appropriately (4+, 12+, 17+)
- In-app purchases configured and approved

## Handling Rejections

Read the rejection reason carefully. Common fixes:
- **Guideline 2.1 (crash):** Fix the crash, resubmit with a note explaining what was fixed.
- **Guideline 4.2 (minimal functionality):** Add meaningful utility beyond a web view wrapper.
- **Guideline 5.1 (privacy):** Update your privacy policy and permission strings.

Appeal if you believe the rejection is an error — include screen recordings or documentation.

---

> **Next:** [Chapter 4 — Mobile User Research & Discovery](/fmopm/chapter-04/)
