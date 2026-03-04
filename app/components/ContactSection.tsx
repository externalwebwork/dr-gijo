"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello, I would like to book a dental appointment at your clinic.

Details:
• Name: ${formData.firstName} ${formData.lastName}
• Phone: ${formData.phone}
• Dental Needs: ${formData.message}

Please let me know the next steps for booking.`;
    
    const whatsappUrl = `https://wa.me/918111949498?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, placeholder } = e.target;
    
    // Map the form field names to state properties
    let fieldName;
    if (id === 'firstName') fieldName = 'firstName';
    else if (id === 'lastName') fieldName = 'lastName';
    else if (id === 'phone') fieldName = 'phone';
    else if (id === 'message') fieldName = 'message';
    else fieldName = placeholder;
    
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };
  return (
    <section id="contact" className="py-10 lg:py-10 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2E86C1] mb-4">Book Your Appointment Today</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Take the first step towards a healthier, brighter smile
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 min-w-0">
          <div className="min-w-0">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 min-w-0 overflow-hidden">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2E86C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <div className="font-bold text-gray-900">Phone</div>
                    <a href="tel:+918111949498" className="text-gray-600 font-medium hover:text-[#2E86C1] transition-colors block break-all">+91 8111949498</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2E86C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <div className="font-bold text-gray-900">Location</div>
                    <a
                      href="https://www.google.com/maps?q=10.911744,75.9136256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 font-medium hover:text-[#2E86C1] transition-colors block break-words"
                    >
                      Kuruttukulam Arcade, 1st Floor Above ESSAF Bank, Near Old KSRTC Bus Stand, Kanjiramattom Bypass, Thodupuzha
                    </a>
                    <a
                      href="https://www.google.com/maps?q=10.911744,75.9136256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-[#2E86C1] font-semibold text-sm hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="min-w-0">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 min-w-0 overflow-hidden">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Quick Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-4 min-w-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  id="message"
                  placeholder="Tell us about your dental needs..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-[#2E86C1] hover:bg-[#2574a8] text-white py-3 lg:py-4 rounded-lg font-bold transition-colors text-base lg:text-lg"
                >
                  SCHEDULE A VISIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
