import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

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
    <section id="blog" className="py-12 md:py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
                Latest Resources
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
                Knowledge Hub
              </h2>
            </div>
            <Link
              to="/blog"
              className="flex items-center justify-center md:justify-start text-accent font-semibold hover:gap-2 transition-all mt-3 md:mt-0 text-sm md:text-base"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={post.id} animation="fade-up" delay={index * 100}>
              <Link
                to={post.href}
                className="group bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all duration-300 block h-full"
              >
                <div className="aspect-video bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl">📚</span>
                </div>
                <div className="p-4 md:p-6">
                  <span className="inline-block px-2 md:px-3 py-1 bg-accent/10 text-accent text-[10px] md:text-xs font-semibold rounded-full mb-3 md:mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-base md:text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-muted-foreground">
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
