const partners = [
  "State Agriculture Department",
  "Agricultural Universities",
  "Seed Companies",
  "Fertilizer Manufacturers",
  "Farm Equipment Dealers",
  "Organic Certification Bodies",
  "Farmer Producer Organizations",
  "Banks & Financial Institutions",
  "Research Institutes",
  "Export Agencies",
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-background border-y border-border overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-xl font-heading font-semibold text-muted-foreground">
          Trusted By Leading Agricultural Organizations
        </h3>
      </div>
      
      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4"
            >
              <div className="px-6 py-3 bg-muted rounded-lg border border-border">
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
