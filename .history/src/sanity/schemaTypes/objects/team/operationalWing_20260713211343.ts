import { defineField, defineType } from "sanity";

export const operationalWing = defineType({
  name: "operationalWing",
  title: "Operational Wing",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "metrics",
      title: "Highlight Metric",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "metrics",
      media: "image",
    },
  },
});
