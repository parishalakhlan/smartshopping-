// @/components/team/FoundersSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import FoundersSectionDesktop from "@/features/team/desktop/FoundersSectionDesktop";
import FoundersSectionMobile from "@/features/team/mobile/FoundersSectionMobile";
import { Founder } from "@/features/team/data/foundersData";

interface Props {
  founders: Founder[];
}

export default function FoundersSection({ founders }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-[300px] opacity-0" />;
  }

  return isMobile ? (
    <FoundersSectionMobile founders={founders} />
  ) : (
    <FoundersSectionDesktop founders={founders} />
  );
}
