// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const cases = [
//   {
//     before: "/transformations/before1.jpg",
//     after: "/transformations/after1.jpg",
//   },
//   {
//     before: "/transformations/before2.jpg",
//     after: "/transformations/after2.jpg",
//   },
//   {
//     before: "/transformations/before3.jpg",
//     after: "/transformations/after3.jpg",
//   },
// ];

// export default function PatientTransformationsSection() {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="py-20 lg:py-28 bg-[#F9FBFC]">
//       <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

//         {/* Header */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
//           Patient <span className="text-[#2E86C1]">Transformations</span>
//         </h2>

//         <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
//           See the life-changing results our patients have achieved with our expert dental care.
//         </p>

//         {/* Carousel */}
//         <div className="mt-14 relative">

//           {/* Image Container */}
//           <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md bg-white">

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="absolute inset-0 grid grid-cols-2"
//               >
//                 {/* BEFORE */}
//                 <div className="relative">
//                   <Image
//                     src={cases[index].before}
//                     alt="Before treatment"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-black/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
//                     Before
//                   </div>
//                 </div>

//                 {/* AFTER */}
//                 <div className="relative">
//                   <Image
//                     src={cases[index].after}
//                     alt="After treatment"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-[#2E86C1] text-white text-xs sm:text-sm px-3 py-1 rounded-full">
//                     After
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             ‹
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             ›
//           </button>
//         </div>

//         {/* CTA */}
//         <div className="mt-12">
//           <a
//             href="tel:+919497884584"
//             className="inline-block bg-[#2E86C1] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1E6FA8] transition shadow-sm"
//           >
//             Book Your Consultation
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const transformations = [
  "/transformation/1.png",
  "/transformation/2.png",
  "/transformation/3.png",
];

export default function PatientTransformationsSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  return (
    <section className="py-10 lg:py-10 bg-[#EAF4FB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Patient <span className="text-[#2E86C1]">Transformations</span>
        </h2>

        <p className=" text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          See the life-changing results our patients have achieved with our
          expert dental care.
        </p>

        {/* Slider - container uses 16:9 ratio; use 16:9 images for best fit (e.g. 1920×1080 desktop, 1080×608 mobile) */}
        <div className="relative mt-5">
          <div className="relative w-full aspect-video max-h-[500px] rounded-3xl overflow-hidden shadow-md bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={transformations[index]}
                  alt="Dental transformation"
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1152px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[#2E86C1] scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2E86C1] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1E6FA8] transition shadow-sm"
          >
            SCHEDULE A VISIT
          </a>
        </div>
      </div>
    </section>
  );
}
