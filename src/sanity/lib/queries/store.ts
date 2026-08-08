import { groq } from "next-sanity";

export const STORE_LOCATOR_QUERY = groq`
*[_type == "storeLocator"][0]{
  
 

  stores[]{
    _key,
    name,
   
    address,
    city,
    state,
    phone,
  
    googleMapsUrl,
   

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
