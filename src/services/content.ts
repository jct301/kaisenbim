import { getCollection, type CollectionEntry } from "astro:content";

type Project = CollectionEntry<"project">;
type Service = CollectionEntry<"service">;

type Content = Project | Service;
type Type = "project" | "service";

export async function getContents({
  type,
}: {
  type: Type;
}): Promise<Content[]> {
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
