import { defineCollection, z } from 'astro:content'
import { removeDupsAndLowerCase } from '../utils/remove-dups-and-lowercase'

const project = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      thumbnail: z.object({
        src: image(),
        alt: z.string()
      }),
      ogImage: z.string().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase)
    })
})

const service = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      thumbnail: z.object({
        src: image(),
        alt: z.string()
      }),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      ogImage: z.string().optional()
    })
})



export const collections = { project, service }
