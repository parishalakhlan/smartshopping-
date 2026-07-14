"use client";

import React from "react";

export const FinalInvitationSectionMobile: React.FC = () => {
  return (
    <section
      id="invitation-mobile"
      className="w-full bg-[#163B65] text-[#FFFFFF] py-14 px-4 relative overflow-hidden font-sans lg:hidden"
    >
      {/* Scaled Background Decorative Text */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none select-none flex items-center justify-center font-serif font-extrabold text-[22vw] tracking-wider text-[#FFFFFF]">
        CAREER
      </div>

      <div className="max-w-md mx-auto text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
            Join Us
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight leading-snug">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#FFFFFF]/70 text-xs font-normal leading-relaxed">
            Whether you&apos;re starting your career or looking to scale new
            heights, we want to hear your story.
          </p>
        </div>

        {/* Stacked Full-Width Buttons for Mobile Fingers */}
        <div className="flex flex-col gap-3 w-full pt-2">
          <button className="w-full py-3.5 bg-[#F97316] text-[#FFFFFF] active:bg-[#E26613] border border-[#F97316] font-bold text-xs rounded-none transition-colors">
            Apply Now
          </button>
          <button className="w-full py-3.5 bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 active:border-[#FFFFFF] active:bg-[#FFFFFF]/5 text-xs rounded-none transition-all">
            Contact Recruitment
          </button>
        </div>
      </div>
    </section>
  );
};
