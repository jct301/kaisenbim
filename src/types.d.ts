export type HeroImage = string

export interface SocialMedia {
  mail: string
  facebook: string
  linkedin: string
  whatsapp: string
}

export interface Content {
  slug: string
  data: {
    title: string
    description: string
    thumbnail: {
      src: string
      alt: string
    }
    tags: string[]
    publishDate: Date
  }
}

export interface Link {
  title: string
  url: string
  label: string
}

export interface SiteConfig {
  author: string
  title: string
  description: string
  lang: string
  ogLocale: string
  date: {
    locale: string | string[] | undefined
    options: Intl.DateTimeFormatOptions
  }
}

export interface SiteMeta {
  title: string
  description?: string
  ogImage?: string | undefined
  articleDate?: string | undefined
}

export interface About {
  image: string
  content: string[]
}
