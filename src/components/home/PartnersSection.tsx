import partner1 from "@/assets/3550.webp";
import partner2 from "@/assets/3608.jpg.jpeg";
import partner3 from "@/assets/3611.png";
import partner4 from "@/assets/3640.jpg.jpeg";
import partner5 from "@/assets/3708.png";
import partner6 from "@/assets/3720.png";
import partner7 from "@/assets/3818.jpg.jpeg";
import partner8 from "@/assets/3819.jpg.jpeg";
import partner9 from "@/assets/IMG_20241103_103412.jpg.jpeg";
import partner10 from "@/assets/Untitled-1-17.jpg.jpeg";

const partners = [
  { image: partner1, alt: "Partner Brand 1" },
  { image: partner2, alt: "Partner Brand 2" },
  { image: partner3, alt: "Partner Brand 3" },
  { image: partner4, alt: "Partner Brand 4" },
  { image: partner5, alt: "Partner Brand 5" },
  { image: partner6, alt: "Partner Brand 6" },
  { image: partner7, alt: "Partner Brand 7" },
  { image: partner8, alt: "Partner Brand 8" },
  { image: partner9, alt: "Partner Brand 9" },
  { image: partner10, alt: "Partner Brand 10" },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-background border-y border-border overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-xl font-heading font-semibold text-muted-foreground">
          Associated Brand Partners
        </h3>
      </div>
      
      {/* Two-line Zig-zag Marquee */}
      <div className="relative overflow-hidden space-y-4">
        {/* First row - scrolls left */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 px-6 md:px-8 py-4"
            >
              <div className="px-4 md:px-6 py-3 bg-muted rounded-lg border border-border flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-muted-foreground text-xs">Partner Logo</span>';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - scrolls right (reverse) */}
        <div className="flex animate-marquee-reverse">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 px-6 md:px-8 py-4"
            >
              <div className="px-4 md:px-6 py-3 bg-muted rounded-lg border border-border flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-muted-foreground text-xs">Partner Logo</span>';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
