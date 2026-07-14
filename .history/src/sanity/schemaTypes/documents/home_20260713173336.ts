import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home Page",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
    },
    {
      name: "brands",
      title: "Featured Brands",
    },
    {
      name: "trust",
      title: "Trust Section",
    },
    {
      name: "why",
      title: "Why Smart Shopping",
    },
    {
      name: "network",
      title: "Store Network",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],

  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "Home",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "trustSection",
      title: "Trust Section",
      type: "trustSection",
      group: "trust",
    }),
  ],

  preview: {
    select: {
      title: "pageTitle",
    },
  },
});
