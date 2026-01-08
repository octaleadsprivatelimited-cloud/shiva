import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Calendar, User, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

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
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all block h-full"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80`;
                  }}
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-heading font-semibold mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
