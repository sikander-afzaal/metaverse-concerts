const Features = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-3">
      <FeatureRow
        img="/feature-img.png"
        title="Enjoy on your TV."
        desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      />
      <FeatureRow
        img="/feature-img.png"
        title="Download your shows to watch offline."
        desc="Save your favorites easily and always have something to watch."
        order
      />
      <FeatureRow
        // img="/feature-img.png"
        title="Watch everywhere."
        desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <FeatureRow
        order
        img="/feature-img.png"
        title="Create profiles for kids."
        desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
    </div>
  );
};

export default Features;

const FeatureRow = ({ img, title, desc, order }) => {
  return (
    <div className="flex justify-center border-b-8 border-solid border-[#222] py-[70px] px-5 items-center w-full">
      <div
        className={`flex justify-between w-full max-w-[1100px] items-center lg:gap-0 gap-5  ${
          order ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
        }`}
      >
        <div
          className={`flex justify-start items-center text-center lg:text-left lg:items-start flex-col gap-4`}
        >
          <h4 className="text-white text-[1.625rem] sm:text-[2.5rem] lg:text-[3.125rem] font-medium leading-[1.1]">
            {title}
          </h4>
          <p className="text-white font-normal text-[1.125rem] sm:text-[1.25rem] lg:text-[1.625rem]">
            {desc}
          </p>
        </div>
        <img src={img} className="w-full max-w-[530px] object-contain" alt="" />
      </div>
    </div>
  );
};
