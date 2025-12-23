import { defineCollection, z } from "astro:content";

const careerTimelineItem = z.object({
 variant: z.literal("career"),
 startPeriod: z.number().int(),
 endPeriod: z.number().int(),
 title: z.string(),
 organization: z.string(),
 location: z.string(),
});

const educationTimelineItem = z.object({
 variant: z.literal("education"),
 endPeriod: z.number().int(),
 title: z.string(),
 organization: z.string(),
 location: z.string(),
});

const timeline = defineCollection({
 type: "content",
 schema: z.discriminatedUnion("variant", [careerTimelineItem, educationTimelineItem]),
});

export const collections = { timeline };
