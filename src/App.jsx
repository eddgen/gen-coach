import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/MyCarousel";
import ScrollAnimation from "./components/ScrollAnimation";
import CardsSection from "./components/Cards";
import Memberships from "./components/Memberships";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Carousel />
                <CardsSection />
                <ScrollAnimation />
              </>
            }
          />
          <Route
            path="/memberships"
            element={
              <>
                <Memberships />
                <ScrollAnimation />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <ScrollAnimation />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
