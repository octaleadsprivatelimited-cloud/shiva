import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Wheat, Leaf, Sun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gallery/organic-farm.jpg";

const seedCategories = [
  {
    name: "Paddy Seeds",
    varieties: ["BPT 5204", "Swarna", "IR 64", "MTU 1010"],
    features: ["High yield potential", "Disease resistant", "Suitable for all seasons"],
    image: "🌾",
  },
  {
    name: "Cotton Seeds",
    varieties: ["Bt Cotton", "Desi Cotton", "American Cotton"],
    features: ["Bollworm resistant", "High fiber quality", "Early maturity"],
    image: "🏵️",
  },
  {
    name: "Vegetable Seeds",
    varieties: ["Tomato", "Chilli", "Brinjal", "Okra", "Leafy Greens"],
    features: ["Hybrid varieties", "High germination rate", "Disease tolerant"],
    image: "🥬",
  },
  {
    name: "Pulse Seeds",
    varieties: ["Black Gram", "Green Gram", "Red Gram", "Bengal Gram"],
    features: ["Short duration", "Drought tolerant", "Nitrogen fixing"],
    image: "🫘",
  },
  {
    name: "Oilseed Crops",
    varieties: ["Groundnut", "Sunflower", "Sesame", "Castor"],
    features: ["High oil content", "Pest resistant", "Suitable for rainfed areas"],
    image: "🌻",
  },
  {
    name: "Millets & Cereals",
    varieties: ["Jowar", "Bajra", "Ragi", "Maize"],
    features: ["Nutritious grains", "Low water requirement", "Climate resilient"],
    image: "🌽",
  },
];

const whyChooseUs = [
  { icon: Wheat, title: "Certified Quality", desc: "All seeds are government certified and tested for quality" },
  { icon: Leaf, title: "High Germination", desc: "Minimum 90% germination rate guaranteed" },
  { icon: Sun, title: "Region Specific", desc: "Varieties suited for local climate and soil conditions" },
  { icon: Droplets, title: "Technical Support", desc: "Complete guidance on cultivation practices" },
];

const Seeds = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/products" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Premium Quality Seeds
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            High-yielding, disease-resistant seed varieties for all major crops. Sourced from trusted suppliers and tested for quality assurance.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Seed Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Our Seeds */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Seed Categories */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Range</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Seed Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {seedCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="text-4xl md:text-5xl mb-4">{category.image}</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Popular Varieties:</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.varieties.map((variety) => (
                    <span key={variety} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {variety}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-1.5 md:space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Need Help Choosing Seeds?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Our experts can recommend the best seed varieties based on your soil type, climate, and farming goals.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Talk to an Expert
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Seeds;
