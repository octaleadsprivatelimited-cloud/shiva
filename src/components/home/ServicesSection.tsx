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
    <section id="services" className="py-6 sm:py-10 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-5 sm:mb-8 md:mb-16">
          <span className="text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider block mb-1 sm:mb-2">What We Offer</span>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-1 sm:mt-2 mb-2 sm:mb-3 md:mb-4 px-1 sm:px-0 leading-snug sm:leading-tight md:leading-normal">
            Cultivating Success, One Farm at a Time
          </h2>
          <p className="text-muted-foreground text-[11px] sm:text-sm md:text-lg max-w-2xl mx-auto px-1 sm:px-0 leading-snug sm:leading-relaxed">
            Empowering farmers with cutting-edge solutions — from soil to harvest, we're your trusted partner in agricultural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group p-2.5 sm:p-4 md:p-6 bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border hover:border-accent active:scale-[0.98] hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col min-h-[130px] sm:min-h-[180px] md:min-h-[200px] touch-manipulation",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn("w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 flex-shrink-0", service.color)}>
                <service.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-7 md:h-7" />
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-heading font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-accent transition-colors leading-tight sm:leading-normal line-clamp-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-[11px] sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 flex-grow leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
              <div className="flex items-center text-accent font-medium text-[10px] sm:text-xs md:text-sm group-hover:gap-2 transition-all mt-auto pt-1 sm:pt-0">
                Learn More
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-0.5 sm:ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
