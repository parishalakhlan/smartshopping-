// features/home/components/WhySmartShopping.tsx
"use client";

import { pillarsData } from "../data/pillarsData";
import WhySmartShoppingDesktop from "@/features/home/components/desktop/WhySmartShoppingDesktop";
import WhySmartShoppingMobile from "@/features/home/components/mobile/WhySmartShoppingMobile";

export default function WhySmartShopping() {
  return (
    <>
      <WhySmartShoppingDesktop pillars={pillarsData} />
      <WhySmartShoppingMobile pillars={pillarsData} />
    </>
  );
}
