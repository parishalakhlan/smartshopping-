// sanity/queries/storeLocator.ts

import { groq } from "next-sanity";

export const STORE_LOCATOR_QUERY = groq`
*[_type == "storeLocator"][0]{
  section,

  hero{
    label,
    headline,
    supportingText,

    "image": {
      "src": image.asset->url,
      "alt": imageAlt,
      "sizes": {
        "desktop": "1200px",
        "mobile": "800px"
      },
      "objectFit": "object-cover",
      "objectPosition": "object-center"
    }
  },

  metadata,

  regionalFootprints[] {
    id,
    name,
    count,
    svgPath,
    labelX,
    labelY,
    cities
  },

  stores[] {
    id,
    name,
    brands,
    isOpen,
    address,
    city,
    state,
    phone,

    coordinates{
      lat,
      lng
    },

    "image": {
      "src": image.asset->url,
      "alt": imageAlt,
      "sizes": {
        "desktop": "600px",
        "mobile": "400px"
      },
      "objectFit": "object-cover",
      "objectPosition": "object-center"
    },

    googleMapsUrl,
    hours,

    metadata: {
      "storeType": storeType,
      "features": features
    }
  }
}
`;
