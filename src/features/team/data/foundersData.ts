// @/data/foundersData.ts
export interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  signatureQuote: string;
  narrativeBiography: string;
  focusArea: string;
  focusIcon: "creative" | "operational";
}

export const SHARED_FOUNDERS_DATA: Founder[] = [
  {
    id: "founder-1",
    name: "Aria Lakhlan",
    role: "Co-Founder & Creative Visionary",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    signatureQuote:
      "We did not build this to simply sell fabric. We built it to restore the quiet dignity of slow, conscious curation.",
    narrativeBiography:
      "Aria spent a decade refining minimalist luxury environments across cultural hubs. Believing that retail spaces should function as urban oases, she guides the visual tone, structural aesthetic, and sensory touchpoints of the entire ecosystem.",
    focusArea: "Aesthetic Direction & Sensory Experience Architecture",
    focusIcon: "creative",
  },
  {
    id: "founder-2",
    name: "Devon Lakhlan",
    role: "Co-Founder & Systems Architect",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    signatureQuote:
      "An elegant concept is useless without an equally elegant infrastructure to sustain its weight.",
    narrativeBiography:
      "With a deep background in scalable platform engineering and sustainable supply logistics, Devon turned a creative manifesto into a highly responsive, zero-friction global reality, mapping every thread's journey from mill to home.",
    focusArea: "Technical Ecosystems, Fluid Logistics & Structural Integrity",
    focusIcon: "operational",
  },
];
