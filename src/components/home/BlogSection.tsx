import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { blogPosts } from "@/data/blogPosts";

// Get first 3 posts for homepage
const homepagePosts = blogPosts.slice(0, 3);

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
          {homepagePosts.map((post, index) => (
            <ScrollAnimation key={post.id} animation="fade-up" delay={index * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all duration-300 block h-full"
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
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
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
