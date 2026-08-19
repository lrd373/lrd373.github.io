import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { ContextProvider } from "./components/Context/ContextProvider.tsx";
import { Footer } from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ContextProvider>
        <div className="flex min-h-screen flex-col justify-between">
          <NavBar />
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </HashRouter>
  </StrictMode>
);
