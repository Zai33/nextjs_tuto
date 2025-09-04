import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pb-16 pt-16 bg-white">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {/* first part */}
        <div className=" space-y-5">
          <h1 className=" text-lg font-bold text-gray-700">Company</h1>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            About Us
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Careers
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Blogs
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Gift Cards
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Magazine
          </p>
        </div>
        {/* second part */}
        <div className=" space-y-5">
          <h1 className=" text-lg font-bold text-gray-700">Contact</h1>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Legal Notices
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Privacy Policy
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Terms of Service
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Sitemap
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Magazine
          </p>
        </div>
        {/* thrid part */}
        <div className=" space-y-5">
          <h1 className=" text-lg font-bold text-gray-700">Other Services</h1>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Car hier
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Activity Finder
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Tour List
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Hotel Booking
          </p>
          <p className=" text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900">
            Trvel Agents
          </p>
        </div>
        {/* forth part */}
        <div>
          <h1 className=" text-lg font-bold text-gray-700">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-900 mt-2">
              +95 9755 896 774
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email Address</h1>
            <h1 className="text-base font-bold text-blue-900 mt-2">
              kyawZinWinHtike6@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* button section */}
      <div className=" w-[80%] mx-auto mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm">
        <p className=" text-center md:text-left">
          Copyright © {currentYear} webdev. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <Link
            href="#"
            className=" text-gray-600 hover:text-blue-900 hover:scale-120 duration-200 transition-all"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className=" text-gray-600 hover:text-blue-900 hover:scale-120 duration-200 transition-all"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className=" text-gray-600 hover:text-blue-900 hover:scale-120 duration-200 transition-all"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
