import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Pest Management Strategies for Monsoon Season",
    excerpt: "Learn effective pest control techniques to protect your crops during the monsoon season with our expert guide.",
    category: "Pest Management",
    date: "Dec 28, 2024",
    author: "Shiva Kumar",
    href: "/blog/pest-management-monsoon",
  },
  {
    id: 2,
    title: "Complete Guide to Organic Farming Certification in India",
    excerpt: "Everything you need to know about obtaining organic certification for your farm and accessing premium markets.",
    category: "Organic Farming",
    date: "Dec 25, 2024",
    author: "Shiva Kumar",
    href: "/blog/organic-certification-guide",
  },
  {
    id: 3,
    title: "Smart Irrigation Techniques to Save Water and Boost Yields",
    excerpt: "Discover modern irrigation methods that can help you conserve water while maximizing crop productivity.",
    category: "Smart Farming",
    date: "Dec 20, 2024",
    author: "Shiva Kumar",
    href: "/blog/smart-irrigation",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Latest Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Knowledge Hub
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center text-accent font-semibold hover:gap-2 transition-all mt-4 md:mt-0"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={post.href}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
