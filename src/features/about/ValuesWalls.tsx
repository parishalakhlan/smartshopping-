"use client";

import React from "react";
import { motion } from "framer-motion";

const valueWallData = [
  {
    letter: "S",
    word: "SYNERGY",
    desc: "Cross-functional synchronization linking storefront networks directly with central corporate frameworks.",
  },
  {
    letter: "M",
    word: "MODERNITY",
    desc: "Curating forward-leaning style palettes that keep fast-moving regional markets continuously relevant.",
  },
  {
    letter: "A",
    word: "AGILITY",
    desc: "Deploying rapid logistically coordinated updates to react fluidly to high-street apparel demands.",
  },
  {
    letter: "R",
    word: "RESPECT",
    desc: "Fostering long-term market alignment and comprehensive career development tracks across workspaces.",
  },
  {
    letter: "T",
    word: "TRUST",
    desc: "Deepening verified consumer transparency built securely across 15 continuous retail cycles.",
  },
  {
    letter: "S",
    word: "SCALE",
    desc: "Expanding architectural footprints deliberately to protect and assert fashion market velocity.",
  },
  {
    letter: "H",
    word: "HONOR",
    desc: "Upholding structural workspace commitments to retail personnel and supply network channels.",
  },
  {
    letter: "O",
    word: "OWNERSHIP",
    desc: "Empowering unit leadership with decentralized management accountability and direct creative agency.",
  },
  {
    letter: "P",
    word: "PASSION",
    desc: "Infusing genuine creative energy into customer-facing experiential brand interfaces.",
  },
  {
    letter: "P",
    word: "PREMIUM",
    desc: "Enforcing rigorous textile standards and polished visual merchandising designs across locations.",
  },
  {
    letter: "I",
    word: "IMPACT",
    desc: "Driving direct localized lifestyle elevation and career pipeline opportunities across micro-metros.",
  },
  {
    letter: "N",
    word: "NURTURE",
    desc: "Investing in internal development pathways and corporate family welfare programs.",
  },
  {
    letter: "G",
    word: "GROWTH",
    desc: "Challenging baseline regional targets to scale total physical retail capabilities cleanly.",
  },
];

export function ValuesWall() {
  return (
    <section className="py-20 bg-background-main px-4 sm:px-8 lg:px-16 relative border-t border-b border-border-main overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-12">
        {/* Left Side Fixed Editorial Anchor */}
        <div className="lg:w-1/4 space-y-4 shrink-0">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-accent uppercase font-semibold">
            <span>●</span> THE MANIFESTO TAG
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-text-primary uppercase leading-tight">
            Our Core <br />
            <span className="font-normal italic text-primary">DNA</span>
          </h2>
          <p className="text-xs text-text-secondary font-light max-w-xs leading-relaxed">
            The thirteen constitutional pillars driving SMART SHOPPING's
            regional retail velocity.
          </p>
        </div>

        {/* Right Side Compact Ribbon Layout Tape */}
        <div className="lg:w-3/4 w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-border-main flex gap-6 snap-x pointer-events-auto">
          {valueWallData.map((item, idx) => (
            <motion.div
              key={`${item.letter}-${idx}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(idx * 0.04, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-[280px] sm:w-[320px] shrink-0 bg-background-secondary p-6 sm:p-8 flex flex-col justify-between border border-border-main snap-start relative group transition-all duration-300 hover:bg-primary hover:border-transparent"
            >
              {/* Garment Hangtag Style Header Elements */}
              <div className="flex items-center justify-between border-b border-border-main pb-4 mb-6 group-hover:border-white/10 transition-colors duration-300">
                <span className="text-4xl font-serif font-black text-text-primary tracking-tighter group-hover:text-accent transition-colors duration-300">
                  {item.letter}
                </span>
                <span className="text-[10px] font-mono text-text-muted group-hover:text-white/40 tracking-widest">
                  [ 0{idx + 1} ]
                </span>
              </div>

              {/* Tag Narrative Core Block */}
              <div className="space-y-2 mt-auto">
                <h3 className="text-xs font-mono font-bold tracking-widest text-text-primary group-hover:text-white transition-colors duration-300 uppercase">
                  {item.word}
                </h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Minimalist Accent Accent Line Hook */}
              <div className="absolute top-0 right-8 w-[1px] h-3 bg-accent opacity-40 group-hover:opacity-100 group-hover:h-4 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
