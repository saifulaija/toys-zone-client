import { parseActionCodeURL } from "firebase/auth";
import React from "react";
import { useLoaderData } from "react-router-dom";

const HomeDetails = () => {
  const toy = useLoaderData();
  const { name, image, price, rating, description, email, toyName, quantity } =
    toy;
  console.log(toy);
  return (
    // <div className="w-full bg-green-200">
    //   <div className="my_container flex justify-center items-center p-20">
    //     <div className="card w-[800px] bg-base-100 shadow-xl p-8">
    //       <figure>
    //         <img className="rounded-md shadow-2xl"
    //           src={image}
    //           alt="Shoes"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <h2 className="card-title">
    //           TOYS!
    //           <div className="badge badge-secondary">NEW</div>
    //         </h2>
    //         <p>name: {toyName}</p>
    //         <p>price:{price}</p>
    //         <p>description:{description.slice(0,80)}......</p>
    //         <div className="card-actions justify-end">
    //           <div className="badge badge-outline">Fashion</div>
    //           <div className="badge badge-outline">Products</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className=" max-w-4xl mx-auto font-serif py-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="h-60 rounded-t-lg w-full object-cover object-center" src={image} alt="Toy" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Product Owner:{name}</h2>
      <p className="text-gray-600 mb-2">Toy Name: {toyName}</p>
      <p className="text-gray-600 mb-2 text-justify">Description: {description}</p>
      <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
      <p className="text-gray-600 mb-2">Rating: {rating}</p>
      <p className="text-gray-800">${price}</p>
      <button
        
        className="mt-4 px-6 text-white py-2 bg-[#64273e] text-white rounded hover:bg-[#DF437E] focus:outline-none"
      >
        Select
      </button>
    </div>
  </div>
  );
};

export default HomeDetails;
