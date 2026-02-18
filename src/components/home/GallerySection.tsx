import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import beforeAfter1 from "@/assets/gallery/before-after-1.jpg";
import farmVisit1 from "@/assets/gallery/farm-visit-1.jpg";
import successStory1 from "@/assets/gallery/success-story-1.jpg";
import soilTesting from "@/assets/gallery/soil-testing.jpg";
import farmerConsultation from "@/assets/farmer-consultation.jpg";
import smartFarming from "@/assets/smart-farming.jpg";
import img6055 from "@/assets/gallery/6055.jpg.jpeg";
import img6057 from "@/assets/gallery/6057.jpg.jpeg";
import img6131 from "@/assets/gallery/6131.jpg.jpeg";
import img6142 from "@/assets/gallery/6142.jpg.jpeg";
import img6143 from "@/assets/gallery/6143.jpg.jpeg";
import img6172 from "@/assets/gallery/6172.jpg.jpeg";
import img6190 from "@/assets/gallery/6190.jpg.jpeg";
import img6194 from "@/assets/gallery/6194.jpg.jpeg";
import img6202 from "@/assets/gallery/6202.jpg.jpeg";
import img6204 from "@/assets/gallery/6204.jpg.jpeg";
import img6206 from "@/assets/gallery/6206.jpg.jpeg";
import img6215 from "@/assets/gallery/6215.jpg.jpeg";
import img6221 from "@/assets/gallery/6221.jpg.jpeg";
import img6229 from "@/assets/gallery/6229.jpg.jpeg";
import img6262 from "@/assets/gallery/6262.jpg.jpeg";
import img6264 from "@/assets/gallery/6264.jpg.jpeg";
import img6277 from "@/assets/gallery/6277.jpg.jpeg";
import img6282 from "@/assets/gallery/6282.jpg.jpeg";
import img6285 from "@/assets/gallery/6285.jpg.jpeg";
import img6287 from "@/assets/gallery/6287.jpg.jpeg";
import img6291 from "@/assets/gallery/6291.jpg.jpeg";
import img9709 from "@/assets/gallery/9709.jpg.jpeg";

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
  { id: 7, image: img6055, title: "Farm Visit", category: "Farm Visit" },
  { id: 8, image: img6057, title: "Field Work", category: "Farm Visit" },
  { id: 9, image: img6131, title: "Crop Field", category: "Farm Visit" },
  { id: 10, image: img6142, title: "Farm Consultation", category: "Farm Visit" },
  { id: 11, image: img6143, title: "Field Visit", category: "Farm Visit" },
  { id: 12, image: img6172, title: "Agricultural Success", category: "Success Story" },
  { id: 13, image: img6190, title: "Farm & Crops", category: "Farm Visit" },
  { id: 14, image: img6194, title: "Field Day", category: "Farm Visit" },
  { id: 15, image: img6202, title: "Farm Visit", category: "Farm Visit" },
  { id: 16, image: img6204, title: "Crop Health", category: "Success Story" },
  { id: 17, image: img6206, title: "Field Consultation", category: "Farm Visit" },
  { id: 18, image: img6215, title: "Farm Work", category: "Farm Visit" },
  { id: 19, image: img6221, title: "Agricultural Guidance", category: "Consultation" },
  { id: 20, image: img6229, title: "Farm Success", category: "Success Story" },
  { id: 21, image: img6262, title: "Field Visit", category: "Farm Visit" },
  { id: 22, image: img6264, title: "Crop Field", category: "Farm Visit" },
  { id: 23, image: img6277, title: "Farm Consultation", category: "Farm Visit" },
  { id: 24, image: img6282, title: "Field Work", category: "Farm Visit" },
  { id: 25, image: img6285, title: "Agricultural Visit", category: "Farm Visit" },
  { id: 26, image: img6287, title: "Farm & Field", category: "Farm Visit" },
  { id: 27, image: img6291, title: "Crop Success", category: "Success Story" },
  { id: 28, image: img9709, title: "Farm Visit", category: "Farm Visit" },
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
