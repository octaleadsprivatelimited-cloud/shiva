import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Calendar, TrendingUp, CloudRain, Thermometer, Users } from "lucide-react";
import farmerConsultation from "@/assets/farmer-consultation.jpg";

const benefits = [
  "Personalized crop selection based on your soil and climate",
  "Seasonal planting calendars and cultivation schedules",
  "Variety recommendations for maximum yield",
  "Intercropping and crop rotation strategies",
  "Market-oriented crop planning",
  "Climate-resilient farming practices",
];

const process = [
  { icon: Users, title: "Initial Consultation", desc: "Our experts visit your farm to understand soil conditions and farming history" },
  { icon: Thermometer, title: "Climate Analysis", desc: "We analyze local weather patterns and climate data for your region" },
  { icon: Calendar, title: "Custom Planning", desc: "Receive a personalized crop calendar and cultivation guide" },
  { icon: TrendingUp, title: "Ongoing Support", desc: "Regular follow-ups and adjustments based on crop progress" },
];

const CropAdvisory = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                Expert Service
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Crop Advisory Services
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Get expert guidance on crop selection, planting schedules, and cultivation practices tailored to your specific farm conditions and market demands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="whiteOutline" size="lg" asChild>
                  <a href="https://www.youtube.com/@ShivaAgriClinic" target="_blank" rel="noopener noreferrer">
                    Watch Videos
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={farmerConsultation} alt="Crop Advisory" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl font-heading font-bold mt-2 mb-6">Comprehensive Crop Advisory</h2>
              <p className="text-muted-foreground mb-8">
                Our crop advisory service provides end-to-end guidance for farmers looking to maximize their yields and profitability through scientific farming practices.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "200+", label: "Crops Covered" },
                  { value: "40%", label: "Avg. Yield Increase" },
                  { value: "25K+", label: "Farmers Helped" },
                  { value: "15+", label: "States Served" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-background rounded-xl">
                    <div className="text-2xl font-heading font-bold text-accent">{stat.value}</div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl font-heading font-bold mt-2">Our Advisory Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-background p-6 rounded-2xl h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-4xl font-heading font-bold text-accent/20 absolute top-4 right-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Optimize Your Crop Selection?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation with our agricultural experts.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CropAdvisory;
