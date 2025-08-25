import { NAV_LINKS } from "@/constants/constant";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opactity-70 transform transition-all duration-500 z-[1002] w-full h-screen"></div>
      <div className="text-white fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-rose-700 space-y-6 z-[1050] transform transition-all duration-500 delay-300">
        {NAV_LINKS.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
