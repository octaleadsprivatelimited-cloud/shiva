import { useState, useEffect } from "react";
import { Cookie, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COOKIE_CONSENT_KEY = "shiva_agri_cookie_consent";
const COOKIE_EXPIRY_DAYS = 30; // 1 month

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const checkCookieConsent = () => {
      const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);
      
      if (consentData) {
        try {
          const { accepted, expiry } = JSON.parse(consentData);
          const now = new Date().getTime();
          
          // If expiry date hasn't passed, don't show
          if (accepted && expiry && now < expiry) {
            return;
          }
        } catch (e) {
          // Invalid data, show consent
        }
      }
      
      // Show consent after a small delay for better UX
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    };

    checkCookieConsent();
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
    
    const consentData = {
      accepted: true,
      expiry: expiryDate.getTime(),
      timestamp: new Date().getTime(),
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    
    // Animate out
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 transition-all duration-300 ease-out",
        // Add bottom margin on mobile to avoid WhatsApp button overlap
        "mb-16 sm:mb-0",
        isAnimating
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* Decorative background elements - hidden on very small screens */}
          <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="hidden sm:block absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Content */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {/* Cookie Icon */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/20 shadow-lg">
                <Cookie className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-accent" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 w-full sm:w-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground mb-1.5 sm:mb-2 flex items-center gap-2 justify-center sm:justify-start">
                <span>We Value Your Privacy</span>
                <span className="text-xl sm:text-2xl">🍪</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center sm:text-left">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground justify-center sm:justify-start">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent flex-shrink-0" />
                  <span>Essential</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent flex-shrink-0" />
                  <span>Analytics</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent flex-shrink-0" />
                  <span>Personalized</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <Button
                onClick={acceptCookies}
                variant="hero"
                size="lg"
                className="w-full sm:w-auto whitespace-nowrap shadow-lg hover:shadow-glow text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6 md:px-8"
              >
                Accept All
              </Button>
              <Button
                onClick={acceptCookies}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="ml-1 sm:ml-2">Decline</span>
              </Button>
            </div>
          </div>

          {/* Progress bar indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-muted overflow-hidden rounded-b-xl sm:rounded-b-2xl">
            <div className="h-full bg-gradient-to-r from-accent via-primary to-accent animate-pulse" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

