import { AboutMe } from "../components/AboutMe";
import { ContactForm } from "../components/ContactForm/ContactForm";
// import { FeaturedMedia } from "../components/FeaturedMedia";
import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";

export const Home = () => {
  return (
    <div>
      <main className="flex w-full flex-col items-center justify-start">
        <Hero />
        <AboutMe />
        <Quote />
        <div className="flex w-full max-w-187.5 flex-col items-start gap-4 self-center p-6 md:p-12 ">
          <h3 className="font-primary text-deep-mauve text-2xl md:text-3xl">
            Get in touch
          </h3>
          <ContactForm />
        </div>
      </main>
    </div>
  );
};
