import { cn } from "@/lib/utils";
import { Youtube, Instagram, Facebook, Eye } from "lucide-react";

const socialStats = [
  { 
    value: "6M+", 
    label: "YouTube Subscribers",
    icon: Youtube,
    color: "#FF0000",
    bgColor: "bg-red-500/10 text-red-500"
  },
  { 
    value: "2M+", 
    label: "Instagram Followers",
    icon: Instagram,
    color: "#E1306C",
    bgColor: "bg-pink-500/10 text-pink-500"
  },
  { 
    value: "2.6M+", 
    label: "Facebook Followers",
    icon: Facebook,
    color: "#1877F2",
    bgColor: "bg-blue-500/10 text-blue-500"
  },
  { 
    value: "5B+", 
    label: "Total Views",
    icon: Eye,
    color: "#ff6b35",
    bgColor: "bg-orange-500/10 text-orange-500"
  },
];

export const SocialMediaReachSection = () => {
  return (
    <section id="social-reach" className="py-12 sm:py-16 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Our Social Media's Reach
          </h2>
        </div>

        {/* Modern Grid Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {socialStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative rounded-2xl bg-card border border-border p-5 sm:p-6 md:p-8 flex flex-col justify-between",
                    "shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/30",
                    "transition-all duration-300 ease-in-out group min-h-[160px] sm:min-h-[180px] md:min-h-[220px]"
                  )}
                >
                  {/* Brand-specific subtle background glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" 
                    style={{ backgroundColor: stat.color }}
                  />
                  
                  <div className="flex items-center justify-between mb-6">
                    {/* Brand Icon Container */}
                    <div className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      "group-hover:scale-110",
                      stat.bgColor
                    )}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  
                  <div>
                    {/* Stat Value */}
                    <div 
                      className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-1 tracking-tight"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    {/* Description */}
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-foreground/80 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReachSection;
