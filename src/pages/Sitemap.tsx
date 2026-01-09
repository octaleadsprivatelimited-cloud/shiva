import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Crop Advisory", href: "/services/crop-advisory" },
      { label: "Pest Management", href: "/services/pest-management" },
      { label: "Organic Farming", href: "/services/organic-farming" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Seeds", href: "/products/seeds" },
      { label: "Fertilizers & Pesticides", href: "/products/fertilizers" },
      { label: "Farm Equipment", href: "/products/equipment" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Smart Farming", href: "/solutions/smart-farming" },
      { label: "Sustainable Agriculture", href: "/solutions/sustainable-agriculture" },
      { label: "Crop Health Monitoring", href: "/solutions/crop-health" },
      { label: "Supply Chain", href: "/solutions/supply-chain" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Videos", href: "/videos" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const Sitemap = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sitemap</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Find your way around Shiva Agri Clinic's website.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sitemapSections.map((section) => (
            <div key={section.title} className="bg-card p-6 rounded-2xl border border-border">
              <h2 className="text-lg font-heading font-bold mb-4 text-accent">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Sitemap;