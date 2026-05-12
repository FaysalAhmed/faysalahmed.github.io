---
title: Architecture Frameworks
description: Overview of TOGAF, Zachman, SAFe, and lightweight alternatives.
slug: chapter-03
chapter: 3
---

## Why Use a Framework?

Architecture frameworks provide a common language, a structured process, and reusable templates. They help ensure consistency across teams and projects. However, they are tools — not goals.

<figure>
<table>
<thead>
<tr><th>Framework</th><th>Best For</th><th>Process</th><th>Ceremony</th></tr>
</thead>
<tbody>
<tr><td>TOGAF</td><td>Large enterprises, regulated</td><td>ADM (step-by-step)</td><td>High</td></tr>
<tr><td>Zachman</td><td>Taxonomy & classification</td><td>None (classification only)</td><td>Medium</td></tr>
<tr><td>SAFe</td><td>Agile at scale</td><td>ART, PI Planning</td><td>High</td></tr>
<tr><td>Lean / Lightweight</td><td>Startups, small teams</td><td>ADR + C4 + Event Storming</td><td>Low</td></tr>
</tbody>
</table>
<figcaption>Table 3.1 — Comparison of architecture frameworks along key dimensions.</figcaption>
</figure>

## TOGAF (The Open Group Architecture Framework)

**Best for:** Large enterprises, regulated industries, formal architecture teams.

TOGAF's core is the **ADM (Architecture Development Method)** — a step-by-step process covering:

- Preliminary phase (framework setup)
- Architecture Vision
- Business, Data, Application, Technology architectures
- Opportunities and migration planning
- Governance

**Pros:** Comprehensive, widely recognised, vendor-neutral.

**Cons:** Heavy ceremony, can be slow, overwhelming for small teams.

## Zachman Framework

**Best for:** Taxonomy and classification of architectural artefacts.

Zachman is a 6×6 matrix (six interrogatives × six perspectives) that categorises architectural descriptions. It doesn't prescribe a process — just a way to organise thinking.

<figure>
<table>
<thead>
<tr><th></th><th>Contextual</th><th>Conceptual</th><th>Logical</th><th>Physical</th><th>Detailed</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>Inventory</td><td>Business entity</td><td>Data model</td><td>Schema</td><td>Records</td></tr>
<tr><td><strong>How</strong></td><td>Process list</td><td>Business flow</td><td>App logic</td><td>System design</td><td>Programs</td></tr>
<tr><td><strong>Where</strong></td><td>Locations</td><td>Business geography</td><td>Network</td><td>Topology</td><td>Addresses</td></tr>
<tr><td><strong>Who</strong></td><td>Org chart</td><td>Roles & responsibilities</td><td>Security</td><td>Access control</td><td>Identities</td></tr>
<tr><td><strong>When</strong></td><td>Events</td><td>Business cycle</td><td>Scheduling</td><td>Timing</td><td>Triggers</td></tr>
<tr><td><strong>Why</strong></td><td>Goals</td><td>Business strategy</td><td>Rules</td><td>Constraints</td><td>Decisions</td></tr>
</tbody>
</table>
<figcaption>Figure 3.1 — Simplified Zachman framework matrix showing interrogative rows and perspective columns.</figcaption>
</figure>

**Pros:** Excellent for ensuring coverage, useful as a checklist.

**Cons:** No process guidance, abstract, can feel academic.

## SAFe (Scaled Agile Framework)

**Best for:** Organisations practising agile at scale.

SAFe includes architectural guidance within its Agile Release Train (ART) concept. Architects participate in PI Planning, define enablers, and guide Non-Functional Requirements.

**Pros:** Integrates architecture with agile delivery, practical ceremonies.

**Cons:** Prescriptive, can feel rigid, opinionated about team structure.

## Lightweight Alternatives

For most teams — especially startups and mid-size companies — a full framework is overkill. Consider:

- **ADR-first** — capture decisions as lightweight Architecture Decision Records with no formal process
- **C4 + Event Storming** — use C4 for static structure and Event Storming for behavioural modelling
- **Lean Architecture** — just enough structure to align the team, evolved iteratively

<div class="callout callout-tip">
<strong>Recommendation</strong>
<p>Start with ADR + C4 diagrams. Add ceremony only when you feel the pain of not having it — not before. Most teams never outgrow lightweight approaches.</p>
</div>

## Choosing a Framework

Apply the CORE framework to framework selection itself:

<figure>
<table>
<thead>
<tr><th>CORE Pillar</th><th>Question</th></tr>
</thead>
<tbody>
<tr><td>Constraints</td><td>What governance, regulatory, or contractual requirements exist?</td></tr>
<tr><td>Outcomes</td><td>What problems are you actually trying to solve?</td></tr>
<tr><td>Risks</td><td>What happens without a framework? What if you adopt a heavy one?</td></tr>
<tr><td>Evolvability</td><td>Can you start light and add ceremony later if needed?</td></tr>
</tbody>
</table>
<figcaption>Table 3.2 — Using CORE to evaluate which framework (if any) fits your context.</figcaption>
</figure>

In most cases, **start with the lightest approach that provides enough structure** and scale up only when the pain of not having more ceremony exceeds the pain of having it.

---

> **Next:** [Chapter 4 — Requirements and Stakeholder Management](/fosa/chapter-04/)
