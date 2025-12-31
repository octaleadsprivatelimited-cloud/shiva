import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  { id: 1, title: "Top 10 Pest Management Strategies", category: "Pest Management", date: "Dec 28, 2024", author: "Shiva Kumar" },
  { id: 2, title: "Complete Guide to Organic Farming", category: "Organic Farming", date: "Dec 25, 2024", author: "Shiva Kumar" },
  { id: 3, title: "Smart Irrigation Techniques", category: "Smart Farming", date: "Dec 20, 2024", author: "Shiva Kumar" },
  { id: 4, title: "Soil Health Management Tips", category: "Soil Testing", date: "Dec 15, 2024", author: "Shiva Kumar" },
  { id: 5, title: "Monsoon Crop Planning Guide", category: "Crop Advisory", date: "Dec 10, 2024", author: "Shiva Kumar" },
  { id: 6, title: "Maximizing Yield with Technology", category: "Smart Farming", date: "Dec 5, 2024", author: "Shiva Kumar" },
];

const Blog = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Blog</h1>
        <p className="text-xl text-primary-foreground/80">Latest insights and agricultural knowledge.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:border-accent transition-all group">
              <div className="aspect-video bg-muted flex items-center justify-center text-4xl">📚</div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{p.category}</span>
                <h3 className="text-lg font-heading font-semibold mt-3 mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{p.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
