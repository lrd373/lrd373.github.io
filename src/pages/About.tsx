import leanOnTree from "../assets/DSCF0384 color adjust.jpeg";
import { PageHeader } from "../components/PageHeader";

const BioParagraph = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={`font-secondary lg:pl-unset text-justify text-sm leading-6 max-lg:px-3 lg:col-span-full lg:row-span-1 lg:pr-5 lg:text-lg lg:leading-8 ${className}`}
    >
      {children}
    </p>
  );
};

export const About = () => {
  return (
    <main className="h-full w-screen">
      <div className="flex flex-col gap-3 pb-6 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-3">
        <img
          loading="lazy"
          src={leanOnTree}
          className="h-[60vh] max-h-233 w-full object-cover lg:col-span-1 lg:row-span-5 lg:row-start-1 lg:h-screen"
        />
        <div className="pt-5 pl-3 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:pt-50 lg:pb-5">
          <PageHeader>Biography</PageHeader>
        </div>
        <BioParagraph className="lg:col-start-2 lg:row-start-2">
          Soprano Lauren DeLucia is a versatile singing actress who is equally
          passionate about operatic and concert repertoire. In 2026, she made
          her Carnegie Hall debut with the Arcadia Symphony chorus in their
          America 250 celebration. She also performed a selection of new
          compositions by Jake Landau and emerging composers with The New Voice
          Festival, and returned as a section leader with Voices Chorale NJ.
        </BioParagraph>
        <BioParagraph className="lg:col-start-2 lg:row-start-3">
          In previous seasons, Lauren has appeared as a soloist in several
          concert works including Vivaldi's <em>Gloria</em>, Mozart's{" "}
          <em>Requiem</em>, Saint-Saëns's <em>Christmas Oratorio</em>, and J.S.
          Bach's <em>Magnificat</em>. Previous operatic roles include Armide
          (Lully's <em>Armide</em>), Casilda (Gilbert and Sullivan's{" "}
          <em>The Gondoliers</em>), and First Lady (<em>The Magic Flute</em>
          ).
        </BioParagraph>
        <BioParagraph className="lg:col-start-2">
          Lauren is a great supporter of contemporary music as well. During her
          Masters at the Mannes School of Music, she sang in the U.S. premiere
          of Carl Davis's <em>Last Train to Tomorrow</em> at Alice Tully Hall,
          and had the opportunity to work on Steve Reich's <em>Tehillim</em>{" "}
          with the Mannes Orchestra, conducted by Alan Pierson.
        </BioParagraph>
        <BioParagraph className="max-lg:pl-4 lg:col-start-1 xl:col-start-2">
          With duel Bachelor of Arts degrees in Music Performance and
          Linguistics from Duke University, Lauren has a deep love of both music
          and language study. While at Mannes, she tutored students from across
          the New School in French language; from beginners to advanced students
          to singers polishing their pronunciation for singing. In high school,
          she received the Prix d'Excellence in French from Princeton University
          and the French Government, and then specialized in French linguistics
          at Duke. After college, she trained Opera America employees in French
          pronunciation in preparation for their annual conference in Montréal.
        </BioParagraph>
        <BioParagraph className="md:col-span-1 md:col-start-2 lg:col-span-full lg:col-start-1 lg:pl-4">
          Lauren also loves inspiring a passion for opera and music in new
          audiences as much as she can. For the past several years, she has sung
          at the annual Young Composers Project and fundraiser concerts for
          Voices Chorale NJ, supporting access to music education in New Jersey.
          During an internship in arts education at Opera America, she organized
          the first several meetings of the New York council of Opera Teens—a
          national initiative to empower high schoolers to pursue their
          interests in opera—including outdoor opera screenings at the
          Metropolitan Opera and performances at senior living establishments
          throughout New York City.
        </BioParagraph>
        <BioParagraph className="lg:col-span-full lg:pl-4">
          She now hopes to encourage a lifelong love of music-making in her
          private vocal studio, based out of Morris Plains, New Jersey, where
          she lives with her partner Rob and her two rambunctious cats, Momo and
          Gigi.
        </BioParagraph>
      </div>
    </main>
  );
};
