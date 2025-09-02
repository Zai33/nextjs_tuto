"use client";
import { destinationData } from "@/data/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const DestiationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={500}
      keyBoardControl={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {destinationData.map((item) => {
        return (
          <div key={item.id} className="m-3">
            <div className=" relative h-[400px]">
              {/* overlay */}
              <div className=" absolute inset-0 bg-black opacity-100 rounded-lg ">
                {/* image */}
                <Image
                  src={item.image}
                  alt={item.country}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg shadow-md shadow-sky-400"
                />
              </div>
            </div>
            {/* test content */}
            <h1 className=" text-lg text-gray-700 font-semibold mt-4">{item.country}</h1>
            <p className=" text-sm text-gray-700">{item.travelers} Travellers</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestiationSlider;
