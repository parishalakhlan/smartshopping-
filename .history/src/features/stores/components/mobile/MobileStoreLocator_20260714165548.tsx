"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { Phone, Compass, Clock, MapPin, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Store, type StateFootprint } from "@/features/stores/data/stores";

interface MobileStoreLocatorProps {
  data: {
    stores: Store[];
    regionalFootprints: StateFootprint[];
  };
}

export function MobileStoreLocator({ data }: MobileStoreLocatorProps) {
  const { stores, regionalFootprints } = data;
  const [selectedState, setSelectedState] = useState<string>("All");

  const explorationCanvasRef = useRef<HTMLDivElement>(null);

  const scrollToSelector = () => {
    explorationCanvasRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredStores = useMemo(() => {
    if (selectedState === "All") return stores;
    return stores.filter(
      (store: Store) =>
        store.state.toLowerCase() === selectedState.toLowerCase(),
    );
  }, [selectedState, stores]);

  return (
    <div className="w-full bg-background-main min-h-screen text-button-primary-bg overflow-hidden md:hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex flex-col justify-between px-6 py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Flagship Showroom Space"
            fill
            priority
            className="object-cover object-center grayscale contrast-[1.08] brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/40 to-transparent" />
        </div>

        <div className="z-10 w-full pt-16 text-left">
          <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase block mb-3">
            Atelier Directories
          </span>
          <h1 className="font-serif text-4xl font-extrabold text-button-primary-bg tracking-tight leading-[1.1]">
            Our Luxury <br />
            <span className="italic font-normal">Showrooms</span>
          </h1>
        </div>

        <div className="z-10 w-full space-y-6 pb-4 text-left">
          <p className="text-xs text-text-secondary leading-relaxed max-w-[280px] font-light">
            Step into environments constructed around pure design. Discover our
            physical retail spaces across the country.
          </p>
          <button
            onClick={scrollToSelector}
            className="w-full py-4 bg-button-primary-bg text-button-primary-text text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Explore Locations <ChevronRight className="w-3 h-3 text-accent" />
          </button>
        </div>
      </section>

      {/* SWIPEABLE REGIONAL CONTROLS */}
      <div
        ref={explorationCanvasRef}
        className="pt-12 pb-4 px-6 bg-background-main scroll-mt-2 border-t border-border-main/50"
      >
        <div className="text-left mb-5">
          <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-accent/80 block mb-1">
            Browse By Region
          </span>
          <p className="text-[11px] text-text-secondary font-light">
            Showing {filteredStores.length}{" "}
            {filteredStores.length === 1 ? "showroom" : "showrooms"}
          </p>
        </div>

        {/* Swipe Container */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-6 px-6">
          <button
            onClick={() => setSelectedState("All")}
            className={`snap-start shrink-0 px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${
              selectedState === "All"
                ? "bg-button-primary-bg text-button-primary-text border-button-primary-bg"
                : "bg-background-secondary/60 text-button-primary-bg/70 border-border-main"
            }`}
          >
            All Spaces
          </button>

          {regionalFootprints.map((region: StateFootprint) => {
            const isSelected =
              selectedState.toLowerCase() === region.name.toLowerCase();
            return (
              <button
                key={region.id}
                onClick={() => setSelectedState(region.name)}
                className={`snap-start shrink-0 px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isSelected
                    ? "bg-button-primary-bg text-button-primary-text border-button-primary-bg"
                    : "bg-background-secondary/60 text-button-primary-bg/70 border-border-main"
                }`}
              >
                {region.name} ({region.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPACT SHOWCASE CARDS STACK */}
      <div className="px-6 pb-20 bg-background-main space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredStores.map((store: Store) => (
            <motion.div
              key={store.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background-secondary border border-border-main flex flex-col overflow-hidden text-left"
            >
              {/* Cover Image Area */}
              <div className="relative w-full h-[220px] bg-background-secondary">
                <Image
                  src={store.image.src}
                  alt={store.image.alt || store.name}
                  fill
                  className="object-cover grayscale contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />

                {/* Embedded details */}
                <div className="absolute top-3 left-3 bg-background-main/90 backdrop-blur-md px-2.5 py-1 border border-border-main">
                  <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-button-primary-bg">
                    {store.brands.join("  //  ")}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-success/90 text-white backdrop-blur-md px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> Open
                </div>
              </div>

              {/* Card Details Block */}
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-accent text-[9px] font-bold uppercase tracking-wider">
                    <MapPin className="w-3 h-3" /> {store.city}, {store.state}
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-button-primary-bg">
                    {store.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                    {store.address}
                  </p>
                </div>

                {/* Direct Tap Actions */}
                <div className="pt-4 border-t border-border-main/50 flex gap-2.5">
                  <a
                    href={`tel:${store.phone.replace(/\s+/g, "")}`}
                    className="flex-1 py-3 border border-border-main text-button-primary-bg text-[10px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5 active:bg-background-main"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Store
                  </a>
                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-button-primary-bg text-button-primary-text text-[10px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5"
                  >
                    Directions <Compass className="w-3.5 h-3.5 text-accent" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
