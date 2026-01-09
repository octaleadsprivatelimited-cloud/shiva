import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Leaf, TrendingUp, Truck } from "lucide-react";
import heroImage from "@/assets/smart-farming.jpg";

const solutions = [
  { icon: Smartphone, title: "Smart Farming", desc: "Technology-driven farming solutions.", href: "/solutions/smart-farming" },
  { icon: Leaf, title: "Sustainable Agriculture", desc: "Eco-friendly farming practices.", href: "/solutions/sustainable-agriculture" },
  { icon: TrendingUp, title: "Crop Health Monitoring", desc: "Real-time crop health analysis.", href: "/solutions/crop-health" },
  { icon: Truck, title: "Supply Chain", desc: "Farm to market solutions.", href: "/solutions/supply-chain" },
];

const Solutions = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Solutions</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">Innovative solutions for modern agriculture.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s) => (
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

export default Solutions;
