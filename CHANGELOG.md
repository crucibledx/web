# Changelog

All notable changes to `@crucibledx/web` are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.1.5] — 2026-08-09

### Added

- **Demo showcase section** — "See it in action" on `/forge` page with all 3 terminal recordings in alternating layout
- **"Easy Updates" demo** — drift detection + interactive config GIF
- **"Power User" demo** — advanced source options, merge strategies, dry-run, health dashboard GIF

---

## [0.1.4] — 2026-08-09

### Changed

- **Terminal demos** — replaced placeholder component with actual dark/light theme-aware GIFs from assets repo
- **`TerminalPlaceholder`** — now accepts `darkSrc`/`lightSrc` props and renders real GIFs with CSS-based theme switching
- **Asset URLs** — switched from `raw.githubusercontent.com` to `github.com/.../raw/` pattern for Git LFS compatibility

### Added

- **Landing page hero GIF** — "set and forget" demo on home page (`/`)
- **Forge page hero GIF** — "init and sync" demo on forge page (`/forge`)

---

## [0.1.3] — 2026-08-09

### Changed

- **Diagrams served from assets repo** — all diagram references now use raw GitHub URLs from [`crucibledx/assets`](https://github.com/crucibledx/assets) instead of local `public/diagrams/`
- **Astro pages** — `ember.astro`, `about.astro`, `starter.astro` import from `src/lib/assets.ts` diagram map
- **Markdown docs** — 7 content pages updated to raw GitHub URLs for diagram images
- **CONTRIBUTING guide** — updated diagram workflow to reference assets repo

### Added

- **`src/lib/assets.ts`** — centralized asset URL helper with typed `diagrams`, `demos`, and `branding` maps

### Removed

- **`public/diagrams/`** — 9 local SVG copies replaced by remote references from assets repo

---

## [0.1.2] — 2026-08-01

### Added

- **Monorepo example section** — starter marketing page and docs now reference the `example/monorepo` branch with team-scoped resources (frontend, backend, infra, shared)

---

## [0.1.1] — 2026-08-01

### Added

- **Astro + Starlight + Tailwind v4** — full project setup with build pipeline.
- **Marketing pages** — landing (`/`), Forge (`/forge`), Ember (`/ember`), Starter (`/starter`), About (`/about`).
- **Starlight documentation** — 13 doc pages across Getting Started, Forge, Starter Platform, and Platform sections.
- **Components** — Hero, ProductCard, FeatureGrid, SupportedTools, TerminalPlaceholder, Navbar, Footer, MarketingLayout.
- **i18n system** — all marketing pages wired to JSON locale files via `t()` calls and `getMessages()` data iteration.
- **Global CSS for marketing content** — scoped styles for inline `<code>` and `<strong>` rendered from i18n JSON via `set:html`.
- **Color system** — molten/steel tokens mapped to Starlight accent/gray + custom brand tokens.
- **Typography** — Inter (body) + JetBrains Mono (headings/code) via Google Fonts.
- **Search** — Pagefind integration via Starlight (auto-indexed 19 pages).
- **Sitemap** — auto-generated via `@astrojs/sitemap`.
- **GitHub CI workflow** — PR checks: format, lint, typecheck, build.
- **GitHub CD workflow** — deploy to Cloudflare Pages on push to `main`.
- **SVG optimization** — logos/favicon via SVGO; all diagrams as pure vector.

---

## [0.1.0] — 2026-06-22

### Added

- **Initial project setup** — README, LICENSE (MIT), CONTRIBUTING guide, CHANGELOG, .gitignore.
- **v0.1 spec** (`docs/web-v0.1.md`) — plain design website with content pages and Starlight docs, no branding.
- **v0.2 spec** (`docs/web-v0.2.md`) — SNES forgery branding with industrial pixel art visual identity.
