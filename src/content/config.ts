import { defineCollection, z } from "astro:content";

/**
 * Definition project content
 */
const project = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60),
			description: z.string().min(50).max(160),
			thumbnail: z.object({
				src: image(),
				alt: z.string(),
			}),
		}),
});

/**
 * Definition service content
 */
const service = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(60),
			description: z.string().min(50).max(160),
			thumbnail: z.object({
				src: image(),
				alt: z.string(),
			}),
		}),
});

export const collections = { project, service };
