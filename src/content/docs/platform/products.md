---
title: Products
description: All Crucible products — shipped, researched, and planned.
---

Crucible is a platform of focused tools sharing a common infrastructure. Each product maps to a stage in the metalworking process.

## Product overview

| Product     | Type       | Purpose                         | Status               |
|-------------|------------|---------------------------------|----------------------|
| **Forge**   | CLI        | AI environment context compiler | ✅ Shipped (v0.6.24) |
| **Ember**   | Collector  | AI assistant observability      | 🔬 Designing         |
| **Smelt**   | Library    | Shared plugin engine            | 📋 Designed          |
| **Anvil**   | SDK        | Plugin development SDK          | 📋 Designed          |
| **Lathe**   | MCP Server | Forge commands as MCP tools     | 📋 Designed          |
| **Foundry** | Web + API  | Plugin registry/marketplace     | 📋 Designed          |
| **Cast**    | CLI        | Frontend/embed scaffolding      | 📋 Designed          |

## Shipped

### Forge CLI

The first Crucible product. Today it syncs shared AI assistant configurations from a central source to every AI tool's expected location. Next: a **context compiler** that understands skill dependencies, tree-shakes unused content, and optimizes output per agent.

**Current (v0.6):**
- **12 commands** — init, sync, status, health, config, source management, scheduler, telemetry, uninstall
- **5 assistants** — Claude Code, Cursor, Windsurf, GitHub Copilot, Cline
- **2 source types** — git, local (+ Smithery/agentskills.io coming)
- **3 layouts** — canonical, pre-structured, hybrid (auto-detected)
- **687 tests**, 6,369 LOC production code

**Coming (v0.7 — Context Compiler):**
- Skill frontmatter schema with dependencies, tags, context, and priority
- Dependency graph with topological ordering and cycle detection
- Project context detection — auto-detect language/framework from marker files
- Tree-shaking — remove skills irrelevant to the project context
- Token budgeting — enforce per-agent context window limits
- Per-agent emitters — optimized output format per assistant
- Manifest generation — structured build output for Ember telemetry

[Forge documentation →](/forge/commands)

### Forge Skills Starter

AI Resources Lifecycle Platform — a convention-over-configuration template for building, testing, and delivering AI agent resources.

- **4 skills, 3 rules, 1 workflow** — ready to use or fork
- **4 meta-skills** — orchestrator pattern for designing, developing, and testing resources
- **4 test specimens** — real project snapshots for testing

[Starter documentation →](/starter/overview)

## In Design

### Ember

Cross-tool AI assistant observability. Version-aware telemetry for AI coding environments.

Key insight: Forge manages **what** configs agents get. Ember measures **how** those configs are used. Together they form a closed feedback loop.

![Visibility Gap — without Ember](https://github.com/crucibledx/assets/raw/main/ember/diagrams/light/ember-visibility-gap.svg)

![Forge + Ember Closed Loop](https://github.com/crucibledx/assets/raw/main/ember/diagrams/light/ember-closed-loop.svg)

Ember grows progressively in tiers:

| Tier           | Data Source                | What It Answers                               |
|----------------|----------------------------|-----------------------------------------------|
| **0** (exists) | Forge operational events   | "Is Forge working?"                           |
| **1** (v0.1)   | Forge compiler manifest    | "Which skills, versions, agents per project?" |
| **1.5** (v0.1) | OTLP metric export         | "Same data, in Grafana/DataDog"               |
| **2** (v0.2+)  | Langfuse/Helicone import   | "Which skill costs how much?"                 |
| **3** (v0.3+)  | Agent OTEL + file watchers | "Was this skill actually activated?"          |

![Ember Tiered Architecture](https://github.com/crucibledx/assets/raw/main/ember/diagrams/light/ember-tiered-architecture.svg)

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
