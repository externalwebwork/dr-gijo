export default function AboutSection() {
  return (
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
  );
}
