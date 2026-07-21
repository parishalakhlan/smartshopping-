export interface HeroImage {
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

export interface HeroAnimation {
  desktop: {
    background: {
      initial: { scale: number; opacity: number };
      animate: { scale: number; opacity: number };
      transition: { duration: number; ease: [number, number, number, number] };
    };
    content: {
      initial: { opacity: number; y: number };
      animate: { opacity: number; y: number };
      transition: {
        duration: number;
        ease: [number, number, number, number];
        delay: number;
      };
    };
    primaryCta: {
      whileHover: { scale: number };
      whileTap: { scale: number };
      transition: { type: "spring"; stiffness: number; damping: number }; // ← Changed from 'string' to '"spring"'
    };
    secondaryCta: {
      whileHover: { x: number };
      transition: { type: "spring"; stiffness: number; damping: number }; // ← Changed from 'string' to '"spring"'
    };
  };
  mobile: {
    background: {
      initial: { scale: number; opacity: number };
      animate: { scale: number; opacity: number };
      transition: { duration: number; ease: string };
    };
    content: {
      initial: { opacity: number; y: number };
      animate: { opacity: number; y: number };
      transition: {
        duration: number;
        ease: [number, number, number, number];
        delay: number;
      };
    };
    primaryCta: {
      whileTap: { scale: number };
      transition: { type: "spring"; stiffness: number; damping: number }; // ← Changed from 'string' to '"spring"'
    };
    secondaryCta: {
      whileTap: { scale: number; x: number };
    };
    scrollIndicator: {
      animate: { y: number[] };
      transition: { repeat: number; duration: number; ease: string };
    };
  };
}

export interface HeroCTA {
  primary: {
    text: string;
    href: string;
    ariaLabel: string;
  };
  secondary: {
    text: string;
    href: string;
    ariaLabel: string;
  };
}

export interface HeroData {
  section: {
    id: string;
    tagline: string;
    taglineMobile: string;
  };
  headline: {
    line1: string;
    line2: string;
    italic: string;
  };
  description: string;
  descriptionMobile: string;
  cta: HeroCTA;
  image: HeroImage;
  animation: HeroAnimation;
  metadata: {
    sectionTitle: string;
    scrollIndicatorText: string;
  };
}

export const heroData: HeroData = {
  section: {
    id: "hero",
    tagline: "The Smart Shopping Statement",
    taglineMobile: "The Smart Shopping Statement",
  },
  headline: {
    line1: "Fashion Beyond",
    line2: "The Metro.",
    italic: "Closer To Home.",
  },

  description:
    "From everyday essentials to premium collections, Smart Shopping connects growing cities with the brands people love through beautifully curated retail destinations.",
  descriptionMobile:
    "Premium brands and modern shopping, thoughtfully brought closer to your city.",
  cta: {
    primary: {
      text: "Find Your Nearest Store",
      href: "#discover-store",
      ariaLabel: "Explore selected destinations",
    },
    secondary: {
      text: "Browse Fashion Brands",
      href: "#featured-brands",
      ariaLabel: "Discover featured brands",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
    alt: "Smart Shopping Premium Showroom Ambience",
    sizes: {
      desktop: "100vw",
      mobile: "100vw",
    },
    objectFit: "object-cover",
    objectPosition: "object-center",
    priority: true,
  },
  animation: {
    desktop: {
      background: {
        initial: { scale: 1.08, opacity: 0 },
        animate: { scale: 1, opacity: 0.45 },
        transition: { duration: 2.2, ease: [0.25, 1, 0.5, 1] },
      },
      content: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
      },
      primaryCta: {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 400, damping: 25 },
      },
      secondaryCta: {
        whileHover: { x: 6 },
        transition: { type: "spring", stiffness: 400, damping: 25 },
      },
    },
    mobile: {
      background: {
        initial: { scale: 1.15, opacity: 0 },
        animate: { scale: 1.02, opacity: 0.55 },
        transition: { duration: 2.5, ease: "easeOut" },
      },
      content: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.0,
          ease: [0.215, 0.61, 0.355, 1.0],
          delay: 0.1,
        },
      },
      primaryCta: {
        whileTap: { scale: 0.96 },
        transition: { type: "spring", stiffness: 500, damping: 30 },
      },
      secondaryCta: {
        whileTap: { scale: 0.98, x: 4 },
      },
      scrollIndicator: {
        animate: { y: [0, 5, 0] },
        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      },
    },
  },
  metadata: {
    sectionTitle: "Hero Section",
    scrollIndicatorText: "Swipe",
  },
};
