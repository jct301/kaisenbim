import { getCollection, type CollectionEntry } from "astro:content";

type Project = CollectionEntry<"project">;
type Service = CollectionEntry<"service">;

type Content = Project | Service;
type Type = "project" | "service";

export async function getContents({ type }: { type: Type }): Promise<Content[]> {
  return await getCollection(type);
}

export function sortMDByDateContents({
  contents,
}: {
  contents: Content[];
}): Content[] {
  return contents.sort((a, b) => {
    const aDate = new Date(a.data.publishDate).valueOf();
    const bDate = new Date(b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}

export function getAllTags({ contents }: { contents: Content[] }): string[] {
  return contents.flatMap((content) => [...content.data.tags]);
}

export function getUniqueTags({ contents }: { contents: Content[] }): string[] {
  return [...new Set(getAllTags({ contents }))];
}

export function getUniqueTagsWithCount({
  contents,
}: {
  contents: Content[];
}): Array<[string, number]> {
  return [
    ...getAllTags({ contents }).reduce(
      (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
      new Map<string, number>()
    ),
  ].sort((a, b) => b[1] - a[1]);
}

export function getContentsLimit({
  limit,
  contents,
}: {
  limit?: number;
  contents: Content[];
}) {
  return limit !== undefined && limit <= contents.length
    ? contents.slice(0, limit)
    : contents;
}
