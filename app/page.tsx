import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import OsteoarthritisSection from "./components/OsteoarthritisSection";
import TreatmentProcedureSection from "./components/TreatmentProcedureSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TreatmentsSection from "./components/TreatmentsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import PainReliefSection from "./components/PainReliefSection";
import SpecializedTreatmentsSection from "./components/SpecializedTreatmentsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <PainReliefSection />
      <SpecializedTreatmentsSection />
      {/* <OsteoarthritisSection />
      <TreatmentProcedureSection /> */}
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}