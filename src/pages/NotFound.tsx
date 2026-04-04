import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold font-display gradient-text mb-4">404</h1>
        <p className="text-xl text-foreground font-display mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90"
        >
          <Link to="/">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
