# Crucible Web: agent guide

How to work in this repo and where to find things. The linked documents are canonical; this file does not repeat them.

## Where to find information

| Need                                               | Read                                                                                                            |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| What the site covers, stack                        | [`README.md`](README.md)                                                                                        |
| Project structure, adding docs, pages and diagrams | [`CONTRIBUTING.md`](CONTRIBUTING.md)                                                                            |
| PR checks, screenshots, commit style, release      | [`.factory/loop-contract.md`](.factory/loop-contract.md)                                                        |
| Org context, delivery loop, approval boundaries    | `crucibledx/hq` `AGENTS.md`                                                                                     |
| Org engineering standards                          | `engineering-standards` skill (`crucibledx/factory-loop` `plugins/crucible-loop/skills/engineering-standards/`) |
| Specs                                              | [`specs/`](specs/) for new work; `docs/web-v0.*.md` are older design specs                                      |
| Locales, sidebar, Starlight overrides              | [`astro.config.mjs`](astro.config.mjs)                                                                          |
| Diagram and demo URLs                              | [`src/lib/assets.ts`](src/lib/assets.ts)                                                                        |

## How to work

```bash
bun install
bun run dev                                                                # local dev server
bun run format:check && bun run lint && bun run typecheck && bun run build # before a PR is ready
bun run build && bun run preview                                           # serve the built site for screenshots
```

- A new docs page needs a file under `src/content/docs/` and an entry in the hand-written `sidebar` in
  `astro.config.mjs`.
- UI strings live in `src/i18n/locales/en/*.json`; only the English `root` locale is configured.
- Diagrams and demo GIFs come from `crucibledx/assets`; edit them there, not here.
- Product facts on the site (commands, flags, install methods) come from each product repo's `main`, not from drafts or
  roadmaps.
- Public env vars are listed in `.env.example`. Never commit `.env`.

## Boundaries

- Merging to `main` deploys crucibledx.dev. Never push to `main`, force push or merge.
- No `package.json` version bumps in agent PRs; releases are manual.
