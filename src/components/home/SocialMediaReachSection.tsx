import { cn } from "@/lib/utils";

const socialStats = [
  { 
    value: "6M+", 
    label: "YouTube Subscribers"
  },
  { 
    value: "2M+", 
    label: "Instagram Followers"
  },
  { 
    value: "2.6M+", 
    label: "Facebook Followers"
  },
  { 
    value: "5B+", 
    label: "Total Views"
  },
];

export const SocialMediaReachSection = () => {
  return (
    <section id="social-reach" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider block mb-1 sm:mb-2">
            Our Impact
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight sm:leading-normal">
            Our Social Media's Reach
          </h2>
        </div>

        {/* Circular Stats Cards - Matching Image Design */}
        <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
          <div className="flex flex-nowrap sm:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto min-w-max sm:min-w-0">
            {socialStats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex-shrink-0",
                  "w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]",
                  "rounded-full",
                  "bg-white border border-gray-200",
                  "flex flex-col items-center justify-center text-center",
                  "shadow-sm hover:shadow-md",
                  "transition-all duration-300 ease-in-out",
                  "hover:-translate-y-1"
                )}
              >
                {/* Large Bold Number - Orange-Red */}
                <div 
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-1.5 sm:mb-3"
                  style={{ color: '#ff6b35' }}
                >
                  {stat.value}
                </div>
                
                {/* Descriptive Label - Black */}
                <div className="text-[10px] sm:text-sm md:text-base font-normal text-foreground px-2 sm:px-4 leading-tight sm:leading-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReachSection;

