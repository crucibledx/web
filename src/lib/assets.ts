/**
 * Centralized asset URLs from the crucibledx/assets repo.
 *
 * Usage in Astro pages:
 *   import { asset } from '@/lib/assets'
 *   <img src={asset('ember/diagrams/light/ember-architecture.svg')} />
 *
 * Usage in Markdown content:
 *   Use the raw URL directly — Markdown doesn't support imports.
 *   ![Alt](https://github.com/crucibledx/assets/raw/main/ember/diagrams/light/ember-architecture.svg)
 */

const ASSETS_BASE = 'https://github.com/crucibledx/assets/raw/main'

/** Resolve a path in the crucibledx/assets repo to a raw GitHub URL. */
export const asset = (path: string): string => `${ASSETS_BASE}/${path}`

/** Pre-mapped diagram paths for type-safe usage in Astro components. */
export const diagrams = {
  // crucible
  ecosystem: asset('crucible/diagrams/light/crucible-ecosystem.svg'),
  productPhases: asset('crucible/diagrams/light/product-phases.svg'),

  // ember
  emberArchitecture: asset('ember/diagrams/light/ember-architecture.svg'),
  emberClosedLoop: asset('ember/diagrams/light/ember-closed-loop.svg'),
  emberVisibilityGap: asset('ember/diagrams/light/ember-visibility-gap.svg'),

  // platform
  engineerJourney: asset('platform/diagrams/light/engineer-journey.svg'),
  metaResourcesArchitecture: asset('platform/diagrams/light/meta-resources-architecture.svg'),
  platformFlow: asset('platform/diagrams/light/platform-flow.svg'),
  platformStructure: asset('platform/diagrams/light/platform-structure.svg'),
} as const

/** Pre-mapped demo GIF paths. */
export const demos = {
  forge: {
    setAndForget: (theme: 'dark' | 'light') => asset(`forge/demos/${theme}/01-set-and-forget.gif`),
    easyUpdates: (theme: 'dark' | 'light') => asset(`forge/demos/${theme}/02-easy-updates.gif`),
    powerUser: (theme: 'dark' | 'light') => asset(`forge/demos/${theme}/03-power-user.gif`),
  },
} as const

/** Pre-mapped branding asset paths. */
export const branding = {
  icon: asset('branding/crucible-icon.svg'),
  wordmark: asset('branding/crucible-wordmark.svg'),
  banner: asset('branding/crucible-banner.svg'),
  colors: asset('branding/crucible-colors.svg'),
  reference: asset('branding/crucible-reference.svg'),
} as const
