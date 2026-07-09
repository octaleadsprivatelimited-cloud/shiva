import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { useFirestoreStats } from "@/hooks/useCmsFirestore";

const defaultStats = [
  { 
    value: 50000, 
    suffix: "+", 
    label: "Farmers Empowered", 
    subtext: "Farmers across India trust our advisory services for sustainable crop yields and modern practices.",
    iconName: "Users",
  },
  { 
    value: 85, 
    suffix: "%", 
    label: "Increase in Crop Yields", 
    subtext: "Proven yield increase through scientific crop protection and precise input recommendations.",
    iconName: "TrendingUp",
  },
  { 
    value: 30, 
    suffix: "%", 
    label: "Rise in Farmer Incomes", 
    subtext: "Direct increase in crop quality and efficiency translates to higher household earnings.",
    iconName: "IndianRupee",
  },
  { 
    value: 75, 
    suffix: "%", 
    label: "Reduction in Pest Losses", 
    subtext: "Early diagnostic tools prevent major infestations before they spread.",
    iconName: "Shield",
  },
  { 
    value: 200, 
    suffix: "+", 
    label: "Crops Covered", 
    subtext: "Extensive consulting sheets for grains, organic vegetables, and cash crops.",
    iconName: "Leaf",
  },
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

interface StatItemProps {
  stat: {
    value: string;
    suffix: string;
    label: string;
    subtext: string;
    iconName: string;
  };
  index: number;
  isLarge: boolean;
  className: string;
}

const StatItem = ({ stat, index, isLarge, className }: StatItemProps) => {
  const { count, start } = useCountUp(Number(stat.value) || 0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = (Icons as any)[stat.iconName] || Icons.Leaf;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
        "relative rounded-2xl transition-all duration-500 group overflow-hidden",
        "bg-white/[0.04] backdrop-blur-md border border-white/[0.08]",
        "hover:bg-white/[0.08] hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl",
        className,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
      
      <div className={cn(
        "relative h-full flex flex-col justify-between z-10",
        isLarge ? "sm:flex-row sm:items-center gap-6" : "items-center"
      )}>
        <div className={cn(
          "flex-grow",
          isLarge ? "text-left" : "text-center"
        )}>
          <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-accent mb-2 tracking-tight">
            <span className="tabular-nums">{count.toLocaleString()}</span>
            <span>{stat.suffix}</span>
          </div>
          
          <h3 className="text-base sm:text-lg font-heading font-semibold text-primary-foreground mb-1 leading-snug">
            {stat.label}
          </h3>
          
          <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed max-w-md">
            {stat.subtext}
          </p>
        </div>

        <div className={cn(
          "w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300",
          "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary group-hover:scale-105",
          isLarge ? "mt-4 sm:mt-0" : "mt-4"
        )}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const { data: dbStats } = useFirestoreStats();
  
  const displayStats = dbStats && dbStats.length > 0 
    ? dbStats.filter(s => s.type === "impact") 
    : defaultStats;

  return (
    <section id="stats" className="relative bg-primary py-12 sm:py-16 md:py-20 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {displayStats.map((stat, index) => {
            const isLarge = index < 2;
            const className = isLarge 
              ? "sm:col-span-3 text-left p-6 sm:p-10" 
              : "sm:col-span-2 text-center p-6 sm:p-8";
            
            return (
              <StatItem 
                key={stat.label} 
                stat={stat} 
                index={index} 
                isLarge={isLarge} 
                className={className} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
