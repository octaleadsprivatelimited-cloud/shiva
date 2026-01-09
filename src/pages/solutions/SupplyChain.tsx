import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck, Package, Store, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import supplyChainImg from "@/assets/supply-chain.jpg";

const services = [
  {
    icon: Package,
    title: "Post-Harvest Handling",
    desc: "Proper cleaning, grading, sorting, and packaging of produce to maintain quality and extend shelf life.",
  },
  {
    icon: Store,
    title: "Storage Solutions",
    desc: "Access to cold storage, warehouses, and proper storage facilities to prevent post-harvest losses.",
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Reliable transportation network connecting farms to markets, processing units, and export hubs.",
  },
  {
    icon: TrendingUp,
    title: "Market Linkages",
    desc: "Direct connections to mandis, wholesale buyers, retailers, and export markets for better prices.",
  },
  {
    icon: Shield,
    title: "Quality Certification",
    desc: "Assistance in obtaining quality certifications like FSSAI, organic certification, and export documentation.",
  },
  {
    icon: Clock,
    title: "Real-time Price Updates",
    desc: "Daily mandi prices and market trends to help you decide the best time and place to sell.",
  },
];

const marketAccess = [
  { name: "Local Mandis", desc: "Connect with nearby agricultural markets" },
  { name: "Wholesale Buyers", desc: "Direct sales to bulk purchasers" },
  { name: "Retail Chains", desc: "Supply to supermarkets and stores" },
  { name: "Food Processors", desc: "Raw material supply agreements" },
  { name: "Export Markets", desc: "International market access" },
  { name: "Online Platforms", desc: "E-commerce and direct-to-consumer" },
];

const SupplyChain = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${supplyChainImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/solutions" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Farm to Market Solutions
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Complete supply chain support from harvest to market. We help you get the best prices by connecting you directly with buyers and eliminating middlemen.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Explore Market Access
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Market Access */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Market Access</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
            Where We Connect You
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {marketAccess.map((market) => (
            <div key={market.name} className="bg-card rounded-lg md:rounded-xl p-4 md:p-5 border border-border text-center hover:border-accent transition-colors">
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{market.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{market.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Supply Chain Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl p-6 md:p-10 border border-border">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Why Choose Us?</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
                Better Prices, Less Hassle
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                By connecting you directly with buyers, we help you get 15-30% better prices compared to traditional channels.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Farmers Served" },
                  { value: "50+", label: "Buyer Network" },
                  { value: "20%", label: "Avg. Price Increase" },
                  { value: "24hr", label: "Market Updates" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-xl md:text-2xl font-heading font-bold text-accent">{stat.value}</div>
                    <p className="text-muted-foreground text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-8xl md:text-9xl">
              🚚
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ready to Get Better Prices?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Register with us to access our buyer network and get real-time market prices.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Register as Seller
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SupplyChain;
