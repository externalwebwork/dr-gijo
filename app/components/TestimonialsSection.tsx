export default function TestimonialsSection() {
  const testimonials = [
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
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Hear from patients who found relief through our authentic Ayurvedic treatments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
}
