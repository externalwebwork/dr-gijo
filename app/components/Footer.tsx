import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center space-x-3 mb-4">
              <Image
                src="/headerlogo2.png"
                alt="Kooplicat Ayurveda"
                width={40}
                height={40}
                className="object-contain w-10 h-10 flex-shrink-0"
              />
              <div className="min-w-0">
                <span className="text-lg sm:text-xl font-bold tracking-tight block">
                  Kooplicat
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium -mt-0.5 block">
                  Ayurveda Hospital
                </span>
              </div>
            </a>
            <p className="text-gray-400 font-medium text-sm sm:text-base">
              Kerala&apos;s trusted Ayurvedic spine care center with 25+ years
              of excellence in natural healing.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#pain-relief"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Back Pain Relief
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#osteoarthritis"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Osteoarthritis
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Treatments
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="#treatments"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Spine Care
                </a>
              </li>
              <li>
                <a
                  href="#pain-relief"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Back Pain
                </a>
              </li>
              <li>
                <a
                  href="#osteoarthritis"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Joint Pain
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Panchakarma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+919497884584"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base block"
                >
                  +91 9497884584
                </a>
              </li>
              <li>
                <a
                  href="tel:+917561820584"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base block"
                >
                  +91 7561820584
                </a>
              </li>
              <li>
                <a
                  href="mailto:kooplicatayurveda@gmail.com"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base break-all"
                >
                  kooplicatayurveda@gmail.com
                </a>
              </li>
              <li className="font-medium text-sm sm:text-base">
                Perumbaikad PO, Samkranti, Kottayam, Kerala
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="font-medium text-xs sm:text-sm md:text-base px-2">
            &copy; 2024 Kooplicat Ayurveda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
