import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Scan, Camera, Activity, AlertTriangle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gallery/soil-testing.jpg";

const services = [
  {
    icon: Scan,
    title: "Soil Testing",
    desc: "Comprehensive soil analysis for pH, nutrients, organic matter, and micronutrients. Get customized fertilizer recommendations.",
    features: ["NPK analysis", "Micronutrient testing", "pH and EC measurement", "Organic carbon content"],
  },
  {
    icon: Camera,
    title: "Disease Identification",
    desc: "Quick and accurate identification of crop diseases using AI-powered image analysis and expert consultation.",
    features: ["Photo-based diagnosis", "Expert verification", "Treatment recommendations", "Prevention strategies"],
  },
  {
    icon: Activity,
    title: "Nutrient Deficiency Analysis",
    desc: "Identify nutrient deficiencies through visual symptoms and tissue analysis. Get targeted correction measures.",
    features: ["Leaf tissue analysis", "Visual symptom mapping", "Foliar spray recommendations", "Long-term solutions"],
  },
  {
    icon: AlertTriangle,
    title: "Pest Surveillance",
    desc: "Regular monitoring and early warning system for pest infestations. Integrated pest management recommendations.",
    features: ["Pheromone traps", "Light traps", "Population monitoring", "Threshold-based spraying"],
  },
  {
    icon: FileText,
    title: "Crop Health Reports",
    desc: "Detailed periodic reports on your crop's health status with actionable insights and recommendations.",
    features: ["Weekly/monthly reports", "Growth stage tracking", "Yield predictions", "Risk assessments"],
  },
  {
    icon: Users,
    title: "Expert Consultation",
    desc: "Direct access to agricultural scientists and experienced agronomists for complex crop health issues.",
    features: ["One-on-one consultation", "Field visits", "WhatsApp support", "Video consultations"],
  },
];

const cropIssues = [
  { name: "Yellowing Leaves", causes: "Nitrogen deficiency, waterlogging, viral infection" },
  { name: "Leaf Spots", causes: "Fungal diseases, bacterial blight, nutrient deficiency" },
  { name: "Wilting", causes: "Root diseases, water stress, stem borers" },
  { name: "Stunted Growth", causes: "Nutrient deficiency, nematodes, poor soil health" },
  { name: "Fruit Drop", causes: "Pest attack, hormonal imbalance, water stress" },
  { name: "Brown Tips", causes: "Potassium deficiency, salt stress, fungal infection" },
];

const CropHealth = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/solutions" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Crop Health Monitoring
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Early detection and prevention of crop health issues. Our comprehensive monitoring services help you protect your crops and maximize yields.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Health Assessment
              </Button>
            </Link>
            <a href="https://wa.me/917013570447" target="_blank" rel="noopener noreferrer">
              <Button variant="whiteOutline" size="lg">
                Send Crop Photo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Issue Identifier */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Quick Help</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
            Common Crop Issues
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {cropIssues.map((issue) => (
            <div key={issue.name} className="bg-card rounded-lg md:rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{issue.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{issue.causes}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-6 text-sm">
          Send us a photo of your affected crop for accurate diagnosis →{" "}
          <a href="https://wa.me/917013570447" className="text-accent hover:underline">WhatsApp</a>
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Health Monitoring Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Worried About Your Crops?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Don't wait for problems to escalate. Get a comprehensive crop health assessment today.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Book Health Assessment
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default CropHealth;
