"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetDentistSection() {
  return (
    <section className="py-10 lg:py-10 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Full-Time Root Canal Specialist <br />
            <span className="text-[#2E86C1] inline-block mt-2 sm:mt-3">
              (Endodontist)
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 lg:bg-white lg:shadow-xl rounded-3xl p-8 lg:p-10 text-center lg:text-left border border-gray-100 order-2 lg:order-1"
          >
            {/* Name */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Dr. Gijo BDS, MDS
              </h3>

              <p className="text-[#2E86C1] font-semibold mt-2 text-lg">
                (Micro-Resto-Endodontist)
              </p>

              <div className="w-16 h-1 bg-[#2E86C1] mt-4 mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Highlights */}
            <div className="mt-5 space-y-1 -ml-2 sm:ml-0 text-left">
              {[
                "Specialised in Microscopic Root Canal Treatment",
                "Biomimetic Dentist & Tooth Saver",
                "Minimal invasive dentistry approach",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 mr-2 flex-shrink-0 mt-2 bg-[#2E86C1] rounded-full" />
                  <p
                    className={`text-gray-700 text-sm sm:text-base lg:text-lg ${
                      i === 0 ? "" : "whitespace-nowrap"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-3">
              <a
                href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2E86C1] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1E6FA8] transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                SCHEDULE VISIT
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] bg-blue-50/50 rounded-3xl overflow-hidden shadow-md order-1 lg:order-2"
          >
            <Image
              src="/gijo-dr.png"
              alt="Dr Gijo - Dentist in Thodupuzha"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
