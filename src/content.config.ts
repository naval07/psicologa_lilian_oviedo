import { defineCollection} from "astro:content";
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod"

// z -> zod shcema

const blogposts = defineCollection({
    loader: glob({ base: './src/content/blogposts', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.string(),
        description: z.string(),
        location: z.string(),
        updateddate: z.coerce.date(),
        userlocation: z.object({
            Colombia: z.string(),
            otro: z.string()
        })
    })
})

export const collections = { blogposts };