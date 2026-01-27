import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const defaultTitle = "Shiva Agri Clinic - India's Leading Agricultural Solutions Provider";
const defaultDescription = "Shiva Agri Clinic provides expert agricultural consulting, crop management, pest control solutions, and smart farming technologies to farmers across India. Founded by Shiva Kumar.";
const defaultImage = "/og-image.png";
const siteUrl = "https://shivaagriclinic.com";

export const SEO = ({
  title,
  description,
  keywords,
  image = defaultImage,
  type = "website",
  noindex = false,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = title ? `${title} | Shiva Agri Clinic` : defaultTitle;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description || defaultDescription);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    
    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description || defaultDescription, "property");
    updateMetaTag("og:image", fullImage, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:site_name", "Shiva Agri Clinic", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description || defaultDescription);
    updateMetaTag("twitter:image", fullImage);
    updateMetaTag("twitter:site", "@ShivaAgriClinic");

    // Additional SEO tags
    updateMetaTag("author", "Shiva Kumar");
    updateMetaTag("theme-color", "#0d3b2d");
  }, [fullTitle, description, keywords, fullImage, currentUrl, type, noindex]);

  return null;
};

export default SEO;
