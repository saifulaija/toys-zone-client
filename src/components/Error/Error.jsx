import React from "react";
import error from "../../../public/error3.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my_container flex items-center justify-center">
     <div>
     <img className="md:w-[500px]" src={error} alt="" />
      <Link to='/'>
        {" "}
        <button className="primary-button ml-28 bg-teal-500">Back to home</button>
      </Link>
     </div>
    </div>
  );
};

export default Error;
