import smileByLake from "../assets/Smile wide shot lake.jpg";
import { PageHeader } from "../components/PageHeader";

export const Teaching = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <img
          src={smileByLake}
          className="h-[calc(80vh)] w-auto object-cover object-[20%] lg:h-screen lg:w-1/2 lg:object-left"
        />
        <div className="flex flex-col items-start justify-start gap-4 px-4 py-6 lg:w-1/2 lg:gap-4 lg:px-8 lg:pt-40 lg:pb-12">
          <div className="flex w-full flex-col items-center justify-center lg:gap-4">
            <PageHeader>Teaching</PageHeader>
            <p className="font-secondary text-lg lg:text-xl uppercase">
              Come sing with me!
            </p>
          </div>
          <div>
            <h3 className="font-primary text-2xl">Rates</h3>
            <p className="font-secondary text-md lg:text-lg">
              *Free 30-minute consultation lesson for new students
            </p>
            <ul className="font-secondary text-md lg:text-lg">
              <li>30-minute lesson - $40 </li>
              <li>45-minute lesson - $50 </li>
              <li>60-minute lesson - $60 </li>
            </ul>
          </div>
          <div>
            <h3 className="font-primary text-2xl">What We Cover in Lessons</h3>
            <ul className="font-secondary text-md lg:text-lg">
              <li>Breathing for singing</li>
              <li>Pitch accuracy</li>
              <li>Diction</li>
              <li>Acting</li>
              <li>Performance anxiety</li>
              <li>Having fun making music!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
