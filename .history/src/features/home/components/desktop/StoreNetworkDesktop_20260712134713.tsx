// features/home/components/StoreNetworkDesktop.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { NetworkConfig } from "@/features/home/data/networkData";

const MotionLink = motion.create(Link);

export default function StoreNetworkDesktop({
  config,
}: {
  config: NetworkConfig;
}) {
  return (
    <section className="py-32 bg-background-main overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Architectural Canvas */}
          <div className="col-span-6 relative aspect-[4/5] w-full bg-background-secondary overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={config.imageSrc}
                alt="Premium Concept Store Architecture"
                fill
                sizes="45vw"
                className="object-cover object-center brightness-[0.94] contrast-[1.01]"
                priority
              />
            </motion.div>

            {/* Floated Location Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-sm inline-flex items-center gap-x-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <p className="font-sans text-xs font-bold tracking-wider uppercase text-text-primary">
                {config.flagshipLabel}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Editorial Information Architecture */}
          <div className="col-span-6 flex flex-col justify-center">
            <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
              {config.tagline}
            </span>

            <h2 className="font-serif text-5xl text-text-primary font-bold tracking-tight leading-[1.1] mb-8">
              {config.heading}
            </h2>

            <p className="font-sans text-text-secondary text-base lg:text-lg mb-12 leading-relaxed max-w-xl">
              {config.description}
            </p>

            {/* Configured Metrics Metadata */}
            <div className="border-t border-background-secondary pt-10 mb-12 grid grid-cols-2 gap-8 w-full font-sans">
              {config.highlights.map((highlight, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-text-primary text-xs uppercase tracking-widest mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {highlight.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Triggers Row */}
            <div className="flex items-center gap-x-10">
              <MotionLink
                href="/store-locator"
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-x-4 font-sans text-sm font-bold tracking-widest uppercase text-text-primary group"
              >
                <span>Launch Store Locator</span>
                <div className="w-11 h-11 rounded-full bg-background-secondary flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </div>
              </MotionLink>

              <Link
                href="/contact"
                className="font-sans text-sm font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-transparent hover:border-text-primary"
              >
                Private Appointments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
