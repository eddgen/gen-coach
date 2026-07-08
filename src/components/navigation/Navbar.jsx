import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../data";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen((prev) => !prev);
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
            onClick={() => {
              scrollToTop();
              if (isMobileMenuOpen) {
                toggleMobileMenu();
              }
            }}
          >
            GEN COACH
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((navLink) => {
            const { id, to, label } = navLink;
            return (
              <Link
                key={id}
                to={to}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {label}
              </Link>
            );
          })}
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

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </header>
  );
};

export default Navbar;
