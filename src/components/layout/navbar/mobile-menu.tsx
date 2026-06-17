"use client";

import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavbarLogo } from "./navbar-logo";
import { navigationConfig, corporateConfig } from "@/config/navigation";
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const navLinkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const MobileMenu = memo(function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="lg:hidden flex items-center">
        <button
          type="button"
          className="text-[#111111] h-10 w-10 flex items-center justify-center opacity-40"
          disabled
        >
          <Menu className="h-6 w-6 stroke-[1.2]" />
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          type="button"
          className="text-[#111111] h-10 w-10 flex items-center justify-center rounded-md hover:bg-transparent focus-luxury cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 stroke-[1.2]" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:max-w-md bg-white border-l border-[#EAEAEA] p-8 flex flex-col justify-between rounded-none [&>button]:stroke-[1.5] [&>button]:h-5 [&>button]:w-5 [&>button]:top-7 [&>button]:right-6"
        >
          <div className="flex flex-col space-y-12">
            <div className="flex items-center justify-between">
              <SheetTitle>
                <NavbarLogo />
              </SheetTitle>
            </div>

            <nav aria-label="Mobile Navigation Drawer">
              <AnimatePresence>
                {open && (
                  <motion.div
                    variants={navContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-5"
                  >
                    {navigationConfig.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div key={item.href} variants={navLinkVariants}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`font-luxury-nav text-lg tracking-[0.18em] relative py-2 block transition-colors duration-300 ${
                              isActive
                                ? "text-[#111111]"
                                : "text-[#555555] active:text-[#111111]"
                            }`}
                          >
                            <span className="relative z-10">{item.label}</span>

                            {isActive && (
                              <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.15, duration: 0.35 }}
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E65100] origin-left"
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>

          <div className="space-y-8 pt-6 border-t border-[#EAEAEA]">
            <Button
              onClick={() => {
                setOpen(false);
                window.location.href = corporateConfig.ctaHref;
              }}
              className="w-full h-12 bg-[#E65100] hover:bg-[#C54400] text-white font-luxury-nav tracking-widest rounded-none border-0 cursor-pointer transition-colors duration-300"
            >
              {corporateConfig.ctaLabel}
            </Button>

            <div className="space-y-2">
              <p className="font-luxury-meta text-[#555555] font-medium">
                {corporateConfig.connectLabel}
              </p>
              <a
                href={`tel:${corporateConfig.phone}`}
                className="block text-sm font-mono tracking-wider text-[#111111]"
              >
                {corporateConfig.phone}
              </a>
              <a
                href={`mailto:${corporateConfig.email}`}
                className="block text-sm font-mono tracking-wider text-[#111111]"
              >
                {corporateConfig.email}
              </a>
            </div>

            <div className="flex items-center gap-x-5">
              {corporateConfig.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-luxury-meta text-xs text-[#555555] hover:text-[#E65100] tracking-widest transition-colors duration-200"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
});
