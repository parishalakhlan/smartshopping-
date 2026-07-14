// studio/schemas/partners.js

export default {
  name: "partners",
  title: "Partners Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "headingLines",
          title: "Heading Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "italicText", title: "Italic Text", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "image",
          title: "Hero Image",
          type: "imageWithAlt",
        },
        {
          name: "cta",
          title: "CTA Button",
          type: "cta",
        },
      ],
    },
    {
      name: "pillars",
      title: "Strategic Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "image",
              title: "Image",
              type: "imageWithAlt",
            },
            { name: "impact", title: "Impact Metric", type: "string" },
            { name: "example", title: "Example", type: "text" },
          ],
        },
      ],
    },
    {
      name: "partnershipModels",
      title: "Partnership Models",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "suitability", title: "Suitability", type: "text" },
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
            { name: "support", title: "Support", type: "text" },
            { name: "journey", title: "Journey", type: "text" },
          ],
        },
      ],
    },
    {
      name: "regionalRegions",
      title: "Regional Regions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "presence", title: "Presence", type: "string" },
            { name: "opportunities", title: "Opportunities", type: "string" },
            { name: "vision", title: "Vision", type: "text" },
            {
              name: "coordinates",
              title: "Map Coordinates",
              type: "object",
              fields: [
                { name: "x", title: "X Position (%)", type: "number" },
                { name: "y", title: "Y Position (%)", type: "number" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "journeyStations",
      title: "Journey Stations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "step", title: "Step Number", type: "string" },
            { name: "phase", title: "Phase Name", type: "string" },
            { name: "process", title: "Process Description", type: "text" },
            { name: "timeline", title: "Timeline", type: "string" },
            { name: "supportOffered", title: "Support Offered", type: "text" },
          ],
        },
      ],
    },
    {
      name: "successStories",
      title: "Success Stories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "partner", title: "Partner Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "challenge", title: "Challenge", type: "text" },
            { name: "journey", title: "Journey", type: "text" },
            { name: "outcome", title: "Outcome", type: "text" },
            {
              name: "image",
              title: "Image",
              type: "imageWithAlt",
            },
          ],
        },
      ],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
    {
      name: "closingCTA",
      title: "Closing CTA",
      type: "object",
      fields: [
        { name: "id", title: "ID", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "headingLines",
          title: "Heading Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "subText", title: "Sub Text", type: "string" },
        { name: "mobileHeading", title: "Mobile Heading", type: "string" },
        {
          name: "mobileHeadingLines",
          title: "Mobile Heading Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "mobileSubText", title: "Mobile Sub Text", type: "string" },
      ],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        {
          name: "sectionTitles",
          title: "Section Titles",
          type: "object",
          fields: [
            { name: "pillars", title: "Pillars", type: "string" },
            { name: "models", title: "Models", type: "string" },
            { name: "regions", title: "Regions", type: "string" },
            { name: "journey", title: "Journey", type: "string" },
            { name: "stories", title: "Stories", type: "string" },
            { name: "faq", title: "FAQ", type: "string" },
            { name: "application", title: "Application", type: "string" },
            { name: "closingCTA", title: "Closing CTA", type: "string" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "section.title",
      subtitle: "section.subtitle",
    },
  },
};
