import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Beaker, Shield, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const fertilizerCategories = [
  {
    name: "Organic Fertilizers",
    products: ["Vermicompost", "Neem Cake", "Bio-compost", "Bone Meal"],
    benefits: ["Improves soil health", "Eco-friendly", "Long-lasting effects"],
    image: "🌿",
  },
  {
    name: "Chemical Fertilizers",
    products: ["Urea", "DAP", "MOP", "NPK Complex"],
    benefits: ["Quick nutrient release", "Cost-effective", "High nutrient content"],
    image: "⚗️",
  },
  {
    name: "Micronutrients",
    products: ["Zinc Sulphate", "Ferrous Sulphate", "Boron", "Manganese"],
    benefits: ["Corrects deficiencies", "Improves crop quality", "Better yields"],
    image: "💎",
  },
  {
    name: "Bio-Fertilizers",
    products: ["Rhizobium", "Azotobacter", "PSB", "Mycorrhiza"],
    benefits: ["Natural nitrogen fixation", "Phosphate solubilization", "Sustainable"],
    image: "🦠",
  },
];

const pesticideCategories = [
  {
    name: "Insecticides",
    products: ["Imidacloprid", "Chlorpyrifos", "Cypermethrin", "Acephate"],
    targets: ["Stem borers", "Aphids", "White flies", "Caterpillars"],
    image: "🐛",
  },
  {
    name: "Fungicides",
    products: ["Mancozeb", "Carbendazim", "Copper Oxychloride", "Propiconazole"],
    targets: ["Blast", "Blight", "Powdery mildew", "Rust"],
    image: "🍄",
  },
  {
    name: "Herbicides",
    products: ["Glyphosate", "Pendimethalin", "2,4-D", "Pretilachlor"],
    targets: ["Broad-leaf weeds", "Grasses", "Sedges", "Annual weeds"],
    image: "🌱",
  },
  {
    name: "Bio-Pesticides",
    products: ["Neem oil", "Trichoderma", "Beauveria", "Pseudomonas"],
    targets: ["Multiple pests", "Soil-borne diseases", "Fungal infections"],
    image: "🌼",
  },
];

const features = [
  { icon: Beaker, title: "Quality Tested", desc: "All products tested for purity and efficacy" },
  { icon: Shield, title: "Safe to Use", desc: "Proper guidelines and safety instructions provided" },
  { icon: Leaf, title: "Eco Options", desc: "Wide range of organic and bio alternatives" },
  { icon: Zap, title: "Fast Results", desc: "Quick-acting formulations for immediate effects" },
];

const Fertilizers = () => (
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
            Fertilizers & Pesticides
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8">
            Complete range of crop nutrition and protection products. From organic to chemical solutions, we have everything your farm needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Product Advice
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item) => (
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

    {/* Fertilizers */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Crop Nutrition</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Fertilizer Range
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {fertilizerCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="text-4xl mb-4">{category.image}</div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground mb-2">Products:</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.products.map((product) => (
                    <span key={product} className="px-2 py-0.5 bg-muted text-foreground text-xs rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-1.5">
                {category.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pesticides */}
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Crop Protection</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Pesticide Range
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pesticideCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="text-4xl mb-4">{category.image}</div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground mb-2">Products:</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.products.map((product) => (
                    <span key={product} className="px-2 py-0.5 bg-muted text-foreground text-xs rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Targets:</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.targets.map((target) => (
                    <span key={target} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Need Product Recommendations?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Our agronomists can help you choose the right fertilizers and pesticides based on your crop, soil, and pest situation.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Consult an Agronomist
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Fertilizers;
