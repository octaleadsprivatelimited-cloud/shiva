import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroFarmland from "@/assets/hero-farmland.jpg";
import smartFarming from "@/assets/smart-farming.jpg";
import sustainableFarming from "@/assets/sustainable-farming.jpg";
import supplyChain from "@/assets/supply-chain.jpg";

const slides = [
  {
    id: 1,
    image: heroFarmland,
    title: "India's Leading",
    highlight: "Agricultural Experts",
    subtitle: "for Modern Farming",
    description: "Shiva Agri Clinic provides comprehensive agricultural solutions, expert consultations, and cutting-edge farming technologies to help farmers across India achieve better yields and sustainable practices.",
    cta: { label: "Know More About Us", href: "/about" },
  },
  {
    id: 2,
    image: smartFarming,
    title: "Farming for the Future Needs a",
    highlight: "Whole New Kind of Power",
    subtitle: "",
    description: "Embrace smart farming with advanced technologies including drone monitoring, IoT sensors, and AI-powered crop health analysis to maximize your agricultural output.",
    cta: { label: "Explore Smart Farming", href: "/solutions/smart-farming" },
  },
  {
    id: 3,
    image: sustainableFarming,
    title: "All-in-One Solutions for",
    highlight: "Sustainable Agriculture",
    subtitle: "",
    description: "Whether you're facing climate challenges, pest problems, or need expert guidance on organic farming — Shiva Agri Clinic is your trusted partner in agricultural transformation.",
    cta: { label: "Explore Solutions", href: "/solutions" },
  },
  {
    id: 4,
    image: supplyChain,
    title: "From Farm to Market:",
    highlight: "Complete Supply Chain",
    subtitle: "Solutions",
    description: "Optimize your agricultural supply chain with our comprehensive solutions for sourcing, quality control, and market access to maximize your profits.",
    cta: { label: "Learn More", href: "/solutions/supply-chain" },
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-600",
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute"
                )}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up">
                      {slide.title}{" "}
                      <span className="text-gradient">{slide.highlight}</span>{" "}
                      {slide.subtitle}
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
                      {slide.description}
                    </p>
                    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                      <Button variant="hero" size="xl" asChild>
                        <Link to={slide.cta.href}>{slide.cta.label}</Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "carousel-dot bg-primary-foreground/30",
              index === currentSlide && "active bg-accent"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
