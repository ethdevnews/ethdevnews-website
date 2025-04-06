import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const calendar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/calendar" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, calendar };
