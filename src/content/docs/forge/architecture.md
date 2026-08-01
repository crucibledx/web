---
title: Architecture
description: Forge CLI internal architecture for contributors.
---

Forge uses Domain-Driven Design (DDD) with strict three-layer separation.

## Layer structure

```
src/
  main.ts                    — 14 lines, imports + bootstraps
  domain/                    — Pure types, logic, schemas. No I/O.
  application/               — Command handlers (orchestration)
  infrastructure/            — All I/O: filesystem, git, CLI, config
```

**Dependencies flow inward:** infrastructure → application → domain. Never reverse.

## Domain layer

Pure types, logic, and schemas. No I/O, no framework dependencies. Imports nothing outside itself.

Key modules:

- **assistants/** — 5 assistant definitions (dir-per-entry)
- **config/** — config types, Zod schemas
- **sync/** — resolver, drift detection, conflict resolution, merge, state, report
- **transforms/** — rename, frontmatter-rename (self-registering)

## Application layer

Command handlers that orchestrate domain + infrastructure.

- Each command lives in `commands/<name>/` with `index.ts` (definition) and `handler.ts` (logic)
- `commands/shared/` — reusable prompt functions (assistant, source, sync, scheduler)
- Handlers resolve their own `projectRoot` via `io.resolveProjectRoot()`

## Infrastructure layer

All I/O: filesystem, git, CLI prompts, config parsing.

- **cli/** — parser, renderer, prompts
- **config/** — loader, writer, state (sync-state.json)
- **fs/** — mutations, reader, rollback, scanner
- **source/** — git, local loaders (self-registering)
- **scheduler/** — launchd, crontab, schtasks (self-registering)
- **logger/** — pino-based file logger
- **telemetry/** — local JSONL backend

## Key patterns

| Pattern                             | Implementation                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| **Self-registering modules**        | Commands, assistants, transforms, schedulers — mutable registry + side-effect import    |
| **Dispatch maps**                   | `Record<string, Handler>` for renderer, transforms, source loaders, conflict resolution |
| **Functions, not classes**          | Plain functions and object literals. Classes only for custom errors                     |
| **Const objects for unions**        | Define `const` object, derive union type via `typeof OBJ[keyof typeof OBJ]`             |
| **Infrastructure boundary mocking** | Tests mock at `@infrastructure/*`, never at file level                                  |

## Import rules

- **Cross-layer:** path aliases (`@domain/*`, `@application/*`, `@infrastructure/*`)
- **Within a layer:** relative imports
- Domain must never import from application or infrastructure
- Infrastructure must never import from application

## Adding things

| What            | Where                           | How                        |
| --------------- | ------------------------------- | -------------------------- |
| New assistant   | `domain/assistants/<name>/`     | One file + registry entry  |
| New source type | `infrastructure/source/<type>/` | Three files + barrel entry |
| New command     | `application/commands/<name>/`  | Two files + barrel entry   |
| New transform   | `domain/transforms/<name>/`     | One file + registry entry  |

Zero changes to existing commands or handlers required.
