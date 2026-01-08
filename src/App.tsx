import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import KnowledgeBase from "./pages/KnowledgeBase";
import Videos from "./pages/Videos";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import CropAdvisory from "./pages/services/CropAdvisory";
import PestManagement from "./pages/services/PestManagement";
import OrganicFarming from "./pages/services/OrganicFarming";
import Seeds from "./pages/products/Seeds";
import Fertilizers from "./pages/products/Fertilizers";
import Pesticides from "./pages/products/Pesticides";
import Equipment from "./pages/products/Equipment";
import SmartFarming from "./pages/solutions/SmartFarming";
import SustainableAgriculture from "./pages/solutions/SustainableAgriculture";
import CropHealth from "./pages/solutions/CropHealth";
import SupplyChain from "./pages/solutions/SupplyChain";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/crop-advisory" element={<CropAdvisory />} />
          <Route path="/services/pest-management" element={<PestManagement />} />
          <Route path="/services/organic-farming" element={<OrganicFarming />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/seeds" element={<Seeds />} />
          <Route path="/products/fertilizers" element={<Fertilizers />} />
          <Route path="/products/pesticides" element={<Pesticides />} />
          <Route path="/products/equipment" element={<Equipment />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/smart-farming" element={<SmartFarming />} />
          <Route path="/solutions/sustainable-agriculture" element={<SustainableAgriculture />} />
          <Route path="/solutions/crop-health" element={<CropHealth />} />
          <Route path="/solutions/supply-chain" element={<SupplyChain />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
