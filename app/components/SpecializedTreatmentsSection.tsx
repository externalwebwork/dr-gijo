"use client";

const comparisonRows = [
  {
    aspect: "Preservation of tooth structure",
    conventional: "More tooth destruction",
    microscopic:
      "Less tooth destruction along with the god-gifted skills of doctor",
  },
  {
    aspect: "Magnification & Visibility",
    conventional: "Performed with direct vision (Naked Eye)",
    microscopic:
      "Performed under high-magnification dental microscope",
  },
  {
    aspect: "Precision Level",
    conventional:
      "Limited visibility of fine root canals and chance of missing root canals",
    microscopic:
      "Enhanced visibility with superior magnification and predictable success",
  },
  {
    aspect: "Infection Control",
    conventional: "Cotton rolls and suction – Non standardized",
    microscopic:
      "Rubber dam isolation (International standard of care)",
  },
  {
    aspect: "Canal Cleaning & Disinfection",
    conventional: "Inadequate canal disinfection",
    microscopic:
      "Thorough disinfection along with rubber dam isolation results in root canal success.",
  },
  {
    aspect: "Canal Filling (Obturation)",
    conventional: "2D technique often get reinfected",
    microscopic: "3D obturation technique prevent bacterial re-entry",
  },
];

export default function SpecializedTreatmentsSection() {
  return (
    <section
      id="treatments"
      className="py-12 lg:py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/section-2-bg.png)" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E86C1] mb-3 leading-tight">
            Advanced Microscopic vs. Conventional Root Canal
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            The following table highlights why microscopic technology offers a
            superior standard of care:
          </p>
        </div>

        {/* Desktop: 3-column comparison table */}
        <div className="hidden lg:block rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
          <div className="grid grid-cols-3">
            <div className="col-span-1 p-6 lg:p-8 bg-gray-50 border-b border-r border-gray-200 font-bold text-gray-900 text-base lg:text-lg uppercase tracking-wider">
              Treatment Aspect
            </div>
            <div className="col-span-1 p-6 lg:p-8 bg-red-100 border-b border-r border-gray-200 font-bold text-gray-700 text-base lg:text-lg uppercase tracking-wider text-center">
              Conventional Root Canal
            </div>
            <div className="col-span-1 p-6 lg:p-8 bg-[#2E86C1] text-white font-bold text-base lg:text-lg uppercase tracking-wider text-center">
              Advanced Microscopic Root Canal
            </div>
          </div>
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index < comparisonRows.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <div className="col-span-1 p-6 lg:p-8 bg-gray-50/50 border-r border-gray-200 font-semibold text-gray-800 text-base">
                {row.aspect}
              </div>
              <div className="col-span-1 p-6 lg:p-8 border-r border-gray-100 text-gray-600 text-base leading-relaxed">
                {row.conventional}
              </div>
              <div className="col-span-1 p-6 lg:p-8 bg-blue-50/50 text-gray-800 text-base leading-relaxed font-medium">
                {row.microscopic}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Card-based comparison */}
        <div className="lg:hidden space-y-4">
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="p-4 sm:p-5 bg-gray-50 border-b border-gray-100">
                <h4 className="font-bold text-gray-900 text-base sm:text-base">
                  {row.aspect}
                </h4>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-4 sm:p-5 bg-red-100">
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Conventional Root Canal
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {row.conventional}
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-blue-50/50">
                  <p className="text-xs sm:text-sm font-semibold text-[#2E86C1] uppercase tracking-wider mb-1.5">
                    Advanced Microscopic Root Canal
                  </p>
                  <p className="text-gray-800 text-base leading-relaxed font-medium">
                    {row.microscopic}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-14 text-center">
          <a
            href="tel:+919497884584"
            className="inline-flex items-center justify-center gap-2 bg-[#2E86C1] hover:bg-[#2574a8] text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
