"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FEATURED_DESTINATIONS = [
  {
    city: "Chandigarh",
    location: "Sector 17 Iconic Plaza",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
  },
  {
    city: "Ludhiana",
    location: "The Pavilion Hub",
    image:
      "https://images.unsplash.com/photo-1560060141-7b9018741ced?q=80&w=800&auto=format&fit=crop",
  },
  {
    city: "Amritsar",
    location: "Mall Road District",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95 },
  },
};

export default function DiscoverStore() {
  return (
    <section
      id="discover-store"
      className="py-24 sm:py-32 bg-[#F5F2EC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-8">
            <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
              Our Spaces
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1]">
              Destinations Designed <br />
              For Exploration.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            {/* Premium Magnetic CTA */}
            <motion.a
              href="/store-locator"
              whileHover={{ x: 6 }}
              className="inline-flex items-center gap-x-3 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#163B65] group transition-all"
            >
              <span>Explore All Stores</span>
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center border border-[#163B65]/10 shadow-sm group-hover:bg-[#163B65] group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Selected Destination Grid - Fosters Exploration Curiosity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full"
        >
          {FEATURED_DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col cursor-pointer"
            >
              {/* Premium Architectural Showcase Card */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-6">
                <Image
                  src={dest.image}
                  alt={`${dest.city} Architectural Showroom`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 transform scale-100 group-hover:scale-105 transition-all duration-[1400ms] ease-out brightness-[0.95]"
                />

                {/* Image Reveal Intersecting Border Micro-Layer */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Text Meta Structure */}
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-[#163B65] font-bold mb-1.5 tracking-wide">
                  {dest.city}
                </h3>
                <span className="font-sans text-sm text-[#475569] font-normal uppercase tracking-wider text-xs">
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
