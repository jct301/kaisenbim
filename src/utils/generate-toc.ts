import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  subheadings: TocItem[]
}

/**
 *
 * @param item
 * @param depth
 * @returns
 */
function diveChildren (item: TocItem, depth: number): TocItem[] {
  if (depth === 1 || (item.subheadings.length === 0)) {
    return item.subheadings
  } else {
    // e.g., 2
    return diveChildren(
      item.subheadings[item.subheadings.length - 1],
      depth - 1
    )
  }
}

/**
 *
 * @param headings
 * @returns
 */
export function generateToc (headings: readonly MarkdownHeading[]): TocItem[] {
  // this ignores/filters out h1 element(s)
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)]
  const toc: TocItem[] = []

  bodyHeadings.forEach((h) => {
    const heading: TocItem = { ...h, subheadings: [] }

    // add h2 elements into the top level
    if (heading.depth === 2) {
      toc.push(heading)
    } else {
      const lastItemInToc = toc[toc.length - 1] ?? ''
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`)
      }

      // higher depth
      // push into children, or children's children
      const gap = heading.depth - lastItemInToc.depth
      const target = diveChildren(lastItemInToc, gap)
      target.push(heading)
    }
  })
  return toc
}
