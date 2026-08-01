---
title: Installation
description: Install Forge CLI and get started in 30 seconds.
---

## Install via Bun

```bash
bun add -g @crucibledx/forge-cli
```

This installs the `forge` binary globally. Single binary via `bun build --compile` — no runtime dependency on Bun after installation.

## Verify installation

```bash
forge --version
```

## System requirements

- **macOS**, **Linux**, or **Windows**
- No runtime dependencies — Forge is a compiled single binary

## What's next

Run `forge init` to set up your first project:

```bash
forge init
```

The interactive wizard will:

1. Detect which AI assistants you have configured (Claude Code, Cursor, Windsurf, Copilot, Cline)
2. Ask you to configure a source (git repo or local path)
3. Write `.crucible/forge.config.yaml`

Then sync your first config:

```bash
forge sync
```

See the [Quick Start](/getting-started/quick-start) for a full walkthrough.
