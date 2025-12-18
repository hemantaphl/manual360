import { Mail } from "lucide-react";
import logo from "@/assets/manual360-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Interested in safer manual handling training? Get in touch with Manual360.
          </p>
          <a 
            href="mailto:contact@manual360.com" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            contact@manual360.com
          </a>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img 
            src={logo} 
            alt="Manual360" 
            className="h-10"
          />
          <p className="text-sm text-muted-foreground">
            © Manual360 – Immersive Safety Training
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
