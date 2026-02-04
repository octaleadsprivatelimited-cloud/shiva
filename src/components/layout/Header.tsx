import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Phone, Youtube, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import logoImage from "@/assets/final logo 1 copy.png";

type NavItem = {
  label: string;
  href: string;
  scrollTo?: string;
  dropdown?: { label: string; href: string; scrollTo?: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    scrollTo: "services",
    dropdown: [
      { label: "Crop Advisory", href: "/services/crop-advisory" },
      { label: "Pest Management", href: "/services/pest-management" },
      { label: "Organic Farming", href: "/services/organic-farming" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Fertilizers", href: "/products/fertilizers" },
      { label: "Pesticides", href: "/products/pesticides" },
      { label: "Seeds", href: "/products/seeds" },
      { label: "Farm Equipment", href: "/products/equipment" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    scrollTo: "solutions",
    dropdown: [
      { label: "Smart Farming", href: "/solutions/smart-farming" },
      { label: "Sustainable Agriculture", href: "/solutions/sustainable-agriculture" },
      { label: "Crop Health Monitoring", href: "/solutions/crop-health" },
      { label: "Supply Chain", href: "/solutions/supply-chain" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog", href: "/blog", scrollTo: "blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Videos", href: "/videos", scrollTo: "videos" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    scrollTo: "about",
    dropdown: [
      { label: "About Us", href: "/about", scrollTo: "about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, item: { href: string; scrollTo?: string }) => {
    // Only use smooth scroll on homepage for items with scrollTo
    if (item.scrollTo && location.pathname === "/") {
      e.preventDefault();
      scrollToSection(item.scrollTo);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home and scroll to top
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary",
        isScrolled
          ? "shadow-md py-2"
          : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center focus:outline-none">
            <img
              src={logoImage}
              alt="Shiva Agri Clinic"
              className="h-14 w-auto md:h-20 object-contain object-center min-w-[160px] md:min-w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className={cn(
                    "absolute top-full left-0 mt-1 py-2 bg-card rounded-xl shadow-lg border border-border min-w-[220px] transition-all duration-200",
                    activeDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  )}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        onClick={(e) => handleNavClick(e, subItem)}
                        className="block px-4 py-2.5 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className={cn(
              "p-2 rounded-full transition-colors",
              "text-primary-foreground hover:bg-primary-foreground/10"
            )}>
              <Search className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              <a
                href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shiva_agriclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/175Yh7bMWg/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ShivaAgriClinic"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shiva-agri-clinic-0287483a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Get Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="bg-card rounded-2xl shadow-lg border border-border p-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border last:border-0">
                <button
                  className="flex items-center justify-between w-full py-3 text-foreground font-medium"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  )}
                </button>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        onClick={(e) => handleNavClick(e, subItem)}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <div className="flex justify-center gap-4">
                <a href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.instagram.com/shiva_agriclinic/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.facebook.com/share/175Yh7bMWg/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://x.com/ShivaAgriClinic" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/shiva-agri-clinic-0287483a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
