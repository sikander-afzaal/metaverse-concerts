import { useState } from "react";

const FaqTab = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex border-b-[1px] border-solid border-black  justify-start items-start flex-col w-full gap-[2px]">
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex cursor-pointer bg-faqGray h-[75px] px-6 transition-all duration-500 justify-between items-center gap-5 w-full`}
      >
        <h3 className="text-lg sm:text-[26px] font-normal text-white text-left">
          {question}
        </h3>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className={`w-8 h-8 transition-all ${
            active ? "rotate-45" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <div
        className={`flex justify-start bg-faqGray overflow-hidden transition-all duration-500 items-start px-6  ${
          active ? "max-h-[2000px] pt-6 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-lg sm:text-[26px] text-white  ">{answer}</p>
      </div>
    </div>
  );
};

export default FaqTab;
