import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src="/headerlogo2.png"
                  alt="Kooplicat Logo"
                  width={40}
                  height={40}
                  className="object-contain w-9 h-9 sm:w-10 sm:h-10"
                />
              </div>
              <div className="min-w-0">
                <span className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight block truncate">
                  Kooplicat
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium -mt-0.5 block truncate">
                  Ayurveda Hospital
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#home"
              className="text-gray-900 hover:text-orange-600 font-semibold transition-colors text-base"
            >
              Home
            </a>
            <a
              href="#treatments"
              className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
            >
              Treatment
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
            >
              Why Choose Us
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+919497884584"
              className="text-gray-600 hover:text-orange-600 font-semibold text-base transition-colors"
            >
              +91 9497884584
            </a>
            <a
              href="https://wa.me/919497884584?text=Hello%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20spine%20consultation%20at%20your%20Kottayam%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#652576] hover:bg-[#4f1f5d] text-white px-8 py-3 rounded-xl text-base font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
