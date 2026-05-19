import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const fosa = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapter: z.number(),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const fopm = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapter: z.number(),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const hai = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapter: z.number(),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const fmopm = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapter: z.number(),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, fosa, fopm, hai, fmopm };
