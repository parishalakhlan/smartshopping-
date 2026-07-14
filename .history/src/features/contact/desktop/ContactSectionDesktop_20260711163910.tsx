"use client";

import React from "react";

export const ContactSectionDesktop: React.FC = () => {
  return (
    <div className="hidden lg:flex w-full min-h-[500px] bg-background-main items-center justify-center p-12 border-b border-border-main">
      <div className="text-center space-y-2">
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
          Desktop Communications Board
        </h2>
        <p className="text-xs text-text-primary/60 max-w-sm mx-auto font-medium leading-relaxed">
          The desktop dashboard houses multi-column administration panels,
          corporate offices, and static grid catalogs.
        </p>
      </div>
    </div>
  );
};
