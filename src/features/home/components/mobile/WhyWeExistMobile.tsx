// features/home/components/WhyWeExistMobile.tsx
"use client";

import Image from "next/image";
import { WhyWeExistConfig } from "@/features/home/data/whyWeExistData";

export default function WhyWeExistMobile({
  config,
}: {
  config: WhyWeExistConfig;
}) {
  return (
    <section className="py-20 bg-[#FFFFFF] md:hidden">
      <div className="px-5">
        {/* Mobile Heading Stream */}
        <div className="mb-10">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {config.tagline}
          </span>
          <h2 className="font-serif text-3xl text-[#163B65] font-bold tracking-tight leading-[1.2]">
            Premium Style <br />
            Belongs Right Here.
          </h2>
        </div>

        {/* Cinematic Imagery Canvas */}
        <div className="relative aspect-[4/3] w-full bg-[#F5F2EC] mb-10 overflow-hidden">
          <Image
            src={config.imageSrc}
            alt="Smart Shopping Premium Lifestyle Presentation"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.95]"
          />
        </div>

        {/* High-Readability Narrative Stream */}
        <div className="font-sans text-[#475569] text-sm sm:text-base leading-relaxed space-y-6 whitespace-normal break-words">
          <p className="font-medium text-[#0F172A]">{config.leadParagraph}</p>

          <p>{config.coreParagraph}</p>

          <p className="pt-6 border-t border-[#F5F2EC] text-xs sm:text-sm text-[#475569] font-normal">
            {config.expandedParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
