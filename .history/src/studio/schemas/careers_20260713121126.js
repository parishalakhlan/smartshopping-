// studio/schemas/careers.js

export default {
  name: "careers",
  title: "Careers Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "image", title: "Image", type: "imageWithAlt" },
        { name: "cta", title: "CTA Button", type: "cta" },
      ],
    },
    {
      name: "openings",
      title: "Job Openings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Job Title", type: "string" },
            { name: "department", title: "Department", type: "string" },
            { name: "location", title: "Location", type: "string" },
            { name: "type", title: "Employment Type", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "requirements",
              title: "Requirements",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "benefits",
              title: "Benefits",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "culture",
      title: "Culture Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "values",
          title: "Values",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      title: "CTA Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "buttonLabel", title: "Button Label", type: "string" },
        { name: "buttonHref", title: "Button URL", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
    },
  },
};
