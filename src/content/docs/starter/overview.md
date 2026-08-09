---
title: Overview
description: AI Resources Lifecycle Platform — convention-over-configuration template.
---

The Forge Skills Starter is an **AI Resources Lifecycle Platform** — a convention-over-configuration template for building, testing, and delivering AI agent skills, rules, and workflows.

## What is an AI Resource?

An AI resource is any artifact that shapes how an AI assistant behaves — a skill, a rule, a workflow, or an agent definition. Resources are versioned, tested, and delivered to developer environments through structured conventions.

The platform treats resources as first-class engineering artifacts with a full lifecycle: design → develop → test → release → deliver.

![AI Resource Lifecycle Platform](https://github.com/crucibledx/assets/raw/main/platform/diagrams/light/platform-flow.svg)

## How it works

One orchestrator, three phases:

1. **Design** — `/design-resource` creates design docs and architecture diagrams
2. **Develop** — `/develop-resource` scaffolds and implements from the design
3. **Test** — `/test-resource` runs type-aware testing against real project specimens

`/create-resource` orchestrates all three end-to-end.

## Convention over configuration

Put a file in the right place — the platform discovers it. No config, no registration.

| What       | Convention                           | Discovered by                               |
|------------|--------------------------------------|---------------------------------------------|
| Skill      | `skills/<name>/SKILL.md`             | `/create-resource`, `/test-resource`, Forge |
| Skill docs | `skills/<name>/README.md`            | Developers browsing the repo                |
| Design     | `docs/<name>/design.md`              | `/design-resource`, `/develop-resource`     |
| Rule       | `rules/<name>.md`                    | `/create-resource`, Forge                   |
| Workflow   | `workflows/<name>.md`                | `/create-resource`, Forge                   |
| Specimen   | orphan branch `specimen/<lang>/<fw>` | `/test-resource`                            |

## Platform structure

![Platform Convention Map](https://github.com/crucibledx/assets/raw/main/platform/diagrams/light/platform-structure.svg)

## Repository structure

```
forge-skills-starter/
├── skills/                   # Shared skills (delivered via Forge)
│   ├── drawio/
│   ├── detect-stack/
│   ├── review-pr/
│   └── document/
├── rules/                    # Shared rules (delivered via Forge)
├── workflows/                # Shared workflows (delivered via Forge)
├── docs/                     # Platform docs (NOT delivered)
├── scripts/                  # Test automation (NOT delivered)
└── .claude/skills/           # Meta-skills (NOT delivered)
    ├── create-resource/
    ├── design-resource/
    ├── develop-resource/
    └── test-resource/
```

**Shared** (`skills/`, `rules/`, `workflows/`) → delivered to consumer repos via Forge.

**Platform** (everything else) → stays in this repo, powers development and testing.

## Multi-team / Monorepo setup

The `main` branch is a single-team setup. For organizations with multiple teams, the [`example/monorepo`](https://github.com/crucibledx/forge-skills-starter/tree/example/monorepo) branch demonstrates team-scoped resources:

```
shared/       # Cross-team resources (every team gets these)
frontend/     # Frontend team — /review-frontend, /accessibility, react-conventions
backend/      # Backend team — /review-api, /database-migration, api-conventions
infra/        # Infra team — /review-terraform, /incident-runbook, terraform-conventions
```

Each team folder contains a full canonical layout (`skills/`, `rules/`, `workflows/`). With Forge, each team points their source at the repo with a `subdirectory` filter or uses `include`/`exclude` globs for fine-grained control:

```yaml
# Frontend team's forge config
sources:
  - name: shared
    type: git
    url: https://github.com/your-org/forge-skills-starter.git
    branch: example/monorepo
    subdirectory: shared

  - name: frontend
    type: git
    url: https://github.com/your-org/forge-skills-starter.git
    branch: example/monorepo
    subdirectory: frontend
```

## Using with Forge

Fork the starter, build your team's resources, then deliver with Forge:

```bash
forge init
# → Select "git" source → paste your fork's URL

forge sync
# → Skills placed for each AI tool automatically
```

Forge auto-detects the canonical layout and handles format transforms per assistant.
