import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "../components/ContactForm/ContactForm";
import smileByFountain from "../assets/DSCF0321.jpg";

export const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <img
        src={smileByFountain}
        alt=""
        className="h-[calc(70vh)] w-full max-w-[1800px] object-cover object-bottom lg:inline-block lg:h-[calc(75vh)]"
      />
      <div className="flex w-full max-w-187.5 flex-col gap-4 self-center px-6 pt-16 pb-32 md:px-12 md:pt-24 md:pb-48">
        <PageHeader>Get In Touch</PageHeader>
        <ContactForm />
      </div>
    </div>
  );
};
