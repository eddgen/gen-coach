import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full mx-auto px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="text-2xl font-extrabold tracking-tight text-gradient-blue"
            onClick={scrollToTop}
          >
            GEN COACH
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/memberships"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Memberships
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Get in touch
          </Button>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="w-full mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/memberships"
              className="py-2 text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Memberships
            </Link>
            <a
              href="#testimonials"
              className="py-2 text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <Link
              to="/contact"
              className="py-2 text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-white/20 hover:bg-white/10 hover:border-white/30"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                onClick={handleSignup}
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
