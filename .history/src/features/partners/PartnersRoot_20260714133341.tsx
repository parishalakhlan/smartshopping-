"use client";

import React, { useEffect, useState } from "react";
import { partnersConfig } from "@/features/partners/partners.data";
import PartnersDesktop from "@/features/partners/desktop/PartnersDesktop";
import PartnersMobile from "@/features/partners/mobile/PartnersMobile";

export default function PartnersRoot() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breakpoint tracking for Desktop versus Mobile
    };

    handleResize(); // Init window dimensions evaluation thread
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avoid hydration flashes across differing isomorphic environments
  if (isMobile === null) {
    // Corrected the unterminated string and completed the class token
    return <div className="min-h-screen bg-background-main" />;
  }

  return (
    <div id={partnersConfig.section.id}>
      {isMobile ? <PartnersMobile /> : <PartnersDesktop />}
    </div>
  );
}
