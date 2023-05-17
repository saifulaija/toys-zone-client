import React from "react";
import { MdOutlineToys } from "react-icons/md";
import { GrLocation} from "react-icons/gr";


const Footer = () => {
  return (
    <div className="w-full bg-black">
      <footer className="my-container">
            <div className="flex items-center ">
                 <MdOutlineToys className="text-xl md:text-3xl text-yellow-800"></MdOutlineToys>
                 <h1 className="text-xl md:3xl font-bold uppercase tracking-widest font-serif text-yellow-800">toys zone</h1>
                 
                 <GrLocation className="text-white"></GrLocation>

            </div>

      </footer>
     
    </div>
  );
};

export default Footer;
