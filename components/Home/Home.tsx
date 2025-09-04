"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import NewLetter from "./NewLetter/NewLetter";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 800,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
        mirror: false,
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Home;
