"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, Anchor } from "lucide-react";

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  signatureQuote: string;
  narrativeBiography: string;
  focusArea: string;
  focusIcon: "creative" | "operational";
}

const foundersData: Founder[] = [
  {
    id: "founder-1",
    name: "Aria Lakhlan",
    role: "Co-Founder & Creative Visionary",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    signatureQuote:
      "We did not build this to simply sell fabric. We built it to restore the quiet dignity of slow, conscious curation.",
    narrativeBiography:
      "Aria spent a decade refining minimalist luxury environments across cultural hubs. Believing that retail spaces should function as urban oases, she guides the visual tone, structural aesthetic, and sensory touchpoints of the entire ecosystem.",
    focusArea: "Aesthetic Direction & Sensory Experience Architecture",
    focusIcon: "creative",
  },
  {
    id: "founder-2",
    name: "Devon Lakhlan",
    role: "Co-Founder & Systems Architect",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",

    signatureQuote:
      "An elegant concept is useless without an equally elegant infrastructure to sustain its weight.",
    narrativeBiography:
      "With a deep background in scalable platform engineering and sustainable supply logistics, Devon turned a creative manifesto into a highly responsive, zero-friction global reality, mapping every thread's journey from mill to home.",
    focusArea: "Technical Ecosystems, Fluid Logistics & Structural Integrity",
    focusIcon: "operational",
  },
];

export default function FoundersSection() {
  return (
    <div className="space-y-12 font-sans">
      {/* Section Line Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#163B65]/10 pb-8">
        <div className="space-y-3 text-left">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
            The Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
            The Genesis of Our Craft
          </h2>
        </div>
        <p className="text-[#475569] text-xs font-normal max-w-sm md:text-right leading-relaxed">
          Our collective was born from a simple evening conversation regarding
          human utility, sustainable beauty, and structural space. Meet our
          founding partners.
        </p>
      </div>

      {/* Asymmetric Dual Editorial Layout Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {foundersData.map((founder, index) => (
          <motion.div
            key={founder.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col space-y-6 text-left group"
          >
            {/* Massive Hero Portrait Wrapper */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F2EC] rounded-none border border-[#163B65]/5 shadow-sm">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                priority
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-[1.01]"
              />
              {/* Soft Gradient Overlay Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/20 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Founder Identity Meta Rows */}
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#163B65]/10 pb-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#163B65]">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-bold text-[#F97316] tracking-widest uppercase mt-0.5">
                    {founder.role}
                  </p>
                </div>

                {/* Intentional Operational/Creative Signature Mark */}
                <div className="text-[#163B65]/40 group-hover:text-[#F97316] transition-colors duration-300">
                  {founder.focusIcon === "creative" ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <Anchor className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Signature Quote Inset */}
              <div className="relative bg-[#F5F2EC]/30 p-5 rounded-none border-l-2 border-[#163B65]/30">
                <Quote className="w-8 h-8 text-[#163B65]/5 absolute -top-2 -right-1 pointer-events-none" />
                <p className="font-serif text-sm italic text-[#475569] leading-relaxed">
                  &ldquo;{founder.signatureQuote}&rdquo;
                </p>
              </div>

              {/* Longform Editorial Biography Paragraph */}
              <div className="space-y-3">
                <p className="text-xs text-[#475569] font-normal leading-relaxed">
                  {founder.narrativeBiography}
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-wider text-[#163B65] uppercase">
                    Core Directive:
                  </span>
                  <span className="text-[11px] font-medium text-[#475569]">
                    {founder.focusArea}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
