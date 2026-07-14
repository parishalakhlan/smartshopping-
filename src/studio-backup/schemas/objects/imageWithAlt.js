// studio/schemas/objects/imageWithAlt.js

export default {
  name: "imageWithAlt",
  title: "Image with Alt Text",
  type: "object",
  fields: [
    {
      name: "src",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "sizes",
      title: "Responsive Sizes",
      type: "object",
      fields: [
        { name: "desktop", title: "Desktop Size", type: "string" },
        { name: "mobile", title: "Mobile Size", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "src",
    },
  },
};
