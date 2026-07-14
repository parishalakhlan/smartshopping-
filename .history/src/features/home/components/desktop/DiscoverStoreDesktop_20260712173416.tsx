"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DiscoverStoreConfig } from "@/features/home/data/discoverStoreData";

interface DiscoverStoreDesktopProps {
  config: DiscoverStoreConfig;
}

export default function DiscoverStoreDesktop({
  config,
}: DiscoverStoreDesktopProps) {
  const { section, cta, destinations, animation, metadata } = config;

  return (
    <section className="py-32 bg-background-secondary overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-24 items-end">
          <div className="col-span-8">
            <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-4">
              {section.tagline}
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-text-primary font-bold tracking-tight leading-[1.1]">
              {section.headingLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < section.headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>

          <div className="col-span-4 text-right">
            <motion.a
              href={cta.link}
              aria-label={cta.ariaLabel}
              whileHover={{ x: 6 }}
              className="inline-flex items-center gap-x-3 font-sans text-sm font-bold tracking-widest uppercase text-text-primary group transition-all"
            >
              <span>{cta.text}</span>
              <div className="w-10 h-10 rounded-full bg-background-main flex items-center justify-center border border-border-main shadow-sm group-hover:bg-text-primary group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Destination Architectural Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animation.container}
          className="grid grid-cols-3 gap-8 lg:gap-12 w-full"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={animation.card}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-6">
                <Image
                  src={dest.image.src}
                  alt={dest.image.alt}
                  fill
                  sizes={dest.image.sizes.desktop}
                  className={`${dest.image.objectFit} ${dest.image.objectPosition} ${dest.image.filters.grayscale} ${dest.image.filters.brightness} transform scale-100 group-hover:scale-105 transition-all duration-[1400ms] ease-out`}
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/30 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-text-primary font-bold mb-1.5 tracking-wide">
                  {dest.city}
                </h3>
                <span className="font-sans text-xs text-text-secondary font-normal uppercase tracking-wider">
                  {dest.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
