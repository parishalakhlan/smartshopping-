import { Metadata } from "next";
import ContactContent from "@/features/contact/contact-content";

export const metadata: Metadata = {
  title: "Corporate HQ & Partnership Inbound | Smart Shopping Group",
  description:
    "Connect with North India's leading multi-brand fashion franchise management division. Dedicated desks for brand collaborations, institutional leasing, logistics, and client escalation management.",
  openGraph: {
    title: "Smart Shopping Group | Premium Fashion Retail Correspondence",
    description:
      "Direct institutional pathways to our Chandigarh headquarters and regional franchise leadership offices across 27+ locations.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactContent />
    </main>
  );
}
