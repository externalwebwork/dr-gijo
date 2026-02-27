'use client';

export default function PainReliefSection() {
  return (
    <section id="pain-relief" className="py-8 lg:py-14 bg-[#f4e7fa] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-center">
                Is Your Back Pain Making Your Life 
                <span className="block text-orange-600 font-black mt-2">"Limited"?</span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                Tired of temporary injections and "strong" tablets that only hide the problem?
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 sm:p-6 rounded-r-xl">
                <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold">
                  Our Ayurvedic Specialist Treatments in Kottayam target the root cause of your pain—restoring your spine and your freedom without surgery.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-base sm:text-lg">No Surgery Required</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-base sm:text-lg">Treats Root Cause, Not Symptoms</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-base sm:text-lg">100% Natural Ayurvedic Approach</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-3 bg-[#652576] hover:bg-[#4f1f5d] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg lg:text-xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
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
                <span>Get Relief Today - Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/back-pain.png"
                alt="Ayurvedic Back Pain Treatment"
                className="w-full h-auto object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  // Fallback to a placeholder if image doesn't exist
                  const target = e.currentTarget;
                  target.src = "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23f97316' width='600' height='400'/%3E%3Ctext fill='white' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EAyurvedic Treatment%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
