import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F7] text-gray-800 py-10 sm:py-12 overflow-x-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <Image
                src="/logo2.png"
                alt="Dental Solutions Logo"
                width={40}
                height={40}
                className="object-contain w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0"
              />
              <div className="min-w-0">
                <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight block">
                  Dental Solutions
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium -mt-0.5 block">
                  By Dr. Gijo
                </span>
              </div>
            </a>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Advanced painless microscopic root canal treatment in Thodupuzha. Your trusted dental care under Dr. Gijo.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#root-canal"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Root Canal
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
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
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600">
              <li>
                <a
                  href="#treatments"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Dental Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Fillings
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Root Canal
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base"
                >
                  Teeth Whitening
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600">
              <li>
                <a
                  href="tel:+918111949498"
                  className="hover:text-[#2E86C1] transition-colors font-medium text-sm sm:text-base block"
                >
                  +91 8111949498
                </a>
              </li>
              <li className="font-medium text-sm sm:text-base">
                Kuruttukulam Arcade, 1st Floor Above ESSAF Bank, Near Old KSRTC Bus Stand, Kanjiramattom Bypass, Thodupuzha
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600">
          <p className="font-medium text-xs sm:text-sm md:text-base px-2">
            &copy; 2024 Dental Solutions By Dr. Gijo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
