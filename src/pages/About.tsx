import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Youtube, Instagram, ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import farmerConsultation from "@/assets/farmer-consultation.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Shiva Agri Clinic</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Empowering farmers with expert agricultural solutions since our founding by Shiva Kumar.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={farmerConsultation} alt="Shiva Kumar consulting farmers" className="rounded-2xl shadow-lg" />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-heading font-bold mt-2 mb-6">Founded by Shiva Kumar</h2>
              <p className="text-muted-foreground mb-4">
                Shiva Agri Clinic was founded with a simple mission: to make expert agricultural knowledge accessible to every farmer in India. Our founder, Shiva Kumar, recognized the challenges faced by farmers and dedicated himself to bridging the gap between traditional farming and modern agricultural science.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we serve over 50,000 farmers across India, providing comprehensive agricultural solutions from crop advisory to smart farming technologies.
              </p>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@ShivaAgriClinic" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Youtube className="mr-2 w-4 h-4" />YouTube</Button>
                </a>
                <a href="https://www.instagram.com/shiva_agriclinic/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Instagram className="mr-2 w-4 h-4" />Instagram</Button>
                </a>
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
