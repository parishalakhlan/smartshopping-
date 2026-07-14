// studio/schemas/team.js

export default {
  name: "team",
  title: "Team Page",
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
      ],
    },
    {
      name: "founders",
      title: "Founders",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "founders",
          title: "Founders List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "role", title: "Role", type: "string" },
                { name: "bio", title: "Bio", type: "text" },
                { name: "image", title: "Image", type: "imageWithAlt" },
                {
                  name: "social",
                  title: "Social Links",
                  type: "object",
                  fields: [
                    { name: "linkedin", title: "LinkedIn URL", type: "url" },
                    { name: "twitter", title: "Twitter URL", type: "url" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "leadership",
      title: "Leadership Team",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "members",
          title: "Leadership Members",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "role", title: "Role", type: "string" },
                { name: "bio", title: "Bio", type: "text" },
                { name: "image", title: "Image", type: "imageWithAlt" },
                { name: "department", title: "Department", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "wings",
      title: "Departments/Wings",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "wings",
          title: "Wings",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "description", title: "Description", type: "text" },
                { name: "icon", title: "Icon Name", type: "string" },
                {
                  name: "members",
                  title: "Team Members",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "name", title: "Name", type: "string" },
                        { name: "role", title: "Role", type: "string" },
                      ],
                    },
                  ],
                },
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
        { name: "cta", title: "CTA Button", type: "cta" },
      ],
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
    },
  },
};
