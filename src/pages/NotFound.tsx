import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <Layout>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or may have been moved. Return to Shiva Agri Clinic homepage."
        noindex={true}
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-muted py-20">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-base md:text-lg max-w-md mx-auto">
            The page you are looking for does not exist or may have been moved. Please check the URL or return to our homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-accent hover:underline">Home</Link>
              <Link to="/about" className="text-accent hover:underline">About Us</Link>
              <Link to="/services" className="text-accent hover:underline">Services</Link>
              <Link to="/products" className="text-accent hover:underline">Products</Link>
              <Link to="/contact" className="text-accent hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
