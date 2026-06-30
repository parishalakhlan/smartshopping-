"use client";

import React, { useEffect, useState } from "react";
import { QuickConnectSectionDesktop } from "@/features/contact/desktop/QuickConnectSectionDesktop";
import { QuickConnectSectionMobile } from "@/features/contact/mobile/QuickConnectSectionMobile";

export const QuickConnectSection: React.FC = () => {
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
    return <div className="w-full h-[250px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? (
    <QuickConnectSectionMobile />
  ) : (
    <QuickConnectSectionDesktop />
  );
};
