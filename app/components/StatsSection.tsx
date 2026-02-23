'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndexRef = useRef(activeIndex);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "40000+", label: "Happy Patients" },
    { value: "", label: "Panchakarma Specialists", icon: "/CGHS-hospital.png" },
    { value: "", label: "Personalized Treatment Plans", icon: "/NABH.png" },
    { value: "100+", label: "Treatments" },
  ];

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, stats.length - 1));
    setActiveIndex(clamped);
    const container = scrollRef.current;
    const card = cardRefs.current[clamped];
    if (!container || !card) return;
    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(container).gap, 10) || 16;
    const targetScrollLeft = clamped * (cardWidth + gap);
    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
  }, [stats.length]);

  const handleScroll = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, 3000);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('[data-slide]')?.clientWidth ?? 0;
      const gap = parseInt(getComputedStyle(container).gap, 10) || 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, stats.length - 1));
      scrollTimeoutRef.current = null;
    }, 50);
  }, [stats.length]);

  const handleActivity = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      const current = activeIndexRef.current;
      const next = current >= stats.length - 1 ? 0 : current + 1;
      goToSlide(next);
    }, 2000);
    return () => {
      clearInterval(id);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [goToSlide, stats.length]);

  return (
    <section id="stats" className="py-12 sm:py-16 lg:py-10 bg-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">
            Trusted by Thousands of Patients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-1">
            Our commitment to authentic Ayurvedic healing has made us
            Kerala&apos;s preferred spine care destination
          </p>
        </div>

        <div className="relative md:static overflow-x-hidden">
          {/* Mobile: Carousel with arrows */}
          <div className="md:hidden relative">

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseEnter={handleActivity}
              onMouseLeave={handleActivity}
              onTouchStart={handleActivity}
              onTouchEnd={handleActivity}
              onPointerDown={handleActivity}
              className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 sm:gap-6 -mx-4 px-4 sm:-mx-6 sm:px-6 pb-4 scroll-smooth touch-pan-x touch-pan-y-none overscroll-x-contain overscroll-y-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-slide
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[180px] flex flex-col justify-center flex-shrink-0 w-[82vw] sm:w-[72vw] snap-center touch-manipulation select-none"
                >
                  {stat.value && (
                    <div className="text-4xl sm:text-5xl font-black text-orange-600 mb-2 sm:mb-3">
                      {stat.value}
                    </div>
                  )}
                  {stat.icon && (
                    <div className="sm:mb-4 flex justify-center">
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
                      />
                    </div>
                  )}
                  <div className="text-gray-700 font-bold text-sm sm:text-base leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Carousel indicators */}
            <div className="flex justify-center gap-2 md:hidden" role="tablist" aria-label="Carousel slides">
              {stats.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => { handleActivity(); goToSlide(index); }}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={activeIndex === index}
                  role="tab"
                  className={`h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                    activeIndex === index
                      ? 'w-8 bg-orange-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 m-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow min-h-[180px] flex flex-col justify-center min-w-0 overflow-hidden"
              >
                {stat.value && (
                  <div className="text-4xl lg:text-5xl font-black text-orange-600 mb-3 md:mb-4 break-words">
                    {stat.value}
                  </div>
                )}
                {stat.icon && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                )}
                <div className="text-gray-700 font-bold text-lg leading-tight">
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
