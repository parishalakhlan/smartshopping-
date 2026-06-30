"use client";

import React, { useEffect, useState } from "react";
import { HeroSectionDesktop } from "@/features/contact/desktop/HeroSectionDesktop";
import { HeroSectionMobile } from "@/features/contact/mobile/HeroSectionMobile";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleLayoutCheck = () => {
      setIsMobile(window.innerWidth < 1024); // Handshake breakpoint consistent across modules
    };
    handleLayoutCheck();
    window.addEventListener("resize", handleLayoutCheck);
    return () => window.removeEventListener("resize", handleLayoutCheck);
  }, []);

  // Hydration guard to isolate layout shifts
  if (isMobile === null) {
    return (
      <div className="w-full h-[60vh] lg:h-[75vh] bg-[#F5F2EC]/30 opacity-0" />
    );
  }

  return isMobile ? (
    <HeroSectionMobile scrollToSection={scrollToSection} />
  ) : (
    <HeroSectionDesktop scrollToSection={scrollToSection} />
  );
};
