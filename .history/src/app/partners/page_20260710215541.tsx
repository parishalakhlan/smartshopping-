import React from "react";
import { Metadata } from "next";
import PartnersRoot from "@/features/partners/PartnersRoot";

export const metadata: Metadata = {
  title: "Partnerships & Commercial Allocations | Smart Shopping Network",
  description:
    "Underwriting and deployment options for enterprise retail networks, luxury syndicates, and authorized regional franchise partnerships.",
  alternates: {
    canonical: "/partners",
  },
  robots: "index, follow",
};

// Pure React Server Component serving structural Client Layout Viewports
export default function PartnersPage() {
  return (
    <main className="w-full min-h-screen bg-black selection:bg-[#E25822] selection:text-white">
      <PartnersRoot />
    </main>
  );
}
