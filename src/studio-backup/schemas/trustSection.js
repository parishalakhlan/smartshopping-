// studio/schemas/trustSection.js

export default {
  name: "trustSection",
  title: "Trust Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "philosophies",
      title: "Philosophies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
            { name: "numberPrefix", title: "Number Prefix", type: "string" },
          ],
        },
      ],
    },
    {
      name: "animation",
      title: "Animation Config",
      type: "object",
      fields: [
        {
          name: "container",
          title: "Container Animation",
          type: "object",
          fields: [
            {
              name: "staggerChildren",
              title: "Stagger Children (seconds)",
              type: "number",
            },
          ],
        },
        {
          name: "item",
          title: "Item Animation",
          type: "object",
          fields: [
            { name: "y", title: "Initial Y Offset", type: "number" },
            { name: "duration", title: "Duration (seconds)", type: "number" },
          ],
        },
      ],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        { name: "sectionTitle", title: "Section Title", type: "string" },
        {
          name: "numberPrefixFormat",
          title: "Number Prefix Format",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "section.heading",
      subtitle: "section.tagline",
    },
  },
};
