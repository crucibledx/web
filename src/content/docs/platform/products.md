---
title: Products
description: Crucible products for coding-harness resources and agent observability.
---

Crucible is a platform of focused open-source tools. Each product integrates with existing coding harnesses and backends.

## Product overview

| Product     | Type           | Purpose                            | Status              |
| ----------- | -------------- | ---------------------------------- | ------------------- |
| **Forge**   | CLI            | Resource sync for coding harnesses | ✅ Shipped (v0.7.0) |
| **Ember**   | OTel Collector | Cross-harness agent tracing        | 🚧 In development   |
| **Smelt**   | Library        | Shared plugin engine               | 📋 Designed         |
| **Anvil**   | SDK            | Plugin development SDK             | 📋 Designed         |
| **Lathe**   | MCP Server     | Forge commands as MCP tools        | 📋 Designed         |
| **Foundry** | Web + API      | Plugin registry/marketplace        | 📋 Designed         |
| **Cast**    | CLI            | Frontend/embed scaffolding         | 📋 Designed         |

## Shipped

### Forge CLI v0.7.0

Forge distributes skills, rules, and workflows from Git or local sources to coding harnesses. It writes native paths and formats, previews changes, detects drift, and supports scheduled syncs.

Install with npm, Homebrew, or Scoop. Standalone binaries and an install script are also available.

**Current capabilities:**

- **12 commands** — init, sync, status, health, config, source management, scheduler, telemetry, uninstall
- **5 coding harnesses** — Claude Code, Cursor, Windsurf, GitHub Copilot, Cline
- **2 source types** — Git and local directories
- **3 layouts** — canonical, pre-structured, and hybrid, auto-detected
- **Transactional writes** — dry-run, backups, drift detection, and rollback with explicit incomplete-recovery reporting

**Roadmap:**

- **v0.8** — Agent Plugins 1.0 packages delivered through Droid and Claude Code's native plugin systems. Local and pinned Git sources, lockfiles, content hashes, and per-harness variants.
- **v0.8.x** — Plugin management commands, drift reporting, marketplace catalog emission, and harness load checks.
- **v0.9** — Compiler release. The compiler specification is planned separately; detailed capabilities are not yet approved.

[Forge documentation →](/forge/commands)

### Forge Skills Starter

A convention-based template for building, testing, and delivering agent skills, rules, and workflows.

- Shared resource conventions for skills, rules, and workflows
- Meta-skills for designing, developing, and testing resources
- Real project specimens for type-aware testing

[Starter documentation →](/starter/overview)

## In development

### Ember

Ember is OpenTelemetry for coding agents. It is written in Go as a custom OpenTelemetry Collector distribution.

One binary runs as an agent on each machine, with an optional gateway for merging machines. Harness adapters combine native telemetry with local session records. Deterministic IDs connect sessions, subagents, and tool calls into trace trees across processes and machines.

The v1 design includes:

- **Droid and Claude Code adapters** — the initial coding harnesses
- **Cross-harness work attribution** — `ember.work.id` joins work done for the same ticket
- **Usage and tool context** — tokens, Droid credits, Claude Code cost, and MCP server and tool names
- **Human attribution** — who started and participated in agent work
- **Standard OTLP export** — traces, logs, and metrics sent to an existing backend
- **Privacy by default** — metadata only, content capture off, and explicit attribute allowlists
- **Grafana dashboards** — Agent tree, Overview, Tools and MCP, and Cost

Ember does not replace coding harnesses or observability backends. It connects their telemetry and exports to the backend you already run.

[Learn more about Ember →](/ember)

## Planned

### Smelt (`@crucibledx/smelt`)

Shared plugin engine library. It will be extracted from Forge when a second consumer needs it.

### Anvil (`@crucibledx/anvil`)

SDK for third-party plugin development. Provides types, validation, and testing utilities for building Forge and Cast plugins.

### Lathe

MCP server that exposes Forge commands as MCP tools.

### Foundry

Plugin registry and marketplace for discovering and sharing community resources.

### Cast

Frontend and embed scaffolding CLI. Uses `@crucibledx/smelt` for plugin infrastructure.
