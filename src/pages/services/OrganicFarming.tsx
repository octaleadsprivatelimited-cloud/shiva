import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sprout, Leaf, Heart, Award, Globe, ShieldCheck } from "lucide-react";
import organicFarm from "@/assets/gallery/organic-farm.jpg";

const benefits = [
  { icon: Heart, title: "Healthier Produce", desc: "Grow chemical-free fruits and vegetables that are safe for consumption" },
  { icon: Globe, title: "Environmental Protection", desc: "Reduce environmental pollution and preserve soil biodiversity" },
  { icon: Award, title: "Premium Prices", desc: "Organic produce fetches 20-50% higher prices in the market" },
  { icon: ShieldCheck, title: "Certification Support", desc: "We help you obtain organic certification for your farm" },
];

const practices = [
  "Composting & Vermicomposting", "Green Manuring", "Crop Rotation", "Biological Pest Control",
  "Mulching Techniques", "Natural Fertilizers", "Companion Planting", "Cover Cropping"
];

const OrganicFarming = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${organicFarm})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sprout className="w-4 h-4" />
              Sustainable Service
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Organic Farming Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Complete guidance on transitioning to organic farming practices, obtaining certifications, and accessing premium organic markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Organic Journey <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Go Organic</span>
            <h2 className="text-3xl font-heading font-bold mt-2">Benefits of Organic Farming</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-card rounded-2xl border border-border text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Teach</span>
              <h2 className="text-3xl font-heading font-bold mt-2 mb-6">Organic Practices We Cover</h2>
              <p className="text-muted-foreground mb-6">
                Learn sustainable farming techniques that work with nature instead of against it.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {practices.map((practice) => (
                  <div key={practice} className="flex items-center gap-2 p-3 bg-background rounded-lg">
                    <Leaf className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-2xl">
                <h3 className="font-heading font-semibold mb-4">Certification Support</h3>
                <ul className="space-y-3">
                  {[
                    "India Organic (NPOP) Certification",
                    "PGS India Certification",
                    "International Organic Standards",
                    "Documentation & Compliance Help",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Go Organic?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Start your organic farming journey with expert guidance from Shiva Agri Clinic.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default OrganicFarming;
