import { Building2, ShieldCheck, Target } from "lucide-react";

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

  return (
    <section id="clients" className="py-24 px-6 bg-secondary">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Client Focus
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Developed for logistics and warehouse clients such as Joint Venture. 
          Our training solutions emphasise safety compliance and employee engagement.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {focusPoints.map((point, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-background rounded-lg border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFocusSection;
