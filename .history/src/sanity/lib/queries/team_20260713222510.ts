export const teamQuery = `
*[_type == "team"][0]{
  tagline,
  heading,
  description,

  founders[]{
    name,
    role,
    image,
    signatureQuote,
    narrativeBiography,
    focusArea,
    focusIcon
  },

  leadership[]{
    name,
    designation,
    image,
    philosophy,
    experience,
    education,
    responsibilities
  },

  operationalWings[]{
    title,
    description,
    metrics,
    image
  }
}
`;
