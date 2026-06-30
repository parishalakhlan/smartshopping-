// features/home/components/FashionExperience.tsx
"use client";

import { useState, useEffect } from "react";
import { fashionExperienceData } from "../data/fashionExperienceData";
import FashionExperienceDesktop from "@/features/home/components/desktop/FashionExperienceDesktop";
import FashionExperienceMobile from "@/features/home/components/mobile/FashionExperienceMobile";

export default function FashionExperience() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (isMobile === null) {
    return (
      <>
        <FashionExperienceDesktop data={fashionExperienceData} />
        <FashionExperienceMobile data={fashionExperienceData} />
      </>
    );
  }

  return isMobile ? (
    <FashionExperienceMobile data={fashionExperienceData} />
  ) : (
    <FashionExperienceDesktop data={fashionExperienceData} />
  );
}
