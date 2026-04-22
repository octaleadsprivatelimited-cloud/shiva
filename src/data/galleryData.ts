import farmVisit1 from "@/assets/gallery/farm-visit-1.jpg";
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

export const defaultGalleryHero = farmVisit1;

export type DefaultGalleryItem = {
  id: number;
  image: string;
  title: string;
  category: string;
};

export const defaultGalleryItems: DefaultGalleryItem[] = [
  { id: 1, image: img6055, title: "Farm Visit", category: "Farm Visit" },
  { id: 2, image: img6057, title: "Field Work", category: "Farm Visit" },
  { id: 3, image: img6131, title: "Crop Field", category: "Farm Visit" },
  { id: 4, image: img6142, title: "Farm Consultation", category: "Farm Visit" },
  { id: 5, image: img6143, title: "Field Visit", category: "Farm Visit" },
  { id: 6, image: img6172, title: "Agricultural Success", category: "Success Story" },
  { id: 7, image: img6190, title: "Farm & Crops", category: "Farm Visit" },
  { id: 8, image: img6194, title: "Field Day", category: "Farm Visit" },
  { id: 9, image: img6202, title: "Farm Visit", category: "Farm Visit" },
  { id: 10, image: img6204, title: "Crop Health", category: "Success Story" },
  { id: 11, image: img6206, title: "Field Consultation", category: "Farm Visit" },
  { id: 12, image: img6215, title: "Farm Work", category: "Farm Visit" },
  { id: 13, image: img6221, title: "Agricultural Guidance", category: "Consultation" },
  { id: 14, image: img6229, title: "Farm Success", category: "Success Story" },
  { id: 15, image: img6262, title: "Field Visit", category: "Farm Visit" },
  { id: 16, image: img6264, title: "Crop Field", category: "Farm Visit" },
  { id: 17, image: img6277, title: "Farm Consultation", category: "Farm Visit" },
  { id: 18, image: img6282, title: "Field Work", category: "Farm Visit" },
  { id: 19, image: img6285, title: "Agricultural Visit", category: "Farm Visit" },
  { id: 20, image: img6287, title: "Farm & Field", category: "Farm Visit" },
  { id: 21, image: img6291, title: "Crop Success", category: "Success Story" },
  { id: 22, image: img9709, title: "Farm Visit", category: "Farm Visit" },
];
