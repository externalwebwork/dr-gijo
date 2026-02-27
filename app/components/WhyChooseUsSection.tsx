"use client";

import { useState, useRef } from "react";

const benefits = [
  {
    title: "Experienced Ayurvedic Doctors",
    description:
      "We are highly qualified BAMS and MD Ayurveda practitioners with over 20 years in treating spinal disorders.",
  },
  {
    title: "Authentic Kerala Panchakarma",
    description:
      "We follow traditional Kerala Panchakarma protocols using genuine techniques passed down through generations.",
  },
  {
    title: "Internal + External Therapies",
    description:
      "Comprehensive approach combining external therapies (Kati Basti, Abhyanga) with internal medicines for complete healing.",
  },
  {
    title: "Holistic Healing Approach",
    description:
      "We don't just treat symptoms - we address the root cause, balance your doshas, and restore overall health through personalized care and lifestyle guidance.",
  },
  {
    title: "Focus on Long-Term Relief",
    description:
      "Our goal is sustainable healing, not temporary fixes. We empower you with knowledge and practices to maintain spinal health for years to come.",
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
      className="py-8 lg:py-14 bg-[#f4e7fa] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Why Choose Our Panchakarma Clinic in Kottayam?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your trusted Ayurvedic Clinic in natural spinal health and holistic
            wellness.
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
                <div className="h-full rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6 shadow-lg shadow-orange-100/50 text-center flex flex-col items-center justify-center">
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
                    ? "bg-[#652576] w-6"
                    : "bg-[#652576] hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Bento-style grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={index === 4 ? "col-span-2" : ""}
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6 lg:p-8 shadow-lg shadow-orange-100/30 hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-300 hover:border-orange-200 flex items-center justify-center">
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
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#652576] text-white font-semibold text-lg hover:bg-[#4f1f5d] transition-colors shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
