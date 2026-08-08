import { groq } from "next-sanity";

export const CAREERS_QUERY = groq`
*[_type=="careers"][0].jobs[]{
    "id": _key, 
  role,
  department,
  location,
  type,
  experience,
  overview,
  requirements
}
`;
export const careersGalleryQuery = `
*[_type == "careersGallery"][0]{
  images[]{
    asset->{
      url
    }
  }
}
`;
