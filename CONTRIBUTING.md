# Contributing to Crucible Web

Thanks for your interest in contributing! This guide covers everything you need to get started.

## Prerequisites

- [Bun](https://bun.sh) v1.1+
- Node.js 20+ (for some tooling)
- Git

## Setup

```bash
git clone https://github.com/crucibledx/web.git
cd web
bun install
```

## Development

```bash
bun run dev            # start dev server at localhost:4321
bun run build          # production build to dist/
bun run preview        # preview production build locally
```

## Project Structure

```
src/
  pages/               # Astro pages (file-based routing)
  components/          # Reusable Astro components
  layouts/             # Page layouts
  content/
    docs/              # Starlight documentation (Markdown)
  assets/              # Logos (diagrams and demo GIFs come from crucibledx/assets)
public/                # Static files served as-is
```

## Adding Documentation

Docs live in `src/content/docs/` as Markdown files. Starlight handles navigation, search, and dark/light theme.

```bash
# Create a new doc page
touch src/content/docs/forge/new-page.md
```

Add frontmatter at the top:

```markdown
---
title: Page Title
description: Brief description for SEO
---
```

Then add the page to the `sidebar` list in `astro.config.mjs`; pages are not added to it automatically.

## Adding Pages

Marketing pages live in `src/pages/` as `.astro` files. Use existing layouts from `src/layouts/`.

## Diagrams

Diagrams are served from the [`crucibledx/assets`](https://github.com/crucibledx/assets) repo via raw GitHub URLs.

- **In Astro pages:** import from `../../lib/assets` and use the `diagrams` map
- **In Markdown content:** use the raw URL directly: `![Alt](https://github.com/crucibledx/assets/raw/main/<path>)`

To add or update a diagram, edit the source `.drawio` in the assets repo, export, optimize with SVGO, and commit.

## Before You Submit

```bash
bun run format:check && bun run lint && bun run typecheck && bun run build
```

CI runs the same checks on every pull request.

## Commit Messages

Release commits use `v0.x.y: description` and bump the version in `package.json`. Other commits use a type prefix:

```
v0.1.8: update forge page content and locale strings
feat: add forge product page
docs: update getting started guide
```

Version tags use annotated tags: `git tag -a v0.1.0 -m "v0.1.0"`

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
