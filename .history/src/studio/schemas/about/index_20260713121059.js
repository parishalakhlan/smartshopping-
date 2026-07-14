// studio/schemas/about.js

export default {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    },
    {
      name: "shared",
      title: "Shared Content",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
      ],
    },
    {
      name: "cta",
      title: "CTA Section",
      type: "object",
      fields: [
        { name: "text", title: "Text", type: "string" },
        { name: "href", title: "Link URL", type: "string" },
        { name: "buttonLabel", title: "Button Label", type: "string" },
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
      name: "founders",
      title: "Founders Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "founders",
          title: "Founders",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "role", title: "Role", type: "string" },
                { name: "bio", title: "Bio", type: "text" },
                { name: "image", title: "Image", type: "imageWithAlt" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "impact",
      title: "Impact Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "stats",
          title: "Statistics",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", title: "Value", type: "string" },
                { name: "label", title: "Label", type: "string" },
                { name: "description", title: "Description", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "journey",
      title: "Journey Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "milestones",
          title: "Milestones",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "year", title: "Year", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
    },
  },
};
