import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center panel-gothic p-10 max-w-md space-y-4">
        <h1 className="font-gothic text-5xl text-primary text-glow">404</h1>
        <p className="font-pixel text-sm text-muted-foreground">[ file not found ]</p>
        <p className="font-handwritten text-lg text-foreground/60">
          this page doesn't exist.<br />
          or maybe it did, once.<br />
          some things aren't meant to be found.
        </p>
        <Link
          to="/"
          className="inline-block panel-gothic px-4 py-2 font-pixel text-sm text-muted-foreground hover:text-primary hover:border-glow transition-all"
        >
          ✧ return to the glitch
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
