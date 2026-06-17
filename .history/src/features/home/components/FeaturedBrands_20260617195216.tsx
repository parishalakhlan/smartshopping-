import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BRANDS = [
  {
    name: "Jack & Jones",
    positioning: "Premium Contemporary Casualwear & Premium Denim",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop",
    link: "https://www.jackjones.com",
  },
  {
    name: "Vero Moda",
    positioning: "Chic Modern European Trends for the Contemporary Woman",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
    link: "https://www.veromoda.com",
  },
  {
    name: "Celio",
    positioning: "Effortless Parisian Urban Smart Menswear Aesthetics",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
    link: "https://www.celio.com",
  },
  {
    name: "Only",
    positioning: "Edgy Fast-Fashion & Authentic Western Streetwear Expressions",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    link: "https://www.only.com",
  },
  {
    name: "Selected Homme",
    positioning:
      "Minimalist Scandinavian Tailoring & Sustainable Luxury Essentials",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    link: "https://www.selected.com",
  },
  {
    name: "Product By Jack & Jones",
    positioning:
      "Youthful Premium Streetwear & Athleisure Tailored for Generations",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    link: "https://www.jackjones.com",
  },
  {
    name: "Only Kids",
    positioning: "Vibrant, High-Quality Playtime Essentials Built for Children",
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop",
    link: "https://www.only.com",
  },
];

export default function FeaturedBrands() {
  return (
    <section
      id="featured-brands"
      className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#F97316] font-sans font-semibold tracking-wider text-sm uppercase block mb-3">
            OUR PREMIUM BRANDS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0F172A] font-normal mb-4">
            7 International Fashion Brands
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            From contemporary essentials to premium fashion collections,
            discover internationally recognized brands for every member of the
            family.
          </p>
        </div>

        {/* Premium Brand Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between h-[420px] bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-slate-300 rounded-sm"
            >
              {/* Product Background Image Context */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={brand.image}
                  alt={`${brand.name} collection`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover object-center filter grayscale-[30%] brightness-[0.85] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              </div>

              {/* Header Context within card */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="bg-white/90 backdrop-blur-sm text-[#163B65] font-serif tracking-widest px-4 py-2 font-bold text-sm uppercase shadow-sm">
                  {brand.name}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-6 pt-0 text-white">
                <p className="font-sans text-slate-200 text-sm mb-4 font-light leading-relaxed max-w-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  {brand.positioning}
                </p>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-sans tracking-[0.15em] font-medium uppercase text-[#F97316] group-hover:text-white transition-colors duration-300"
                >
                  Explore Brand
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
