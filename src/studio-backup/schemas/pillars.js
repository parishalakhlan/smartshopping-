// studio/schemas/pillars.js

export default {
  name: "pillars",
  title: "Pillars Section (Why Smart Shopping)",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "tag", title: "Tag", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text" },
            { name: "numberPrefix", title: "Number Prefix", type: "string" },
          ],
        },
      ],
    },
    {
      name: "cta",
      title: "CTA Button",
      type: "cta",
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
          name: "block",
          title: "Block Animation",
          type: "object",
          fields: [
            { name: "y", title: "Initial Y Offset", type: "number" },
            { name: "duration", title: "Duration (seconds)", type: "number" },
          ],
        },
        {
          name: "cta",
          title: "CTA Animation",
          type: "object",
          fields: [{ name: "x", title: "Hover X Offset", type: "number" }],
        },
      ],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        { name: "sectionTitle", title: "Section Title", type: "string" },
        { name: "tagFormat", title: "Tag Format", type: "string" },
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
