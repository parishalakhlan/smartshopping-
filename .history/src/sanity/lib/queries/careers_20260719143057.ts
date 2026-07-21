import { groq } from "next-sanity";

export const CAREERS_QUERY = groq`
*[_type=="careers"][0]{
  jobs[]{
    role,
    department,
    location,
    type,
    experience,
    overview,
    requirements
  }
}
`;
