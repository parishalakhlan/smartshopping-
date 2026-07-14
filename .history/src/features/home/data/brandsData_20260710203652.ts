// features/home/data/brandsData.ts

export interface Brand {
  name: string;
  positioning: string;
  image: string;
  link: string;
}

export const brandsData: Brand[] = [
  {
    name: "Jack & Jones",
    positioning: "Premium Contemporary Casualwear & Redefined Denim Essentials",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Vero Moda",
    positioning:
      "Chic Modern European Trends Architecture for the Contemporary Woman",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Celio",
    positioning: "Effortless Parisian Urban Smart Menswear Aesthetics",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Only",
    positioning: "Edgy Fast-Fashion & Authentic Western Streetwear Expressions",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Selected Homme",
    positioning:
      "Minimalist Scandinavian Tailoring & Sustainable Luxury Essentials",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];
