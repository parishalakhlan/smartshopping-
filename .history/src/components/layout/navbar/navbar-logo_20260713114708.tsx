"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navbarConfig } from "./types";

export const NavbarLogo = memo(function NavbarLogo() {
  const [error, setError] = useState(false);
  const { metadata } = navbarConfig;

  return (
    <Link
      href="/"
      aria-label={metadata.logoAlt}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163B65] focus-visible:ring-offset-4 rounded-sm block select-none"
    >
      <motion.div
        whileHover={{ opacity: 0.95, y: -0.5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="w-[130px] lg:w-[180px] flex items-center"
      >
        {!error ? (
          <Image
            src="/logo/smart_shopping-logo.png"
            alt={metadata.logoAlt}
            width={190}
            height={60}
            className="h-auto w-full object-contain"
            priority
            onError={() => setError(true)}
          />
        ) : (
          <span
            className="font-serif font-bold text-[16px] sm:text-[19px] tracking-tight text-[#163B65] flex items-center gap-x-1"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            {metadata.logoFallback}
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
          </span>
        )}
      </motion.div>
    </Link>
  );
});
