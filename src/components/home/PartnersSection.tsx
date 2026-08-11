import { useBrandPartners } from "@/hooks/useCmsFirestore";
import { defaultBrandPartners } from "@/data/brandPartners";

export const PartnersSection = () => {
  const { data: cmsPartners = [] } = useBrandPartners();
  const partners = [...defaultBrandPartners, ...cmsPartners]
    .sort((a, b) => a.order - b.order)
    .map((partner) => ({ image: partner.logo, alt: partner.name, website: partner.website ?? "" }));
  const splitAt = Math.max(1, Math.ceil(partners.length / 2));
  const partnersRow1 = partners.slice(0, splitAt);
  const partnersRow2 = partners.slice(splitAt).length > 0 ? partners.slice(splitAt) : partnersRow1;

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
          {[...partnersRow1, ...partnersRow1].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 px-6 md:px-8 py-4"
            >
              <a
                href={partner.website || undefined}
                target={partner.website ? "_blank" : undefined}
                rel={partner.website ? "noopener noreferrer" : undefined}
                className="p-1.5 bg-white rounded-lg border border-border flex items-center justify-center h-16 md:h-20 w-32 md:w-40 overflow-hidden"
                aria-label={partner.website ? `Visit ${partner.alt}` : partner.alt}
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-full w-full object-contain"
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
              </a>
            </div>
          ))}
        </div>
        
        {/* Second row - scrolls right (reverse) */}
        <div className="flex animate-marquee-reverse">
          {[...partnersRow2, ...partnersRow2].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 px-6 md:px-8 py-4"
            >
              <a
                href={partner.website || undefined}
                target={partner.website ? "_blank" : undefined}
                rel={partner.website ? "noopener noreferrer" : undefined}
                className="p-1.5 bg-white rounded-lg border border-border flex items-center justify-center h-16 md:h-20 w-32 md:w-40 overflow-hidden"
                aria-label={partner.website ? `Visit ${partner.alt}` : partner.alt}
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-full w-full object-contain"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
