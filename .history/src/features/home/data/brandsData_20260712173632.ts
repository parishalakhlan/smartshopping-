export interface BrandImage {
  src: string;
  alt: string;
  sizes: {
    desktop: string;
    mobile: string;
  };
  objectFit: string;
  objectPosition: string;
  priority?: boolean;
}

export interface BrandTags {
  display: string[];
  maxItems: number;
}

export interface BrandCTA {
  label: string;
  url: string;
  ariaLabel: string;
}

export interface Brand {
  name: string;
  positioning: string;
  image: BrandImage;
  link: string;
  metadata: {
    campaignAlt: string;
    availabilityText: string;
  };
}

export interface FeaturedBrandsConfig {
  section: {
    id: string;
    tagline: string;
    taglineMobile: string;
    heading: string;
    headingLines: string[];
    description: string;
    descriptionMobile: string;
  };
  brands: Brand[];
  cta: {
    primary: BrandCTA;
    secondary: BrandCTA;
  };
  bottomCard: {
    title: string;
    titleLines: string[];
    description: string;
    descriptionLines: string[];
    cta: BrandCTA;
  };
  animation: {
    railSpring: {
      type: "spring";
      stiffness: number;
      damping: number;
    };
    contentSpring: {
      type: "spring";
      stiffness: number;
      damping: number;
    };
  };
  metadata: {
    sectionTitle: string;
    imageAltPrefix: string;
    tags: BrandTags;
  };
}

export const featuredBrandsConfig: FeaturedBrandsConfig = {
  section: {
    id: "featured-brands",
    tagline: "Brand Discovery",
    taglineMobile: "OUR PREMIUM BRANDS",
    heading: "Global Curations. Made Accessible.",
    headingLines: ["Global Curations.", "Made Accessible."],
    description:
      "Premium international brands thoughtfully curated for every member of the family.",
    descriptionMobile:
      "Premium international brands thoughtfully curated for every member of the family.",
  },
  brands: [
    {
      name: "Jack & Jones",
      positioning:
        "Premium Contemporary Casualwear & Redefined Denim Essentials",
      image: {
        src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
        alt: "Jack & Jones Brand Campaign",
        sizes: {
          desktop: "380px",
          mobile: "90vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        priority: false,
      },
      link: "#",
      metadata: {
        campaignAlt: "Jack & Jones Architectural Luxury Campaign",
        availabilityText: "Available At Smart Shopping",
      },
    },
    {
      name: "Vero Moda",
      positioning:
        "Chic Modern European Trends Architecture for the Contemporary Woman",
      image: {
        src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
        alt: "Vero Moda Brand Campaign",
        sizes: {
          desktop: "380px",
          mobile: "90vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        priority: false,
      },
      link: "#",
      metadata: {
        campaignAlt: "Vero Moda Architectural Luxury Campaign",
        availabilityText: "Available At Smart Shopping",
      },
    },
    {
      name: "Celio",
      positioning: "Effortless Parisian Urban Smart Menswear Aesthetics",
      image: {
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
        alt: "Celio Brand Campaign",
        sizes: {
          desktop: "380px",
          mobile: "90vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        priority: false,
      },
      link: "#",
      metadata: {
        campaignAlt: "Celio Architectural Luxury Campaign",
        availabilityText: "Available At Smart Shopping",
      },
    },
    {
      name: "Only",
      positioning:
        "Edgy Fast-Fashion & Authentic Western Streetwear Expressions",
      image: {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        alt: "Only Brand Campaign",
        sizes: {
          desktop: "380px",
          mobile: "90vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        priority: false,
      },
      link: "#",
      metadata: {
        campaignAlt: "Only Architectural Luxury Campaign",
        availabilityText: "Available At Smart Shopping",
      },
    },
    {
      name: "Selected Homme",
      positioning:
        "Minimalist Scandinavian Tailoring & Sustainable Luxury Essentials",
      image: {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
        alt: "Selected Homme Brand Campaign",
        sizes: {
          desktop: "380px",
          mobile: "90vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        priority: false,
      },
      link: "#",
      metadata: {
        campaignAlt: "Selected Homme Architectural Luxury Campaign",
        availabilityText: "Available At Smart Shopping",
      },
    },
  ],
  cta: {
    primary: {
      label: "Visit Official Website",
      url: "#",
      ariaLabel: "Visit official brand website",
    },
    secondary: {
      label: "Find A Store",
      url: "/store-locator",
      ariaLabel: "Find a Smart Shopping store near you",
    },
  },
  bottomCard: {
    title: "Can't Decide?",
    titleLines: ["Can't", "Decide?"],
    description:
      "Visit your nearest Smart Shopping store and experience every collection in person.",
    descriptionLines: [
      "Visit your nearest Smart Shopping store",
      "and experience every collection in person.",
    ],
    cta: {
      label: "Find A Store",
      url: "/store-locator",
      ariaLabel: "Find a Smart Shopping store near you",
    },
  },
  animation: {
    railSpring: {
      type: "spring",
      stiffness: 380,
      damping: 30,
    },
    contentSpring: {
      type: "spring",
      stiffness: 350,
      damping: 32,
    },
  },
  metadata: {
    sectionTitle: "Featured Brands",
    imageAltPrefix: "Brand Campaign",
    tags: {
      display: [],
      maxItems: 3,
    },
  },
};
