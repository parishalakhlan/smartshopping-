"use client";

import { TrustSectionConfig } from "@/features/home/data/trustSectionData";

interface TrustSectionMobileProps {
  config: TrustSectionConfig;
}

export default function TrustSectionMobile({
  config,
}: TrustSectionMobileProps) {
  const { section, philosophies } = config;

  return (
    <section className="py-20 bg-background-secondary md:hidden">
      <div className="px-5">
        {/* Mobile Header Block */}
        <div className="mb-14">
          <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {section.taglineMobile}
          </span>
          <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2]">
            {section.headingMobileLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < section.headingMobileLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* Clean Vertical Stream Layout */}
        <div className="space-y-12">
          {philosophies.map((philosophy, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t border-border-main pt-6 whitespace-normal break-words"
            >
              <div className="font-sans text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                {philosophy.numberPrefix}
              </div>

              <h3 className="font-serif text-xl text-text-primary font-bold tracking-wide mb-3">
                {philosophy.title}
              </h3>

              <p className="font-sans text-text-secondary text-sm leading-relaxed font-normal">
                {philosophy.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
