export interface DesignPhilosophy {
  title: string;
  body: string;
  numberPrefix: string;
}

export interface TrustSectionImage {
  src: string;
  alt: string;
  sizes: {
    desktop: string;
    mobile: string;
  };
  objectFit: string;
  objectPosition: string;
  priority: boolean;
}

export interface TrustSectionAnimation {
  container: {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: { staggerChildren: number };
    };
  };
  item: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number };
    };
  };
}

export interface TrustSectionConfig {
  section: {
    id: string;
    tagline: string;
    taglineMobile: string;
    heading: string;
    headingLines: string[];
    headingMobile: string;
    headingMobileLines: string[];
  };
  philosophies: DesignPhilosophy[];
  animation: TrustSectionAnimation;
  metadata: {
    sectionTitle: string;
    numberPrefixFormat: string;
  };
}

export const trustSectionConfig: TrustSectionConfig = {
  section: {
    id: "trust-section",
    tagline: "The House Ethos",
    taglineMobile: "The House Ethos",
    heading: "Our Commitment To Creative Retail Excellence.",
    headingLines: ["Our Commitment To Creative", "Retail Excellence."],
    headingMobile: "Our Commitment To Creative Retail Excellence.",
    headingMobileLines: ["Our Commitment To Creative", "Retail Excellence."],
  },
  philosophies: [
    {
      title: "Curated Selections",
      body: "We do not believe in infinite, mindless choices. Every piece across our environments is handpicked to meet strict international standards.",
      numberPrefix: "01",
    },
    {
      title: "Uncompromising Space",
      body: "Our locations are architectural spaces designed intentionally for deep, premium lifestyle discovery and relaxed physical exploration.",
      numberPrefix: "02",
    },
    {
      title: "Community First",
      body: "We intentionally introduce the cultural energy of premium global fashion hubs straight to the neighborhoods you call home.",
      numberPrefix: "03",
    },
  ],
  animation: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.95 },
      },
    },
  },
  metadata: {
    sectionTitle: "Trust Section",
    numberPrefixFormat: "0{index}",
  },
};
