---
title: Testing with Specimens
description: How to test AI resources against real project snapshots.
---

## What are specimens?

Specimens are **real project snapshots** stored on orphan branches. Any skill that operates on source code can use them for testing.

## Available specimens

| Specimen                  | Description                    |
| ------------------------- | ------------------------------ |
| `specimen/python/fastapi` | FastAPI REST API service       |
| `specimen/ts/express`     | Express.js TypeScript REST API |

## Delta branches

Delta branches add small, targeted changes with intentional findings:

| Delta                                | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| `specimen/python/fastapi-delta-docs` | FastAPI with intentional missing documentation |
| `specimen/ts/express-delta-docs`     | Express with intentional missing documentation |

## Running tests

### Agent-assisted (recommended)

```bash
/test-resource document specimen/python/fastapi
```

The `/test-resource` meta-skill:

1. Checks out the specimen branch to a temp directory
2. Runs the skill against the specimen
3. Validates output against expected structure
4. Reports pass/fail with details

### Manual

```bash
python3 scripts/list_specimens.py   # list all specimens and deltas
```

## Creating a new specimen

1. Create an orphan branch:

   ```bash
   git checkout --orphan specimen/<lang>/<framework>
   ```

2. Add a real project snapshot (not toy code — real dependencies, real structure)

3. Commit and push the orphan branch

4. Optionally create delta branches for targeted test scenarios:
   ```bash
   git checkout -b specimen/<lang>/<framework>-delta-<name> specimen/<lang>/<framework>
   # make targeted changes
   git commit -m "delta: <description>"
   ```

See the [How to Add a Specimen](https://github.com/crucibledx/forge-skills-starter/blob/main/how-to-add-specimen.md) guide for details.
