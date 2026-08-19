import montclairEarlyMusic from "../assets/montclair_early_music.jpg";
import armideCastingSpell from "../assets/armide-2019/armide_casting_spell.webp";
import armide1 from "../assets/armide-2019/Armide+Action+Shot+1.webp";
import armide2 from "../assets/armide-2019/Armide+Action+Shot+2.webp";
import armide3 from "../assets/armide-2019/Armide+Action+Shot+3.webp";
import armide4 from "../assets/armide-2019/Armide+Action+Shot+4.webp";
// import armide5 from "../assets/armide-2019/Armide Action Shot 2.jpeg";
import laHaine from "../assets/armide-2019/la_haine.webp";
import casildaDuet from "../assets/casilda+and+luiz.webp";
import wideFountainLarge from "../assets/wide_shot_fountain_large.jpg";
import wideFountainSmall from "../assets/wide_shot_fountain_small.jpg";
import { PageHeader } from "../components/PageHeader";

const ASSET_LIST = [
  montclairEarlyMusic,
  armideCastingSpell,
  laHaine,
  armide4,
  armide1,
  armide2,
  casildaDuet,
  armide3,
];

export const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8 pb-8 md:gap-12 md:pb-50">
      <img
        src={wideFountainLarge}
        alt=""
        className="h-[calc(100vh - 64px)] hidden w-auto object-cover lg:inline-block"
      />
      <img
        src={wideFountainSmall}
        alt=""
        className="h-[calc(100vh - 64px)] inline-block w-full object-cover lg:hidden"
      />
      <PageHeader>Gallery</PageHeader>
      <div className="flex w-full flex-row flex-wrap justify-center gap-2 px-2 md:gap-8">
        {ASSET_LIST.map((imgSrc) => (
          <img
            key={imgSrc}
            loading="lazy"
            src={imgSrc}
            className="inline-block h-auto w-full object-cover md:h-[40vh] md:w-auto"
          />
        ))}
      </div>
    </div>
  );
};
