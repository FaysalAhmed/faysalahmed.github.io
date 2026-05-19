---
title: Mobile UX & Design Principles
description: Platform-specific design language, navigation patterns, accessibility, and responsive layout.
slug: chapter-05
chapter: 5
---

## Platform Design Languages

- **iOS (HIG):** Flat, translucent, heavy use of gestures (swipe, long press, haptic touch). Navigation via tab bars, navigation bars, and modal sheets.
- **Android (Material Design):** Layered with elevation, bold colour, motion. Navigation via bottom navigation, navigation drawers, and the system back button.

A mobile PM doesn't need to design screens, but must know when the team is violating platform conventions.

## Navigation Patterns

| Pattern | Use Case |
|---------|----------|
| **Tab bar** | Top-level sections (3–5 tabs) |
| **Navigation drawer** | Many sections; used less frequently |
| **Bottom sheet** | Contextual actions without leaving context |
| **Modal** | Focused, short-lived tasks |
| **Stepper / wizard** | Multi-step flows (onboarding, checkout) |

## Thumb-Friendly Zones

Users hold phones in one hand. The natural reach zone is the lower half of the screen. Critical actions (primary CTA, confirm, submit) belong in the bottom third. Navigation belongs at the bottom, not the top.

## Accessibility

- Minimum tap target: 44pt (Apple) / 48dp (Android)
- Support dynamic type and font scaling
- Provide VoiceOver / TalkBack labels for every interactive element
- Test with reduced transparency and bold text settings

## Handling Different Screens

| Device | Key Concern |
|--------|-------------|
| Small phone (SE, <5") | Information density, one-column layouts |
| Large phone (Pro Max, Plus) | Reachability, one-hand operation |
| Tablet | Multi-pane layouts, drag-and-drop, side-by-side |
| Foldable | Seamless continuity between folded and unfolded states |

---

> **Next:** [Chapter 6 — Mobile Product Metrics](/fmopm/chapter-06/)
