import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FlaskConical, Beaker, FileText, BarChart3, Droplets, Leaf } from "lucide-react";
import soilTesting from "@/assets/gallery/soil-testing.jpg";

const tests = [
  { icon: Beaker, title: "pH Level Analysis", desc: "Measure soil acidity/alkalinity for optimal nutrient availability" },
  { icon: Droplets, title: "Nutrient Content", desc: "NPK, micronutrients, and organic matter analysis" },
  { icon: BarChart3, title: "Soil Texture", desc: "Sand, silt, and clay composition for irrigation planning" },
  { icon: Leaf, title: "Organic Carbon", desc: "Soil health indicator for sustainable farming" },
];

const parameters = [
  "Nitrogen (N)", "Phosphorus (P)", "Potassium (K)", "Calcium", "Magnesium", "Sulfur",
  "Iron", "Zinc", "Manganese", "Copper", "Boron", "pH Level", "EC", "Organic Carbon"
];

const SoilTesting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FlaskConical className="w-4 h-4" />
                Laboratory Service
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Soil Testing & Analysis
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Advanced soil analysis to determine nutrient content, pH levels, and customized fertilizer recommendations for optimal crop growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Soil Test <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
              </div>
            </div>
            <div>
              <img src={soilTesting} alt="Soil Testing" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Test</span>
            <h2 className="text-3xl font-heading font-bold mt-2">Comprehensive Soil Analysis</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tests.map((test) => (
              <div key={test.title} className="p-6 bg-card rounded-2xl border border-border text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <test.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{test.title}</h3>
                <p className="text-muted-foreground text-sm">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Parameters</span>
              <h2 className="text-3xl font-heading font-bold mt-2 mb-6">What We Analyze</h2>
              <p className="text-muted-foreground mb-6">
                Our comprehensive soil testing covers all essential macro and micronutrients required for healthy crop growth.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {parameters.map((param) => (
                  <div key={param} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">{param}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-8 rounded-2xl">
              <FileText className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-4">What You Receive</h3>
              <ul className="space-y-3">
                {[
                  "Detailed soil analysis report",
                  "Nutrient deficiency diagnosis",
                  "Customized fertilizer recommendations",
                  "Crop-specific nutrient schedule",
                  "Soil health improvement plan",
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
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Know Your Soil Better</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get your soil tested and receive expert recommendations for better yields.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request Soil Test <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SoilTesting;
