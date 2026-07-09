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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {displayStats.map((stat, index) => {
              const Icon = (Icons as any)[stat.iconName] || Icons.Eye;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative rounded-2xl bg-card border border-border p-5 sm:p-6 md:p-8 flex flex-col justify-between",
                    "shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/30",
                    "transition-all duration-300 ease-in-out group min-h-[160px] sm:min-h-[180px] md:min-h-[220px]"
                  )}
                >
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none" 
                    style={{ backgroundColor: stat.color }}
                  />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      "group-hover:scale-110",
                      stat.bgColor
                    )}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-1 tracking-tight"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
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
