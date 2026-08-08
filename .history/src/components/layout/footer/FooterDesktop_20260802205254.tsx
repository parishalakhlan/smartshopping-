"use client";

import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/smartshoppingstores?igsh=MXhpOTBhNGI0YWdtMg==",
    icon: (
      <svg
        className="h-3.5 w-3.5"
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
        className="h-3.5 w-3.5"
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
        className="h-3.5 w-3.5"
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

export default function FooterDesktop() {
  return (
    <footer
      aria-label="Desktop Footer"
      className="w-full border-t border-border-main/20 bg-background-main/80 backdrop-blur-md px-10 py-8 text-text-primary transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Main Content Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs">
          {/* Brand & Socials */}
          <div className="flex items-center gap-6">
            <span className="font-serif text-lg font-bold tracking-tight text-text-primary">
              Smart Shopping
            </span>
            <div className="h-4 w-px bg-border-main/20" />
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border-main/30 text-text-secondary bg-background-secondary/50 hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Inline Navigation Links */}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-main/30 to-transparent" />

        {/* Bottom Legal & Contact */}
      </div>
    </footer>
  );
}
