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

    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        defineField({
          name: "primary",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "url", type: "string" }),
            defineField({ name: "ariaLabel", type: "string" }),
          ],
        }),

        defineField({
          name: "secondary",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "url", type: "string" }),
            defineField({ name: "ariaLabel", type: "string" }),
          ],
        }),
      ],
    }),

    defineField({
      name: "bottomCard",
      title: "Bottom Card",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),

        defineField({
          name: "titleLines",
          type: "array",
          of: [{ type: "string" }],
        }),

        defineField({
          name: "description",
          type: "text",
        }),

        defineField({
          name: "descriptionLines",
          type: "array",
          of: [{ type: "string" }],
        }),

        defineField({
          name: "cta",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "url", type: "string" }),
            defineField({ name: "ariaLabel", type: "string" }),
          ],
        }),
      ],
    }),

    defineField({
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        defineField({
          name: "sectionTitle",
          type: "string",
        }),
      ],
    }),
  ],
});
