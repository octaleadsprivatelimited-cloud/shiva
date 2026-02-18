import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye, X } from "lucide-react";
import heroImage from "@/assets/smart-farming.jpg";

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

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <Layout>
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

      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Videos</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Watch our farming guides, success stories, and expert tips.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => handlePlayVideo(video.id)}
                className="group text-left rounded-xl overflow-hidden border border-border bg-card hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-muted">
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
                  <span className="text-xs text-muted-foreground">{video.category}</span>
                  <h3 className="font-semibold mt-1 line-clamp-2">{video.title}</h3>
                  {(video.views || video.duration) && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      {video.views && <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {video.views}</span>}
                      {video.duration && <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {video.duration}</span>}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
