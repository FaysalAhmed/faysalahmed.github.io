---
title: Requirements and Stakeholder Management
description: Gathering, analysing, and prioritising requirements while managing stakeholder expectations.
slug: chapter-04
chapter: 4
---

## The Two Types of Requirements

<figure>
<table>
<thead>
<tr><th>Type</th><th>Definition</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td><strong>Functional</strong></td><td>What the system must <em>do</em></td><td>Process an order, generate a report, authenticate a user</td></tr>
<tr><td><strong>Non-functional (NFRs)</strong></td><td>How the system must <em>behave</em></td><td>&lt; 200 ms response time, 99.9 % uptime, PCI-DSS compliant</td></tr>
</tbody>
</table>
<figcaption>Table 4.1 — Functional vs non-functional requirements.</figcaption>
</figure>

<div class="callout callout-warn">
<strong>Watch out</strong>
<p>Ignoring NFRs is the most common cause of architectural failure. A system that meets every functional requirement but crashes under load, leaks data, or cannot be deployed is not successful.</p>
</div>

## Gathering Requirements

### Techniques

| Technique | Best For | Time Investment |
|-----------|----------|----------------|
| Interviews | Uncovering hidden needs from key stakeholders | 30-60 min each |
| Workshops | Aligning groups, discovering conflicts | 2-4 hours |
| Document analysis | Understanding existing systems, SLAs, contracts | Varies |
| Event Storming | Complex domains with many business events | 2-6 hours |
| User story mapping | Visualising user journeys end-to-end | 2-4 hours |

### The RINSE Technique

A simple checklist for each requirement:

- **R** — *Relevant* to the business outcome?
- **I** — *Independent* of implementation (what, not how)?
- **N** — *Negotiable* (not a hard constraint)?
- **S** — *Specific* enough to test?
- **E** — *Estimated* (rough size known)?

## Managing Trade-offs

Requirements often conflict. Faster delivery may mean less flexibility. Higher security may mean worse UX. Use a **trade-off matrix** to make these explicit:

<figure>
<table>
<thead>
<tr><th>Decision</th><th>Benefit</th><th>Cost</th><th>Risk</th></tr>
</thead>
<tbody>
<tr><td>Managed database (RDS)</td><td>Reduced ops burden</td><td>Vendor lock-in, higher cost</td><td>Medium</td></tr>
<tr><td>Self-hosted database</td><td>Full control, lower cost</td><td>Ops overhead, scaling effort</td><td>High</td></tr>
<tr><td>Serverless functions</td><td>No infra management</td><td>Cold starts, vendor coupling</td><td>Low</td></tr>
<tr><td>Kubernetes</td><td>Portability, ecosystem</td><td>Operational complexity</td><td>Medium</td></tr>
</tbody>
</table>
<figcaption>Table 4.2 — Example trade-off matrix for deployment infrastructure decisions.</figcaption>
</figure>

## Stakeholder Management

### Stakeholder Map

Identify every group that cares about the system:

<figure>
<table>
<thead>
<tr><th>Group</th><th>Cares About</th><th>Key Concern</th></tr>
</thead>
<tbody>
<tr><td><strong>Sponsors</strong></td><td>Budget and timeline</td><td>ROI, delivery date</td></tr>
<tr><td><strong>Users</strong></td><td>Usability and performance</td><td>Does it make my job easier?</td></tr>
<tr><td><strong>Operations</strong></td><td>Reliability and observability</td><td>Can I keep it running?</td></tr>
<tr><td><strong>Security</strong></td><td>Compliance and threat posture</td><td>Are we exposed?</td></tr>
<tr><td><strong>Developers</strong></td><td>Clarity and autonomy</td><td>Can I build this without friction?</td></tr>
</tbody>
</table>
<figcaption>Figure 4.1 — Key stakeholder groups and their primary concerns.</figcaption>
</figure>

### Communication Plan

<figure>
<table>
<thead>
<tr><th>Stakeholder</th><th>Frequency</th><th>Format</th><th>Focus</th></tr>
</thead>
<tbody>
<tr><td>Sponsors</td><td>Monthly</td><td>Slide deck</td><td>Budget, timeline, risks</td></tr>
<tr><td>Product team</td><td>Weekly</td><td>Walkthrough</td><td>Feature alignment</td></tr>
<tr><td>Developers</td><td>Ongoing</td><td>ADRs, diagrams</td><td>Design decisions</td></tr>
<tr><td>Operations</td><td>Per release</td><td>Runbooks</td><td>Deployment, monitoring</td></tr>
</tbody>
</table>
<figcaption>Table 4.3 — Sample communication cadence by stakeholder group.</figcaption>
</figure>

<div class="callout callout-tip">
<strong>Pro tip</strong>
<p>Create a RACI matrix (Responsible, Accountable, Consulted, Informed) for every major architectural decision. It prevents surprises and ensures the right people are involved at the right time.</p>
</div>

---

> **Next:** [Chapter 5 — Architecture Patterns and Design](/fosa/chapter-05/)
