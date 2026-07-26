"use client";

export function MobileStoreStats() {
  const stats = [
    {
      value: "35+",
      label: "Showrooms Live",
      description: "Curated physical storefronts.",
      iconBg:
        "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      accentGlow: "from-amber-500/10 to-transparent",
    },
    {
      value: "9+",
      label: "Premium Brands",
      description: "International design houses.",
      iconBg:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      accentGlow: "from-blue-500/10 to-transparent",
    },
    {
      value: "100K+",
      label: "Clients Served",
      description: "Personalized design curation.",
      iconBg:
        "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      accentGlow: "from-purple-500/10 to-transparent",
    },
    {
      value: "7 States",
      label: "Territories Open",
      description: "Spanning key luxury markets.",
      iconBg:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      accentGlow: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section className="bg-background-main/50 py-10 px-5 border-y border-border-main/60 font-sans md:hidden relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      {/* 2x2 Flowing Grid with organic spacing */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="relative group p-4 rounded-2xl bg-background-main/80 border border-border-main/50 shadow-xs backdrop-blur-xs transition-all duration-300 active:scale-[0.98] flex flex-col justify-between"
            >
              {/* Subtle top corner gradient accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-bl ${stat.accentGlow} rounded-tr-2xl pointer-events-none opacity-60`}
              />

              <div className="space-y-3">
                {/* Soft Rounded Icon Badge */}

                {/* Main Stat Number */}
                <div>
                  <span className="block text-2xl font-bold text-text-primary font-serif tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-bold text-accent uppercase tracking-wider leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <p className="text-[11px] text-text-secondary/90 leading-snug pt-2 border-t border-border-main/30 mt-3 font-normal">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
