import { Box, Shield, UserCheck, FileCheck, Headset } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Box,
      title: "360° Manual Handling Training",
      description: "Comprehensive training modules covering proper lifting techniques in immersive warehouse environments."
    },
    {
      icon: Shield,
      title: "Warehouse Safety Induction",
      description: "Complete safety orientation for new employees, covering essential protocols and hazard awareness."
    },
    {
      icon: UserCheck,
      title: "Interactive Posture Demonstration",
      description: "Visual guidance on correct body mechanics and ergonomic practices for injury prevention."
    },
    {
      icon: FileCheck,
      title: "Knowledge Assessment & Feedback",
      description: "Integrated quizzes and performance tracking to ensure competency and compliance."
    },
    {
      icon: Headset,
      title: "VR-Ready Training Systems",
      description: "Scalable solutions that can transition seamlessly to full virtual reality experiences."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Our Services
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Comprehensive safety training solutions for modern workplaces
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
