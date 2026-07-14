// studio/schemas/navbar.js

export default {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "navigation",
      title: "Navigation Items",
      type: "object",
      fields: [
        {
          name: "items",
          title: "Main Navigation Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "href", title: "URL", type: "string" },
                {
                  name: "children",
                  title: "Sub-menu Items",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "label", title: "Label", type: "string" },
                        { name: "href", title: "URL", type: "string" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "aboutSubmenu",
          title: "About Sub-menu Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "href", title: "URL", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      title: "Call to Action Button",
      type: "cta",
    },
    {
      name: "connect",
      title: "Connect Button",
      type: "cta",
    },
    {
      name: "contact",
      title: "Contact Info",
      type: "object",
      fields: [
        { name: "phone", title: "Phone Number", type: "string" },
        { name: "email", title: "Email Address", type: "string" },
      ],
    },
    {
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Platform Name", type: "string" },
            { name: "href", title: "URL", type: "url" },
            { name: "icon", title: "Icon Name", type: "string" },
          ],
        },
      ],
    },
    {
      name: "announcement",
      title: "Announcement Bar",
      type: "object",
      fields: [
        { name: "text", title: "Announcement Text", type: "string" },
        { name: "ariaLabel", title: "ARIA Label", type: "string" },
      ],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        { name: "siteName", title: "Site Name", type: "string" },
        { name: "logoAlt", title: "Logo Alt Text", type: "string" },
        { name: "logoFallback", title: "Logo Fallback Text", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "metadata.siteName",
    },
  },
};
