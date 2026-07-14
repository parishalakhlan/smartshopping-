import React from "react";
import { Metadata } from "next";
import VerticalsRoot from "@/features/verticals/VerticalsRoot";

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
    <main className="w-full min-h-screen ">
      <VerticalsRoot />
    </main>
  );
}
