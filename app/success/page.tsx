"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_submission_success",
        page: "/success",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      <div className="pt-24 sm:pt-28 flex flex-col items-center justify-center px-4 py-12 min-h-[calc(100vh-6rem)]">
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center justify-center gap-3 group">
          <Image
            src="/logo2.png"
            alt="Dental Solutions Logo"
            width={64}
            height={64}
            className="object-contain w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform"
          />
          <div className="text-left">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight block">
              Dental Solutions
            </span>
            <span className="text-sm text-gray-600 font-medium -mt-0.5 block">
              By Dr. Gijo
            </span>
          </div>
        </Link>

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Your appointment request has been submitted successfully. We&apos;ll
            contact you soon to confirm.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#2E86C1] hover:bg-[#2574a8] text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      </div>
    </div>
  );
}
