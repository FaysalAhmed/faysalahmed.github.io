---
title: Architecture Patterns and Design
description: Foundational patterns for structuring software systems.
slug: chapter-05
id: fosa-chapter-05
chapter: 5
---

## Layered Architecture

The most widely used pattern. Layers separate concerns hierarchically:

<figure>
<pre>
┌─────────────────────────────────────┐
│         Presentation Layer          │
│   (UI, API endpoints, controllers)  │
├─────────────────────────────────────┤
│       Business Logic Layer          │
│   (services, domain models, rules)  │
├─────────────────────────────────────┤
│        Data Access Layer            │
│   (repositories, DAOs, ORM)         │
├─────────────────────────────────────┤
│            Database                 │
│   (SQL, NoSQL, file storage)        │
└─────────────────────────────────────┘
</pre>
<figcaption>Figure 5.1 — Classic layered architecture. Each layer depends only on the layer below.</figcaption>
</figure>

**Pros:** Simple, familiar, strong separation of concerns.

**Cons:** Can lead to monolithic designs, layers often leak.

## Hexagonal Architecture (Ports & Adapters)

Business logic sits at the centre, isolated from external concerns. Adapters on the outside translate between the core and the outside world.

<figure>
<pre>
                     ┌─────────────┐
                     │   Web UI    │
                     │  (adapter)  │
                     └──────┬──────┘
                            │
┌──────────────┐    ┌───────┴────────┐    ┌──────────────┐
│  PostgreSQL  │◄───┤   Application  │◄───┤   REST API   │
│  (adapter)   │    │    Core (hex)  │    │  (adapter)   │
└──────────────┘    └───────┬────────┘    └──────────────┘
                            │
                     ┌──────┴──────┐
                     │  Message Q  │
                     │  (adapter)  │
                     └─────────────┘
</pre>
<figcaption>Figure 5.2 — Hexagonal architecture. The core is framework-independent; adapters handle external communication.</figcaption>
</figure>

**Pros:** High testability, framework independence, clear boundaries.

**Cons:** More initial structure, can feel abstract for simple systems.

## Event-Driven Architecture

Components communicate asynchronously through events. An event bus or message broker (Kafka, RabbitMQ, SQS) routes events from producers to consumers.

<figure>
<pre>
┌──────────┐   order.created    ┌──────────┐
│  Order   │──────────────────►│  Kafka   │
│ Service  │                   │ (broker) │
└──────────┘                   └────┬─────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
              ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
              │ Inventory │  │  Payment  │  │Notificat'n│
              │ Service   │  │  Service  │  │ Service   │
              └───────────┘  └───────────┘  └───────────┘
</pre>
<figcaption>Figure 5.3 — Event-driven flow: one event triggers multiple downstream consumers.</figcaption>
</figure>

**Pros:** Loose coupling, excellent scalability, good for workflows.

**Cons:** Eventual consistency, harder to debug, schema management overhead.

## CQRS (Command Query Responsibility Segregation)

Separates read and write models. Commands change state; queries read state. Often paired with Event Sourcing.

<figure>
<pre>
┌──────────────┐     ┌──────────────┐
│   Command    │     │    Query     │
│    Model     │     │    Model     │
│  (writes)    │     │   (reads)    │
└──────┬───────┘     └──────┬───────┘
       │                    │
       ▼                    ▼
┌──────────────┐     ┌──────────────┐
│  Write DB    │     │   Read DB    │
│ (normalised) │◄────┤ (denormalis) │
└──────────────┘     └──────────────┘
                           ▲
                           │
                      (sync/event)
</pre>
<figcaption>Figure 5.4 — CQRS separates the write and read paths, each optimised for its workload.</figcaption>
</figure>

## Choosing a Pattern

<figure>
<table>
<thead>
<tr><th>When</th><th>Pattern</th></tr>
</thead>
<tbody>
<tr><td>Simple CRUD, small team</td><td>Layered</td></tr>
<tr><td>Complex domain, high testability needed</td><td>Hexagonal</td></tr>
<tr><td>High scale, async workflows</td><td>Event-Driven</td></tr>
<tr><td>Different read/write volume or shape</td><td>CQRS</td></tr>
</tbody>
</table>
<figcaption>Table 5.1 — Pattern selection guide based on context.</figcaption>
</figure>

## Design Principles

### SOLID

- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

### Beyond SOLID

- **KISS** — prefer simple solutions over clever ones
- **YAGNI** — don't build what you don't need now
- **Law of Demeter** — talk only to your immediate neighbours
- **Separation of Concerns** — each module owns a distinct responsibility

## Architecture Decision Records (ADRs)

Capture every significant decision using this template:

<figure>
<pre>
# Title: &lt;short decision name&gt;

## Context
What is the problem or motivation?

## Decision
What did we decide?

## Consequences
What trade-offs, risks, and benefits follow?
</pre>
<figcaption>Figure 5.5 — Standard ADR template. Keep each record focused on one decision.</figcaption>
</figure>

<div class="callout callout-info">
<strong>ADR best practices</strong>
<p>Store ADRs in version control alongside the code. Use a naming convention like <code>NNNN-title.md</code> (e.g., <code>0001-use-postgresql.md</code>). Keep them short — if an ADR runs longer than one page, the decision scope may be too broad.</p>
</div>

---

> **Next:** [Chapter 6 — Cloud and Infrastructure Architecture](/fosa/chapter-06/)
