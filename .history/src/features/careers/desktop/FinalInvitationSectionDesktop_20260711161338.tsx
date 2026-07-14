"use client";

import React from "react";
import { MagneticButton } from "@/features/careers/MagneticButton";

export const FinalInvitationSectionDesktop: React.FC = () => {
  return (
    <section
      id="invitation-desktop"
      className="bg-navbar-active text-white py-20 relative overflow-hidden hidden lg:block"
    >
      <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[15vw] tracking-widest text-white">
        CAREER
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
            Join Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-none">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/70 text-sm font-normal max-w-md mx-auto leading-relaxed">
            Whether you&apos;re starting your career or looking to scale new
            heights, we want to hear your story.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <MagneticButton className="px-8 py-4 bg-button-secondary-bg text-button-secondary-text hover:bg-accent-hover border border-button-secondary-bg font-bold text-sm rounded-none">
            Apply Now
          </MagneticButton>
          <MagneticButton className="px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white text-sm rounded-none transition-all">
            Contact Recruitment
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
