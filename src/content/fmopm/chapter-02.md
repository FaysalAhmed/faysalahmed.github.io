---
title: Platform Strategy — Native vs Cross-Platform
description: iOS vs Android trade-offs, cross-platform frameworks, and when to build both.
slug: chapter-02
chapter: 2
---

## The Core Question

Should you build separate native apps for iOS and Android, or adopt a cross-platform framework like React Native or Flutter? There's no universal answer — the right choice depends on team, timeline, and product requirements.

## Native Apps

| | iOS (Swift/SwiftUI) | Android (Kotlin/Jetpack Compose) |
|---|---|---|
| **Performance** | Full access to Metal, Core Animation, ARKit | Full access to Vulkan, Camera2, Android NDK |
| **API access** | First-day access to new platform features | Delayed but broader hardware reach |
| **Development speed** | Slower — two codebases | Slower — two codebases |
| **Team cost** | Higher — need iOS + Android specialists | Higher — need iOS + Android specialists |
| **Quality ceiling** | Highest — platform-perfect UX | Highest — platform-perfect UX |

## Cross-Platform Frameworks

### React Native
- Write in React/JavaScript; bridges to native modules.
- Large ecosystem, strong community, proven at scale (Meta, Shopify, Coinbase).
- Performance gap on complex animations; native modules add complexity.

### Flutter
- Write in Dart; renders its own pixels via Skia.
- Consistent UI across platforms, excellent performance for 60fps UIs.
- Smaller ecosystem; custom rendering can feel non-native without work.

### Comparison

| Factor | React Native | Flutter |
|--------|-------------|---------|
| Language | JavaScript/TypeScript | Dart |
| Rendering | Native bridge | Custom engine (Skia) |
| UI fidelity | Near-native with effort | Consistent but distinct |
| Hot reload | Yes | Yes |
| Code sharing (web) | Yes (React Native Web) | Yes (Flutter Web) |
| Maturity | Very mature | Maturing quickly |

## Hybrid Approach

Many teams build the core app in a cross-platform framework but write platform-specific modules for high-value features: camera pipelines, AR experiences, or complex gestures.

## Decision Matrix

| Scenario | Recommended |
|----------|------------|
| Startup with limited team and fast iteration needed | Cross-platform (Flutter or RN) |
| Product relies heavily on platform APIs (camera, health, AR) | Native |
| Two teams available for iOS and Android | Native |
| Need web + mobile code sharing | React Native |
| High-performance game or animation-heavy app | Native (or Flutter for UI games) |

---

> **Next:** [Chapter 3 — App Store Strategy & Submission](/fmopm/chapter-03/)
