import { Link } from "react-router-dom";
import { Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Shiva Agri Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Paving the Way for Agricultural Excellence Across India
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded by <strong className="text-foreground">Shiva Kumar</strong>, Shiva Agri Clinic is dedicated to empowering farmers with expert agricultural knowledge, modern farming techniques, and sustainable practices.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to bridge the gap between traditional farming wisdom and modern agricultural science. We provide comprehensive solutions including crop advisory, pest management, soil testing, and smart farming technologies to help farmers across India achieve better yields and improved livelihoods.
            </p>
            <p className="text-muted-foreground mb-8">
              With a growing community of over 50,000 farmers and a presence on YouTube and Instagram, we are committed to making agricultural knowledge accessible to every farmer in India.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.youtube.com/@ShivaAgriClinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Watch Our Videos
                </a>
              </Button>
            </div>
          </div>

          {/* Video Embed */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-primary shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@ShivaAgriClinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
                >
                  <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
                </a>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
