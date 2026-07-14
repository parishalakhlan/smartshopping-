import React from "react";
import { Metadata } from "next";
import VerticalsRoot from "@/components/VerticalsRoot";

export const metadata: Metadata = {
  title: "Business Ecosystem & Operating Verticals | Smart Shopping Network",
  description:
    "Auditing the global unified retail ecosystem vectors, logistics computing infrastructure, and spatial real estate control modules behind Smart Shopping.",
  alternates: {
    canonical: "/verticals",
  },
  robots: "index, follow",
};

// Pure React Server Component serving structured layout routing threads cleanly
export default function VerticalsPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-[#E25822] selection:text-white">
      <VerticalsRoot />
    </main>
  );
}
