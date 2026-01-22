import { Layout } from "@/components/layout";
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
