import { groq } from "next-sanity";

export const STORE_LOCATOR_QUERY = groq`
*[_type == "storeLocator"][0]{
  section,
  hero,
  metadata,
  regionalFootprints,

  stores[]{
    id,
    name,
    brands,
    isOpen,
    address,
    city,
    state,
    phone,
    coordinates,
    googleMapsUrl,
    hours,
    storeType,
    features,

 "image": {
  "src": image.asset->url,
  "alt": imageAlt,
  "sizes": {
    "desktop": "600px",
    "mobile": "400px"
  },
  "objectFit": "object-cover",
  "objectPosition": "object-center"
}
  }
}
`;
