"use client";

import { CheckCircle, XCircle } from "lucide-react";

export default function WhyAdvancedMicroscopicSection() {
  return (
    <section
      className="py-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/section-2-bg.png')" }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/65 "></div>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Why <span className="text-[#2E86C1]">Advanced Microscopic</span>{" "}
            Root Canal Is Best For You
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Advanced microscopic root canal treatment offers higher success
            rates compared to the conventional root canal.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            {/* Head */}
            <thead className="bg-[#2E86C1] text-white">
              <tr>
                <th className="p-4 sm:p-6 text-sm sm:text-base font-semibold">
                  Conventional Root Canal
                </th>
                <th className="p-4 sm:p-6 text-sm sm:text-base font-semibold">
                  Advanced Microscopic Root Canal
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="bg-white text-gray-700 text-sm sm:text-base">
              {[
                ["More tooth destruction", "Less tooth destruction"],
                [
                  "Performed with Naked Eye",
                  "Use of High-magnification dental microscope",
                ],
                [
                  "Limited visibility; chance of missing canals",
                  "Enhanced visibility; predictable success",
                ],
                [
                  "Non-standardized suction",
                  "International standard Rubber dam isolation",
                ],
                [
                  "Inadequate canal disinfection",
                  "Thorough disinfection results in success",
                ],
                [
                  "2D technique; higher reinfection risk",
                  "3D technique; prevents bacterial re-entry",
                ],
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-[#F9FBFF] transition"
                >
                  <td className="p-4 sm:p-6 align-top">
                    <div className="flex items-start gap-3">
                      <XCircle className="text-red-500 w-5 h-5 mt-0.5 shrink-0" />
                      <span>{row[0]}</span>
                    </div>
                  </td>

                  <td className="p-4 sm:p-6 align-top">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 shrink-0" />
                      <span>{row[1]}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
