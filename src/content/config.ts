import { contentSchema } from "@/schemas/content.schema";
import { defineCollection } from 'astro:content';

const project = defineCollection({
  type: 'content',
  schema: contentSchema
})

const service = defineCollection({
  type: 'content',
  schema: contentSchema
})



export const collections = { project, service }
