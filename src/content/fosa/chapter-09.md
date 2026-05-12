---
title: "DevOps and Architecture Documentation"
description: CI/CD pipelines, environment strategy, observability, and keeping documentation alive.
slug: chapter-09
chapter: 9
---

## CI/CD Pipelines

A good pipeline provides fast feedback and repeatable deployments.

<figure>
<pre>
┌──────┐   ┌──────┐   ┌──────┐   ┌────────┐   ┌────────┐
│ Lint │──►│ Test │──►│Build │──►│Deploy  │──►│Release │
│      │   │      │   │      │   │Staging │   │  Prod  │
└──────┘   └──────┘   └──────┘   └────────┘   └────────┘
   │          │          │            │
   ▼          ▼          ▼            ▼
 SAST     Unit +      Compile,    Smoke
 scan    Integr.    Container.   Tests
</pre>
<figcaption>Figure 9.1 — CI/CD pipeline stages. Fail fast by running cheap checks before expensive ones.</figcaption>
</figure>

### Pipeline Principles

| Principle | Why |
|-----------|-----|
| Fail fast | Run cheapest, fastest checks first (lint → test → build) |
| Immutable artefacts | Build once, promote the same artefact through environments |
| Idempotent deployments | Running the same pipeline twice produces the same result |

## Environment Strategy

<figure>
<table>
<thead>
<tr><th>Environment</th><th>Purpose</th><th>Data</th><th>Deploy Trigger</th></tr>
</thead>
<tbody>
<tr><td><strong>Dev</strong></td><td>Local development</td><td>Synthetic / anonymised</td><td>Local build</td></tr>
<tr><td><strong>Test/CI</strong></td><td>Automated testing</td><td>Synthetic</td><td>Branch push</td></tr>
<tr><td><strong>Staging</strong></td><td>Pre-production validation</td><td>Anonymised subset</td><td>Merge to main</td></tr>
<tr><td><strong>Production</strong></td><td>Live</td><td>Real</td><td>Manual or scheduled release</td></tr>
</tbody>
</table>
<figcaption>Table 9.1 — Typical environment hierarchy. Keep environments as similar as possible.</figcaption>
</figure>

## Observability

Monitoring tells you something is wrong. Observability lets you ask *why*.

### Three Pillars

<figure>
<table>
<thead>
<tr><th>Pillar</th><th>What</th><th>Example Tooling</th></tr>
</thead>
<tbody>
<tr><td><strong>Logs</strong></td><td>Discrete events with metadata</td><td>ELK, Loki, CloudWatch</td></tr>
<tr><td><strong>Metrics</strong></td><td>Aggregated measurements over time</td><td>Prometheus, Grafana</td></tr>
<tr><td><strong>Traces</strong></td><td>Request flow across services</td><td>OpenTelemetry, Jaeger</td></tr>
</tbody>
</table>
<figcaption>Figure 9.2 — The three pillars of observability. Each answers different questions about system behaviour.</figcaption>
</figure>

### Key Metrics (USE Method)

| Metric | What It Tells You | Target |
|--------|-------------------|--------|
| **Latency** (p50, p95, p99) | How fast is the system responding? | Define per endpoint |
| **Traffic** (req/s) | How much load is the system handling? | Trend over time |
| **Errors** (rate, 5xx) | Is the system functioning correctly? | < 1 % |
| **Saturation** (CPU, memory, connections) | Is the system nearing capacity? | < 80 % |

## Architecture Documentation

Documentation rots when it's disconnected from reality. Keep it alive:

<figure>
<table>
<thead>
<tr><th>Technique</th><th>How</th><th>Why It Works</th></tr>
</thead>
<tbody>
<tr><td><strong>ADRs</strong></td><td>Capture decisions with context</td><td>Documents <em>why</em>, not just <em>what</em></td></tr>
<tr><td><strong>Diagrams as code</strong></td><td>PlantUML, Mermaid, Structurizr</td><td>Version-controlled, reviewable</td></tr>
<tr><td><strong>README as living doc</strong></td><td>Update when the system changes</td><td>Single source of truth for new joiners</td></tr>
<tr><td><strong>Lightweight RFCs</strong></td><td>Propose changes before building</td><td>Feedback early, shared ownership</td></tr>
</tbody>
</table>
<figcaption>Table 9.2 — Documentation techniques that stay relevant over time.</figcaption>
</figure>

<div class="callout callout-info">
<strong>Minimum viable documentation</strong>
<p>For any non-trivial system, maintain these four artefacts: a <strong>system context diagram</strong>, an <strong>architecture overview</strong> (C4 level 2-3), an <strong>ADR decision log</strong>, and an <strong>operational runbook</strong>.</p>
</div>

---

> **Next:** [Chapter 10 — Architecture Evaluation and Emerging Trends](/fosa/chapter-10/)
