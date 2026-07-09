import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import guy from "../assets/images/tough-guy.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="animate-on-scroll relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Main content */}
      <div className="relative z-10 px-16 py-10 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left animate-fade-in-left">
          <p className="text-sm md:text-base font-semibold tracking-wider text-gray-300 mb-4">
            TRANSFORMĂ-ȚI CORPUL, TRANSFORMĂ-ȚI VIAȚA
          </p>
          <h1 className=" text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ">
            Descoperă-ți Noua Versiune
            <br />
            <span className="text-gradient-purple">GEN coaching</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Experimentează noua generație de fitness cu cunoștințe de ultimă
            oră, antrenori dedicați și o comunitate care te susține.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:via-blue-700  hover:via-25% hover:to-pink-700 text-white text-lg py-6 px-8 font-medium group"
              onClick={() => navigate("/contact")}
            >
              Începe-ți Călătoria
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10 hover:border-white/30 text-lg py-6 px-8"
              onClick={scrollToFeatures}
            >
              Explorează
            </Button>
          </div>
        </div>
        <div className="md:block relative animate-fade-in-right">
          <div className="aspect-square relative overflow-hidden rounded-full border-4 border-white/10 glass-card">
            <img
              src={guy}
              alt="Antrenament Fitness"
              className="absolute inset-0 w-full h-full object-cover object-[75%_50%] scale-130"
            />
            <div className="absolute inset-0 bg-linear-to-br "></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
        <span className="text-sm mb-2">Derulează pentru a explora</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
