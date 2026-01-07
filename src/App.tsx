import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/crop-advisory" element={<CropAdvisory />} />
          <Route path="/services/pest-management" element={<PestManagement />} />
          
          <Route path="/services/organic-farming" element={<OrganicFarming />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/*" element={<Blog />} />
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
