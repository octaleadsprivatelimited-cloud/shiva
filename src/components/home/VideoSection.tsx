import { useState } from "react";
import { Play, Youtube, ExternalLink, X, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const videos = [
  { id: "LXF8l0jNKII", title: "Farmer Safety Shoes | Agriculture & Paddy Shoes", category: "Farm Equipment", views: "", duration: "" },
  { id: "po9-ZxJuWok", title: "Elevated Shed Goat & Sheep Farming | Goat Farm", category: "Animal Farming", views: "", duration: "" },
  { id: "UYU4vo_lWbw", title: "Jasmine Cultivation In Telugu | Flowers Farming", category: "Flower Farming", views: "", duration: "" },
  { id: "rGkpq0tbQlM", title: "Biggest Vermicompost Unit | Vermicompost Uses", category: "Organic Farming", views: "", duration: "" },
  { id: "hg6IC4SpMTM", title: "Drip Irrigation Setup", category: "Irrigation", views: "", duration: "" },
  { id: "PuWsQ6NHrdg", title: "GAC Fruit Farming In Telugu", category: "Fruit Farming", views: "", duration: "" },
  { id: "qwlitviu-U8", title: "Largest Pig Farming Unit | Pig Farming In Telugu", category: "Animal Farming", views: "", duration: "" },
  { id: "m2eAMyayS_4", title: "Natural Fertilizers Guide", category: "Organic Farming", views: "", duration: "" },
  { id: "Ge14ghL1cd0", title: "Marut Drones In Agriculture | Spraying Drones", category: "Technology", views: "", duration: "" },
  { id: "fLe62_HXsmw", title: "Madhu Kamini Decoration Leaf Farming", category: "Decoration Crops", views: "", duration: "" },
];

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
      {/* Video Modal - same as Videos page */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
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

      <section id="videos" className="py-12 md:py-20 bg-gradient-navy text-primary-foreground scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
                Video Tutorials
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mt-2">
                Learn from Our YouTube Channel
              </h2>
              <p className="text-primary-foreground/70 mt-2 max-w-xl text-sm md:text-base">
                Subscribe to Shiva Agri Clinic on YouTube for free agricultural education, tips, and success stories.
              </p>
            </div>
            <a
              href="https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 flex justify-center"
            >
              <Button variant="hero" size="default" className="md:text-base">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Subscribe Now
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Video grid - same as Videos page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8 md:mb-12">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => handlePlayVideo(video.id)}
                className="group text-left rounded-xl overflow-hidden border border-primary-foreground/20 bg-primary-foreground/10 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-primary-foreground/10">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary-foreground/70">{video.category}</span>
                  <h3 className="font-semibold mt-1 line-clamp-2 text-primary-foreground">{video.title}</h3>
                  {(video.views || video.duration) && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-primary-foreground/60">
                      {video.views && <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {video.views}</span>}
                      {video.duration && <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {video.duration}</span>}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 p-4 md:p-6 bg-primary-foreground/5 rounded-xl md:rounded-2xl border border-primary-foreground/10">
            {[
              { label: "Subscribers", value: "50K+" },
              { label: "Videos", value: "200+" },
              { label: "Total Views", value: "5M+" },
              { label: "Languages", value: "Hindi & Telugu" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-accent">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/70 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-6 md:mt-8">
            <Link to="/videos">
              <Button variant="whiteOutline" size="sm" className="md:text-sm">
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
