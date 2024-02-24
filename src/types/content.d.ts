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
