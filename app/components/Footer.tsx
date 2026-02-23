export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">AyurSpine</span>
            </div>
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
                  href="#about"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  About
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
                  href="#testimonials"
                  className="hover:text-white transition-colors font-medium text-sm sm:text-base"
                >
                  Testimonials
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
                <span className="hover:text-white transition-colors cursor-pointer font-medium text-sm sm:text-base">
                  Spine Care
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium text-sm sm:text-base">
                  Back Pain
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium text-sm sm:text-base">
                  Joint Pain
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium text-sm sm:text-base">
                  Panchakarma
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400">
              <li className="font-medium text-sm sm:text-base">
                +91 98765 43210
              </li>
              <li className="font-medium text-sm sm:text-base break-all">
                info@ayurspine.com
              </li>
              <li className="font-medium text-sm sm:text-base">
                Kottayam, Kerala
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="font-medium text-xs sm:text-sm md:text-base px-2">
            &copy; 2024 AyurSpine. All rights reserved. | Kerala&apos;s
            Premier Ayurvedic Spine Care Center
          </p>
        </div>
      </div>
    </footer>
  );
}
