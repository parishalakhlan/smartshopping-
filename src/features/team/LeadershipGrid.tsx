// @/components/team/LeadershipGrid.tsx
"use client";

import React, { useEffect, useState } from "react";
import { TeamMember } from "@/types/team";
import LeadershipGridDesktop from "@/features/team/desktop/LeadershipGridDesktop";
import LeadershipGridMobile from "@/features/team/mobile/LeadershipGridMobile";

interface MasterProps {
  team: TeamMember[];
}

export default function LeadershipGrid({ team }: MasterProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breaks precisely on the Tailwind lg viewport limit
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-[300px] opacity-0" />; // Prevents flashing during client hydration cycles
  }

  return isMobile ? (
    <LeadershipGridMobile team={team} />
  ) : (
    <LeadershipGridDesktop team={team} />
  );
}
