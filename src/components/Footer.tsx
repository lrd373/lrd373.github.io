import { NAV_LINKS } from "../constants";
import { LogoLink } from "./LogoLink";
import { NavLink, useLocation } from "react-router";

export const Footer = () => {
  const location = useLocation();

  return (
    <div className="bg-deep-mauve flex w-full flex-col">
      <div className="flex w-full flex-col items-start justify-between gap-4 p-4 md:flex-row md:p-12">
        <div className="flex max-h-20 flex-col flex-wrap items-start justify-start gap-x-4 md:max-h-40 md:gap-x-6 md:gap-y-2">
          {NAV_LINKS.map((linkObj) => {
            const isContact = linkObj.buttonText === "Contact";
            const isCurrentPage = linkObj.href === location?.pathname;

            return (
              <NavLink
                key={linkObj.href}
                to={linkObj.href}
                className={`text-light-pink hover:animate-fade-to-fuschia active:animate-fade-to-fuschia font-secondary py-2 text-xs uppercase lg:text-base ${isCurrentPage && !isContact ? "underline underline-offset-8" : ""} ${isContact ? "mt-2 rounded-md border px-4" : ""}`}
              >
                {linkObj.buttonText}
              </NavLink>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <LogoLink />
        </div>
      </div>
      <p className="font-secondary text-light-pink mt-4 mb-1 w-75 pl-4 text-left text-[10px] md:w-full md:text-center md:text-xs">
        © 2026 LAUREN DELUCIA. ALL RIGHTS RESERVED.
        <br />
        Website Design by Lauren DeLucia, Lirica Solutions LLC.
      </p>
    </div>
  );
};
