import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // If we're already on the homepage, just scroll
    if (location.pathname === "/") {
      scrollToElement();
    } else {
      // Navigate to homepage first, then scroll after a brief delay
      navigate("/");
      setTimeout(scrollToElement, 100);
    }
  }, [navigate, location.pathname]);

  return { scrollToSection };
};
