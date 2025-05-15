
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import ComparisonSection from "@/components/ComparisonSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <VisionSection />
        <FeatureSection />
        <HowItWorks />
        <ComparisonSection />
        <EarlyAccessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
