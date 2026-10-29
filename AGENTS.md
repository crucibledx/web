# Crucible Web — Agent Context

> Marketing site and Starlight documentation for the Crucible platform.

## Identity

- **Package:** `@crucibledx/web` (private, not published) · version in `package.json`
- **URL:** [crucibledx.dev](https://crucibledx.dev)
- **GitHub:** `crucibledx/web` (standalone repo)
- **Hosting:** Cloudflare Pages project `crucible-web`, deployed by GitHub Actions

## Stack

Astro `^7`, Starlight `^0.41` (provides Pagefind search), Tailwind CSS v4, astro-icon (Iconify sets), posthog-js,
Prettier + ESLint, `astro check` for types.

## Layout

```
src/
├── pages/[...lang]/      ← marketing pages: index, forge, ember, starter, about (.astro)
├── content/docs/         ← 13 Starlight docs: getting-started/, forge/, starter/, platform/
├── content.config.ts
├── i18n/
│   ├── locales/en/*.json ← about, common, ember, forge, home, starter
│   └── index.ts, messages.ts, utils.ts, paths.ts
├── components/           ← Navbar, Footer, Hero, ThemeToggle, StarlightHead, TerminalPlaceholder, ...
├── layouts/MarketingLayout.astro
├── lib/assets.ts         ← builds raw GitHub URLs into crucibledx/assets
├── styles/global.css, tokens.css (design tokens)
└── assets/               ← logo-light.svg, logo-dark.svg
```

- **i18n:** only the English `root` locale is configured (`astro.config.mjs`). Strings live in
  `src/i18n/locales/en/*.json`; pages use the `[...lang]` catch-all.
- **Starlight overrides** (`astro.config.mjs`): `ThemeSelect` → `src/components/ThemeToggle.astro`, `Head` →
  `src/components/StarlightHead.astro`; custom CSS `src/styles/global.css`.
- **New doc page:** add the `.md`/`.mdx` under `src/content/docs/` **and** a sidebar entry in `astro.config.mjs`.
- **Images/diagrams** come from `crucibledx/assets` via `src/lib/assets.ts` (light SVGs; dark handled by CSS filter).
- **Terminal demo GIFs** use separate dark and light variants (`TerminalPlaceholder` `darkSrc` / `lightSrc`).
- **Env vars:** see `.env.example` (`PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`).

## Development

```bash
bun install
bun run dev              # dev server
bun run build            # production build to dist/
bun run preview
bun run format           # prettier --write src/   (format:check in CI)
bun run lint             # eslint src/            (lint:fix to auto-fix)
bun run typecheck        # astro check
```

## CI/CD

- **`.github/workflows/ci.yml`** (pull requests): `bun install --frozen-lockfile`, `format:check`, `lint`, `typecheck`,
  `build`.
- **`.github/workflows/deploy.yml`** (push to `main`): `bun install --frozen-lockfile`, `bun run build` (with PostHog
  env), then `wrangler pages deploy dist --project-name=crucible-web`. Secrets: `CLOUDFLARE_API_TOKEN`,
  `CLOUDFLARE_ACCOUNT_ID`, `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`.

## Design Specs

- `docs/web-v0.1.md` — plain functional site
- `docs/web-v0.2.md` — SNES Forgery branding (industrial pixel art identity)

## Commits

Release commits use `v0.x.y: description`; bump `package.json` version with them.
