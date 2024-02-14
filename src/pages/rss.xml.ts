import { getContent } from '@/services/content'
import rss from '@astrojs/rss'
import { SITE_CONFIG } from '../constants'

export const GET = async () => {
  const projects = await getContent({ type: 'project' })

  return rss({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    site: import.meta.env.SITE,
    items: projects.map(
      ({ data: { description, title, thumbnail, publishDate }, slug }) => ({
        title,
        description,
        coverImage: thumbnail,
        pubDate: publishDate,
        link: `projects/${slug}`,
      })
    ),
  })
}
