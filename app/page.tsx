import Image from "next/image";
import DateInput from "./components/DateInput";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] isolate bg-white border-b border-gray-100 shadow-sm"
        style={{ transform: "translateZ(0)" }}
      >
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
                href="#about"
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
              >
                About
              </a>
              <a
                href="#treatments"
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
              >
                Treatments
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base"
              >
                Testimonials
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
                href="tel:+919876543210"
                className="text-gray-600 hover:text-orange-600 font-semibold text-base transition-colors"
              >
                +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl text-base font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu */}
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section - Professional Desktop Layout */}
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
                <h1 className="text-4xl sm:text-5xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Stop &quot;Managing&quot; Your Back Pain
                  <br />
                  <span className="text-orange-600 font-black">
                    Start Healing It.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-3xl xl:text-4xl text-gray-600 leading-relaxed max-w-2xl font-medium">
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

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">
              Trusted by Thousands of Patients
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-1">
              Our commitment to authentic Ayurvedic healing has made us
              Kerala&apos;s preferred spine care destination
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "40,000+", label: "Patients Treated" },
              { value: "95%", label: "Success Rate" },
              { value: "100+", label: "Ayurvedic Treatments" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-600 mb-1 sm:mb-2 md:mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Specialized Treatments</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
              Authentic Ayurvedic treatments tailored to your specific condition for lasting relief
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Spine Care",
                description: "Advanced Ayurvedic treatments for spinal disorders, slipped discs, and chronic back pain",
                icon: "🦴",
                features: ["Panchakarma Therapy", "Herbal Medicines", "Lifestyle Guidance"]
              },
              {
                title: "Joint Pain Relief",
                description: "Natural solutions for arthritis, joint inflammation, and mobility issues",
                icon: "🦵",
                features: ["Abhyanga Massage", "Janu Basti", "Internal Medicines"]
              },
              {
                title: "Neck & Shoulder",
                description: "Targeted treatments for cervical spondylosis, frozen shoulder, and posture issues",
                icon: "💆‍♂️",
                features: ["Greeva Basti", "Nasya Therapy", "Yoga Therapy"]
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-6">{treatment.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-lg">{treatment.description}</p>
                <ul className="space-y-3">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-semibold">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      about
      <section id="about" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose AyurSpine for Your Healing Journey?
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">25+ Years of Ayurvedic Excellence</h3>
                  <p className="text-gray-600 font-medium text-lg">
                    Led by senior BAMS/MD physicians with decades of experience in treating complex spine and joint conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Authentic Kerala Ayurveda</h3>
                  <p className="text-gray-600 font-medium text-lg">
                    We follow traditional Ayurvedic principles combined with modern diagnostic techniques for accurate treatment.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalized Treatment Plans</h3>
                  <p className="text-gray-600 font-medium text-lg">
                    Each patient receives customized care based on their unique body constitution and specific condition.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-orange-100">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🩺</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Expert Diagnosis</h4>
                    <p className="text-gray-600 font-medium text-lg">Nadi Pariksha and comprehensive physical examination</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Natural Healing</h4>
                    <p className="text-gray-600 font-medium text-lg">100% herbal medicines with no side effects</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Lasting Results</h4>
                    <p className="text-gray-600 font-medium text-lg">Focus on root cause treatment, not just symptoms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      testimonial
      <section id="testimonials" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Hear from patients who found relief through our authentic Ayurvedic treatments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Ramesh Kumar",
                condition: "Chronic Back Pain",
                content: "After 10 years of suffering, AyurSpine's treatment gave me complete relief. No surgery, no side effects - just natural healing.",
                rating: 5
              },
              {
                name: "Priya Nair",
                condition: "Cervical Spondylosis",
                content: "The Panchakarma therapy and herbal medicines worked wonders. I can work and live normally again. Thank you AyurSpine!",
                rating: 5
              },
              {
                name: "Michael Thomas",
                condition: "Joint Pain",
                content: "From barely walking to jogging again! The personalized treatment plan changed my life completely.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{testimonial.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      contact
      <section id="contact" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Start Your Healing Journey Today</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Book your consultation and take first step towards a pain-free life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Phone</div>
                      <div className="text-gray-600 font-medium">+91 98765 43210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Email</div>
                      <div className="text-gray-600 font-medium">info@ayurspine.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Location</div>
                      <div className="text-gray-600 font-medium">Kottayam, Kerala, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Quick Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-medium"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-medium"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-medium"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-medium">
                    <option>Select Treatment</option>
                    <option>Spine Care</option>
                    <option>Back Pain</option>
                    <option>Neck Pain</option>
                    <option>Joint Pain</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your condition..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-medium"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 lg:py-4 rounded-lg font-bold transition-colors text-base lg:text-lg"
                  >
                    Book Appointment - ₹300
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
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
    </div>
  );
}
