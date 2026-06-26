"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const BRANDS = [
  {
    name: "Jack & Jones",
    positioning: "Premium Contemporary Casualwear & Redefined Denim Essentials",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
    link: "https://www.jackjones.com",
  },
  {
    name: "Vero Moda",
    positioning:
      "Chic Modern European Trends Architecture for the Contemporary Woman",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    link: "https://www.veromoda.com",
  },
  {
    name: "Celio",
    positioning: "Effortless Parisian Urban Smart Menswear Aesthetics",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    link: "https://www.celio.com",
  },
  {
    name: "Only",
    positioning: "Edgy Fast-Fashion & Authentic Western Streetwear Expressions",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    link: "https://www.only.com",
  },
  {
    name: "Selected Homme",
    positioning:
      "Minimalist Scandinavian Tailoring & Sustainable Luxury Essentials",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    link: "https://www.selected.com",
  },
  {
    name: "Product By Jack & Jones",
    positioning:
      "Youthful Premium Streetwear & Athleisure Tailored for Generations",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    link: "https://www.jackjones.com",
  },
  {
    name: "Only Kids",
    positioning: "Vibrant, High-Quality Playtime Essentials Built for Children",
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop",
    link: "https://www.only.com",
  },
];

export default function FeaturedBrands() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="featured-brands"
      className="py-24 sm:py-32 bg-[#F5F2EC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
            Brand Discovery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1] mb-6">
            Global Curations. Made Accessible.
          </h2>
          <p className="font-sans text-[#475569] font-normal text-base sm:text-lg leading-relaxed max-w-xl">
            We bypass the geographic borders of style, bringing international
            curation to your doorstep. Explore global houses without compromise.
          </p>
        </div>
      </div>

      {/* Interactive Horizontal Infinite-Feel Overflow Experience */}
      <div className="w-full relative pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2))] select-none">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pr-8 pb-8 scrollbar-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          whileTap={{ cursor: "grabbing" }}
        >
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] snap-start group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.05,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Premium Destination Card Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-6">
                <Image
                  src={brand.image}
                  alt={`${brand.name} Architecture Showcase`}
                  fill
                  sizes="(max-w-768px) 280px, (max-w-1024px) 340px, 380px"
                  className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out brightness-[0.95]"
                />

                {/* Subtle scrim overlay protecting typography contrast zone */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent opacity-40 pointer-events-none" />

                {/* Micro-Interaction Action Link Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-[#163B65]" />
                </div>
              </div>

              {/* Minimalist Context & Labeling Architecture */}
              <div className="w-full">
                <div className="flex items-baseline justify-between gap-x-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#163B65] font-bold tracking-wide break-words whitespace-normal">
                    {brand.name}
                  </h3>
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-[#F97316] opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                  >
                    Explore
                  </a>
                </div>
                <p className="font-sans text-[#475569] text-sm leading-relaxed font-normal line-clamp-2 break-words whitespace-normal">
                  {brand.positioning}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
