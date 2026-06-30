// @/components/team/BehindTheStores.tsx
"use client";

import React, { useEffect, useState } from "react";
import { OperationalWing } from "@/types/team";
import BehindTheStoresDesktop from "@/features/team/desktop/BehindTheStoresDesktop";
import BehindTheStoresMobile from "@/features/team/mobile/BehindTheStoresMobile";

interface MasterProps {
  wings: OperationalWing[];
}

export default function BehindTheStores({ wings }: MasterProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Matches Tailwind lg break matrix
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-[200px] opacity-0" />; // Prevent structural layout flashing
  }

  return isMobile ? (
    <BehindTheStoresMobile wings={wings} />
  ) : (
    <BehindTheStoresDesktop wings={wings} />
  );
}
