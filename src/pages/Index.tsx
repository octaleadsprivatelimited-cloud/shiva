import { Layout } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  ServicesSection,
  SolutionsSection,
  TestimonialsSection,
  AboutSection,
  PartnersSection,
  BlogSection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <BlogSection />
    </Layout>
  );
};

export default Index;
