import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team Page",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Hero Tagline",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Hero Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "founders",
      title: "Founders",
      type: "array",
      of: [{ type: "founder" }],
    }),

    defineField({
      name: "leadership",
      title: "Leadership Team",
      type: "array",
      of: [{ type: "teamMember" }],
    }),

    defineField({
      name: "operationalWings",
      title: "Operational Wings",
      type: "array",
      of: [{ type: "operationalWing" }],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Team Page",
      };
    },
  },
});
