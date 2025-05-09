
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ToasterProvider } from "@/components/ToasterProvider";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToasterProvider />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
