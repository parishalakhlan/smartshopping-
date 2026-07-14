import { groq } from "next-sanity";

export const FEATURED_BRANDS_QUERY = groq`
*[_type == "featuredBrands"][0]{
  section,

  brands[]{
    name,
    positioning,

    "image": {
      "src": image.asset->url,
      "alt": imageAlt,
      "sizes": {
        "desktop": "380px",
        "mobile": "90vw"
      },
      "objectFit": "object-cover",
      "objectPosition": "object-center",
      "priority": false
    },

    link,

    "metadata": {
      "campaignAlt": campaignAlt,
      "availabilityText": availabilityText
    }
  },

  cta,

  bottomCard,

  metadata
}
`;
