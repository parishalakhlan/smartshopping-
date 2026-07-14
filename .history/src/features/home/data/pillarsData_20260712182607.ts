export interface EditorialPillar {
  tag: string;
  title: string;
  desc: string;
  numberPrefix: string;
}

export interface PillarsSection {
  id: string;
  tagline: string;
  taglineMobile: string;
  heading: string;
  headingLines: string[];
  headingMobile: string;
  headingMobileLines: string[];
}

export interface PillarsCTA {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface PillarsAnimation {
  container: {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: { staggerChildren: number };
    };
  };
  block: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number };
    };
  };
  cta: {
    whileHover: { x: number };
  };
}

export interface PillarsConfig {
  section: PillarsSection;
  pillars: EditorialPillar[];
  cta: PillarsCTA;
  animation: PillarsAnimation;
  metadata: {
    sectionTitle: string;
    tagFormat: string;
  };
}

export const pillarsConfig: PillarsConfig = {
  section: {
    id: "why-smart-shopping",
    tagline: "Operational Pillars",
    taglineMobile: "Operational Pillars",
    heading: "Redefining The Landscape Of Modern Curation.",
    headingLines: ["Redefining The Landscape", "Of Modern Curation."],
    headingMobile: "Redefining The Modern Curation.",
    headingMobileLines: ["Redefining The", "Modern Curation."],
  },
  pillars: [
    {
      tag: "Aesthetic // 01",
      title: "International Curation",
      desc: "Bringing world-renowned contemporary silhouettes and clean fabric expressions directly to local regional hubs.",
      numberPrefix: "01",
    },
    {
      tag: "Heritage // 02",
      title: "Exceptional Environments",
      desc: "Architectural layouts planned intentionally down to the smallest detail to ensure slow, meaningful retail discovery.",
      numberPrefix: "02",
    },
    {
      tag: "Culture // 03",
      title: "Community Connection",
      desc: "Spaces created not just to display collections, but to act as conversational anchors inside your city.",
      numberPrefix: "03",
    },
    {
      tag: "Standard // 04",
      title: "Tailored Experience",
      desc: "Attentive, non-intrusive service structures configured entirely to accommodate individual lifestyles.",
      numberPrefix: "04",
    },
  ],
  cta: {
    label: "Read Our Full Story",
    href: "/about-us",
    ariaLabel: "Read our full story about Smart Shopping",
  },
  animation: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
      },
    },
    block: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.95 },
      },
    },
    cta: {
      whileHover: { x: 6 },
    },
  },
  metadata: {
    sectionTitle: "Why Smart Shopping Section",
    tagFormat: "{tag} // {number}",
  },
};
