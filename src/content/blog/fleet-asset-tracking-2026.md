---
title: "Building an Open-Source Fleet & Asset Tracking System: Architecture Deep Dive"
description: "Designing a real-time fleet tracking platform with MQTT, InfluxDB, WebSockets, and React — covering the architecture, data model, tech stack decisions, and sprint roadmap for an open-source self-hostable system."
date: 2026-05-22
tags: ["architecture", "iot", "mqtt", "influxdb", "websockets", "real-time", "fleet-tracking", "open-source"]
draft: false
---

Fleet tracking is broken. Most operators rely on expensive SaaS platforms that charge per-vehicle per-month, or batch systems that show you where your trucks were yesterday — not where they are now. GPS telemetry, engine diagnostics, geofence alerts, and driver behaviour data live in silos, making it nearly impossible to get a unified operational picture.

So we set out to build something different: **an open, self-hostable real-time fleet tracking platform** that ingests IoT telemetry via MQTT, stores time-series data in InfluxDB, and streams live updates to a web dashboard over WebSockets.

Here is the architecture, the data model, and the rationale behind every layer.

---

## The Pipeline

The system is a four-stage data pipeline:

```
IoT Device (GPS+CAN) → MQTT Broker → InfluxDB → API Gateway → Web Dashboard
                         ↑                            │
                     Retained messages          WebSocket (JWT)
                     Last-known position        Live updates + alerts
```

### 1. Ingestion — MQTT

Every vehicle-mounted device publishes a compact JSON payload at 1–30 second intervals to a unique topic: `fleet/{vehicle_id}/telemetry`. The broker (Mosquitto for single-node, EMQX if clustering is needed) authenticates devices via TLS client certificates.

Each payload carries lat/lng, speed, heading, ignition state, odometer, battery voltage, engine temperature, and fuel level:

```json
{
  "v": 1,
  "ts": "2026-05-21T10:30:00Z",
  "lat": 23.8103,
  "lng": 90.4125,
  "speed": 45.2,
  "heading": 180,
  "ignition": true,
  "odometer": 123456.7,
  "battery_v": 12.4
}
```

Retained messages give us the last-known position of every vehicle for free — newly connecting clients get instant state without a separate database query.

### 2. Storage — InfluxDB

A bridge service (Telegraf or a custom Go binary) subscribes to `fleet/+/telemetry` and writes raw telemetry into InfluxDB v3 tagged by `vehicle_id`, `fleet_id`, and `device_type`.

Two retention tiers balance cost against queryability:

| Bucket | Retention | Granularity |
|--------|-----------|-------------|
| `telemetry_raw` | 7 days | Full resolution |
| `telemetry_downsampled` | 1 year | Hourly aggregates |

Geofence enter/exit events and trip summaries live in separate measurements, keeping the hot path lean and analytics queries fast.

### 3. Streaming — WebSockets + JWT

The API Gateway (Go with Gorilla WebSocket or Fiber) authenticates clients on connection upgrade using JWT access tokens. Once connected, a client subscribes to one or more vehicle feeds and receives push updates at a configurable rate (minimum every second).

```json
{
  "type": "telemetry_update",
  "vehicle_id": "v-001",
  "data": {
    "lat": 23.8103,
    "lng": 90.4125,
    "speed": 45.2,
    "ts": "2026-05-21T10:30:00Z"
  }
}
```

Alert messages share the same WebSocket connection — speed threshold exceeded, geofence breached, ignition changed, device offline. One connection, two message types.

### 4. Dashboard — React + MapLibre

The frontend is a React app with MapLibre GL JS (open-source alternative to Mapbox). It shows every vehicle on a live map with heading-indicating markers, a detail panel for speed/odometer/driver info, and an alert feed. Future sprints add geofence drawing tools, historical trip playback at 1x–10x speed, and per-trip reports (distance, idle time, max speed, fuel estimate).

---

## Why This Stack?

| Layer | Choice | Why |
|-------|--------|-----|
| MQTT | Mosquitto / EMQX | Purpose-built for IoT; retained messages, QoS, TLS baked in |
| TSDB | InfluxDB v3 | Native downsampling, Flux queries, built for telemetry |
| Gateway | Go | Low-latency WebSocket at scale; Gorilla WebSocket is battle-tested |
| Frontend | React + MapLibre | Lightweight map rendering; no Mapbox API key needed |
| Auth | JWT | Stateless; validated on WS upgrade with zero DB hits |
| Deployment | Docker Compose → K8s | Dev/prod parity; path to production clustering |

---

## What We're Building, Sprint by Sprint

- **Sprint 1 (Weeks 1–3):** Core pipeline — MQTT broker, Telegraf bridge, InfluxDB, and a simulated device publishing test data.
- **Sprint 2 (Weeks 4–6):** Live dashboard — WebSocket gateway with JWT auth, React map with real-time vehicle positions.
- **Sprint 3 (Weeks 7–9):** Alerts & geofences — zone CRUD, an alert engine evaluating rules per event, in-app notifications.
- **Sprint 4 (Weeks 10–12):** History & reports — trip replay on the map, distance/idle/speed reports.
- **Sprint 5 (Weeks 13–14):** Production hardening — TLS everywhere, load testing at 10,000 simulated devices, Docker Compose deploy.

---

## What's Not in v1

We're explicitly keeping scope tight. The first version won't include a mobile driver app, ERP integrations, dashcam video, predictive maintenance, or multi-tenancy. The goal is a rock-solid core pipeline that operators can self-host, extend, and own.

---

## Open Source from Day One

The entire project is open source and developed in the open. Every sprint is tracked with GitHub issues, every feature branches from develop, and every PR squashes into a clean commit history. If this sounds interesting — whether as a contributor or an operator — the codebase is at [github.com/FaysalAhmed/fleet-asset-tracking](https://github.com/FaysalAhmed/fleet-asset-tracking).

The road from a PRD to a production dashboard is long, but the architecture is sound, the stack is proven, and the problem is worth solving.
