"use client";

import React, { useEffect, useState } from "react";
import { WhyJoinSectionDesktop } from "@/features/careers/desktop/WhyJoinSectionDesktop";
import { WhyJoinSectionMobile } from "@/features/careers/mobile/WhyJoinSectionMobile";
import type { CareersGalleryData } from "@/features/careers/data/types"; // <-- import
type WhyJoinSectionProps = {
  gallery: CareersGalleryData;
};
export const WhyJoinSection: React.FC<WhyJoinSectionProps> = ({ gallery }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <section className="w-full h-[400px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? (
    <WhyJoinSectionMobile gallery={gallery} />
  ) : (
    <WhyJoinSectionDesktop gallery={gallery} />
  );
};
