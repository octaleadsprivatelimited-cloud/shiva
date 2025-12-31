import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 50000, suffix: "+", label: "Farmers Empowered" },
  { value: 85, suffix: "%", label: "Increase in Crop Yields" },
  { value: 200, suffix: "+", label: "Crops Covered" },
  { value: 75, suffix: "%", label: "Reduction in Pest Losses" },
  { value: 30, suffix: "%", label: "Rise in Farmer Incomes" },
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
      setCount(Math.floor(progress * end));
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
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
        "text-center p-6 animate-slide-up",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-primary-foreground/70 text-sm md:text-base">{stat.label}</p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            We are not just another agri-clinic
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            We are the agricultural transformation leaders, empowering farmers across India with expert knowledge and modern solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
