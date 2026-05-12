---
title: Introduction to Solution Architecture
description: Understanding the foundations of solution architecture and the CORE framework.
slug: chapter-01
chapter: 1
---

## What Is Solution Architecture?

Solution architecture sits between enterprise architecture (the "big picture" of strategy, standards, and roadmaps) and detailed implementation. It answers the question: *given a specific business problem, what system design best solves it within the constraints of the organisation?*

A solution architect is responsible for:

- Defining the high-level structure of a system
- Making technology choices aligned with business goals
- Balancing functional requirements with quality attributes (scalability, security, maintainability, cost)
- Communicating the design to developers, operations, and executives

## The CORE Framework

Throughout this book we refer to **CORE** — a simple mental model for solution architecture.

<figure>
<table>
<thead>
<tr><th>Letter</th><th>Pillar</th><th>Focus</th></tr>
</thead>
<tbody>
<tr><td><strong>C</strong></td><td><strong>Constraints</strong></td><td>Budget, timeline, regulations, legacy systems, team skills</td></tr>
<tr><td><strong>O</strong></td><td><strong>Outcomes</strong></td><td>Business goals, success metrics, user needs</td></tr>
<tr><td><strong>R</strong></td><td><strong>Risks</strong></td><td>Technical debt, single points of failure, security threats, unknowns</td></tr>
<tr><td><strong>E</strong></td><td><strong>Evolvability</strong></td><td>Future-proofing, modularity, upgrade paths, experimentation</td></tr>
</tbody>
</table>
<figcaption>Figure 1.1 — The CORE framework: every architectural decision should be traceable to at least one of these pillars.</figcaption>
</figure>

<div class="callout callout-tip">
<strong>Guideline</strong>
<p>When evaluating a technology choice, map your reasoning to CORE. If a decision doesn't clearly connect to any pillar, it may be based on habit rather than analysis.</p>
</div>

## Why Solution Architecture Matters

Without intentional architecture, systems tend toward:

- **Entropy** — unmanaged dependencies, copy-paste patterns, growing maintenance cost
- **Brittleness** — small changes break seemingly unrelated parts
- **Opacity** — no one understands how the system works as a whole

Solution architecture introduces deliberate structure to counteract these forces.

<figure>
<table>
<thead>
<tr><th>Force</th><th>Effect</th><th>Architecture Response</th></tr>
</thead>
<tbody>
<tr><td>Entropy</td><td>Code quality decays over time</td><td>Defined boundaries, ADRs, governance</td></tr>
<tr><td>Brittleness</td><td>Changes cause unexpected failures</td><td>Loose coupling, encapsulation, testing</td></tr>
<tr><td>Opacity</td><td>No shared mental model of the system</td><td>Diagrams, documentation, reviews</td></tr>
</tbody>
</table>
<figcaption>Figure 1.2 — How architecture counters the natural decay of software systems.</figcaption>
</figure>

## The Scope of This Book

We cover the full arc of solution architecture:

1. **Frameworks and methods** (Chapters 3-4)
2. **Design and patterns** (Chapter 5)
3. **Infrastructure and operations** (Chapters 6, 9)
4. **Cross-cutting concerns** — security, data, integration (Chapters 7-8)
5. **Evaluation and evolution** (Chapter 10)

<div class="callout callout-info">
<strong>How to use this book</strong>
<p>Each chapter ends with practical takeaways you can apply immediately. Read sequentially for a full overview, or jump to individual chapters as needed. Cross-references point to related content throughout.</p>
</div>

---

> **Next:** [Chapter 2 — The Solution Architect's Role](/fosa/chapter-02/)
