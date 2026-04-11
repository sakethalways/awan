import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open — use class toggle
  // instead of inline style so React navigation doesn't leave it stuck
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? "glass-strong shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-foreground">
              AWAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — uses grid row trick for smooth height animation */}
      <div
        ref={menuRef}
        className="lg:hidden grid"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "grid-template-rows",
        }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border bg-card/95 backdrop-blur-2xl px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground active:text-foreground active:bg-muted/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold h-12 text-base"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </nav>

    {/* Backdrop overlay — OUTSIDE nav so it sits below it in the DOM,
        covers the entire page content and blurs it */}
    {isOpen && (
      <div
        className="lg:hidden fixed inset-0 z-40 bg-background/90 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />
    )}
    </>
  );
};

export default Navbar;
