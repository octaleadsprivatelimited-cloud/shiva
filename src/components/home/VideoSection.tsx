import { Play, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Complete Guide to Cotton Pest Management",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "125K views",
    duration: "15:32",
  },
  {
    id: 2,
    title: "Soil Testing for Better Crop Yields",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "89K views",
    duration: "12:45",
  },
  {
    id: 3,
    title: "Organic Farming Success Stories",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "156K views",
    duration: "18:20",
  },
];

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Video Tutorials
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
              Learn from Our YouTube Channel
            </h2>
            <p className="text-primary-foreground/70 mt-2 max-w-xl">
              Subscribe to Shiva Agri Clinic on YouTube for free agricultural education, tips, and success stories.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@ShivaAgriClinic"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <Button variant="hero" size="lg">
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Featured Video */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary-foreground/10 group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded font-semibold">
                Featured
              </span>
              <h3 className="text-xl font-heading font-semibold mt-2">
                Introduction to Shiva Agri Clinic Services
              </h3>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Learn about our comprehensive agricultural solutions
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {videos.map((video) => (
              <a
                key={video.id}
                href="https://www.youtube.com/@ShivaAgriClinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
              >
                <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-primary-foreground/10 flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-accent-foreground fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 text-xs bg-primary/80 px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-primary-foreground/60 text-xs mt-1">
                    Shiva Agri Clinic
                  </p>
                  <p className="text-primary-foreground/60 text-xs">
                    {video.views}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10">
          {[
            { label: "Subscribers", value: "50K+" },
            { label: "Videos", value: "200+" },
            { label: "Total Views", value: "5M+" },
            { label: "Languages", value: "Hindi & Telugu" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                {stat.value}
              </div>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
