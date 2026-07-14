// features/home/data/discoverStoreData.ts

export interface FeaturedDestination {
  city: string;
  location: string;
  imageSrc: string;
}

export interface DiscoverStoreConfig {
  tagline: string;
  heading: string;
  ctaText: string;
  ctaLink: string;
  destinations: FeaturedDestination[];
}

export const discoverStoreConfig: DiscoverStoreConfig = {
  tagline: "Our Spaces",
  heading: "Destinations Designed For Exploration.",
  ctaText: "Explore All Stores",
  ctaLink: "/same-page",
  destinations: [
    {
      city: "Chandigarh",
      location: "Sector 17 Iconic Plaza",
      imageSrc:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Ludhiana",
      location: "The Pavilion Hub",
      imageSrc:
        "https://images.unsplash.com/photo-1560060141-7b9018741ced?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Amritsar",
      location: "Mall Road District",
      imageSrc:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
  ],
};
