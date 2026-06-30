"use client";

import React, { useEffect, useState } from "react";
import { FAQSectionDesktop } from "@/features/contact/desktop/FAQSectionDesktop";
import { FAQSectionMobile } from "@/features/contact/mobile/FAQSectionMobile";

export const FAQSection: React.FC = () => {
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
    return <div className="w-full h-[300px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? <FAQSectionMobile /> : <FAQSectionDesktop />;
};
