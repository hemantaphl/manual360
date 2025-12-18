import { Play, MousePointerClick, ClipboardCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Play,
      title: "Enter 360° Training Environment",
      description: "Access the immersive warehouse simulation directly from your browser. Navigate through realistic 360-degree scenes designed for manual handling training."
    },
    {
      number: "02",
      icon: MousePointerClick,
      title: "Interact with Safety Hotspots",
      description: "Click on interactive hotspots throughout the environment to learn about proper lifting techniques, hazard identification, and safety protocols."
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Complete Knowledge Quiz & Feedback",
      description: "Test your understanding with integrated assessments. Receive immediate feedback and track your progress towards safety certification."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          How Manual360 Works
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          A simple three-step process to safer workplace practices
        </p>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
