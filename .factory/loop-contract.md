# Loop contract

Read by the Crucible loop agents (`implement-spec`, `verifier`). Keep it accurate.

- **Install:** `bun install`
- **Checks** (all must pass before a PR is ready):
  `bun run format:check && bun run lint && bun run typecheck && bun run build`
- **Visual evidence:** for page changes, include before/after screenshots of each changed page (desktop and mobile
  width) in the PR. Run `bun run build && bun run preview` to serve the built site locally.
- **Commit style:** `v0.x.y: ...` for releases, `docs: ...` or `feat: ...` otherwise, matching `git log`.
- **Specs:** `specs/NNNN-slug.md`, see `crucibledx/hq` `specs/README.md`.
- **Assets:** images and diagrams come from `crucibledx/assets`.
- **Release:** merging to `main` deploys to Cloudflare Pages (crucibledx.dev). Loop PRs never bump the version in
  `package.json`.
