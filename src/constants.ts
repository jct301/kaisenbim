import type { Link, SiteConfig } from '@/types'

export const LINKS: Link[] = [
  {
    title: 'Servicios',
    url: '/#services',
    label: 'services',
  },
  {
    title: 'Proyectos',
    url: '/#projects',
    label: 'projects',
  },
  {
    title: 'Contacto',
    url: '/#contact',
    label: 'contact',
  },
]

export const SITE_CONFIG: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Chris Williams',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Astro Theme Cactus',
  // Meta property used as the default description meta property
  description: 'An opinionated starter theme for Astro',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'en-GB',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_GB',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
}
