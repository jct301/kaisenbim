import rss from '@astrojs/rss'
import { SITE_CONFIG } from '../constants/constants'
import { getContent } from '../services/content'

export async function GET (): Promise<Response> {
  const projects = await getContent({ type: 'project' })

  return await rss({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    site: import.meta.env.SITE,
    items: projects.map(
      ({ data: { description, title, thumbnail, publishDate }, slug }) => ({
        title,
        description,
        coverImage: thumbnail,
        pubDate: publishDate,
        link: `projects/${slug}`
      })
    )
  })
}
