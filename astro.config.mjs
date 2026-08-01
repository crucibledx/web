import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import {defineConfig} from 'astro/config'

export default defineConfig({
  site: 'https://crucibledx.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    starlight({
      title: 'Crucible',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [{label: 'GitHub', icon: 'github', href: 'https://github.com/crucibledx'}],
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
      },
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {label: 'Installation', slug: 'getting-started/installation'},
            {label: 'Quick Start', slug: 'getting-started/quick-start'},
          ],
        },
        {
          label: 'Forge',
          items: [
            {label: 'Commands', slug: 'forge/commands'},
            {label: 'Configuration', slug: 'forge/configuration'},
            {label: 'Assistants', slug: 'forge/assistants'},
            {label: 'Sources & Layouts', slug: 'forge/sources'},
            {label: 'Architecture', slug: 'forge/architecture'},
          ],
        },
        {
          label: 'Starter Platform',
          items: [
            {label: 'Overview', slug: 'starter/overview'},
            {label: 'Skills Catalog', slug: 'starter/skills'},
            {label: 'Testing', slug: 'starter/testing'},
          ],
        },
        {
          label: 'Platform',
          items: [
            {label: 'Products', slug: 'platform/products'},
            {label: 'Architecture', slug: 'platform/architecture'},
            {label: 'Roadmap', slug: 'platform/roadmap'},
          ],
        },
      ],
    }),
  ],
})
