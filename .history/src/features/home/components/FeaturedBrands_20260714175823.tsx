"use client";

import {
  featuredBrandsConfig,
  type FeaturedBrandsConfig,
} from "@/features/home/data/brandsData";
import FeaturedBrandsDesktop from "@/features/home/components/desktop/FeaturedBrandsDesktop";
import FeaturedBrandsMobile from "@/features/home/components/mobile/FeaturedBrandsMobile";
interface Props {
  data: FeaturedBrandsConfig;
}

export default function FeaturedBrands({ data }: Props) {
  const config: FeaturedBrandsConfig = {
    ...featuredBrandsConfig, // keeps animation, cta, metadata, bottomCard

    ...data, // overrides with Sanity fields like section & brands

    animation: featuredBrandsConfig.animation,
    cta: featuredBrandsConfig.cta,
    bottomCard: featuredBrandsConfig.bottomCard,
    metadata: featuredBrandsConfig.metadata,
  };
  return (
    <div id={config.section.id}>
      <FeaturedBrandsDesktop config={config} />
      <FeaturedBrandsMobile config={config} />
    </div>
  );
}
