import React from "react";
import { MdOutlineToys,MdEmail } from "react-icons/md";
import { GrLocation} from "react-icons/gr";
import { AiOutlinePhone} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa";
import './Footer.css'


const Footer = () => {
  return (
    <div className="w-ful image-banner p-10">
      <footer className="my-container  mt-12">
            <div className=" text-white space-y-6  md:flex items-center justify-between ">
                <div>
                <div className="flex">
                <MdOutlineToys className="text-xl md:text-3xl text-yellow-700"></MdOutlineToys>
                 <h1 className="text-xl md:3xl font-bold uppercase tracking-widest font-serif text-yellow-800">toys zone</h1>
                </div>
                
                 
                <div className="">
                  <p><GrLocation className="inline-block"></GrLocation> Dhanmondi Dhaka-122</p>
                  <p><MdEmail className="inline-block"></MdEmail> sobujdhaka@gmail.com</p>
                  <p><AiOutlinePhone className="inline-block"></AiOutlinePhone> 01875125825</p>
                  
                </div>
                </div>


                <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
                <div className="flex gap-4">
                  <p><FaFacebook></FaFacebook></p>
                  <p><FaTwitter></FaTwitter></p>
                  <p><FaInstagram></FaInstagram></p>
                  <p><FaLinkedinIn></FaLinkedinIn></p>

                </div>

            </div>
           <div className="mt-32 text-white">
            <div className="h-2 my_container bg-yellow-700"></div>
           <div className="divider text-yellow-600">Toys Zone</div>
            <p className="text-center">@copyright - 2023 || All Right Reserved by TOy Zone</p>
           </div>

      </footer>
     
    </div>
  );
};

export default Footer;
