import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import TreatmentsSection from "./components/TreatmentsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
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
      <TreatmentsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}