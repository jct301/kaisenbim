import { getCollection } from "astro:content";

export async function getContentProjects() {
	return await getCollection("project");
}
export async function getContentServices() {
	return await getCollection("service");
}
