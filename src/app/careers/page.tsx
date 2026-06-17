import { Metadata } from "next";
import CareersContent from "@/features/careers/careers-content";

// --- Production SEO & OpenGraph Optimization ---
export const metadata: Metadata = {
  title: "Careers & Leadership Pathways | Smart Shopping Franchise Group",
  description:
    "Build a premium career in fashion retail management. Explore structured operational internships, visual merchandising pathways, and multi-store leadership tracks across North India.",
  keywords: [
    "Retail Careers North India",
    "Fashion Retail Leadership Program",
    "Visual Merchandising Jobs Chandigarh",
    "Smart Shopping Careers",
    "Store Operations Management",
  ],
  openGraph: {
    title: "Build More Than a Job. Build a Career | Smart Shopping",
    description:
      "Join one of North India's fastest-growing fashion retail groups. Gain real-world enterprise experience across 27+ locations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
        Renders the premium retail careers architecture module. 
        Maintains total design system alignment with your pre-configured 
        global tailwind layer.
      */}
      <CareersContent />
    </main>
  );
}
