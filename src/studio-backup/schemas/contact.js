// studio/schemas/contact.js

export default {
  name: "contact",
  title: "Contact Page",
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
      name: "connect",
      title: "Connect Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "methods",
          title: "Connect Methods",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "icon", title: "Icon Name", type: "string" },
                { name: "label", title: "Label", type: "string" },
                { name: "value", title: "Value", type: "string" },
                { name: "href", title: "Link URL", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "form",
      title: "Contact Form",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "fields",
          title: "Form Fields",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Field Name", type: "string" },
                { name: "label", title: "Label", type: "string" },
                { name: "type", title: "Field Type", type: "string" },
                { name: "required", title: "Required", type: "boolean" },
                { name: "placeholder", title: "Placeholder", type: "string" },
              ],
            },
          ],
        },
        { name: "submitLabel", title: "Submit Button Label", type: "string" },
      ],
    },
    {
      name: "faq",
      title: "FAQ Section",
      type: "object",
      fields: [
        { name: "tagline", title: "Tagline", type: "string" },
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "faqs",
          title: "FAQs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "question", title: "Question", type: "string" },
                { name: "answer", title: "Answer", type: "text" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "partnerships",
      title: "Partnerships Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "cta", title: "CTA Button", type: "cta" },
      ],
    },
    {
      name: "visit",
      title: "Visit Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "locations",
          title: "Locations",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Location Name", type: "string" },
                { name: "address", title: "Address", type: "text" },
                { name: "phone", title: "Phone", type: "string" },
                { name: "hours", title: "Hours", type: "string" },
                { name: "mapUrl", title: "Map URL", type: "url" },
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
    {
      name: "floating",
      title: "Floating Button",
      type: "object",
      fields: [
        { name: "label", title: "Button Label", type: "string" },
        { name: "href", title: "Link URL", type: "string" },
        { name: "icon", title: "Icon Name", type: "string" },
      ],
    },
    {
      name: "paths",
      title: "Paths/Redirects",
      type: "object",
      fields: [
        {
          name: "paths",
          title: "Paths",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "path", title: "Path", type: "string" },
                { name: "destination", title: "Destination", type: "string" },
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
