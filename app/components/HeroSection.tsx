import DateInput from "./DateInput";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 lg:min-h-screen bg-gradient-to-br from-orange-50 via-white to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/main.png"
          alt="Ayurvedic background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Booking Form - Second on mobile, right column on desktop */}
          <div className="lg:pl-6 order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="text-center mb-4 lg:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Book Appointment
                </h2>
                <p className="text-base sm:text-lg lg:text-3xl font-semibold text-gray-800">
                  Consultation at{" "}
                  <span className="text-orange-600 font-bold">Rs. 300/-</span>
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm lg:text-base font-bold text-gray-700 mb-2"
                  >
                    Full Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 lg:py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm lg:text-base font-medium placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm lg:text-base font-bold text-gray-700 mb-2"
                  >
                    Phone Number:
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Number.."
                    className="w-full px-4 py-3 lg:py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm lg:text-base font-medium placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm lg:text-base font-bold text-gray-700 mb-2"
                  >
                    Day of visit:
                  </label>
                  <DateInput
                    id="date"
                    className="w-full px-4 py-3 lg:py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm lg:text-base font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 lg:py-5 rounded-xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 text-lg lg:text-xl"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>

          {/* Left Content - First on mobile, left column on desktop */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:flex lg:flex-col lg:justify-center">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-[1.1] tracking-tight text-center">
                Stop &quot;Managing&quot; Your Back Pain
                <br />
                <span className="text-orange-600 font-black">
                  Start Healing It.
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-3xl xl:text-4xl text-gray-600 leading-relaxed max-w-2xl font-medium text-center mx-auto">
                Experience Kerala&apos;s most trusted Ayurvedic Spine Care. No
                surgery, no heavy sedation.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 lg:w-8 lg:h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-3xl min-w-0 flex items-center leading-tight">
                  Physical Exam by Senior BAMS/MD Doctors
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 lg:w-8 lg:h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-3xl min-w-0 flex items-center leading-tight">
                  Authentic Nadi Pariksha (Pulse Diagnosis)
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 lg:w-8 lg:h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-3xl min-w-0 flex items-center leading-tight">
                  100% Natural Medicines
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 text-center min-w-0 flex-1 sm:flex-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="truncate">Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl text-base sm:text-lg lg:text-xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 text-center min-w-0 flex-1 sm:flex-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
