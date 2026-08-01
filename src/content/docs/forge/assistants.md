---
title: Supported Assistants
description: What Forge does for each AI assistant.
---

Forge supports 5 AI assistants. Each has different config paths, directory structures, and file formats. Forge handles the differences automatically.

## Assistant comparison

| Assistant          | Project Paths                                              | Transforms                               |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------- |
| **Claude Code**    | `.claude/skills/`, `.claude/rules/`, `.claude/commands/`   | None (passthrough)                       |
| **Cursor**         | `.cursor/rules/`                                           | `.md` → `.mdc` + frontmatter             |
| **Windsurf**       | `.windsurf/rules/`, `.windsurf/workflows/`                 | Frontmatter injection                    |
| **GitHub Copilot** | `.github/skills/`, `.github/instructions/`                 | `.md` → `.instructions.md` + frontmatter |
| **Cline**          | `.cline/skills/`, `.clinerules/`, `.clinerules/workflows/` | None (passthrough)                       |

## Per-assistant details

### Claude Code

Claude Code uses the canonical Markdown format. No transforms needed — files are placed as-is.

**Project paths:**

- `.claude/skills/` — skill files
- `.claude/rules/` — rule files
- `.claude/commands/` — command files

**Global paths:**

- `~/.claude/skills/`, `~/.claude/rules/`, `~/.claude/commands/`

### Cursor

Cursor uses `.mdc` files with YAML frontmatter.

**Transform:** Forge renames `.md` → `.mdc` and injects frontmatter headers.

**Project paths:**

- `.cursor/rules/` — all resource types

**Global paths:**

- `~/.cursor/rules/`

### Windsurf

Windsurf uses Markdown with YAML frontmatter.

**Transform:** Forge injects frontmatter headers (no rename needed).

**Project paths:**

- `.windsurf/rules/` — rule files
- `.windsurf/workflows/` — workflow files

### GitHub Copilot

Copilot uses `.instructions.md` files with YAML frontmatter.

**Transform:** Forge renames `.md` → `.instructions.md` and injects frontmatter.

**Project paths:**

- `.github/skills/` — skill files
- `.github/instructions/` — instruction files

**Global paths:**

- `~/.copilot/skills/`, `~/.copilot/instructions/`

### Cline

Cline uses standard Markdown. No transforms needed.

**Project paths:**

- `.cline/skills/` — skill files
- `.clinerules/` — rule files
- `.clinerules/workflows/` — workflow files

**Global paths:**

- `~/Cline/Rules/`, `~/Cline/Workflows/`

## Adding a new assistant

Adding a new assistant requires one file and one registry entry:

1. Create `domain/assistants/<name>/index.ts` with the `AssistantDefinition`
2. Add the entry to `registry.ts`

Zero changes to any command handler. See the [Architecture](/forge/architecture) docs for details.
