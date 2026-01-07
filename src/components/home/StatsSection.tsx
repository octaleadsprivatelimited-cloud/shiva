import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Users, TrendingUp, Leaf, Shield, IndianRupee } from "lucide-react";

const stats = [
  { value: 50000, suffix: "+", label: "Farmers Empowered", icon: Users },
  { value: 85, suffix: "%", label: "Increase in Crop Yields", icon: TrendingUp },
  { value: 200, suffix: "+", label: "Crops Covered", icon: Leaf },
  { value: 75, suffix: "%", label: "Reduction in Pest Losses", icon: Shield },
  { value: 30, suffix: "%", label: "Rise in Farmer Incomes", icon: IndianRupee },
];

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  return { count, start: () => setHasStarted(true) };
};

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, start } = useCountUp(stat.value);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = stat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [start]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative text-center p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 group",
        "bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10",
        "hover:bg-primary-foreground/10 hover:border-accent/50 hover:scale-105",
        "transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      {/* Icon */}
      <div className={cn(
        "relative mx-auto w-10 h-10 sm:w-14 sm:h-14 mb-2 sm:mb-4 rounded-full flex items-center justify-center",
        "bg-accent/20 text-accent transition-all duration-300",
        "group-hover:bg-accent group-hover:text-primary group-hover:scale-110"
      )}>
        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
      </div>

      {/* Counter */}
      <div className="relative">
        <div className={cn(
          "text-xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent mb-1 sm:mb-2",
          "transition-all duration-300 group-hover:scale-110"
        )}>
          <span className="tabular-nums">{count.toLocaleString()}</span>
          <span className="text-accent/80">{stat.suffix}</span>
        </div>
        
        {/* Animated underline */}
        <div className={cn(
          "h-0.5 sm:h-1 bg-accent/30 rounded-full mx-auto mb-1.5 sm:mb-3 transition-all duration-500",
          isVisible ? "w-8 sm:w-16" : "w-0"
        )} />
        
        <p className="text-primary-foreground/80 text-[10px] sm:text-sm md:text-base font-medium leading-tight">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section id="stats" className="relative bg-primary py-12 sm:py-16 md:py-20 overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Impact
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-2 sm:mb-4 px-2">
            We are not just another agri-clinic
          </h2>
          <p className="text-primary-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            We are the agricultural transformation leaders, empowering farmers across India with expert knowledge and modern solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
