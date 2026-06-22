# Crucible Web — v0.1 Plain Design

> **Milestone:** v0.1 — functional marketing site + documentation with real content, clean design, no branding.
>
> **Goal:** Get a professional web presence live at `crucibledx.dev` so contacts and early adopters have somewhere to land. Content-first, design-later.
>
> **Stack:** Astro + Starlight + Tailwind CSS, deployed on Cloudflare Pages.

---

## What v0.1 Delivers

- Marketing pages for all current and announced products
- Starlight documentation for Forge CLI (the shipped product)
- Light/dark theme via Starlight built-in toggle
- Steel/molten color system applied as Tailwind tokens (minimal styling, not full branding)
- Embedded drawio diagram exports (SVG/PNG) throughout pages and docs
- Terminal demo placeholders (styled frames awaiting VHS GIF recordings)
- Responsive layout for desktop and mobile
- Cloudflare Pages deployment configuration

**Not in v0.1** (see `web-v0.2.md`):

- Pixel art / SNES forgery visual identity
- Animated elements (sparks, molten metal, heat shimmer)
- Interactive components (React islands, clickable workshop)
- PostHog analytics integration
- OG images / social sharing cards
- Email signup / Ember waitlist
- `llms.txt`
- Search (Starlight's built-in search works, but no custom search UI)

---

## Tech Stack

### Framework: Astro + Starlight

- **Astro** — static-first, ships zero JS by default. Marketing pages are pure HTML/CSS.
- **Starlight** — Astro's documentation plugin. Built-in sidebar navigation, search, dark/light toggle, responsive layout.
- **React islands** — deferred to v0.2. No interactive components in v0.1.

### Styling: Tailwind CSS

Steel/molten color system mapped as Tailwind tokens:

```json5
{
  // tailwind.config.mjs
  colors: {
    molten: {
      "100": '#FFD580',
      "200": '#FFA940',
      "400": '#FF6B1A',
      "500": '#E84D00',
      // primary
      "700": '#C13800',
      "900": '#7A1F00',
    },
    steel: {
      "100": '#E2E8F0',
      "300": '#A0AEC0',
      "400": '#718096',
      "500": '#4A5568',
      "600": '#3D4A5C',
      "700": '#2D3748',
      "800": '#1F2937',
      "900": '#111827',
      "950": '#0D1117',
    },
  }
}
```

### Typography

- **Headings:** JetBrains Mono (monospace, industrial feel)
- **Body:** Inter or system font stack (clean, readable)
- **Code blocks:** JetBrains Mono

### Theme

- Starlight built-in light/dark toggle (no custom implementation needed)
- Color tokens work in both modes
- Light mode is default

### Hosting

- **Cloudflare Pages** — free, unlimited bandwidth, global CDN
- Connected to GitHub repo (`crucibledx/web`)
- Auto-deploy on push to `main`

---

## Project Structure

```
projects/web/
  src/
    pages/
      index.astro                    # Landing page
      forge.astro                    # Forge CLI product page
      ember.astro                    # Ember coming soon page
      starter.astro                  # AI Resources Lifecycle Platform page
      about.astro                    # About Crucible
    components/
      Layout.astro                   # Base HTML layout (head, nav, footer)
      Navbar.astro                   # Site navigation
      Footer.astro                   # Site footer
      Hero.astro                     # Landing page hero section
      ProductCard.astro              # Reusable product card component
      FeatureGrid.astro              # Feature grid layout
      SupportedTools.astro           # AI assistant logos/icons row
      TerminalPlaceholder.astro      # Placeholder frame for VHS GIF demos
      DiagramEmbed.astro             # Wrapper for embedded SVG/PNG diagrams
    layouts/
      MarketingLayout.astro          # Layout for marketing pages (nav + footer)
    content/
      docs/                          # Starlight documentation (Markdown)
        index.md                     # Docs landing / overview
        getting-started/
          installation.md            # Install forge, first sync
          quick-start.md             # 2-minute walkthrough
        forge/
          commands.md                # All 12 commands with examples
          configuration.md           # forge.config.yaml full reference
          assistants.md              # Per-assistant: paths, transforms, what forge does
          sources.md                 # Git, Local source types + 3 layouts
          architecture.md            # DDD layers, patterns (contributor-facing)
        starter/
          overview.md                # AI Resources Lifecycle Platform concept
          skills.md                  # Skill catalog (drawio, detect-stack, review-pr, document)
          testing.md                 # Specimens, deltas, how to test resources
        platform/
          roadmap.md                 # Product timeline, phased build sequence
          architecture.md            # C4 diagrams, plugin protocol, ecosystem vision
          products.md                # All products overview (forge → foundry)
    assets/
      diagrams/                      # Exported .drawio SVGs/PNGs
        crucible-ecosystem.svg
        forge-platform-flow.svg
        forge-platform-structure.svg
        ember-observability.svg
  public/
    demos/                           # VHS terminal GIF recordings (added later)
    favicon.svg                      # Crucible icon
  docs/                              # Specs (this file)
    web-v0.1.md
    web-v0.2.md
  astro.config.mjs
  tailwind.config.mjs
  package.json
  tsconfig.json
```

---

## Page Specifications

### Landing Page (`/`)

**Purpose:** Convert visitors into Forge users. Problem-first, then solution.

**Sections (top to bottom):**

1. **Hero**
    - Headline: "Your AI assistants don't talk to each other."
    - Subheadline: "Crucible fixes that. Sync shared AI configs across tools and repos with one command."
    - CTA buttons: [Get Started →] [GitHub →]
    - Terminal demo placeholder (VHS GIF slot)

2. **Problem Statement**
    - Three cards showing the pain:
        - "10 repos, 5 AI tools, 50 config files" — scattered configs
        - "Copy-paste. Drift. Outdated rules." — maintenance nightmare
        - "Nobody knows what's actually being used." — zero visibility
    - Keep it concise, visual. No paragraphs.

3. **How It Works**
    - 3-step visual flow:
        1. Define skills in one repo (source)
        2. `forge sync` places them everywhere (distribution)
        3. Every tool gets the right config, right format (result)
    - Embed `forge-platform-flow.svg` diagram

4. **Supported Tools**
    - Row of assistant logos/icons: Claude Code, Cursor, Windsurf, GitHub Copilot, Cline
    - "More coming. It's pluggable."

5. **Products**
    - Grid of ProductCards:
        - **Forge CLI** — "Sync shared AI configs across tools and repos" — [Learn more →]
        - **Starter Platform** — "Build, test, and deliver AI agent resources" — [Learn more →]
        - **Ember** — "See how your AI tools are actually used" — [Coming Soon]
    - Link to `/about` for full product roadmap

6. **Footer**
    - Links: GitHub, Docs, About
    - "Built by Crucible. MIT License."

**Content sources:**

- `design/branding/crucible-web-strategy.md` (hero copy, section structure)
- `projects/forge-cli/README.md` (how it works, supported tools)

---

### Forge Product Page (`/forge`)

**Purpose:** Detailed feature overview for developers evaluating Forge.

**Sections:**

1. **Hero**
    - "Forge CLI — AI dev environment in one command"
    - Brief description + install command
    - Terminal demo placeholder

2. **Commands Overview**
    - Table or grid of all 12 commands with one-line descriptions
    - Link to full docs for each

3. **Supported Assistants**
    - Table: assistant name, config paths (project + global), transforms
    - Source: `crucible-current-state-report.md` §2.1 assistant table

4. **Source Types & Layouts**
    - Git + Local source types
    - Canonical / Pre-structured / Hybrid layouts with descriptions
    - Diagram: `forge-platform-structure.svg`

5. **Sync Engine Features**
    - Feature list: multi-source, conflict resolution, backup, SHA-256 change detection, dry-run, rollback
    - Source: current-state-report sync engine table

6. **Scheduler**
    - Cross-platform auto-sync (launchd, crontab, schtasks)
    - Cron expressions with human-readable descriptions

7. **Architecture**
    - Brief DDD overview with diagram
    - Link to full architecture docs

**Content sources:**

- `design/crucible-current-state-report.md` §2.1
- `projects/forge-cli/README.md`
- `design/crucible-architecture.md` mermaid diagrams

---

### Ember Page (`/ember`)

**Purpose:** "Coming soon" page that establishes the problem and captures interest.

**Sections:**

1. **Hero**
    - "Ember — see how your AI tools are actually used"
    - "Coming soon" badge
    - One-line: "Cross-tool AI assistant observability. Your data never leaves your infrastructure."

2. **The Problem**
    - Enterprise visibility gap: no idea which skills are used vs. just synced
    - No cross-tool unified view (Claude Code + Cursor + Windsurf = 3 dashboards or zero)
    - No way to measure ROI of AI tooling investment
    - Quote: "Most engineering leaders have already made the bet... the honest answer is: most teams don't know."

3. **The Gap Map**
    - Table showing what's solved vs. unsolved in the landscape
    - Source: `ember-validation-research.md` gap map table

4. **Architecture**
    - Prometheus-model diagram: developer machine → normalizer → company's OTEL collector
    - Diagram: `ember-observability.svg`

5. **The Forge + Ember Loop**
    - Visual: distribute → measure → optimize → redistribute
    - "Forge manages WHAT. Ember measures HOW."

6. **Enterprise Value**
    - Three audience cards: Engineering Managers, Platform Teams, Compliance/Security
    - Source: `crucible-observability-product.md` enterprise value section

**Content sources:**

- `research/ember-validation-research.md`
- `research/crucible-observability-product.md`
- `design/diagrams/ember-observability.drawio`

---

### Starter Page (`/starter`)

**Purpose:** Present the AI Resources Lifecycle Platform — the convention-over-configuration template.

**Sections:**

1. **Hero**
    - "AI Resources Lifecycle Platform"
    - "Design, develop, test, and deliver AI agent skills, rules, and workflows."
    - "Fork this. Build resources. Deliver via Forge."

2. **How It Works**
    - Convention over configuration: put a file in the right place, the platform discovers it
    - Table: what (skill, rule, workflow, specimen) → convention → discovered by
    - Source: `forge-skills-starter/README.md` conventions table

3. **One Orchestrator, Three Phases**
    - `/create-resource` → `/design-resource` → `/develop-resource` → `/test-resource`
    - Platform flow diagram (from starter docs)

4. **Resource Catalog**
    - Skills table: drawio, detect-stack, review-pr, document (with versions and types)
    - Rules table: drawio-conventions, code-style, documentation-standards
    - Workflows table: document-project

5. **Testing with Specimens**
    - Concept: real project snapshots on orphan branches
    - Available specimens table
    - Delta branches for targeted testing

6. **Using with Forge**
    - Quick start: `forge init` → select git source → `forge sync`
    - Layout note: canonical layout, auto-detected

**Content sources:**

- `projects/forge-skills-starter/README.md`
- `projects/forge-skills-starter/docs/platform-design.md`

---

### About Page (`/about`)

**Purpose:** What Crucible is, why it exists, and where it's going.

**Sections:**

1. **What Crucible Is**
    - DX infrastructure platform
    - The metallurgy metaphor and naming
    - "Don't compete, complete."

2. **Principles**
    - The 7 founding principles (from founder vision doc)

3. **Product Roadmap**
    - Full product table: forge, smelt, anvil, lathe, foundry, cast, ember
    - Ecosystem diagram: `crucible-ecosystem.svg`
    - Phased timeline (mermaid from architecture doc)

4. **Architecture**
    - Path C: platform of CLIs sharing `@crucible/smelt`
    - Brief overview, link to full platform architecture docs

**Content sources:**

- `design/branding/crucible-founder-vision.md`
- `design/crucible-architecture.md` §9
- `design/crucible-growth-research.md` ecosystem mermaid

---

## Documentation Specifications (Starlight)

### Sidebar Structure

```
Getting Started
  ├── Installation
  └── Quick Start
Forge
  ├── Commands
  ├── Configuration
  ├── Assistants
  ├── Sources & Layouts
  └── Architecture
Starter Platform
  ├── Overview
  ├── Skills Catalog
  └── Testing with Specimens
Platform
  ├── Products
  ├── Architecture
  └── Roadmap
```

### Content Sources for Each Doc Page

| Page                  | Primary Source                               | Diagrams                       |
|-----------------------|----------------------------------------------|--------------------------------|
| Installation          | forge README install section                 | —                              |
| Quick Start           | forge README quick start                     | terminal placeholder           |
| Commands              | current-state-report §2.1 command table      | —                              |
| Configuration         | `forge.config.yaml` reference in forge docs  | —                              |
| Assistants            | current-state-report assistant table         | —                              |
| Sources & Layouts     | current-state-report source types + layouts  | `forge-platform-structure.svg` |
| Architecture          | forge CONTRIBUTING + architecture doc        | mermaid diagrams               |
| Starter Overview      | starter README + platform-design.md          | platform-flow diagram          |
| Skills Catalog        | starter README skills/rules/workflows tables | —                              |
| Testing               | starter how-to-test-resource.md              | —                              |
| Products              | architecture doc §9 product table            | `crucible-ecosystem.svg`       |
| Platform Architecture | architecture doc §2-7 C4 diagrams            | mermaid diagrams               |
| Roadmap               | architecture doc §8 timeline                 | mermaid timeline               |

### Mermaid Diagrams

Starlight supports mermaid via `remark-mermaid` or `rehype-mermaid`. The architecture doc contains 7 mermaid diagrams that render directly in Markdown:

1. Product mindmap (§1)
2. C4 System Context (§2)
3. C4 Container View (§3)
4. C4 Component View — forge-bootstrap (§4)
5. Forge core CLI flow (§5)
6. Plugin communication sequence (§6)
7. Config inheritance model (§7)
8. Phased roadmap timeline (§8)

These will be copied into the relevant doc pages as inline mermaid code blocks.

---

## Diagram Export Workflow

Source `.drawio` files live in `crucible/design/diagrams/`. For the website:

1. Open each `.drawio` in draw.io desktop or VS Code extension
2. Export as SVG (preferred) or PNG
3. Place in `src/assets/diagrams/`
4. Reference in pages via Astro's `<Image>` component or standard `<img>` tags

Diagrams to export for v0.1:

| Source File                       | Export Name                    | Used On                                                         |
|-----------------------------------|--------------------------------|-----------------------------------------------------------------|
| `crucible-ecosystem.drawio`       | `crucible-ecosystem.svg`       | Landing (products), About (roadmap), Platform Architecture docs |
| `forge-platform-flow.drawio`      | `forge-platform-flow.svg`      | Landing (how it works), Getting Started docs                    |
| `forge-platform-structure.drawio` | `forge-platform-structure.svg` | Forge page, Sources & Layouts docs                              |
| `ember-observability.drawio`      | `ember-observability.svg`      | Ember page                                                      |

---

## Terminal Demo Placeholders

Terminal demos will be recorded with [VHS](https://github.com/charmbracelet/vhs) (`.tape` scripts → GIF output). For v0.1, each demo location gets a styled placeholder:

- Dark background frame styled like a terminal window
- Title bar with dots (macOS style)
- Centered text: "Terminal demo coming soon"
- Consistent dimensions across all placeholders

Placeholder locations:

- Landing page hero
- Forge page hero
- Getting Started → Quick Start doc

VHS `.tape` scripts will be added in a later commit, GIFs placed in `public/demos/`.

---

## Responsive Design

- **Desktop:** full layout, side-by-side grids, wide diagrams
- **Tablet:** stacked grids, narrower diagrams
- **Mobile:** single column, collapsed navigation (Starlight handles docs nav)
- Tailwind breakpoints: `sm`, `md`, `lg`, `xl`

Marketing pages use Tailwind responsive utilities. Docs pages inherit Starlight's responsive behavior.

---

## Deployment

### Cloudflare Pages Configuration

```
Build command: bun run build
Build output directory: dist/
```

### Domain Configuration

- Primary: `crucibledx.dev` → Cloudflare Pages
- Docs: `crucibledx.dev/docs/` (Starlight under same domain, not a subdomain)

### Environment

No environment variables needed for v0.1. PostHog keys and other secrets are deferred to v0.2.
