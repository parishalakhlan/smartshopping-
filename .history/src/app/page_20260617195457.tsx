import HomeHero from "@/features/home/components/HomeHero";
import FeaturedBrands from "@/features/home/components/FeaturedBrands";
import RetailScale from "@/features/home/components/RetailScale";
import OurJourney from "@/features/home/components/OurJourney";
import WhySmartShopping from "@/features/home/components/WhySmartShopping";
import StoreNetwork from "@/features/home/components/StoreNetwork";
import FashionExperience from "@/features/home/components/FashionExperience";
import TrustSection from "@/features/home/components/TrustSection";
import HomeCTA from "@/features/home/components/HomeCTA";

export const metadata = {
  title:
    "Smart Shopping | Multi-Brand International Fashion Retailers North India",
  description:
    "North India's premier retail group bringing globally recognized premium fashion brands like Jack & Jones, Vero Moda, and Celio closer to home.",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0F172A] selection:bg-[#F97316] selection:text-white">
      <HomeHero />
      <FeaturedBrands />
      <RetailScale />
      <OurJourney />
      <WhySmartShopping />
      <StoreNetwork />
      <FashionExperience />
      <TrustSection />
      <HomeCTA />
    </main>
  );
}
