import { IoIosMenu } from "react-icons/io";
import { useSharedState } from "../Context/createContext";
import { NAV_LINKS } from "../../constants";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import { LogoLink } from "../LogoLink";
import { useState } from "react";

export const MobileNavMenu = () => {
  const [modalAnimation, setModalAnimation] = useState("");
  const { setIsMobileMenuOpen } = useSharedState();

  const closeModal = () => {
    setModalAnimation("animate-slide-out-to-right");
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setModalAnimation("animate-slide-in-from-right");
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <div className="bg-deep-mauve-50 top-0 z-100 flex w-screen flex-row items-center justify-between overflow-x-hidden px-8 py-4 md:px-12 md:pt-8 lg:hidden">
        <LogoLink />
        <HamburgerButton openModal={openModal} />
      </div>
      <MobileNavModal closeModal={closeModal} modalAnimation={modalAnimation} />
    </>
  );
};

const HamburgerButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <button
      className={`relative flex w-fit flex-col items-center justify-center gap-2 overflow-hidden rounded-sm`}
      onClick={openModal}
    >
      <IoIosMenu className="text-light-pink" size="32px" />
    </button>
  );
};

const MobileNavModal = ({
  closeModal,
  modalAnimation
}: {
  closeModal: () => void;
  modalAnimation: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`bg-deep-mauve absolute top-0 left-[calc(100vw)] z-100 flex h-screen w-screen flex-col items-start justify-start p-4 lg:hidden ${modalAnimation}`}
    >
      <CloseButton closeModal={closeModal} />
      {NAV_LINKS.map((linkObj) => {
        const isContact = linkObj.buttonText === "Contact";
        const isCurrentPage = linkObj.href === location?.pathname;
        return (
          <button
            key={linkObj.buttonText}
            onClick={() => {
              closeModal();
              navigate(linkObj.href);
            }}
            className={`font-secondary text-light-pink border-light-pink w-fit py-2 text-base uppercase ${isCurrentPage && !isContact ? "underline underline-offset-8" : ""} ${isContact ? "mt-2 rounded-md border px-4" : ""}`}
          >
            {linkObj.buttonText}
          </button>
        );
      })}
    </div>
  );
};

const CloseButton = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <button className="absolute top-2 right-2" onClick={closeModal}>
      <IoCloseOutline color="#f8e7e7" size="28px" />
    </button>
  );
};
