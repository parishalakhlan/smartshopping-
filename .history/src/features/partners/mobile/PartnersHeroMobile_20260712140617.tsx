import React from "react";
import Image from "next/image";

export default function PartnersHeroMobile() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-end px-6 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop"
          alt="Retail Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-5">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E25822] font-semibold block">
          Commercial Integration
        </span>
        <h1 className="text-4xl font-light tracking-tight text-white leading-[1.1]">
          Shape Retail <br />
          <span className="font-serif italic text-stone-300">Together</span>.
        </h1>
        <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
          Align with an enterprise operational canvas built exclusively for
          luxury boutique deployment and regional market control.
        </p>
        <div className="pt-2">
          <a
            href="#apply-drawer"
            className="inline-block px-6 py-3.5 bg-[#E25822] text-white text-xs font-semibold uppercase tracking-widest"
          >
            Become A Partner
          </a>
        </div>
      </div>
    </section>
  );
}
