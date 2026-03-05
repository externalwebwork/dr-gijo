import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] w-full max-w-[100vw] overflow-hidden bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      style={{ position: 'fixed' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src="/logo2.png"
                  alt="Smile Dental Logo"
                  width={40}
                  height={40}
                  className="object-contain w-9 h-9 sm:w-10 sm:h-10"
                />
              </div>
              <div className="min-w-0">
                <span className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight block truncate">
                  Dental Solutions
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium -mt-0.5 block truncate">
                  By Dr. Gijo
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#home"
              className="text-gray-900 hover:text-[#2E86C1] font-semibold transition-colors text-base"
            >
              Home
            </a>
            <a
              href="#treatments"
              className="text-gray-700 hover:text-[#2E86C1] font-medium transition-colors text-base"
            >
              Treatment
            </a>
            <a
              href="#technology"
              className="text-gray-700 hover:text-[#2E86C1] font-medium transition-colors text-base"
            >
              Our Technology
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-[#2E86C1] font-medium transition-colors text-base"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#2E86C1] font-medium transition-colors text-base"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+918111949498"
              className="text-gray-900 hover:text-[#2E86C1] font-semibold text-base transition-colors"
            >
              +91 8111949498
            </a>
            <a
              href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E86C1] bg-[#F4F6F7] px-8 py-3 rounded-xl text-base font-bold transition-all shadow-lg -translate-y-0.5"
            >
              SCHEDULE A VISIT
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
