// features/home/components/WhySmartShoppingMobile.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialPillar } from "@/features/home/data/pillarsData";

export default function WhySmartShoppingMobile({
  pillars,
}: {
  pillars: EditorialPillar[];
}) {
  return (
    <section className="py-20 bg-background-main md:hidden">
      <div className="px-5">
        {/* Mobile Header Block */}
        <div className="mb-14">
          <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-3">
            Operational Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-bold tracking-tight leading-[1.2]">
            Redefining The <br />
            Modern Curation.
          </h2>
        </div>

        {/* High-Contrast Stacked List Architecture */}
        <div className="flex flex-col w-full border-t border-background-secondary">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-background-secondary w-full"
            >
              <span className="font-sans text-[10px] font-bold tracking-widest text-accent uppercase block mb-2">
                {item.tag}
              </span>
              <h3 className="font-serif text-xl text-text-primary font-bold mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed whitespace-normal break-words">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Full Story Call-To-Action */}
        <div className="mt-14">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-between w-full p-4 bg-background-secondary rounded-none font-sans text-xs font-bold tracking-widest uppercase text-text-primary"
          >
            <span>Read Our Full Story</span>
            <ArrowRight className="w-4 h-4 shrink-0 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
