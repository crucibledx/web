---
title: Sources & Layouts
description: Source types and layout detection in Forge.
---

## Source types

Forge supports two source types for fetching AI configs.

### Git source

Any remote git repository (SSH or HTTPS).

```yaml
sources:
  - name: team-skills
    type: git
    url: git@github.com:myorg/ai-skills.git
    branch: main
```

**Features:**

- Shallow clone with temp-dir caching
- Connectivity verification via `git ls-remote`
- `GIT_TERMINAL_PROMPT=0` for security (no interactive prompts)
- SSH `ConnectTimeout=5`, 10-second timeout

### Local source

A path on disk.

```yaml
sources:
  - name: local-rules
    type: local
    path: ~/my-rules
```

**Features:**

- Supports `~` expansion
- Validates existence at configure time

## Layouts

Forge auto-detects three source layouts.

### Canonical

Flat files organized by resource type:

```
source-repo/
  skills/
    drawio/SKILL.md
    detect-stack/SKILL.md
  rules/
    code-style.md
  workflows/
    document-project.md
```

Files are distributed to each assistant's expected path and transformed as needed (e.g., `.md` → `.mdc` for Cursor).

### Pre-structured

Contains assistant-specific directories:

```
source-repo/
  .claude/
    skills/...
    rules/...
  .cursor/
    rules/...
  .windsurf/
    rules/...
```

Files are copied as-is without transforms. Each assistant gets only its own directory.

### Hybrid

Mix of both layouts:

```
source-repo/
  skills/           ← canonical (transformed + distributed)
  rules/            ← canonical (transformed + distributed)
  .cursor/          ← pre-structured (copied as-is)
    rules/
      custom.mdc
```

Canonical files are transformed and distributed. Pre-structured files are copied directly. Auto-detected by `detectSourceLayout()`.

## Advanced options

### Filtering

Include or exclude files with glob patterns:

```yaml
sources:
  - name: team-skills
    type: git
    url: git@github.com:myorg/ai-skills.git
    include:
      - 'skills/**'
      - 'rules/**'
    exclude:
      - '**/*.test.md'
```

### Mapping

Prepend a virtual directory prefix:

```yaml
sources:
  - name: flat-files
    type: local
    path: ~/my-rules
    map: 'rules' # turns flat files into rules/ subtree
```

### Layout override

Override auto-detection:

```yaml
sources:
  - name: team-skills
    type: git
    url: git@github.com:myorg/ai-skills.git
    layout: canonical # auto | canonical | pre-structured
```

## Adding a new source type

Adding a new source type requires three files:

1. `infrastructure/source/<type>/messages.ts` — prompt constants
2. `infrastructure/source/<type>/loader.ts` — `configure()` and `load()` implementation
3. `infrastructure/source/<type>/index.ts` — barrel export

Plus one entry in `source/index.ts`. Zero changes to any command handler.
