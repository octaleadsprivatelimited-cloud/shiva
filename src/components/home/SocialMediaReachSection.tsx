import { cn } from "@/lib/utils";

const socialStats = [
  { value: "6M+", label: "Youtube" },
  { value: "2M+", label: "Instagram" },
  { value: "2.6M+", label: "Facebook" },
  { value: "5B+", label: "Views" },
];

export const SocialMediaReachSection = () => {
  return (
    <section id="social-reach" className="py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Our Social Media's Reach
          </h2>
        </div>

        {/* Stats Grid - 2x2 layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {socialStats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "relative p-6 md:p-8 rounded-xl md:rounded-2xl",
                "bg-[#f0f8f2] border border-[#d4e8d9]",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-lg hover:-translate-y-1 hover:border-accent/30",
                "flex flex-col items-center justify-center",
                "min-h-[140px] md:min-h-[160px]"
              )}
            >
              {/* Number - Bold black */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-2 md:mb-3">
                {stat.value}
              </div>
              
              {/* Label - Regular black */}
              <div className="text-base md:text-lg lg:text-xl font-normal text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaReachSection;

