import React from "react";

export default function ClosingCTA() {
  return (
    <section className="py-44 px-24 bg-black text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-200">
          {"Let's Curate the Next Epoch"} <br />
          <span className="font-serif italic font-normal text-stone-400">
            of Global Commerce
          </span>
          .
        </h2>
        <p className="text-stone-500 font-light text-xs tracking-widest uppercase pt-2">
          Substantial opportunities require rigorous alignment.
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#111112_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-30" />
    </section>
  );
}
