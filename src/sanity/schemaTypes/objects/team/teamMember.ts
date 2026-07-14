import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Leadership Member",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "experience",
      title: "Experience",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "education",
      title: "Education",
      type: "text",
    }),

    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "designation",
      media: "image",
    },
  },
});
