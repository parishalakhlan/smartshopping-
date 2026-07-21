import React from "react";
import FoundersSection from "@/features/team/FoundersSection";
import LeadershipGrid from "@/features/team/LeadershipGrid";

import { client } from "@/sanity/lib/client";
import { teamQuery } from "@/sanity/lib/queries/team";

export default async function TeamPage() {
  const data = await client.fetch(teamQuery);

  console.log(data);

  return (
    <main className="min-h-screen ">
      {/* Hero */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase block">
            {data?.hero?.eyebrow || "THE PEOPLE BEHIND SMART SHOPPING"}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-none">
            {data?.hero?.title || "Passionate People. One Shared Vision."}
          </h1>

          <p className="text-sm sm:text-base font-normal max-w-xl leading-relaxed pt-2">
            {data?.hero?.description ||
              "From store operations and customer experience to business development and brand partnerships, our people work together with one shared purpose—to make premium retail more accessible, welcoming and memorable for every customer."}
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
    </main>
  );
}
