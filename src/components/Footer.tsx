import logo from "@/assets/manual360-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <img 
          src={logo} 
          alt="Manual360" 
          className="h-8"
        />
        <p className="text-sm text-foreground/60">
          © Manual360 – Immersive Safety Training
        </p>
      </div>
    </footer>
  );
};

export default Footer;
