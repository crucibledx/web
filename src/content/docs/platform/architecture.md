---
title: Platform Architecture
description: Crucible product architecture, plugin delivery, and OpenTelemetry design.
---

## Focused tools with clear boundaries

Crucible uses a platform of focused tools rather than a universal CLI. Forge and the planned plugin-based products use TypeScript and Bun. Shared plugin infrastructure can be extracted when a second product needs it.

Ember is the deliberate exception. It is a telemetry pipeline, not a plugin-based CLI, so it uses Go and the OpenTelemetry Collector directly.

Each product is useful alone. Files and open protocols connect them without requiring a Crucible-hosted service.

## Forge

Forge v0.7.0 is a TypeScript and Bun CLI compiled into a single binary. It uses three layers:

- **Domain** — pure types, sync logic, transforms, and schemas
- **Application** — command handlers and orchestration
- **Infrastructure** — filesystem, Git, configuration, prompts, and scheduling

Forge currently syncs canonical `skills/`, `rules/`, and `workflows/` resources, as well as pre-structured harness directories.

### Plugin delivery in v0.8

The approved v0.8 design adopts Agent Plugins 1.0 packages and the native plugin systems in Droid and Claude Code. Forge will validate packages, resolve local or pinned Git sources, emit harness-specific output, and record locked content and output hashes.

Droid and Claude Code load the installed plugins. Forge does not reimplement their plugin runtimes or host a registry. Later v0.8.x work adds producer marketplace catalogs and load checks through the harness CLIs.

The v0.9 compiler and guardian are a separate roadmap item with an approved design in Forge spec 0005. They are planned, not shipped.

## Ember

Ember v1 is in development as a custom OpenTelemetry Collector distribution written in Go.

- **Agent mode** runs on each machine. Adapters read native telemetry and local session records.
- **Gateway mode** is optional. It merges telemetry from multiple machines.
- **Deterministic IDs** reconnect sessions, subagents, and tool calls into trace trees.
- **`ember.work.id`** joins work across harnesses without splitting a workstream's trace by ticket.
- **Standard OTLP** exports traces, logs, and metrics to an existing backend.

Upstream collector components provide batching, retries, memory limits, and exporters. Ember implements the harness adapters, session registry, tree reconstruction, enrichment, and privacy controls specific to coding agents.

Content capture is off by default. An explicit allowlist controls exported attributes.

## Configuration

Forge uses YAML configuration at two levels:

```text
Global (~/.crucible/forge.config.yaml)
  ↓ overridden by
Project (.crucible/forge.config.yaml)
```

The Ember v1 design uses `~/.ember/config.yaml` by default. The `EMBER_HOME` environment variable changes that directory. Ember is not released yet.

## Technology stack

| Product                           | Language and runtime           | Distribution                                                          |
| --------------------------------- | ------------------------------ | --------------------------------------------------------------------- |
| Forge                             | TypeScript and Bun             | Single binary through `bun build --compile`; npm, Homebrew, and Scoop |
| Ember                             | Go and OpenTelemetry Collector | One binary built with OpenTelemetry Collector Builder; in development |
| Smelt and planned plugin products | TypeScript and Bun             | Planned                                                               |

All products use MIT licenses.
