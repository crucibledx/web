---
title: Quick Start
description: First sync in 2 minutes.
---

## 1. Install Forge

```bash
brew install crucibledx/tap/forge
# or: bun add -g @crucibledx/forge-cli
```

See [Installation](/getting-started/installation) for all methods (Scoop, npm, shell script, manual).

## 2. Initialize in your project

```bash
cd your-project
forge init
```

The wizard will:

- **Detect AI assistants** — scans for `.claude/`, `.cursor/`, `.windsurf/`, `.github/copilot-instructions.md`, `.cline/`
- **Configure a source** — choose git (remote repo URL) or local (path on disk)
- **Write config** — creates `.crucible/forge.config.yaml`

## 3. Sync

```bash
forge sync
```

Forge fetches from your configured source, resolves target paths for each AI assistant, applies transforms (e.g., `.md` → `.mdc` for Cursor), and places files.

### Preview first

```bash
forge sync --dry-run
```

See what would change without writing anything.

## 4. Check status

```bash
forge status
```

Shows drift between the last sync state and your current filesystem:

- **in-sync** — file matches last sync
- **modified** — locally changed since last sync
- **deleted** — removed from disk but still in sync state
- **remote-updated** — changed in source since last sync
- **new-in-source** — exists in source but not yet synced

## 5. Set up auto-sync (optional)

```bash
forge scheduler install
```

Registers an OS-level scheduled task:

- **macOS** — launchd
- **Linux** — crontab
- **Windows** — Task Scheduler

Default schedule: every 30 minutes. Configurable via cron expression in `forge.config.yaml`.

## The engineer's journey

![Engineer Journey](https://github.com/crucibledx/assets/raw/main/platform/diagrams/light/engineer-journey.svg)

## What's next

- [Commands reference](/forge/commands) — all 12 commands
- [Configuration](/forge/configuration) — full `forge.config.yaml` reference
- [Supported assistants](/forge/assistants) — what Forge does for each AI tool
