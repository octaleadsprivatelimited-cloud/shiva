import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, Wifi, BarChart3, Cloud, Bell, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartFarmingImg from "@/assets/smart-farming.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Farm Management",
    desc: "Monitor and manage your farm operations from anywhere using our mobile app. Track field activities, labor, and expenses in real-time.",
  },
  {
    icon: Wifi,
    title: "IoT Sensors",
    desc: "Install smart sensors for soil moisture, temperature, humidity, and nutrient levels. Get accurate data for informed decisions.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Advanced analytics to understand crop patterns, yield predictions, and optimize resource allocation for maximum efficiency.",
  },
  {
    icon: Cloud,
    title: "Weather Integration",
    desc: "Hyperlocal weather forecasts and alerts integrated with your farming schedule. Plan irrigation and spraying activities effectively.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Receive instant notifications for pest outbreaks, disease predictions, and critical weather events affecting your crops.",
  },
  {
    icon: MapPin,
    title: "GPS Mapping",
    desc: "Detailed field mapping with GPS technology for precision agriculture, variable rate application, and yield mapping.",
  },
];

const benefits = [
  { value: "30%", label: "Water Savings" },
  { value: "25%", label: "Yield Increase" },
  { value: "40%", label: "Labor Reduction" },
  { value: "20%", label: "Cost Savings" },
];

const SmartFarming = () => (
  <Layout>
    {/* Hero Section */}
    <section className="pt-28 md:pt-32 pb-12 md:pb-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <Link to="/solutions" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Link>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
              Smart Farming Solutions
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8">
              Transform your farm with cutting-edge technology. From IoT sensors to AI-powered analytics, bring precision agriculture to your fields.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={smartFarmingImg} alt="Smart Farming" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">{benefit.value}</div>
              <p className="text-accent-foreground/80 text-sm md:text-base mt-1">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Technology</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Smart Farming Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {[
            { step: "1", title: "Consultation", desc: "We assess your farm and understand your needs" },
            { step: "2", title: "Setup", desc: "Install sensors and configure the system" },
            { step: "3", title: "Training", desc: "Learn to use the app and interpret data" },
            { step: "4", title: "Support", desc: "Ongoing assistance and system updates" },
          ].map((item, index) => (
            <div key={item.step} className="relative text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
                {item.step}
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-6 md:top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ready to Go Smart?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Join hundreds of farmers who have transformed their operations with our smart farming solutions.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule a Demo
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SmartFarming;
