import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router";

export const LogoLink = ({ withSocial }: { withSocial?: boolean }) => {
  return (
    <Link to="/" className="text-light-pink">
      <h1 className="font-logo text-4xl min-[768px]:text-5xl min-[1250px]:text-6xl">
        Lauren DeLucia
      </h1>
      <div className="flex flex-row gap-2">
        <h3 className="font-secondary text-base uppercase md:text-xl">
          soprano
        </h3>
        {withSocial ? (
          <>
            |
            <div className="flex flex-row gap-1">
              <IoLogoInstagram size="24px" color="#f8e7e7" />
              <IoLogoFacebook size="24px" color="#f8e7e7" />
            </div>
          </>
        ) : null}
      </div>
    </Link>
  );
};
