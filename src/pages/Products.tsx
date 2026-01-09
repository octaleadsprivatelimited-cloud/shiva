import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Wheat, Beaker, Cog } from "lucide-react";
import heroImage from "@/assets/supply-chain.jpg";

const products = [
  { icon: Wheat, title: "Seeds", desc: "High-quality seeds for maximum yield.", href: "/products/seeds" },
  { icon: Beaker, title: "Fertilizers & Pesticides", desc: "Premium quality agricultural inputs.", href: "/products/fertilizers" },
  { icon: Cog, title: "Farm Equipment", desc: "Modern farming equipment solutions.", href: "/products/equipment" },
];

const Products = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">Quality agricultural products for better farming.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link key={p.title} to={p.href} className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-muted-foreground mb-4">{p.desc}</p>
              <span className="inline-flex items-center text-accent font-medium">Learn More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
