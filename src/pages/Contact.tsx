import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "../components/ContactForm/ContactForm";
import smileByFountain from "../assets/DSCF0321.jpg";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <img
        src={smileByFountain}
        alt=""
        className="h-[calc(70vh)] lg:h-[calc(75vh)] max-w-[1800px] w-full object-cover object-bottom lg:inline-block"
      />
      <div className="flex flex-col w-full self-center max-w-187.5 gap-4 px-6 pb-32 pt-16 md:px-12 md:pb-48 md:pt-24">
        <PageHeader>Contact Me</PageHeader>
        <ContactForm />
      </div>
    </div>
  );
};
