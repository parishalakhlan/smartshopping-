// components/hero/HeroDesktop.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroData } from "@/features/home/data/heroData";

export default function HeroDesktop({ data }: { data: HeroData }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navbar-active hidden md:flex">
      {/* Cinematic Ambient Backdrop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={data.bgImageUrl}
            alt={data.bgImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Soft immersive desktop gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary via-navbar-active/75 to-transparent" />
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 py-32 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          className="max-w-5xl"
        >
          <span className="inline-block text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase mb-8">
            {data.tagline}
          </span>

          <h1 className="font-serif text-7xl lg:text-8xl font-bold leading-[1.02] text-white tracking-tight mb-8">
            {data.statementLine1} <br />
            {data.statementLine2} <br />
            <span className="text-background-secondary font-normal italic">
              {data.statementItalic}
            </span>
          </h1>

          <p className="font-sans text-xl lg:text-2xl text-background-secondary/80 font-normal mb-14 max-w-2xl leading-relaxed">
            {data.description}
          </p>

          {/* Premium Desktop Action Cluster */}
          <div className="flex items-center gap-8">
            <motion.a
              href={data.primaryCtaHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center bg-background-main text-text-primary font-sans text-sm tracking-wider font-bold px-12 py-6 rounded-none shadow-md transition-colors hover:bg-background-secondary"
            >
              <span>{data.primaryCtaText}</span>
            </motion.a>

            <motion.a
              href={data.secondaryCtaHref}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-x-3 bg-transparent text-white font-sans text-sm tracking-wider font-semibold py-6 border border-transparent"
            >
              <span>{data.secondaryCtaText}</span>
              <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 via-transparent to-transparent z-10" />
    </section>
  );
}
