import { PageHeader } from "../components/PageHeader";

export const Media = () => {
  // YouTube aspect ratio: 560/315 = 1.777777
  const iframeStyle =
    "inline-block w-screen h-[calc(100vw*0.5625)] md:w-[calc(50vw-48px)] object-cover md:h-[calc((50vw-48px)*0.5625)]";
  return (
    <div className="flex flex-col items-center justify-start gap-8 px-2 pt-32 pb-8 md:gap-12 md:py-50">
      <PageHeader>Media</PageHeader>
      <div className="flex w-full flex-row flex-wrap justify-center gap-2 md:gap-8">
        {/* You Are All I See */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/hq9oQw9osR0?si=C4nm81vpZ9mUKAsl&amp;start=93"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {/* When I Look At You */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/N7uy2a-ZnHE?si=d7n_isub3kaX9Shf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {/* Padre Germani */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/suLZBlgNpj0?si=LlEPUylOfL11jSRs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {/* Qui sedes – Vivaldi Gloria */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/kJ3Nn3tkj_c?si=DH3S-kOxCiXEILbV&amp;start=24"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {/* Laudamus Te – Vivaldi Gloria */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/Wgv4nxbN47Q?si=iCMsSJ389rNL_Bv9&amp;start=17"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {/* Expectans – Saint-Saëns Christmas Oratorio */}
        <iframe
          className={iframeStyle}
          src="https://www.youtube.com/embed/0xlYKUNegc8?si=PBqbHaMU3qAllMfQ&amp;start=15"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
