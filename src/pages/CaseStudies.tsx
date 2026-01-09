import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Leaf, Bug, FlaskConical } from "lucide-react";
import successStory from "@/assets/gallery/success-story-1.jpg";

const caseStudies = [
  {
    id: 1,
    title: "200% Yield Increase in Cotton Farming",
    category: "Crop Advisory",
    icon: Leaf,
    location: "Maharashtra",
    farmer: "Rajendra Patil",
    challenge: "Low cotton yield due to improper farming practices and pest issues.",
    solution: "Implemented comprehensive crop advisory including soil testing, pest management, and optimized irrigation.",
    results: ["200% increase in yield", "50% reduction in pest damage", "₹2 Lakh additional income"],
    image: successStory,
  },
  {
    id: 2,
    title: "Organic Certification Success Story",
    category: "Organic Farming",
    icon: Leaf,
    location: "Karnataka",
    farmer: "Lakshmi Devi",
    challenge: "Transitioning from conventional to organic farming with market access challenges.",
    solution: "Guided through organic certification process with soil enrichment and natural pest control methods.",
    results: ["Achieved organic certification", "30% premium on produce", "Improved soil health"],
    image: successStory,
  },
  {
    id: 3,
    title: "IPM Implementation Saves Mango Orchard",
    category: "Pest Management",
    icon: Bug,
    location: "Andhra Pradesh",
    farmer: "Venkata Rao",
    challenge: "Severe mango hopper and mealybug infestation threatening entire orchard.",
    solution: "Implemented Integrated Pest Management with biological controls and targeted interventions.",
    results: ["95% pest control", "Chemical usage reduced by 70%", "Saved 500 mango trees"],
    image: successStory,
  },
  {
    id: 4,
    title: "Soil Restoration for Degraded Land",
    category: "Soil Testing",
    icon: FlaskConical,
    location: "Telangana",
    farmer: "Suresh Kumar",
    challenge: "Severely degraded soil with poor nutrient content and water retention.",
    solution: "Comprehensive soil testing followed by targeted amendments and cover cropping strategy.",
    results: ["Soil health improved by 150%", "Water retention doubled", "Back to profitable farming"],
    image: successStory,
  },
];

const CaseStudies = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${successStory})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Real success stories from farmers who transformed their farming with Shiva Agri Clinic.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img src={study.image} alt={study.title} className="rounded-2xl shadow-lg w-full" />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <study.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold">{study.category}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">{study.title}</h2>
                <p className="text-muted-foreground mb-4">{study.location} • Farmer: {study.farmer}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-1">Our Solution</h4>
                    <p className="text-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <span key={result} className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          <TrendingUp className="w-3 h-3" />
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Want Similar Results for Your Farm?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Connect with our experts and start your success story today.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

import { Button } from "@/components/ui/button";
export default CaseStudies;