export const teamQuery = `
*[_type == "team"][0]{
  tagline,
  heading,
  description,

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

    name,
    designation,
     "image": image.asset->url,
    philosophy,
    experience,
    education,
    responsibilities
  },

  operationalWings[]{
    title,
    description,
    metrics,
       "image": image.asset->url,
  }
}
`;
