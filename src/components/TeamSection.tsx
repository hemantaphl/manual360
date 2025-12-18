import { User } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Hemanta Phuyal",
      role: "Project Manager",
      skills: "Project planning, leadership, client coordination, documentation management"
    },
    {
      name: "Samyog Timilsina",
      role: "Deputy Project Manager",
      skills: "Progress tracking, meeting documentation, risk management, communication"
    },
    {
      name: "Utsab Dhakal",
      role: "Lead Developer / 360° Prototype Engineer",
      skills: "A-Frame, HTML, CSS, JavaScript, 360° environments, interactive hotspots"
    },
    {
      name: "Mission Achhami",
      role: "UI/UX & Interaction Designer",
      skills: "Wireframing, user experience design, interaction flow, visual design"
    },
    {
      name: "Aadarsha Kumar Sharma Nepal",
      role: "Content & QA Lead",
      skills: "Safety research, manual handling guidelines, quiz design, quality assurance"
    }
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Our Team
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Meet the dedicated professionals behind Manual360
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <User className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
