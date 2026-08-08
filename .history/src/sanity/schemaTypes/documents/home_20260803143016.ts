import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuredBrands",
  title: "Featured Brands",
  type: "document",

  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "object",
      fields: [
        defineField({ name: "tagline", type: "string" }),
        defineField({ name: "taglineMobile", type: "string" }),
        defineField({ name: "heading", type: "string" }),
        defineField({
          name: "headingLines",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "descriptionMobile",
          type: "text",
        }),
      ],
    }),

    defineField({
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),

            defineField({
              name: "positioning",
              type: "text",
            }),

            defineField({
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: "imageAlt",
              type: "string",
            }),

            defineField({
              name: "link",
              type: "url",
            }),

            defineField({
              name: "availabilityText",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
