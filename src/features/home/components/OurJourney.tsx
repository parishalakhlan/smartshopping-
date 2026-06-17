import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Authentic Showroom Imagery */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[550px] w-full bg-slate-100 rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop"
              alt="Vikram Singh and Vinod Kumar Fashion Retail Infrastructure setup"
              fill
              sizes="(max-w-1024px) 100vw, 45vw"
              className="object-cover object-center filter grayscale-[10%]"
            />
            <div className="absolute bottom-0 left-0 bg-[#163B65] text-white p-6 max-w-xs">
              <p className="font-serif text-lg italic font-light">
                "Democratizing western fashion layouts since 2009."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Context */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[#F97316] font-sans font-semibold tracking-wider text-sm uppercase block mb-3">
              OUR JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0F172A] font-normal leading-tight mb-6">
              Building Fashion Infrastructure{" "}
              <br className="hidden sm:inline" />
              Beyond Metro Cities
            </h2>

            <div className="font-sans text-slate-600 text-base sm:text-lg space-y-4 mb-8 font-light leading-relaxed">
              <p>
                Founded by <strong>Vikram Singh</strong> and{" "}
                <strong>Vinod Kumar</strong> in 2009, Smart Shopping began with
                a single store and grew into a trusted multi-brand retail
                network across North India.
              </p>
              <blockquote>
                <p className="border-l-2 border-[#F97316] pl-4 italic text-[#163B65] font-medium">
                  <strong>Think Beyond Metro:</strong> Premium international
                  fashion should be accessible beyond major metropolitan cities.
                </p>
              </blockquote>
            </div>

            {/* Inline Presentation Highlights */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap gap-8 sm:gap-12">
              <div>
                <span className="font-serif text-2xl text-[#163B65] block font-semibold">
                  25+
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-slate-400">
                  Doors Opened
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#163B65] block font-semibold">
                  26
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-slate-400">
                  Average Team Age
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#163B65] block font-semibold">
                  4
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-slate-400">
                  Core Values
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
