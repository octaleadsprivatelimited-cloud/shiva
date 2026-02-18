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
  { id: 1, image: beforeAfter1, title: "Crop Transformation", category: "Success Story" },
  { id: 2, image: farmVisit1, title: "Field Consultation", category: "Farm Visit" },
  { id: 3, image: successStory1, title: "Rice Paddy Success", category: "Success Story" },
  { id: 4, image: soilTesting, title: "Soil Analysis", category: "Services" },
  { id: 5, image: organicFarm, title: "Organic Vegetables", category: "Organic" },
  { id: 6, image: pestControl, title: "Pest Management", category: "Services" },
  { id: 7, image: farmerConsultation, title: "Expert Consultation", category: "Consultation" },
  { id: 8, image: smartFarming, title: "Smart Farming Tech", category: "Technology" },
  { id: 9, image: img6055, title: "Farm Visit", category: "Farm Visit" },
  { id: 10, image: img6057, title: "Field Work", category: "Farm Visit" },
  { id: 11, image: img6131, title: "Crop Field", category: "Farm Visit" },
  { id: 12, image: img6142, title: "Farm Consultation", category: "Farm Visit" },
  { id: 13, image: img6143, title: "Field Visit", category: "Farm Visit" },
  { id: 14, image: img6172, title: "Agricultural Success", category: "Success Story" },
  { id: 15, image: img6190, title: "Farm & Crops", category: "Farm Visit" },
  { id: 16, image: img6194, title: "Field Day", category: "Farm Visit" },
  { id: 17, image: img6202, title: "Farm Visit", category: "Farm Visit" },
  { id: 18, image: img6204, title: "Crop Health", category: "Success Story" },
  { id: 19, image: img6206, title: "Field Consultation", category: "Farm Visit" },
  { id: 20, image: img6215, title: "Farm Work", category: "Farm Visit" },
  { id: 21, image: img6221, title: "Agricultural Guidance", category: "Consultation" },
  { id: 22, image: img6229, title: "Farm Success", category: "Success Story" },
  { id: 23, image: img6262, title: "Field Visit", category: "Farm Visit" },
  { id: 24, image: img6264, title: "Crop Field", category: "Farm Visit" },
  { id: 25, image: img6277, title: "Farm Consultation", category: "Farm Visit" },
  { id: 26, image: img6282, title: "Field Work", category: "Farm Visit" },
  { id: 27, image: img6285, title: "Agricultural Visit", category: "Farm Visit" },
  { id: 28, image: img6287, title: "Farm & Field", category: "Farm Visit" },
  { id: 29, image: img6291, title: "Crop Success", category: "Success Story" },
  { id: 30, image: img9709, title: "Farm Visit", category: "Farm Visit" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${farmVisit1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
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
