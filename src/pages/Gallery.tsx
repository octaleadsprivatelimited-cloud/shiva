import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import beforeAfter1 from "@/assets/gallery/before-after-1.jpg";
import farmVisit1 from "@/assets/gallery/farm-visit-1.jpg";
import successStory1 from "@/assets/gallery/success-story-1.jpg";
import soilTesting from "@/assets/gallery/soil-testing.jpg";
import organicFarm from "@/assets/gallery/organic-farm.jpg";
import pestControl from "@/assets/gallery/pest-control.jpg";
import farmerConsultation from "@/assets/farmer-consultation.jpg";
import smartFarming from "@/assets/smart-farming.jpg";

const galleryItems = [
  { id: 1, image: beforeAfter1, title: "Crop Transformation", category: "Success Story" },
  { id: 2, image: farmVisit1, title: "Field Consultation", category: "Farm Visit" },
  { id: 3, image: successStory1, title: "Rice Paddy Success", category: "Success Story" },
  { id: 4, image: soilTesting, title: "Soil Analysis", category: "Services" },
  { id: 5, image: organicFarm, title: "Organic Vegetables", category: "Organic" },
  { id: 6, image: pestControl, title: "Pest Management", category: "Services" },
  { id: 7, image: farmerConsultation, title: "Expert Consultation", category: "Consultation" },
  { id: 8, image: smartFarming, title: "Smart Farming Tech", category: "Technology" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our work across farms in India - from field visits to success stories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">{item.category}</span>
                  <h3 className="text-primary-foreground font-semibold mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
