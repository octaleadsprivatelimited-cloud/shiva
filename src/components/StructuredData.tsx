import { useEffect } from "react";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Article" | "Service";
  data?: Record<string, any>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    };

    let structuredData: Record<string, any> = { ...baseData, ...data };

    // Default Organization data
    if (type === "Organization") {
      structuredData = {
        ...structuredData,
        name: "Shiva Agri Clinic",
        url: "https://shivaagriclinic.com",
        logo: "https://shivaagriclinic.com/og-image.png",
        description: "India's leading agricultural solutions provider. Expert crop advisory, pest management, and smart farming technologies.",
        founder: {
          "@type": "Person",
          name: "Shiva Kumar",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-70135-70447",
          contactType: "Customer Service",
          email: "info@shivaagriclinic.com",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
        sameAs: [
          "https://youtube.com/@shivaagriclinic",
          "https://www.instagram.com/shiva_agriclinic/",
          "https://www.facebook.com/share/175Yh7bMWg/",
          "https://x.com/ShivaAgriClinic",
          "https://www.linkedin.com/in/shiva-agri-clinic-0287483a6",
        ],
        ...data,
      };
    }

    // Default WebSite data
    if (type === "WebSite") {
      structuredData = {
        ...structuredData,
        name: "Shiva Agri Clinic",
        url: "https://shivaagriclinic.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://shivaagriclinic.com/knowledge-base?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        ...data,
      };
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `structured-data-${type.toLowerCase()}`;
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`structured-data-${type.toLowerCase()}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
