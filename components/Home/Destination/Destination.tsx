import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import DestiationSlider from "./DestiationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20 bg-white">
      {/* section heading */}
      <SectionHeading
        heading="Exploring Popular Destination"
        subHeading="hello world"
      />
      <div className=" mt-14 w-[80%] mx-auto">
        {/* slider */}
        <DestiationSlider />
      </div>
    </div>
  );
};

export default Destination;
