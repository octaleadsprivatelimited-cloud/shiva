import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Tractor, Settings, Wrench, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/smart-farming.jpg";

const equipmentCategories = [
  {
    name: "Tractors",
    items: ["Mini Tractors (15-25 HP)", "Medium Tractors (30-50 HP)", "Heavy Tractors (50+ HP)"],
    brands: ["Mahindra", "John Deere", "Sonalika", "TAFE"],
    image: "🚜",
  },
  {
    name: "Tillage Equipment",
    items: ["Rotavators", "Cultivators", "Disc Ploughs", "MB Ploughs"],
    uses: ["Soil preparation", "Weed control", "Residue management"],
    image: "⚙️",
  },
  {
    name: "Planting Equipment",
    items: ["Seed Drills", "Planters", "Transplanters", "Dibbers"],
    uses: ["Precision sowing", "Row planting", "Paddy transplanting"],
    image: "🌱",
  },
  {
    name: "Spraying Equipment",
    items: ["Knapsack Sprayers", "Power Sprayers", "Boom Sprayers", "Drone Sprayers"],
    uses: ["Pesticide application", "Foliar feeding", "Large area coverage"],
    image: "💦",
  },
  {
    name: "Harvesting Equipment",
    items: ["Combine Harvesters", "Reapers", "Threshers", "Chaff Cutters"],
    uses: ["Grain harvesting", "Fodder cutting", "Post-harvest processing"],
    image: "🌾",
  },
  {
    name: "Irrigation Equipment",
    items: ["Drip Systems", "Sprinkler Systems", "Pumps", "Pipes & Fittings"],
    uses: ["Water efficiency", "Uniform distribution", "Automation"],
    image: "💧",
  },
];

const services = [
  { icon: Tractor, title: "Equipment Sales", desc: "New and pre-owned farm machinery" },
  { icon: Settings, title: "Installation", desc: "Professional setup and commissioning" },
  { icon: Wrench, title: "Maintenance", desc: "Regular servicing and repairs" },
  { icon: PhoneCall, title: "Support", desc: "24/7 technical assistance" },
];

const Equipment = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/products" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Farm Equipment
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Modern farming equipment and machinery to increase efficiency, reduce labor costs, and maximize your farm's productivity.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Equipment Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((item) => (
            <div key={item.title} className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Equipment Categories */}
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Our Range</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Equipment Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {equipmentCategories.map((category) => (
            <div key={category.name} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6 hover:border-accent transition-colors">
              <div className="text-4xl md:text-5xl mb-4">{category.image}</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Available:</p>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {category.brands && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Brands:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.brands.map((brand) => (
                      <span key={brand} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {category.uses && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Uses:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.uses.map((use) => (
                      <span key={use} className="px-2 py-0.5 bg-muted text-foreground text-xs rounded">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Rental Section */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl p-6 md:p-10 border border-border">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Flexible Options</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
                Equipment Rental Services
              </h2>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Don't want to buy? Rent high-quality farm equipment on hourly, daily, or seasonal basis. Perfect for small farmers and seasonal needs.
              </p>
              <ul className="space-y-2 mb-6">
                {["Tractors with operators", "Harvesters on rent", "Spraying services", "Tillage services"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button>Enquire About Rentals</Button>
              </Link>
            </div>
            <div className="text-center text-8xl md:text-9xl">
              🚜
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 md:py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ready to Modernize Your Farm?</h2>
        <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Get personalized equipment recommendations based on your farm size, crops, and budget.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Equipment;
