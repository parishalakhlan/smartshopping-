// components/hero/HomeHero.tsx
"use client";

import { useState, useEffect } from "react";
import { heroData } from "@/features/home/data/heroData";
import HeroDesktop from "@/features/home/components/desktop/HeroDesktop";
import HeroMobile from "@/features/home/components/mobile/HeroMobile";

export default function HomeHero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize layout check on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Server Fallback renders both safely using standard CSS utility hides, preventing layout shift flashes
  if (isMobile === null) {
    return (
      <>
        <HeroDesktop data={heroData} />
        <HeroMobile data={heroData} />
      </>
    );
  }

  return isMobile ? (
    <HeroMobile data={heroData} />
  ) : (
    <HeroDesktop data={heroData} />
  );
}
