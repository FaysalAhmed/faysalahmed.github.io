---
title: Cloud and Infrastructure Architecture
description: Cloud service models, hybrid strategies, cost governance, and infrastructure-as-code.
slug: chapter-06
chapter: 6
---

## Cloud Service Models

<figure>
<table>
<thead>
<tr><th>Model</th><th>You Manage</th><th>Provider Manages</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>SaaS</strong></td><td>Config only</td><td>Everything else</td><td>Salesforce, GitHub</td></tr>
<tr><td><strong>PaaS</strong></td><td>Apps & data</td><td>Runtime, OS, hardware</td><td>Heroku, App Engine</td></tr>
<tr><td><strong>FaaS</strong></td><td>Functions</td><td>Scaling, runtime, infra</td><td>Lambda, Cloud Functions</td></tr>
<tr><td><strong>IaaS</strong></td><td>Apps, data, runtime, OS</td><td>Virtualisation, hardware</td><td>EC2, GCE</td></tr>
</tbody>
</table>
<figcaption>Table 6.1 — Cloud service models ranked by level of abstraction (highest to lowest).</figcaption>
</figure>

<div class="callout callout-tip">
<strong>Guideline</strong>
<p>Prefer higher-level services (PaaS > IaaS) when they fit your constraints. They shift operational burden to the provider. Use IaaS only when you need fine-grained control or the higher-level service doesn't meet compliance or performance requirements.</p>
</div>

## Deployment Strategies

<figure>
<table>
<thead>
<tr><th>Strategy</th><th>Availability</th><th>Latency</th><th>Cost</th><th>Complexity</th></tr>
</thead>
<tbody>
<tr><td>Single region</td><td>Medium</td><td>Low (local)</td><td>Low</td><td>Low</td></tr>
<tr><td>Active-Passive</td><td>High</td><td>Low (failover ~min)</td><td>Medium</td><td>Medium</td></tr>
<tr><td>Active-Active</td><td>Very high</td><td>Low (global)</td><td>High</td><td>High</td></tr>
</tbody>
</table>
<figcaption>Table 6.2 — Deployment strategy comparison across key dimensions.</figcaption>
</figure>

## Infrastructure as Code (IaC)

Treat infrastructure the same way you treat application code:

- **Terraform / OpenTofu** — declarative, stateful, multi-cloud
- **Pulumi** — infrastructure in general-purpose languages (TypeScript, Python, Go)
- **CloudFormation / CDK** — AWS-native
- **Ansible** — configuration management, procedural

### IaC Best Practices

| Practice | Why |
|----------|-----|
| Store state remotely (S3, Terraform Cloud) | Prevents state loss and enables team collaboration |
| Review IaC changes in pull requests | Catches misconfigurations before deployment |
| Use modules | Avoids duplication and enforces standards |
| Tag all resources | Enables cost tracking by team, project, environment |

## Cost Governance

Cloud costs spiral without governance. Establish:

<figure>
<table>
<thead>
<tr><th>Practice</th><th>Impact</th><th>Effort</th></tr>
</thead>
<tbody>
<tr><td>Budgets and alerts</td><td>Prevents bill shock</td><td>Low</td></tr>
<tr><td>Resource tagging</td><td>Enables cost attribution</td><td>Low</td></tr>
<tr><td>Right-sizing instances</td><td>Reduces waste 20-40%</td><td>Medium</td></tr>
<tr><td>Auto-scaling</td><td>Matches capacity to demand</td><td>Medium</td></tr>
<tr><td>Reserved / savings plans</td><td>30-60% discount vs on-demand</td><td>Low</td></tr>
</tbody>
</table>
<figcaption>Table 6.3 — Cost governance practices ranked by impact.</figcaption>
</figure>

## Designing for Resilience

<figure>
<pre>
         ┌──────────┐
         │  Load    │
         │ Balancer │
         └────┬─────┘
              │
        ┌─────┼─────┐
        │     │     │
   ┌────▼──┐ ┌▼───┐ ┌▼────┐
   │ App   │ │App │ │ App │
   │ Inst.1│ │Ins.│ │Ins.3│
   └────┬──┘ └────┘ └─────┘
        │
   ┌────▼────┐
   │Circuit  │
   │Breaker  │──► Downstream Service
   └─────────┘
</pre>
<figcaption>Figure 6.1 — Basic resilient architecture with load balancer, multiple instances, and circuit breaker.</figcaption>
</figure>

The goal is not to prevent all failures — it's to **limit blast radius** and **recover automatically**:

- **Load balancers** — distribute traffic, health checks
- **Auto-scaling groups** — replace failed instances
- **Circuit breakers** — fail fast when downstream is down
- **Retries with backoff** — handle transient failures
- **Bulkheads** — isolate failure to one component

<div class="callout callout-warn">
<strong>Remember</strong>
<p>Resilience is not just about infrastructure. An architecture where a single database failure takes down the entire system is not resilient — regardless of how many app instances you have running.</p>
</div>

---

> **Next:** [Chapter 7 — Security and Data Architecture](/fosa/chapter-07/)
