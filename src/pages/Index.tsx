import { Layout } from "@/components/layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import {
  HeroSection,
  StatsSection,
  ServicesSection,
  SolutionsSection,
  AboutSection,
  TestimonialsSection,
  VideoSection,
  GallerySection,
  PartnersSection,
  BlogSection,
  SocialMediaReachSection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Shiva Agri Clinic - India's leading agricultural solutions provider. Expert crop advisory, pest management, organic farming, and smart farming technologies. Serving 50,000+ farmers across India. Founded by Shiva Kumar."
        keywords="agriculture, farming, crop management, pest control, agricultural consulting, smart farming, organic farming, India, Shiva Kumar, agricultural solutions"
      />
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <TestimonialsSection />
      <PartnersSection />
      <SocialMediaReachSection />
      <BlogSection />
    </Layout>
  );
};

export default Index;
