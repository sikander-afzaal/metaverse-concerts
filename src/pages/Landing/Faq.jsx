import FaqTab from "../../components/FaqTab";
import GetStarted from "../../components/GetStarted";

const Faq = () => {
  return (
    <div className="flex py-[70px] border-b-8 border-solid border-[#222] justify-start items-center flex-col w-full ">
      <div className="flex justify-center mb-16 items-center flex-col gap-1 w-full max-w-[815px]">
        <h2 className="text-[1.625rem] text-center sm:text-[3.125rem] mb-12 font-medium text-white leading-[1.1]">
          Frequently Asked Questions
        </h2>
        <FaqTab
          question="What is Metflix?"
          answer="Metflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        />
        <FaqTab
          question="What is Metflix?"
          answer="Metflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        />
        <FaqTab
          question="What is Metflix?"
          answer="Metflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        />
        <FaqTab
          question="What is Metflix?"
          answer="Metflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        />
      </div>
      <GetStarted />
    </div>
  );
};

export default Faq;
