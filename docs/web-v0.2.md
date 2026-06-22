# Crucible Web — v0.2 SNES Forgery Branding

> **Milestone:** v0.2 — transform the plain v0.1 site into a memorable, branded experience with industrial pixel art.
>
> **Goal:** Apply the "SNES forgery" visual identity — 16-bit industrial pixel art inspired by Terraria, Factorio,
> and classic SNES games. Make Crucible visually distinctive and memorable, like PostHog's hedgehog world.
>
> **Prerequisite:** v0.1 must be live and functional first. v0.2 is a visual layer on top of working content.

---

## Visual Identity: SNES Forgery

### The Concept

A **2D industrial pixel art foundry** as the visual world of the Crucible website. Not childish, not retro-kitsch — charming, distinctive, and technically sharp. The metallurgy brand (Crucible, Forge, Anvil, Ember) meets SNES-era pixel aesthetics.

**References:**

- Terraria — item sprites, workshop environments, crafting stations
- Factorio — conveyor belts, machines, industrial processes
- Stardew Valley — character sprites, cozy-industrial blend
- Shovel Knight — clean pixel art with modern sensibility

**What it is NOT:**

- Not 8-bit (too retro, too simple)
- Not 3D voxel (wrong aesthetic)
- Not flat/minimal illustration (every dev tool does this)
- Not dark corporate (the pixel art IS the personality)

### Color Application

The existing steel/molten color system maps perfectly to the SNES forgery aesthetic:

| Color                | Role in Pixel Art                  |
|----------------------|------------------------------------|
| Steel 950 `#0D1117`  | Background, deep shadows           |
| Steel 800 `#1F2937`  | Workshop walls, dark metal         |
| Steel 700 `#2D3748`  | Machinery bases, anvils            |
| Steel 400 `#718096`  | Metal highlights, steam            |
| Molten 900 `#7A1F00` | Cooling metal, deep embers         |
| Molten 700 `#C13800` | Active forge fire                  |
| Molten 500 `#E84D00` | Primary highlights, sparks, CTAs   |
| Molten 200 `#FFA940` | Hot metal, bright sparks           |
| Molten 100 `#FFD580` | Glowing edges, lightest highlights |

### Typography Enhancement

- **Headings:** Pixel-inspired font for major headings (e.g., "Press Start 2P" or custom pixel font) at large sizes. Falls back to JetBrains Mono at smaller sizes.
- **Body:** Stays Inter/system (readability is non-negotiable)
- **Code:** JetBrains Mono (unchanged from v0.1)
- **UI elements:** Pixel font for badges, labels, version numbers

---

## Product Visualizations

Each Crucible product gets a pixel art "machine" that represents what it does. These appear on product cards, page headers, and in the workshop scene.

| Product       | Pixel Art Machine                                  | Visual Metaphor                                 |
|---------------|----------------------------------------------------|-------------------------------------------------|
| **Forge**     | Anvil with hammer + sparks flying                  | Configs being hammered into shape for each tool |
| **Ember**     | Glowing coal pit with floating metric bubbles      | Heat/energy being measured and tracked          |
| **Starter**   | Workbench with blueprints + tools laid out         | Design → build → test lifecycle                 |
| **Smelt**     | Furnace/smelter with molten metal flowing          | Raw materials refined into shared engine        |
| **Anvil SDK** | Flat anvil surface with plugin blocks being placed | Foundation you build plugins on                 |
| **Lathe**     | Spinning precision machine with gears              | Precise MCP tool wrapping                       |
| **Foundry**   | Warehouse shelves with glowing items               | Plugin registry / marketplace                   |
| **Cast**      | Mold with liquid metal being poured                | Frontend components cast into shape             |

### Animation Concepts

All animations are lightweight — CSS keyframes or animated SVGs. No heavy JS animation libraries.

| Animation         | Where                                 | Technique                                                    |
|-------------------|---------------------------------------|--------------------------------------------------------------|
| **Sparks**        | Forge anvil, hero background          | CSS particle keyframes (small orange dots rising and fading) |
| **Molten flow**   | Between product machines, hero accent | SVG path animation with gradient                             |
| **Heat shimmer**  | Ember coal pit                        | CSS blur + opacity oscillation                               |
| **Conveyor belt** | Landing "how it works" section        | CSS translateX loop with config file sprites                 |
| **Hammer strike** | Forge product card hover              | CSS scale + rotation keyframe                                |
| **Glow pulse**    | Active/shipped products               | CSS box-shadow pulse with molten color                       |
| **Steam/smoke**   | Background atmosphere                 | CSS opacity clouds drifting upward                           |

---

## Workshop Scene

### Landing Page Hero

The main visual centerpiece: a pixel art **foundry workshop** spanning the full width of the hero section.

**Scene elements (left to right):**

