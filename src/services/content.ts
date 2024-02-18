import { getCollection, type CollectionEntry } from 'astro:content'

/**
 *
 */
type Project = CollectionEntry<'project'>
type Service = CollectionEntry<'service'>

type Content = Project | Service 
type ContentType = 'project' | 'service'

interface Contents {
  content: Content[]
}

interface ContentTypeI {
  type: ContentType
}

export async function getContent({ type }: ContentTypeI): Promise<Content[]> {
  return await getCollection(type)
}

export function sortMDByDatePosts({ content }: Contents): Content[] {
  return content.sort((a, b) => {
    const aDate = new Date(a.data.publishDate).valueOf()
    const bDate = new Date(b.data.publishDate).valueOf()
    return bDate - aDate
  })
}

export function getAllTags({ content }: Contents): string[] {
  return content.flatMap((content) => [...content.data.tags])
}

export function getUniqueTags({ content }: Contents): string[] {
  return [...new Set(getAllTags({ content }))]
}

export function getUniqueTagsWithCount({
  content
}: Contents): Array<[string, number]> {
  return [
    ...getAllTags({ content }).reduce(
      (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
      new Map<string, number>()
    )
  ].sort((a, b) => b[1] - a[1])
}

export async function getContentSortAndLimit({
  typeContent,
  limit
}: {
  typeContent: ContentTypeI
  limit?: number
}): Promise<Content[]> {
  const content = await getContent({ type: typeContent.type })
  const contentSortByDate = sortMDByDatePosts({ content })
  const contentLimit =
    limit !== undefined && limit <= contentSortByDate.length
      ? contentSortByDate.slice(0, limit)
      : contentSortByDate

  return contentLimit
}
