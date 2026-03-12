import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const add = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    image_url: v.string(),
    link: v.string(),
    display_order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    title: v.string(),
    description: v.string(),
    image_url: v.string(),
    link: v.string(),
    display_order: v.number(),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const seed = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query("projects").collect();
    if (existing.length > 0) return "already seeded";

    const projects = [
      {
        title: "Visume",
        description: "Visume is an AI-powered video resume platform that helps candidates showcase their skills through short video interviews and enables employers to discover talent more effectively.",
        image_url: "/seekout03.svg",
        link: "https://www.visume.co.in",
        display_order: 1,
      },
      {
        title: "Yazo Eat (both website & android app)",
        description: "Yazo Eat lets you discover and order from amazing local home cooks and food vendors with 0% commission on pickup & self-delivered orders.",
        image_url: "/seekout04.svg",
        link: "https://yazoeat.com.au/",
        display_order: 2,
      },
      {
        title: "We Go Authentic",
        description: "We Go Authentic offers personalised Bhutan tour packages, connecting travellers with immersive local experiences and culture.",
        image_url: "/seekout05.svg",
        link: "https://www.wegoauthentic.com",
        display_order: 3,
      },
      {
        title: "UNTUCKit",
        description: "UNTUCKit designs men's and women's apparel built around perfectly-fitting shirts that look sharp when worn untucked.",
        image_url: "/seekout06.svg",
        link: "https://www.untuckit.com/",
        display_order: 4,
      },
      {
        title: "Attainz",
        description: "Attainz is an advanced email verification platform that ensures clean, valid, and high-deliverability email lists for successful campaigns.",
        image_url: "/seekout07.svg",
        link: "https://www.attainz.com",
        display_order: 5,
      },
      {
        title: "Gragafa (custom software)",
        description: "Gragafa is a custom JavaScript library engineered for interactive graph creation and data visualization, featuring modular design, YAML input support, and 30% faster DOM manipulation.",
        image_url: "/seekout01.png",
        link: "https://github.com/charstorm/gragafa",
        display_order: 6,
      },
    ];

    for (const p of projects) {
      await ctx.db.insert("projects", p);
    }
    return "seeded";
  },
});
