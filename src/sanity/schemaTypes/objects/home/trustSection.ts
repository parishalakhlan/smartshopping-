import { defineField, defineType } from "sanity";

export const trustSection = defineType({
  name: "trustSection",
  title: "Trust Section",
  type: "object",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "philosophies",
      title: "Philosophies",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "body",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Trust Section",
      };
    },
  },
});
