import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import beforeAfter1 from "@/assets/gallery/before-after-1.jpg";
import farmVisit1 from "@/assets/gallery/farm-visit-1.jpg";
import successStory1 from "@/assets/gallery/success-story-1.jpg";
import soilTesting from "@/assets/gallery/soil-testing.jpg";
import farmerConsultation from "@/assets/farmer-consultation.jpg";
import smartFarming from "@/assets/smart-farming.jpg";

const galleryItems = [
  {
    id: 1,
    image: beforeAfter1,
    title: "Crop Transformation - Before & After",
    category: "Success Story",
  },
  {
    id: 2,
    image: farmVisit1,
    title: "Field Visit - Expert Consultation",
    category: "Farm Visit",
  },
  {
    id: 3,
    image: successStory1,
    title: "Healthy Rice Paddy Harvest",
    category: "Success Story",
  },
  {
    id: 4,
    image: soilTesting,
    title: "Soil Analysis in Progress",
    category: "Soil Testing",
  },
  {
    id: 5,
    image: farmerConsultation,
    title: "One-on-One Farmer Consultation",
    category: "Consultation",
  },
  {
    id: 6,
    image: smartFarming,
    title: "Smart Farming Technology",
    category: "Technology",
  },
];

const categories = ["All", "Success Story", "Farm Visit", "Soil Testing", "Consultation", "Technology"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Success Stories & Farm Visits
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            Explore our journey of transforming farms across India through expert guidance and modern agricultural practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
                selectedCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] sm:text-xs bg-accent/80 text-accent-foreground px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                  {item.category}
                </span>
                <h3 className="text-primary-foreground font-semibold text-xs sm:text-base mt-1 sm:mt-2 line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[80vh] w-full">
              <img
                src={filteredItems[currentImage]?.image}
                alt={filteredItems[currentImage]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-accent text-sm">{filteredItems[currentImage]?.category}</span>
                <h3 className="text-primary-foreground font-heading font-semibold text-xl mt-1">
                  {filteredItems[currentImage]?.title}
                </h3>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
