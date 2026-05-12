---
title: "The Solution Architect's Role"
description: Responsibilities, mindsets, and career paths for solution architects.
slug: chapter-02
chapter: 2
---

## Responsibilities

A solution architect wears many hats. On any given day you might:

- Facilitate a requirements workshop with product managers
- Sketch a system context diagram on a whiteboard
- Write an Architecture Decision Record (ADR)
- Review a pull request for alignment with the agreed design
- Present a trade-off analysis to a steering committee

The common thread: **connecting business intent with technical execution**.

<figure>
<table>
<thead>
<tr><th>Activity</th><th>Audience</th><th>Frequency</th><th>Artifact</th></tr>
</thead>
<tbody>
<tr><td>Requirements gathering</td><td>Product, stakeholders</td><td>Weekly</td><td>User stories, context diagram</td></tr>
<tr><td>Design sessions</td><td>Engineering team</td><td>Daily / ad-hoc</td><td>ADR, sequence diagram</td></tr>
<tr><td>Architecture review</td><td>Peers, principal architects</td><td>Monthly</td><td>Review notes, risk log</td></tr>
<tr><td>Governance board</td><td>Executives, compliance</td><td>Quarterly</td><td>Roadmap, exception requests</td></tr>
<tr><td>Tech radar / strategy</td><td>CTO, platform team</td><td>Bi-annual</td><td>Tech inventory, migration plan</td></tr>
</tbody>
</table>
<figcaption>Table 2.1 — Typical architect activities across the delivery lifecycle.</figcaption>
</figure>

## Key Mindsets

### Pragmatism over Purity

The best architecture is the one that ships. Avoid over-engineering for hypothetical future requirements. Apply the **rule of three** — if you can't name three concrete use cases for a pattern, don't introduce it yet.

<div class="callout callout-warn">
<strong>Common mistake</strong>
<p>Designing for "every possible future" leads to accidental complexity. Optimise for the known present, not the imagined future. You can always refactor later when real requirements emerge.</p>
</div>

### Trade-offs, Not Silver Bullets

Every technology choice involves trade-offs. A microservices architecture gives you independent deployability at the cost of operational complexity. A monolith gives you simplicity at the cost of scaling granularity. Your job is to make these trade-offs explicit.

### Communication Is Half the Job

A brilliant design that nobody understands is worthless. Invest in:

- **Diagrams** — C4 model (Context, Container, Component, Code) is a good default
- **Decision records** — lightweight ADRs capture context, options, and rationale
- **Presentations** — tailor depth to audience (executives get outcomes, engineers get details)

<figure>
<table>
<thead>
<tr><th>Audience</th><th>Depth</th><th>Format</th><th>Key Question</th></tr>
</thead>
<tbody>
<tr><td>Executive</td><td>High-level outcomes</td><td>Slide deck, 1-pager</td><td>"What does this enable?"</td></tr>
<tr><td>Product team</td><td>Feature scope, timeline</td><td>Walkthrough, roadmap</td><td>"When will it ship?"</td></tr>
<tr><td>Engineering</td><td>Detailed design</td><td>ADR, code example</td><td>"How do I build this?"</td></tr>
<tr><td>Operations</td><td>Deployment, monitoring</td><td>Runbook, topology</td><td>"How do I run this?"</td></tr>
</tbody>
</table>
<figcaption>Table 2.2 — Tailoring communication depth to different audiences.</figcaption>
</figure>

## Career Path

Typical progression: **Developer → Senior Developer → Solution Architect → Principal Architect → Chief Architect**.

At each level the scope widens — from a single component to a system to a portfolio of systems. The technical depth requirement doesn't disappear, but the **communication and strategic thinking** demands grow significantly.

## The First 30 Days

When joining a new project or organisation as a solution architect:

1. **Listen first** — understand the current state before proposing changes
2. **Find the pain** — what keeps the team up at night? Performance? Deployments? Technical debt?
3. **Build trust** — deliver quick, visible wins (a useful diagram, a clarified requirement)
4. **Document your context** — capture assumptions, constraints, and decisions before they're forgotten

<div class="callout callout-tip">
<strong>Pro tip</strong>
<p>Start an "architecture journal" on day one. Record every assumption, decision rationale, and open question. After 30 days you'll have a rich document that informs your first architecture review.</p>
</div>

---

> **Next:** [Chapter 3 — Architecture Frameworks](/fosa/chapter-03/)
