import { defineField, defineType } from "sanity";

export default defineType({
  name: "careers",
  title: "Careers",
  type: "document",

  fields: [
    defineField({
      name: "jobs",
      title: "Job Openings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "role",
              title: "Role",
              type: "string",
            }),

            defineField({
              name: "department",
              title: "Department",
              type: "string",
            }),

            defineField({
              name: "location",
              title: "Location",
              type: "string",
            }),

            defineField({
              name: "type",
              title: "Employment Type",
              type: "string",
            }),

            defineField({
              name: "experience",
              title: "Experience",
              type: "string",
            }),

            defineField({
              name: "overview",
              title: "Overview",
              type: "text",
            }),

            defineField({
              name: "requirements",
              title: "Requirements",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
});
