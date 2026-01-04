import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-foreground/80 max-w-2xl mx-auto mb-6">
          Interested in safer manual handling training? Get in touch with Manual360.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-12">
          <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <a href="mailto:manual360@example.com" className="text-primary hover:underline">
            manual360@example.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-border focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="border-border focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="border-border focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your training needs..."
              rows={4}
              required
              className="border-border focus:border-primary resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="w-full text-base">
            Request Demo
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
