"use client";

import React, { useEffect, useState } from "react";
import { verticalsConfig } from "@/features/verticals/verticals.data";
import VerticalsDesktop from "@/features/verticals/desktop/VerticalsDesktop";
import VerticalsMobile from "@/features/verticals/mobile/VerticalsMobile";

export default function VerticalsRoot() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breakpoint tracking for Desktop versus Mobile viewports
    };

    handleResize(); // Init window dimensions evaluation thread
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avoid layout shifting across server-client handoff runtime sequences
  if (isMobile === null) {
    return <div className="min-h-screen bg-background-main" />;
  }

  return (
    <div id={verticalsConfig.section.id}>
      {isMobile ? <VerticalsMobile /> : <VerticalsDesktop />}
    </div>
  );
}
