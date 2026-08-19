"use client";

import { useState } from "react";
import { StateContext } from "./createContext";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <StateContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </StateContext.Provider>
  );
}
