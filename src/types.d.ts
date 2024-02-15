export interface Content {
  slug: string
  data: {
    title: string
    description: string
    thumbnail: {
      src: {
        height: number
        src: string
        format:
          | 'avif'
          | 'webp'
          | 'jpg'
          | 'jpeg'
          | 'tiff'
          | 'png'
          | 'gif'
          | 'svg'
        width: number
      }
      alt: string
    }
    tags: string[]
    publishDate: string | Date
    updateDate?: string | Date
  }
}

export interface Link {
  title: string
  url: string
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
