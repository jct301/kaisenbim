import { removeDupsAndLowerCase } from '@/utils/remove-dups-and-lowercase'
import { defineCollection, z } from 'astro:content'

const project = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      ogImage: z.string().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    }),
})

const service = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      ogImage: z.string().optional(),
    }),
})

const post = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),

      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      ogImage: z.string().optional(),
    }),
})

export const collections = { project, service, post }
