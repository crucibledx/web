---
title: Commands
description: All 12 Forge CLI commands with descriptions and usage.
---

## Core Commands

### `forge init`

Interactive wizard that detects AI tools, configures sources, and writes `.crucible/forge.config.yaml`.

```bash
forge init          # interactive setup
forge init --force  # re-initialize existing config
```

### `forge sync`

Fetches from all configured sources, resolves targets, and places files for each assistant.

```bash
forge sync            # sync all sources
forge sync --dry-run  # preview changes without writing
forge sync --silent   # suppress output (for scheduled runs)
```

**Features:**

- Multi-source parallel fetching via `Promise.allSettled`
- SHA-256 change detection — only writes when content changed
- Per-file error recovery — failed files don't abort the sync
- Rollback on mutation failure

### `forge status`

Shows drift between last sync state and current filesystem.

```bash
forge status
```

**Drift statuses:**
| Status | Meaning | |---|---| | `in-sync` | File matches last sync | | `modified` | Locally changed since last sync | | `deleted` | Removed from disk, still in sync state | | `remote-updated` | Changed in source since last sync | | `conflict` | Both local and remote changed | | `new-in-source` |
Exists in source, not yet synced | | `removed-from-source` | Was synced, no longer in source |

### `forge health`

SLI dashboard showing operational metrics.

```bash
forge health
```

Displays: last sync time, sync frequency, drift count, source reachability, active assistants, log and report statistics.

## Configuration Commands

### `forge config`

Interactive config editor with section-based menu.

```bash
forge config       # interactive menu
forge config show  # display current config
```

Sections: assistants, sources, sync settings, scheduler, telemetry.

## Source Management Commands

### `forge source list`

```bash
forge source list
```

Shows configured sources with type, detail, synced file counts, and advanced options.

### `forge source add`

```bash
forge source add
```

Add a new source interactively. Supports git (SSH/HTTPS) and local paths.

### `forge source remove`

```bash
forge source remove
```

Remove a source with optional cleanup of synced files and sync state.

### `forge source edit`

```bash
forge source edit
```

Edit existing source configuration with pre-filled current values.

## Scheduler Commands

### `forge scheduler install`

```bash
forge scheduler install
```

Registers an OS-level auto-sync task:

- **macOS** — launchd
- **Linux** — crontab
- **Windows** — Task Scheduler

### `forge scheduler uninstall`

```bash
forge scheduler uninstall
```

Removes the scheduled sync task.

### `forge scheduler status`

```bash
forge scheduler status
```

Shows next run time, schedule description, and scheduler status.

## Other Commands

### `forge telemetry`

```bash
forge telemetry        # show status and what's collected
forge telemetry reset  # clear stored events
```

Opt-in anonymous usage tracking. Local JSONL storage. No data sent anywhere by default.

### `forge uninstall`

```bash
forge uninstall
```

Removes `.crucible` directory, uninstalls scheduler, deletes all synced files. Requires confirmation.

## Global Options

| Flag                  | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `--global`            | Operate on global config (`~/.crucible/forge.config.yaml`) |
| `--log-level <level>` | Set log level: silent, error, warn, info, debug, trace     |
| `--version`           | Show version                                               |
| `--help`              | Show help                                                  |
