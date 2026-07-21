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
    tagline: "WHY SMART SHOPPING",
    taglineMobile: "WHY SMART SHOPPING",

    heading: "Everything You Expect From Premium Retail.",

    headingLines: ["Everything You Expect", "From Premium Retail."],

    headingMobile: "Everything You Expect From Premium Retail.",

    headingMobileLines: ["Everything You Expect", "From Premium Retail."],
  },

  pillars: [
    {
      tag: "TRUST // 01",
      title: "Brands You Already Love",
      desc: "Discover India's most trusted fashion brands, thoughtfully brought together under one roof so every visit feels familiar, effortless and reliable.",
      numberPrefix: "01",
    },

    {
      tag: "EXPERIENCE // 02",
      title: "Premium Shopping Experience",
      desc: "Modern store environments, attentive staff and thoughtfully designed spaces create a shopping experience you'll enjoy returning to.",
      numberPrefix: "02",
    },

    {
      tag: "ACCESSIBILITY // 03",
      title: "Closer To Your City",
      desc: "We bring premium fashion destinations beyond metropolitan cities, making quality shopping more accessible without the need to travel.",
      numberPrefix: "03",
    },

    {
      tag: "EVERYDAY // 04",
      title: "Fashion For Everyday Life",
      desc: "From everyday essentials to premium collections, our stores help individuals and families dress confidently for every occasion.",
      numberPrefix: "04",
    },
  ],

  cta: {
    label: "Discover Our Story",
    href: "/about-us",
    ariaLabel: "Learn more about Smart Shopping and our journey",
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
