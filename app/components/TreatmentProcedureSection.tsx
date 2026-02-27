"use client";

const steps = [
  {
    number: 1,
    title: "Consultation & Diagnosis",
    description:
      "We evaluate your symptoms, history, and lifestyle. Our doctors perform a detailed physical exam to assess your condition's severity.",
  },
  {
    number: 2,
    title: "Dosha Assessment",
    description:
      "We perform traditional Nadi Pariksha (pulse diagnosis) to understand your body constitution and identify Vata imbalance.",
  },
  {
    number: 3,
    title: "Customized Treatment Plan",
    description:
      "We design a personalized plan that includes targeted therapies, herbal medicines, and dietary guidance.",
  },
  {
    number: 4,
    title: "Therapy Sessions",
    description:
      "You undergo regular therapy sessions conducted by trained therapists. Treatment duration usually ranges from 2–4 weeks based on severity and response.",
  },
  {
    number: 5,
    title: "Follow-up & Lifestyle Advice",
    description:
      "We monitor your progress and provide ongoing advice on diet, exercise, yoga, and lifestyle for long-term support.",
  },
];

export default function TreatmentProcedureSection() {
  return (
    <section
      id="treatment-procedure"
      className="py-8  lg:py-8 relative overflow-hidden"
    >
      {/* Subtle organic background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23ea580c' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-white to-stone-50/80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - centered */}
        <div className="max-w-2xl mx-auto text-center mb-5">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
            Our Ayurvedic Treatment Procedure
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We don&apos;t just provide treatments; we follow a precise medical
            protocol to ensure your spine recovers its strength and flexibility.
          </p>
        </div>

        {/* Steps - zigzag timeline layout */}
        <div className="relative">
          {/* Vertical timeline line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 -translate-x-1/2 rounded-full" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 lg:gap-8 py-6 lg:py-10 items-center"
                >
                  {/* Content - left or right column on desktop */}
                  <div
                    className={`order-2 lg:order-none lg:flex ${
                      isLeft
                        ? "lg:col-start-1 lg:col-end-2 lg:justify-end lg:pr-8"
                        : "lg:col-start-2 lg:col-end-3 lg:justify-start lg:pl-8"
                    }`}
                  >
                    <div
                      className={`rounded-2xl p-6 sm:p-8 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-100/30 transition-all duration-300 hover:border-orange-200/60 max-w-[420px] mx-auto ${
                        isLeft ? "lg:mx-0 lg:ml-auto" : "lg:mx-0 lg:mr-auto"
                      }`}
                    >
                      <span className="inline-block text-orange-600 font-bold text-sm uppercase tracking-wider mb-2">
                        Step {step.number}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step number - absolutely centered on desktop so it always sits on timeline */}
                  <div className="order-1 lg:order-none flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 ring-4 ring-white">
                      {step.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
