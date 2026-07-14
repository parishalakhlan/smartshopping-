"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Compass, Clock, MapPin } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function MobileStoreLocator() {
  const { stores } = storesConfig;

  // Build hierarchical network from stores
  const buildHierarchicalNetwork = () => {
    const stateMap = new Map<
      string,
      {
        id: string;
        name: string;
        cities: Map<string, { name: string; stores: typeof stores }>;
      }
    >();

    stores.forEach((store) => {
      if (!stateMap.has(store.state)) {
        stateMap.set(store.state, {
          id: store.state.toLowerCase().replace(/\s+/g, "-"),
          name: store.state,
          cities: new Map(),
        });
      }

      const stateRegion = stateMap.get(store.state)!;
      if (!stateRegion.cities.has(store.city)) {
        stateRegion.cities.set(store.city, {
          name: store.city,
          stores: [],
        });
      }

      stateRegion.cities.get(store.city)!.stores.push(store);
    });

    return Array.from(stateMap.values()).map((region) => ({
      id: region.id,
      name: region.name,
      cities: Array.from(region.cities.values()).map((city) => ({
        name: city.name,
        storeCount: city.stores.length,
        stores: city.stores,
      })),
    }));
  };

  const network = buildHierarchicalNetwork();

  // Mobile Interaction States
  const [activeState, setActiveState] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [activeStore, setActiveStore] = useState<string | null>(null);
  const [mapExpanded, setMapExpanded] = useState<boolean>(false);

  const explorationCanvasRef = useRef<HTMLDivElement>(null);

  const scrollToSelector = () => {
    explorationCanvasRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full bg-background-main min-h-screen text-button-primary-bg overflow-hidden md:hidden">
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative w-full h-[88vh] flex flex-col justify-between px-6 py-12 bg-background-secondary/40">
        <div className="absolute inset-0 z-0 opacity-85">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Smart Shopping Retail Luxury Base"
            fill
            priority
            className="object-cover object-center grayscale contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-main via-transparent to-black/20" />
        </div>

        <div className="z-10 w-full pt-12">
          <span className="text-[10px] font-mono tracking-[0.25em] text-accent font-bold uppercase block mb-2">
            Network Architecture
          </span>
          <h1 className="font-serif text-4xl font-extrabold text-button-primary-bg tracking-tight leading-[1.1]">
            Find Your <br />
            Nearest Store
          </h1>
        </div>

        <div className="z-10 w-full space-y-6 pb-6">
          <p className="font-sans text-xs text-text-secondary/90 font-medium max-w-xs leading-relaxed">
            Experience physical retail transformed. Discover our physical spaces
            across North India through spatial luxury configuration.
          </p>
          <button
            onClick={scrollToSelector}
            className="w-full py-4 bg-button-primary-bg text-button-primary-text text-xs font-bold uppercase tracking-widest rounded-none shadow-md hover:bg-accent transition-colors duration-400"
          >
            Start Exploring
          </button>
        </div>
      </section>

      {/* INTERACTIVE EXPLORATION FRAMEWORK */}
      <div
        ref={explorationCanvasRef}
        className="py-16 px-6 bg-background-main scroll-mt-4 min-h-screen"
      >
        {/* SECTION 2 — REGION SELECTOR */}
        <div className="mb-12">
          <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-text-muted/60 block mb-4">
            01 // Select State Region
          </span>
          <div className="flex flex-wrap gap-2.5 items-center">
            {network.map((region) => {
              const isSelected = activeState === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => {
                    setActiveState(isSelected ? null : region.id);
                    setActiveCity(null);
                    setActiveStore(null);
                  }}
                  className={`relative px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-400 ${
                    isSelected
                      ? "bg-background-secondary text-button-primary-bg scale-105"
                      : activeState
                        ? "opacity-35 scale-95 blur-[0.2px] bg-neutral-50 text-button-primary-bg/70"
                        : "bg-background-secondary/60 text-button-primary-bg"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {region.name}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="orangeIndicatorLine"
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 3 — CITY REVEAL */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            {activeState && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-text-muted/60 block mb-3">
                  02 // Select City Center
                </span>
                <div className="flex flex-col border-t border-border-main">
                  {network
                    .find((r) => r.id === activeState)
                    ?.cities.map((city) => {
                      const isCityOpen = activeCity === city.name;
                      return (
                        <div key={city.name} className="w-full flex flex-col">
                          <button
                            onClick={() => {
                              setActiveCity(isCityOpen ? null : city.name);
                              setActiveStore(null);
                            }}
                            className="w-full py-4 flex justify-between items-center text-left text-xs font-bold tracking-wide uppercase border-b border-border-main min-h-[48px]"
                          >
                            <motion.span
                              animate={{ x: isCityOpen ? 4 : 0 }}
                              className={
                                isCityOpen
                                  ? "text-accent"
                                  : "text-button-primary-bg"
                              }
                            >
                              {city.name}
                            </motion.span>
                            <span className="text-[10px] font-mono font-normal text-text-muted/50">
                              {city.storeCount}{" "}
                              {city.storeCount === 1 ? "Atelier" : "Ateliers"}
                            </span>
                          </button>

                          {/* SECTION 4 — STORE REVEAL */}
                          <AnimatePresence initial={false}>
                            {isCityOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.45,
                                  ease: [0.25, 1, 0.5, 1],
                                }}
                                className="overflow-hidden w-full bg-neutral-50/50"
                              >
                                <div className="p-2 flex flex-col gap-2">
                                  {city.stores.map((store) => {
                                    const isStoreOpen =
                                      activeStore === store.id;
                                    return (
                                      <div
                                        key={store.id}
                                        onClick={() =>
                                          setActiveStore(
                                            isStoreOpen ? null : store.id,
                                          )
                                        }
                                        className={`p-4 transition-all duration-400 border ${
                                          isStoreOpen
                                            ? "bg-button-primary-bg text-button-primary-text border-button-primary-bg"
                                            : "bg-background-main text-button-primary-bg border-transparent"
                                        }`}
                                      >
                                        <div className="flex justify-between items-baseline gap-2">
                                          <h4 className="font-serif text-sm font-bold tracking-tight">
                                            {store.name}
                                          </h4>
                                          <span className="text-[9px] font-mono shrink-0 opacity-60">
                                            {isStoreOpen ? "—" : "+"}
                                          </span>
                                        </div>
                                        <p
                                          className={`text-[10px] font-medium tracking-wider mt-1 opacity-80 ${isStoreOpen ? "text-accent" : "text-text-secondary"}`}
                                        >
                                          {store.brands.join("  •  ")}
                                        </p>

                                        {/* EXPANDED INTERACTIVE DETAILS */}
                                        <AnimatePresence>
                                          {isStoreOpen && (
                                            <motion.div
                                              initial={{
                                                opacity: 0,
                                                height: 0,
                                              }}
                                              animate={{
                                                opacity: 1,
                                                height: "auto",
                                              }}
                                              exit={{ opacity: 0, height: 0 }}
                                              className="overflow-hidden pt-4 mt-4 border-t border-white/10 text-xs space-y-4"
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                            >
                                              {/* METADATA STRIPS */}
                                              <div className="space-y-2.5 font-sans">
                                                <div className="flex items-start gap-2.5">
                                                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                                  <span className="text-button-primary-text/90 leading-relaxed text-[11px]">
                                                    {store.address}
                                                  </span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                                                  <span className="text-button-primary-text/90 text-[11px]">
                                                    {store.hours}
                                                  </span>
                                                </div>
                                              </div>

                                              {/* MAP THUMBNAIL MODULE */}
                                              <div className="relative w-full mt-2">
                                                <motion.div
                                                  layout
                                                  onClick={() =>
                                                    setMapExpanded(!mapExpanded)
                                                  }
                                                  className={`relative overflow-hidden cursor-pointer ${
                                                    mapExpanded
                                                      ? "fixed inset-x-4 top-[20vh] h-[50vh] z-50 border border-white/20 shadow-2xl"
                                                      : "w-full h-24 border border-white/10"
                                                  }`}
                                                  transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 28,
                                                  }}
                                                >
                                                  <Image
                                                    src={store.image.src}
                                                    alt={store.image.alt}
                                                    fill
                                                    className={`${store.image.objectFit} grayscale contrast-125 brightness-90`}
                                                  />
                                                  <div className="absolute inset-0 bg-button-primary-bg/10 mix-blend-multiply" />
                                                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[9px] px-2 py-1 text-white uppercase tracking-widest font-mono">
                                                    {mapExpanded
                                                      ? "Tap Canvas to Close"
                                                      : "Tap Canvas to Expand Map"}
                                                  </div>
                                                </motion.div>

                                                {/* Backdrop Shield */}
                                                {mapExpanded && (
                                                  <div
                                                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                                                    onClick={() =>
                                                      setMapExpanded(false)
                                                    }
                                                  />
                                                )}
                                              </div>

                                              {/* CTA ACTIONS BAR */}
                                              <div className="pt-2 flex items-center gap-2">
                                                <a
                                                  href={`tel:${store.phone.replace(/\s+/g, "")}`}
                                                  className="flex-1 py-3 border border-white/20 text-button-primary-text font-mono text-[10px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5 transition-colors hover:bg-white/5"
                                                >
                                                  <Phone className="w-3 h-3" />{" "}
                                                  Call Base
                                                </a>
                                                <a
                                                  href={store.googleMapsUrl}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="flex-1 py-3 bg-accent text-button-primary-text font-mono text-[10px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5 transition-transform"
                                                >
                                                  Directions{" "}
                                                  <Compass className="w-3 h-3" />
                                                </a>
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
