"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

// Turn Next.js Link into a motion-compatible component
const MotionLink = motion.create(Link);

export default function StoreNetwork() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Architectural Framing Canvas with Embedded Detail Pin */}
          <div className="lg:col-span-6 relative aspect-[4/5] w-full bg-[#F5F2EC] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
                alt="Premium Concept Store Architecture"
                fill
                sizes="(max-w-1024px) 100vw, 45vw"
                className="object-cover object-center brightness-[0.92] contrast-[1.02]"
                priority
              />
            </motion.div>

            {/* Premium Floated Location Tag */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 shadow-sm inline-flex items-center gap-x-2.5 max-w-[280px]">
              <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <p className="font-sans text-[11px] font-bold tracking-wider uppercase text-[#163B65] truncate">
                Flagship Concept • Sector 17
              </p>
            </div>

            {/* Ambient Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Balanced Editorial Narrative & Refined Triggers */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
              Retail Footprint
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#163B65] font-bold tracking-tight leading-[1.1] mb-6 break-words whitespace-normal">
              Find Your Nearest <br />
              Fashion Destination.
            </h2>

            <p className="font-sans text-[#475569] text-base sm:text-lg mb-10 leading-relaxed max-w-xl break-words whitespace-normal">
              Explore our highly considered network of physical spaces spanning
              regional culture hubs across Punjab, Haryana, and Rajasthan. Each
              showroom introduces curated international brand standards directly
              to your local neighborhood.
            </p>

            {/* Regional Focus Highlights */}
            <div className="border-t border-[#F5F2EC] pt-8 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full font-sans">
              <div>
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-widest mb-2">
                  Primary Enclaves
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  Amritsar, Jalandhar, Ludhiana, Jaipur, Udaipur, and Kota.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-widest mb-2">
                  Environment
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  Immersive architecture tailored to premium brand experiences.
                </p>
              </div>
            </div>

            {/* Premium Action Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {/* Clean Next.js 14/15/16 Link handling with motion parameters wrapper */}
              <MotionLink
                href="/store-locator"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-x-3 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#163B65] group transition-all"
              >
                <span>Launch Store Locator</span>
                <div className="w-9 h-9 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#163B65] group-hover:bg-[#163B65] group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </div>
              </MotionLink>

              <Link
                href="/contact"
                className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#475569] hover:text-[#0F172A] transition-colors py-2"
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
