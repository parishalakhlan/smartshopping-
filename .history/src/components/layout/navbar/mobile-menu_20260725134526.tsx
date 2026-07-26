"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { navbarConfig } from "./types";

// --- Design System Exact Physics Calibrations ---
const PANEL_SPRING = {
  type: "spring" as const,
  stiffness: 140,
  damping: 22,
  mass: 1,
};
const TOGGLE_SPRING = {
  type: "spring" as const,
  stiffness: 180,
  damping: 18,
};
const TEXT_SPRING = {
  type: "spring" as const,
  stiffness: 190,
  damping: 24,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.12 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 180, damping: 22 },
  },
};

const submenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] as const },
      opacity: { duration: 0.25 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] as const },
      opacity: { duration: 0.15 },
    },
  },
};

export const MobileMenu = memo(function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { navigation, cta } = navbarConfig;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Manage body overflow state and escape key bindings
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Dynamic layout content scale/brightness mutators
  useEffect(() => {
    const mainContent =
      document.getElementById("main-layout-content") ||
      document.querySelector("main");
    if (!mainContent) return;

    if (isOpen) {
      mainContent.style.transition =
        "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), filter 500ms cubic-bezier(0.25, 1, 0.5, 1)";
      mainContent.style.transform = "scale(0.985)";
      mainContent.style.filter = "blur(10px) brightness(0.9)";
    } else {
      mainContent.style.transform = "none";
      mainContent.style.filter = "none";
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="lg:hidden flex items-center">
      {/* TRIGGER INTERACTION */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="editorial-navigation-sheet"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none group"
      >
        <motion.span
          animate={
            isOpen
              ? { rotate: 45, y: 4, width: "20px" }
              : { rotate: 0, y: 0, width: "22px" }
          }
          transition={TOGGLE_SPRING}
          className="h-[2px] bg-text-primary block transform origin-center"
        />
        <motion.span
          animate={
            isOpen
              ? { rotate: -45, y: -3.5, width: "20px" }
              : { rotate: 0, y: 0, width: "14px" }
          }
          transition={TOGGLE_SPRING}
          className="h-[2px] bg-text-primary block transform origin-center"
        />
      </button>

      {/* EXPANDABLE DOWNWARD NAVIGATION CANVAS SHEET */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click Outside Interceptor overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="editorial-navigation-sheet"
              role="dialog"
              aria-modal="true"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", maxH: "85dvh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={PANEL_SPRING}
              className="fixed top-0 inset-x-0 w-full max-h-[85dvh] bg-surface border-b-2 border-border-main rounded-b-3xl shadow-2xl z-50 pt-20 pb-5 flex flex-col justify-between overflow-hidden"
            >
              {/* PRIMARY SCROLLABLE NAVIGATION AREA */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-2 scrollbar-none space-y-6">
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-5 text-left"
                >
                  {/* NAVIGATION LINKS */}
                  {navigation.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        variants={linkVariants}
                        className="relative flex items-center group"
                      >
                        {isActive && (
                          <span className="absolute -left-3 w-1 h-5 bg-accent" />
                        )}
                        <motion.div
                          whileTap={{ scale: 1.02 }}
                          transition={TEXT_SPRING}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`font-sans font-extrabold text-xl sm:text-2xl tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1 ${
                              isActive
                                ? "text-accent"
                                : "text-text-primary hover:text-accent"
                            }`}
                          >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* INTERACTIVE EXPANDABLE ABOUT NODE */}
                  <motion.div variants={linkVariants} className="space-y-3">
                    <div className="relative flex items-center justify-between pr-2 group">
                      {pathname.startsWith("/about") && (
                        <span className="absolute -left-3 w-1 h-5 bg-accent" />
                      )}
                      <button
                        type="button"
                        onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                        className={`font-sans font-extrabold text-xl sm:text-2xl tracking-wide relative py-0.5 text-left inline-flex items-center gap-2 focus:outline-none transition-all duration-300 group-hover:translate-x-1 ${
                          pathname.startsWith("/about")
                            ? "text-accent"
                            : "text-text-primary hover:text-accent"
                        }`}
                      >
                        <span>About</span>
                        <motion.div
                          animate={{ rotate: isAboutExpanded ? 180 : 0 }}
                          transition={TEXT_SPRING}
                          className="mt-0.5"
                        >
                          <ChevronDown className="w-5 h-5 text-accent stroke-[2.5]" />
                        </motion.div>
                      </button>
                    </div>

                    {/* UNFOLDING SECONDARY LINKS CONTAINER */}
                    <AnimatePresence initial={false}>
                      {isAboutExpanded && (
                        <motion.div
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="pl-3 border-l-2 border-border-main flex flex-col space-y-2.5 overflow-hidden"
                        >
                          {navigation.aboutSubmenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="font-sans font-bold text-sm text-text-primary hover:text-accent transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.nav>

                {/* HIGH-CONTRAST MOBILE METRICS BAR (Fits inside viewport without clipping) */}
                <div className="pt-3 border-t border-border-main grid grid-cols-2 gap-3 bg-card-bg p-3 border rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-serif font-extrabold text-lg text-text-primary leading-none">
                      37+
                    </span>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent mt-0.5">
                      Retail Outlets
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-extrabold text-lg text-text-primary leading-none">
                      5+
                    </span>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent mt-0.5">
                      States Presence
                    </span>
                  </div>
                </div>
              </div>

              {/* ARCHITECTURAL BOTTOM CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="pt-3 pb-2 px-6 border-t-2 border-border-main shrink-0 flex justify-center bg-surface"
              >
                <Link
                  href={cta.href}
                  aria-label={cta.ariaLabel}
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-2 font-sans font-extrabold text-[11px] sm:text-[12px] tracking-[0.12em] text-text-primary hover:text-accent uppercase relative py-1 focus:outline-none"
                >
                  <span>{cta.label}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-all duration-300 stroke-[2]" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});
