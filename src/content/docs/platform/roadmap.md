---
title: Roadmap
description: Current releases and planned Forge and Ember milestones.
---

## Current releases

| Product              | Version          | Status      | Capabilities                                                      |
| -------------------- | ---------------- | ----------- | ----------------------------------------------------------------- |
| Forge CLI            | v0.7.0           | ✅ Released | Skills, rules, and workflows sync for five coding harnesses       |
| Forge Skills Starter | Current template | ✅ Released | Resource development conventions, meta-skills, and test specimens |

Forge v0.7.0 is available through npm, Homebrew, and Scoop. Standalone binaries and an install script are also available.

## Forge roadmap

### v0.8 — Plugin packages and delivery

**Status:** approved design, not released.

The first plugin release targets Droid and Claude Code through their native plugin systems.

- Agent Plugins 1.0 packages for skills, commands, agents, hooks, MCP servers, rules, and output styles
- Local sources and Git sources pinned to resolved commits
- Lockfiles with content hashes, per-harness output hashes, and deterministic variants
- Portability reports for harness-specific adaptations and unsupported components
- Transactional installation and keyed merges that preserve user settings

### v0.8.x — Plugin workflow and verification

**Status:** planned as part of v0.8, before compiler work starts.

- `forge plugin add`, `remove`, `update`, and `list`
- Plugin drift reporting in `forge status` and `forge health`
- `forge marketplace emit` and `--check` for Droid and Claude Code catalogs
- Load checks through each harness's own CLI, without model calls or API keys

### v0.9 — Compiler and guardian

**Status:** approved design, not released.

After plugin delivery, Forge will compile coding-harness context and provide a guardian for deferred skills. Forge spec 0005 approves the design; these capabilities are not current product features.

### Later harness waves

Codex and Copilot plugin delivery is planned for v0.10. Cursor, Devin, OpenCode, Kilo, Cline, and custom harness support is planned for later waves.

## Ember v1

**Status:** in development, not released.

Ember is a custom OpenTelemetry Collector distribution written in Go. It reconstructs session and workstream trees across processes and machines, groups cross-harness work with `ember.work.id`, and exports standard OTLP to an existing backend.

| Milestone | Scope                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| M1        | Droid adapter, deterministic session trees, collector pipeline, usage metrics, privacy controls, setup and doctor commands |
| M2        | Claude Code adapter, human attribution, and optional gateway mode                                                          |
| M3        | Local observability stack, install scripts, and v0.1.0 release                                                             |

The v1 design includes four Grafana dashboards: Agent tree, Overview, Tools and MCP, and Cost. Content capture is off by default.

## Platform direction

- Keep each product useful independently.
- Integrate with coding harnesses instead of replacing them.
- Export open protocols instead of requiring a Crucible-hosted backend.
- Extract shared infrastructure only when another product needs it.
- Keep all projects open source under MIT.
