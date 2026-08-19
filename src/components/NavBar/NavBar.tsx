"use client";

import { MobileNavMenu } from "./MobileNavMenu";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);
  return (
    <div className="fixed top-0 z-100 h-fit w-screen">
      <MobileNavMenu />
      <DesktopNavMenu />
    </div>
  );
};
