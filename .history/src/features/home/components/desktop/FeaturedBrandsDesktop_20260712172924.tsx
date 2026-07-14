// features/home/components/FeaturedBrandsDesktop.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/features/home/data/brandsData";

export default function FeaturedBrandsDesktop({ brands }: { brands: Brand[] }) {
  return (
    <section className="py-32 bg-background-secondary overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-20">
        <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
          Brand Discovery
        </span>
        <h2 className="font-serif text-6xl text-text-primary font-bold tracking-tight leading-[1.1] mb-8">
          Global Curations. <br />
          Made Accessible.
        </h2>
      </div>

      {/* FIXED: Removed left padding from container, added before: pseudo-element to create a persistent left spacer */}
      <div className="pr-12 flex flex-nowrap gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth before:content-[''] before:flex-shrink-0 before:w-[max(2rem,calc((100vw-80rem)/2))]">
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[380px] group cursor-pointer snap-start"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-8">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="380px"
                className="object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute top-6 right-6 bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-2xl text-text-primary font-bold mb-2">
              {brand.name}
            </h3>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              {brand.positioning}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
