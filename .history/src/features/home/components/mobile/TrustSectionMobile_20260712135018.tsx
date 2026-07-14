// features/home/components/TrustSectionMobile.tsx
"use client";

import { TrustSectionConfig } from "@/features/home/data/trustSectionData";

export default function TrustSectionMobile({
  config,
}: {
  config: TrustSectionConfig;
}) {
  return (
    <section className="py-20 bg-background-secondary md:hidden">
      <div className="px-5">
        {/* Mobile Header Block */}
        <div className="mb-14">
          <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            {config.tagline}
          </span>
          <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2]">
            Our Commitment To Creative <br />
            Retail Excellence.
          </h2>
        </div>

        {/* Clean Vertical Stream Layout */}
        <div className="space-y-12">
          {config.philosophies.map((philosophy, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t border-border-main pt-6 whitespace-normal break-words"
            >
              <div className="font-sans text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                0{idx + 1}
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
