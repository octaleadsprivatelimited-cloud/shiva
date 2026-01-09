import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Search, BookOpen, Leaf, Bug, FlaskConical, Sprout, CloudRain, Droplets, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/gallery/soil-testing.jpg";

const categories = [
  { icon: Leaf, title: "Crop Management", count: 45, desc: "Complete guides on growing various crops" },
  { icon: Bug, title: "Pest & Disease Control", count: 38, desc: "Identification and treatment methods" },
  { icon: FlaskConical, title: "Soil Health", count: 28, desc: "Soil testing and improvement techniques" },
  { icon: Sprout, title: "Organic Farming", count: 32, desc: "Organic practices and certification guides" },
  { icon: CloudRain, title: "Weather & Climate", count: 18, desc: "Seasonal farming and weather adaptation" },
  { icon: Droplets, title: "Irrigation & Water", count: 24, desc: "Water management and irrigation systems" },
];

const articles = [
  { title: "Complete Guide to Rice Cultivation", category: "Crop Management", readTime: "12 min" },
  { title: "Identifying Common Cotton Pests", category: "Pest & Disease Control", readTime: "8 min" },
  { title: "NPK Testing Explained", category: "Soil Health", readTime: "6 min" },
  { title: "Starting Your Organic Farm", category: "Organic Farming", readTime: "15 min" },
  { title: "Monsoon Crop Planning", category: "Weather & Climate", readTime: "10 min" },
  { title: "Drip Irrigation Setup Guide", category: "Irrigation & Water", readTime: "9 min" },
  { title: "Tomato Farming Best Practices", category: "Crop Management", readTime: "11 min" },
  { title: "Natural Pest Repellents", category: "Pest & Disease Control", readTime: "7 min" },
];

const KnowledgeBase = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Knowledge Base</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Explore our comprehensive library of agricultural resources, guides, and best practices.
        </p>
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search articles, guides, and resources..." 
            className="pl-12 h-14 bg-background text-foreground rounded-xl"
          />
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-card p-6 rounded-2xl border border-border hover:border-accent transition-colors group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">{cat.count} articles</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-accent transition-colors">{cat.title}</h3>
              <p className="text-muted-foreground text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular Articles */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Popular Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <div key={article.title} className="bg-card p-5 rounded-xl border border-border hover:border-accent transition-colors group cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <div>
                  <h3 className="font-medium group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.category} • {article.readTime} read</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Our experts are here to help. Reach out for personalized guidance.
        </p>
        <Link to="/contact" className="inline-flex items-center bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors">
          Ask an Expert <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default KnowledgeBase;