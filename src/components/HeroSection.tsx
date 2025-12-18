import logo from "@/assets/manual360-logo.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
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
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="text-base px-8 py-6">
            <a href="http://127.0.0.1:5500/index.html" target="_blank" rel="noopener noreferrer">
                View Training Prototype
            </a>
        </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
