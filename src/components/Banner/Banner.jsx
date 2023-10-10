// import React from "react";

// import { AiOutlineShoppingCart } from "react-icons/ai";

// import "./Banner.css";
// import banner from "../../../public/banner.jpg";
// import Marquee from "react-fast-marquee";

// const Banner = () => {
//   return (
//     <div className="w-full banner">

//       <div className="my_container space-y-6 gap-8 p-8 md:p-40 md:flex justify-between items-center ">
//         <div
//           className="w-full md:w-1/2 md:leading-6 space-y-8 "
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//         >

           
//           <h1 className="text-2xl font-sans md:text-4xl font-bold uppercase text-white tracking-widest">
//             well come to our shop
//           </h1>
//           <p className="mb-5 text-white">
//             Toys are objects designed for play and amusement, often intended for
//             children. They come in various forms, such as action figures, dolls,
//             board games, puzzles, building blocks, stuffed animals, vehicles,
//             and electronic.
//           </p>
//           <button className=" bg-[#DF437E]  px-6 py-2 text-neutral-200  rounded-lg animate-bounce uppercase tracking-widest">
//             Get Started{" "}
//             <AiOutlineShoppingCart className="ml-2 inline-block"></AiOutlineShoppingCart>{" "}
//           </button>
//         </div>
//         <div
//           className=" w-full md:w-1/2"
//           data-aos="fade-down"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//         >
//           <img className="rounded-2xl shadow-2xl" src={banner} alt="" />
//         </div>
//       </div>
//      </div>
//   );
// };

// export default Banner;



import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";



const Banner = () => {
  return (
    <div className="w-full  p-4">
      <div className="my_container md:flex justify-between items-center space-y-6 md:space-y-0 p-8 md:p-40">
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-2xl md:text-6xl font-serif font-bold text-slate-50">
            Welcome to Our Shop
          </h1>
          <p className="text-lg leading-relaxed font-serif text-white ">
            Toys are objects designed for play and amusement, often intended for
            children. They come in various forms, such as action figures, dolls,
            board games, puzzles, building blocks, stuffed animals, vehicles,
            and electronics.
          </p>
          <button  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
            Get Started{" "}
            <AiOutlineShoppingCart className="ml-2 inline-block"></AiOutlineShoppingCart>{" "}
          </button>
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <img src="https://i.ibb.co/yszyV21/shine-mother-and-daughter-with-toys-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
