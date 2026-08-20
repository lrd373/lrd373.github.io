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
        <div className="flex flex-col items-start justify-start gap-6 px-4 py-8 pt-6 lg:w-1/2 lg:px-12 lg:pt-40 lg:pb-12">
          <div className="flex w-full flex-col items-center justify-center lg:gap-4">
            <PageHeader>Teaching</PageHeader>
            <p className="font-secondary text-lg uppercase lg:text-xl">
              Come sing with me!
            </p>
          </div>
          <div>
            <h3 className="font-primary text-2xl lg:text-3xl">Rates</h3>
            <p className="font-secondary text-base lg:text-lg">
              *Free 30-minute consultation lesson for new students
            </p>
            <ul className="font-secondary text-base lg:text-lg">
              <li>30-minute lesson - $40 </li>
              <li>45-minute lesson - $50 </li>
              <li>60-minute lesson - $60 </li>
            </ul>
          </div>
          <div
          // className="max-w-200"
          >
            <h3 className="font-primary text-2xl lg:text-3xl">My Philosophy</h3>
            <p className="font-secondary text-justify text-base lg:text-lg">
              <span className="underline">Everyone</span> can sing, I truly
              believe that. Singing is an instrinsic human act. It communicates
              the waves, rhythm, sway, and pulse of emotion within us in ways
              that words alone often fail to do. To share one's voice can be
              scary, but it is also a joy and a right. None of us sound exactly
              the way we'd like to when we start singing practice &mdash;
              believe me, I've made my share of 'ugly' noises in the practice
              room 👀 &mdash; so I believe voice lessons should be a shame-free,
              supportive space to try new things, play, and find what your
              individual voice does best. Whether your goal is to feel more
              confident singing in your church choir, apply to conservatory, or
              just feel freer singing in the shower, it would be my privilege to
              help you on your journey.
            </p>
          </div>
          <div>
            <h3 className="font-primary text-2xl lg:text-3xl">
              What We Cover in Lessons
            </h3>
            <ul className="font-secondary text-base lg:text-lg">
              <li>Breathing for singing</li>
              <li>Pitch accuracy</li>
              <li>Diction</li>
              <li>Reading & Learning Music</li>
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
