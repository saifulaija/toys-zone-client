import React from "react";
import { BsFillArrowRightCircleFill} from "react-icons/bs";

const ShopCard = ({ toy }) => {
  return (
    <div>
      <div className="card card-side bg-[#bda08b] p-4 text-white border-dashed hover:scale-105 duration-200 ">
        <figure>
          <img className="shadow-2xl rounded-lg" src={toy.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.Category} Car</h2>
          <p>price: {toy.price}</p>
           <p>details: {toy.description.slice(0,80)}...</p>
         
          <div className="divider divide-red-500">Toys Zone</div>
          <div>
            <button className="primary-button">details <BsFillArrowRightCircleFill className="inline-block"></BsFillArrowRightCircleFill> </button>
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default ShopCard;
