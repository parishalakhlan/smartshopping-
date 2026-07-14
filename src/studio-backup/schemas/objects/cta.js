// studio/schemas/objects/cta.js

export default {
  name: "cta",
  title: "Call to Action",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "href",
      title: "Link URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ariaLabel",
      title: "ARIA Label",
      type: "string",
      description: "For accessibility purposes",
    },
  ],
};
