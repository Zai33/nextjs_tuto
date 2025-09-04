import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13345e]">
      <div className=" w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content */}
        <div className="">
          <h1 className="text-2xl font-semibold text-white">
            What our customer are saying us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nihil exercitationem nobis neque. Tempora repellendus doloremque
            eaque corporis explicabo. Ullam!
          </p>
          {/* raing */}
          <div className=" mt-6 flex items-center space-x-6">
            <div>
              <p className=" text-2xl font-bold text-white">4.89</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
