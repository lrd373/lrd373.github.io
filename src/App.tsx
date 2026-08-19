import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useSharedState } from "./components/Context/createContext";
import { useEffect } from "react";
import { Gallery } from "./pages/Gallery";
import { Media } from "./pages/Media";
import { Schedule } from "./pages/Schedule";
import { Teaching } from "./pages/Teaching";
import { Contact } from "./pages/Contact";

function App() {
  const { isMobileMenuOpen } = useSharedState();
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const lazyImages = document.querySelectorAll<HTMLImageElement>(
      'img[loading="lazy"]'
    );

    lazyImages.forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        // Append class only after the network request finishes successfully
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });
      }
    });
  }, [location.pathname]);

  return (
    // <div className="min-h-screen">
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="media" element={<Media />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="teaching" element={<Teaching />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    // </div>
  );
}

export default App;
