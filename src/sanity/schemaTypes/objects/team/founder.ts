import { defineField, defineType } from "sanity";

export const founder = defineType({
  name: "founder",
  title: "Founder",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "signatureQuote",
      title: "Signature Quote",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "narrativeBiography",
      title: "Biography",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "focusArea",
      title: "Focus Area",
      type: "string",
    }),

    defineField({
      name: "focusIcon",
      title: "Focus Type",
      type: "string",
      options: {
        list: [
          { title: "Creative", value: "creative" },
          { title: "Operational", value: "operational" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
