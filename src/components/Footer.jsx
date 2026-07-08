import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { siFacebook, siInstagram, siX, siYoutube } from "simple-icons";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SimpleIcon from "./SimpleIcon";
import { navLinks } from "../data";

const footerLinks = [{ id: 0, to: "/", label: "Home" }, ...navLinks];

const socialLinks = [
  { id: "facebook", href: "#", label: "Facebook", icon: siFacebook },
  { id: "instagram", href: "#", label: "Instagram", icon: siInstagram },
  { id: "x-twitter", href: "#", label: "X", icon: siX },
  { id: "youtube", href: "#", label: "YouTube", icon: siYoutube },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO
    setEmail("");
  };

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-extrabold tracking-tight text-gradient-blue">
                GEN COACH
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform your body and mind with our premier fitness
              experience. Your journey to a better you starts here.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ id, href, label, icon }) => (
                <a
                  key={id}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <SimpleIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ id, to, label }) => (
                <li key={id}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for fitness tips, updates, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-r-none"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gen Coach. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
