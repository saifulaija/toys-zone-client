// import React from "react";
// import { MdOutlineToys, MdEmail } from "react-icons/md";
// import { GrLocation } from "react-icons/gr";
// import { AiOutlinePhone } from "react-icons/ai";
// import {
//   FaFacebook,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="w-ful bg-[#1d1d1b] p-6 font-mono md:p-6 h-[340px]">
//       <footer className="my-container  mt-4">
//         <div className=" text-neutral-600 font-mono  my_container space-y-2  md:flex items-center justify-between ">
//           <div>
//             <div className="flex">
//               <MdOutlineToys className="text-xl md:text-3xl text-[#DF437E]"></MdOutlineToys>
//               <h1 className="text-xl md:3xl font-bold uppercase tracking-widest font-serif text-[#DF437E]">
//                 toys zone
//               </h1>
//             </div>

//             <div className=" space-y-2">
//               <p>
//                 <GrLocation className="inline-block text-white"></GrLocation>{" "}
//                 Dhanmondi Dhaka-122
//               </p>
//               <p>
//                 <MdEmail className="inline-block"></MdEmail>{" "}
//                 sobujdhaka@gmail.com
//               </p>
//               <p>
//                 <AiOutlinePhone className="inline-block"></AiOutlinePhone>{" "}
//                 01875125825
//               </p>
//             </div>
//           </div>

//           <div>
//             <p>About Us</p>
//             <p>Contact</p>
//             <p>Our Mission</p>
//             <p>Customer Care</p>
//           </div>
//           <div className="flex text-[#DF437E] gap-4">
//             <p>
//               <FaFacebook></FaFacebook>
//             </p>
//             <p>
//               <FaTwitter></FaTwitter>
//             </p>
//             <p>
//               <FaInstagram></FaInstagram>
//             </p>
//             <p>
//               <FaLinkedinIn></FaLinkedinIn>
//             </p>
//           </div>
//         </div>
//         <div className=" mt-6 md:mt-10 text-white">
//           <div className="h-1 my_container bg-[#DF437E]"></div>

//           <p className="text-center text-gray-600">
//             @copyright - 2023 || All Right Reserved by TOy Zone
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;




import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineToys, MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full border border-t-[1px] p-6 font-serif md:p-6 h-[340px]">
      <footer className="my-container mt-4">
        <div className="text-white font-serif my_container space-y-2 md:flex items-center justify-between">
          <div>
            <div className="flex items-center">
            <img src="https://i.ibb.co/64gswsz/toylogo.png" alt="" />
              <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-300">
                Toys Zone
              </h1>
            </div>

            <div className="space-y-2">
              <p>
                <GrLocation className="inline-block text-white" /> Dhanmondi Dhaka-122
              </p>
              <p>
                <MdEmail className="inline-block" /> sobujdhaka@gmail.com
              </p>
              <p>
                <AiOutlinePhone className="inline-block" /> 01875125825
              </p>
            </div>
          </div>

          <div>
            <p>About Us</p>
            <p>Contact</p>
            <p>Our Mission</p>
            <p>Customer Care</p>
          </div>
          <div className="flex text-white gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="mt-6 md:mt-10 text-white">
          <div className="h-1 my_container bg-gray-200" />

          <p className="text-center text-gray-200">
            &copy; {new Date().getFullYear()} || All Rights Reserved by Toy Zone
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

