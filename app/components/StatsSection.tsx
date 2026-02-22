'use client';

import { useRef, useState } from 'react';

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "40000+", label: "Happy Patients" },
    { value: "", label: "Panchakarma Specialists", icon: "/CGHS-hospital.png" },
    { value: "", label: "Personalized Treatment Plans", icon: "/NABH.png" },
    { value: "100+", label: "Treatments" },
  ];

  const goToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, stats.length - 1));
    setActiveIndex(clamped);
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector('[data-slide]')?.clientWidth ?? 0;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, stats.length - 1));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">
            Trusted by Thousands of Patients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-1">
            Our commitment to authentic Ayurvedic healing has made us
            Kerala&apos;s preferred spine care destination
          </p>
        </div>

        <div className="relative">
          {/* Mobile: Arrow buttons */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none flex justify-between px-1">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              disabled={activeIndex === stats.length - 1}
              aria-label="Next slide"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 lg:grid-cols-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-2 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scroll-smooth touch-pan-x"
          >
            {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-slide
              className="text-center p-6 sm:p-8 md:p-10 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow min-h-[180px] flex flex-col justify-center flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-auto snap-center"
            >
              {stat.value && (
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-600 mb-2 sm:mb-3 md:mb-4">
                  {stat.value}
                </div>
              )}
              {stat.icon && (
                <div className="sm:mb-4 flex justify-center">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-12 h-12 sm:w-20 sm:h-20 md:w-14 md:h-14 object-contain"
                  />
                </div>
              )}
              <div className="text-gray-700 font-bold text-sm sm:text-base md:text-lg leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
