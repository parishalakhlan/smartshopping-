// studio/schemas/objects/sectionHeader.js

export default {
  name: "sectionHeader",
  title: "Section Header",
  type: "object",
  fields: [
    {
      name: "id",
      title: "Section ID",
      type: "string",
      description: "Unique identifier for anchor links",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Small uppercase text above heading",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headingLines",
      title: "Heading Lines",
      type: "array",
      of: [{ type: "string" }],
      description: "Split heading into multiple lines for better control",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
  ],
};
