import { z } from "astro:content";

export const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  thumbnail: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  ogImage: z.string().optional(),
});
