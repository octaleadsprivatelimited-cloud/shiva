import { Layout } from "@/components/layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";
// To use a custom paddy crop image, import it here and replace heroImage in the backgroundImage style
// Example: import paddyCropImage from "@/assets/paddy-crop.jpg";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Shiva Agri Clinic for expert agricultural consultation. Contact our agricultural experts for personalized farming solutions, crop advisory, and smart farming technologies. Phone: +91 70135 70447"
        keywords="contact Shiva Agri Clinic, agricultural consultation, farming advice, crop advisory contact, agricultural experts India"
      />
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our agricultural experts for personalized consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative p-8 rounded-2xl shadow-lg border border-border overflow-hidden">
              {/* Background Image - Green Paddy Crop with Rice Grains */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${heroImage})`,
                  filter: 'hue-rotate(80deg) saturate(2) brightness(0.85) contrast(1.1)',
                  opacity: 0.25
                }}
              />
              {/* Green tint overlay to enhance paddy field appearance */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.2) 100%)'
                }}
              />
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
              
              {/* Form Content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name *" className="bg-background/90 backdrop-blur-sm border-border/50" />
                    <Input placeholder="Last Name *" className="bg-background/90 backdrop-blur-sm border-border/50" />
                  </div>
                  <Input type="email" placeholder="Email Address *" className="bg-background/90 backdrop-blur-sm border-border/50" />
                  <Input type="tel" placeholder="Phone Number *" className="bg-background/90 backdrop-blur-sm border-border/50" />
                  <Input placeholder="Subject" className="bg-background/90 backdrop-blur-sm border-border/50" />
                  <Textarea placeholder="Your Message *" rows={5} className="bg-background/90 backdrop-blur-sm border-border/50" />
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@shivaagriclinic.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/shiva_agriclinic/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/175Yh7bMWg/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/ShivaAgriClinic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shiva-agri-clinic-0287483a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
