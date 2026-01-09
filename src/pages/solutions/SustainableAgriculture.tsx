import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Droplets, Sun, Recycle, TreeDeciduous, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import sustainableFarmingImg from "@/assets/sustainable-farming.jpg";

const practices = [
  {
    icon: Leaf,
    title: "Organic Farming",
    desc: "Transition to chemical-free farming with natural fertilizers, bio-pesticides, and organic certification support.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    desc: "Implement drip irrigation, rainwater harvesting, and efficient water management practices to reduce water usage.",
  },
  {
    icon: Sun,
    title: "Solar Power Integration",
    desc: "Solar pumps, solar dryers, and renewable energy solutions to reduce electricity costs and carbon footprint.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    desc: "Convert farm waste into compost, biogas, and other valuable resources. Zero-waste farming practices.",
  },
  {
    icon: TreeDeciduous,
    title: "Agroforestry",
    desc: "Integrate trees with crops for improved soil health, additional income, and environmental benefits.",
  },
  {
    icon: Wind,
    title: "Carbon Farming",
    desc: "Practices that sequester carbon in soil, contributing to climate change mitigation while improving fertility.",
  },
];

const benefits = [
  "Reduced input costs over time",
  "Premium prices for organic produce",
  "Improved soil health and fertility",
  "Better water retention",
  "Healthier food production",
  "Environmental conservation",
  "Government subsidies available",
  "Access to premium markets",
];

const SustainableAgriculture = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sustainableFarmingImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/solutions" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Sustainable Agriculture
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Farm in harmony with nature. Our sustainable agriculture solutions help you protect the environment while improving profitability.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Start Sustainable Farming
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Practices */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Sustainable Practices
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {practices.map((practice) => (
            <div key={practice.title} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-forest-light/20 rounded-xl flex items-center justify-center mb-4">
                <practice.icon className="w-6 h-6 md:w-7 md:h-7 text-forest" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{practice.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{practice.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Why Go Sustainable?</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Benefits of Sustainable Farming
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
              Government Support
            </h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              The government offers various subsidies and schemes for sustainable farming practices:
            </p>
            <ul className="space-y-3">
              {[
                "Paramparagat Krishi Vikas Yojana (PKVY)",
                "National Mission on Sustainable Agriculture",
                "Rashtriya Krishi Vikas Yojana",
                "Organic Farming Certification Subsidy",
              ].map((scheme) => (
                <li key={scheme} className="flex items-start gap-2 text-sm text-foreground">
                  <Leaf className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {scheme}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 block">
              <Button className="w-full">Learn About Subsidies</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-16 bg-forest text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Join the Sustainable Farming Movement</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Start your journey towards eco-friendly, profitable farming. Our experts will guide you every step of the way.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Get Expert Guidance
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SustainableAgriculture;
