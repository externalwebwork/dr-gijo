"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const symptoms = [
  {
    title: "Severe, Persistent Tooth Pain",
    description:
      "Continuous throbbing or deep aching pain that may worsen at night or while lying down.",
  },
  {
    title: "Prolonged Sensitivity to Cold or Hot",
    description:
      "Sharp or lingering discomfort that lasts more than 30 seconds after exposure to hot or cold foods.",
  },
  {
    title: "Swelling or Gum Boil",
    description:
      "Tender, swollen gums or a small pimple-like bump near the painful tooth, sometimes with pus discharge.",
  },
  {
    title: "Pain While Chewing or Biting",
    description:
      "Sharp or pressure-related pain when eating or touching the tooth.",
  },
  {
    title: "Tooth Discoloration",
    description:
      "Tooth turning grey, dark yellow, or black—often a sign of nerve damage inside the tooth.",
  },
];

export default function RootCanalSection() {
  return (
    <section id="root-canal" className="py-10 lg:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            When Do You Need a{" "}
            <span className="text-[#2E86C1]">Root Canal?</span>
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg">
            Don’t ignore these warning signs. If you experience
            <span className="font-semibold text-gray-900">
              {" "}two or more{" "}
            </span>
            of these symptoms, your tooth may be infected.Your tooth can still be saved — but every day counts.
          </p>

          {/* Highlight Box */}
          {/* <div className="mt-8 p-6 bg-[#F4F6F7] rounded-xl border-l-4 border-[#2E86C1]">
            <p className="text-gray-700 text-sm sm:text-base">
              Your tooth can still be saved — but every day counts.
            </p>
          </div> */}

          {/* CTA */}
          <div className="mt-8">
            <a
              href="tel:+918111949498"
              className="inline-block bg-[#2E86C1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E6FA8] transition"
            >
              Call for Consultation
            </a>
          </div>

          {/* Supporting image - desktop only */}
          <div className="mt-10 hidden lg:block">
            <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/root-canal.png"
                alt="Painless microscopic root canal treatment at Dental Solutions Thodupuzha"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 400px, (min-width: 1024px) 360px, 100vw"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CHECKLIST */}
        <div className="space-y-8">
          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-6"
            >
              <div className="flex items-start gap-4">
                {/* Blue indicator dot */}
                <div className="w-3 h-3 mt-2 rounded-full bg-[#2E86C1]" />

                <div>
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}