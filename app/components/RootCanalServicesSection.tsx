"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Microscopic Painless Root Canal Treatment",
    description:
      "Performed using an advanced dental microscope for better visibility, cleaning, and long-term success, along with a painless injection technique.",
    image: "/services/1.jpg",
  },
  {
    title: "Removal of Broken File from Root Canal",
    description:
      "Advanced retrieval techniques are used to safely remove broken instruments from the root canal.",
    image: "/services/2.webp",
  },
  {
    title: "Re-Root Canal Treatment (Retreatment)",
    description:
      "Specialized treatment to correct previously failed or reinfected root canal cases and help save the tooth from extraction.",
    image: "/services/3.png",
  },
  {
    title: "Iatrogenic Errors in Root Canal Treatment",
    description:
      "Unexpected issues may occur during treatment, but with advanced technology and expertise, they can be corrected and your tooth can still be saved.",
    image: "/services/4.jpg",
  },
];

export default function RootCanalServicesSection() {
  return (
    <section className="py-10 lg:py-10 bg-[#F9FBFC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Our <span className="text-[#2E86C1]">Root Canal</span> Treatment
            Services
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            Advanced root canal treatment using a microscope to remove
            infection, reduce pain, and save your natural tooth, planned
            according to your tooth’s condition.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-5 sm:p-6 lg:p-8">
                {/* Image */}
                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`text-center lg:text-left ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex justify-center lg:justify-start">
                    <a
                      href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#2E86C1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E6FA8] transition"
                    >
                      SCHEDULE A VISIT
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
