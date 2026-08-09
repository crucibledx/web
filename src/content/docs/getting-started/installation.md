---
title: Installation
description: Install Forge CLI and get started in 30 seconds.
---

## Homebrew (macOS / Linux)

```bash
brew install crucibledx/tap/forge
```

## Scoop (Windows)

```powershell
scoop bucket add crucibledx https://github.com/crucibledx/scoop-bucket
scoop install forge
```

## npm / bun

```bash
bun add -g @crucibledx/forge-cli
# or: npm install -g @crucibledx/forge-cli
```

## Shell script (macOS / Linux)

Downloads the standalone binary — no runtime dependencies.

```bash
curl -fsSL https://raw.githubusercontent.com/crucibledx/forge-cli/main/scripts/install.sh | sh
```

## Manual download

Grab the binary for your platform from [GitHub Releases](https://github.com/crucibledx/forge-cli/releases), extract, and add to your `PATH`.

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
