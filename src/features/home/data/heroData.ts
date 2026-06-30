// data/heroData.ts

export interface HeroData {
  tagline: string;
  statementLine1: string;
  statementLine2: string;
  statementItalic: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgImageUrl: string;
  bgImageAlt: string;
}

export const heroData: HeroData = {
  tagline: "The Smart Shopping Statement",
  statementLine1: "Great Fashion",
  statementLine2: "Should Never Depend",
  statementItalic: "On Where You Live.",
  description:
    "World-class curated destinations. Internationally recognized labels. Designed dynamically for your community, closer than you think.",
  primaryCtaText: "Explore Selected Destinations",
  primaryCtaHref: "#discover-store",
  secondaryCtaText: "Discover Brands",
  secondaryCtaHref: "#featured-brands",
  bgImageUrl:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
  bgImageAlt: "Smart Shopping Premium Showroom Ambience",
};
