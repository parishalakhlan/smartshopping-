// studio/schemas/stores.js

export default {
  name: "stores",
  title: "Stores Section",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section Info",
      type: "sectionHeader",
    },
    {
      name: "regionalFootprints",
      title: "Regional Footprints",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "count", title: "Store Count", type: "number" },
            { name: "svgPath", title: "SVG Path", type: "text" },
            { name: "labelX", title: "Label X Position (%)", type: "number" },
            { name: "labelY", title: "Label Y Position (%)", type: "number" },
            {
              name: "cities",
              title: "Cities",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "stores",
      title: "Store List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "name", title: "Store Name", type: "string" },
            {
              name: "brands",
              title: "Brands",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "isOpen", title: "Is Open", type: "boolean" },
            { name: "address", title: "Address", type: "text" },
            { name: "city", title: "City", type: "string" },
            { name: "state", title: "State", type: "string" },
            { name: "phone", title: "Phone", type: "string" },
            {
              name: "coordinates",
              title: "Coordinates",
              type: "object",
              fields: [
                { name: "lat", title: "Latitude", type: "number" },
                { name: "lng", title: "Longitude", type: "number" },
              ],
            },
            { name: "image", title: "Store Image", type: "imageWithAlt" },
            { name: "googleMapsUrl", title: "Google Maps URL", type: "url" },
            { name: "hours", title: "Store Hours", type: "string" },
            {
              name: "metadata",
              title: "Metadata",
              type: "object",
              fields: [
                { name: "storeType", title: "Store Type", type: "string" },
                {
                  name: "features",
                  title: "Features",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "stats",
      title: "Statistics",
      type: "object",
      fields: [
        { name: "showroomsLive", title: "Showrooms Live", type: "number" },
        { name: "globalBrands", title: "Global Brands", type: "number" },
        { name: "clientsServed", title: "Clients Served", type: "string" },
        { name: "territoriesOpen", title: "Territories Open", type: "number" },
        { name: "showroomsLabel", title: "Showrooms Label", type: "string" },
        { name: "brandsLabel", title: "Brands Label", type: "string" },
        { name: "clientsLabel", title: "Clients Label", type: "string" },
        {
          name: "territoriesLabel",
          title: "Territories Label",
          type: "string",
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
            { name: "network", title: "Network Title", type: "string" },
            { name: "locator", title: "Locator Title", type: "string" },
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
