import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import MarketingPlanSection from "@/components/MarketingPlanSection";
import ClientFocusSection from "@/components/ClientFocusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ServicesSection />
        <TeamSection />
        <MarketingPlanSection />
        <ClientFocusSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
