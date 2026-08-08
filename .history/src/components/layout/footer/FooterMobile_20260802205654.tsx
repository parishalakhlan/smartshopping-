"use client";

import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/smartshoppingstores?igsh=MXhpOTBhNGI0YWdtMg==",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinod-kumar-92ab79116?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function FooterMobile() {
  return (
    <footer
      aria-label="Mobile Footer"
      className="relative w-full bg-background-main text-text-primary pt-8 pb-6 px-4 overflow-hidden"
    >
      {/* Soft Top Glow / Smooth Transition Line (Replaces Harsh Solid Border) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto w-full">
        {/* Main Content Box with Subtle Background Card */}
        <div className="rounded-2xl bg-background-secondary/40 border border-border-main/10 p-5 shadow-xs backdrop-blur-sm space-y-5">
          {/* Brand Identity & Value Statement */}
          <div className="space-y-2">
            <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-accent uppercase block">
              Luxury Shopping Redefined
            </span>
            <h3 className="font-serif text-xl font-bold tracking-tight text-text-primary">
              Smart Shopping
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Curating premium lifestyle and high-fashion collections. Elevate
              your everyday wardrobe with our exclusive storefronts.
            </p>
          </div>

          <div className="h-px w-full bg-border-main/10" />

          {/* Connect & Social Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-text-primary block">
                Connect With Us
              </span>
              <span className="text-[10px] text-text-secondary block">
                Follow our channels
              </span>
            </div>

            {/* Social Action Pill Buttons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background-main border border-border-main/20 text-text-primary shadow-xs hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Copyright Bar */}
        <div className="mt-5 flex items-center justify-between text-[10px] text-text-secondary px-1">
          <p>© {new Date().getFullYear()} Smart Shopping</p>
          <p className="font-sans font-medium tracking-wider uppercase text-[9px] opacity-70">
            Crafted for Elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
