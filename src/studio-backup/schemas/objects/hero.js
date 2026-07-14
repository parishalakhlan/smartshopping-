// studio/schemas/hero.js

export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "headline",
      title: "Headline",
      type: "object",
      fields: [
        { name: "line1", title: "Line 1", type: "string" },
        { name: "line2", title: "Line 2", type: "string" },
        { name: "italic", title: "Italic Text", type: "string" },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "descriptionMobile",
      title: "Description (Mobile)",
      type: "text",
      rows: 3,
      description: "Optional shorter description for mobile",
    },
    {
      name: "cta",
      title: "Call to Action",
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
      name: "image",
      title: "Background Image",
      type: "imageWithAlt",
    },
    {
      name: "animation",
      title: "Animation Config",
      type: "object",
      fields: [
        {
          name: "desktop",
          title: "Desktop Animation",
          type: "object",
          fields: [
            {
              name: "background",
              title: "Background Animation",
              type: "object",
              fields: [
                { name: "scale", title: "Initial Scale", type: "number" },
                { name: "opacity", title: "Initial Opacity", type: "number" },
                {
                  name: "duration",
                  title: "Duration (seconds)",
                  type: "number",
                },
              ],
            },
            {
              name: "content",
              title: "Content Animation",
              type: "object",
              fields: [
                { name: "y", title: "Initial Y Offset", type: "number" },
                { name: "opacity", title: "Initial Opacity", type: "number" },
                {
                  name: "duration",
                  title: "Duration (seconds)",
                  type: "number",
                },
                { name: "delay", title: "Delay (seconds)", type: "number" },
              ],
            },
          ],
        },
        {
          name: "mobile",
          title: "Mobile Animation",
          type: "object",
          fields: [
            {
              name: "background",
              title: "Background Animation",
              type: "object",
              fields: [
                { name: "scale", title: "Initial Scale", type: "number" },
                { name: "opacity", title: "Initial Opacity", type: "number" },
                {
                  name: "duration",
                  title: "Duration (seconds)",
                  type: "number",
                },
              ],
            },
            {
              name: "content",
              title: "Content Animation",
              type: "object",
              fields: [
                { name: "y", title: "Initial Y Offset", type: "number" },
                { name: "opacity", title: "Initial Opacity", type: "number" },
                {
                  name: "duration",
                  title: "Duration (seconds)",
                  type: "number",
                },
                { name: "delay", title: "Delay (seconds)", type: "number" },
              ],
            },
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
          name: "scrollIndicatorText",
          title: "Scroll Indicator Text",
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
    prepare({ title, subtitle }) {
      return {
        title: title || "Hero Section",
        subtitle: subtitle || "Home Page",
      };
    },
  },
};
