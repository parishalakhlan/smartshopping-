"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const valueTiles = [
  {
    letter: "S",
    word: "Synergy",
    desc: "Collaborative systems across corporate offices and frontlines.",
  },
  {
    letter: "M",
    word: "Modernity",
    desc: "Curating international design signatures for changing demographics.",
  },
  {
    letter: "A",
    word: "Agility",
    desc: "Fast logistics pipeline deployment responding to runtime fashion indicators.",
  },
  {
    letter: "R",
    word: "Respect",
    desc: "Human-centric relations anchoring team members and regional patrons alike.",
  },
  {
    letter: "T",
    word: "Trust",
    desc: "Decade-long authenticity building across Northern retail sectors.",
  },
];

export function ValuesWall() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100] block">
            THE MANIFESTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-luxury-heading tracking-wide text-[#111111]">
            The SMART Values Wall
          </h2>
        </div>
        <p className="text-xs font-luxury-meta tracking-wider text-[#666666] max-w-xs">
          Hover or tap a block element matrix to interact with our structural
          operational DNA.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {valueTiles.map((tile, idx) => {
          const isFocused = activeIdx === idx;
          return (
            <Card
              key={tile.letter}
              className="rounded-none border border-[#EAEAEA] bg-white transition-all duration-300 relative overflow-hidden h-48 sm:h-64 shadow-none group cursor-pointer"
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onTouchStart={() => setActiveIdx(idx)}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full relative z-10 select-none">
                <span className="text-5xl sm:text-7xl font-serif font-light text-[#EAEAEA] group-hover:text-[#1F4D45]/10 transition-colors duration-500">
                  {tile.letter}
                </span>

                <div className="space-y-1">
                  <h3 className="text-sm font-luxury-nav tracking-widest text-[#111111] font-semibold">
                    {tile.word}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isFocused ? 1 : 0,
                      height: isFocused ? "auto" : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-xs text-[#555555] font-light tracking-wide leading-relaxed overflow-hidden"
                  >
                    {tile.desc}
                  </motion.p>
                </div>
              </CardContent>

              {/* Interaction underline glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#E65100] transition-transform duration-300 origin-left ${isFocused ? "scale-x-100" : "scale-x-0"}`}
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}
