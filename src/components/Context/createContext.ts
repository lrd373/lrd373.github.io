import { createContext, useContext } from "react";

export const StateContext = createContext<{
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (newValue: boolean) => void;
}>({ isMobileMenuOpen: false, setIsMobileMenuOpen: () => null });

export function useSharedState() {
  return useContext(StateContext);
}
