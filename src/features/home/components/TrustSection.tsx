// features/home/components/TrustSection.tsx
"use client";

import { trustSectionConfig } from "../data/trustSectionData";
import TrustSectionDesktop from "@/features/home/components/desktop/TrustSectionDesktop";
import TrustSectionMobile from "@/features/home/components/mobile/TrustSectionMobile";

export default function TrustSection() {
  return (
    <>
      <TrustSectionDesktop config={trustSectionConfig} />
      <TrustSectionMobile config={trustSectionConfig} />
    </>
  );
}
