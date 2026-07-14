"use client";

import React, { useState, useEffect } from "react";
import FoundersSection from "@/features/team/FoundersSection";
import LeadershipGrid from "@/features/team/LeadershipGrid";
import BehindTheStores from "@/features/team/BehindTheStores";
import { client } from "@/sanity/lib/client";
import { teamQuery } from "@/sanity/lib/queries/team";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

export default async function TeamPage() {
  const data = await client.fetch(teamQuery);

  // Debug: Log the raw data
  console.log("Raw Sanity Data:", JSON.stringify(data, null, 2));

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
        <div className="text-center">
          <p className="text-[#163B65] text-lg font-serif">
            No team data found.
          </p>
        </div>
      </div>
    );
  }

  // Debug: Log the operational wings data
  console.log("Operational Wings Raw:", data.operationalWings);

  // Transform image references to URLs with better error handling
  const founders =
    data.founders?.map((founder: any) => ({
      ...founder,
      image: founder.image ? urlFor(founder.image).url() : null,
    })) || [];

  const leadership =
    data.leadership?.map((member: any) => ({
      ...member,
      image: member.image ? urlFor(member.image).url() : null,
    })) || [];

  const wings =
    data.operationalWings?.map((wing: any) => {
      // Debug each wing
      console.log("Wing data:", wing);
      console.log("Wing image:", wing.image);

      return {
        ...wing,
        image: wing.image ? urlFor(wing.image).url() : null,
      };
    }) || [];

  // Debug: Log the transformed wings
  console.log("Transformed Wings:", wings);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#163B65] selection:bg-[#F97316]/10 selection:text-[#F97316]">
      {/* Hero Section */}
      <section className="relative bg-[#F5F2EC]/40 border-b border-[#163B65]/10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
            {data.tagline || "Our Shared Manifesto"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-none">
            {data.heading || "We are built on the passion of deliberate craft."}
          </h1>
          <p className="text-[#475569] text-sm sm:text-base font-normal max-w-xl leading-relaxed pt-2">
            {data.description || "Meet the collection of visual architects..."}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        <section aria-label="Founding Partners Overview">
          <FoundersSection founders={founders} />
        </section>

        <hr className="border-[#163B65]/10" />

        <section aria-label="Creative Leadership Pipeline">
          <LeadershipGrid team={leadership} />
        </section>

        <hr className="border-[#163B65]/10" />

        <section aria-label="Operational Wings Showcase">
          <BehindTheStores wings={wings} />
        </section>
      </div>
    </main>
  );
}
