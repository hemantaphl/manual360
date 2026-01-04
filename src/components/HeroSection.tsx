import logo from "@/assets/manual360-logo.png";
import { Button } from "@/components/ui/button";
import { Globe, Monitor, Headphones } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    { icon: Globe, text: "Browser-based delivery" },
    { icon: Monitor, text: "VR-ready conversion" },
    { icon: Headphones, text: "Zero hardware requirement" }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
      <div className="container max-w-4xl text-center">
        <img 
          src={logo} 
          alt="Manual360 Logo" 
          className="h-20 md:h-28 mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Train Safer. Lift Smarter.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Manual360 delivers immersive 360-degree and VR-ready training solutions focused on manual handling and lifting safety.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="text-base px-8 py-6">
            <a href="https://manual360.hemantaphuyal.com/" target="_blank" rel="noopener noreferrer">
              View Training Prototype
            </a>
          </Button>
          <a 
            href="#contact" 
            className="text-primary font-medium hover:underline transition-colors"
          >
            Request a Demo →
          </a>
        </div>

        {/* Highlight Points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
