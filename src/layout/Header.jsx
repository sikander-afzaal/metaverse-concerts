const Header = () => {
  return (
    <div className="flex mt-[20px] absolute left-0 top-0 z-40 justify-center items-center  w-full ">
      <div className="flex justify-between items-center gap-3 w-[90%] max-w-[1920px]">
        <h2 className="text-transparent font-bold bg-btnBg text-[40px] bg-clip-text  ">
          METFLIX
        </h2>
        <button className="bg-btnBg cursor-pointer leading-[1] rounded-[4px] text-black w-[84px] h-[34px] text-base border-none">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
