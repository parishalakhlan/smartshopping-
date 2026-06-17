import Image from "next/image";

const CATEGORIES = [
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Kids",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
  },
];

export default function FashionExperience() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F97316] font-sans font-semibold tracking-wider text-sm uppercase block mb-2">
            IMMERSIVE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal">
            Fashion For Every Generation
          </h2>
          <p className="font-sans text-slate-500 font-light text-sm mt-2">
            Providing full-spectrum luxury and lifestyle products suited
            seamlessly for the entire family matrix.
          </p>
        </div>

        {/* Visual Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group relative h-[480px] overflow-hidden bg-slate-900 rounded-sm"
            >
              <Image
                src={cat.image}
                alt={`${cat.title} Category`}
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.65]"
              />

              {/* Bottom text overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="font-serif text-2xl text-white font-medium tracking-wide mb-1">
                  {cat.title}
                </h3>
                <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
