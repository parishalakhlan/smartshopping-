// app/page.tsx
import HomeHero from "@/features/home/components/HomeHero";
import FeaturedBrands from "@/features/home/components/FeaturedBrands";
import WhySmartShopping from "@/features/home/components/WhySmartShopping";
import StoreNetwork from "@/features/home/components/StoreNetwork";

export const metadata = {
  title:
    "Smart Shopping | Multi-Brand International Fashion Retailers North India",
  description:
    "North India's premier retail group bringing globally recognized premium fashion brands like Jack & Jones, Vero Moda, and Celio closer to home.",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#F5F2EC] text-[#0F172A] selection:bg-[#163B65] selection:text-white overflow-x-hidden">
      {/* SECTION 1: IMMERSIVE HERO */}
      <HomeHero />

      {/* SECTION 2: DISCOVER BRANDS (Horizontal Snap Carousel on Mobile) */}
      <FeaturedBrands />

      {/* SECTION 3: WHY SMART SHOPPING? (Expandable Editorial Block on Mobile) */}
      <WhySmartShopping />

      {/* SECTION 4: DISCOVER YOUR CITY (Bottom Sheet Drawer Asset Trigger on Mobile) */}
      <StoreNetwork />

      {/* SECTION 5: THE SMART SHOPPING EXPERIENCE (Z-Index Interactive Story Stack on Mobile) */}

      {/* SECTION 6: OUR JOURNEY (Instagram-Style Immersive Story Modal on Mobile) */}
      <OurJourney />
    </main>
  );
}
