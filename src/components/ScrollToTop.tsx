import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

    // Fallback/deferred scroll to ensure it runs after React finishes rendering the DOM
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

