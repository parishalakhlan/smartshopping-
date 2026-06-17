"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavbarLogo = memo(function NavbarLogo() {
  return (
    <Link href="/" aria-label="Go to Homepage" className="focus-luxury block">
      <motion.div whileHover={{ opacity: 0.85 }} transition={{ duration: 0.2 }}>
        <span className="font-luxury-heading text-xl font-semibold tracking-[0.22em] text-[#E65100]">
          ARCHETYPE
        </span>
      </motion.div>
    </Link>
  );
});
