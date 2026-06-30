// features/home/components/WhyWeExist.tsx
"use client";

import { whyWeExistConfig } from "../data/whyWeExistData";
import WhyWeExistDesktop from "@/features/home/components/desktop/WhyWeExistDesktop";
import WhyWeExistMobile from "@/features/home/components/mobile/WhyWeExistMobile";

export default function WhyWeExist() {
  return (
    <>
      <WhyWeExistDesktop config={whyWeExistConfig} />
      <WhyWeExistMobile config={whyWeExistConfig} />
    </>
  );
}
