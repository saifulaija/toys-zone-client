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
import "./Banner.css";
import img1 from "../../../public/banner.jpg";
import img2 from "../../../public/baby1.jpg";
import img3 from "../../../public/baby2.jpg";
import img4 from "../../../public/baby3.jpg";

import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="w-full banner bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-24">
      <div className="my_container md:flex justify-between items-center space-y-6 md:space-y-0 p-8 md:p-40">
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-2xl md:text-6xl font-serif font-bold">
            Welcome to Our Shop
          </h1>
          <p className="text-lg leading-relaxed font-serif ">
            Toys are objects designed for play and amusement, often intended for
            children. They come in various forms, such as action figures, dolls,
            board games, puzzles, building blocks, stuffed animals, vehicles,
            and electronics.
          </p>
          <button className="bg-[#DF437E] hover:bg-blue-600 px-8 py-4 text-white font-semibold rounded-lg uppercase tracking-wider">
            Get Started{" "}
            <AiOutlineShoppingCart className="ml-2 inline-block"></AiOutlineShoppingCart>{" "}
          </button>
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <Marquee
            pauseOnHover
            direction="right"
            speed={30}
            gradient={false}
            className="rounded-2xl shadow-2xl"
          >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Banner;
