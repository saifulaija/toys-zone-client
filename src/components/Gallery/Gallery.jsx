import React from "react";
import { Zoom } from "react-reveal";
import image1 from "../../../public/gallery1.jpg";
import image2 from "../../../public/gallery2.jpg";
import image3 from "../../../public/gallery3.jpg";
import image4 from "../../../public/gallery4.jpg";
import image5 from "../../../public/gallery5.jpg";
import image6 from "../../../public/gallery6.jpg";
import image7 from "../../../public/gallery7.jpg";
import image8 from "../../../public/gallery8.jpg";
import image9 from "../../../public/gallery9.jpg";

const Gallery = () => {
  return (
    <div className="w-full bg-gray-100 py-10 md:p-20">
      <h1 className="heading mb-10">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
        <Zoom>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-64 object-cover" src={image1} alt="" />
          </div>
        </Zoom>
        <Zoom delay={200}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-96 object-cover" src={image2} alt="" />
          </div>
        </Zoom>
        <Zoom delay={400}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-64 object-cover" src={image3} alt="" />
          </div>
        </Zoom>
        <Zoom>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-96 object-cover" src={image4} alt="" />
          </div>
        </Zoom>
        <Zoom delay={200}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-96 object-cover" src={image5} alt="" />
          </div>
        </Zoom>
        <Zoom delay={400}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-64 object-cover" src={image6} alt="" />
          </div>
        </Zoom>
        <Zoom>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-64 object-cover" src={image7} alt="" />
          </div>
        </Zoom>
        <Zoom delay={200}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-96 object-cover" src={image8} alt="" />
          </div>
        </Zoom>
        <Zoom delay={400}>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="w-full h-64 object-cover" src={image9} alt="" />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Gallery;
