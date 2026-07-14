"use client";

import { pillarsConfig } from "@/features/home/data/pillarsData";
import WhySmartShoppingDesktop from "@/features/home/components/desktop/WhySmartShoppingDesktop";
import WhySmartShoppingMobile from "@/features/home/components/mobile/WhySmartShoppingMobile";

export default function WhySmartShopping() {
  return (
    <>
      <div id={pillarsConfig.section.id}>
        <WhySmartShoppingDesktop config={pillarsConfig} />
        <WhySmartShoppingMobile config={pillarsConfig} />
      </div>
    </>
  );
}
