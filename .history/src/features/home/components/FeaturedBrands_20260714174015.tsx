"use client";

import type { FeaturedBrandsConfig } from "@/features/home/data/brandsData";
import FeaturedBrandsDesktop from "@/features/home/components/desktop/FeaturedBrandsDesktop";
import FeaturedBrandsMobile from "@/features/home/components/mobile/FeaturedBrandsMobile";
interface Props {
  data: FeaturedBrandsConfig;
}

export default function FeaturedBrands({ data }: Props) {
  return (
    <div id={data.section.id}>
      <FeaturedBrandsDesktop config={data} />
      <FeaturedBrandsMobile config={data} />
    </div>
  );
}
