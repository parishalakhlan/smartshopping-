"use client";

import React, { useEffect, useState } from "react";
import { VisitSectionDesktop } from "@/features/contact/desktop/VisitSectionDesktop";
import { VisitSectionMobile } from "@/features/contact/mobile/VisitSectionMobile";

export const VisitSection: React.FC = () => {
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
    return <div className="w-full h-[350px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? <VisitSectionMobile /> : <VisitSectionDesktop />;
};
