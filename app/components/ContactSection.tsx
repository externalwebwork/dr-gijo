export default function ContactSection() {
  return (
    <section id="contact" className="py-10 lg:py-10 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Start Your Healing Journey Today</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Book your consultation and take first step towards a pain-free life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 min-w-0">
          <div className="min-w-0">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg min-w-0 overflow-hidden">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <div className="font-bold text-gray-900">Phone</div>
                    <a href="tel:+919497884584" className="text-gray-600 font-medium hover:text-orange-600 transition-colors block break-all">+91 9497884584</a>
                    <a href="tel:+917561820584" className="text-gray-600 font-medium hover:text-orange-600 transition-colors block break-all">+91 7561820584</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <div className="font-bold text-gray-900">Email</div>
                    <a href="mailto:kooplicatayurveda@gmail.com" className="text-gray-600 font-medium hover:text-orange-600 transition-colors break-all">kooplicatayurveda@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <div className="font-bold text-gray-900">Location</div>
                    <div className="text-gray-600 font-medium break-words">Perumbaikad PO, Samkranti, Kottayam, Kerala</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="min-w-0">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg min-w-0 overflow-hidden">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Quick Appointment</h3>
              <form className="space-y-4 min-w-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
