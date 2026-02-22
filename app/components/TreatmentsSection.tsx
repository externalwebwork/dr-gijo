export default function TreatmentsSection() {
  const treatments = [
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
  ];

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Specialized Treatments</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            Authentic Ayurvedic treatments tailored to your specific condition for lasting relief
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
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
  );
}
