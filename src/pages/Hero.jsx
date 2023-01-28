const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center border-b-8 border-solid border-[#222] flex-col relative isolate min-h-max pt-[100px] pb-[100px] sm:min-h-[733px]">
      <div className="w-full h-full absolute left-0 top-0 pointer-events-none -z-10">
        <div className="w-full bg-[rgba(0,0,0,.4)] h-full absolute top-0 left-0 z-10 bg-overlayHero"></div>
        <img src="/hero-bg.jpg" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-center items-center flex-col gap-6 max-w-[950px] px-5 w-full">
        <h2 className="text-[2rem] sm:text-[4rem] leading-[1.1] text-center text-white font-medium max-w-[800px]">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="text-[1.2rem] sm:text-[1.625rem] text-white font-normal max-w-[800px]">
          Watch anywhere. Cancel anytime.
        </h3>
        <div className="flex justify-center items-center w-full flex-col text-center gap-3">
          <p className="text-base sm:text-[1.2rem] text-white ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-start sm:flex-row flex-col items-center  w-full max-w-[800px] h-auto sm:h-[70px] sm:gap-0 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none h-full min-h-[50px] bg-white border-none text-base text-black pl-3"
            />
            <button className="px-5 sm:min-w-[245px] flex justify-center items-center gap-1 sm:rounded-none rounded sm:gap-3 bg-red hover:bg-hoverRed border-none cursor-pointer text-white h-full text-[1.1rem] min-h-[50px] sm:text-[1.875rem]">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 sm:w-6 h-4 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
