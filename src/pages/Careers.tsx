import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Briefcase, Users, Heart, Zap, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const openings = [
  {
    title: "Agricultural Field Officer",
    location: "Multiple Locations, India",
    type: "Full-time",
    experience: "2-5 years",
    description: "Visit farms, conduct soil testing, and provide on-ground advisory to farmers.",
  },
  {
    title: "Crop Advisory Specialist",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    experience: "3-7 years",
    description: "Develop crop management plans and provide expert guidance to farmers.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    description: "Manage social media, create content, and drive engagement for our YouTube and Instagram channels.",
  },
  {
    title: "Soil Scientist",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead soil analysis, research, and develop recommendations for soil health improvement.",
  },
];

const benefits = [
  { icon: Heart, title: "Health Insurance", desc: "Comprehensive coverage for you and family" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual allowance for courses and certifications" },
  { icon: Zap, title: "Growth Opportunities", desc: "Fast-track career growth in agriculture" },
  { icon: Users, title: "Team Culture", desc: "Collaborative and supportive environment" },
];

const Careers = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Be part of the agricultural revolution. Help us empower farmers across India.
        </p>
      </div>
    </section>

    {/* Why Join Us */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Join Shiva Agri Clinic?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-card p-6 rounded-2xl border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Open Positions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="bg-card p-6 rounded-2xl border border-border hover:border-accent transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.experience}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{job.description}</p>
                </div>
                <Button variant="hero" className="flex-shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Don't See a Suitable Role?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          We're always looking for talented individuals. Send us your resume and we'll reach out when a suitable position opens up.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Send Your Resume <ArrowRight className="ml-2 w-5 h-5" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Careers;