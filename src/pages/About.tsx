import { Layout } from "@/components/layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Youtube, Instagram, Facebook, Twitter, Linkedin, ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import heroImage from "@/assets/hero-farmland.jpg";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about Shiva Agri Clinic, founded by G. Shiva Kumar, National Youth Awardee (Government of India). We empower farmers with agricultural education, modern technologies, and sustainable practices."
        keywords="about Shiva Agri Clinic, G. Shiva Kumar, National Youth Awardee, agricultural company India, farming solutions, agricultural education"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Shiva Agri Clinic</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Empowering farmers with expert agricultural solutions since our founding by G. Shiva Kumar.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={founderImage} alt="G. Shiva Kumar - Founder" className="rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover" />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-heading font-bold mt-2 mb-6">Founded by G. Shiva Kumar</h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  <strong>Shiva Agri Clinic</strong> is a farmer-focused agricultural education platform dedicated to empowering farmers with practical knowledge, modern farming technologies, and sustainable agricultural practices. Founded by <strong>G. Shiva Kumar</strong>, <strong>National Youth Awardee (Government of India)</strong>, our mission is to bridge the gap between scientific agriculture and field-level farming by delivering reliable, easy-to-understand, and practical information.
                </p>
                <p>
                  Through our digital platforms, we share crop cultivation techniques, pest and disease management, farm mechanization, organic farming, government schemes, farmer success stories, and expert guidance to help farmers improve productivity and profitability.
                </p>
                <p>
                  Shiva Agri Clinic has built a strong presence on <strong>YouTube, Facebook, Instagram, and other social media platforms</strong>, reaching lakhs of farmers with educational videos, field demonstrations, agricultural updates, and innovative farming solutions. Our goal is to create an informed farming community by making quality agricultural knowledge accessible to everyone.
                </p>
                <p className="font-semibold text-foreground/90 italic">
                  At Shiva Agri Clinic, we believe that "Empowering Farmers Through Knowledge and Innovation" is the key to building a sustainable and prosperous future for agriculture.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap mt-6">
                <a href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Youtube className="mr-2 w-4 h-4" />YouTube</Button>
                </a>
                <a href="https://www.instagram.com/shiva_agriclinic/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Instagram className="mr-2 w-4 h-4" />Instagram</Button>
                </a>
                <a href="https://www.facebook.com/share/175Yh7bMWg/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Facebook className="mr-2 w-4 h-4" />Facebook</Button>
                </a>
                <a href="https://x.com/ShivaAgriClinic" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Twitter className="mr-2 w-4 h-4" />Twitter</Button>
                </a>
                <a href="https://www.linkedin.com/in/shiva-agri-clinic-0287483a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Linkedin className="mr-2 w-4 h-4" />LinkedIn</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">Our Intent</span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To empower farmers with modern agricultural knowledge, innovative technologies, and sustainable farming solutions that improve productivity, profitability, and rural livelihoods.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">Our Target</span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To become India's most trusted digital agricultural knowledge platform, inspiring every farmer to adopt smart, sustainable, and profitable farming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Farmer First", desc: "Every decision we make prioritizes farmer welfare." },
              { icon: Target, title: "Excellence", desc: "We strive for excellence in every solution we provide." },
              { icon: Heart, title: "Sustainability", desc: "Promoting eco-friendly and sustainable farming practices." },
              { icon: Award, title: "Innovation", desc: "Embracing modern technology for agricultural advancement." },
            ].map((value) => (
              <div key={value.title} className="bg-card p-6 rounded-2xl text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Connect with our experts today.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
