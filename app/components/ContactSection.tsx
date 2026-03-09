"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: ""
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);
      
      // Add access key
      formDataObj.append("access_key", "cf75a2ca-fa5c-415e-bbe4-e002da1a0217");
      
      // Create custom subject with user name
      const firstName = formDataObj.get("firstName") as string;
      const lastName = formDataObj.get("lastName") as string;
      const fullName = `${firstName} ${lastName}`;
      const subject = `${fullName} - Dental Contact Form from Dental Solutions, Thodupuzha`;
      formDataObj.append("subject", subject);
      
      // Add additional form data
      formDataObj.append("dental_needs", formData.message);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      
      const data = await response.json();
      
      if (data.success) {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "contact_form_submit",
            formName: "Contact Section Form",
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            message: formData.message,
          });
        }
        router.push("/success");
        return;
      } else {
        setResult("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
      // Hide result message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
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
                    name="firstName"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
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
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your dental needs..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86C1] focus:border-[#2E86C1] font-medium bg-white text-gray-900 placeholder:text-gray-500"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-[#2E86C1] hover:bg-[#2574a8] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 lg:py-4 rounded-lg font-bold transition-colors text-base lg:text-lg"
                >
                  {isSubmitting ? "Submitting..." : "SCHEDULE A VISIT"}
                </button>

                {/* Result Message */}
                {result && (
                  <div className={`mt-3 p-3 rounded-lg text-sm font-medium text-center ${
                    result.includes("Thank you") 
                      ? "bg-green-50 text-green-800 border border-green-200" 
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}>
                    {result}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
