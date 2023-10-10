


import React, { useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShopCard = ({ toy }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTo = () => {
    if (!user) {
      alert("You have to login first to view details");
      navigate("/login");
    }
  };

  return (
    <div className=" rounded-lg overflow-hidden border">
      <div className="relative w-[300px] h-[200px] mx-auto overflow-hidden rounded-lg shadow-xl">
        <img
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
          src={toy?.image}
          alt=""
        />
        <span className="absolute top-2 right-2 px-2 py-1 bg-[#DF437E] text-white rounded-full text-xs font-bold">
          New
        </span>
      </div>
      <p className="font-bold text-center text-gray-300 mt-4 text-lg">{toy.toyName}</p>
      <div className="flex justify-between items-center border-t-2 border-[#e15f5f] pt-4">
        <p className="text-gray-200">Category: {toy?.Category}</p>
        <p className="text-gray-200">Price: ${toy?.price}</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-center items-center">
          <Rating style={{ maxWidth: 80 }} value={toy?.rating} readOnly />
          <span className="text-gray-500">({toy.rating})</span>
        </div>
        <div className="text-center mt-4">
          <Link to={`/homeDetails/${toy?._id}`}>
            <button
              onClick={handleTo}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              View Details{" "}
              <FaLocationArrow className="inline-block ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
