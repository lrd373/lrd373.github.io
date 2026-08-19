import neutralHeadshot from "../assets/Neutral Headshot - Full.jpg";
// import desktopHero from "../assets/wide_shot_fountain_large.jpg";
import mobileNeutralHeadshot from "../assets/Neutral Headshot - mobile.jpg";

export const Hero = () => {
  return (
    <div className="relative flex h-[calc(100vh)] w-full flex-col items-end justify-start overflow-hidden">
      <img
        src={neutralHeadshot}
        alt=""
        className="z-1 hidden h-full w-full md:flex md:object-cover"
      />
      <img
        src={mobileNeutralHeadshot}
        alt=""
        className="z-1 h-full w-full object-cover object-bottom-left md:hidden"
      />
    </div>
  );
};
