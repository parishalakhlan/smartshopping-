import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "storeLocator",
  title: "Store Locator",
  type: "document",

  fields: [
    // ------------------------
    // Section
    // ------------------------
    defineField({
      name: "section",
      title: "Section",
      type: "object",

      fields: [
        defineField({
          name: "id",
          type: "string",
        }),

        defineField({
          name: "title",
          type: "string",
        }),

        defineField({
          name: "subtitle",
          type: "text",
        }),
      ],
    }),

    // ------------------------
    // Hero
    // ------------------------

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",

      fields: [
        defineField({
          name: "label",
          type: "string",
        }),

        defineField({
          name: "headline",
          type: "string",
        }),

        defineField({
          name: "supportingText",
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
      ],
    }),

    // ------------------------
    // Metadata
    // ------------------------

    defineField({
      name: "metadata",
      type: "object",

      fields: [
        defineField({
          name: "networkTitle",
          type: "string",
        }),

        defineField({
          name: "locatorTitle",
          type: "string",
        }),
      ],
    }),

    // ------------------------
    // Regional Footprints
    // ------------------------

    defineField({
      name: "regionalFootprints",
      title: "Regional Footprints",
      type: "array",

      of: [
        defineArrayMember({
          type: "object",

          fields: [
            defineField({
              name: "id",
              type: "string",
            }),

            defineField({
              name: "name",
              type: "string",
            }),

            defineField({
              name: "count",
              type: "number",
            }),

            defineField({
              name: "svgPath",
              type: "text",
            }),

            defineField({
              name: "labelX",
              type: "number",
            }),

            defineField({
              name: "labelY",
              type: "number",
            }),

            defineField({
              name: "cities",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),

    // ------------------------
    // Stores
    // ------------------------

    defineField({
      name: "stores",
      title: "Stores",
      type: "array",

      of: [
        defineArrayMember({
          type: "object",

          preview: {
            select: {
              title: "name",
              subtitle: "city",
              media: "image",
            },
          },

          fields: [
            defineField({
              name: "id",
              type: "string",
            }),

            defineField({
              name: "name",
              type: "string",
            }),

            defineField({
              name: "brands",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "isOpen",
              type: "boolean",
            }),

            defineField({
              name: "address",
              type: "text",
            }),

            defineField({
              name: "city",
              type: "string",
            }),

            defineField({
              name: "state",
              type: "string",
            }),

            defineField({
              name: "phone",
              type: "string",
            }),

            defineField({
              name: "coordinates",
              type: "object",

              fields: [
                defineField({
                  name: "lat",
                  type: "number",
                }),

                defineField({
                  name: "lng",
                  type: "number",
                }),
              ],
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
              name: "googleMapsUrl",
              type: "url",
            }),

            defineField({
              name: "hours",
              type: "string",
            }),

            defineField({
              name: "storeType",
              type: "string",
            }),

            defineField({
              name: "features",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),
  ],
});
