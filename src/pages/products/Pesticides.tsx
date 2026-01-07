import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Bug, Shield, Leaf, Zap, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const pesticideCategories = [
  {
    name: "Insecticides",
    products: ["Imidacloprid", "Chlorpyrifos", "Cypermethrin", "Acephate", "Thiamethoxam", "Lambda-cyhalothrin"],
    targets: ["Stem borers", "Aphids", "White flies", "Caterpillars", "Thrips", "Jassids"],
    features: ["Broad spectrum control", "Systemic action", "Long residual effect"],
    image: "🐛",
  },
  {
    name: "Fungicides",
    products: ["Mancozeb", "Carbendazim", "Copper Oxychloride", "Propiconazole", "Tebuconazole", "Azoxystrobin"],
    targets: ["Blast", "Blight", "Powdery mildew", "Rust", "Anthracnose", "Downy mildew"],
    features: ["Protective & curative", "Multi-site action", "Disease prevention"],
    image: "🍄",
  },
  {
    name: "Herbicides",
    products: ["Glyphosate", "Pendimethalin", "2,4-D", "Pretilachlor", "Bispyribac", "Metsulfuron"],
    targets: ["Broad-leaf weeds", "Grasses", "Sedges", "Annual weeds", "Perennial weeds"],
    features: ["Selective & non-selective", "Pre & post emergence", "Effective weed control"],
    image: "🌱",
  },
  {
    name: "Bio-Pesticides",
    products: ["Neem oil", "Trichoderma", "Beauveria", "Pseudomonas", "Bacillus thuringiensis", "Metarhizium"],
    targets: ["Multiple pests", "Soil-borne diseases", "Fungal infections", "Nematodes"],
    features: ["Eco-friendly", "Safe for beneficials", "Organic certified"],
    image: "🌼",
  },
  {
    name: "Acaricides",
    products: ["Abamectin", "Spiromesifen", "Fenpyroximate", "Hexythiazox", "Etoxazole"],
    targets: ["Mites", "Red spider mites", "Yellow mites", "Broad mites"],
    features: ["Mite-specific", "Low toxicity", "Residual control"],
    image: "🕷️",
  },
  {
    name: "Nematicides",
    products: ["Carbofuran", "Phorate", "Cartap", "Fenamiphos", "Bio-nematicides"],
    targets: ["Root-knot nematodes", "Cyst nematodes", "Lesion nematodes"],
    features: ["Soil application", "Root protection", "Crop safety"],
    image: "🪱",
  },
];

const whyChooseUs = [
  { icon: Shield, title: "Quality Assured", desc: "All products tested for purity and efficacy by certified labs" },
  { icon: Target, title: "Targeted Control", desc: "Specific solutions for different pests and diseases" },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "Wide range of bio-pesticides and organic alternatives" },
  { icon: Zap, title: "Fast Acting", desc: "Quick-acting formulations for immediate pest control" },
  { icon: AlertTriangle, title: "Safe Usage", desc: "Proper guidelines and safety instructions provided" },
  { icon: Bug, title: "Expert Advice", desc: "Professional guidance on pest identification and control" },
];

const applicationMethods = [
  {
    method: "Foliar Spray",
    description: "Direct application on leaves for quick pest control",
    suitable: ["Insecticides", "Fungicides", "Bio-pesticides"],
  },
  {
    method: "Soil Application",
    description: "Applied to soil for systemic protection and root pests",
    suitable: ["Nematicides", "Systemic insecticides", "Bio-control agents"],
  },
  {
    method: "Seed Treatment",
    description: "Coating seeds before sowing for early protection",
    suitable: ["Fungicides", "Bio-pesticides", "Growth promoters"],
  },
  {
    method: "Drip Irrigation",
    description: "Application through irrigation system for uniform coverage",
    suitable: ["Systemic pesticides", "Nematicides", "Fertilizer-pesticide mix"],
  },
];

const Pesticides = () => (
  <Layout>
    {/* Hero Section */}
    <section className="pt-28 md:pt-32 pb-12 md:pb-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Crop Protection Pesticides
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8">
            Comprehensive range of pesticides for effective pest, disease, and weed management. From chemical to bio-pesticides, protect your crops with confidence.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Pest Control Advice
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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

    {/* Pesticide Categories */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Range</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Pesticide Categories
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Comprehensive protection solutions for all types of crop threats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pesticideCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="text-4xl md:text-5xl mb-4">{category.image}</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Popular Products:</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.products.map((product) => (
                    <span key={product} className="px-2 py-1 bg-muted text-foreground text-xs rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Targets:</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.targets.map((target) => (
                    <span key={target} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {target}
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

    {/* Application Methods */}
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Application</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Application Methods
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Different methods for effective pesticide application based on your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {applicationMethods.map((method) => (
            <div key={method.method} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{method.method}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Suitable for:</p>
                <div className="flex flex-wrap gap-1.5">
                  {method.suitable.map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Safety Guidelines */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Safety First</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
              Safety Guidelines
            </h2>
          </div>

          <div className="bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Before Application
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Read label instructions carefully
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Use recommended dosage only
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Wear protective clothing and equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Check weather conditions before spraying
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  After Application
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Wash hands and exposed skin thoroughly
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Store unused pesticides safely
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Dispose of empty containers properly
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    Follow pre-harvest interval guidelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Need Pest Control Solutions?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Our pest management experts can help you identify pests, choose the right pesticides, and develop an integrated pest management strategy for your farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Consult an Expert
            </Button>
          </Link>
          <Link to="/services/pest-management">
            <Button variant="outline" size="lg" className="bg-transparent border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
              Learn About Pest Management
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pesticides;

