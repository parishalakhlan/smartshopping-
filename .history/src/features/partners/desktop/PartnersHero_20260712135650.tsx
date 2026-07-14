import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MotionFade } from "../shared/MotionWrapper";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function PartnersHero() {
  return (
    <section className="relative h-screen flex items-center justify-start pl-24 pr-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-45 scale-105 motion-safe:animate-[pulse_8s_ease-in-out_infinite]">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Retail Architecture"
          fill
          priority
          className="object-cover object-center transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <MotionFade delay={0}>
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            Exclusive Commercial Syndication
          </span>
        </MotionFade>

        <MotionFade delay={0.1}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: bezierEasing }}
            className="text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-3xl"
          >
            Build The Future Of <br />
            <span className="font-serif italic font-normal text-stone-300">
              Fashion Retail
            </span>{" "}
            Together.
          </motion.h1>
        </MotionFade>

        <MotionFade delay={0.2}>
          <p className="text-lg text-stone-400 font-light max-w-xl leading-relaxed">
            Align with an enterprise omnichannel network engineered for luxury
            retail operators, spatial innovators, and visionaries looking to
            scale global commercial hubs.
          </p>
        </MotionFade>

        <MotionFade delay={0.3}>
          <div className="flex items-center gap-8 pt-4">
            <a
              href="#application"
              className="group relative px-8 py-4 bg-[#E25822] text-white text-sm tracking-wider font-medium overflow-hidden transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Become A Partner{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
            <a
              href="#models"
              className="group text-sm tracking-wider font-medium text-white/80 hover:text-white transition-colors duration-300 relative py-2"
            >
              Explore Partnership Models
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E25822] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
