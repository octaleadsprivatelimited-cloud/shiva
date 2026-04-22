import { Layout } from "@/components/layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Package, type LucideIcon } from "lucide-react";
import heroImage from "@/assets/supply-chain.jpg";
import { useProducts } from "@/hooks/useCmsFirestore";
import { defaultProductHighlights } from "@/data/productHighlights";

type ProductCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  imageUrl?: string;
};

const Products = () => {
  const { data: fsProducts = [] } = useProducts();

  const items: ProductCard[] =
    fsProducts.length > 0
      ? fsProducts.map((p) => ({
          icon: Package,
          title: p.name,
          desc: p.description,
          href: p.href?.trim() ? p.href : "/products",
          imageUrl: p.imageUrl?.trim() || undefined,
        }))
      : defaultProductHighlights.map((p) => ({
          icon: p.icon,
          title: p.title,
          desc: p.desc,
          href: p.href,
        }));

  return (
    <Layout>
      <SEO
        title="Our Products"
        description="Quality agricultural products from Shiva Agri Clinic: High-quality seeds, fertilizers, pesticides, and modern farm equipment. Trusted by farmers across India."
        keywords="agricultural products, seeds, fertilizers, pesticides, farm equipment, farming supplies India"
      />
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Quality agricultural products for better farming.</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((p, index) => (
              <Link
                key={`${p.title}-${index}`}
                to={p.href}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all text-center"
              >
                {p.imageUrl ? (
                  <div className="mb-4 rounded-xl overflow-hidden border border-border aspect-video bg-muted">
                    <img
                      src={p.imageUrl}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.icon className="w-8 h-8 text-accent" />
                  </div>
                )}
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{p.desc}</p>
                <span className="inline-flex items-center text-accent font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
