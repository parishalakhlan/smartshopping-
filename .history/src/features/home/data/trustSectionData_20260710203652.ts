// features/home/data/trustSectionData.ts

export interface DesignPhilosophy {
  title: string;
  body: string;
}

export interface TrustSectionConfig {
  tagline: string;
  heading: string;
  philosophies: DesignPhilosophy[];
}

export const trustSectionConfig: TrustSectionConfig = {
  tagline: "The House Ethos",
  heading: "Our Commitment To Creative Retail Excellence.",
  philosophies: [
    {
      title: "Curated Selections",
      body: "We do not believe in infinite, mindless choices. Every piece across our environments is handpicked to meet strict international standards.",
    },
    {
      title: "Uncompromising Space",
      body: "Our locations are architectural spaces designed intentionally for deep, premium lifestyle discovery and relaxed physical exploration.",
    },
    {
      title: "Community First",
      body: "We intentionally introduce the cultural energy of premium global fashion hubs straight to the neighborhoods you call home.",
    },
  ],
};
