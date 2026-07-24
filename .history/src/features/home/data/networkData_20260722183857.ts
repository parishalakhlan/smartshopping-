export interface NetworkHighlight {
  title: string;
  body: string;
}

export interface NetworkImage {
  src: string;
  alt: string;
  sizes: {
    desktop: string;
    mobile: string;
  };
  objectFit: string;
  objectPosition: string;
  brightness: string;
  contrast: string;
  priority: boolean;
}

export interface NetworkCTA {
  primary: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  secondary: {
    label: string;
    href: string;
    ariaLabel: string;
  };
}

export interface NetworkAnimation {
  image: {
    whileHover: { scale: number };
    transition: { duration: number; ease: number[] };
  };
  primaryCta: {
    whileHover: { x: number };
  };
}

export interface NetworkConfig {
  section: {
    id: string;
    tagline: string;
    taglineMobile: string;
    heading: string;
    headingLines: string[];
  };
  description: string;
  descriptionMobile: string;
  flagshipLabel: string;
  flagshipLabelMobile: string;
  image: NetworkImage;
  highlights: NetworkHighlight[];
  cta: NetworkCTA;
  animation: NetworkAnimation;
  metadata: {
    sectionTitle: string;
  };
}

export const networkConfig: NetworkConfig = {
  section: {
    id: "store-network",
    tagline: "Retail Footprint",
    taglineMobile: "Retail Footprint",
    heading: "Find Your Nearest Fashion Destination.",
    headingLines: ["Find Your Nearest", "Fashion Destination."],
  },
  description:
    "Explore our highly considered network of physical spaces spanning regional culture hubs across Punjab, Haryana, and Rajasthan. Each showroom introduces curated international brand standards directly to your local neighborhood.",
  descriptionMobile:
    "Explore our highly considered network of physical spaces spanning regional culture hubs across Punjab, Haryana, and Rajasthan. Each showroom introduces curated international brand standards directly to your local neighborhood.",
  flagshipLabel: "Smart Shopping • Model Town",
  flagshipLabelMobile: "Smart Shopping • Model Town",
  image: {
    src: "/showrooms/showroom3.webp",
    alt: "Premium Concept Store Architecture",
    sizes: {
      desktop: "45vw",
      mobile: "100vw",
    },
    objectFit: "object-cover",
    objectPosition: "object-center",
    brightness: "brightness-[0.94]",
    contrast: "contrast-[1.01]",
    priority: true,
  },
  highlights: [
    {
      title: "Primary Enclaves",
      body: "Amritsar, Jalandhar, Ludhiana, Jaipur, Udaipur, and Kota.",
    },
    {
      title: "Environment",
      body: "Immersive architecture tailored to premium brand experiences.",
    },
  ],
  cta: {
    primary: {
      label: "Launch Store Locator",
      href: "/store-locator",
      ariaLabel: "Launch store locator to find nearest store",
    },
    secondary: {
      label: "Private Appointments",
      href: "/contact",
      ariaLabel: "Book private appointment",
    },
  },
  animation: {
    image: {
      whileHover: { scale: 1.02 },
      transition: { duration: 1.4, ease: [0.25, 1, 0.5, 1] },
    },
    primaryCta: {
      whileHover: { x: 6 },
    },
  },
  metadata: {
    sectionTitle: "Store Network Section",
  },
};
