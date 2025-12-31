import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-muted">
        <div className="text-center px-4">
          <h1 className="text-8xl font-heading font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
