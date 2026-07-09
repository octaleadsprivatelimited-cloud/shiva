import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { useFirestoreStats } from "@/hooks/useCmsFirestore";

const defaultSocialStats = [
  { 
    value: "6M+", 
    label: "YouTube Subscribers",
    iconName: "Youtube",
    color: "#FF0000",
    bgColor: "bg-red-500/10 text-red-500"
  },
  { 
    value: "2M+", 
    label: "Instagram Followers",
    iconName: "Instagram",
    color: "#E1306C",
    bgColor: "bg-pink-500/10 text-pink-500"
  },
  { 
    value: "2.6M+", 
    label: "Facebook Followers",
    iconName: "Facebook",
    color: "#1877F2",
    bgColor: "bg-blue-500/10 text-blue-500"
  },
  { 
    value: "5B+", 
    label: "Total Views",
    iconName: "Eye",
    color: "#ff6b35",
    bgColor: "bg-orange-500/10 text-orange-500"
  },
];

export const SocialMediaReachSection = () => {
  const { data: dbStats } = useFirestoreStats();
  
  const displayStats = dbStats && dbStats.length > 0 
    ? dbStats.filter(s => s.type === "social") 
    : defaultSocialStats;

  return (
    <section id="social-reach" className="py-12 sm:py-16 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
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
            {displayStats.map((stat, index) => {
              const Icon = (Icons as any)[stat.iconName] || Icons.Eye;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative rounded-2xl bg-card border border-border p-6 sm:p-8 flex flex-col items-center text-center justify-center",
                    "shadow-sm hover:shadow-lg hover:-translate-y-1.5",
                    "transition-all duration-300 ease-out group min-h-[180px] sm:min-h-[200px] overflow-hidden"
                  )}
                  style={{ 
                    borderTop: `4px solid ${stat.color || '#4caf50'}`,
                    background: `linear-gradient(180deg, ${(stat.color || '#4caf50')}04 0%, transparent 100%)`
                  }}
                >
                  {/* Brand Icon Container */}
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                    "group-hover:scale-110 group-hover:shadow-sm",
                    stat.bgColor
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Stat Value */}
                  <div 
                    className="text-3xl sm:text-4xl font-heading font-extrabold mb-1 tracking-tight transition-transform duration-300 group-hover:scale-105"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  
                  {/* Description */}
                  <div className="text-xs sm:text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground leading-snug">
                    {stat.label}
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
