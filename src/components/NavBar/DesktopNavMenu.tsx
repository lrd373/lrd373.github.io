import { NavLink, useLocation } from "react-router";
import { NAV_LINKS } from "../../constants";
import { LogoLink } from "../LogoLink";

export const DesktopNavMenu = () => {
  const location = useLocation();
  return (
    <div className="bg-deep-mauve-50 hidden h-fit w-screen flex-row items-center justify-between px-12 py-6 lg:flex">
      <LogoLink />
      <nav className="hidden flex-row gap-4 lg:flex">
        {NAV_LINKS.filter((linkObj) => linkObj.buttonText !== "Home").map(
          (linkObj) => {
            const isContact = linkObj.buttonText === "Contact";
            const isCurrentPage = linkObj.href === location?.pathname;
            return (
              <NavLink
                key={linkObj.buttonText}
                to={linkObj.href}
                className={`text-light-pink font-secondary hover:animate-fade-to-fuschia active:animate-fade-to-fuschia border-light-pink h-fit p-2 uppercase ${isCurrentPage && !isContact ? "underline underline-offset-8" : ""} ${isContact ? "rounded-md border" : ""}`}
              >
                {linkObj.buttonText}
              </NavLink>
            );
          }
        )}
      </nav>
    </div>
  );
};
