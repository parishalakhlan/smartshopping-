// features/home/components/FeaturedBrands.tsx
"use client";

import { brandsData } from "../data/brandsData";
import FeaturedBrandsDesktop from "@/features/home/components/desktop/FeaturedBrandsDesktop";
import FeaturedBrandsMobile from "@/features/home/components/mobile/FeaturedBrandsMobile";

export default function FeaturedBrands() {
  return (
    <>
      <div id="featured-brands">
        <FeaturedBrandsDesktop brands={brandsData} />
        <FeaturedBrandsMobile brands={brandsData} />
      </div>
    </>
  );
}
