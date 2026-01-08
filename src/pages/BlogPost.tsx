import { Layout } from "@/components/layout";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="hero">Back to Blog</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop&q=80`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article
              className={cn(
                "prose prose-lg max-w-none",
                "prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground",
                "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4",
                "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3",
                "prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4",
                "prose-ul:text-muted-foreground prose-ul:mb-4",
                "prose-li:mb-2",
                "prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
              )}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Share this article</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            text: post.excerpt,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        }
                      }}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 md:mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80`;
                      }}
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Need Expert Agricultural Advice?
          </h2>
          <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
            Our agricultural experts are here to help you with personalized solutions for your farm.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

