"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetDentistSection() {
  return (
    <section className="py-10 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Meet Your Dentist at{" "}
              <span className="text-[#2E86C1]">Thodupuzha</span>
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg">
              A family practice you can trust. Dr. Gijo (MDS) is dedicated to bringing 
              world-class dental care to our Thodupuzha community.
            </p>

            {/* Doctor Name */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-gray-900">
                Dr. Gijo BDS, MDS
              </h3>
              <p className="text-[#2E86C1] font-medium mt-1">
                Micro-Resto-Endodontist
              </p>
              <p className="text-gray-500 mt-1">
                Biomimetic Dentist & Tooth Saver
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-4 space-y-1">

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0 mt-2 bg-[#2E86C1] rounded-full"></div>
                <p className="text-gray-700">
                  Highly qualified and trained in Microscopic Root Canal Treatment
                </p>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0 mt-2 bg-[#2E86C1] rounded-full"></div>
                <p className="text-gray-700">
                  Focus on biomimetic dentistry
                </p>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0 mt-2 bg-[#2E86C1] rounded-full"></div>
                <p className="text-gray-700">
                  Minimal invasive dentistry approach
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-3">
              <a
                href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment%20with%20Dr.%20Gijo.%20I%20am%20interested%20in%20consultation%20and%20would%20like%20to%20know%20more%20about%20available%20time%20slots.%20Please%20let%20me%20know%20the%20next%20steps%20for%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2E86C1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E6FA8] transition shadow-sm"
              >
                Book an Appointment
              </a>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] bg-blue-50/50 rounded-3xl overflow-hidden shadow-md"
          >
            <Image
              src="/dr.png"
              alt="Dr Gijo - Dentist in Thodupuzha"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}