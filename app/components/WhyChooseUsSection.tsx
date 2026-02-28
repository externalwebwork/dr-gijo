"use client";

import { useState, useRef } from "react";

const benefits = [
  {
    title: "Expert Specialists",
    description:
      "Highly qualified dentists with advanced training and years of experience in complex procedures.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Convenient appointment times including evenings and weekends to fit your busy lifestyle.",
  },
  {
    title: "Advanced Safety",
    description:
      "Strict sterilization protocols and state-of-the-art equipment ensure your safety and comfort.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "Personalized treatment plans tailored to your unique needs, goals, and budget.",
  },
  {
    title: "Latest Technology",
    description:
      "Digital X-rays, laser dentistry, and 3D imaging for precise diagnosis and treatment.",
  },
  {
    title: "Trusted by Thousands",
    description:
      "Join our family of satisfied patients who have transformed their smiles and lives.",
  },
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < benefits.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section
      id="why-choose-us"
      className="py-8 lg:py-14 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/section-bg.png)" }}
    >
      <div className="absolute inset-0 bg-white/65" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E86C1] leading-tight mb-4">
            Why Choose Our Dental Solutions at Thodupuzha?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the difference that expertise, technology, and compassionate care can make.
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] max-w-sm snap-center snap-always"
              >
                <div className="h-full rounded-2xl bg-white border border-gray-200 p-6 shadow-lg shadow-gray-100/50 text-center flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#2E86C1] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 2 cards per row */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div className="h-full rounded-2xl bg-white border border-gray-200 p-6 lg:p-8 shadow-lg shadow-gray-100/30 hover:shadow-xl hover:shadow-gray-100/40 transition-all duration-300 hover:border-[#2E86C1]/30 flex items-center justify-center">
                  <div className="max-w-xl text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="tel:+919497884584"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#2E86C1] text-white font-semibold text-lg hover:bg-[#2574a8] transition-colors shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
