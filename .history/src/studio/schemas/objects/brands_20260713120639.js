// studio/schemas/brands.js

export default {
  name: "brands",
  title: "Brands Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Brand Name", type: "string" },
            {
              name: "positioning",
              title: "Positioning Statement",
              type: "text",
              rows: 2,
            },
            {
              name: "image",
              title: "Brand Image",
              type: "imageWithAlt",
            },
            { name: "link", title: "Brand URL", type: "url" },
            {
              name: "metadata",
              title: "Metadata",
              type: "object",
              fields: [
                {
                  name: "campaignAlt",
                  title: "Campaign Alt Text",
                  type: "string",
                },
                {
                  name: "availabilityText",
                  title: "Availability Text",
                  type: "string",
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "positioning",
              media: "image.src",
            },
          },
        },
      ],
    },
    {
      name: "cta",
      title: "CTA Buttons",
      type: "object",
      fields: [
        {
          name: "primary",
          title: "Primary CTA",
          type: "cta",
        },
        {
          name: "secondary",
          title: "Secondary CTA",
          type: "cta",
        },
      ],
    },
    {
      name: "bottomCard",
      title: "Bottom Card",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "titleLines",
          title: "Title Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "description", title: "Description", type: "text" },
        {
          name: "descriptionLines",
          title: "Description Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "cta",
          title: "CTA Button",
          type: "cta",
        },
      ],
    },
    {
      name: "animation",
      title: "Animation Config",
      type: "object",
      fields: [
        {
          name: "railSpring",
          title: "Rail Spring Animation",
          type: "object",
          fields: [
            { name: "stiffness", title: "Stiffness", type: "number" },
            { name: "damping", title: "Damping", type: "number" },
          ],
        },
        {
          name: "contentSpring",
          title: "Content Spring Animation",
          type: "object",
          fields: [
            { name: "stiffness", title: "Stiffness", type: "number" },
            { name: "damping", title: "Damping", type: "number" },
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
        {
          name: "tags",
          title: "Tags Configuration",
          type: "object",
          fields: [
            { name: "maxItems", title: "Max Tags to Display", type: "number" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "section.heading",
      subtitle: "section.tagline",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Brands Section",
        subtitle: subtitle || "Featured Brands",
      };
    },
  },
};
