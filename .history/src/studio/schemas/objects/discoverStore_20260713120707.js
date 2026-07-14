// studio/schemas/discoverStore.js

export default {
  name: "discoverStore",
  title: "Discover Store Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "cta",
      title: "CTA Button",
      type: "cta",
    },
    {
      name: "destinations",
      title: "Destinations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "city", title: "City", type: "string" },
            { name: "location", title: "Location", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "imageWithAlt",
            },
          ],
          preview: {
            select: {
              title: "city",
              subtitle: "location",
              media: "image.src",
            },
          },
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
          name: "card",
          title: "Card Animation",
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
        { name: "imageAltPrefix", title: "Image Alt Prefix", type: "string" },
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
