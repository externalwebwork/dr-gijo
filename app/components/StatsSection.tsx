export default function StatsSection() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "40000+", label: "Happy Patients" },
    { value: "", label: "Panchakarma Specialists", icon: "/CGHS-hospital.png" },
    { value: "", label: "Personalized Treatment Plans", icon: "/NABH.png" },
    { value: "100+", label: "Treatments" },
  ];

  return (
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 md:p-10 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow min-h-[180px] flex flex-col justify-center"
            >
              {stat.value && (
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-600 mb-2 sm:mb-3 md:mb-4">
                  {stat.value}
                </div>
              )}
              {stat.icon && (
                <div className="sm:mb-4 flex justify-center">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-12 h-12 sm:w-20 sm:h-20 md:w-14 md:h-14 object-contain"
                  />
                </div>
              )}
              <div className="text-gray-700 font-bold text-sm sm:text-base md:text-lg leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
