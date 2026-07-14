// features/home/components/FeaturedBrandsDesktop.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/features/home/data/brandsData";

export default function FeaturedBrandsDesktop({ brands }: { brands: Brand[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateConstraints = () => {
      const scrollWidth = carouselRef.current?.scrollWidth || 0;
      const clientWidth = carouselRef.current?.clientWidth || 0;
      // The left constraint is the total width minus the visible width, made negative
      setDragConstraints({
        right: 0,
        left: -Math.max(0, scrollWidth - clientWidth),
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [brands]);

  return (
    <section className="py-32 bg-background-secondary overflow-hidden hidden md:block">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-20 select-none">
        <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
          Brand Discovery
        </span>
        <h2 className="font-serif text-6xl text-text-primary font-bold tracking-tight leading-[1.1] mb-8">
          Global Curations. <br />
          Made Accessible.
        </h2>
        <p className="text-xs text-text-secondary uppercase tracking-widest opacity-60">
          ← Drag to explore →
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div
        ref={carouselRef}
        className="pl-[max(2rem,calc((100vw-80rem)/2))] pr-8 cursor-grab active:cursor-grabbing overflow-x-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          className="flex gap-8 w-max"
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[380px] group select-none"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-8 pointer-events-none">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="380px"
                  priority={idx < 3}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute top-6 right-6 bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-text-primary" />
                </div>
              </div>

              {/* Text Info */}
              <h3 className="font-serif text-2xl text-text-primary font-bold mb-2">
                {brand.name}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                {brand.positioning}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
