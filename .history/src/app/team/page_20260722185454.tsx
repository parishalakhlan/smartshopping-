import React from "react";
import FoundersSection from "@/features/team/FoundersSection";
import LeadershipGrid from "@/features/team/LeadershipGrid";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { teamQuery } from "@/sanity/lib/queries/team";
import Footer from "@/components/layout/footer/Footer";
export default async function TeamPage() {
  const data = await client.fetch(teamQuery);

  console.log(data);

  return (
    <main className="min-h-screen ">
      {/* Hero */}
      <section className="relative py-10 sm:py-28 overflow-hidden bg-primary">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior/interior1.webp"
            fill
            loading="eager"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            className="object-cover"
            alt="Responsive hero image"
          />
          {/* Dark Gradient Overlay using hero-overlay / primary theme colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-hero-overlay to-primary" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4 relative z-10">
          {/* Accent badge text */}
          <span className="text-[10px] font-bold tracking-widest uppercase block text-accent">
            OUR TEAM
          </span>

          {/* Main heading set to light inverse text for crisp AAA contrast */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-none text-text-inverse">
            The People Who Bring Smart Shopping To Life.
          </h1>

          {/* Subtitle using inverse text with high opacity */}
          <p className="text-sm sm:text-base font-normal max-w-xl leading-relaxed pt-2 text-text-inverse/90">
            From store operations and customer experience to business
            development and brand partnerships, our people work together with
            one shared purpose—to make premium retail more accessible, welcoming
            and memorable for every customer.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        <section>
          <FoundersSection founders={data?.founders ?? []} />
        </section>

        <hr className="" />

        <section>
          <LeadershipGrid team={data?.leadership ?? []} />
        </section>

        <hr className="b" />
      </div>
      <Footer />
    </main>
  );
}
