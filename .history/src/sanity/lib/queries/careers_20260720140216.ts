import { groq } from "next-sanity";

export const CAREERS_QUERY = groq`
*[_type=="careers"][0].jobs[]{
     "id": i + 1,   
  role,
  department,
  location,
  type,
  experience,
  overview,
  requirements
}
`;
