import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";

import HomePage from "./pages/HomePage";
import MembershipsPage from "./pages/MembershipsPage";
import ContactPage from "./pages/ContactPage";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ScrollAnimation />
      </div>
    </>
  );
}

export default App;
