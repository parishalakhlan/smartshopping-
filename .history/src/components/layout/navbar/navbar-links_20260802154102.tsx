"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarConfig } from "./types";

export const NavbarLinks = memo(function NavbarLinks() {
  const pathname = usePathname();
  const { navigation } = navbarConfig;

  return (
    <nav className="hidden lg:flex items-center justify-center gap-8 select-none">
      {navigation.items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group font-sans text-[15px] font-semibold transition-all duration-200 relative py-1 ${
              isActive ? "text-accent" : "text-text-primary hover:text-accent"
            }`}
          >
            {item.label}

            {/* Active Link Indicator Bar */}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
            )}

            {/* Hover Expansion Underline */}
            {!isActive && (
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
});
