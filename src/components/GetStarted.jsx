const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col text-center gap-3">
      <p className="text-base sm:text-[1.2rem] text-white ">
        Create a free account with just your email
      </p>
      <div className="flex sm:rounded-md overflow-hidden justify-start sm:flex-row flex-col items-center  w-full max-w-[800px] h-auto sm:h-[70px] sm:gap-0 gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full outline-none sm:rounded-none rounded-md h-full min-h-[50px] bg-white border-none text-base text-black pl-3"
        />
        <button className="px-5 sm:min-w-[245px] flex justify-center items-center gap-1 sm:rounded-none rounded sm:gap-3 bg-btnBg  border-none cursor-pointer text-black h-full text-[1.1rem] min-h-[50px] sm:text-[1.6rem]">
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
  );
};

export default GetStarted;
