import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className=" pb-20 pt-20 bg-white">
      {/* section heading */}
      <SectionHeading
        heading="Exicting Travel News For You"
        subHeading="Hello world"
      />
      <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-center mt-10">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 places to visit in Australia"
            date="August 20, 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 places to visit in Myanmar"
            date="August 20, 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 places to visit in Thailand"
            date="August 20, 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 places to visit in Singapore"
            date="August 20, 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
