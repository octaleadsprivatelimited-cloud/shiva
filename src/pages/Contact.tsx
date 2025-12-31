import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch with our agricultural experts for personalized consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name *" />
                  <Input placeholder="Last Name *" />
                </div>
                <Input type="email" placeholder="Email Address *" />
                <Input type="tel" placeholder="Phone Number *" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message *" rows={5} />
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
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
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@ShivaAgriClinic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/shiva_agriclinic/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5" />
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
