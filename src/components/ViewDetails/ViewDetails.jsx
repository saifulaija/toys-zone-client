import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const ViewDetails = () => {
  const toy = useLoaderData();

  const { name, image, price, rating, description, email, toyName, quantity } =
    toy;
  console.log(toy);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (//     <div className=" w-full bg-[#E5E4DF] p-20 ">
//       <h1 className="heading p-8">The details of {toyName}</h1>

//       <div className="bg-[#1d1d1b]  mx-auto text-white md:flex justify-between p-6 md:p-20 rounded-md gap-8 space-y-6 md:space-y-0 items-center w-full md:max-w-[800px]">
//         <div className="w-full md:w-1/2">
//           <img className="w-[400px] shadow-2xl rounded-lg" src={image} alt="" />
//         </div>

//         <div className="w-full md:w-1/2">
//           <p>Toy Name: {toyName}</p>
//           <p>seller: {name}</p>
//           <p>
//             <HiOutlineMail className="inline-block"></HiOutlineMail> {email}{" "}
//           </p>
//           <div className="divider new max-w-full">Toy Zone</div>
//           <p>price:{price}</p>
//           <p>description:{description.slice(0, 80)}</p>
//           <p>Available quantity:{quantity}</p>
//           <div>
//             <p>rating:{rating}</p>
//           </div>
//         </div>
//       </div>
//     </div>

<div className="container mx-auto my-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <img
            className="w-96 h-96 rounded-lg shadow-xl"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">{name}</h2>
          <div className="flex items-center my-2">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarHalf className="text-yellow-500" />
            <BsStar className="text-yellow-500" />
            <span className="ml-2 text-gray-600">4.5 (56 reviews)</span>
          </div>
          <p className="text-xl font-semibold mb-2">${price}</p>
          <p className="text-gray-600 mb-6 text-justify">{description}</p>
          <div className="border-b py-4 my-4">
            <p className="text-lg font-semibold">Product Details</p>
            <p className="mt-2 text-gray-600">Quantity: {quantity}</p>
          </div>
          <button className="bg-[#DF437E] hover:bg-[#6d1839] text-white px-4 py-2 rounded-lg flex items-center">
            <FaCheck className="mr-2" />
            Booked
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