1. **Input conveyor** — scattered config files (`.md`, `.yaml`, `.mdc`) arriving chaotically
2. **The Crucible vessel** — center piece, glowing with molten orange. Files go in messy, come out organized.
3. **Output conveyor** — organized files flowing to labeled destinations (Claude Code, Cursor, Windsurf, Copilot, Cline)
4. **Background machines** — dimmed silhouettes of future products (Ember coal pit, Foundry shelves)

**Implementation:**

- Static pixel art base layer (SVG or optimized PNG spritesheet)
- CSS animation overlay for moving parts (sparks, conveyor, glow)
- Parallax-lite: slight shift on scroll for depth
- Responsive: simplifies on mobile (just the crucible vessel + headline)

### Product Page Headers

Each product page gets a smaller scene header showing its specific machine:

- **Forge page:** Close-up of the anvil with a config file being hammered, sparks flying
- **Ember page:** The coal pit glowing, metric bubbles floating up with numbers
- **Starter page:** The workbench with blueprints unrolled, tools organized
- **About page:** Wide shot of the full workshop with all machines labeled

---

## Mascot: The Smith

**Optional but powerful.** A small pixel art character — the foundry worker — who appears throughout the site.

**Character design:**

- 32x32 or 48x48 pixel sprite
- Leather apron, goggles pushed up on forehead, hammer in hand
- Molten orange accent on goggles/apron (brand color)
- Simple idle animation (breathing, hammer tap)

**Appearances:**

- Landing page: working at the anvil in the workshop scene
- 404 page: scratching head, looking at broken machine
- Loading states: hammering (if any loading is needed)
- Docs sidebar: tiny icon next to "Getting Started" (guiding the reader)
- Footer: waving goodbye

**Whether to build the mascot** is a separate decision. The website works without it. But if built, it adds memorability (PostHog hedgehog effect).

---

## Interactive Elements (React Islands)

v0.2 introduces React components as Astro islands for interactive sections:

### Interactive Workshop (`PixelWorkshop.tsx`)

A lightweight interactive version of the workshop scene:

- Hover over machines to see product descriptions
- Click a machine to navigate to its product page
- Subtle particle effects on hover (CSS, not canvas)

### Terminal Demo (`TerminalDemo.tsx`)

Replace v0.1 placeholders with actual embedded terminal experiences:

- Typed.js or custom typing effect showing forge commands
- Tabbed: show `forge init`, `forge sync`, `forge status` in sequence
- Or embed VHS GIFs with play/pause control

### Animated Diagrams

Mermaid diagrams from v0.1 could get animated versions:

- Forge flow: nodes light up sequentially showing the data flow
- Config inheritance: layers slide in showing global → project → resolved
- Keep static mermaid in docs (accessibility), animated version on marketing pages

---

## Easter Eggs

Part of the PostHog-inspired personality. Hidden interactions that reward exploration:

| Easter Egg                 | Location                | What Happens                                                        |
|----------------------------|-------------------------|---------------------------------------------------------------------|
| **Konami code**            | Any page                | Workshop scene goes full-screen with chiptune music                 |
| **Click the crucible**     | Hero scene              | Vessel tips over, "spilling" molten configs across the page briefly |
| **Hidden room**            | Scroll past footer      | A pixel art "basement" appears with ASCII art credits               |
| **Click "It's pluggable"** | Supported tools section | A new machine appears in the workshop with "???" label              |
| **Type `forge` in search** | Docs search             | Shows a tiny Smith character hammering in the search results        |

Easter eggs are low-priority luxuries. Implement only after all functional work is done.

---

## OG Images & Social Cards

When someone shares `crucibledx.dev` on Twitter/LinkedIn/Slack, they should see:

### Default OG Image

- Workshop scene (simplified) with "Crucible — DX infrastructure platform" text overlay
- 1200x630px
- Steel background + molten accent
- Crucible wordmark in pixel font

### Per-Page OG Images

| Page       | OG Image                                                 |
|------------|----------------------------------------------------------|
| `/forge`   | Anvil machine close-up + "Forge CLI" text                |
| `/ember`   | Coal pit + "Ember — AI observability" text               |
| `/starter` | Workbench + "AI Resources Platform" text                 |
| `/docs/*`  | Clean text-only card with page title + Crucible branding |

### Generation

OG images can be:

- Pre-rendered (Figma/Photoshop export) — simple, static
- Dynamic via `@vercel/og` or Cloudflare Worker — generates per-page (overkill for v0.2)

Pre-rendered is fine. 5-6 images total.

---

## PostHog Integration

### Website Analytics

```html
<!-- PostHog snippet in Layout.astro -->
<script>
    !function (t, e) {...
    }(document, window);
    posthog.init('phc_xxx', {api_host: 'https://t.crucibledx.dev'});
</script>
```

Proxied through Cloudflare Worker at `t.crucibledx.dev` — no exposed API keys, no ad-blocker issues.

### Events to Track

