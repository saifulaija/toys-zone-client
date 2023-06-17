import React from "react";
import ceo from "../../../public/ceo.jpg";
import subceo from "../../../public/subceo.jpg";
import { CiViewColumn } from "react-icons/ci";

const About = () => {
  return (
    <div className="w-full bg-white p-10 md:p-16 ">
      <div className="  my_container rounded-2xl shadow-2xl">
        <h1 className="heading my-12">About Us</h1>

        <div className="  md:p-16 text-gray-600 gap-16 md:flex justify-between items-center">
          <div
            className=" w-full md:w-1/2 relative "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="rounded-lg" src={ceo} alt="" />
            <img
              className="absolute ml-12 md:ml-36 rounded-lg -mt-20 md:-mt-32 shadow-2xl"
              src={subceo}
              alt=""
            />
          </div>

          <div className="divider lg:divider-horizontal new">toy</div>
          <div
            className="w-full md:w-1/2 space-y-8"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl mt-28 font-bold uppercase tracking-widest underline-offset-2">
              Our Mission
            </h1>
            <p>
              My mission as an AI language model is to assist and provide
              helpful and accurate information to users like you. I strive to
              answer questions, engage in conversation, and assist with various
              topics to the best of my abilities. If you have any specific
              questions or need assistance with a particular subject, feel free
              to ask!
            </p>
            <button className="primary-button bg-[#5A4C42] text-white">
              Explore More{" "}
              <CiViewColumn className="inline-block"></CiViewColumn>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
