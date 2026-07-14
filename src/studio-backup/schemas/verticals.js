// studio/schemas/verticals.js

export default {
  name: "verticals",
  title: "Verticals Page",
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
          name: "ctaPrimary",
          title: "Primary CTA",
          type: "cta",
        },
        {
          name: "ctaSecondary",
          title: "Secondary CTA",
          type: "cta",
        },
        {
          name: "image",
          title: "Hero Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "universeNodes",
      title: "Universe Nodes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "overview", title: "Overview", type: "text" },
            { name: "purpose", title: "Purpose", type: "text" },
            { name: "impact", title: "Impact", type: "string" },
            { name: "vision", title: "Vision", type: "string" },
            { name: "image", title: "Image", type: "imageWithAlt" },
            { name: "angle", title: "Angle (degrees)", type: "number" },
          ],
        },
      ],
    },
    {
      name: "editorialPillars",
      title: "Editorial Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "mission", title: "Mission", type: "text" },
            {
              name: "operations",
              title: "Operations",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "team", title: "Team Description", type: "text" },
            {
              name: "achievements",
              title: "Achievements",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "opportunities",
              title: "Opportunities",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "image", title: "Image", type: "imageWithAlt" },
          ],
        },
      ],
    },
    {
      name: "capabilityItems",
      title: "Capability Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "outcome", title: "Outcome", type: "string" },
            { name: "image", title: "Image", type: "imageWithAlt" },
          ],
        },
      ],
    },
    {
      name: "journeyStages",
      title: "Journey Stages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "stageName", title: "Stage Name", type: "string" },
            {
              name: "responsibilities",
              title: "Responsibilities",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "technology", title: "Technology", type: "string" },
            { name: "people", title: "People", type: "string" },
            { name: "outcome", title: "Outcome", type: "text" },
          ],
        },
      ],
    },
    {
      name: "growthLayers",
      title: "Growth Layers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text" },
            { name: "keyMetric", title: "Key Metric", type: "string" },
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
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "headingLines",
          title: "Heading Lines",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "ctaPrimary",
          title: "Primary CTA",
          type: "cta",
        },
        {
          name: "ctaSecondary",
          title: "Secondary CTA",
          type: "cta",
        },
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
            { name: "universe", title: "Universe Title", type: "string" },
            { name: "pillars", title: "Pillars Title", type: "string" },
            {
              name: "capabilities",
              title: "Capabilities Title",
              type: "string",
            },
            { name: "journey", title: "Journey Title", type: "string" },
            { name: "growth", title: "Growth Title", type: "string" },
            { name: "faq", title: "FAQ Title", type: "string" },
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
