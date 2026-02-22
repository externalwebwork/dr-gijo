"use client";

export default function OsteoarthritisSection() {
  const symptoms = [
    {
      title: "Persistent Low Back Pain",
      description:
        "Chronic aching or sharp pain in the lower back region that does not improve with rest.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v20M5 7h14M5 17h14" />
        </svg>
      ),
    },
    {
      title: "Pain Radiating to Legs",
      description:
        "Pain spreading from the lower back into one or both legs, often worsening with movement.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12h16M12 4v16" />
        </svg>
      ),
    },
    {
      title: "Morning Stiffness",
      description:
        "Difficulty moving after waking up that gradually improves during the day.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Tingling or Numbness",
      description:
        "Unusual sensations in the legs, feet, or lower back caused by nerve compression.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Muscle Weakness",
      description:
        "Reduced strength in the legs causing difficulty walking or standing for long periods.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12h16M6 6l12 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Is Your Back Pain Related to
            <span className="block text-orange-600 mt-2">Osteoarthritis?</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Osteoarthritis in the spine can cause chronic pain, stiffness, and
            nerve discomfort. Recognizing symptoms early helps you begin
            effective natural treatment.
          </p>
        </div>

        {/* Spine Info */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 lg:text-[2.5rem]">
              Understanding Your Spine Health
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg lg:text-[1.5rem]">
              The lumbar spine supports most of your body weight. Over time,
              cartilage degeneration can cause bones to rub together, leading to
              inflammation, nerve pressure, and mobility problems. Proper
              diagnosis and holistic treatment can significantly improve quality
              of life.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/spine.png"
              alt="Spine Pain Illustration"
              className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        {/* Symptoms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {symptoms.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg"
            >

              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-orange-600 rounded-3xl px-10 py-8  text-center text-white">
          <h3 className="text-2xl lg:text-4xl font-semibold mb-4">
            Start Your Natural Healing Journey Today
          </h3>

          <p className="text-orange-100 max-w-2xl mx-auto mb-2">
            Our Ayurvedic specialists provide personalized treatments that
            target the root cause of osteoarthritis pain — without surgery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              Call Now
            </a>

            <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
