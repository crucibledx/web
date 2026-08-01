---
title: Configuration
description: Full forge.config.yaml reference.
---

Forge uses YAML configuration files at two levels:

- **Project:** `.crucible/forge.config.yaml` (in your repo)
- **Global:** `~/.crucible/forge.config.yaml` (user-wide defaults)

Project config overrides global config.

## Minimal config

```yaml
assistants:
  - claude-code
  - cursor

sources:
  - name: team-skills
    type: git
    url: git@github.com:myorg/ai-skills.git
```

## Full reference

```yaml
# Assistants to sync to
assistants:
  - claude-code
  - cursor
  - windsurf
  - copilot
  - cline

# Sources to fetch from
sources:
  - name: team-skills
    type: git
    url: git@github.com:myorg/ai-skills.git
    branch: main # default: main
    layout: auto # auto | canonical | pre-structured
    include: # glob patterns to include
      - 'skills/**'
      - 'rules/**'
    exclude: # glob patterns to exclude
      - '**/*.test.md'
    map: '' # virtual directory prefix

  - name: local-rules
    type: local
    path: ~/my-rules

# Sync behavior
sync:
  sourceConflict: last-wins # last-wins | first-wins | error
  localConflict: remote-wins # remote-wins | local-wins | error
  backup: true # create .bak when overwriting local changes
  keepLocal: true # keep files removed from source

# Scheduler
scheduler:
  schedule: '*/30 * * * *' # cron expression (default: every 30 min)

# Telemetry
telemetry:
  enabled: false # opt-in anonymous usage tracking
```

## Source options

### Git source

| Field     | Required | Default | Description                |
| --------- | -------- | ------- | -------------------------- |
| `name`    | yes      | —       | Identifier for this source |
| `type`    | yes      | —       | Must be `git`              |
| `url`     | yes      | —       | SSH or HTTPS git URL       |
| `branch`  | no       | `main`  | Branch to fetch            |
| `layout`  | no       | `auto`  | Layout detection mode      |
| `include` | no       | —       | Glob patterns to include   |
| `exclude` | no       | —       | Glob patterns to exclude   |
| `map`     | no       | —       | Virtual directory prefix   |

### Local source

| Field     | Required | Default | Description                 |
| --------- | -------- | ------- | --------------------------- |
| `name`    | yes      | —       | Identifier for this source  |
| `type`    | yes      | —       | Must be `local`             |
| `path`    | yes      | —       | Path on disk (supports `~`) |
| `layout`  | no       | `auto`  | Layout detection mode       |
| `include` | no       | —       | Glob patterns to include    |
| `exclude` | no       | —       | Glob patterns to exclude    |
| `map`     | no       | —       | Virtual directory prefix    |

## Conflict resolution

### Source conflicts

When multiple sources produce the same target path:

| Strategy     | Behavior                               |
| ------------ | -------------------------------------- |
| `last-wins`  | Last source in the list wins (default) |
| `first-wins` | First source in the list wins          |
| `error`      | Fail the sync with an error            |

### Local conflicts

When a locally modified file also changed remotely:

| Strategy      | Behavior                                                              |
| ------------- | --------------------------------------------------------------------- |
| `remote-wins` | Overwrite local with remote (default), creates `.bak` if backup is on |
| `local-wins`  | Keep local changes, skip remote update                                |
| `error`       | Fail the sync with an error                                           |
