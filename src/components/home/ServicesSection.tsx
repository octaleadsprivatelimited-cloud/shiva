import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Bug, Sprout, Wheat, Tractor } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Leaf,
    title: "Crop Advisory",
    description: "Expert guidance on crop selection, planting schedules, and cultivation practices tailored to your region and soil conditions.",
    href: "/services/crop-advisory",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bug,
    title: "Pest Management",
    description: "Comprehensive pest and disease control solutions using integrated pest management (IPM) techniques for sustainable farming.",
    href: "/services/pest-management",
    color: "bg-lime-light/20 text-lime-dark",
  },
  {
    icon: Sprout,
    title: "Organic Farming",
    description: "Complete guidance on transitioning to organic farming practices and obtaining organic certifications for your produce.",
    href: "/services/organic-farming",
    color: "bg-forest-light/20 text-forest",
  },
  {
    icon: Wheat,
    title: "Seed Solutions",
    description: "High-quality seeds selection and hybrid variety recommendations for maximum yield and disease resistance.",
    href: "/products/seeds",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Tractor,
    title: "Farm Mechanization",
    description: "Modern farming equipment consultation and mechanization solutions to increase efficiency and reduce labor costs.",
    href: "/products/equipment",
    color: "bg-navy/20 text-navy",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Cultivating Success, One Farm at a Time
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empowering farmers with cutting-edge solutions — from soil to harvest, we're your trusted partner in agricultural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group p-6 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 animate-slide-up",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", service.color)}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
