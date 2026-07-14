// features/home/data/networkData.ts

export interface NetworkHighlight {
  title: string;
  body: string;
}

export interface NetworkConfig {
  tagline: string;
  heading: string;
  description: string;
  flagshipLabel: string;
  imageSrc: string;
  highlights: NetworkHighlight[];
}

export const networkConfig: NetworkConfig = {
  tagline: "Retail Footprint",
  heading: "Find Your Nearest Fashion Destination.",
  description:
    "Explore our highly considered network of physical spaces spanning regional culture hubs across Punjab, Haryana, and Rajasthan. Each showroom introduces curated international brand standards directly to your local neighborhood.",
  flagshipLabel: "Flagship Concept • Sector 17",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
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
};
