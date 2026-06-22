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
  components/          # Reusable Astro/React components
  layouts/             # Page layouts
  content/
    docs/              # Starlight documentation (Markdown)
  assets/              # Images, SVGs, diagram exports
public/
  demos/               # Terminal demo GIFs (VHS recordings)
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

Starlight auto-discovers pages from the sidebar config in `astro.config.mjs`.

## Adding Pages

Marketing pages live in `src/pages/` as `.astro` files. Use existing layouts from `src/layouts/`.

## Diagrams

Diagrams are exported from `.drawio` files (source in `crucible/design/diagrams/`) as SVG or PNG. Place exports in `src/assets/diagrams/`.

## Before You Submit

```bash
bun run build          # must succeed with zero errors
```

## Commit Messages

Format: `type(version): description`

```
feat(v0.1.0): add forge product page
fix: broken link on landing page
docs: update getting started guide
```

Version tags use annotated tags: `git tag -a v0.1.0 -m "v0.1.0"`

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
