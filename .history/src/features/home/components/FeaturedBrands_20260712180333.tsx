"use client";

import { featuredBrandsConfig } from "@/features/home/data/brandsData";
import FeaturedBrandsDesktop from "@/features/home/components/desktop/FeaturedBrandsDesktop";
import FeaturedBrandsMobile from "@/features/home/components/mobile/FeaturedBrandsMobile";

export default function FeaturedBrands() {
  return (
    <>
      <div id={featuredBrandsConfig.section.id}>
        <FeaturedBrandsDesktop config={featuredBrandsConfig} />
        <FeaturedBrandsMobile config={featuredBrandsConfig} />
      </div>
    </>
  );
}
