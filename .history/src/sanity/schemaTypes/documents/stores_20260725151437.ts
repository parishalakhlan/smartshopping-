import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "storeLocator",
  title: "Store Locator",
  type: "document",

  fields: [
    // ------------------------
    // Section

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
          ],
        }),
      ],
    }),
  ],
});
