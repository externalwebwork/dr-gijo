"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const symptoms = [
  { title: "Severe Tooth Pain", image: "/small-image/severe-pain.png" },
  { title: "Hot & Cold Sensitivity", image: "/small-image/sensitivity.png" },
  { title: "Swelling / Gum Boil", image: "/small-image/gum.png" },
  { title: "Pain While Chewing", image: "/small-image/pain.png" },
  { title: "Tooth Discoloration", image: "/small-image/tooth.png" },
];

export default function RootCanalSection() {
  return (
    <section id="root-canal" className="py-7 bg-[#EAF4FB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            When Do You Need a{" "}
            <span className="text-[#2E86C1]">Root Canal?</span>
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Don’t ignore these warning signs. If you experience two or more of
            these symptoms, your tooth may be infected.
          </p>
        </motion.div>

        {/* SYMPTOMS GRID 1111111*/}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group bg-white rounded-2xl px-6 pt-2 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 
  ${index === symptoms.length - 1 ? "col-span-2 sm:col-span-1" : ""}
`}
            >
              <div className="w-30 h-30 lg:w-40 lg:h-40 mx-auto relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="mt-1 text-sm sm:text-base font-semibold text-gray-900">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2E86C1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E6FA8] transition shadow-md"
          >
            SCHEDULE A VISIT
          </a>
        </div>
      </div>
    </section>
  );
}
