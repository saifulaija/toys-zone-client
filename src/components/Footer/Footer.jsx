import React from "react";
import { MdOutlineToys,MdEmail } from "react-icons/md";
import { GrLocation} from "react-icons/gr";
import { AiOutlinePhone} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa";
import './Footer.css'


const Footer = () => {
  return (
    <div className="w-ful bg-[#161D32] p-6 md:p-6 h-[330px]">
      <footer className="my-container  mt-4">
            <div className=" text-white  my_container space-y-2  md:flex items-center justify-between ">
                <div>
                <div className="flex">
                <MdOutlineToys className="text-xl md:text-3xl text-yellow-700"></MdOutlineToys>
                 <h1 className="text-xl md:3xl font-bold uppercase tracking-widest font-serif text-yellow-800">toys zone</h1>
                </div>
                
                 
                <div className=" space-y-2">
                  <p><GrLocation className="inline-block text-white"></GrLocation> Dhanmondi Dhaka-122</p>
                  <p><MdEmail className="inline-block"></MdEmail> sobujdhaka@gmail.com</p>
                  <p><AiOutlinePhone className="inline-block"></AiOutlinePhone> 01875125825</p>
                  
                </div>
                </div>

               <div>
                <p>About Us</p>
                <p>Contact</p>
                <p>Our Mission</p>
                <p>Customer Care</p>
               </div>
                <div className="flex gap-4">
                  <p><FaFacebook></FaFacebook></p>
                  <p><FaTwitter></FaTwitter></p>
                  <p><FaInstagram></FaInstagram></p>
                  <p><FaLinkedinIn></FaLinkedinIn></p>

                </div>

            </div>
           <div className=" mt-4 md:mt-10 text-white">
            <div className="h-1 my_container bg-yellow-700"></div>
           
            <p className="text-center">@copyright - 2023 || All Right Reserved by TOy Zone</p>
           </div>

      </footer>
     
    </div>
  );
};

export default Footer;
