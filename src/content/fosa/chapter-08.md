---
title: "Integration, APIs, and Microservices"
description: API design, event-driven integration, service decomposition, and microservice pitfalls.
slug: chapter-08
id: fosa-chapter-08
chapter: 8
---

## API Design

<figure>
<table>
<thead>
<tr><th>Protocol</th><th>Data Format</th><th>Best For</th><th>Streaming</th></tr>
</thead>
<tbody>
<tr><td><strong>REST</strong></td><td>JSON, XML</td><td>CRUD, public APIs, simple request-response</td><td>No</td></tr>
<tr><td><strong>GraphQL</strong></td><td>JSON (query language)</td><td>Complex UIs, multiple data sources, mobile apps</td><td>Subscriptions</td></tr>
<tr><td><strong>gRPC</strong></td><td>Protocol Buffers (binary)</td><td>Internal service-to-service, high-perf, real-time</td><td>Yes (native)</td></tr>
</tbody>
</table>
<figcaption>Figure 8.1 — API protocol comparison. Choose the right protocol for each interface boundary.</figcaption>
</figure>

### REST

Resource-oriented, stateless, uses standard HTTP methods.

```http
GET    /orders          # List orders
POST   /orders          # Create order
GET    /orders/{id}     # Get order detail
PATCH  /orders/{id}     # Update order
DELETE /orders/{id}     # Delete order
```

### GraphQL

Single endpoint, client specifies exactly what data it needs.

```graphql
query {
  order(id: "123") {
    id, status, items { product { name } }
  }
}
```

### gRPC

Binary protocol, service contracts defined in `.proto` files, supports streaming.

```protobuf
service OrderService {
  rpc GetOrder (GetOrderRequest) returns (Order);
  rpc ListOrders (ListOrdersRequest) returns (stream Order);
}
```

<div class="callout callout-tip">
<strong>API-first design</strong>
<p>Define the API contract before implementation. This forces clarity about what the system does and enables parallel front-end and back-end development. Use OpenAPI (REST), GraphQL SDL, or protobuf as your contract language.</p>
</div>

## Event-Driven Integration

Instead of one service calling another directly, services **emit events** and **react to events**.

<figure>
<pre>
┌──────────────┐
│    Order     │
│   Service    │
└──────┬───────┘
       │ order.created
       ▼
┌──────────────┐
│    Kafka     │
│   (Broker)   │
└──────┬───────┘
       │
       ├────────────────┬──────────────┐
       ▼                ▼              ▼
┌──────────┐    ┌────────────┐  ┌────────────┐
│Inventory │    │Notification│  │ Analytics  │
│ Service  │    │  Service   │  │  Service   │
└──────────┘    └────────────┘  └────────────┘
</pre>
<figcaption>Figure 8.2 — Event-driven integration: the <code>order.created</code> event fans out to multiple independent consumers.</figcaption>
</figure>

**Pros:** Loose coupling, many consumers, async.

**Cons:** Eventual consistency, debugging harder, schema evolution.

<div class="callout callout-warn">
<strong>Schema management</strong>
<p>Use a schema registry (e.g., Confluent Schema Registry) to manage event schema evolution. Without it, producers and consumers silently drift apart, causing runtime failures that are hard to diagnose.</p>
</div>

## Microservices

### When to Decompose

| Indicator | Description |
|-----------|-------------|
| Team friction | Teams can't move without stepping on each other |
| Different scaling needs | Some features need more resources than others |
| Clear bounded contexts | Well-defined domain boundaries exist |

### When NOT To

- Team is small (< 10 people)
- Domain is simple CRUD
- You haven't identified clear service boundaries yet

<div class="callout callout-tip">
<strong>Start with a modular monolith</strong>
<p>Extract services only when the pain of the monolith exceeds the pain of distribution. A well-structured monolith with clear module boundaries is easier to maintain, deploy, and reason about than a distributed mess.</p>
</div>

### Common Pitfalls

| Pitfall | Symptom | Prevention |
|---------|---------|------------|
| Distributed monolith | Tight coupling across services | Clear bounded contexts, async where possible |
| Network chaos | No circuit breakers, retries | Resilience patterns (timeouts, bulkheads) |
| Data inconsistency | Distributed transactions everywhere | Embrace eventual consistency, saga pattern |
| Over-splitting | Any feature touches 5+ services | Start coarse, split based on measured need |

<figure>
<pre>
        ┌──────────┐    ┌──────────┐    ┌──────────┐
        │  Auth    │    │  Order   │    │ Payment  │
        │  Service │◄──►│  Service │◄──►│ Service  │
        └──────────┘    └──────────┘    └──────────┘
              │
        ┌─────┴─────┐
        │  User     │
        │  Service  │
        └───────────┘
</pre>
<figcaption>Figure 8.3 — Microservice interaction. Each service owns its data and communicates via APIs or events.</figcaption>
</figure>

---

> **Next:** [Chapter 9 — DevOps and Architecture Documentation](/fosa/chapter-09/)
