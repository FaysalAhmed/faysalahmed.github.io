---
title: Security and Data Architecture
description: Threat modelling, zero trust, data modelling, storage strategies, and compliance.
slug: chapter-07
id: fosa-chapter-07
chapter: 7
---

## Security Architecture

### Threat Modelling

Identify threats before they become incidents. Use **STRIDE** per component:

<figure>
<table>
<thead>
<tr><th>Threat</th><th>Definition</th><th>Example</th><th>Mitigation</th></tr>
</thead>
<tbody>
<tr><td><strong>S</strong>poofing</td><td>Impersonation</td><td>Fake login credentials</td><td>MFA, certificate-based auth</td></tr>
<tr><td><strong>T</strong>ampering</td><td>Data modification</td><td>Altering DB queries in transit</td><td>TLS, integrity checks</td></tr>
<tr><td><strong>R</strong>epudiation</td><td>Denial of action</td><td>User claims they didn't place order</td><td>Audit logs, digital signatures</td></tr>
<tr><td><strong>I</strong>nfo disclosure</td><td>Data exposure</td><td>API returns sensitive fields</td><td>Encryption, access control</td></tr>
<tr><td><strong>D</strong>enial of service</td><td>Overwhelming the system</td><td>DDoS attack</td><td>Rate limiting, auto-scaling</td></tr>
<tr><td><strong>E</strong>levation of privilege</td><td>Unauthorised access</td><td>User edits another user's data</td><td>RBAC, input validation</td></tr>
</tbody>
</table>
<figcaption>Figure 7.1 — STRIDE threat model. Apply to each component during design reviews.</figcaption>
</figure>

<div class="callout callout-info">
<strong>How to run a threat modelling session</strong>
<p>Walk through each STRIDE category for every component in your architecture diagram. For each threat, decide: Accept, Mitigate, Transfer (e.g., insurance, WAF), or Avoid (redesign). Document the outcome in your ADR.</p>
</div>

### Zero Trust

Trust no one by default. Verify every request regardless of origin.

| Principle | Implementation |
|-----------|---------------|
| Network segmentation | Micro-segmentation limits lateral movement |
| Identity-first | Every request authenticated and authorised |
| Least privilege | Minimum permissions needed for each role |
| Continuous verification | Re-evaluate trust on every request |

### Security Checklist

- Encrypt data at rest and in transit (TLS 1.3+, AES-256)
- Hash and salt passwords (bcrypt, Argon2)
- Use API keys or OAuth2 — never share credentials
- Implement rate limiting and input validation
- Keep dependencies updated (automated scanning)

## Data Architecture

### Data Modelling

<figure>
<table>
<thead>
<tr><th>Model</th><th>Best For</th><th>ACID</th><th>Schema</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td>Relational</td><td>Structured, complex queries</td><td>Yes</td><td>Fixed</td><td>PostgreSQL, MySQL</td></tr>
<tr><td>Document</td><td>Flexible JSON documents</td><td>Configurable</td><td>Dynamic</td><td>MongoDB, Couchbase</td></tr>
<tr><td>Key-Value</td><td>High throughput, simple lookups</td><td>Limited</td><td>None</td><td>Redis, DynamoDB</td></tr>
<tr><td>Graph</td><td>Relationships, recommendations</td><td>Varies</td><td>Flexible</td><td>Neo4j, Dgraph</td></tr>
<tr><td>Time-series</td><td>Metrics, logs, events</td><td>Limited</td><td>Fixed</td><td>InfluxDB, TimescaleDB</td></tr>
</tbody>
</table>
<figcaption>Table 7.1 — Database model comparison for different use cases.</figcaption>
</figure>

### Storage Tiers

<figure>
<table>
<thead>
<tr><th>Tier</th><th>Access Pattern</th><th>Medium</th><th>Cost</th></tr>
</thead>
<tbody>
<tr><td><strong>Hot</strong></td><td>Frequently accessed</td><td>SSD, in-memory cache</td><td>High</td></tr>
<tr><td><strong>Warm</strong></td><td>Less frequent</td><td>Standard disk</td><td>Medium</td></tr>
<tr><td><strong>Cold</strong></td><td>Archival</td><td>Object storage (S3 Glacier)</td><td>Low</td></tr>
</tbody>
</table>
<figcaption>Table 7.2 — Storage tier characteristics. Match the tier to the data's access pattern to optimise cost.</figcaption>
</figure>

### Data Governance

- **Classification** — tag data by sensitivity (public, internal, confidential, restricted)
- **Retention policies** — how long to keep data, when to purge
- **Audit logging** — who accessed what, when
- **GDPR / CCPA compliance** — right to access, right to deletion, data portability

<div class="callout callout-warn">
<strong>Compliance is not optional</strong>
<p>Data governance requirements vary by industry (finance, healthcare, public sector) and geography (GDPR in EU, CCPA in California, LGPD in Brazil). Determine applicable regulations early — retrofitting data controls is expensive.</p>
</div>

---

> **Next:** [Chapter 8 — Integration, APIs, and Microservices](/fosa/chapter-08/)
