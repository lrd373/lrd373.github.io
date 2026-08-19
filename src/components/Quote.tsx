import armideWhiteGown from "../assets/armide-2019/armide_white_gown.webp";

export const Quote = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center lg:flex-row">
      <div className="h-fit w-full lg:h-full lg:w-1/2">
        <img
          src={armideWhiteGown}
          alt=""
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:gap-6 md:p-15 lg:w-1/2">
        <p className="font-secondary text-center text-xl font-medium lg:text-4xl lg:leading-11">
          “The depth of her low tones and fierce declamatory power made her
          failed attempt to make the heroine forget love and return to battle a
          highlight of the performance.”
        </p>
        <p className="font-secondary text-xs font-medium md:text-2xl">
          - South Florida Classical Review
        </p>
      </div>
    </div>
  );
};
