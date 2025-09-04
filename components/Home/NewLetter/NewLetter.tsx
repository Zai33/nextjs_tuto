import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const NewLetter = () => {
  return (
    <div className=" pb-20 pt-20 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="w-18 h-18 mt-20 hover:text-blue-700 transition-all duration-200 hover:scale-110 ease-in-out" />
      <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">
        Your Travel Journey Start Here.
      </p>
      <p className=" mt-3 text-xs sm:text-sm">
        Sing up and we&#39;ll send the best deals for you.
      </p>
      {/* scribe */}
      <div className=" w-full">
        <input
          type="text"
          className="px-6 py-3 mt-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block mx-auto"
          placeholder="Say something..."
        />
        <button className="px-6 py-3 mt-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-blue-600 text-white border border-gray-300 rounded-lg block mx-auto hover:bg-blue-800 hover:scale-102 transition-all duration-200 ease-in-out">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
