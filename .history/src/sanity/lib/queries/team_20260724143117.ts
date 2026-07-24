export const teamQuery = `
*[_type == "team"][0]{
 

  founders[]{
   "id": _key,
    name,
    role,
      "image": image.asset->url,
    signatureQuote,
    narrativeBiography,
    focusArea,
    focusIcon
  },

  leadership[]{
 "id": _key,
    name,
    designation,
     "image": image.asset->url,
    philosophy,
    experience,
    education,
    responsibilities
  },

}
`;
