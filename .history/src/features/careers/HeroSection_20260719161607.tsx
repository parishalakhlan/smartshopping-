"use client";

import React, { useEffect, useState } from "react";
import { HeroSectionDesktop } from "@/features/careers/desktop/HeroSectionDesktop";
import { HeroSectionMobile } from "@/features/careers/mobile/HeroSectionMobile";

export const HeroSection: React.FC = () => {
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
    return <section className="w-full h-[80vh] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />;
};
