import { parseActionCodeURL } from "firebase/auth";
import React from "react";
import { useLoaderData } from "react-router-dom";

const HomeDetails = () => {
  const toy = useLoaderData();
  const { name, image, price, rating, description, email, toyName, quantity } =
    toy;
  console.log(toy);
  return (
    <div className="w-full bg-gray-50">
      <div className="my_container flex justify-center items-center p-20">
        <div className="card w-[800px] bg-base-100 shadow-xl p-8">
          <figure>
            <img className="rounded-md shadow-2xl"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              TOYS!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>name: {toyName}</p>
            <p>price:{price}</p>
            <p>description:{description.slice(0,80)}......</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
