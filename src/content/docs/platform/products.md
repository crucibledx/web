---
title: Products
description: All Crucible products — shipped, researched, and planned.
---

Crucible is a platform of focused tools sharing a common infrastructure. Each product maps to a stage in the metalworking process.

## Product overview

| Product     | Type       | Purpose                     | Status               |
| ----------- | ---------- | --------------------------- | -------------------- |
| **Forge**   | CLI        | AI environment config sync  | ✅ Shipped (v0.6.16) |
| **Ember**   | Collector  | AI assistant observability  | 📋 Researched        |
| **Smelt**   | Library    | Shared plugin engine        | 📋 Designed          |
| **Anvil**   | SDK        | Plugin development SDK      | 📋 Designed          |
| **Lathe**   | MCP Server | Forge commands as MCP tools | 📋 Designed          |
| **Foundry** | Web + API  | Plugin registry/marketplace | 📋 Designed          |
| **Cast**    | CLI        | Frontend/embed scaffolding  | 📋 Designed          |

## Shipped

### Forge CLI

The first Crucible product. A command-line tool that syncs shared AI assistant configurations from a central source to every AI tool's expected location, in the right format.

- **12 commands** — init, sync, status, health, config, source management, scheduler, telemetry, uninstall
- **5 assistants** — Claude Code, Cursor, Windsurf, GitHub Copilot, Cline
- **2 source types** — git, local
- **3 layouts** — canonical, pre-structured, hybrid (auto-detected)
- **687 tests**, 6,369 LOC production code

[Forge documentation →](/forge/commands)

### Forge Skills Starter

AI Resources Lifecycle Platform — a convention-over-configuration template for building, testing, and delivering AI agent resources.

- **4 skills, 3 rules, 1 workflow** — ready to use or fork
- **4 meta-skills** — orchestrator pattern for designing, developing, and testing resources
- **4 test specimens** — real project snapshots for testing

[Starter documentation →](/starter/overview)

## Researched

### Ember

Cross-tool AI assistant observability. Prometheus-model collector that instruments AI sessions and pushes metrics to company-controlled backends.

Key insight: Forge manages **what** configs agents get. Ember measures **how** those configs are used. Together they form a closed feedback loop.

![Visibility Gap — without Ember](https://raw.githubusercontent.com/crucibledx/assets/main/ember/diagrams/ember-visibility-gap.svg)

![Forge + Ember Closed Loop](https://raw.githubusercontent.com/crucibledx/assets/main/ember/diagrams/ember-closed-loop.svg)

[Learn more about Ember →](/ember)

## Planned

### Smelt (`@crucibledx/smelt`)

Shared plugin engine library. Will be extracted from Forge when a second consumer (e.g., Cast) exists. No point extracting from one consumer.

### Anvil (`@crucibledx/anvil`)

SDK for third-party plugin development. Provides types, validation, and testing utilities for building Forge/Cast plugins.

### Lathe

MCP server that exposes Forge commands as MCP tools. Enables AI assistants to run Forge operations directly.

### Foundry

Plugin registry and marketplace. Discover, share, and install community-built skills, rules, and workflows.

### Cast

Frontend/embed scaffolding CLI. Uses `@crucibledx/smelt` for plugin infrastructure. Focused on micro-frontend patterns.
