import { Link } from "react-router-dom";
import { Youtube, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { label: "Crop Advisory", href: "/services/crop-advisory" },
    { label: "Pest Management", href: "/services/pest-management" },
    { label: "Soil Testing", href: "/services/soil-testing" },
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

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Transform Your Farming Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Connect with our agricultural experts today and discover how Shiva Agri Clinic can help you achieve better yields and sustainable farming practices.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-heading font-bold text-primary-foreground">Shiva</span>
              <span className="text-2xl font-heading font-bold text-accent">Agri</span>
              <div className="w-2 h-2 bg-accent rounded-full ml-0.5 -mt-4" />
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering farmers with expert agricultural solutions, modern farming techniques, and sustainable practices since our founding by Shiva Kumar.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.youtube.com/@ShivaAgriClinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shiva_agriclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@shivaagriclinic.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
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

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
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

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Shiva Agri Clinic. All rights reserved.</p>
            <div className="flex gap-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
