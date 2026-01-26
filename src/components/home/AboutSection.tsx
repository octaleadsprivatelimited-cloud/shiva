import { Link } from "react-router-dom";
import { Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Content */}
          <ScrollAnimation animation="slide-right">
            <span className="text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider block mb-1 sm:mb-2">
              About Shiva Agri Clinic
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-1 sm:mt-2 mb-3 sm:mb-4 md:mb-6 leading-tight sm:leading-snug md:leading-normal">
              Paving the Way for Agricultural Excellence Across India
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Founded by <strong className="text-foreground">Shiva Kumar</strong>, Shiva Agri Clinic is dedicated to empowering farmers with expert agricultural knowledge, modern farming techniques, and sustainable practices.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Our mission is to bridge the gap between traditional farming wisdom and modern agricultural science. We provide comprehensive solutions including crop advisory, pest management, soil testing, and smart farming technologies to help farmers across India achieve better yields and improved livelihoods.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              With a growing community of over 50,000 farmers and a presence on YouTube and Instagram, we are committed to making agricultural knowledge accessible to every farmer in India.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 md:gap-4">
              <Button variant="default" size="sm" className="md:size-lg text-xs sm:text-sm md:text-base w-full sm:w-auto h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="sm" className="md:size-lg text-xs sm:text-sm md:text-base w-full sm:w-auto h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-8" asChild>
                <a
                  href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                  <span className="whitespace-nowrap">Watch Our Videos</span>
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Video Embed */}
          <ScrollAnimation animation="slide-left" delay={200}>
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <div className="aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-primary shadow-lg sm:shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <a
                    href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-glow touch-manipulation"
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent-foreground fill-current ml-0.5 sm:ml-1" />
                  </a>
                </div>
              </div>
              {/* Decorative Elements - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-accent/20 rounded-xl sm:rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/20 rounded-lg sm:rounded-xl -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
