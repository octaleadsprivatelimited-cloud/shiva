import { useState } from "react";
import { Play, Youtube, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "E34AVct0mew",
    title: "Cotton Pest Management - Complete Guide",
    views: "125K views",
    duration: "15:32",
  },
  {
    id: "E34AVct0mew",
    title: "Soil Testing for Better Crop Yields",
    views: "89K views",
    duration: "12:45",
  },
  {
    id: "E34AVct0mew",
    title: "Organic Farming Success Stories",
    views: "156K views",
    duration: "18:20",
  },
  {
    id: "E34AVct0mew",
    title: "Paddy Cultivation Best Practices",
    views: "98K views",
    duration: "22:10",
  },
];

const featuredVideo = {
  id: "E34AVct0mew",
  title: "Introduction to Shiva Agri Clinic Services",
  description: "Learn about our comprehensive agricultural solutions",
};

export const VideoSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <>
      {/* Video Modal */}
      {playingVideo && (
        <div 
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}

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
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-primary-foreground/10 group cursor-pointer"
              onClick={() => handlePlayVideo(featuredVideo.id)}
            >
              <img
                src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                alt={featuredVideo.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${featuredVideo.id}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded font-semibold">
                  Featured
                </span>
                <h3 className="text-xl font-heading font-semibold mt-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {featuredVideo.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handlePlayVideo(video.id)}
                  className="flex gap-4 p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group cursor-pointer"
                >
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-primary-foreground/10 flex-shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                </div>
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

          {/* View All Link */}
          <div className="text-center mt-8">
            <Link to="/videos">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View All Videos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
