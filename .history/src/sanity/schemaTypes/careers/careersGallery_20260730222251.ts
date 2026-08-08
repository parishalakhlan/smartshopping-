import { defineField, defineType } from "sanity";

export default defineType({
  name: "careersGallery",
  title: "Careers Gallery",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
