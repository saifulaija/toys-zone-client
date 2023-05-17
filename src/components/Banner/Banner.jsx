import React from 'react';
import image1 from '../../../public/banner-1.jpg'
import image2 from '../../../public/banner-2.jpg'
import {AiOutlineShoppingCart } from "react-icons/ai";
import ReactTyped from 'react-typed';



const Banner = () => {
      return (
            <div>

<div className="hero min-h-screen" style={{ backgroundImage: `url("../../../public/banner-1.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg leading-6">
      <h1 className="mb-5 text-2xl tracking-wider font-sans text-white md:text-4xl uppercase font-bold">well come To <span className='text-yellow-800'>Toys Zone</span> for your baby</h1>
      <p className='text-3xl font-semibold text-red-950 space-y-4'>Toys Zone Sells </p>
      <ReactTyped className='text-teal-900 font-extrabold tracking-widest text-2xl' strings={['POLICE TOY, TRUCK, REACHING CAR', 'FANTASTIC TOYS']} typeSpeed={180} backDelay={150} loop></ReactTyped>
      <p className="mb-5">Toys are objects designed for play and amusement, often intended for children. They come in various forms, such as action figures, dolls, board games, puzzles, building blocks, stuffed animals, vehicles, and electronic.</p>
      <button className=" bg-[#008eaa]  px-6 py-2  rounded-lg animate-bounce uppercase tracking-widest">Get Started <AiOutlineShoppingCart className='ml-2 inline-block'></AiOutlineShoppingCart> </button>
    </div>
  </div>
</div>
                  
            </div>
      );
};

export default Banner;