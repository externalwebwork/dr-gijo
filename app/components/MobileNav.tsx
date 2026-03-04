"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#treatments", label: "Services" },
    { href: "#stats", label: "Why Choose Us" },
    { href: "#root-canal", label: "Root Canal" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  const menuContent =
    mounted &&
    createPortal(
      <>
        {/* Backdrop - below panel so panel is clickable */}
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={handleLinkClick}
          aria-hidden="true"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
        {/* Dropdown panel - below nav bar (top-16 = 4rem, sm:top-20 = 5rem), above backdrop */}
        <div
          className="fixed left-0 right-0 w-full top-16 sm:top-20 bg-white border-b border-gray-200 shadow-xl z-[9999]"
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 px-4 text-gray-800 hover:text-[#2E86C1] hover:bg-blue-50 rounded-lg font-medium text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2 space-y-2 border-t border-gray-200 mt-2">
              <a
                href="tel:+918111949498"
                onClick={handleLinkClick}
                className="flex items-center gap-2 py-3 px-4 text-gray-800 font-semibold"
              >
                <svg className="w-5 h-5 text-[#2E86C1] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8111949498
              </a>
              <a
                href="https://wa.me/918111949498?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20visit%20at%20Dental%20Solutions%2C%20Thodupuzha."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full bg-[#2E86C1] hover:bg-[#2574a8] text-white py-3 px-4 rounded-xl font-bold text-base transition-colors"
              >
                SCHEDULE A VISIT
              </a>
            </div>
          </div>
        </div>
      </>,
      document.body
    );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && menuContent}
    </>
  );
}
