---
title: Platform Architecture
description: Crucible platform architecture — Path C, plugin protocol, and ecosystem design.
---

## Path C: Platform of focused CLIs

Three architecture paths were evaluated:

| Path  | Approach                                             | Verdict                       |
| ----- | ---------------------------------------------------- | ----------------------------- |
| **A** | God-mode universal CLI                               | Rejected — bloated, unfocused |
| **B** | Separate CLIs, no shared code                        | Rejected — duplicated effort  |
| **C** | Platform of focused CLIs sharing `@crucibledx/smelt` | ✅ Chosen                     |

Path C gives:

- **Engineering leverage** — shared plugin infrastructure
- **Community cohesion** — one ecosystem, multiple entry points
- **Defensible moat** — platform value > any single tool

## Ecosystem structure

![Crucible Ecosystem](/diagrams/crucible-ecosystem.svg)

Each product is independent enough to be useful alone, but shares infrastructure for leverage.

## Plugin protocol

Plugins communicate via **stdin/stdout JSON** — not gRPC, not HTTP. This makes plugins:

- Language-agnostic (any language that reads/writes JSON)
- Easy to test (pipe JSON in, check JSON out)
- Easy to debug (readable text protocol)

## Config hierarchy

```
Global (~/.crucible/forge.config.yaml)
  ↓ overridden by
Project (.crucible/forge.config.yaml)
  ↓ overridden by
Local (.crucible/forge.config.local.yaml)  ← gitignored
```

Each Crucible product uses its own config file under `.crucible/`:

- `forge.config.yaml` — Forge settings
- `ember.config.yaml` — Ember settings (future)
- `cast.config.yaml` — Cast settings (future)

## Technology stack

- **Language:** TypeScript + Bun
- **Binary:** Single native binary via `bun build --compile`
- **Architecture:** Domain-Driven Design (DDD) with three-layer separation
- **Testing:** Bun test runner, infrastructure boundary mocking
- **Validation:** Zod schemas for all external data
- **License:** MIT
