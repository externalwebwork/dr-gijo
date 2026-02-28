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
    { value: "12+", label: "Years of Dentistry" },
    { value: "10,000+", label: "Root Canal Cases" },
    { value: "B.D.S, M.D.S", label: "Microscopic Root Canal Specialist", sublabel: "Dentist" },
    { value: "", label: "Modern Microscopic Equipment & Techniques" },
    { value: "", label: "Root Canal Treatment Specialist (Endodontists)" },
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
    <section id="stats" className="py-12 sm:py-16 lg:py-10 bg-[#F4F6F7] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E86C1] mb-2 sm:mb-3">
            Trusted Root Canal Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Advanced microscopic root canal treatment by qualified Endodontists
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
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center gap-2 flex-shrink-0 w-[82vw] sm:w-[72vw] snap-center touch-manipulation select-none border border-gray-100"
                >
                  {stat.value && (
                    <div className="text-3xl sm:text-4xl font-black text-[#2E86C1] leading-tight">
                      {stat.value}
                    </div>
                  )}
                  <div className={`text-gray-700 font-bold leading-snug ${stat.value ? "text-sm sm:text-base" : "text-base sm:text-lg px-2"}`}>
                    {stat.label}
                  </div>
                  {'sublabel' in stat && (
                    <div className="text-gray-500 font-medium text-xs sm:text-sm">{stat.sublabel}</div>
                  )}
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
                    className={`h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E86C1] focus-visible:ring-offset-2 ${
                      activeIndex === index
                        ? 'w-8 bg-[#2E86C1]'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:pb-2 lg:px-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] border border-gray-100"
              >
                {stat.value && (
                  <div className="text-3xl xl:text-4xl font-black text-[#2E86C1] leading-tight mb-2 break-words">
                    {stat.value}
                  </div>
                )}
                <div className={`text-gray-700 font-bold leading-snug ${stat.value ? "text-base" : "text-lg xl:text-xl px-1"}`}>
                  {stat.label}
                </div>
                {'sublabel' in stat && (
                  <div className="text-gray-500 font-medium text-sm mt-1">{stat.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
