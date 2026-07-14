"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

// --- Design System V3 Exact Physics Calibrations ---
// Fixed: Using proper Framer Motion transition types
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

// Fixed: Properly typed transition
const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 180, damping: 22 },
  },
};

// Fixed: Properly typed transitions with correct easing
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

  useEffect(() => {
    setMounted(true);
  }, []);

  // Manage body state and escape key bindings for strict accessibility rules
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

  // Dynamic Page Page Mutators to create structural scaling and brightness shifts underneath
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
    /* FIXED Breakpoint: Changed from md:hidden to lg:hidden to cover 412px to 1024px viewport widths */
    <div ref={containerRef} className="lg:hidden flex items-center">
      {/* TRIGGER INTERACTION:
        Custom unequal vector lines morphing elegantly into a balanced X structure.
      */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"} // Fixed: Proper boolean string value
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
          className="h-[1.5px] bg-[#163B65] block transform origin-center"
        />
        <motion.span
          animate={
            isOpen
              ? { rotate: -45, y: -3.5, width: "20px" }
              : { rotate: 0, y: 0, width: "14px" }
          }
          transition={TOGGLE_SPRING}
          className="h-[1.5px] bg-[#163B65] block transform origin-center"
        />
      </button>

      {/* EXPANDABLE DOWNWARD NAVIGATION CANVAS SHEET */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click Outside Interceptor overlay to gracefully collapse canvas sheet */}
            <div
              className="fixed inset-0 top-16 bg-transparent z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="editorial-navigation-sheet"
              role="dialog"
              aria-modal="true"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "58vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={PANEL_SPRING}
              className="fixed top-0 inset-x-0 w-full bg-[#FDFBF9] border-b border-[#163B65]/10 rounded-b-4xl shadow-[0_20px_40px_rgba(22,59,101,0.06)] z-40 pt-20 pb-6 flex flex-col justify-between overflow-hidden"
            >
              {/* PRIMARY EMBEDDED NAVIGATION SYSTEM */}
              <div className="flex-1 overflow-y-auto px-12 py-4 scrollbar-none">
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-7.5 text-left"
                >
                  {/* NAVIGATION LINK: HOME */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* NAVIGATION LINK: BRANDS */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/brands" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/brands"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/brands"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Brands
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* NAVIGATION LINK: STORE LOCATOR */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/store-locator" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/store-locator"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/store-locator"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Store Locator
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>
                  {/* NAVIGATION LINK: BRANDS */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/partners" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/partners"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/brands"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Partners
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>
                  {/* NAVIGATION LINK: BRANDS */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/brands" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/brands"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/brands"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Brands
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* INTERACTIVE EXPANDABLE MAGAZINE BRIDGE: ABOUT NODE */}
                  <motion.div variants={linkVariants} className="space-y-4">
                    <div className="relative flex items-center justify-between pr-4 group">
                      {pathname.startsWith("/about") && (
                        <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                      )}
                      <button
                        type="button"
                        onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 text-left inline-flex items-center gap-2 focus:outline-none transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname.startsWith("/about")
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        <span>About</span>
                        <motion.div
                          animate={{ rotate: isAboutExpanded ? 180 : 0 }}
                          transition={TEXT_SPRING}
                          className="mt-0.5"
                        >
                          <ChevronDown className="w-4 h-4 text-[#163B65]/40 stroke-[1.8]" />
                        </motion.div>
                      </button>
                    </div>

                    {/* UNFOLDING MAGAZINE SECONDARY LINKS CONTAINER */}
                    <AnimatePresence initial={false}>
                      {isAboutExpanded && (
                        <motion.div
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="pl-4 border-l border-[#163B65]/10 flex flex-col space-y-3.5 overflow-hidden"
                        >
                          <Link
                            href="/about-us"
                            onClick={() => setIsOpen(false)}
                            className="font-sans font-medium text-[15px] text-[#163B65]/70 hover:text-[#163B65] transition-colors duration-200"
                          >
                            About Us
                          </Link>
                          <Link
                            href="/team"
                            onClick={() => setIsOpen(false)}
                            className="font-sans font-medium text-[15px] text-[#163B65]/70 hover:text-[#163B65] transition-colors duration-200"
                          >
                            Our Team
                          </Link>
                          <Link
                            href="/careers"
                            onClick={() => setIsOpen(false)}
                            className="font-sans font-medium text-[15px] text-[#163B65]/70 hover:text-[#163B65] transition-colors duration-200"
                          >
                            Careers
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* NAVIGATION LINK: CONTACT */}
                  <motion.div
                    variants={linkVariants}
                    className="relative flex items-center group"
                  >
                    {pathname === "/contact" && (
                      <span className="absolute -left-4 w-0.5 h-6.5 bg-[#163B65]" />
                    )}
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      transition={TEXT_SPRING}
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`font-sans font-semibold text-[23px] tracking-wide relative py-0.5 inline-block transition-all duration-300 group-hover:translate-x-1.5 ${
                          pathname === "/contact"
                            ? "text-[#163B65]"
                            : "text-[#163B65]/80"
                        }`}
                      >
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.nav>
              </div>

              {/* REFINED ARCHITECTURAL BOTTOM CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="pt-4 pb-4 border-t border-[#163B65]/5 shrink-0 flex justify-center bg-[#FDFBF9]"
              >
                <Link
                  href="/store-locator"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-2 font-sans font-medium text-[12px] tracking-[0.12em] text-[#163B65] uppercase relative py-1 focus:outline-none"
                >
                  <span>Find Your Nearest Store</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#163B65]/50 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all duration-300 stroke-[1.5]" />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#163B65] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});
