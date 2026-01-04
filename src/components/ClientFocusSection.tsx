import { Building2, ShieldCheck, Target, CheckCircle } from "lucide-react";

const ClientFocusSection = () => {
  const focusPoints = [
    {
      icon: Building2,
      title: "Logistics & Warehouse",
      description: "Tailored for distribution centres, warehouses, and logistics operations"
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      description: "Aligned with workplace health and safety regulations and best practices"
    },
    {
      icon: Target,
      title: "Employee Engagement",
      description: "Interactive training that improves retention and practical application"
    }
  ];

  const benefits = [
    "Supports safety compliance and induction training",
    "Improves engagement through immersive learning",
    "Helps reduce manual handling injury risk"
  ];

  return (
    <section id="clients" className="py-24 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Client Focus
        </h2>
        <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-8">
          Developed for logistics and warehouse clients such as Joint Venture.
        </p>
        
        {/* Benefits List */}
        <div className="flex flex-col items-center gap-3 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusPoints.map((point, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-background rounded-lg border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary mb-4">
                <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-foreground/80 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFocusSection;
