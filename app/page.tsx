import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center">
                  <Image
                    src="/headerlogo2.png"
                    alt="Kooplicat Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight block">Kooplicat</span>
                  <span className="text-sm text-gray-600 font-medium -mt-1 block">Ayurveda Hospital</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-gray-900 hover:text-orange-600 font-semibold transition-colors text-base">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base">
                About
              </a>
              <a href="#treatments" className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base">
                Treatments
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 font-medium transition-colors text-base">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:+919876543210" className="text-gray-600 hover:text-orange-600 font-semibold text-base transition-colors">
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
          </div>
        </div>
      </nav>

      {/* Hero Section - Professional Desktop Layout */}
      <section id="home" className="pt-20 bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Heal Your Spine.
                  <br />
                  <span className="text-orange-600 font-black">Transform Your Life.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                  Experience authentic Ayurvedic spine care with our expert BAMS/MD doctors. 
                  No surgery, no side effects - just natural healing.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h3>
                    <p className="text-gray-600 font-medium text-lg">Senior BAMS/MD physicians with 25+ years experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Treatments</h3>
                    <p className="text-gray-600 font-medium text-lg">Traditional Nadi Pariksha and 100% natural medicines</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">40,000+ Happy Patients</h3>
                    <p className="text-gray-600 font-medium text-lg">Proven results with personalized treatment plans</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#appointment"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  Book Consultation - ₹300
                </a>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-lg text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Content - Booking Form */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Book Your Consultation</h2>
                  <p className="text-gray-600 font-medium text-lg">Get started on your healing journey today</p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-base font-medium"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-base font-bold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-base font-medium"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="treatment" className="block text-base font-bold text-gray-700 mb-3">
                      Treatment Type
                    </label>
                    <select
                      id="treatment"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-base font-medium"
                    >
                      <option value="">Select treatment type</option>
                      <option value="spine">Spine Care</option>
                      <option value="back">Back Pain</option>
                      <option value="neck">Neck Pain</option>
                      <option value="joint">Joint Pain</option>
                      <option value="general">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-base font-bold text-gray-700 mb-3">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-base font-medium"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 text-lg"
                  >
                    Check Availability
                  </button>
                  
                  <div className="text-center text-base text-gray-500 pt-2">
                    <p className="font-semibold">Consultation Fee: ₹300</p>
                    <p className="mt-2">We'll call you back to confirm</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Thousands of Patients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Our commitment to authentic Ayurvedic healing has made us Kerala's preferred spine care destination
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "40,000+", label: "Patients Treated" },
              { value: "95%", label: "Success Rate" },
              { value: "100+", label: "Ayurvedic Treatments" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-5xl font-black text-orange-600 mb-3">{stat.value}</div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
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

      {/* About Section */}
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

      {/* Testimonials Section */}
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

      {/* Contact Section */}
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <span className="text-xl font-bold">AyurSpine</span>
              </div>
              <p className="text-gray-400 font-medium">
                Kerala's trusted Ayurvedic spine care center with 25+ years of excellence in natural healing.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors font-medium">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors font-medium">About</a></li>
                <li><a href="#treatments" className="hover:text-white transition-colors font-medium">Treatments</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors font-medium">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Treatments</h4>
              <ul className="space-y-2 text-gray-400">
                <li><span className="hover:text-white transition-colors cursor-pointer font-medium">Spine Care</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer font-medium">Back Pain</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer font-medium">Joint Pain</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer font-medium">Panchakarma</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="font-medium">+91 98765 43210</li>
                <li className="font-medium">info@ayurspine.com</li>
                <li className="font-medium">Kottayam, Kerala</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-medium">&copy; 2024 AyurSpine. All rights reserved. | Kerala's Premier Ayurvedic Spine Care Center</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
