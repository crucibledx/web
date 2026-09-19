---
title: Roadmap
description: Crucible platform development phases and timeline.
---

## Phased build sequence

![Product Phases](https://github.com/crucibledx/assets/raw/main/crucible/diagrams/light/product-phases.svg)

### Phase 1: Foundation ✅

**Focus:** Get Forge CLI to production quality. Ship publicly. Build initial community.

| Milestone                              | Status      |
|----------------------------------------|-------------|
| Forge CLI v0.6 (production-ready)      | ✅ Complete |
| Skills Starter v0.6 (feature-complete) | ✅ Complete |
| Website (crucibledx.dev)               | ✅ Complete |
| npm publish (@crucibledx/forge-cli)    | ✅ Complete |
| Public GitHub repos                    | ✅ Complete |
| CI/CD (GitHub Actions)                 | ✅ Complete |
| Homebrew tap + Scoop bucket            | ✅ Complete |

### Phase 2: Context Compiler (current)

**Focus:** Evolve Forge from a file copier to a context compiler. Ship Ember MVP.

> "Other tools install files. Forge compiles your AI environment."

Each compiler feature ships as its own Forge version with room for patch releases:

| Version     | Feature                                  | Status         |
|-------------|------------------------------------------|----------------|
| Forge v0.7  | Smithery/agentskills.io source adapter   | 🟡 In progress |
| Forge v0.8  | Skill frontmatter schema + parser        | ⬜ Designed    |
| Forge v0.9  | Skill graph + dependency resolution      | ⬜ Designed    |
| Forge v0.10 | Project context detection + tree-shaking | ⬜ Designed    |
| Forge v0.11 | Token budgeting + priority ordering      | ⬜ Designed    |
| Forge v0.12 | Per-agent emitters (compile targets)     | ⬜ Designed    |
| Forge v0.13 | Manifest generation (Ember bridge)       | ⬜ Designed    |
| Ember v0.1  | Manifest reader + CLI report             | ⬜ Designed    |
| Ember v0.2  | Multi-project discovery + aggregation    | ⬜ Designed    |
| Ember v0.3  | OTLP export + Grafana dashboard pack     | ⬜ Designed    |

### Phase 3: Observability + Integrations

**Focus:** Grow Ember with external integrations. Drive adoption through existing communities.

| Version      | Feature                                         | Status    |
|--------------|-------------------------------------------------|-----------|
| Ember v0.4   | Langfuse + Helicone integration                 | ⬜ Future |
| Ember v0.5   | Agent OTEL + file watchers (Claude Code, Cline) | ⬜ Future |
| Ember v0.6+  | Cursor/Windsurf/Copilot watchers                | ⬜ Future |
| Forge v0.14+ | Code-splitting, incremental compilation         | ⬜ Future |

### Phase 4: Platform + Ecosystem

**Focus:** Extract shared infrastructure. Enable third-party plugins.

| Milestone                            | Status    |
|--------------------------------------|-----------|
| @crucibledx/ember standalone package | ⬜ Future |
| @crucibledx/smelt extraction         | ⬜ Future |
| @crucibledx/anvil SDK                | ⬜ Future |
| Lathe MCP server                     | ⬜ Future |
| Foundry registry                     | ⬜ Future |
| Cast frontend CLI                    | ⬜ Future |

## Architecture decisions

| Decision              | Choice                  | Rationale                                                  |
|-----------------------|-------------------------|------------------------------------------------------------|
| Platform architecture | Path C (shared library) | Engineering leverage + community cohesion                  |
| Language              | TypeScript/Bun          | Fast iteration, single binary via compile                  |
| Plugin protocol       | stdin/stdout JSON       | Language-agnostic, easy to test                            |
| License               | MIT                     | Maximum adoption                                           |
| Compiler pipeline     | In-process, pure domain | Parse → Analyze → Optimize → Emit, all pure functions      |
| Ember data source     | Forge compiler manifest | No instrumentation needed — build output as telemetry      |
| Smelt extraction      | Deferred                | Don't extract from one consumer                            |
| Go rewrite            | Killed                  | TypeScript/Bun works, plugin protocol is language-agnostic |

## Codebase metrics (Forge CLI v0.6.24)

| Metric                   | Value                          |
|--------------------------|--------------------------------|
| Production code          | 6,369 LOC across 144 files     |
| Unit tests               | 6,700 LOC across 52 test files |
| E2E tests                | 4,440 LOC across 25 test files |
| Total passing tests      | 687                            |
| Test-to-production ratio | ~1.75:1                        |
| Releases                 | 66 versions (v0.1.0 → v0.6.24) |
