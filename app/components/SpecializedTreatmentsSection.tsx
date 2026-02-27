"use client";

import { useState } from "react";

export default function SpecializedTreatmentsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const treatments = [
    {
      name: "Kati Vasti",
      feeling: "Warm, medicated oil pooled on the lower back.",
      benefit:
        'Deeply nourishes dry spinal discs and releases "locked" muscles.',
      image: "/KATIVASTI.webp",
    },
    {
      name: "Pizhichil",
      feeling: "A continuous stream of warm herbal oil over the body.",
      benefit:
        "Reduces inflammation and strengthens the entire nervous system.",
      image: "/pizhichil.jpg",
    },
    {
      name: "Abhyanga",
      feeling: "Systematic, medicated massage by trained therapists.",
      benefit:
        'Flushes out toxins and reduces the "morning stiffness" that slows you down.',
      image: "/abhyanga.jpg",
    },
    {
      name: "Basti (Panchakarma)",
      feeling: "Internal herbal cleansing and nourishment.",
      benefit:
        "Balances the Vata energy—the primary cause of bone and joint decay.",
      image: "/basti.webp",
    },
  ];

  return (
    <section id="treatments" className="py-8 lg:py-14 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bg-2.png)" }}
      />
      <div className="absolute inset-0 bg-white/30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized Ayurvedic Spine Treatment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Instead of just masking pain, our specialized treatments work to
            re-lubricate your discs and soothe inflamed nerves.
          </p>
        </div>

        {/* Treatments - Mobile: Tabs | Desktop: Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          {/* Mobile: Tab Navigation */}
          <div className="lg:hidden border-b border-gray-200 p-2">
            <div className="grid grid-cols-2 gap-2">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 font-semibold text-sm uppercase tracking-wider transition-colors duration-200 rounded-lg min-w-0 break-words text-center leading-tight ${
                    activeTab === index
                      ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-300"
                      : "text-gray-600 bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  {treatment.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Tab Content */}
          <div className="lg:hidden p-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className={activeTab === index ? "block space-y-6" : "hidden"}
              >
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {treatment.name}
                  </h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 text-center">
                      How it Feels
                    </h5>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {treatment.feeling}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 text-center">
                      Why Your Spine Needs It
                    </h5>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {treatment.benefit}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 w-full max-w-xs h-48 flex items-center justify-center">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover object-center"
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>,
                      ) => {
                        const target = e.currentTarget;
                        target.src =
                          "data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%2310b981' width='200' height='100'/%3E%3Ctext fill='white' font-size='14' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E{treatment.name}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 border-b border-gray-200">
              <div className="p-6 lg:p-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center text-center">
                <h3 className="text-lg font-bold uppercase tracking-wider">
                  Treatment
                </h3>
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-teal-50 to-emerald-50 border-l border-gray-200 flex items-center justify-center text-center">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">
                  How it Feels
                </h3>
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-l border-gray-200 flex items-center justify-center text-center">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">
                  Why Your Spine Needs It
                </h3>
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-teal-50 to-emerald-50 border-l border-gray-200 flex items-center justify-center text-center">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">
                  Visual
                </h3>
              </div>
            </div>

            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="p-6 lg:p-8 flex items-center justify-center text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {treatment.name}
                  </h4>
                </div>
                <div className="p-6 lg:p-8 border-l border-gray-100 flex items-center text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.feeling}
                  </p>
                </div>
                <div className="p-6 lg:p-8 border-l border-gray-100 flex items-center text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.benefit}
                  </p>
                </div>
                <div className="p-6 lg:p-8 border-l border-gray-100 flex items-center justify-center">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 w-full max-w-[200px] h-28 flex items-center justify-center">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover object-center"
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>,
                      ) => {
                        const target = e.currentTarget;
                        target.src =
                          "data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%2310b981' width='200' height='100'/%3E%3Ctext fill='white' font-size='14' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E{treatment.name}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Approach Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                Not Every Treatment Is Right for Every Spine
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                We don&apos;t believe in one-size-fits-all care. Our doctors
                assess your Dosha, condition, and lifestyle before recommending
                treatment.
              </p>

              <p className="text-gray-600 leading-relaxed">
                This personalized approach ensures faster relief and long-term
                recovery.
              </p>
            </div>

            {/* Right CTA Card */}
            
            <div className="bg-gradient-to-br from-[#652576] to-[#78328d] rounded-2xl p-6 lg:p-8 text-white shadow-xl flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
              <h4 className="text-xl lg:text-2xl font-semibold mb-6">
                Book Your Consultation
              </h4>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-white text-[#652576] px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
