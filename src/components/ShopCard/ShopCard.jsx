import React, { useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
FaLocationArrow;

const ShopCard = ({ toy }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleTo = () => {
    if (!user) {
      alert("You have to login first to view details");
      navigate("/login");
    }
  };

  return (
    <div className=" shadow-xl  rounded-lg md:font-mono outline-none bg-[#F7F1E5] ">
      <div className=" p-4 flex items-center justify-center ">
        <img
          className="w-[300px] h-[200px] hover:scale-110 duration-100  rounded-lg shadow-xl"
          src={toy?.image}
          alt=""
        />
      </div>
      <p className="font-bold text-center py-4">Toys Name: {toy.toyName}</p>

      <div className=" text-gray-700">
        <div className=" flex justify-evenly items-center border-[#e15f5f]">
          <p>category:{toy?.Category}</p>
          <p>price: ${toy?.price}</p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <Rating style={{ maxWidth: 80 }} value={toy?.rating} readOnly />
            <span>({toy.rating})</span>
          </div>
          <div className="text-center py-2">
            <Link to={`/homeDetails/${toy?._id}`}>
              <button onClick={handleTo} className=" outline-none text-gray-500 border-[#DF437E]  border-[2px]   hover:bg-opacity-60  px-2 rounded-lg   shadow-2xl">
                {" "}
                View details{" "}
                <FaLocationArrow className="inline-block"></FaLocationArrow>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
