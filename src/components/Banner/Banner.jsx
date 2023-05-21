import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Banner.css";
import banner from "../../../public/banner.jpg";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="w-full banner">

      <div className="my_container space-y-6 gap-8 p-8 md:p-40 md:flex justify-between items-center ">
        <div
          className="w-full md:w-1/2 md:leading-6 space-y-8 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >

           
          <h1 className="text-2xl font-sans md:text-4xl font-bold uppercase text-white tracking-widest">
            well come to our shop
          </h1>
          <p className="mb-5 text-white">
            Toys are objects designed for play and amusement, often intended for
            children. They come in various forms, such as action figures, dolls,
            board games, puzzles, building blocks, stuffed animals, vehicles,
            and electronic.
          </p>
          <button className=" bg-[#5A4C42]  px-6 py-2 text-yellow-700  rounded-lg animate-bounce uppercase tracking-widest">
            Get Started{" "}
            <AiOutlineShoppingCart className="ml-2 inline-block"></AiOutlineShoppingCart>{" "}
          </button>
        </div>
        <div
          className=" w-full md:w-1/2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className="rounded-2xl shadow-2xl" src={banner} alt="" />
        </div>
      </div>
     </div>
  );
};

export default Banner;


