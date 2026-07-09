import { navLinks } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";


const MobileMenu = ({isMobileMenuOpen, toggleMobileMenu}) => {
  const navigate = useNavigate();
  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
      <div className="w-full mx-auto px-4 py-4 flex flex-col gap-4">
        {navLinks.map((navLink) => {
          const { id, to, label } = navLink;
          return(<Link
            key={id}
            to={to}
            className="py-2 text-sm font-medium"
            onClick={toggleMobileMenu}
          >
            {label}
          </Link>);
        })}
        <div className="flex flex-col gap-2 pt-2">
          <Button
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            onClick={() => {
              navigate("/contact");
              toggleMobileMenu();
            }}
          >
            Ia legătura
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
