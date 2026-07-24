import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team Page",
  type: "document",

  fields: [
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
  ],

  preview: {
    prepare() {
      return {
        title: "Team Page",
      };
    },
  },
});
