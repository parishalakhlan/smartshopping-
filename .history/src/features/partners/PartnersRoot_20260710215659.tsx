"use client";

import React, { useEffect, useState } from "react";
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

  // Avoid hydrations flashes across differing isomorphic environments
  if (isMobile === null) {
    return <div className="min-screen bg-black text-white" />;
  }

  return isMobile ? <PartnersMobile /> : <PartnersDesktop />;
}