| Event                | Properties        | Purpose                  |
|----------------------|-------------------|--------------------------|
| `page_view`          | path, referrer    | Basic analytics          |
| `docs_page_view`     | doc_path, section | Which docs are popular   |
| `cta_click`          | cta_name, page    | Which CTAs convert       |
| `terminal_demo_view` | demo_name         | Are demos watched        |
| `theme_toggle`       | from, to          | Light vs dark preference |
| `easter_egg_found`   | egg_name          | Fun metric               |

### Privacy

- Cookie-less tracking (PostHog supports this)
- No PII collected
- Privacy policy page (template, linked from footer)
- GDPR-friendly: EU PostHog instance, no cross-site tracking

---

## Ember Waitlist

Replace the static "coming soon" on the Ember page with:

- Email signup form (simple: just email field + submit)
- Backend: Cloudflare Worker → stores in KV or forwards to email
- Confirmation: "You're on the list. We'll notify you when Ember launches."
- PostHog event: `ember_waitlist_signup`

---

## Asset Production

### Pixel Art Options

1. **Commission** — Fiverr/itch.io pixel artists ($200-500 for full set)
    - Provide mood board + color palette + machine descriptions
    - Expect 2-3 revision rounds
    - Timeline: 1-2 weeks

2. **AI generation + manual cleanup**
    - Use image generation for initial sprites
    - Manual pixel-level cleanup for consistency
    - Timeline: faster, but quality depends on cleanup effort

3. **DIY with Aseprite**
    - Aseprite ($20) is the industry standard for pixel art
    - Full control, but time-intensive if not experienced
    - Timeline: 8-12+ hours

**Recommendation:** Commission the workshop scene and product machines. DIY or AI-generate smaller elements (sparks, backgrounds, patterns). The Smith mascot should be commissioned if used.

### Deliverables Needed

| Asset                 | Format                 | Dimensions              | Animations             |
|-----------------------|------------------------|-------------------------|------------------------|
| Workshop scene (hero) | SVG or PNG spritesheet | Full-width, ~400px tall | Conveyor, sparks, glow |
| Product machines (7)  | Individual SVGs/PNGs   | ~200x200px each         | Hover states           |
| The Smith (optional)  | PNG spritesheet        | 48x48px base            | Idle, hammer, wave     |
| Background patterns   | SVG tileable           | 40x40px tile            | None                   |
| Spark particles       | CSS-only               | N/A                     | Keyframe animations    |
| OG images (5-6)       | PNG                    | 1200x630px              | None                   |

---

## `llms.txt`

Emerging standard for AI-readable site descriptions. Fitting and ironic for an AI tool company.

```
# crucibledx.dev/llms.txt

> Crucible is a Developer Experience infrastructure platform.
> It provides tools for managing AI assistant configurations across teams and repositories.

## Products
- Forge CLI: syncs shared AI configs (skills, rules, workflows) across Claude Code, Cursor, Windsurf, Copilot, Cline
- Ember: AI assistant observability (coming soon)
- Forge Skills Starter: convention-over-configuration platform for building and testing AI resources

## Links
- Docs: https://crucibledx.dev/docs/
- GitHub: https://github.com/crucibledx
- Install: bun add -g @crucibledx/forge-cli
```

---

## Implementation Order

v0.2 should be implemented in this order to maintain a shippable state at each step:

1. **Color system enhancement** — pixel font for headings, refined Tailwind tokens for both themes
2. **Static pixel art assets** — commission or create product machines, embed as images
3. **Workshop scene** — hero illustration (static first, then animated)
4. **Product page headers** — per-page machine illustrations
5. **CSS animations** — sparks, glow, conveyor (layered on top of static art)
6. **PostHog integration** — analytics snippet + Cloudflare Worker proxy
7. **OG images** — pre-rendered social cards
8. **Ember waitlist** — email signup + Cloudflare Worker backend
9. **React islands** — interactive workshop, terminal demos
10. **Easter eggs** — only after everything else is done
11. **`llms.txt`** — trivial, do anytime
12. **The Smith mascot** — commission separately, add when ready

Each step ships independently. The site is always functional between steps.

---

## Effort Estimate

| Component                    | Effort               | Notes                                |
|------------------------------|----------------------|--------------------------------------|
| Pixel art commission         | $200-500 + 1-2 weeks | Workshop scene + 7 product machines  |
| Color/typography enhancement | 2-3 hours            | Pixel font, refined tokens           |
| Static art integration       | 3-4 hours            | Embed images, responsive sizing      |
| CSS animations               | 4-6 hours            | Sparks, glow, conveyor, shimmer      |
| Workshop scene (animated)    | 4-6 hours            | Parallax, hover states               |
| PostHog setup                | 2-3 hours            | Script + Worker proxy + events       |
| OG images                    | 2-3 hours            | Design + export 5-6 images           |
| Ember waitlist               | 2-3 hours            | Form + Worker + KV storage           |
| React islands                | 4-6 hours            | Interactive workshop, terminal demos |
| Easter eggs                  | 2-4 hours            | Fun, low priority                    |
| `llms.txt`                   | 15 min               | Trivial                              |
| **Total v0.2**               | **~25-40 hours**     | Spread over several weeks            |
