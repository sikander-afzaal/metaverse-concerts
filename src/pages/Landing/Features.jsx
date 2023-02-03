// import { useEffect, useState } from "react";
// import { useIntersectionObserver } from "react-intersection-observer-hook";

const Features = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-3">
      <FeatureRow
        img="/feature-img3.png"
        title="BE ENTERTAINED"
        desc=" Famous artists, hilarious stand-up comedy and electrifying concerts , Checkout out what’s coming up soon"
        btn
      />
      <FeatureRow
        img="/feature-img2.png"
        title="WATCH ANYWHERE"
        desc="Stream unlimited entertainment to your phone, tablet, laptop, and TV."
        order
      />
      <FeatureRow
        img="/feature-img3.png"
        btn
        title="METFLIX MARKETPLACE"
        desc="Buy, sell or trade tickets / shows and show memorabilia Via our Pier to Pier marketplace trading"
      />
      <FeatureRow
        order
        img="/feature-img2.png"
        title="A FULLY IMMERSIVE FUTURE"
        desc="As technology continues to advance, there will be an increasing demand for novel experiences. In response to this trend, Metflix is embracing the challenge by premiering content within the metaverse, a virtual reality space where users can interact and engage with various forms of entertainment. This includes world premieres from artists in various genres, such as music, comedy, and dance, among others. The utilisation of the metaverse as a platform for premiering content allows for a unique and immersive experience for the audience, catering to the growing need for new and exciting forms of entertainment."
      />
    </div>
  );
};

export default Features;

const FeatureRow = ({ img, title, desc, order, btn }) => {
  // const [paused, setPaused] = useState(true);
  // const [ref, { entry }] = useIntersectionObserver();
  // const isVisible = entry && entry.isIntersecting && paused;
  // useEffect(() => {
  //   if (isVisible) {
  //     setPaused(false);
  //     const elem = document.querySelector(`#${title.split(" ")[0]}`);
  //     elem.play();
  //   }
  // }, [isVisible]);
  return (
    <div className="flex justify-center border-b-8 border-solid border-[#222] py-[70px] px-5 items-center w-full">
      <div
        className={`flex justify-between w-full max-w-[1100px] items-center lg:gap-10 gap-5  ${
          order ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
        }`}
      >
        <div
          className={`flex  justify-start items-center text-center lg:text-left lg:items-start flex-col gap-4`}
        >
          <h4 className="text-white text-[1.625rem] sm:text-[2.5rem] lg:text-[2.4rem] font-medium leading-[1.1]">
            {title}
          </h4>
          <p className="text-white font-normal text-[1.125rem] sm:text-[1.25rem] lg:text-[1.3rem] leading-[1.4]">
            {desc}
          </p>
          {btn && (
            <button className="px-5 sm:min-w-[200px] flex justify-center items-center gap-1 rounded-md sm:gap-3 bg-btnBg  border-none cursor-pointer text-black h-full text-[1.1rem] min-h-[50px] sm:text-[1.3rem]">
              Learn More
            </button>
          )}
        </div>
        {img && (
          // <video
          //   ref={ref}
          //   id={title.split(" ")[0]}
          //   // loop
          //   // autoPlay
          //   src={video}
          //   className="w-full sm:min-w-[530px] max-w-[530px] object-contain"
          //   playsInline
          //   muted
          //   alt=""
          // />
          <img
            src={img}
            alt=""
            className="w-full sm:min-w-[530px] max-w-[530px] object-contain"
          />
        )}
      </div>
    </div>
  );
};
