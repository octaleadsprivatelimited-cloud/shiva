import { useState } from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram, Phone, Mail, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const footerLinks = {
  services: [
    { label: "Crop Advisory", href: "/services/crop-advisory" },
    { label: "Pest Management", href: "/services/pest-management" },
    { label: "Organic Farming", href: "/services/organic-farming" },
  ],
  products: [
    { label: "Fertilizers", href: "/products/fertilizers" },
    { label: "Pesticides", href: "/products/pesticides" },
    { label: "Seeds", href: "/products/seeds" },
    { label: "Farm Equipment", href: "/products/equipment" },
  ],
  solutions: [
    { label: "Smart Farming", href: "/solutions/smart-farming" },
    { label: "Sustainable Agriculture", href: "/solutions/sustainable-agriculture" },
    { label: "Crop Health Monitoring", href: "/solutions/crop-health" },
    { label: "Supply Chain", href: "/solutions/supply-chain" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
};

const FooterSection = ({ 
  title, 
  links, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  links: { label: string; href: string }[]; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <h4 className="font-heading font-semibold text-lg mb-4">{title}</h4>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile dropdown */}
      <div className="md:hidden border-b border-primary-foreground/10 last:border-b-0">
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full py-3 text-primary-foreground font-semibold text-sm"
        >
          {title}
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </button>
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48 pb-3" : "max-h-0"
        )}>
          <ul className="space-y-2 pl-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Ready to Transform Your Farming Journey?
            </h2>
            <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
              Connect with our agricultural experts today and discover how Shiva Agri Clinic can help you achieve better yields and sustainable farming practices.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 mb-4 md:mb-0">
            <Link to="/" className="flex items-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground">Shiva</span>
              <span className="text-xl sm:text-2xl font-heading font-bold text-accent">Agri</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full ml-0.5 -mt-3 sm:-mt-4" />
            </Link>
            <p className="text-primary-foreground/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Empowering farmers with expert agricultural solutions, modern farming techniques, and sustainable practices since our founding by Shiva Kumar.
            </p>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href="https://www.youtube.com/@ShivaAgriClinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/shiva_agriclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span>+91 70135 70447</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span>info@shivaagriclinic.com</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Mobile Dropdowns / Desktop Links */}
          <div className="md:contents">
            <FooterSection 
              title="Services" 
              links={footerLinks.services} 
              isOpen={openSections.includes('services')}
              onToggle={() => toggleSection('services')}
            />
            <FooterSection 
              title="Products" 
              links={footerLinks.products} 
              isOpen={openSections.includes('products')}
              onToggle={() => toggleSection('products')}
            />
            <FooterSection 
              title="Solutions" 
              links={footerLinks.solutions} 
              isOpen={openSections.includes('solutions')}
              onToggle={() => toggleSection('solutions')}
            />
            <FooterSection 
              title="Company" 
              links={footerLinks.company} 
              isOpen={openSections.includes('company')}
              onToggle={() => toggleSection('company')}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Shiva Agri Clinic. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="text-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary-foreground/10">
            <p className="text-[10px] sm:text-xs text-primary-foreground/50">
              Developed By <a href="https://octaleads.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Octaleads Pvt Ltd.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
