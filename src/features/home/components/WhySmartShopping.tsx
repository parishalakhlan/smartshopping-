import Link from "next/link";
import {
  GraduationCap,
  Award,
  Heart,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    icon: GraduationCap,
    title: "SKILL UP Initiative",
    desc: "Continuous corporate training and retail certification programs transforming regional youth execution styles.",
  },
  {
    icon: Award,
    title: "Rewards & Recognition",
    desc: "Extensive monthly and annual recognition initiatives ensuring operational excellence shines bright.",
  },
  {
    icon: ShieldAlert,
    title: "Retail Excellence",
    desc: "Award-winning layouts, operational precision parameters, and elite logistical supply frameworks.",
  },
  {
    icon: Heart,
    title: "People-First Culture",
    desc: "Robust employee lifecycle engagement configurations ensuring horizontal corporate growth trajectories.",
  },
];

export default function WhySmartShopping() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F97316] font-sans font-semibold tracking-wider text-sm uppercase block mb-2">
            OPERATIONAL PILLARS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal">
            What Makes Smart Shopping Different
          </h2>
        </div>

        {/* Premium Editorial Staggered Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#163B65]/30 ${
                  idx % 2 === 1 ? "md:translate-y-6" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center border border-[#E2E8F0] text-[#F97316] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A] font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate-500 font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-[#E2E8F0] mt-6 group-hover:w-16 transition-all" />
              </div>
            );
          })}
        </div>

        {/* Strategic CTA alignment */}
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-sans tracking-[0.2em] uppercase font-semibold text-[#163B65] hover:text-[#F97316] transition-colors group"
          >
            Read Our Story
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
