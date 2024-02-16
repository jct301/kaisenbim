import { getCollection, type CollectionEntry } from 'astro:content'

/**
 *
 */
type Project = CollectionEntry<'project'>
type Service = CollectionEntry<'service'>
type Post = CollectionEntry<'post'>

type Content = Project | Service | Post
type ContentType = 'project' | 'service' | 'post'

interface Contents {
  content: Content[]
}

interface ContentTypeI {
  type: ContentType
}

export async function getContent({ type }: ContentTypeI) {
  return await getCollection(type)
}

export function sortMDByDatePosts({ content }: Contents) {
  return content.sort((a, b) => {
    const aDate = new Date(a.data.publishDate).valueOf()
    const bDate = new Date(b.data.publishDate).valueOf()
    return bDate - aDate
  })
}

export function getAllTags({ content }: Contents) {
  return content.flatMap((content) => [...content.data.tags])
}

export function getUniqueTags({ content }: Contents) {
  return [...new Set(getAllTags({ content }))]
}

export function getUniqueTagsWithCount({
  content,
}: Contents): [string, number][] {
  return [
    ...getAllTags({ content }).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>()
    ),
  ].sort((a, b) => b[1] - a[1])
}
