"use client";

import React, { useEffect, useState } from "react";
import { FinalCTASectionDesktop } from "@/features/contact/desktop/FinalCTASectionDesktop";
import { FinalCTASectionMobile } from "@/features/contact/mobile/FinalCTASectionMobile";

interface FinalCTASectionProps {
  scrollToSection: (id: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  scrollToSection,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (isMobile === null) {
    return <div className="w-full h-[280px] bg-[#163B65] opacity-0" />;
  }

  return isMobile ? (
    <FinalCTASectionMobile scrollToSection={scrollToSection} />
  ) : (
    <FinalCTASectionDesktop scrollToSection={scrollToSection} />
  );
};
