import { Globe, Linkedin, Facebook, Users, MessageSquare, GraduationCap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MarketingPlanSection = () => {
  const strategies = [
    {
      icon: Globe,
      title: "Professional Online Presence",
      points: [
        "Maintain a clean website showcasing the training prototype",
        "Add case study content and a Request Demo form",
        "Consistent branding to build trust"
      ]
    },
    {
      icon: Linkedin,
      title: "LinkedIn Promotion",
      points: [
        "Post short insights on immersive safety training benefits",
        "Share demo visuals and prototype progress",
        "Connect with safety organisations and logistics professionals"
      ]
    },
    {
      icon: Facebook,
      title: "Facebook Engagement",
      points: [
        "Share demo previews in training/community groups",
        "Provide development updates and pilot invitations"
      ]
    },
    {
      icon: Users,
      title: "Networking & Outreach",
      points: [
        "Connect with local warehouses, logistics firms, and trainers",
        "Offer free pilot demonstrations of the prototype",
        "Use feedback to refine the system (win-win)"
      ]
    },
    {
      icon: MessageSquare,
      title: "Word of Mouth & Testimonials",
      points: [
        "Collect testimonials from pilot users and university stakeholders",
        "Display testimonials on the website and outreach materials"
      ]
    },
    {
      icon: GraduationCap,
      title: "Academic & Community Engagement",
      points: [
        "Present the prototype at showcases and exhibitions",
        "Share research-aligned safety insights to position Manual360 as credible"
      ]
    }
  ];

  const summaryData = [
    { strategy: "Website presence", cost: "£0", benefit: "Professional online identity" },
    { strategy: "LinkedIn updates", cost: "£0", benefit: "Attracts industry professionals" },
    { strategy: "Outreach to warehouses", cost: "£0", benefit: "Real potential clients & feedback" },
    { strategy: "Free demo offers", cost: "£0", benefit: "Demonstrates value effectively" },
    { strategy: "Testimonials", cost: "£0", benefit: "Builds trust & improves adoption" },
    { strategy: "Academic engagement", cost: "£0", benefit: "Establishes authority" }
  ];

  return (
    <section id="marketing-plan" className="py-24 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Zero Budget Marketing Plan
        </h2>
        <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-16">
          Strategic approaches to promote Manual360 without financial investment
        </p>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary mb-4">
                <strategy.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{strategy.title}</h3>
              <ul className="space-y-2">
                {strategy.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marketing Summary Table */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Marketing Plan Summary
          </h3>
          <div className="border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="font-semibold text-foreground bg-background">Strategy</TableHead>
                  <TableHead className="font-semibold text-foreground bg-background">Cost</TableHead>
                  <TableHead className="font-semibold text-foreground bg-background">Benefit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {summaryData.map((row, index) => (
                  <TableRow key={index} className="border-b border-border last:border-b-0">
                    <TableCell className="font-medium">{row.strategy}</TableCell>
                    <TableCell className="text-primary font-semibold">{row.cost}</TableCell>
                    <TableCell>{row.benefit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPlanSection;
