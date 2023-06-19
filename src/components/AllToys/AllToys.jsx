import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigation } from "react-router-dom";
import { BiStreetView } from "react-icons/bi";
import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";

const AllToys = () => {

  
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
     return <Loader></Loader>
  }

  const [searchText, setSearchText] = useState('');
  const {user} = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle('allToys')

  useEffect(()=>{
      fetch('http://localhost:5000/allToys')
      .then(res=>res.json())
      .then(data=>{
            console.log(data);
            setToys(data)
      })
  },[user])

  const handleSearch =()=>{
      fetch(`http://localhost:5000/toysSearch/${searchText}`)
      .then(res=>res.json())
      .then(data=>{
            setToys(data);
      })
  }


  
  



  return (
    <div className=" my-container my-6">
      <h1 className="heading my-10"> All Toys </h1>
      
     <div className="flex items-center justify-center]">
       
     <div className="form-control mx-auto my-10 ">
        <div className="input-group">
          <input
           onChange={(e)=>setSearchText(e.target.value)}

            type="text"
            placeholder="Search toys"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
     </div>

     <div className="overflow-x-auto my_container">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>

              <th>Seller Name</th>
              <th>Toy Name</th>
              <th> Sub Category</th>
              
              <th>Price</th>
              <th>Quantity</th>
             
         
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                 {toy.name}
                </td>
                <td>{toy.toyName}</td>
                <td>{toy.Category}</td>
                
                
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
               
                <td>
                  <Link to={`/viewDetails/${toy?._id}`}>
                    <button className="border-[2px] px-4 rounded-lg border-[#DF437E]">
                      details{" "}
                      <BiStreetView className="inline-block text-yellow-700 ml-2"></BiStreetView>
                    </button>
                  </Link>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllToys;

