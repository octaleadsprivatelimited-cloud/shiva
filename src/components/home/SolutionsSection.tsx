import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, LineChart, CloudRain, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartFarming from "@/assets/smart-farming.jpg";

const features = [
  { icon: Users, label: "Expert Advisory" },
  { icon: Database, label: "Data-Driven Insights" },
  { icon: LineChart, label: "Yield Monitoring" },
  { icon: CloudRain, label: "Weather Alerts" },
  { icon: Shield, label: "Pest Prevention" },
  { icon: Zap, label: "Real-time Support" },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-navy text-primary-foreground overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Smart Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
              Shiva Agri Clinic Brings Together{" "}
              <span className="text-accent">Multiple Solutions</span> for Your Farm
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Our comprehensive platform combines traditional agricultural expertise with modern technology to provide you with the best farming solutions. Get personalized advice, real-time monitoring, and expert support all in one place.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/solutions/smart-farming">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={smartFarming}
                alt="Smart Farming Solutions"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-heading font-bold text-accent">95%</div>
              <p className="text-sm text-muted-foreground">Accuracy in<br />Crop Predictions</p>
            </div>
            {/* Floating Feature Card */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <Zap className="w-6 h-6 mb-2" />
              <p className="text-sm font-semibold">Real-time<br />Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
