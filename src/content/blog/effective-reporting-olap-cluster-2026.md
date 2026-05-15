---
title: "Building an Effective Reporting System with an OLAP Cluster"
description: "Architecture patterns for analytical reporting — data modeling, cluster topology, ingestion pipelines, and query optimization for OLAP systems."
date: 2026-05-15
tags: ["olap", "analytics", "database", "architecture", "reporting"]
draft: false
---

Transactional databases (OLTP) are optimised for writes and point lookups. Reporting systems (OLAP) need to scan millions of rows, aggregate across dimensions, and return results in seconds. Trying to run both on the same store eventually breaks — which is why dedicated OLAP clusters exist.

Here is how to design a reporting system that stays fast, fresh, and maintainable.

## Star schema over normalised models

OLAP queries are read-heavy and column-selective. The star schema is the proven data model:

```sql
-- Fact table: one row per measurable event
CREATE TABLE fact_sales (
  id         BIGSERIAL,
  date_key   INTEGER NOT NULL REFERENCES dim_date(id),
  product_key INTEGER NOT NULL REFERENCES dim_product(id),
  store_key  INTEGER NOT NULL REFERENCES dim_store(id),
  quantity   INTEGER NOT NULL,
  amount     NUMERIC(12,2) NOT NULL,
  cost       NUMERIC(12,2) NOT NULL
) ENGINE = MergeTree()
ORDER BY (date_key, product_key, store_key);
```

- **Fact tables** store metrics and foreign keys to dimensions. Keep them narrow — every extra column slows scans.
- **Dimension tables** store descriptive attributes (product name, category, region). They are small, denormalised, and rarely updated.
- **ORDER BY** in the fact table determines the sort key. Choose columns that appear in `WHERE` and `GROUP BY` most frequently.

## Columnar storage is non-negotiable

A columnar store (ClickHouse, DuckDB, Redshift, BigQuery) reads only the columns referenced in a query. If your fact table has 50 columns but a report touches 4, a row-oriented database reads 46× more data from disk. This alone accounts for 10–100× performance differences on analytical workloads.

Key features to look for:
- **Vectorised execution** — processes batches of values, not individual rows.
- **Lightweight compression** — columns with low cardinality compress heavily (run-length encoding, delta encoding).
- **Projections/materialised views** — pre-compute common aggregations.

## Cluster topology

A typical OLAP cluster has three tiers:

```
Ingestion layer → Compute layer → Storage layer
```

**Ingestion** handles streaming (Kafka, Kinesis) and batch (S3, HDFS) data. It buffers, partitions, and distributes writes so the compute layer is not overwhelmed.

**Compute** is a set of stateless or semi-stateless nodes that execute queries. In MPP systems (ClickHouse, Redshift), data is co-located with compute on the same nodes for performance. In disaggregated architectures (Snowflake, BigQuery), compute and storage scale independently — useful for variable workloads.

**Storage** can be local SSD (fastest), network-attached, or object store (cheapest). Object-store-backed systems trade latency for elastic scaling.

## Ingestion patterns

### Batch (daily/hourly loads)

```
Source DB → CDC or full dump → staging bucket → OLAP cluster
```

Use `INSERT INTO ... SELECT` or `COPY` from Parquet files. Batch is simpler to reason about and easier to backfill.

### Streaming (near-real-time)

```
Source DB → Debezium → Kafka → OLAP table
```

Streaming reduces data freshness from hours to seconds. The trade-off is more complex error handling and exactly-once semantics.

Most production systems use **hybrid ingestion**: streaming for recent data (last 24 hours), batch for historical loads and backfills.

## Query optimisation

### Pre-aggregation

The single most impactful optimisation. Create materialised views for common aggregation levels:

```sql
CREATE MATERIALIZED VIEW agg_sales_daily
ENGINE = SummingMergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (date, product_key, store_key)
AS SELECT
  date,
  product_key,
  store_key,
  sum(quantity)  AS total_qty,
  sum(amount)    AS total_amount
FROM fact_sales
GROUP BY date, product_key, store_key;
```

Queries hitting pre-aggregated tables return in milliseconds instead of seconds.

### Partitioning and TTL

Partition by time — it makes dropping old data a metadata operation instead of a delete:

```sql
PARTITION BY toYYYYMM(date_key)
TTL date_key + INTERVAL 2 YEAR DELETE
```

Most OLAP systems support TTL-based expiry natively. Use it to cap storage costs automatically.

### Indexing

OLAP indexes are different from B-trees:
- **Min-max indexes** skip granules that fall outside the query range.
- **Bloom filters** accelerate equality filters on high-cardinality columns.
- **Sparse indexes** (the primary sort key) limit which granules are scanned.

Design the sort key to match your most common filter patterns.

## Handling concurrency

OLAP clusters are shared resources. A single expensive query can saturate CPU and starve other users. Mitigations:

- **Resource groups** — isolate heavy reporting from dashboard queries.
- **Query queues** — limit concurrent queries per user or per priority.
- **Result caching** — cache identical queries for a TTL window.
- **Async queries** — run long queries in the background and poll for results.

## Schema evolution

Fact tables accumulate billions of rows. Changing a column type or adding a new one can be expensive:

- **Additive changes** (new nullable columns, new materialised views) are cheap.
- **Destructive changes** (drop column, change sort key) often require table rebuilds.
- Use **versioned schemas** — land new columns alongside old ones, migrate consumers, then drop.

## Monitoring

Key metrics to track:

- **Query latency** — P50, P95, P99.
- **Rows scanned per query** — high numbers indicate missing pre-aggregation or poor sort key design.
- **Merge backlog** — in MergeTree engines, a pending merge backlog degrades read performance.
- **Disk utilisation per node** — skewed data distribution causes straggler nodes.

## When an OLAP cluster is overkill

A reporting system does not always need a cluster. Consider simpler alternatives:

- **Materialised views on the OLTP database** — works up to millions of rows.
- **DuckDB or SQLite in read-only mode** — suitable for per-tenant reporting.
- **Dedicated read replica** — more capacity without architectural change.

Reach for an OLAP cluster when your fact table exceeds 100 million rows, query latency targets are sub-second, or you need concurrent reporting across teams.

## Conclusion

An effective OLAP reporting system combines a star-schema data model, columnar storage, thoughtful partitioning, pre-aggregation, and resource isolation. Start simple — batch loads and a single node are fine for most teams — and add streaming, clustering, and caching as volume and concurrency grow.

The best reporting system is the one your team can operate confidently at 3 AM.
