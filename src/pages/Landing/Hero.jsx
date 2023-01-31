import GetStarted from "../../components/GetStarted";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center border-b-8 border-solid border-[#222] flex-col relative isolate  min-h-[650px] pt-[70px] pb-[0px] sm:min-h-[733px]">
      <div className="w-full h-full absolute left-0 top-0 pointer-events-none -z-10">
        <div className="w-full bg-[rgba(0,0,0,.4)] h-full absolute top-0 left-0 z-10 bg-overlayHero"></div>
        <video
          src="/hero-desk.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-6 max-w-[950px] px-5 w-full">
        <h2 className="text-[2rem] sm:text-[4rem] leading-[1.1] text-center text-white font-medium max-w-[800px]">
          Experience the ultimate in metaverse entertainment
        </h2>
        <h3 className="text-[1.2rem] sm:text-[1.625rem] text-white font-normal max-w-[800px]">
          Watch anywhere. Cancel anytime.
        </h3>
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
