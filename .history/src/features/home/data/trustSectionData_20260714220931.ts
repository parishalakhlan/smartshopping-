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
    tagline: "THE SMART SHOPPING PROMISE",
    taglineMobile: "THE SMART SHOPPING PROMISE",

    heading: "Built On Trust. Designed For Everyday Life.",

    headingLines: ["Built On Trust.", "Designed For Everyday Life."],

    headingMobile: "Built On Trust. Designed For Everyday Life.",

    headingMobileLines: ["Built On Trust.", "Designed For Everyday Life."],
  },

  philosophies: [
    {
      title: "Brands Worth Trusting",
      body: "We partner with fashion brands people already know and love, ensuring every visit offers quality, authenticity and confidence.",
      numberPrefix: "01",
    },

    {
      title: "Experience That Feels Premium",
      body: "From thoughtfully designed stores to attentive customer service, every detail is focused on making shopping enjoyable and effortless.",
      numberPrefix: "02",
    },

    {
      title: "Growing With Every Community",
      body: "By bringing premium retail experiences beyond metropolitan cities, we're helping more communities enjoy modern fashion closer to home.",
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
