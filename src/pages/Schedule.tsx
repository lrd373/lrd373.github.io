import { Link } from "react-router";
import horizontalCanal from "../assets/Smile horizontal canal.jpg";
import verticalCanal from "../assets/Smile vertical canal.jpg";
import { PageHeader } from "../components/PageHeader";
// import { IoLocationOutline } from "react-icons/io5";

const PerformanceListing = ({
  title,
  location,
  date,
  role,
  link
}: {
  title: string;
  location: string;
  date: string;
  role?: string;
  link?: string;
}) => (
  <div className="align-center font-secondary border-deep-mauve flex w-full max-w-175 flex-col gap-2 border p-4">
    <p className="text-base md:text-lg">{date}</p>
    {role ? <h4 className="font-primary text-xl md:text-2xl">{role}</h4> : null}
    <h4 className="text-2xl">{title}</h4>
    <p className="text-base md:text-lg">{location}</p>
    {link ? (
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-secondary flex w-full cursor-pointer flex-row justify-center hover:underline md:justify-start md:text-lg"
      >
        Info &gt;&gt;
      </Link>
    ) : null}
  </div>
);

export const Schedule = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <img
        loading="lazy"
        src={horizontalCanal}
        className="h-[calc(100vh - 64px)] hidden w-auto object-cover lg:inline-block"
      />
      <img
        loading="lazy"
        src={verticalCanal}
        className="h-[calc(100vh - 64px)] inline-block w-auto object-cover object-top md:hidden"
      />
      <div className="flex w-full flex-col items-center gap-4 px-4 py-6 text-center md:gap-10 md:p-12 md:text-left">
        <PageHeader>Schedule</PageHeader>
        <h2 className="font-primary text-2xl">Upcoming Performances</h2>
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4">
          <PerformanceListing
            role="Soloist"
            title="Fall Fundraising Concert"
            location="Bishop Jane United Methodist Church, Basking Ridge, New Jersey"
            date="October 25, 2026"
            link="https://www.bjumc.org/all-events"
          />
          <PerformanceListing
            role="Choral Scholar"
            title="December Holiday Concert, Voices Chorale NJ"
            location="Trinity Church, Princeton, New Jersey"
            date="December 12, 2026 at 4:00 PM"
          />
          <PerformanceListing
            role="Choral Scholar"
            title="Spring Concert, Voices Chorale NJ"
            location="Trinity Church, Princeton, New Jersey"
            date="May 8, 2026 at 4:00 PM"
          />
        </div>
        <h2 className="font-primary text-2xl">Past Performances</h2>
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4">
          <PerformanceListing
            role="Soprano"
            title="America Celebrates 250, Arcadia Symphony"
            location="Carnegie Hall, New York City"
            date="June 30, 2026"
            link="https://www.carnegiehall.org/Calendar/2026/06/30/America-Celebrates-250-0800PM"
          />
          <PerformanceListing
            title="Immortale, The New Voice Festival"
            location="The Theatre at St. Jeans, New York City"
            date="June 8, 2026"
            link="https://events.ticketleap.com/tickets/midatlantic-artistic-productions/new-voice-festival-presents-a-concert-of-contemporary-music"
          />
          <PerformanceListing
            role="Alto Choral Scholar"
            title="An American Tapestry, Voices Chorale NJ"
            location="Trinity Church, Princeton, New Jersey"
            date="May 2, 2026"
          />
        </div>
      </div>
    </div>
  );
};
