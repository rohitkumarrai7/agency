import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    image_url: v.string(),
    link: v.string(),
    display_order: v.number(),
  }),
});
