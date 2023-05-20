import React, { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";
import { useNavigate, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const Shop = () => {
  const [activeTab, setActiveTab] = useState("asd");
  const [toys, setToys] = useState([]);

  const handleTabClick = (tabName) => {
    console.log(tabName);
    setActiveTab(tabName);
  };

   const navigation = useNavigation();
   if(navigation.state === 'loading'){
      return <Loader></Loader>
   }

  useEffect(() => {


    fetch(`http://localhost:5000/filter/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  return (
    <div className="w-full bg-[#679B9B]">
      <div className="my_container p-14">
        <h1 className="heading">Shop by category</h1>

        <div className=" flex items-center justify-center my-6 ">
          <button
            onClick={() => handleTabClick("Sports")}
            className={` px-4 py-2 rounded-md border-2   font-bold ${
              activeTab == "Sports" ? "bg-red-500 text-white" : ""
            }`}
          >
            category 1
          </button>

          <button
            onClick={() => handleTabClick("Police")}
            className={` px-4 py-2 rounded-md border-2  font-bold ${
              activeTab == "Police" ? "bg-red-500 text-white" : ""
            }`}
          >
            category 2
          </button>
          <button
            onClick={() => handleTabClick("Regular")}
            className={` px-4 py-2 rounded-md border-2  font-bold ${
              activeTab == "Regular" ? "bg-red-500 text-white" : ""
            }`}
          >
            category 3
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            {
               toys.map(toy=><ShopCard key={toy._id} toy={toy}></ShopCard>)   
            }

        </div>
      </div>
    </div>
  );
};

export default Shop;
