import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Bug, FlaskConical, Sprout } from "lucide-react";

const services = [
  { icon: Leaf, title: "Crop Advisory", desc: "Expert guidance on crop selection and cultivation.", href: "/services/crop-advisory" },
  { icon: Bug, title: "Pest Management", desc: "Integrated pest management solutions.", href: "/services/pest-management" },
  { icon: FlaskConical, title: "Soil Testing", desc: "Advanced soil analysis and recommendations.", href: "/services/soil-testing" },
  { icon: Sprout, title: "Organic Farming", desc: "Guidance on organic practices and certification.", href: "/services/organic-farming" },
];

const Services = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Comprehensive agricultural services for modern farmers.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link key={s.title} to={s.href} className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <span className="flex items-center text-accent font-medium">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
