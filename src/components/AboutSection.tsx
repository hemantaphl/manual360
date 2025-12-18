import { Users, Monitor, Headphones } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Student-Led",
      description: "A consultancy driven by innovation and academic excellence"
    },
    {
      icon: Monitor,
      title: "Browser-Based",
      description: "No downloads or special hardware required"
    },
    {
      icon: Headphones,
      title: "VR-Convertible",
      description: "Ready to scale into full virtual reality experiences"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
          About Manual360
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Manual360 is a student-led consultancy specialising in 360° warehouse safety training. 
          Our solutions are designed for logistics and warehouse environments, offering browser-based 
          and VR-convertible experiences with zero hardware requirements.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary mb-4">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
