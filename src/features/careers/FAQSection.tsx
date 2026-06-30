"use client";

import React, { useEffect, useState } from "react";
import { FAQSectionDesktop } from "@/features/careers/desktop/FAQSectionDesktop";
import { FAQSectionMobile } from "@/features/careers/mobile/FAQSectionMobile";

export const FAQSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Renders Mobile below 1024px desktop threshold
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hydration guard to avoid flashing incorrect layouts
  if (isMobile === null) {
    return <div className="w-full h-[400px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? <FAQSectionMobile /> : <FAQSectionDesktop />;
};
