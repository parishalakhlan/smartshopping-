export default function TrustSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-4xl text-[#0F172A] font-normal mb-16 tracking-tight">
          Trusted Across North India Since 2009
        </h2>

        {/* Refined Minimalist Typography Layout - Explicitly No KPI Box aesthetics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-[#163B65] font-light">
              15+ Years
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Uncompromised Legacy
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-[#163B65] font-light">
              27+ Stores
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Operational Touchpoints
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-[#163B65] font-light">
              200+ Team
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Retail Professionals
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-[#163B65] font-light">
              Thousands
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Delighted Families
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
