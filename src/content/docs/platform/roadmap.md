---
title: Roadmap
description: Crucible platform development phases and timeline.
---

## Phased build sequence

![Product Phases](https://github.com/crucibledx/assets/raw/main/crucible/diagrams/light/product-phases.svg)

### Phase 1: Foundation (current)

**Focus:** Get Forge CLI to production quality. Ship publicly. Build initial community.

| Milestone                              | Status         |
| -------------------------------------- | -------------- |
| Forge CLI v0.6 (production-ready)      | ✅ Complete    |
| Skills Starter v0.6 (feature-complete) | ✅ Complete    |
| Website (crucibledx.dev)               | 🟡 In progress |
| npm publish (@crucibledx/forge-cli)    | ⬜ Pending     |
| Public GitHub repos                    | ⬜ Pending     |
| CI/CD (GitHub Actions)                 | ⬜ Pending     |
| Homebrew tap                           | ⬜ Pending     |

### Phase 2: Growth

**Focus:** Drive adoption. Add observability. Start community engagement.

| Milestone                                  | Status     |
| ------------------------------------------ | ---------- |
| Ember PoC (single assistant, file backend) | ⬜ Planned |
| Community engagement (GitHub Discussions)  | ⬜ Planned |
| Terminal demo recordings (VHS)             | ⬜ Planned |
| PostHog analytics on website               | ⬜ Planned |

### Phase 3: Platform

**Focus:** Extract shared infrastructure. Enable third-party plugins.

| Milestone                    | Status    |
| ---------------------------- | --------- |
| @crucibledx/smelt extraction | ⬜ Future |
| @crucibledx/anvil SDK        | ⬜ Future |
| Lathe MCP server             | ⬜ Future |
| Foundry registry             | ⬜ Future |

### Phase 4: Ecosystem

**Focus:** Full platform with marketplace, frontend CLI, and enterprise features.

| Milestone                    | Status    |
| ---------------------------- | --------- |
| Cast frontend CLI            | ⬜ Future |
| Enterprise support contracts | ⬜ Future |
| Foundry plugin marketplace   | ⬜ Future |

## Architecture decisions

| Decision              | Choice                  | Rationale                                                  |
| --------------------- | ----------------------- | ---------------------------------------------------------- |
| Platform architecture | Path C (shared library) | Engineering leverage + community cohesion                  |
| Language              | TypeScript/Bun          | Fast iteration, single binary via compile                  |
| Plugin protocol       | stdin/stdout JSON       | Language-agnostic, easy to test                            |
| License               | MIT                     | Maximum adoption                                           |
| Smelt extraction      | Deferred                | Don't extract from one consumer                            |
| Go rewrite            | Killed                  | TypeScript/Bun works, plugin protocol is language-agnostic |

## Codebase metrics (Forge CLI)

| Metric                   | Value                          |
| ------------------------ | ------------------------------ |
| Production code          | 6,369 LOC across 144 files     |
| Unit tests               | 6,700 LOC across 52 test files |
| E2E tests                | 4,440 LOC across 25 test files |
| Total passing tests      | 687                            |
| Test-to-production ratio | ~1.75:1                        |
| Commits                  | 74                             |
| Releases                 | 41 versions (v0.1.0 → v0.6.16) |
| Development period       | 49 days                        |
