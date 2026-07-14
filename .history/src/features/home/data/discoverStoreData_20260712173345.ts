export interface FeaturedDestination {
  city: string;
  location: string;
  image: {
    src: string;
    alt: string;
    sizes: {
      desktop: string;
      mobile: string;
    };
    objectFit: string;
    objectPosition: string;
    filters: {
      grayscale: string;
      brightness: string;
    };
  };
}

export interface DiscoverStoreConfig {
  section: {
    id: string;
    tagline: string;
    heading: string;
    headingLines: string[];
  };
  cta: {
    text: string;
    link: string;
    ariaLabel: string;
  };
  destinations: FeaturedDestination[];
  animation: {
    container: {
      hidden: { opacity: number };
      visible: {
        opacity: number;
        transition: { staggerChildren: number };
      };
    };
    card: {
      hidden: { opacity: number; y: number };
      visible: {
        opacity: number;
        y: number;
        transition: { duration: number };
      };
    };
  };
  metadata: {
    sectionTitle: string;
    imageAltPrefix: string;
  };
}

export const discoverStoreConfig: DiscoverStoreConfig = {
  section: {
    id: "discover-stores",
    tagline: "Our Spaces",
    heading: "Destinations Designed For Exploration.",
    headingLines: ["Destinations Designed", "For Exploration."],
  },
  cta: {
    text: "Explore All Stores",
    link: "/same-page",
    ariaLabel: "Explore all store locations",
  },
  destinations: [
    {
      city: "Chandigarh",
      location: "Sector 17 Iconic Plaza",
      image: {
        src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
        alt: "Chandigarh Architectural Showroom",
        sizes: {
          desktop: "33vw",
          mobile: "100vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        filters: {
          grayscale: "grayscale-[15%]",
          brightness: "brightness-[0.95]",
        },
      },
    },
    {
      city: "Ludhiana",
      location: "The Pavilion Hub",
      image: {
        src: "https://images.unsplash.com/photo-1560060141-7b9018741ced?q=80&w=800&auto=format&fit=crop",
        alt: "Ludhiana Architectural Showroom",
        sizes: {
          desktop: "33vw",
          mobile: "100vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        filters: {
          grayscale: "grayscale-[15%]",
          brightness: "brightness-[0.95]",
        },
      },
    },
    {
      city: "Amritsar",
      location: "Mall Road District",
      image: {
        src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
        alt: "Amritsar Architectural Showroom",
        sizes: {
          desktop: "33vw",
          mobile: "100vw",
        },
        objectFit: "object-cover",
        objectPosition: "object-center",
        filters: {
          grayscale: "grayscale-[15%]",
          brightness: "brightness-[0.95]",
        },
      },
    },
  ],
  animation: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    },
    card: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.95 },
      },
    },
  },
  metadata: {
    sectionTitle: "Discover Our Stores",
    imageAltPrefix: "Architectural Showroom",
  },
};
