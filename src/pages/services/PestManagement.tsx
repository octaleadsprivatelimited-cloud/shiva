import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Bug, Shield, AlertTriangle, Target, Microscope, Zap } from "lucide-react";
import pestControl from "@/assets/gallery/pest-control.jpg";

const solutions = [
  { icon: Microscope, title: "Pest Identification", desc: "Accurate identification of pests and diseases affecting your crops using modern diagnostic tools." },
  { icon: Shield, title: "Integrated Pest Management", desc: "Holistic approach combining biological, cultural, and chemical control methods." },
  { icon: AlertTriangle, title: "Early Warning System", desc: "Predictive alerts for pest outbreaks based on weather and historical data." },
  { icon: Target, title: "Targeted Treatment", desc: "Precise application of pesticides only where needed to minimize environmental impact." },
];

const pests = [
  "Bollworm in Cotton", "Stem Borer in Rice", "Aphids in Vegetables", "Whitefly in Tomato",
  "Thrips in Onion", "Red Spider Mite", "Leaf Miner", "Fruit Borer", "Army Worm", "Fruit Fly"
];

const PestManagement = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pestControl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Bug className="w-4 h-4" />
              Protection Service
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Pest Management Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive pest and disease control using Integrated Pest Management (IPM) for sustainable and effective crop protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Pest Analysis <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl font-heading font-bold mt-2">Integrated Pest Management</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="p-6 bg-card rounded-2xl border border-border hover:border-accent transition-colors">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pests Covered */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl font-heading font-bold mt-2">Pests & Diseases We Handle</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {pests.map((pest) => (
              <span key={pest} className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border">
                {pest}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            And 100+ more pest and disease issues across all major crops
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Our Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "75%", label: "Reduction in Pest Damage" },
              { value: "50%", label: "Less Pesticide Usage" },
              { value: "30%", label: "Cost Savings" },
              { value: "95%", label: "Farmer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-heading font-bold text-accent">{stat.value}</div>
                <p className="text-primary-foreground/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Protect Your Crops Today</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get expert pest management solutions for your farm.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PestManagement;
