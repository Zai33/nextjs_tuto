"use client";
import { NAV_LINKS } from "@/constants/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${
        navBg ? " bg-blue-900 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className=" flex items-center justify-between h-full w-[90%] mx-auto xl:w-[80%]">
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className=" w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center">
            <TbAirBalloon className=" text-white w-6 h-6" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>
        {/* nav link */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => {
            return (
              <Link href={link.url} key={link.id} className="group">
                <p
                  className="
            relative text-white text-base font-medium w-fit block 
            after:block after:content-[''] after:absolute after:h-[3px] 
            after:bg-yellow-300 after:w-full after:scale-x-0 
            group-hover:after:scale-x-100 
            after:transition after:duration-300 after:origin-right
          "
                >
                  {link.title}
                </p>
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className=" text-white w-8 h-8 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
