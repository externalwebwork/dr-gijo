"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "High-magnification Dental Microscopes",
    image: "/images/microscope.png", // replace with actual path
  },
  {
    title: "International Standard Rubber Dam",
    image: "/images/rubber.png", // replace with actual path
  },
  {
    title: "3D Imaging & Digital X-rays",
    image: "/images/3D.png", // replace with actual path
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-8 lg:py-10 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/section-bg.png)" }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E86C1]">
            We Use The Latest Technology In Root Canal Treatment
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
